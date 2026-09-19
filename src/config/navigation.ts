import {
  Boxes,
  Building2,
  ClipboardList,
  Grid,
  History,
  Layers,
  LayoutDashboard,
  Package,
  Settings,
  Shield,
  ShoppingBag,
  Store,
  UserCheck,
  Users,
} from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import type { NavigationConfig } from '@/types/navigation'

export const sellerNavigation: NavigationConfig = {
  role: 'seller',
  title: 'Seller Portal',
  items: [
    {
      id: 'seller-overview',
      label: 'Overview',
      href: ROUTES.seller.root,
      icon: LayoutDashboard,
    },
    {
      id: 'seller-organizations',
      label: 'Organizations',
      href: '/seller/organizations',
      icon: Building2,
      disabled: true,
      badge: 'Phase 2',
    },
    {
      id: 'seller-stores',
      label: 'Stores',
      href: '/seller/stores',
      icon: Store,
      disabled: true,
      badge: 'Phase 2',
    },
    {
      id: 'seller-employees',
      label: 'Employees',
      href: '/seller/employees',
      icon: Users,
      disabled: true,
      badge: 'Phase 2',
    },
    {
      id: 'seller-products',
      label: 'Products',
      href: '/seller/products',
      icon: Package,
      disabled: true,
      badge: 'Phase 2',
    },
    {
      id: 'seller-inventory',
      label: 'Inventory',
      href: '/seller/inventory',
      icon: Boxes,
      disabled: true,
      badge: 'Phase 2',
    },
  ],
}

export const adminNavigation: NavigationConfig = {
  role: 'admin',
  title: 'Admin Control Plane',
  items: [
    {
      id: 'admin-overview',
      label: 'Overview',
      href: ROUTES.admin.root,
      icon: Shield,
    },
    {
      id: 'admin-sellers',
      label: 'Seller Management',
      href: '/admin/sellers',
      icon: Users,
      disabled: true,
      badge: 'Phase 2',
    },
    {
      id: 'admin-stores',
      label: 'Store Management',
      href: '/admin/stores',
      icon: Store,
      disabled: true,
      badge: 'Phase 2',
    },
    {
      id: 'admin-products',
      label: 'Product Approvals',
      href: '/admin/products',
      icon: Package,
      disabled: true,
      badge: 'Phase 2',
    },
    {
      id: 'admin-categories',
      label: 'Categories',
      href: '/admin/categories',
      icon: Layers,
      disabled: true,
      badge: 'Phase 2',
    },
    {
      id: 'admin-settings',
      label: 'Platform Settings',
      href: '/admin/settings',
      icon: Settings,
      disabled: true,
      badge: 'Phase 2',
    },
    {
      id: 'admin-audit',
      label: 'Audit & Compliance',
      href: '/admin/audit',
      icon: History,
      disabled: true,
      badge: 'Phase 2',
    },
  ],
}

export const buyerNavigation: NavigationConfig = {
  role: 'buyer',
  title: 'Buyer Marketplace',
  items: [
    {
      id: 'buyer-overview',
      label: 'Marketplace',
      href: ROUTES.buyer.root,
      icon: ShoppingBag,
    },
    {
      id: 'buyer-catalog',
      label: 'Catalog Discovery',
      href: '/buyer/catalog',
      icon: Grid,
      disabled: true,
      badge: 'Phase 2',
    },
    {
      id: 'buyer-orders',
      label: 'My Orders',
      href: '/buyer/orders',
      icon: ClipboardList,
      disabled: true,
      badge: 'Phase 2',
    },
    {
      id: 'buyer-account',
      label: 'Account & Security',
      href: '/buyer/account',
      icon: UserCheck,
      disabled: true,
      badge: 'Phase 2',
    },
  ],
}
