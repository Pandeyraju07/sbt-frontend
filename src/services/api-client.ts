import { env } from '@/config/env'
import { ROUTES } from '@/constants/routes'
import { AppError, codeFromStatus, parseErrorBody, normalizeApiError } from '@/lib/errors'
import { tokenStorage } from '@/services/token-storage'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export type RequestOptions = {
  method?: HttpMethod
  body?: unknown
  headers?: HeadersInit
  signal?: AbortSignal
  auth?: boolean
  skipRefresh?: boolean
}

type RefreshResponse = {
  accessToken: string
  refreshToken?: string
}

let refreshInFlight: Promise<boolean> | null = null

export async function apiClient<T>(
  path: string,
  options: RequestOptions = {},
): Promise<T> {
  const url = joinUrl(env.apiBaseUrl, path)
  const auth = options.auth ?? true

  try {
    const response = await execute(url, options, auth)

    if (response.status === 401 && auth && !options.skipRefresh) {
      const refreshed = await refreshSession()
      if (refreshed) {
        const retry = await execute(url, { ...options, skipRefresh: true }, true)
        return readResponse<T>(retry)
      }
      tokenStorage.clear()
      redirectToLogin()
      throw new AppError({ code: 'UNAUTHORIZED' })
    }

    return readResponse<T>(response)
  } catch (error) {
    throw normalizeApiError(error)
  }
}

async function execute(
  url: string,
  options: RequestOptions,
  auth: boolean,
): Promise<Response> {
  const headers = new Headers(options.headers)
  headers.set('Accept', 'application/json')

  if (options.body !== undefined && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json')
  }

  if (auth) {
    const token = tokenStorage.getAccessToken()
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
  }

  return fetch(url, {
    method: options.method ?? (options.body === undefined ? 'GET' : 'POST'),
    headers,
    body: options.body === undefined ? undefined : JSON.stringify(options.body),
    signal: options.signal,
    credentials: 'include',
  })
}

async function readResponse<T>(response: Response): Promise<T> {
  if (response.status === 204) {
    return undefined as T
  }

  const payload = await parseJson(response)

  if (!response.ok) {
    const body = parseErrorBody(payload)
    throw new AppError({
      code: codeFromStatus(response.status),
      status: response.status,
      message: publicMessage(body.message, response.status),
      fieldErrors: body.fieldErrors,
    })
  }

  return unwrapData<T>(payload)
}

async function parseJson(response: Response): Promise<unknown> {
  const text = await response.text()
  if (!text) {
    return null
  }

  try {
    return JSON.parse(text) as unknown
  } catch {
    throw new AppError({
      code: 'SERVER',
      status: response.status,
    })
  }
}

function unwrapData<T>(payload: unknown): T {
  if (typeof payload === 'object' && payload !== null && 'data' in payload) {
    return (payload as { data: T }).data
  }
  return payload as T
}

function publicMessage(message: string | undefined, status: number): string | undefined {
  if (!message) {
    return undefined
  }

  const looksSensitive =
    /exception|stack|sql|hibernate|at\s+[\w$.]+\(|internal server/i.test(message)
  if (looksSensitive || status >= 500) {
    return undefined
  }

  return message
}

async function refreshSession(): Promise<boolean> {
  if (!refreshInFlight) {
    refreshInFlight = performRefresh().finally(() => {
      refreshInFlight = null
    })
  }
  return refreshInFlight
}

async function performRefresh(): Promise<boolean> {
  const refreshToken = tokenStorage.getRefreshToken()
  if (!refreshToken) {
    return false
  }

  try {
    const response = await fetch(joinUrl(env.apiBaseUrl, '/auth/refresh'), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
      credentials: 'include',
    })

    if (!response.ok) {
      return false
    }

    const payload = unwrapData<RefreshResponse>(await parseJson(response))
    if (!payload.accessToken) {
      return false
    }

    tokenStorage.setAccessToken(payload.accessToken)
    if (payload.refreshToken) {
      tokenStorage.setRefreshToken(payload.refreshToken)
    }
    return true
  } catch {
    return false
  }
}

function redirectToLogin(): void {
  if (window.location.pathname !== ROUTES.login) {
    window.location.assign(ROUTES.login)
  }
}

function joinUrl(base: string, path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    throw new AppError({ code: 'UNKNOWN', message: 'API paths must be relative.' })
  }
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalizedPath}`
}

export const api = {
  get: <T>(path: string, options?: Omit<RequestOptions, 'method' | 'body'>) =>
    apiClient<T>(path, { ...options, method: 'GET' }),
  post: <T>(
    path: string,
    body?: unknown,
    options?: Omit<RequestOptions, 'method' | 'body'>,
  ) => apiClient<T>(path, { ...options, method: 'POST', body }),
  put: <T>(
    path: string,
    body?: unknown,
    options?: Omit<RequestOptions, 'method' | 'body'>,
  ) => apiClient<T>(path, { ...options, method: 'PUT', body }),
  patch: <T>(
    path: string,
    body?: unknown,
    options?: Omit<RequestOptions, 'method' | 'body'>,
  ) => apiClient<T>(path, { ...options, method: 'PATCH', body }),
  delete: <T>(path: string, options?: Omit<RequestOptions, 'method' | 'body'>) =>
    apiClient<T>(path, { ...options, method: 'DELETE' }),
}
