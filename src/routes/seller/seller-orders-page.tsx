import React, { useState } from 'react'
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
  MoreVertical,
  ChevronLeft,
  Calendar,
  Truck,
  RotateCcw,
  Filter,
  Download,
  Clock,
  CheckCircle,
  XCircle,
  Cog,
  MapPin,
} from 'lucide-react'
import { toast } from 'sonner'
import { SbtLogo } from '@/components/sbt-logo'
import { ROUTES } from '@/constants/routes'

import cartIphone from '@/assets/premium/iphone15-black.jpg'
import cartShoes from '@/assets/premium/deal-shoes.jpg'
import cartWatch from '@/assets/premium/apple-watch-s9.jpg'
import cartAirpods from '@/assets/premium/airpods-pro-2.jpg'
import cartLuggage from '@/assets/premium/deal-luggage.jpg'

const customerAvatars = {
  dhiraj: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
  amit: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80',
  priya: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80',
  rahul: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&auto=format&fit=crop&q=80',
  sneha: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80',
  karan: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80',
  neha: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80',
  vikas: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&auto=format&fit=crop&q=80',
  pooja: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80',
  rohit: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=80&auto=format&fit=crop&q=80',
  ankita: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=80&auto=format&fit=crop&q=80',
}

interface OrderRowItem {
  id: string
  code: string
  customer: {
    name: string
    avatar: string
    isInitials?: boolean
  }
  items: {
    image: string
    extraCount?: number
  }
  amount: string
  paymentType: 'UPI' | 'Card' | 'COD' | 'Wallet'
  status: 'Delivered' | 'Shipped' | 'Processing' | 'Pending' | 'Cancelled'
  date: string
}

export const SellerOrdersPage: React.FC = () => {
  const navigate = useNavigate()
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('All Status')
  const [selectedPayment, setSelectedPayment] = useState('All Payment Methods')
  const [currentPage, setCurrentPage] = useState(1)

  // 10 Orders matching Mockup 3
  const orders: OrderRowItem[] = [
    {
      id: 'SBT1023439',
      code: '#SBT1023439',
      customer: { name: 'Amit Kumar', avatar: customerAvatars.amit },
      items: { image: cartIphone, extraCount: 1 },
      amount: '₹25,998',
      paymentType: 'UPI',
      status: 'Delivered',
      date: '26 Sep 2025, 09:02 AM',
    },
    {
      id: 'SBT1023342',
      code: '#SBT1023342',
      customer: { name: 'Priya Sharma', avatar: customerAvatars.priya },
      items: { image: cartShoes },
      amount: '₹12,450',
      paymentType: 'Card',
      status: 'Shipped',
      date: '25 Sep 2025, 08:45 AM',
    },
    {
      id: 'SBT1022876',
      code: '#SBT1022876',
      customer: { name: 'Rahul Verma', avatar: 'RV', isInitials: true },
      items: { image: cartWatch, extraCount: 2 },
      amount: '₹7,550',
      paymentType: 'COD',
      status: 'Processing',
      date: '24 Sep 2025, 06:30 PM',
    },
    {
      id: 'SBT1022543',
      code: '#SBT1022543',
      customer: { name: 'Sneha Patel', avatar: customerAvatars.sneha },
      items: { image: cartAirpods },
      amount: '₹6,999',
      paymentType: 'UPI',
      status: 'Delivered',
      date: '24 Sep 2025, 11:15 AM',
    },
    {
      id: 'SBT1022211',
      code: '#SBT1022211',
      customer: { name: 'Karan Mehta', avatar: 'KM', isInitials: true },
      items: { image: cartLuggage },
      amount: '₹4,999',
      paymentType: 'Wallet',
      status: 'Pending',
      date: '23 Sep 2025, 04:20 PM',
    },
    {
      id: 'SBT1021987',
      code: '#SBT1021987',
      customer: { name: 'Neha Singh', avatar: 'NS', isInitials: true },
      items: { image: cartIphone, extraCount: 1 },
      amount: '₹18,990',
      paymentType: 'Card',
      status: 'Shipped',
      date: '22 Sep 2025, 02:15 PM',
    },
    {
      id: 'SBT1021765',
      code: '#SBT1021765',
      customer: { name: 'Vikas Gupta', avatar: customerAvatars.vikas },
      items: { image: cartShoes },
      amount: '₹9,450',
      paymentType: 'UPI',
      status: 'Delivered',
      date: '21 Sep 2025, 10:05 AM',
    },
    {
      id: 'SBT1021654',
      code: '#SBT1021654',
      customer: { name: 'Pooja Reddy', avatar: customerAvatars.pooja },
      items: { image: cartAirpods },
      amount: '₹3,999',
      paymentType: 'COD',
      status: 'Cancelled',
      date: '20 Sep 2025, 06:45 PM',
    },
    {
      id: 'SBT1021543',
      code: '#SBT1021543',
      customer: { name: 'Rohit Yadav', avatar: customerAvatars.rohit },
      items: { image: cartWatch, extraCount: 1 },
      amount: '₹11,990',
      paymentType: 'Card',
      status: 'Processing',
      date: '19 Sep 2025, 03:30 PM',
    },
    {
      id: 'SBT1021432',
      code: '#SBT1021432',
      customer: { name: 'Ankita Das', avatar: 'AD', isInitials: true },
      items: { image: cartLuggage },
      amount: '₹5,499',
      paymentType: 'Wallet',
      status: 'Shipped',
      date: '18 Sep 2025, 12:15 PM',
    },
  ]

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedIds(orders.map((o) => o.id))
    } else {
      setSelectedIds([])
    }
  }

  const handleToggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const filteredOrders = orders.filter((o) => {
    const matchesSearch =
      o.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.amount.includes(searchQuery)
    const matchesStatus =
      selectedStatus === 'All Status' || o.status === selectedStatus
    const matchesPayment =
      selectedPayment === 'All Payment Methods' || o.paymentType === selectedPayment
    return matchesSearch && matchesStatus && matchesPayment
  })

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
          {/* Breadcrumb: Orders > All Orders */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link to={ROUTES.sellerOrders} className="hover:text-gray-800 transition">
              Orders
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#DF1927] font-semibold">All Orders</span>
          </div>

          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Orders</h1>
              <p className="text-xs text-gray-500 mt-1">
                Manage and track all your orders in one place.
              </p>
            </div>

            {/* Top Right Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => toast.success('Orders exported')}
                className="px-3.5 py-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm transition"
              >
                <Download className="w-3.5 h-3.5 text-gray-500" />
                <span>Export</span>
              </button>

              <Link
                to={ROUTES.sellerCreateOrder}
                className="px-4 py-2 bg-[#DF1927] hover:bg-[#c01420] text-white text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm shadow-red-200 transition"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Create Order</span>
              </Link>
            </div>
          </div>

          {/* 6 KPI METRIC CARDS (Mockup 3) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {/* 1. Total Orders */}
            <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-[#DF1927] flex items-center justify-center shrink-0">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-gray-500 font-medium">Total Orders</div>
                <div className="text-lg font-bold text-gray-900 leading-tight">1,248</div>
                <div className="text-[10px] font-semibold text-emerald-600">↗ 18%</div>
              </div>
            </div>

            {/* 2. Pending */}
            <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-gray-500 font-medium">Pending</div>
                <div className="text-lg font-bold text-gray-900 leading-tight">120</div>
                <div className="text-[10px] font-semibold text-emerald-600">↗ 5%</div>
              </div>
            </div>

            {/* 3. Processing */}
            <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Cog className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-gray-500 font-medium">Processing</div>
                <div className="text-lg font-bold text-gray-900 leading-tight">320</div>
                <div className="text-[10px] font-semibold text-emerald-600">↗ 12%</div>
              </div>
            </div>

            {/* 4. Shipped */}
            <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-gray-500 font-medium">Shipped</div>
                <div className="text-lg font-bold text-gray-900 leading-tight">480</div>
                <div className="text-[10px] font-semibold text-emerald-600">↗ 22%</div>
              </div>
            </div>

            {/* 5. Delivered */}
            <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-gray-500 font-medium">Delivered</div>
                <div className="text-lg font-bold text-gray-900 leading-tight">302</div>
                <div className="text-[10px] font-semibold text-emerald-600">↗ 28%</div>
              </div>
            </div>

            {/* 6. Cancelled */}
            <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                <XCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-gray-500 font-medium">Cancelled</div>
                <div className="text-lg font-bold text-gray-900 leading-tight">26</div>
                <div className="text-[10px] font-semibold text-red-500">↘ 10%</div>
              </div>
            </div>
          </div>

          {/* FILTER ROW (Mockup 3) */}
          <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by Order ID, customer name, product or phone..."
                className="w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927] text-gray-600 font-medium"
                aria-label="Filter orders status"
              >
                <option>All Status</option>
                <option>Delivered</option>
                <option>Shipped</option>
                <option>Processing</option>
                <option>Pending</option>
                <option>Cancelled</option>
              </select>

              <select
                value={selectedPayment}
                onChange={(e) => setSelectedPayment(e.target.value)}
                className="px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927] text-gray-600 font-medium"
                aria-label="Filter payment method"
              >
                <option>All Payment Methods</option>
                <option>UPI</option>
                <option>Card</option>
                <option>COD</option>
                <option>Wallet</option>
              </select>

              <button
                type="button"
                className="px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl text-gray-600 flex items-center gap-1.5 whitespace-nowrap hover:bg-gray-100 transition"
              >
                <Calendar className="w-3.5 h-3.5 text-gray-500" />
                <span>26 Jun 2025 - 02 Oct 2025</span>
              </button>

              <button
                type="button"
                className="px-3.5 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl text-gray-700 flex items-center gap-1.5 font-medium hover:bg-gray-100 transition"
              >
                <Filter className="w-3.5 h-3.5 text-gray-500" />
                <span>Filter</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedStatus('All Status')
                  setSelectedPayment('All Payment Methods')
                }}
                className="px-3.5 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl text-gray-700 flex items-center gap-1.5 font-medium hover:bg-gray-100 transition"
              >
                <RotateCcw className="w-3.5 h-3.5 text-gray-500" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* TWO COLUMN GRID: Orders Table (8 cols) + Right Details Inspector (4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* LEFT 8 COLUMNS */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm overflow-hidden space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-gray-100 text-gray-400 font-medium">
                      <th className="pb-3.5 pr-2 w-8">
                        <input
                          type="checkbox"
                          checked={
                            selectedIds.length === filteredOrders.length &&
                            filteredOrders.length > 0
                          }
                          onChange={handleSelectAll}
                          className="rounded border-gray-300 text-[#DF1927] focus:ring-[#DF1927]"
                          aria-label="Select all orders"
                        />
                      </th>
                      <th className="pb-3.5 font-semibold">Order ID</th>
                      <th className="pb-3.5 font-semibold">Customer</th>
                      <th className="pb-3.5 font-semibold">Items</th>
                      <th className="pb-3.5 font-semibold">Amount</th>
                      <th className="pb-3.5 font-semibold">Payment</th>
                      <th className="pb-3.5 font-semibold">Status</th>
                      <th className="pb-3.5 font-semibold">Date</th>
                      <th className="pb-3.5 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredOrders.map((o) => (
                      <tr key={o.id} className="hover:bg-gray-50/70 transition group">
                        {/* Checkbox */}
                        <td className="py-3.5 pr-2">
                          <input
                            type="checkbox"
                            checked={selectedIds.includes(o.id)}
                            onChange={() => handleToggleSelect(o.id)}
                            className="rounded border-gray-300 text-[#DF1927] focus:ring-[#DF1927]"
                            aria-label={`Select order ${o.code}`}
                          />
                        </td>

                        {/* Order ID */}
                        <td className="py-3.5 pr-3">
                          <Link
                            to={`/seller/orders/${o.id}`}
                            className="font-semibold text-blue-600 hover:underline"
                          >
                            {o.code}
                          </Link>
                        </td>

                        {/* Customer */}
                        <td className="py-3.5 px-3">
                          <div className="flex items-center gap-2">
                            {o.customer.isInitials ? (
                              <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 text-[10px] font-bold flex items-center justify-center shrink-0">
                                {o.customer.avatar}
                              </div>
                            ) : (
                              <img
                                src={o.customer.avatar}
                                alt={o.customer.name}
                                className="w-7 h-7 rounded-full object-cover shrink-0"
                              />
                            )}
                            <span className="font-semibold text-gray-900 whitespace-nowrap">
                              {o.customer.name}
                            </span>
                          </div>
                        </td>

                        {/* Items */}
                        <td className="py-3.5 px-3">
                          <div className="flex items-center gap-1.5">
                            <img
                              src={o.items.image}
                              alt="Thumbnail"
                              className="w-8 h-8 rounded-lg object-contain bg-gray-50 border border-gray-100 p-0.5 shrink-0"
                            />
                            {o.items.extraCount && (
                              <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-1 py-0.5 rounded">
                                +{o.items.extraCount}
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Amount */}
                        <td className="py-3.5 px-3 font-bold text-gray-900">{o.amount}</td>

                        {/* Payment */}
                        <td className="py-3.5 px-3">
                          {o.paymentType === 'UPI' && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-50 text-purple-700">
                              UPI
                            </span>
                          )}
                          {o.paymentType === 'Card' && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700">
                              Card
                            </span>
                          )}
                          {o.paymentType === 'COD' && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700">
                              COD
                            </span>
                          )}
                          {o.paymentType === 'Wallet' && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-pink-50 text-pink-700">
                              Wallet
                            </span>
                          )}
                        </td>

                        {/* Status */}
                        <td className="py-3.5 px-3">
                          {o.status === 'Delivered' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                              Delivered
                            </span>
                          )}
                          {o.status === 'Shipped' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                              Shipped
                            </span>
                          )}
                          {o.status === 'Processing' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                              Processing
                            </span>
                          )}
                          {o.status === 'Pending' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                              Pending
                            </span>
                          )}
                          {o.status === 'Cancelled' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-red-50 text-red-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                              Cancelled
                            </span>
                          )}
                        </td>

                        {/* Date */}
                        <td className="py-3.5 px-3 text-gray-500 text-[11px] whitespace-nowrap">
                          {o.date}
                        </td>

                        {/* Actions */}
                        <td className="py-3.5 pl-3 text-right">
                          <button
                            type="button"
                            onClick={() => navigate(`/seller/orders/${o.id}`)}
                            className="p-1 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition"
                            title="Order Details"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
                <div>Showing 1 to 10 of 1,248 orders</div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 transition"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    className="w-8 h-8 rounded-lg bg-[#DF1927] text-white font-bold flex items-center justify-center shadow-xs"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700 flex items-center justify-center transition"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700 flex items-center justify-center transition"
                  >
                    3
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700 flex items-center justify-center transition"
                  >
                    4
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700 flex items-center justify-center transition"
                  >
                    5
                  </button>
                  <span className="px-1 text-gray-400">...</span>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700 flex items-center justify-center transition"
                  >
                    125
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => p + 1)}
                    className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT 4 COLUMNS: ORDER DETAILS INSPECTOR (Mockup 3) */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="text-sm font-bold text-gray-900">Order Details</h3>
                <Link
                  to="/seller/orders/SBT1023439"
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition"
                >
                  View Full Details
                </Link>
              </div>

              {/* Order Status Header */}
              <div className="flex items-start gap-3">
                <img
                  src={cartIphone}
                  alt="Order item"
                  className="w-12 h-12 rounded-xl object-contain bg-gray-50 border border-gray-100 p-1 shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-900">#SBT1023439</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700">
                      <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                      Delivered
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">26 Sep 2025, 09:02 AM</div>
                </div>
              </div>

              {/* Customer */}
              <div className="pt-3 border-t border-gray-100 space-y-1.5">
                <div className="text-[11px] font-semibold text-gray-400">Customer</div>
                <div className="flex items-center gap-2.5">
                  <img
                    src={customerAvatars.amit}
                    alt="Amit Kumar"
                    className="w-8 h-8 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <div className="text-xs font-bold text-gray-900">Amit Kumar</div>
                    <div className="text-[11px] text-gray-500">amit.kumar@gmail.com</div>
                    <div className="text-[11px] text-gray-500">+91 98765 43210</div>
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="pt-3 border-t border-gray-100 space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Delivery Address</span>
                </div>
                <div className="text-xs text-gray-700 pl-5 leading-relaxed">
                  <p>Flat 302, A Block, Green Residency</p>
                  <p>Sector 76, Noida, UP - 201301</p>
                </div>
              </div>

              {/* Payment Method */}
              <div className="pt-3 border-t border-gray-100 space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-400">
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Payment Method</span>
                </div>
                <div className="flex items-center gap-2.5 pl-5 pt-1">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-50 text-purple-700">
                    UPI
                  </span>
                  <div>
                    <div className="text-xs font-bold text-gray-900">UPI (PhonePe)</div>
                    <div className="text-[10px] text-gray-400">Txn ID: T250926090245</div>
                  </div>
                </div>
              </div>

              {/* Order Items (2) */}
              <div className="pt-3 border-t border-gray-100 space-y-2">
                <div className="text-[11px] font-semibold text-gray-400">Order Items (2)</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <img
                        src={cartIphone}
                        alt="iPhone"
                        className="w-8 h-8 rounded-lg object-contain bg-gray-50 border border-gray-100 p-0.5 shrink-0"
                      />
                      <div className="truncate">
                        <div className="font-semibold text-gray-900 truncate">iPhone 15 (128GB)</div>
                        <div className="text-[10px] text-gray-400">Black • ₹79,900 × 1</div>
                      </div>
                    </div>
                    <span className="font-bold text-gray-900 shrink-0">₹79,900</span>
                  </div>

                  <div className="flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <img
                        src={cartShoes}
                        alt="Shoes"
                        className="w-8 h-8 rounded-lg object-contain bg-gray-50 border border-gray-100 p-0.5 shrink-0"
                      />
                      <div className="truncate">
                        <div className="font-semibold text-gray-900 truncate">Nike Air Max</div>
                        <div className="text-[10px] text-gray-400">White • ₹12,999 × 2</div>
                      </div>
                    </div>
                    <span className="font-bold text-gray-900 shrink-0">₹25,998</span>
                  </div>
                </div>
              </div>

              {/* Total Amount */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-800">Total Amount</span>
                <span className="text-lg font-bold text-gray-900">₹25,998</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
