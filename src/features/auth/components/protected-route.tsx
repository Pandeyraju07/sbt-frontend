import * as React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'
import { useAuthorization } from '../hooks/use-authorization'
import { PageLoader } from '@/components/feedback/page-loader'
import { ErrorState } from '@/components/feedback/error-state'
import { ROUTES } from '@/constants/routes'
import type { Permission, Scope, UserRole } from '../types/auth'

export interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: UserRole | UserRole[]
  requiredPermission?: Permission | Permission[]
  requiredScope?: Scope
}

export function ProtectedRoute({
  children,
  requiredRole,
  requiredPermission,
  requiredScope,
}: ProtectedRouteProps) {
  const { isAuthenticated, status } = useAuth()
  const { hasRole, hasPermission, hasScope } = useAuthorization()
  const location = useLocation()

  if (status === 'loading') {
    return <PageLoader message="Verifying session credentials…" />
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.login} state={{ from: location }} replace />
  }

  if (requiredRole && !hasRole(requiredRole)) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-6">
        <ErrorState
          title="Access Denied"
          description="Your current role does not have authorization to view this resource."
        />
      </div>
    )
  }

  if (requiredPermission && !hasPermission(requiredPermission, requiredScope)) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-6">
        <ErrorState
          title="Permission Required"
          description="You do not possess the required scoped permission for this operational module."
        />
      </div>
    )
  }

  if (requiredScope && !hasScope(requiredScope)) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-6">
        <ErrorState
          title="Scope Mismatch"
          description="Your active organization or store context is not authorized for this resource."
        />
      </div>
    )
  }

  return <>{children}</>
}
