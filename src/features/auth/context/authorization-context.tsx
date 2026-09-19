import * as React from 'react'
import {
  useAuthorization,
  type AuthorizationCheckOptions,
} from '../hooks/use-authorization'

export interface CanProps extends AuthorizationCheckOptions {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function Can({ children, fallback = null, ...options }: CanProps) {
  const { can } = useAuthorization()

  if (can(options)) {
    return <>{children}</>
  }

  return <>{fallback}</>
}
