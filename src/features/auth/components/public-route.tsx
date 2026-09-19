import * as React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'
import { PageLoader } from '@/components/feedback/page-loader'
import { ROUTES } from '@/constants/routes'

export interface PublicRouteProps {
  children: React.ReactNode
  redirectToIfAuthenticated?: string
}

export function PublicRoute({
  children,
  redirectToIfAuthenticated,
}: PublicRouteProps) {
  const { isAuthenticated, status } = useAuth()

  if (status === 'loading') {
    return <PageLoader message="Loading…" />
  }

  if (isAuthenticated && redirectToIfAuthenticated) {
    return <Navigate to={redirectToIfAuthenticated || ROUTES.home} replace />
  }

  return <>{children}</>
}
