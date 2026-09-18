import type { LucideIcon } from 'lucide-react'

export type AppRole = 'seller' | 'admin' | 'buyer'

export type NavItem = {
  id: string
  label: string
  href: string
  icon: LucideIcon
  disabled?: boolean
  children?: NavItem[]
}

export type NavigationConfig = {
  role: AppRole
  title: string
  items: NavItem[]
}
