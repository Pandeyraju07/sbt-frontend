import { Building2, LayoutDashboard, ShoppingBag } from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import type { NavigationConfig } from '@/types/navigation'

export const sellerNavigation: NavigationConfig = {
  role: 'seller',
  title: 'Seller',
  items: [
    {
      id: 'seller-foundation',
      label: 'Foundation',
      href: ROUTES.seller.root,
      icon: LayoutDashboard,
    },
  ],
}

export const adminNavigation: NavigationConfig = {
  role: 'admin',
  title: 'Admin',
  items: [
    {
      id: 'admin-foundation',
      label: 'Foundation',
      href: ROUTES.admin.root,
      icon: Building2,
    },
  ],
}

export const buyerNavigation: NavigationConfig = {
  role: 'buyer',
  title: 'Buyer',
  items: [
    {
      id: 'buyer-foundation',
      label: 'Foundation',
      href: ROUTES.buyer.root,
      icon: ShoppingBag,
    },
  ],
}
