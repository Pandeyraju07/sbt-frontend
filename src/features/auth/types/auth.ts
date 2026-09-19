export type UserRole =
  | 'BUYER'
  | 'SELLER_OWNER'
  | 'SELLER_MANAGER'
  | 'SELLER_STAFF'
  | 'ADMIN'
  | 'SUPER_ADMIN'

export type Scope = {
  orgId?: string
  storeId?: string
  region?: string
}

export type Permission =
  | 'org:read'
  | 'org:write'
  | 'org:manage'
  | 'store:read'
  | 'store:write'
  | 'store:manage'
  | 'employee:read'
  | 'employee:invite'
  | 'employee:manage'
  | 'product:read'
  | 'product:create'
  | 'product:update'
  | 'product:submit'
  | 'product:approve'
  | 'inventory:read'
  | 'inventory:update'
  | 'admin:platform'
  | 'admin:policies'
  | 'admin:audit'
  | 'buyer:checkout'
  | 'buyer:orders'

export type AuthUser = {
  id: string
  email: string
  name: string
  phone?: string
  roles: UserRole[]
  permissions: Permission[]
  activeScope?: Scope
}

export type AuthStatus = 'idle' | 'loading' | 'authenticated' | 'unauthenticated'

export type UserSession = {
  user: AuthUser | null
  accessToken: string | null
  refreshToken?: string | null
  status: AuthStatus
  isAuthenticated: boolean
}
