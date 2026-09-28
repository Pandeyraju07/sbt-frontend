import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Search,
  Bell,
  ChevronDown,
  LayoutDashboard,
  ShoppingBag,
  Package,
  Layers,
  CreditCard,
  Users,
  Megaphone,
  BarChart3,
  Settings,
  HelpCircle,
  Crown,
  ChevronRight,
  Check,
  FileText,
  MapPin,
  Truck,
  Printer,
  Share2,
  RotateCcw,
  ArrowLeft,
  Mail,
  Download,
} from 'lucide-react'
import { toast } from 'sonner'
import { SbtLogo } from '@/components/sbt-logo'
import { ROUTES } from '@/constants/routes'

import cartIphone from '@/assets/premium/iphone15-black.jpg'
import cartShoes from '@/assets/premium/deal-shoes.jpg'

const customerAvatars = {
  dhiraj: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
  amit: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
}

export const SellerOrderSuccessPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans antialiased flex flex-col">
      {/* 1. TOP NAVBAR */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm px-6 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to={ROUTES.home} className="flex items-center">
            <SbtLogo className="h-8 w-auto" />
          </Link>
          <button
            type="button"
            className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition"
            aria-label="Toggle menu"
          >
            <div className="space-y-1 w-4">
              <span className="block h-0.5 w-full bg-gray-600 rounded"></span>
              <span className="block h-0.5 w-full bg-gray-600 rounded"></span>
              <span className="block h-0.5 w-full bg-gray-600 rounded"></span>
            </div>
          </button>
        </div>

        {/* Global Search */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products, orders, customers..."
              className="w-full pl-10 pr-12 py-2 text-sm bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-[#DF1927] focus:ring-1 focus:ring-[#DF1927] transition"
            />
            <button
              type="button"
              className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#DF1927] text-white flex items-center justify-center hover:bg-[#c01420] transition shadow-sm"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              type="button"
              className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 bg-[#DF1927] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                12
              </span>
            </button>
          </div>

          <button
            type="button"
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition"
          >
            <HelpCircle className="w-5 h-5" />
          </button>

          <div className="h-6 w-px bg-gray-200"></div>

          {/* Seller Profile */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <img
              src={customerAvatars.dhiraj}
              alt="Dhiraj Sharma"
              className="w-9 h-9 rounded-full object-cover border border-gray-200 group-hover:ring-2 group-hover:ring-[#DF1927]/30 transition"
            />
            <div className="text-left hidden sm:block">
              <div className="text-xs font-semibold text-gray-800 leading-tight">Dhiraj Sharma</div>
              <div className="text-[11px] text-gray-500 leading-tight">Seller</div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition" />
          </div>
        </div>
      </header>

      {/* 2. MAIN LAYOUT */}
      <div className="flex-1 flex overflow-hidden">
        {/* SIDEBAR */}
        <aside className="w-64 bg-white border-r border-gray-100 flex flex-col justify-between shrink-0 select-none hidden md:flex">
          <div className="py-4">
            <nav className="space-y-0.5 px-3">
              <Link
                to={ROUTES.sellerDashboard}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
              >
                <LayoutDashboard className="w-4 h-4 text-gray-500" />
                <span>Dashboard</span>
              </Link>

              {/* Orders (Active) */}
              <Link
                to={ROUTES.sellerOrders}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-[#DF1927] bg-red-50 border-l-4 border-[#DF1927] transition"
              >
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-4 h-4 text-[#DF1927]" />
                  <span>Orders</span>
                </div>
                <span className="bg-[#DF1927] text-white text-[11px] font-semibold px-1.5 py-0.5 rounded-full">
                  8
                </span>
              </Link>

              <Link
                to={ROUTES.sellerProducts}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <Package className="w-4 h-4 text-gray-500" />
                  <span>Products</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>

              <Link
                to={ROUTES.sellerInventory}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
              >
                <Layers className="w-4 h-4 text-gray-500" />
                <span>Inventory</span>
              </Link>

              <Link
                to={ROUTES.sellerCustomers}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
              >
                <Users className="w-4 h-4 text-gray-500" />
                <span>Customers</span>
              </Link>

              <a
                href="#analytics"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
              >
                <BarChart3 className="w-4 h-4 text-gray-500" />
                <span>Analytics</span>
              </a>

              <Link
                to={ROUTES.sellerMarketing}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
              >
                <Megaphone className="w-4 h-4 text-gray-500" />
                <span>Marketing & Offers</span>
              </Link>

              <Link
                to={ROUTES.sellerPayments}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
              >
                <CreditCard className="w-4 h-4 text-gray-500" />
                <span>Payments</span>
              </Link>

              <div className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition cursor-pointer">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-gray-500" />
                  <span>Reports</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>

              <a
                href="#settings"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
              >
                <Settings className="w-4 h-4 text-gray-500" />
                <span>Store Settings</span>
              </a>

              <a
                href="#support"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
              >
                <HelpCircle className="w-4 h-4 text-gray-500" />
                <span>Support</span>
              </a>
            </nav>
          </div>

          {/* SBT Seller Pro Banner */}
          <div className="p-3 m-3 bg-gradient-to-br from-red-50 to-orange-50/70 border border-red-100 rounded-2xl relative overflow-hidden">
            <div className="flex items-center gap-2 mb-1.5">
              <Crown className="w-4 h-4 text-amber-500 fill-amber-400" />
              <span className="text-xs font-bold text-gray-900">SBT Seller Pro</span>
            </div>
            <p className="text-[11px] text-gray-600 leading-snug mb-3">
              Unlock advanced tools, marketing support and grow your business.
            </p>
            <button
              type="button"
              className="w-full py-1.5 px-3 bg-white hover:bg-red-50 text-[#DF1927] border border-red-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-1 shadow-sm transition"
            >
              <span>Upgrade Now</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>

        {/* MAIN BODY */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          {/* Breadcrumb & Header */}
          <div>
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
              <Link to={ROUTES.sellerOrders} className="hover:text-gray-800 transition">
                Orders
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <Link to={ROUTES.sellerCreateOrder} className="hover:text-gray-800 transition">
                Create Order
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <Link to={ROUTES.sellerOrderReview} className="hover:text-gray-800 transition">
                Review Order
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[#DF1927] font-semibold">Order Placed</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              Order Placed Successfully!
            </h1>
            <p className="text-xs text-gray-500 mt-0.5">
              The order has been created and sent to the customer.
            </p>
          </div>

          {/* SUCCESS BANNER CARD */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center ring-8 ring-emerald-50/50 shrink-0">
                <Check className="w-7 h-7 stroke-[2.5]" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900 leading-tight">
                  Order Placed Successfully!
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-gray-500">Order ID</span>
                  <span className="text-sm font-bold text-gray-900">#SBT1023439</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">
                  A confirmation has been sent to the customer.
                </p>
              </div>
            </div>

            {/* Top Right Buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => toast.success('Invoice downloaded')}
                className="px-5 py-2.5 bg-[#DF1927] hover:bg-[#c01420] text-white text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm shadow-red-200 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Invoice</span>
              </button>

              <button
                type="button"
                onClick={() => toast.info('Order details emailed to amit.kumar@gmail.com')}
                className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm transition"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>Send Order Details</span>
              </button>
            </div>
          </div>

          {/* TWO COLUMN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* LEFT 8 COLUMNS */}
            <div className="lg:col-span-8 space-y-6">
              {/* 1. ORDER DETAILS CARD */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-gray-500" />
                    <h2 className="text-base font-bold text-gray-900">Order Details</h2>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Delivered
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-8 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Order ID</span>
                    <span className="font-bold text-gray-900">#SBT1023439</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Order Date</span>
                    <span className="font-medium text-gray-800">26 Sep 2025, 09:02 AM</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Total Items</span>
                    <span className="font-bold text-gray-900">2</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Payment Method</span>
                    <span className="font-medium text-gray-800">UPI (PhonePe)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Payment Status</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Paid
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Order Status</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Delivered
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Estimated Delivery</span>
                    <span className="font-medium text-gray-800">26 Sep 2025</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Placed By</span>
                    <span className="font-medium text-gray-800">Amit Kumar (CUST001)</span>
                  </div>
                </div>
              </div>

              {/* 2. ITEMS (2) CARD & HORIZONTAL STEPPER */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-gray-500" />
                    <h2 className="text-base font-bold text-gray-900">Items (2)</h2>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-500">Total Amount: </span>
                    <span className="font-bold text-gray-900 text-sm">₹25,998</span>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-gray-100 text-gray-400 font-medium bg-gray-50/50">
                        <th className="py-3 px-3 font-semibold">Product</th>
                        <th className="py-3 px-3 font-semibold">SKU</th>
                        <th className="py-3 px-3 font-semibold">Price (₹)</th>
                        <th className="py-3 px-3 font-semibold">Quantity</th>
                        <th className="py-3 px-3 font-semibold text-right">Subtotal (₹)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="py-3.5 px-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={cartIphone}
                              alt="iPhone 15"
                              className="w-10 h-10 rounded-xl object-contain bg-gray-50 border border-gray-100 p-1"
                            />
                            <div>
                              <div className="font-bold text-gray-900">iPhone 15 (128GB)</div>
                              <div className="text-[11px] text-gray-400">Black</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-3 font-medium text-gray-500">IP15-128</td>
                        <td className="py-3.5 px-3 font-medium text-gray-900">79,900</td>
                        <td className="py-3.5 px-3 font-bold text-gray-900">1</td>
                        <td className="py-3.5 px-3 font-bold text-gray-900 text-right">79,900</td>
                      </tr>

                      <tr>
                        <td className="py-3.5 px-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={cartShoes}
                              alt="Nike Air Max"
                              className="w-10 h-10 rounded-xl object-contain bg-gray-50 border border-gray-100 p-1"
                            />
                            <div>
                              <div className="font-bold text-gray-900">Nike Air Max</div>
                              <div className="text-[11px] text-gray-400">White</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-3 font-medium text-gray-500">NK-AM-001</td>
                        <td className="py-3.5 px-3 font-medium text-gray-900">12,999</td>
                        <td className="py-3.5 px-3 font-bold text-gray-900">2</td>
                        <td className="py-3.5 px-3 font-bold text-gray-900 text-right">25,998</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 4-STAGE RED CHECKED STEPPER (Matching Mockup 1) */}
                <div className="pt-6 border-t border-gray-100">
                  <div className="relative flex items-center justify-between">
                    {/* Background line */}
                    <div className="absolute left-6 right-6 top-4 h-0.5 bg-red-500 -z-0"></div>

                    {[
                      {
                        title: 'Order Placed',
                        date: '26 Sep 2025',
                        time: '09:02 AM',
                      },
                      {
                        title: 'Payment Received',
                        date: '26 Sep 2025',
                        time: '09:02 AM',
                      },
                      {
                        title: 'Processing',
                        date: '26 Sep 2025',
                        time: '10:15 AM',
                      },
                      {
                        title: 'Delivered',
                        date: '26 Sep 2025',
                        time: '11:15 AM',
                      },
                    ].map((step, idx) => (
                      <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-8 h-8 rounded-full bg-[#DF1927] text-white flex items-center justify-center shadow-sm">
                          <Check className="w-4 h-4 stroke-[2.5]" />
                        </div>
                        <div className="text-xs font-bold text-gray-900 mt-2">{step.title}</div>
                        <div className="text-[11px] text-gray-500 leading-tight">{step.date}</div>
                        <div className="text-[10px] text-gray-400">{step.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT 4 COLUMNS */}
            <div className="lg:col-span-4 space-y-6">
              {/* 1. CUSTOMER INFORMATION */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <h2 className="text-base font-bold text-gray-900">Customer Information</h2>
                  </div>
                  <Link
                    to={`/seller/customers/CUST001`}
                    className="text-xs font-semibold text-blue-600 hover:underline"
                  >
                    View Profile
                  </Link>
                </div>

                <div className="flex items-start gap-3.5">
                  <img
                    src={customerAvatars.amit}
                    alt="Amit Kumar"
                    className="w-12 h-12 rounded-full object-cover border border-gray-200 shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900 text-sm">Amit Kumar</span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Regular Customer
                      </span>
                    </div>
                    <div className="text-[11px] text-gray-500 mt-0.5">CUST001</div>
                    <div className="text-[11px] text-gray-600 mt-1">amit.kumar@gmail.com</div>
                    <div className="text-[11px] text-gray-600">+91 98765 43210</div>
                    <div className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                      Flat 302, A Block, Green Residency, Sector 76, Noida, UP - 201301
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. DELIVERY INFORMATION */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-gray-500" />
                    <h2 className="text-base font-bold text-gray-900">Delivery Information</h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => toast.info('Edit delivery information')}
                    className="text-xs font-semibold text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-900 block mb-0.5">
                        Delivery Address
                      </span>
                      <p className="text-gray-600 leading-relaxed">
                        Flat 302, A Block, Green Residency, Sector 76, Noida, UP - 201301
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-2 border-t border-gray-100">
                    <Truck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-900 block mb-0.5">Delivery Method</span>
                      <p className="text-gray-900 font-semibold">Standard Delivery</p>
                      <p className="text-gray-400 text-[11px]">3 – 5 business days</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. PAYMENT INFORMATION */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-gray-500" />
                    <h2 className="text-base font-bold text-gray-900">Payment Information</h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => toast.info('Change payment method')}
                    className="text-xs font-semibold text-blue-600 hover:underline"
                  >
                    Change
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-7 rounded bg-purple-600 text-white font-bold text-xs flex items-center justify-center italic">
                      UPI
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-xs">UPI (PhonePe)</div>
                      <div className="text-[11px] text-gray-500">Transaction ID: T250926090245</div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Paid
                  </span>
                </div>
              </div>

              {/* 4. QUICK ACTIONS */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                <h2 className="text-base font-bold text-gray-900">Quick Actions</h2>

                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => toast.success('Printing invoice...')}
                    className="p-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition text-center font-medium"
                  >
                    <Printer className="w-4 h-4 text-gray-600" />
                    <span>Print Invoice</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href)
                      toast.success('Order link copied to clipboard!')
                    }}
                    className="p-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition text-center font-medium"
                  >
                    <Share2 className="w-4 h-4 text-gray-600" />
                    <span>Share Order</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate(ROUTES.sellerCreateOrder)}
                    className="p-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition text-center font-medium"
                  >
                    <RotateCcw className="w-4 h-4 text-gray-600" />
                    <span>Create Another Order</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => navigate(ROUTES.sellerOrders)}
                  className="w-full py-2.5 px-4 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-2xl flex items-center justify-center gap-2 shadow-xs transition"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Orders</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
