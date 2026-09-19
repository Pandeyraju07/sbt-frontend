import * as React from 'react'
import { Building2, Check, ChevronsUpDown, Store } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export type OrgContext = {
  id: string
  name: string
  code: string
}

export type StoreContext = {
  id: string
  orgId: string
  name: string
  location: string
}

const DEMO_ORGS: OrgContext[] = [
  { id: 'org-1', name: 'Apex Electronics Pvt Ltd', code: 'APEX' },
  { id: 'org-2', name: 'Heritage Artisans Co', code: 'HERITAGE' },
]

const DEMO_STORES: Record<string, StoreContext[]> = {
  'org-1': [
    { id: 'store-101', orgId: 'org-1', name: 'Delhi Central Store', location: 'Delhi, IN' },
    { id: 'store-102', orgId: 'org-1', name: 'Mumbai Express Store', location: 'Mumbai, IN' },
  ],
  'org-2': [
    { id: 'store-201', orgId: 'org-2', name: 'Jaipur Main Workshop', location: 'Jaipur, IN' },
  ],
}

export function OrgStoreContextSelector({ className }: { className?: string }) {
  const [selectedOrgId, setSelectedOrgId] = React.useState('org-1')
  const [selectedStoreId, setSelectedStoreId] = React.useState('store-101')

  const currentOrg = DEMO_ORGS.find((o) => o.id === selectedOrgId) ?? DEMO_ORGS[0]!
  const currentStoreList = DEMO_STORES[selectedOrgId] ?? []
  const currentStore =
    currentStoreList.find((s) => s.id === selectedStoreId) ?? currentStoreList[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            'h-9 max-w-[280px] gap-2 border-border/70 bg-background/50 px-2.5 text-left font-normal hover:bg-muted/60',
            className,
          )}
          aria-label={`Organization: ${currentOrg.name}, Store: ${currentStore ? currentStore.name : 'All'}`}
        >
          <div className="bg-primary/10 text-primary flex size-5 shrink-0 items-center justify-center rounded">
            <Building2 className="size-3.5" />
          </div>
          <div className="flex min-w-0 flex-col leading-none">
            <span className="truncate text-xs font-semibold text-foreground">
              {currentOrg.name}
            </span>
            {currentStore && (
              <span className="text-muted-foreground truncate text-[10px]">
                {currentStore.name}
              </span>
            )}
          </div>
          <ChevronsUpDown className="text-muted-foreground ml-auto size-3.5 shrink-0" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="w-72">
        <DropdownMenuLabel className="flex items-center justify-between text-xs">
          <span>Organization Scope</span>
          <Badge variant="secondary" className="text-[10px] py-0 px-1">
            Phase 1 UI Stub
          </Badge>
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          {DEMO_ORGS.map((org) => {
            const isSelected = org.id === selectedOrgId
            return (
              <DropdownMenuItem
                key={org.id}
                onClick={() => {
                  setSelectedOrgId(org.id)
                  const stores = DEMO_STORES[org.id]
                  if (stores && stores[0]) {
                    setSelectedStoreId(stores[0].id)
                  }
                }}
                className="flex items-center justify-between py-2 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Building2 className="text-muted-foreground size-4 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium">{org.name}</span>
                    <span className="text-muted-foreground text-[10px]">Code: {org.code}</span>
                  </div>
                </div>
                {isSelected && <Check className="text-primary size-4" />}
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuLabel className="text-xs">Store Scope</DropdownMenuLabel>
        <DropdownMenuGroup>
          {currentStoreList.map((store) => {
            const isSelected = store.id === selectedStoreId
            return (
              <DropdownMenuItem
                key={store.id}
                onClick={() => setSelectedStoreId(store.id)}
                className="flex items-center justify-between py-2 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Store className="text-muted-foreground size-4 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium">{store.name}</span>
                    <span className="text-muted-foreground text-[10px]">{store.location}</span>
                  </div>
                </div>
                {isSelected && <Check className="text-primary size-4" />}
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
