import * as React from 'react'
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
  X,
} from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { EmptyState } from '@/components/feedback/empty-state'
import { ErrorState } from '@/components/feedback/error-state'
import { DataTableSkeleton } from './data-table-skeleton'
import { cn } from '@/lib/utils'

export type SortDirection = 'asc' | 'desc' | null

export interface DataTableColumn<TData> {
  id: string
  header: React.ReactNode | ((props: { column: DataTableColumn<TData> }) => React.ReactNode)
  accessorKey?: keyof TData
  accessorFn?: (row: TData) => unknown
  cell?: (props: { row: TData; value: unknown; index: number }) => React.ReactNode
  sortable?: boolean
  className?: string
  headerClassName?: string
  align?: 'left' | 'center' | 'right'
}

export interface DataTableProps<TData> {
  columns: DataTableColumn<TData>[]
  data: TData[]
  keyExtractor: (row: TData, index: number) => string
  isLoading?: boolean
  isError?: boolean
  errorMessage?: string
  onRetry?: () => void
  emptyTitle?: string
  emptyDescription?: string
  emptyAction?: React.ReactNode
  searchable?: boolean
  searchPlaceholder?: string
  searchFilterFn?: (row: TData, query: string) => boolean
  pageSize?: number
  pageSizeOptions?: number[]
  enableRowSelection?: boolean
  selectedKeys?: string[]
  onSelectionChange?: (selectedKeys: string[], selectedRows: TData[]) => void
  rowActions?: (row: TData) => React.ReactNode
  toolbarActions?: React.ReactNode
  title?: string
  description?: string
  className?: string
}

export function DataTable<TData>({
  columns,
  data,
  keyExtractor,
  isLoading = false,
  isError = false,
  errorMessage = 'Failed to load table records. Please retry.',
  onRetry,
  emptyTitle = 'No records found',
  emptyDescription = 'There are currently no items matching your criteria in this view.',
  emptyAction,
  searchable = true,
  searchPlaceholder = 'Search records…',
  searchFilterFn,
  pageSize: initialPageSize = 10,
  pageSizeOptions = [10, 20, 50, 100],
  enableRowSelection = false,
  selectedKeys: externalSelectedKeys,
  onSelectionChange,
  rowActions,
  toolbarActions,
  title,
  description,
  className,
}: DataTableProps<TData>) {
  const [internalSelectedKeys, setInternalSelectedKeys] = React.useState<string[]>([])
  const [searchQuery, setSearchQuery] = React.useState('')
  const [sortColumnId, setSortColumnId] = React.useState<string | null>(null)
  const [sortDirection, setSortDirection] = React.useState<SortDirection>(null)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [pageSize, setPageSize] = React.useState(initialPageSize)

  const selectedKeys = externalSelectedKeys ?? internalSelectedKeys

  const setSelectedKeys = React.useCallback(
    (newKeys: string[]) => {
      if (externalSelectedKeys === undefined) {
        setInternalSelectedKeys(newKeys)
      }
      if (onSelectionChange) {
        const keyMap = new Set(newKeys)
        const selectedRows = data.filter((row, idx) => keyMap.has(keyExtractor(row, idx)))
        onSelectionChange(newKeys, selectedRows)
      }
    },
    [externalSelectedKeys, onSelectionChange, data, keyExtractor],
  )

  // Filter
  const filteredData = React.useMemo(() => {
    if (!searchQuery.trim()) return data
    const query = searchQuery.toLowerCase().trim()

    if (searchFilterFn) {
      return data.filter((row) => searchFilterFn(row, query))
    }

    return data.filter((row) => {
      return Object.values(row as Record<string, unknown>).some((val) => {
        if (val === null || val === undefined) return false
        return String(val).toLowerCase().includes(query)
      })
    })
  }, [data, searchQuery, searchFilterFn])

  // Sort
  const sortedData = React.useMemo(() => {
    if (!sortColumnId || !sortDirection) return filteredData

    const column = columns.find((c) => c.id === sortColumnId)
    if (!column) return filteredData

    return [...filteredData].sort((a, b) => {
      const getVal = (row: TData) => {
        if (column.accessorFn) return column.accessorFn(row)
        if (column.accessorKey) return row[column.accessorKey]
        return null
      }

      const aVal = getVal(a)
      const bVal = getVal(b)

      if (aVal === bVal) return 0
      if (aVal === null || aVal === undefined) return 1
      if (bVal === null || bVal === undefined) return -1

      let comparison: number
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        comparison = aVal - bVal
      } else if (aVal instanceof Date && bVal instanceof Date) {
        comparison = aVal.getTime() - bVal.getTime()
      } else {
        comparison = String(aVal).localeCompare(String(bVal))
      }

      return sortDirection === 'asc' ? comparison : -comparison
    })
  }, [filteredData, sortColumnId, sortDirection, columns])

  // Pagination
  const totalPages = Math.max(1, Math.ceil(sortedData.length / pageSize))
  const safeCurrentPage = Math.min(currentPage, totalPages)
  const paginatedData = React.useMemo(() => {
    const start = (safeCurrentPage - 1) * pageSize
    return sortedData.slice(start, start + pageSize)
  }, [sortedData, safeCurrentPage, pageSize])

  // Handle sort click
  const handleSort = (columnId: string) => {
    if (sortColumnId !== columnId) {
      setSortColumnId(columnId)
      setSortDirection('asc')
    } else if (sortDirection === 'asc') {
      setSortDirection('desc')
    } else if (sortDirection === 'desc') {
      setSortColumnId(null)
      setSortDirection(null)
    }
  }

  // Row selection
  const isAllPageSelected =
    paginatedData.length > 0 &&
    paginatedData.every((row, idx) => selectedKeys.includes(keyExtractor(row, idx)))

  const isSomePageSelected =
    paginatedData.some((row, idx) => selectedKeys.includes(keyExtractor(row, idx))) &&
    !isAllPageSelected

  const handleSelectAllPage = (checked: boolean) => {
    const pageKeys = paginatedData.map((row, idx) => keyExtractor(row, idx))
    if (checked) {
      const merged = Array.from(new Set([...selectedKeys, ...pageKeys]))
      setSelectedKeys(merged)
    } else {
      const filtered = selectedKeys.filter((k) => !pageKeys.includes(k))
      setSelectedKeys(filtered)
    }
  }

  const handleSelectRow = (key: string, checked: boolean) => {
    if (checked) {
      setSelectedKeys([...selectedKeys, key])
    } else {
      setSelectedKeys(selectedKeys.filter((k) => k !== key))
    }
  }

  if (isLoading) {
    return (
      <div className={cn('space-y-4', className)}>
        {(title || description || searchable || toolbarActions) && (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              {title && <h3 className="text-h4 font-semibold">{title}</h3>}
              {description && (
                <p className="text-muted-foreground text-sm">{description}</p>
              )}
            </div>
          </div>
        )}
        <DataTableSkeleton columns={columns.length + (enableRowSelection ? 1 : 0)} />
      </div>
    )
  }

  if (isError) {
    return (
      <div className={cn('space-y-4', className)}>
        <ErrorState
          title="Unable to display data table"
          description={errorMessage}
          onRetry={onRetry}
        />
      </div>
    )
  }

  return (
    <div className={cn('space-y-4', className)}>
      {/* Header & Controls Toolbar */}
      {(title || description || searchable || toolbarActions || selectedKeys.length > 0) && (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {title && <h3 className="text-h4 font-semibold">{title}</h3>}
            {description && (
              <p className="text-muted-foreground text-sm">{description}</p>
            )}
            {enableRowSelection && selectedKeys.length > 0 && (
              <p className="text-primary text-xs font-medium mt-1">
                {selectedKeys.length} {selectedKeys.length === 1 ? 'row' : 'rows'} selected
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {searchable && (
              <div className="relative min-w-[220px] max-w-sm flex-1">
                <Search className="text-muted-foreground pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2" />
                <Input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setCurrentPage(1)
                  }}
                  placeholder={searchPlaceholder}
                  className="pl-8 pr-8 text-sm h-9"
                  aria-label="Filter records"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="text-muted-foreground hover:text-foreground absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded-full"
                    aria-label="Clear filter"
                  >
                    <X className="size-3.5" />
                  </button>
                )}
              </div>
            )}
            {toolbarActions}
          </div>
        </div>
      )}

      {/* Table Container */}
      <div className="border-border bg-card overflow-hidden rounded-xl border shadow-xs">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-muted/40">
              <TableRow className="hover:bg-transparent">
                {enableRowSelection && (
                  <TableHead className="w-[44px] px-3">
                    <Checkbox
                      checked={isAllPageSelected ? true : isSomePageSelected ? 'indeterminate' : false}
                      onCheckedChange={(checked) => handleSelectAllPage(checked === true)}
                      aria-label="Select all rows on current page"
                    />
                  </TableHead>
                )}
                {columns.map((col) => {
                  const isSorted = sortColumnId === col.id
                  const isSortable = col.sortable ?? false

                  return (
                    <TableHead
                      key={col.id}
                      className={cn(
                        'text-xs font-semibold text-muted-foreground whitespace-nowrap',
                        col.align === 'center' && 'text-center',
                        col.align === 'right' && 'text-right',
                        col.headerClassName,
                      )}
                    >
                      {isSortable ? (
                        <button
                          type="button"
                          onClick={() => handleSort(col.id)}
                          className={cn(
                            'inline-flex items-center gap-1.5 font-semibold transition-colors hover:text-foreground',
                            isSorted && 'text-foreground',
                          )}
                          aria-label={`Sort by ${col.id}`}
                        >
                          <span>
                            {typeof col.header === 'function'
                              ? col.header({ column: col })
                              : col.header}
                          </span>
                          {isSorted ? (
                            sortDirection === 'asc' ? (
                              <ArrowUp className="size-3.5 text-primary" />
                            ) : (
                              <ArrowDown className="size-3.5 text-primary" />
                            )
                          ) : (
                            <ArrowUpDown className="size-3.5 opacity-40 group-hover:opacity-100" />
                          )}
                        </button>
                      ) : typeof col.header === 'function' ? (
                        col.header({ column: col })
                      ) : (
                        col.header
                      )}
                    </TableHead>
                  )
                })}
                {rowActions && (
                  <TableHead className="w-[60px] text-right text-xs font-semibold text-muted-foreground">
                    Actions
                  </TableHead>
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={
                      columns.length +
                      (enableRowSelection ? 1 : 0) +
                      (rowActions ? 1 : 0)
                    }
                    className="h-48 text-center"
                  >
                    <EmptyState
                      title={emptyTitle}
                      description={emptyDescription}
                      action={emptyAction}
                      className="py-6 border-0 shadow-none bg-transparent"
                    />
                  </TableCell>
                </TableRow>
              ) : (
                paginatedData.map((row, index) => {
                  const key = keyExtractor(row, index)
                  const isSelected = selectedKeys.includes(key)

                  return (
                    <TableRow
                      key={key}
                      data-state={isSelected ? 'selected' : undefined}
                      className={cn(
                        'transition-colors',
                        isSelected && 'bg-primary/5 hover:bg-primary/8',
                      )}
                    >
                      {enableRowSelection && (
                        <TableCell className="w-[44px] px-3">
                          <Checkbox
                            checked={isSelected}
                            onCheckedChange={(checked) => handleSelectRow(key, checked === true)}
                            aria-label={`Select row ${key}`}
                          />
                        </TableCell>
                      )}
                      {columns.map((col) => {
                        let value: unknown = null
                        if (col.accessorFn) {
                          value = col.accessorFn(row)
                        } else if (col.accessorKey) {
                          value = row[col.accessorKey]
                        }

                        return (
                          <TableCell
                            key={col.id}
                            className={cn(
                              'text-sm',
                              col.align === 'center' && 'text-center',
                              col.align === 'right' && 'text-right',
                              col.className,
                            )}
                          >
                            {col.cell ? col.cell({ row, value, index }) : (value as React.ReactNode)}
                          </TableCell>
                        )
                      })}
                      {rowActions && (
                        <TableCell className="text-right py-2">
                          {rowActions(row)}
                        </TableCell>
                      )}
                    </TableRow>
                  )
                })
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination & Summary Bar */}
        {sortedData.length > 0 && (
          <div className="border-border bg-card/60 flex flex-col gap-3 border-t px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-muted-foreground text-xs">
              Showing{' '}
              <span className="text-foreground font-medium">
                {(currentPage - 1) * pageSize + 1}
              </span>{' '}
              to{' '}
              <span className="text-foreground font-medium">
                {Math.min(currentPage * pageSize, sortedData.length)}
              </span>{' '}
              of <span className="text-foreground font-medium">{sortedData.length}</span>{' '}
              records
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span>Rows per page:</span>
                <Select
                  value={String(pageSize)}
                  onValueChange={(val) => {
                    setPageSize(Number(val))
                    setCurrentPage(1)
                  }}
                >
                  <SelectTrigger className="h-8 w-16 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent align="end">
                    {pageSizeOptions.map((opt) => (
                      <SelectItem key={opt} value={String(opt)} className="text-xs">
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="icon-sm"
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  aria-label="First page"
                >
                  <ChevronsLeft className="size-3.5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon-sm"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                >
                  <ChevronLeft className="size-3.5" />
                </Button>
                <span className="px-2 text-xs font-medium">
                  {currentPage} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="icon-sm"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage >= totalPages}
                  aria-label="Next page"
                >
                  <ChevronRight className="size-3.5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon-sm"
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage >= totalPages}
                  aria-label="Last page"
                >
                  <ChevronsRight className="size-3.5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
