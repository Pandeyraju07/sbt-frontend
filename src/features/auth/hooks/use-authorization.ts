import * as React from 'react'
import { useAuth } from './use-auth'
import type { Permission, Scope, UserRole } from '../types/auth'

export interface AuthorizationCheckOptions {
  permission?: Permission | Permission[]
  role?: UserRole | UserRole[]
  scope?: Scope
  requireAll?: boolean
}

export function useAuthorization() {
  const { user, isAuthenticated } = useAuth()

  const hasRole = React.useCallback(
    (role: UserRole | UserRole[]): boolean => {
      if (!isAuthenticated || !user) return false
      const requiredRoles = Array.isArray(role) ? role : [role]
      return requiredRoles.some((r) => user.roles.includes(r))
    },
    [user, isAuthenticated],
  )

  const hasPermission = React.useCallback(
    (permission: Permission | Permission[], scope?: Scope): boolean => {
      if (!isAuthenticated || !user) return false
      const requiredPermissions = Array.isArray(permission) ? permission : [permission]

      const hasRequiredPerms = requiredPermissions.some((p) =>
        user.permissions.includes(p),
      )

      if (!hasRequiredPerms) return false

      if (scope) {
        if (scope.orgId && user.activeScope?.orgId && user.activeScope.orgId !== scope.orgId) {
          return false
        }
        if (scope.storeId && user.activeScope?.storeId && user.activeScope.storeId !== scope.storeId) {
          return false
        }
      }

      return true
    },
    [user, isAuthenticated],
  )

  const hasScope = React.useCallback(
    (scope: Scope): boolean => {
      if (!isAuthenticated || !user || !user.activeScope) return false
      if (scope.orgId && user.activeScope.orgId !== scope.orgId) return false
      if (scope.storeId && user.activeScope.storeId !== scope.storeId) return false
      return true
    },
    [user, isAuthenticated],
  )

  const can = React.useCallback(
    (options: AuthorizationCheckOptions): boolean => {
      if (!isAuthenticated || !user) return false

      if (options.role && !hasRole(options.role)) {
        return false
      }

      if (options.permission && !hasPermission(options.permission, options.scope)) {
        return false
      }

      if (options.scope && !hasScope(options.scope)) {
        return false
      }

      return true
    },
    [isAuthenticated, user, hasRole, hasPermission, hasScope],
  )

  return {
    hasRole,
    hasPermission,
    hasScope,
    can,
    user,
    isAuthenticated,
  }
}
