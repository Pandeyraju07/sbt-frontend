import * as React from 'react'
import type { AuthStatus, AuthUser, UserSession } from '../types/auth'

export interface AuthContextValue {
  session: UserSession
  user: AuthUser | null
  status: AuthStatus
  isAuthenticated: boolean
  setSession: (session: Partial<UserSession>) => void
  clearSession: () => void
}

export const AuthContext = React.createContext<AuthContextValue | undefined>(undefined)
