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
import { SellerOverviewPage } from '@/routes/seller/seller-overview-page'
import { AdminOverviewPage } from '@/routes/admin/admin-overview-page'
import { BuyerOverviewPage } from '@/routes/buyer/buyer-overview-page'
import { DesignSystemPage } from '@/routes/design-system/design-system-page'

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
        element: <SellerOverviewPage />,
      },
    ],
  },
  {
    path: ROUTES.admin.root,
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminOverviewPage />,
      },
    ],
  },
  {
    path: ROUTES.buyer.root,
    element: <BuyerLayout />,
    children: [
      {
        index: true,
        element: <BuyerOverviewPage />,
      },
    ],
  },
  {
    path: ROUTES.designSystem,
    element: <DesignSystemPage />,
  },
  {
    path: ROUTES.notFound,
    element: <NotFoundPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
