import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { HomePage } from '@/routes/home-page'
import { ProductDetailPage } from '@/routes/product/product-detail-page'
import { MobilesListingPage } from '@/routes/category/mobiles-listing-page'
import { CartPage } from '@/routes/cart/cart-page'
import { CheckoutPage } from '@/routes/checkout/checkout-page'
import { OrderSuccessPage } from '@/routes/order/order-success-page'
import { SellerDashboardPage } from '@/routes/seller/seller-dashboard-page'
import { SellerProductsPage } from '@/routes/seller/seller-products-page'
import { SellerAddProductPage } from '@/routes/seller/seller-add-product-page'
import { SellerProductSuccessPage } from '@/routes/seller/seller-product-success-page'
import { SellerEditProductPage } from '@/routes/seller/seller-edit-product-page'
import { SellerInventoryPage } from '@/routes/seller/seller-inventory-page'
import { SellerOrdersPage } from '@/routes/seller/seller-orders-page'
import { SellerOrderDetailPage } from '@/routes/seller/seller-order-detail-page'
import { SellerCreateOrderPage } from '@/routes/seller/seller-create-order-page'
import { SellerOrderSuccessPage } from '@/routes/seller/seller-order-success-page'
import { SellerCustomersPage } from '@/routes/seller/seller-customers-page'
import { SellerCustomerDetailPage } from '@/routes/seller/seller-customer-detail-page'
import { SellerProductDetailViewPage } from '@/routes/seller/seller-product-detail-view-page'
import { SellerMarketingPage } from '@/routes/seller/seller-marketing-page'
import { SellerPaymentsPage } from '@/routes/seller/seller-payments-page'
import { AdminDashboardPage } from '@/routes/admin/admin-dashboard-page'
import { AdminProductsPage } from '@/routes/admin/admin-products-page'
import { LoginPage } from '@/routes/auth/login-page'
import { RegisterPage } from '@/routes/auth/register-page'
import { ForgotPasswordPage } from '@/routes/auth/forgot-password-page'
import { ResetPasswordPage } from '@/routes/auth/reset-password-page'
import { NotFoundPage } from '@/routes/not-found-page'

const router = createBrowserRouter([
  {
    path: ROUTES.login,
    element: <LoginPage />,
  },
  {
    path: ROUTES.authLogin,
    element: <LoginPage />,
  },
  {
    path: ROUTES.register,
    element: <RegisterPage />,
  },
  {
    path: ROUTES.authRegister,
    element: <RegisterPage />,
  },
  {
    path: ROUTES.forgotPassword,
    element: <ForgotPasswordPage />,
  },
  {
    path: ROUTES.authForgotPassword,
    element: <ForgotPasswordPage />,
  },
  {
    path: ROUTES.resetPassword,
    element: <ResetPasswordPage />,
  },
  {
    path: ROUTES.authResetPassword,
    element: <ResetPasswordPage />,
  },
  {
    path: ROUTES.home,
    element: <HomePage />,
  },
  {
    path: ROUTES.productIphone,
    element: <ProductDetailPage />,
  },
  {
    path: ROUTES.product,
    element: <ProductDetailPage />,
  },
  {
    path: ROUTES.categoryMobiles,
    element: <MobilesListingPage />,
  },
  {
    path: ROUTES.cart,
    element: <CartPage />,
  },
  {
    path: ROUTES.checkout,
    element: <CheckoutPage />,
  },
  {
    path: ROUTES.orderSuccess,
    element: <OrderSuccessPage />,
  },
  {
    path: ROUTES.sellerDashboard,
    element: <SellerDashboardPage />,
  },
  {
    path: ROUTES.sellerProducts,
    element: <SellerProductsPage />,
  },
  {
    path: ROUTES.sellerAddProduct,
    element: <SellerAddProductPage />,
  },
  {
    path: ROUTES.sellerProductsAdd,
    element: <SellerAddProductPage />,
  },
  {
    path: ROUTES.sellerProductSuccess,
    element: <SellerProductSuccessPage />,
  },
  {
    path: ROUTES.sellerEditProduct,
    element: <SellerEditProductPage />,
  },
  {
    path: ROUTES.sellerEditProductId,
    element: <SellerEditProductPage />,
  },
  {
    path: ROUTES.sellerInventory,
    element: <SellerInventoryPage />,
  },
  {
    path: ROUTES.sellerOrders,
    element: <SellerOrdersPage />,
  },
  {
    path: ROUTES.sellerOrderDetail,
    element: <SellerOrderDetailPage />,
  },
  {
    path: ROUTES.sellerCreateOrder,
    element: <SellerCreateOrderPage />,
  },
  {
    path: ROUTES.sellerCreateOrderAlt,
    element: <SellerCreateOrderPage />,
  },
  {
    path: ROUTES.sellerOrderReview,
    element: <SellerCreateOrderPage />,
  },
  {
    path: ROUTES.sellerOrderSuccess,
    element: <SellerOrderSuccessPage />,
  },
  {
    path: ROUTES.sellerOrderSuccessId,
    element: <SellerOrderSuccessPage />,
  },
  {
    path: ROUTES.sellerCustomers,
    element: <SellerCustomersPage />,
  },
  {
    path: ROUTES.sellerCustomerDetail,
    element: <SellerCustomerDetailPage />,
  },
  {
    path: ROUTES.sellerProductDetail,
    element: <SellerProductDetailViewPage />,
  },
  {
    path: ROUTES.sellerProductDetailId,
    element: <SellerProductDetailViewPage />,
  },
  {
    path: ROUTES.sellerMarketing,
    element: <SellerMarketingPage />,
  },
  {
    path: ROUTES.sellerPayments,
    element: <SellerPaymentsPage />,
  },
  {
    path: ROUTES.adminDashboard,
    element: <AdminDashboardPage />,
  },
  {
    path: ROUTES.adminProducts,
    element: <AdminProductsPage />,
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
