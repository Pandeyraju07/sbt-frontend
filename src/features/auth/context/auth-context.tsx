import * as React from 'react'
import { tokenStorage } from '@/services/token-storage'
import { AuthContext, type AuthContextValue } from './auth-context-def'
import type { UserSession } from '../types/auth'

export type { AuthContextValue }

const initialSession: UserSession = {
  user: null,
  accessToken: tokenStorage.getAccessToken(),
  refreshToken: tokenStorage.getRefreshToken(),
  status: 'unauthenticated',
  isAuthenticated: false,
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSessionState] = React.useState<UserSession>(initialSession)

  const setSession = React.useCallback((updated: Partial<UserSession>) => {
    setSessionState((prev) => {
      const next = { ...prev, ...updated }
      if (updated.accessToken !== undefined) {
        if (updated.accessToken) {
          tokenStorage.setAccessToken(updated.accessToken)
        } else {
          tokenStorage.clear()
        }
      }
      return next
    })
  }, [])

  const clearSession = React.useCallback(() => {
    tokenStorage.clear()
    setSessionState({
      user: null,
      accessToken: null,
      refreshToken: null,
      status: 'unauthenticated',
      isAuthenticated: false,
    })
  }, [])

  const value = React.useMemo<AuthContextValue>(
    () => ({
      session,
      user: session.user,
      status: session.status,
      isAuthenticated: session.isAuthenticated,
      setSession,
      clearSession,
    }),
    [session, setSession, clearSession],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
