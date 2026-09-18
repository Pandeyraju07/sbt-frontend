import type { ApiErrorBody, ApiErrorCode, FieldError } from '@/types/api'

const USER_SAFE_MESSAGES: Record<ApiErrorCode, string> = {
  UNAUTHORIZED: 'Your session is not active. Please sign in again.',
  FORBIDDEN: 'You do not have permission to perform this action.',
  NOT_FOUND: 'The requested resource could not be found.',
  VALIDATION: 'Please review the highlighted fields and try again.',
  CONFLICT: 'This action conflicts with the current state. Refresh and try again.',
  SERVER: 'Something went wrong on our side. Please try again later.',
  NETWORK: 'Unable to reach the server. Check your connection and try again.',
  TIMEOUT: 'The request took too long. Please try again.',
  UNKNOWN: 'An unexpected error occurred. Please try again.',
}

export class AppError extends Error {
  readonly code: ApiErrorCode
  readonly status: number
  readonly fieldErrors: FieldError[]
  readonly requestId?: string

  constructor(options: {
    code: ApiErrorCode
    message?: string
    status?: number
    fieldErrors?: FieldError[]
    requestId?: string
  }) {
    super(options.message ?? USER_SAFE_MESSAGES[options.code])
    this.name = 'AppError'
    this.code = options.code
    this.status = options.status ?? statusForCode(options.code)
    this.fieldErrors = options.fieldErrors ?? []
    this.requestId = options.requestId
  }
}

export function statusForCode(code: ApiErrorCode): number {
  switch (code) {
    case 'UNAUTHORIZED':
      return 401
    case 'FORBIDDEN':
      return 403
    case 'NOT_FOUND':
      return 404
    case 'VALIDATION':
      return 400
    case 'CONFLICT':
      return 409
    case 'TIMEOUT':
      return 408
    case 'SERVER':
      return 500
    case 'NETWORK':
      return 0
    default:
      return 500
  }
}

export function codeFromStatus(status: number): ApiErrorCode {
  if (status === 401) return 'UNAUTHORIZED'
  if (status === 403) return 'FORBIDDEN'
  if (status === 404) return 'NOT_FOUND'
  if (status === 408 || status === 504) return 'TIMEOUT'
  if (status === 409) return 'CONFLICT'
  if (status === 422) return 'VALIDATION'
  if (status >= 500) return 'SERVER'
  if (status >= 400) return 'VALIDATION'
  return 'UNKNOWN'
}

export function normalizeApiError(error: unknown): AppError {
  if (error instanceof AppError) {
    return error
  }

  if (error instanceof DOMException && error.name === 'AbortError') {
    return new AppError({ code: 'TIMEOUT', message: USER_SAFE_MESSAGES.TIMEOUT })
  }

  if (error instanceof TypeError) {
    return new AppError({ code: 'NETWORK' })
  }

  if (error instanceof Error) {
    return new AppError({ code: 'UNKNOWN', message: USER_SAFE_MESSAGES.UNKNOWN })
  }

  return new AppError({ code: 'UNKNOWN' })
}

export function parseErrorBody(body: unknown): ApiErrorBody {
  if (typeof body !== 'object' || body === null) {
    return {}
  }

  const record = body as Record<string, unknown>
  const fieldErrors = Array.isArray(record.fieldErrors)
    ? record.fieldErrors.filter(isFieldError)
    : []

  return {
    code: typeof record.code === 'string' ? record.code : undefined,
    message: typeof record.message === 'string' ? record.message : undefined,
    details: record.details,
    fieldErrors,
  }
}

function isFieldError(value: unknown): value is FieldError {
  return (
    typeof value === 'object' &&
    value !== null &&
    'field' in value &&
    'message' in value &&
    typeof value.field === 'string' &&
    typeof value.message === 'string'
  )
}

export function getUserErrorMessage(error: unknown): string {
  return normalizeApiError(error).message
}
