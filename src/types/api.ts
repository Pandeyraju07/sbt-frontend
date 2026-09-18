export type ApiErrorCode =
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'NOT_FOUND'
  | 'VALIDATION'
  | 'CONFLICT'
  | 'SERVER'
  | 'NETWORK'
  | 'TIMEOUT'
  | 'UNKNOWN'

export type FieldError = {
  field: string
  message: string
}

export type ApiErrorBody = {
  code?: string
  message?: string
  details?: unknown
  fieldErrors?: FieldError[]
}

export type ApiSuccess<T> = {
  data: T
  message?: string
}

export type PaginatedData<T> = {
  items: T[]
  page: number
  pageSize: number
  totalItems: number
  totalPages: number
}
