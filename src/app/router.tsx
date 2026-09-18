import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { AuthLayout } from '@/layouts/auth-layout'
import { AdminLayout } from '@/layouts/admin-layout'
import { BuyerLayout } from '@/layouts/buyer-layout'
import { SellerLayout } from '@/layouts/seller-layout'
import { HomePage } from '@/routes/home-page'
import { LoginPage } from '@/routes/auth/login-page'
import { RegisterPage } from '@/routes/auth/register-page'
import { NotFoundPage } from '@/routes/not-found-page'
import { ShellPlaceholderPage } from '@/routes/shell-placeholder-page'

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <HomePage />,
  },
  {
    element: <AuthLayout />,
    children: [
      { path: ROUTES.login, element: <LoginPage /> },
      { path: ROUTES.register, element: <RegisterPage /> },
    ],
  },
  {
    path: ROUTES.seller.root,
    element: <SellerLayout />,
    children: [
      {
        index: true,
        element: (
          <ShellPlaceholderPage
            eyebrow="Seller"
            title="Seller workspace"
            description="Organization, stores, employees, catalog, and inventory screens will be added in later phases."
            crumbs={[{ label: 'Home', href: ROUTES.home }, { label: 'Seller' }]}
          />
        ),
      },
    ],
  },
  {
    path: ROUTES.admin.root,
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: (
          <ShellPlaceholderPage
            eyebrow="Admin"
            title="Platform administration"
            description="Approvals, policies, RBAC, and audit tools will live in this shell starting with the admin control-plane phase."
            crumbs={[{ label: 'Home', href: ROUTES.home }, { label: 'Admin' }]}
          />
        ),
      },
    ],
  },
  {
    path: ROUTES.buyer.root,
    element: <BuyerLayout />,
    children: [
      {
        index: true,
        element: (
          <ShellPlaceholderPage
            eyebrow="Buyer"
            title="Buyer marketplace"
            description="Discovery, product pages, and purchase flows are reserved for the buyer platform phase."
            crumbs={[{ label: 'Home', href: ROUTES.home }, { label: 'Buyer' }]}
          />
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
