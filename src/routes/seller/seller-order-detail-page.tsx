import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
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
  Printer,
  Download,
  MoreVertical,
  Check,
  Truck,
  RotateCcw,
  MessageSquare,
  Clock,
  MapPin,
  RefreshCw,
  Mail,
  Phone,
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

export const SellerOrderDetailPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>()
  const orderId = id ? (id.startsWith('#') ? id : `#${id}`) : '#SBT1023439'

  const [orderNotes, setOrderNotes] = useState('Please deliver during office hours.')
  const [isEditingNotes, setIsEditingNotes] = useState(false)
  const [tempNotes, setTempNotes] = useState(orderNotes)

  const handleSaveNotes = () => {
    setOrderNotes(tempNotes)
    setIsEditingNotes(false)
    toast.success('Order notes updated')
  }

  // 6 Stages for Horizontal Tracker matching Mockup 5
  const trackerStages = [
    {
      id: 1,
      name: 'Order Placed',
      date: '26 Sep 2025',
      time: '09:02 AM',
      status: 'completed',
      color: 'bg-[#DF1927] text-white',
      icon: ShoppingBag,
    },
    {
      id: 2,
      name: 'Payment Received',
      date: '26 Sep 2025',
      time: '09:02 AM',
      status: 'completed',
      color: 'bg-[#DF1927] text-white',
      icon: CreditCard,
    },
    {
      id: 3,
      name: 'Processing',
      date: '26 Sep 2025',
      time: '10:15 AM',
      status: 'completed',
      color: 'bg-[#DF1927] text-white',
      icon: Package,
    },
    {
      id: 4,
      name: 'Shipped',
      date: '25 Sep 2025',
      time: '08:45 AM',
      status: 'completed',
      color: 'bg-[#DF1927] text-white',
      icon: Truck,
    },
    {
      id: 5,
      name: 'Out for Delivery',
      date: '26 Sep 2025',
      time: '09:30 AM',
      status: 'active',
      color: 'bg-blue-600 text-white',
      icon: Truck,
    },
    {
      id: 6,
      name: 'Delivered',
      date: '26 Sep 2025',
      time: '11:15 AM',
      status: 'success',
      color: 'bg-emerald-500 text-white',
      icon: Check,
    },
  ]

  // Tracking History matching Mockup 5
  const trackingHistory = [
    {
      id: 'th-1',
      title: 'Delivered',
      desc: 'Your order has been delivered successfully.',
      date: '26 Sep 2025',
      time: '11:15 AM',
      dotBg: 'bg-emerald-500',
    },
    {
      id: 'th-2',
      title: 'Out for Delivery',
      desc: 'Your order is out for delivery.',
      date: '26 Sep 2025',
      time: '09:30 AM',
      dotBg: 'bg-blue-500',
    },
    {
      id: 'th-3',
      title: 'Shipped',
      desc: 'Your order has been shipped.',
      date: '25 Sep 2025',
      time: '08:45 AM',
      dotBg: 'bg-blue-500',
    },
    {
      id: 'th-4',
      title: 'Processing',
      desc: 'Your order is being processed.',
      date: '26 Sep 2025',
      time: '10:15 AM',
      dotBg: 'bg-blue-500',
    },
    {
      id: 'th-5',
      title: 'Order Placed',
      desc: 'Your order has been placed successfully.',
      date: '26 Sep 2025',
      time: '09:02 AM',
      dotBg: 'bg-blue-500',
    },
  ]

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
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span>Customers</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>

              <a
                href="#analytics"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
              >
                <BarChart3 className="w-4 h-4 text-gray-500" />
                <span>Analytics</span>
              </a>

              <a
                href="#marketing"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
              >
                <Megaphone className="w-4 h-4 text-gray-500" />
                <span>Marketing & Offers</span>
              </a>

              <a
                href="#payments"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
              >
                <CreditCard className="w-4 h-4 text-gray-500" />
                <span>Payments</span>
              </a>

              <div className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition cursor-pointer">
                <div className="flex items-center gap-3">
                  <Package className="w-4 h-4 text-gray-500" />
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
          {/* Breadcrumb matching Mockup 5: Orders > All Orders > Order Details */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link to={ROUTES.sellerOrders} className="hover:text-gray-800 transition">
              Orders
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link to={ROUTES.sellerOrders} className="hover:text-gray-800 transition">
              All Orders
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#DF1927] font-semibold">Order Details</span>
          </div>

          {/* Title Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                  Order {orderId}
                </h1>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Delivered
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Placed on 26 Sep 2025, 09:02 AM <span className="text-gray-300 mx-1">|</span> 2 items{' '}
                <span className="text-gray-300 mx-1">|</span> ₹25,998
              </p>
            </div>

            {/* Top Right Action Buttons */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                className="p-2 bg-white border border-gray-200 text-gray-500 hover:text-gray-800 rounded-xl shadow-sm transition"
                title="Options"
              >
                <MoreVertical className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => toast.success('Printing invoice...')}
                className="px-3.5 py-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm transition"
              >
                <Printer className="w-3.5 h-3.5 text-gray-500" />
                <span>Print Invoice</span>
              </button>

              <button
                type="button"
                onClick={() => toast.success('Downloading tax invoice PDF')}
                className="px-4 py-2 bg-[#DF1927] hover:bg-[#c01420] text-white text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm shadow-red-200 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Invoice</span>
              </button>
            </div>
          </div>

          {/* HORIZONTAL 6-STAGE TRACKER CARD (Mockup 5) */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm overflow-x-auto">
            <div className="min-w-[700px] flex items-center justify-between relative">
              {/* Connecting line */}
              <div className="absolute top-5 left-10 right-10 h-0.5 bg-gray-200 -z-0">
                <div className="h-full bg-[#DF1927] w-[65%]"></div>
              </div>

              {trackerStages.map((stage) => {
                const Icon = stage.icon
                return (
                  <div key={stage.id} className="flex flex-col items-center text-center relative z-10">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm ${stage.color}`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-gray-900 mt-2.5">{stage.name}</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">{stage.date}</div>
                    <div className="text-[10px] text-gray-400">{stage.time}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* TWO COLUMN GRID: Left (Order Items, Summary, History) + Right (Customer, Delivery, Payment, Notes, Actions) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* LEFT 8 COLUMNS */}
            <div className="lg:col-span-8 space-y-6">
              {/* CARD 1: Order Items (2) */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                  <ShoppingBag className="w-4 h-4 text-gray-700" />
                  <h3 className="text-sm font-bold text-gray-900">Order Items (2)</h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-gray-100 text-gray-400 font-medium">
                        <th className="pb-3 font-semibold">Product</th>
                        <th className="pb-3 font-semibold">Price</th>
                        <th className="pb-3 font-semibold text-center">Quantity</th>
                        <th className="pb-3 font-semibold text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {/* Item 1 */}
                      <tr>
                        <td className="py-4 pr-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={cartIphone}
                              alt="iPhone"
                              className="w-12 h-12 rounded-xl object-contain bg-gray-50 border border-gray-100 p-1 shrink-0"
                            />
                            <div>
                              <div className="font-bold text-gray-900">iPhone 15 (128GB)</div>
                              <div className="text-[11px] text-gray-500">Black</div>
                              <div className="text-[10px] text-gray-400">SKU: IP15-128</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-3 font-medium text-gray-900">₹79,900</td>
                        <td className="py-4 px-3 text-center font-medium text-gray-700">1</td>
                        <td className="py-4 pl-3 text-right font-bold text-gray-900">₹79,900</td>
                      </tr>

                      {/* Item 2 */}
                      <tr>
                        <td className="py-4 pr-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={cartShoes}
                              alt="Shoes"
                              className="w-12 h-12 rounded-xl object-contain bg-gray-50 border border-gray-100 p-1 shrink-0"
                            />
                            <div>
                              <div className="font-bold text-gray-900">Nike Air Max</div>
                              <div className="text-[11px] text-gray-500">White</div>
                              <div className="text-[10px] text-gray-400">SKU: NK-AM-001</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-3 font-medium text-gray-900">₹12,999</td>
                        <td className="py-4 px-3 text-center font-medium text-gray-700">2</td>
                        <td className="py-4 pl-3 text-right font-bold text-gray-900">₹25,998</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* CARD 2: Order Summary */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-3">
                <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                  <CreditCard className="w-4 h-4 text-gray-700" />
                  <h3 className="text-sm font-bold text-gray-900">Order Summary</h3>
                </div>

                <div className="grid grid-cols-2 gap-y-2 text-xs">
                  <div className="text-gray-500">Items Total (2)</div>
                  <div className="text-right font-semibold text-gray-900">₹25,998</div>

                  <div className="text-gray-500">Shipping Charges</div>
                  <div className="text-right font-semibold text-gray-900">₹0</div>

                  <div className="text-gray-500">Discount</div>
                  <div className="text-right font-semibold text-emerald-600">₹0</div>

                  <div className="text-gray-500">Tax (18% GST)</div>
                  <div className="text-right font-semibold text-gray-900">₹4,680</div>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-900">Total Amount</span>
                  <span className="text-xl font-extrabold text-gray-900">₹30,678</span>
                </div>
              </div>

              {/* CARD 3: Tracking History */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                  <Clock className="w-4 h-4 text-gray-700" />
                  <h3 className="text-sm font-bold text-gray-900">Tracking History</h3>
                </div>

                <div className="relative pl-6 space-y-5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
                  {trackingHistory.map((item) => (
                    <div key={item.id} className="relative">
                      {/* Timeline dot */}
                      <span
                        className={`absolute -left-6 top-1 w-2.5 h-2.5 rounded-full border-2 border-white ring-2 ring-gray-100 ${item.dotBg}`}
                      ></span>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div>
                          <span className="text-xs font-bold text-gray-900">{item.title}</span>
                          <span className="text-xs text-gray-500 ml-2 font-normal">
                            {item.desc}
                          </span>
                        </div>
                        <div className="text-[11px] text-gray-400 shrink-0">
                          {item.date} {item.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT 4 COLUMNS */}
            <div className="lg:col-span-4 space-y-6">
              {/* CARD 1: Customer Information */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-3.5">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-700" />
                    <h3 className="text-sm font-bold text-gray-900">Customer Information</h3>
                  </div>
                  <Link
                    to="/seller/customers/CUST001"
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition"
                  >
                    View Customer
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={customerAvatars.amit}
                    alt="Amit Kumar"
                    className="w-12 h-12 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-900">Amit Kumar</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700">
                        <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                        Regular Customer
                      </span>
                    </div>
                    <div className="text-[11px] text-gray-400">Customer ID: CUST001</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100 space-y-2 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-gray-400" />
                    <span>amit.kumar@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-gray-400" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">
                      Flat 302, A Block, Green Residency, Sector 76, Noida, UP - 201301
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD 2: Delivery Information */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-3.5">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-gray-700" />
                    <h3 className="text-sm font-bold text-gray-900">Delivery Information</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => toast.info('Edit delivery details')}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition"
                  >
                    Edit
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <div className="text-[11px] font-semibold text-gray-400 mb-1">
                      Delivery Address
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      Flat 302, A Block, Green Residency,
                      <br />
                      Sector 76, Noida, UP - 201301
                    </p>
                  </div>

                  <div>
                    <div className="text-[11px] font-semibold text-gray-400 mb-1">
                      Delivery Method
                    </div>
                    <p className="text-gray-700 font-medium">
                      Standard Delivery (3 – 5 business days)
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 3: Payment Information */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-3.5">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-gray-700" />
                    <h3 className="text-sm font-bold text-gray-900">Payment Information</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700">
                    <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                    Paid
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-7 rounded-lg bg-purple-50 text-purple-700 font-extrabold text-[11px] flex items-center justify-center shrink-0 border border-purple-100">
                    UPI
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-gray-900">UPI (PhonePe)</div>
                    <div className="text-[11px] text-gray-500">Transaction ID: T250926090245</div>
                    <div className="text-[10px] text-gray-400">Paid on: 26 Sep 2025, 09:02 AM</div>
                  </div>
                </div>
              </div>

              {/* CARD 4: Order Notes */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900">Order Notes</h3>
                  <button
                    type="button"
                    onClick={() => setIsEditingNotes(!isEditingNotes)}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition"
                  >
                    {isEditingNotes ? 'Cancel' : 'Edit'}
                  </button>
                </div>

                {isEditingNotes ? (
                  <div className="space-y-2">
                    <textarea
                      rows={2}
                      value={tempNotes}
                      onChange={(e) => setTempNotes(e.target.value)}
                      className="w-full p-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927]"
                    />
                    <button
                      type="button"
                      onClick={handleSaveNotes}
                      className="px-3 py-1 bg-[#DF1927] text-white text-xs font-semibold rounded-lg"
                    >
                      Save Note
                    </button>
                  </div>
                ) : (
                  <p className="text-xs text-gray-600 leading-relaxed italic">{orderNotes}</p>
                )}
              </div>

              {/* CARD 5: Actions */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-3">
                <h3 className="text-sm font-bold text-gray-900 pb-3 border-b border-gray-100">
                  Actions
                </h3>

                <div className="grid grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => toast.info('Tracking status: Out for Delivery')}
                    className="flex flex-col items-center justify-center p-2.5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-gray-100 transition text-center"
                  >
                    <Truck className="w-4 h-4 text-gray-600 mb-1.5" />
                    <span className="text-[10px] font-semibold text-gray-700 leading-tight">
                      Track Order
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toast.info('Opening message thread')}
                    className="flex flex-col items-center justify-center p-2.5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-gray-100 transition text-center"
                  >
                    <MessageSquare className="w-4 h-4 text-gray-600 mb-1.5" />
                    <span className="text-[10px] font-semibold text-gray-700 leading-tight">
                      Send Message
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toast.info('Return request opened')}
                    className="flex flex-col items-center justify-center p-2.5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-gray-100 transition text-center"
                  >
                    <RotateCcw className="w-4 h-4 text-gray-600 mb-1.5" />
                    <span className="text-[10px] font-semibold text-gray-700 leading-tight">
                      Request Return
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toast.info('Replacement item generated')}
                    className="flex flex-col items-center justify-center p-2.5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-gray-100 transition text-center"
                  >
                    <RefreshCw className="w-4 h-4 text-gray-600 mb-1.5" />
                    <span className="text-[10px] font-semibold text-gray-700 leading-tight">
                      Create Replacement
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
