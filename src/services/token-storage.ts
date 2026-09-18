const ACCESS_TOKEN_KEY = 'sbt.accessToken'
const REFRESH_TOKEN_KEY = 'sbt.refreshToken'

/**
 * Token storage is a seam for Phase 2 identity work.
 * Tokens are never committed, never logged, and never placed in VITE_ env vars.
 * sessionStorage is used so a tab close clears credentials; this can be swapped
 * for an in-memory store or httpOnly-cookie flow without changing callers.
 */
export const tokenStorage = {
  getAccessToken(): string | null {
    return sessionStorage.getItem(ACCESS_TOKEN_KEY)
  },
  setAccessToken(token: string): void {
    sessionStorage.setItem(ACCESS_TOKEN_KEY, token)
  },
  getRefreshToken(): string | null {
    return sessionStorage.getItem(REFRESH_TOKEN_KEY)
  },
  setRefreshToken(token: string): void {
    sessionStorage.setItem(REFRESH_TOKEN_KEY, token)
  },
  clear(): void {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY)
    sessionStorage.removeItem(REFRESH_TOKEN_KEY)
  },
}
