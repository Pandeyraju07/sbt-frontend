import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
  Star,
  Settings,
  HelpCircle,
  Plus,
  Calendar,
  ChevronRight,
  Crown,
  ArrowRight,
  TrendingUp,
  MoreVertical,
  Download,
  Tag,
  Grid,
  FileText,
  CheckCircle2,
  Circle,
  Trophy,
  LifeBuoy,
  Clock,
  Truck,
  XCircle,
} from 'lucide-react'
import { toast } from 'sonner'
import { SbtLogo } from '@/components/sbt-logo'
import { ROUTES } from '@/constants/routes'

import cartIphone from '@/assets/premium/iphone15-blue.jpg'
import cartAirpods from '@/assets/premium/airpods-pro-2.jpg'
import cartAppleWatch from '@/assets/premium/apple-watch-s9.jpg'
import galaxyWatch from '@/assets/premium/galaxy-watch.jpg'
import dealShoes from '@/assets/premium/deal-shoes.jpg'
import dealLuggage from '@/assets/premium/deal-luggage.jpg'

// High-fidelity customer avatars matching mockups
const customerAvatars = {
  dhiraj: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
  amit: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80',
  priya: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80',
  rahul: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&auto=format&fit=crop&q=80',
  sneha: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80',
  karan: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&auto=format&fit=crop&q=80',
}

// 5 Design Mockup Variants provided by the user
export type DashboardVariant =
  | 'variant1' // Mockup 1: Full Analytics Suite (Sales & Orders + Tooltip, Order Status Donut, Table, Ranked List, Bottom 3-Col)
  | 'variant2' // Mockup 2: Performance & Category Sales (Dual Curve, Category Sales Donut)
  | 'variant3' // Mockup 3: Horizontal Card Strip & Compact Orders
  | 'variant4' // Mockup 4: Store Setup & 80% Onboarding Completion Gauge
  | 'variant5' // Mockup 5: Operational Dashboard with Store Settings & Support Sidebar

export const SellerDashboardPage: React.FC = () => {
  // Current active variant matching the 5 mockups
  const [activeVariant, setActiveVariant] = useState<DashboardVariant>('variant1')

  // Metric tab selector for Sales & Orders chart
  const [activeMetricTab, setActiveMetricTab] = useState<'sales' | 'orders' | 'profit'>('sales')
  const [selectedChannel, setSelectedChannel] = useState('All Channels')
  const [selectedTimeframe, setSelectedTimeframe] = useState('Last 7 Days')
  const [activeTooltipIndex, setActiveTooltipIndex] = useState<number | null>(3) // Default highlighted at 29 Sep 2025

  // Store completion checklist state (Mockup 4)
  const [checklist, setChecklist] = useState([
    { id: 'business', label: 'Business Details', completed: true },
    { id: 'store', label: 'Store Information', completed: true },
    { id: 'bank', label: 'Bank & Payout Details', completed: true },
    { id: 'catalog', label: 'Product Catalog', completed: true },
    { id: 'docs', label: 'Verification Documents', completed: false },
    { id: 'products', label: 'Add 5+ Products', completed: false },
  ])

  const toggleChecklist = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    )
  }

  // 4 KPI Summary Cards matching all mockups
  const kpiData = [
    {
      title: 'Total Orders',
      value: '1,248',
      trend: '12%',
      trendLabel: 'vs last week',
      icon: ShoppingBag,
      iconBg: 'bg-red-50 text-[#DF1927]',
      sparklineColor: '#DF1927',
      sparklinePath: 'M0,18 Q20,16 40,10 T80,14 T120,4',
    },
    {
      title: 'Total Sales',
      value: '₹3,24,580',
      trend: '18%',
      trendLabel: 'vs last week',
      icon: TrendingUp,
      iconBg: 'bg-emerald-50 text-emerald-600',
      sparklineColor: '#10B981',
      sparklinePath: 'M0,18 Q25,17 50,12 T90,6 T120,2',
    },
    {
      title: 'Products',
      value: '320',
      trend: '6%',
      trendLabel: 'Active products',
      icon: Package,
      iconBg: 'bg-blue-50 text-blue-600',
      sparklineColor: '#3B82F6',
      sparklinePath: 'M0,16 Q30,15 60,11 T95,8 T120,5',
    },
    {
      title: 'Customers',
      value: '892',
      trend: '14%',
      trendLabel: 'Total customers',
      icon: Users,
      iconBg: 'bg-amber-50 text-amber-600',
      sparklineColor: '#F59E0B',
      sparklinePath: 'M0,18 Q20,17 45,13 T85,8 T120,3',
    },
  ]

  // Chart data nodes matching mockup dates (26 Sep to 02 Oct)
  const chartPoints = [
    { date: '26 Sep', sales: 12000, orders: 12, salesLabel: '₹12,450', ordersCount: 12, x: 50, y: 155 },
    { date: '27 Sep', sales: 24500, orders: 18, salesLabel: '₹24,500', ordersCount: 18, x: 150, y: 145 },
    { date: '28 Sep', sales: 38200, orders: 25, salesLabel: '₹38,200', ordersCount: 25, x: 250, y: 130 },
    { date: '29 Sep', sales: 68420, orders: 42, salesLabel: '₹68,420', ordersCount: 42, x: 350, y: 92 }, // Mockup highlighted point
    { date: '30 Sep', sales: 74200, orders: 48, salesLabel: '₹74,200', ordersCount: 48, x: 450, y: 80 },
    { date: '01 Oct', sales: 81500, orders: 52, salesLabel: '₹81,500', ordersCount: 52, x: 550, y: 65 },
    { date: '02 Oct', sales: 88900, orders: 58, salesLabel: '₹88,900', ordersCount: 58, x: 650, y: 55 },
  ]

  // Recent Orders Data matching mockups exactly
  const recentOrders = [
    {
      id: 'SBT102343',
      customer: 'Amit Kumar',
      location: 'Noida, India',
      avatar: customerAvatars.amit,
      productName: 'Apple AirPods Pro',
      image: cartAirpods,
      amount: '₹24,999',
      status: 'Processing',
      statusBadge: 'bg-amber-50 text-amber-700 border-amber-200/60',
      dateTime: '26 Sep 2025 09:02 AM',
    },
    {
      id: 'SBT102342',
      customer: 'Priya Sharma',
      location: 'Delhi, India',
      avatar: customerAvatars.priya,
      productName: 'iPhone 15 (128GB)',
      image: cartIphone,
      amount: '₹89,999',
      status: 'Shipped',
      statusBadge: 'bg-blue-50 text-blue-700 border-blue-200/60',
      dateTime: '26 Sep 2025 08:45 AM',
    },
    {
      id: 'SBT102341',
      customer: 'Rahul Verma',
      location: 'Bengaluru, India',
      avatar: customerAvatars.rahul,
      productName: 'Samsung Galaxy Watch 6',
      image: cartAppleWatch,
      amount: '₹31,999',
      status: 'Delivered',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
      dateTime: '25 Sep 2025 06:18 PM',
    },
    {
      id: 'SBT102340',
      customer: 'Sneha Patel',
      location: 'Mumbai, India',
      avatar: customerAvatars.sneha,
      productName: 'Nike Air Force 1',
      image: dealShoes,
      amount: '₹29,999',
      status: 'Cancelled',
      statusBadge: 'bg-rose-50 text-rose-700 border-rose-200/60',
      dateTime: '25 Sep 2025 12:30 PM',
    },
    {
      id: 'SBT102339',
      customer: 'Karan Mehta',
      location: 'Pune, India',
      avatar: customerAvatars.karan,
      productName: 'Fastrack Backpack',
      image: dealLuggage,
      amount: '₹61,999',
      status: 'Delivered',
      statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
      dateTime: '24 Sep 2025 11:05 AM',
    },
  ]

  // Top Selling Products ranked 1 to 5 matching mockups
  const topSellingRanked = [
    {
      rank: 1,
      name: 'iPhone 15 (128GB)',
      sold: '320 sold',
      price: '₹69,999',
      trend: '18%',
      image: cartIphone,
    },
    {
      rank: 2,
      name: 'Apple AirPods Pro',
      subtitle: '(2nd Gen)',
      sold: '286 sold',
      price: '₹24,999',
      trend: '14%',
      image: cartAirpods,
    },
    {
      rank: 3,
      name: 'Samsung Galaxy Watch 6',
      sold: '214 sold',
      price: '₹29,999',
      trend: '12%',
      image: galaxyWatch,
    },
    {
      rank: 4,
      name: 'Nike Air Force 1',
      sold: '198 sold',
      price: '₹7,999',
      trend: '10%',
      image: dealShoes,
    },
    {
      rank: 5,
      name: 'Fastrack Backpack',
      sold: '176 sold',
      price: '₹2,499',
      trend: '8%',
      image: dealLuggage,
    },
  ]

  // Subtitles by variant matching mockups
  const subtitleByVariant: Record<DashboardVariant, string> = {
    variant1: "Here's a snapshot of your store performance.",
    variant2: "Here's what's happening with your store today.",
    variant3: 'Your store is performing well today.',
    variant4: "Here's what's happening with your store today.",
    variant5: 'Your store is performing well. Keep growing with SBT!',
  }

  const activePoint =
    activeTooltipIndex !== null ? chartPoints[activeTooltipIndex] : undefined

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans flex flex-col selection:bg-red-100 selection:text-red-900">
      {/* ===================================================================== */}
      {/* 0. MOCKUP VARIANT SWITCHER BAR (Easily switch between all 5 designs)   */}
      {/* ===================================================================== */}
      <div className="bg-slate-900 text-white px-4 py-2 text-xs flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 z-50">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center size-5 rounded-full bg-[#DF1927] text-white font-bold text-[10px]">
            5
          </span>
          <span className="font-semibold text-slate-200">Seller Dashboard Mockups:</span>
          <span className="text-slate-400 hidden sm:inline">Select design view:</span>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
          <button
            type="button"
            onClick={() => setActiveVariant('variant1')}
            className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition cursor-pointer shrink-0 ${
              activeVariant === 'variant1'
                ? 'bg-[#DF1927] text-white shadow-xs'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
          >
            Mockup 1: Revenue &amp; Order Funnel
          </button>
          <button
            type="button"
            onClick={() => setActiveVariant('variant2')}
            className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition cursor-pointer shrink-0 ${
              activeVariant === 'variant2'
                ? 'bg-[#DF1927] text-white shadow-xs'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
          >
            Mockup 2: Sales Overview (Tabs)
          </button>
          <button
            type="button"
            onClick={() => setActiveVariant('variant3')}
            className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition cursor-pointer shrink-0 ${
              activeVariant === 'variant3'
                ? 'bg-[#DF1927] text-white shadow-xs'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
          >
            Mockup 3: Sales &amp; Orders
          </button>
          <button
            type="button"
            onClick={() => setActiveVariant('variant4')}
            className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition cursor-pointer shrink-0 ${
              activeVariant === 'variant4'
                ? 'bg-[#DF1927] text-white shadow-xs'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
          >
            Mockup 4: Store Completion (80%)
          </button>
          <button
            type="button"
            onClick={() => setActiveVariant('variant5')}
            className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition cursor-pointer shrink-0 ${
              activeVariant === 'variant5'
                ? 'bg-[#DF1927] text-white shadow-xs'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
          >
            Mockup 5: Full Analytics Suite
          </button>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* 1. TOP HEADER BAR                                                      */}
      {/* ===================================================================== */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 h-16 px-4 lg:px-6 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-5">
          <Link to={ROUTES.home} className="flex items-center gap-2">
            <SbtLogo className="h-8 w-auto" />
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            className="p-2 rounded-lg hover:bg-slate-100 text-slate-700 transition cursor-pointer"
          >
            <div className="flex flex-col gap-1 w-4">
              <span className="w-4 h-0.5 bg-slate-700 rounded-full" />
              <span className="w-4 h-0.5 bg-slate-700 rounded-full" />
              <span className="w-4 h-0.5 bg-slate-700 rounded-full" />
            </div>
          </button>
        </div>

        {/* Global Search with Circular Red Button */}
        <div className="flex-1 max-w-xl mx-6 hidden md:block">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              placeholder="Search orders, products, customers..."
              className="w-full pl-11 pr-12 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#DF1927]/20 focus:border-[#DF1927] transition-all"
            />
            <button
              type="button"
              className="absolute right-1 w-8 h-8 rounded-full bg-[#DF1927] text-white flex items-center justify-center hover:bg-[#c01420] transition-colors shadow-xs cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Right user & notifications */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 size-4 bg-[#DF1927] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
              12
            </span>
          </button>

          <button
            type="button"
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors hidden sm:flex cursor-pointer"
            aria-label="Help"
          >
            <HelpCircle className="w-5 h-5" />
          </button>

          <div className="h-7 w-px bg-gray-200 hidden sm:block" />

          {/* User Profile Avatar matching Mockup */}
          <div className="flex items-center gap-2.5 cursor-pointer group">
            {activeVariant === 'variant3' ? (
              <div className="size-9 rounded-full bg-[#344054] text-white font-semibold flex items-center justify-center text-xs shadow-xs">
                DS
              </div>
            ) : (
              <img
                src={customerAvatars.dhiraj}
                alt="Dhiraj Sharma"
                className="size-9 rounded-full object-cover border border-slate-200 shadow-xs"
              />
            )}
            <div className="hidden sm:block text-left">
              <div className="text-xs font-semibold text-gray-900 group-hover:text-[#DF1927] transition-colors">
                Dhiraj Sharma
              </div>
              <div className="text-[11px] text-gray-500">Seller</div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </div>
        </div>
      </header>

      {/* ===================================================================== */}
      {/* 2. BODY LAYOUT: SIDEBAR + MAIN CONTENT                                 */}
      {/* ===================================================================== */}
      <div className="flex-1 flex max-w-[1680px] w-full mx-auto">
        {/* Left Sidebar */}
        <aside className="w-60 bg-white border-r border-gray-200 p-4 flex flex-col justify-between shrink-0 hidden lg:flex">
          <div className="space-y-1">
            <Link
              to={ROUTES.sellerDashboard}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold bg-red-50 text-[#DF1927] border-l-4 border-[#DF1927] transition-colors"
            >
              <LayoutDashboard className="w-4 h-4 text-[#DF1927]" />
              <span>Dashboard</span>
            </Link>

            <Link
              to={ROUTES.sellerOrders}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-4 h-4 text-gray-500" />
                <span>Orders</span>
              </div>
              <span className="size-5 rounded-full bg-red-100 text-[#DF1927] font-bold text-[10px] flex items-center justify-center">
                8
              </span>
            </Link>

            <Link
              to={ROUTES.sellerProducts}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Package className="w-4 h-4 text-gray-500" />
                <span>Products</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </Link>

            <Link
              to={ROUTES.sellerInventory}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              <Layers className="w-4 h-4 text-gray-500" />
              <span>Inventory</span>
            </Link>

            <span className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 cursor-pointer">
              <Users className="w-4 h-4 text-gray-500" />
              <span>Customers</span>
            </span>

            <span className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 cursor-pointer">
              <CreditCard className="w-4 h-4 text-gray-500" />
              <span>Payments</span>
            </span>

            <span className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-4 h-4 text-gray-500" />
                <span>Reports</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </span>

            <span className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 cursor-pointer">
              <Megaphone className="w-4 h-4 text-gray-500" />
              <span>Marketing</span>
            </span>

            <div className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3">
                <Star className="w-4 h-4 text-gray-500" />
                <span>Reviews</span>
              </div>
              <span className="size-5 rounded-full bg-red-100 text-[#DF1927] font-bold text-[10px] flex items-center justify-center">
                3
              </span>
            </div>

            <div className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3">
                <Bell className="w-4 h-4 text-gray-500" />
                <span>Messages</span>
              </div>
              <span className="size-5 rounded-full bg-red-100 text-[#DF1927] font-bold text-[10px] flex items-center justify-center">
                4
              </span>
            </div>

            <span className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 cursor-pointer">
              <Tag className="w-4 h-4 text-gray-500" />
              <span>Coupons &amp; Offers</span>
            </span>

            <span className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 cursor-pointer">
              <Settings className="w-4 h-4 text-gray-500" />
              <span>Store Settings</span>
            </span>

            <span className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 cursor-pointer">
              <LifeBuoy className="w-4 h-4 text-gray-500" />
              <span>Support</span>
            </span>
          </div>

          {/* SBT Seller Pro Banner */}
          <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-red-50/80 via-white to-pink-50/60 border border-red-100 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-900">
              <Crown className="w-4 h-4 text-amber-500" />
              <span>SBT Seller Pro</span>
            </div>
            <p className="text-[11px] text-gray-500 leading-snug">
              Unlock advanced tools, marketing support and in-depth analytics.
            </p>
            <button
              type="button"
              onClick={() => toast.info('SBT Seller Pro Upgrade requested')}
              className="w-full py-1.5 px-3 text-xs font-semibold text-[#DF1927] border border-[#DF1927] hover:bg-[#DF1927] hover:text-white rounded-xl transition cursor-pointer"
            >
              Upgrade Now →
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-7 space-y-6 overflow-hidden">
          {/* Top Greeting Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs sm:text-sm text-slate-500 font-medium">Good Morning,</span>
              <h1 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <span>Dhiraj Sharma</span>
                <span className="text-2xl">👋</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                {subtitleByVariant[activeVariant]}
              </p>
            </div>

            {/* Date Range & Top Action Button */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
                <Calendar className="size-3.5 text-slate-400" />
                <span>26 Sep 2025 - 02 Oct 2025</span>
                <ChevronDown className="size-3 text-slate-400" />
              </div>

              {activeVariant === 'variant1' ? (
                <button
                  type="button"
                  onClick={() => toast.success('Exporting store analytics report (PDF)...')}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#DF1927] hover:bg-[#c01420] text-white text-xs font-bold transition shadow-md shadow-[#DF1927]/25 cursor-pointer"
                >
                  <Download className="size-3.5 stroke-[2.5]" />
                  <span>Download Report</span>
                </button>
              ) : (
                <Link
                  to={ROUTES.sellerAddProduct}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#DF1927] hover:bg-[#c01420] text-white text-xs font-bold transition shadow-md shadow-[#DF1927]/25 cursor-pointer"
                >
                  <Plus className="size-3.5 stroke-[2.5]" />
                  <span>Add Product</span>
                </Link>
              )}
            </div>
          </div>

          {/* 4 KPI Summary Cards with Bottom Sparklines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpiData.map((kpi, idx) => (
              <div
                key={idx}
                className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between relative overflow-hidden group hover:border-slate-300 transition"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="text-xs text-slate-500 font-medium">{kpi.title}</span>
                    <div className="text-2xl font-bold text-slate-900 tracking-tight">
                      {kpi.value}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] pt-0.5">
                      <span className="text-emerald-600 font-bold flex items-center gap-0.5">
                        <TrendingUp className="size-3" />
                        {kpi.trend}
                      </span>
                      <span className="text-slate-400">{kpi.trendLabel}</span>
                    </div>
                  </div>
                  <div
                    className={`size-11 rounded-2xl flex items-center justify-center shrink-0 ${kpi.iconBg}`}
                  >
                    <kpi.icon className="size-5 stroke-[2]" />
                  </div>
                </div>

                {/* Micro Sparkline Curve at bottom */}
                <div className="mt-3 pt-1 flex justify-end">
                  <svg className="w-24 h-6 overflow-visible" viewBox="0 0 120 20">
                    <path
                      d={kpi.sparklinePath}
                      fill="none"
                      stroke={kpi.sparklineColor}
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* ================================================================= */}
          {/* MIDDLE ROW: SALES OVERVIEW CHART + SECONDARY WIDGET               */}
          {/* ================================================================= */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
            {/* Sales Chart (8 cols) */}
            <div className="xl:col-span-8 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-1 border-b border-slate-100/80">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="size-4 text-[#DF1927]" />
                    <h3 className="text-sm font-bold text-slate-900">
                      {activeVariant === 'variant3' ? 'Sales Overview' : 'Sales & Orders Overview'}
                    </h3>
                  </div>

                  {/* Metric Toggle Tabs (Mockup 1 & 5 & 4) */}
                  {activeVariant !== 'variant3' && (
                    <div className="flex items-center p-0.5 rounded-lg bg-slate-100 text-xs font-semibold">
                      <button
                        type="button"
                        onClick={() => setActiveMetricTab('sales')}
                        className={`px-3 py-1 rounded-md transition cursor-pointer ${
                          activeMetricTab === 'sales'
                            ? 'bg-[#DF1927] text-white shadow-2xs font-bold'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Sales (₹)
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveMetricTab('orders')}
                        className={`px-3 py-1 rounded-md transition cursor-pointer ${
                          activeMetricTab === 'orders'
                            ? 'bg-[#DF1927] text-white shadow-2xs font-bold'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Orders
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveMetricTab('profit')}
                        className={`px-3 py-1 rounded-md transition cursor-pointer ${
                          activeMetricTab === 'profit'
                            ? 'bg-[#DF1927] text-white shadow-2xs font-bold'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Profit
                      </button>
                    </div>
                  )}
                </div>

                {/* Right controls: Channel & Timeframe */}
                <div className="flex items-center gap-2">
                  {/* Legend dots */}
                  <div className="flex items-center gap-3 text-xs mr-2 hidden md:flex">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-[#DF1927]" />
                      <span className="text-slate-500 text-[11px]">Sales (₹)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-rose-300" />
                      <span className="text-slate-500 text-[11px]">Orders</span>
                    </div>
                  </div>

                  <select
                    value={selectedChannel}
                    onChange={(e) => setSelectedChannel(e.target.value)}
                    className="px-2.5 py-1 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 bg-white focus:outline-none cursor-pointer"
                  >
                    <option value="All Channels">All Channels</option>
                    <option value="Web Store">Web Store</option>
                    <option value="Mobile App">Mobile App</option>
                  </select>

                  <select
                    value={selectedTimeframe}
                    onChange={(e) => setSelectedTimeframe(e.target.value)}
                    className="px-2.5 py-1 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 bg-white focus:outline-none cursor-pointer"
                  >
                    <option value="Last 7 Days">Last 7 Days</option>
                    <option value="Last 30 Days">Last 30 Days</option>
                    <option value="This Quarter">This Quarter</option>
                  </select>
                </div>
              </div>

              {/* Big Stat display (Mockup 3) */}
              {activeVariant === 'variant3' && (
                <div className="pt-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-slate-950">
                      ₹3,24,580
                    </span>
                    <span className="text-xs font-bold text-emerald-600 flex items-center">
                      ↗ 18%
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Total sales (including taxes)
                  </span>
                </div>
              )}

              {/* Interactive Curve Chart with Tooltip */}
              <div className="relative pt-4">
                <div className="h-64 w-full relative flex flex-col justify-between">
                  <svg
                    viewBox="0 0 700 220"
                    className="w-full h-52 overflow-visible select-none"
                  >
                    <defs>
                      <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#DF1927" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#DF1927" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Horizontal Y-Grid lines with values */}
                    {[
                      { y: 25, label: '₹1,00,000' },
                      { y: 65, label: '₹75,000' },
                      { y: 105, label: '₹50,000' },
                      { y: 145, label: '₹25,000' },
                      { y: 185, label: '0' },
                    ].map((grid, i) => (
                      <g key={i}>
                        <text
                          x="0"
                          y={grid.y + 4}
                          className="text-[10px] fill-slate-400 font-sans"
                        >
                          {grid.label}
                        </text>
                        <line
                          x1="45"
                          y1={grid.y}
                          x2="700"
                          y2={grid.y}
                          stroke="#F1F5F9"
                          strokeWidth="1"
                        />
                      </g>
                    ))}

                    {/* Shaded Area under sales curve */}
                    <path
                      d="M 50 155 Q 150 145, 250 130 T 350 92 T 450 80 T 550 65 T 650 55 L 650 185 L 50 185 Z"
                      fill="url(#salesGradient)"
                    />

                    {/* Orders curve (light salmon/pink) */}
                    <path
                      d="M 50 170 Q 150 160, 250 148 T 350 115 T 450 105 T 550 95 T 650 88"
                      fill="none"
                      stroke="#FCA5A5"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    {/* Sales curve (primary red) */}
                    <path
                      d="M 50 155 Q 150 145, 250 130 T 350 92 T 450 80 T 550 65 T 650 55"
                      fill="none"
                      stroke="#DF1927"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />

                    {/* Active vertical guideline for selected day */}
                    {activePoint && (
                      <line
                        x1={activePoint.x}
                        y1="25"
                        x2={activePoint.x}
                        y2="185"
                        stroke="#DF1927"
                        strokeWidth="1"
                        strokeDasharray="3 3"
                        opacity="0.6"
                      />
                    )}

                    {/* Data Points on Sales Line */}
                    {chartPoints.map((pt, i) => {
                      const isHovered = activeTooltipIndex === i
                      return (
                        <g
                          key={i}
                          className="cursor-pointer"
                          onClick={() => setActiveTooltipIndex(i)}
                          onMouseEnter={() => setActiveTooltipIndex(i)}
                        >
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r={isHovered ? '6' : '4'}
                            fill="#DF1927"
                            stroke="#FFF"
                            strokeWidth={isHovered ? '2.5' : '2'}
                            className="transition-all"
                          />
                        </g>
                      )
                    })}
                  </svg>

                  {/* Mockup Pixel-Perfect Tooltip (Anchored at 29 Sep 2025) */}
                  {activePoint && (
                    <div
                      className="absolute z-20 pointer-events-none transition-all duration-200"
                      style={{
                        left: `${(activePoint.x / 700) * 100}%`,
                        top: `${activePoint.y - 80}px`,
                        transform: 'translateX(-50%)',
                      }}
                    >
                      <div className="bg-white/95 backdrop-blur-xs rounded-xl shadow-lg border border-slate-200/90 px-3.5 py-2 text-left min-w-[130px]">
                        <div className="text-[10px] font-semibold text-slate-500 pb-1 border-b border-slate-100">
                          {activePoint.date} 2025
                        </div>
                        <div className="pt-1 space-y-0.5 text-xs font-semibold">
                          <div className="flex items-center gap-1.5 text-slate-800">
                            <span className="size-1.5 rounded-full bg-[#DF1927]" />
                            <span>Sales:</span>
                            <span className="font-bold text-slate-950">
                              {activePoint.salesLabel}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-600">
                            <span className="size-1.5 rounded-full bg-rose-300" />
                            <span>Orders:</span>
                            <span className="font-bold text-slate-900">
                              {activePoint.ordersCount}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* X-Axis Dates */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pl-11 pr-4 pt-2">
                    {chartPoints.map((pt, i) => (
                      <span
                        key={i}
                        className={`cursor-pointer hover:text-slate-700 transition ${
                          activeTooltipIndex === i ? 'font-bold text-slate-900' : ''
                        }`}
                        onClick={() => setActiveTooltipIndex(i)}
                      >
                        {pt.date}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Middle-Right Widget (Variant Dependent) */}
            <div className="xl:col-span-4 space-y-6">
              {/* VARIANT 1: ORDER FUNNEL (Image 1 Mockup) */}
              {activeVariant === 'variant1' ? (
                <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Package className="size-4 text-[#DF1927]" />
                      <h3 className="text-sm font-bold text-slate-900">Order Funnel</h3>
                    </div>
                    <Link
                      to={ROUTES.sellerOrders}
                      className="text-xs font-semibold text-blue-600 hover:underline"
                    >
                      View All
                    </Link>
                  </div>

                  <div className="space-y-2.5 pt-1 text-xs">
                    {/* Total Orders */}
                    <div className="p-2.5 rounded-xl bg-red-50/70 border border-red-100/80 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <ShoppingBag className="size-4 text-[#DF1927]" />
                        <span className="font-semibold text-slate-800">Total Orders</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-slate-900">1,248</span>
                        <span className="text-[10px] font-bold text-red-600 bg-white/80 px-1.5 py-0.5 rounded">
                          100%
                        </span>
                      </div>
                    </div>

                    {/* Processing */}
                    <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100/80 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Clock className="size-4 text-blue-600" />
                        <span className="font-semibold text-slate-800">Processing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-slate-900">189</span>
                        <span className="text-[10px] font-bold text-blue-600 bg-white/80 px-1.5 py-0.5 rounded">
                          15%
                        </span>
                      </div>
                    </div>

                    {/* Shipped */}
                    <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-100/80 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Truck className="size-4 text-amber-600" />
                        <span className="font-semibold text-slate-800">Shipped</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-slate-900">98</span>
                        <span className="text-[10px] font-bold text-amber-600 bg-white/80 px-1.5 py-0.5 rounded">
                          8%
                        </span>
                      </div>
                    </div>

                    {/* Delivered */}
                    <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100/80 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="size-4 text-emerald-600" />
                        <span className="font-semibold text-slate-800">Delivered</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-slate-900">892</span>
                        <span className="text-[10px] font-bold text-emerald-600 bg-white/80 px-1.5 py-0.5 rounded">
                          72%
                        </span>
                      </div>
                    </div>

                    {/* Cancelled */}
                    <div className="p-2.5 rounded-xl bg-rose-50/70 border border-rose-100/80 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <XCircle className="size-4 text-rose-600" />
                        <span className="font-semibold text-slate-800">Cancelled</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-slate-900">69</span>
                        <span className="text-[10px] font-bold text-rose-600 bg-white/80 px-1.5 py-0.5 rounded">
                          5%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : activeVariant === 'variant4' ? (
                <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="size-6 rounded-lg bg-red-50 text-[#DF1927] flex items-center justify-center">
                        <ShoppingBag className="size-3.5" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-900">Store Completion</h3>
                    </div>
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault()
                        toast.info('Viewing full store onboarding checklist')
                      }}
                      className="text-xs font-semibold text-blue-600 hover:underline"
                    >
                      View All
                    </Link>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
                    {/* 80% Circular Gauge Ring */}
                    <div className="relative size-32 flex items-center justify-center shrink-0">
                      <svg className="size-full -rotate-90" viewBox="0 0 100 100">
                        {/* Background ring */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#F1F5F9"
                          strokeWidth="10"
                        />
                        {/* 80% Green Filled ring */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#10B981"
                          strokeWidth="10"
                          strokeDasharray="201 251"
                          strokeDashoffset="0"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute text-center">
                        <span className="text-2xl font-black text-slate-900 block leading-none">
                          80%
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium block mt-1">
                          Completed
                        </span>
                      </div>
                    </div>

                    {/* Interactive Checklist matching Mockup 4 */}
                    <div className="flex-1 space-y-2 text-xs w-full">
                      {checklist.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => toggleChecklist(item.id)}
                          className="flex items-center gap-2 cursor-pointer group select-none hover:bg-slate-50 p-1 rounded-lg transition"
                        >
                          {item.completed ? (
                            <CheckCircle2 className="size-4 text-emerald-500 fill-emerald-50 shrink-0" />
                          ) : (
                            <Circle className="size-4 text-slate-300 group-hover:text-slate-400 shrink-0" />
                          )}
                          <span
                            className={`font-medium ${
                              item.completed
                                ? 'text-slate-800'
                                : 'text-slate-500 group-hover:text-slate-700'
                            }`}
                          >
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : activeVariant === 'variant2' ? (
                /* VARIANT 2: CATEGORY SALES DONUT (Mockup 2) */
                <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                    <Package className="size-4 text-[#DF1927]" />
                    <h3 className="text-sm font-bold text-slate-900">Category Sales</h3>
                  </div>

                  <div className="flex flex-col items-center justify-center pt-2">
                    <div className="relative size-44 flex items-center justify-center">
                      <svg className="size-full -rotate-90" viewBox="0 0 100 100">
                        {/* Mobiles 38% - red */}
                        <circle
                          cx="50"
                          cy="50"
                          r="38"
                          fill="none"
                          stroke="#EF4444"
                          strokeWidth="12"
                          strokeDasharray="91 239"
                          strokeDashoffset="0"
                        />
                        {/* Electronics 26% - blue */}
                        <circle
                          cx="50"
                          cy="50"
                          r="38"
                          fill="none"
                          stroke="#3B82F6"
                          strokeWidth="12"
                          strokeDasharray="62 239"
                          strokeDashoffset="-91"
                        />
                        {/* Home & Kitchen 18% - green */}
                        <circle
                          cx="50"
                          cy="50"
                          r="38"
                          fill="none"
                          stroke="#10B981"
                          strokeWidth="12"
                          strokeDasharray="43 239"
                          strokeDashoffset="-153"
                        />
                        {/* Fashion 10% - amber */}
                        <circle
                          cx="50"
                          cy="50"
                          r="38"
                          fill="none"
                          stroke="#F59E0B"
                          strokeWidth="12"
                          strokeDasharray="24 239"
                          strokeDashoffset="-196"
                        />
                        {/* Others 8% - purple */}
                        <circle
                          cx="50"
                          cy="50"
                          r="38"
                          fill="none"
                          stroke="#8B5CF6"
                          strokeWidth="12"
                          strokeDasharray="19 239"
                          strokeDashoffset="-220"
                        />
                      </svg>
                      <div className="absolute text-center">
                        <span className="text-lg font-black text-slate-900">₹3,24,580</span>
                        <span className="text-[10px] text-slate-400 block font-medium">
                          Total Sales
                        </span>
                      </div>
                    </div>

                    <div className="w-full space-y-1.5 pt-4 text-xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="size-2 rounded-full bg-red-500" />
                          <span className="text-slate-600">Mobiles &amp; Accessories</span>
                        </div>
                        <span className="font-bold text-slate-900">38%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="size-2 rounded-full bg-blue-500" />
                          <span className="text-slate-600">Electronics</span>
                        </div>
                        <span className="font-bold text-slate-900">26%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="size-2 rounded-full bg-emerald-500" />
                          <span className="text-slate-600">Home &amp; Kitchen</span>
                        </div>
                        <span className="font-bold text-slate-900">18%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="size-2 rounded-full bg-amber-500" />
                          <span className="text-slate-600">Fashion</span>
                        </div>
                        <span className="font-bold text-slate-900">10%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="size-2 rounded-full bg-purple-500" />
                          <span className="text-slate-600">Others</span>
                        </div>
                        <span className="font-bold text-slate-900">8%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* ORDER STATUS DONUT (Mockup 1, 3, 5) */
                <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Package className="size-4 text-[#DF1927]" />
                      <h3 className="text-sm font-bold text-slate-900">Order Status</h3>
                    </div>
                    <Link
                      to={ROUTES.sellerOrders}
                      className="text-xs font-semibold text-blue-600 hover:underline"
                    >
                      View All
                    </Link>
                  </div>

                  <div className="flex flex-col items-center justify-center pt-2">
                    <div className="relative size-44 flex items-center justify-center">
                      <svg className="size-full -rotate-90" viewBox="0 0 100 100">
                        {/* Background ring */}
                        <circle
                          cx="50"
                          cy="50"
                          r="38"
                          fill="none"
                          stroke="#F1F5F9"
                          strokeWidth="12"
                        />
                        {/* Delivered (72%) - green */}
                        <circle
                          cx="50"
                          cy="50"
                          r="38"
                          fill="none"
                          stroke="#10B981"
                          strokeWidth="12"
                          strokeDasharray="172 239"
                          strokeDashoffset="0"
                        />
                        {/* Processing (15%) - blue */}
                        <circle
                          cx="50"
                          cy="50"
                          r="38"
                          fill="none"
                          stroke="#3B82F6"
                          strokeWidth="12"
                          strokeDasharray="36 239"
                          strokeDashoffset="-172"
                        />
                        {/* Shipped (8%) - amber */}
                        <circle
                          cx="50"
                          cy="50"
                          r="38"
                          fill="none"
                          stroke="#F59E0B"
                          strokeWidth="12"
                          strokeDasharray="19 239"
                          strokeDashoffset="-208"
                        />
                        {/* Cancelled (5%) - red */}
                        <circle
                          cx="50"
                          cy="50"
                          r="38"
                          fill="none"
                          stroke="#EF4444"
                          strokeWidth="12"
                          strokeDasharray="12 239"
                          strokeDashoffset="-227"
                        />
                      </svg>
                      <div className="absolute text-center">
                        <span className="text-xl font-black text-slate-950 block">1,248</span>
                        <span className="text-[10px] text-slate-400 font-medium">Total Orders</span>
                      </div>
                    </div>

                    <div className="w-full space-y-2 pt-4 text-xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="size-2.5 rounded-full bg-emerald-500" />
                          <span className="text-slate-600">Delivered</span>
                        </div>
                        <span className="font-bold text-slate-900">892 (72%)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="size-2.5 rounded-full bg-blue-500" />
                          <span className="text-slate-600">Processing</span>
                        </div>
                        <span className="font-bold text-slate-900">189 (15%)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="size-2.5 rounded-full bg-amber-500" />
                          <span className="text-slate-600">Shipped</span>
                        </div>
                        <span className="font-bold text-slate-900">98 (8%)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="size-2.5 rounded-full bg-rose-500" />
                          <span className="text-slate-600">Cancelled</span>
                        </div>
                        <span className="font-bold text-slate-900">69 (5%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ================================================================= */}
          {/* MOCKUP 3 HORIZONTAL CARD STRIP (Exclusive to Variant 3)           */}
          {/* ================================================================= */}
          {activeVariant === 'variant3' && (
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Trophy className="size-4 text-[#DF1927]" />
                  <h3 className="text-sm font-bold text-slate-900">Top Selling Products</h3>
                </div>
                <Link
                  to={ROUTES.sellerProducts}
                  className="text-xs font-semibold text-blue-600 hover:underline"
                >
                  View All
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5">
                {topSellingRanked.map((prod) => (
                  <div
                    key={prod.rank}
                    className="p-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 flex flex-col justify-between space-y-2 hover:border-slate-300 transition"
                  >
                    <div className="aspect-square rounded-xl bg-white border border-slate-100 p-2 flex items-center justify-center">
                      <img src={prod.image} alt={prod.name} className="size-full object-contain" />
                    </div>
                    <div>
                      <span
                        className="text-xs font-bold text-slate-900 block truncate"
                        title={prod.name}
                      >
                        {prod.name}
                      </span>
                      <span className="text-xs font-black text-slate-950 block mt-0.5">
                        {prod.price}
                      </span>
                      <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
                        <span>{prod.sold}</span>
                        <span className="text-emerald-600 font-bold">↗ {prod.trend}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* LOWER MIDDLE ROW: RECENT ORDERS TABLE + TOP SELLING RANKED LIST   */}
          {/* ================================================================= */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
            {/* Recent Orders Table (8 cols) */}
            <div className="xl:col-span-8 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <FileText className="size-4 text-[#DF1927]" />
                  <h3 className="text-sm font-bold text-slate-900">Recent Orders</h3>
                </div>
                <Link
                  to={ROUTES.sellerOrders}
                  className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
                >
                  <span>View All</span>
                  <ArrowRight className="size-3" />
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50/80 text-slate-500 font-medium">
                    <tr>
                      <th className="py-2.5 px-3">Order ID</th>
                      <th className="py-2.5 px-3">Customer</th>
                      <th className="py-2.5 px-3">Product(s)</th>
                      <th className="py-2.5 px-3">Amount</th>
                      <th className="py-2.5 px-3">Status</th>
                      <th className="py-2.5 px-3">Date &amp; Time</th>
                      <th className="py-2.5 px-3 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-slate-50/60 transition group">
                        <td className="py-3 px-3">
                          <Link
                            to={`/seller/orders/${order.id}`}
                            className="font-bold text-blue-600 hover:underline"
                          >
                            #{order.id}
                          </Link>
                        </td>
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2.5">
                            <img
                              src={order.avatar}
                              alt={order.customer}
                              className="size-7 rounded-full object-cover border border-slate-200"
                            />
                            <div>
                              <span className="font-bold text-slate-900 block leading-tight">
                                {order.customer}
                              </span>
                              <span className="text-[10px] text-slate-400 block mt-0.5">
                                {order.location}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-3">
                          <div className="size-8 rounded-lg bg-slate-50 border border-slate-200/80 p-0.5 flex items-center justify-center">
                            <img
                              src={order.image}
                              alt={order.productName}
                              className="size-full object-contain"
                            />
                          </div>
                        </td>
                        <td className="py-3 px-3 font-bold text-slate-900">{order.amount}</td>
                        <td className="py-3 px-3">
                          <span
                            className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold border ${order.statusBadge}`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-slate-500 text-[11px] whitespace-nowrap">
                          {order.dateTime}
                        </td>
                        <td className="py-3 px-3 text-center">
                          <Link
                            to={`/seller/orders/${order.id}`}
                            className="size-7 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 inline-flex items-center justify-center cursor-pointer transition"
                            aria-label={`View order ${order.id}`}
                          >
                            <MoreVertical className="size-4" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column: Ranked Top Selling Products (1 to 5) (Mockup 1, 2, 4, 5) */}
            <div className="xl:col-span-4 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Trophy className="size-4 text-[#DF1927]" />
                  <h3 className="text-sm font-bold text-slate-900">Top Selling Products</h3>
                </div>
                <Link
                  to={ROUTES.sellerProducts}
                  className="text-xs font-semibold text-blue-600 hover:underline"
                >
                  View All
                </Link>
              </div>

              {/* Numbered Ranked 1-5 List matching Mockups */}
              <div className="space-y-3.5">
                {topSellingRanked.map((prod) => (
                  <div key={prod.rank} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-slate-400 w-3 text-center">
                        {prod.rank}
                      </span>
                      <div className="size-9 rounded-xl bg-slate-50 border border-slate-200/80 p-1 flex items-center justify-center shrink-0">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="size-full object-contain"
                        />
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block truncate max-w-[140px] sm:max-w-[170px]">
                          {prod.name}
                        </span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">{prod.sold}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-bold text-slate-900 block">{prod.price}</span>
                      <span className="text-[10px] font-bold text-emerald-600 flex items-center justify-end gap-0.5 mt-0.5">
                        <TrendingUp className="size-2.5" />
                        {prod.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================================================================= */}
          {/* BOTTOM ROW: CUSTOMER GROWTH + REVENUE BY CATEGORY + QUICK ACTIONS */}
          {/* ================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* 1. Customer Growth (Apr - Oct Bar Chart) */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <Users className="size-4 text-[#DF1927]" />
                <h3 className="text-xs font-bold text-slate-900">Customer Growth</h3>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-slate-900">892</span>
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
                  <TrendingUp className="size-3" />
                  14%
                </span>
              </div>
              <span className="text-[11px] text-slate-400 block">Total customers</span>

              {/* Monthly Gradient Bars Apr to Oct */}
              <div className="h-28 flex items-end justify-between pt-4 px-1 gap-2">
                {[
                  { m: 'Apr', h: '30%' },
                  { m: 'May', h: '45%' },
                  { m: 'Jun', h: '55%' },
                  { m: 'Jul', h: '65%' },
                  { m: 'Aug', h: '75%' },
                  { m: 'Sep', h: '88%' },
                  { m: 'Oct', h: '100%' },
                ].map((bar, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5 flex-1 group">
                    <div
                      className="w-full max-w-[20px] rounded-t-md bg-gradient-to-t from-red-400/80 to-[#DF1927] group-hover:from-red-500 group-hover:to-[#b0131e] transition-all"
                      style={{ height: bar.h }}
                    />
                    <span className="text-[10px] text-slate-400 group-hover:text-slate-600 transition">
                      {bar.m}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Revenue by Category (Multi-Color Donut) */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <Package className="size-4 text-[#DF1927]" />
                <h3 className="text-xs font-bold text-slate-900">Revenue by Category</h3>
              </div>

              <div className="flex items-center gap-4 pt-1">
                {/* Donut graphic */}
                <div className="relative size-28 flex items-center justify-center shrink-0">
                  <svg className="size-full -rotate-90" viewBox="0 0 100 100">
                    {/* Mobiles 38% - red */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#EF4444"
                      strokeWidth="12"
                      strokeDasharray="91 239"
                      strokeDashoffset="0"
                    />
                    {/* Electronics 26% - blue */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="12"
                      strokeDasharray="62 239"
                      strokeDashoffset="-91"
                    />
                    {/* Home & Kitchen 18% - green */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="12"
                      strokeDasharray="43 239"
                      strokeDashoffset="-153"
                    />
                    {/* Fashion 10% - amber */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#F59E0B"
                      strokeWidth="12"
                      strokeDasharray="24 239"
                      strokeDashoffset="-196"
                    />
                    {/* Others 8% - purple */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="12"
                      strokeDasharray="19 239"
                      strokeDashoffset="-220"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-[11px] font-black text-slate-900 block leading-tight">
                      ₹3,24,580
                    </span>
                    <span className="text-[8px] text-slate-400 block font-medium">Total Sales</span>
                  </div>
                </div>

                {/* Donut Legend */}
                <div className="flex-1 space-y-1 text-[11px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-red-500" />
                      <span className="text-slate-600 truncate max-w-[85px]">Mobiles &amp; Acc</span>
                    </div>
                    <span className="font-bold text-slate-900">38%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-blue-500" />
                      <span className="text-slate-600">Electronics</span>
                    </div>
                    <span className="font-bold text-slate-900">26%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-emerald-500" />
                      <span className="text-slate-600 truncate max-w-[85px]">Home &amp; Kit</span>
                    </div>
                    <span className="font-bold text-slate-900">18%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-amber-500" />
                      <span className="text-slate-600">Fashion</span>
                    </div>
                    <span className="font-bold text-slate-900">10%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-purple-500" />
                      <span className="text-slate-600">Others</span>
                    </div>
                    <span className="font-bold text-slate-900">8%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Quick Actions matching Mockups */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-red-500 font-bold">⚡</span>
                <h3 className="text-xs font-bold text-slate-900">Quick Actions</h3>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                {/* 1. Add Product */}
                <Link
                  to={ROUTES.sellerAddProduct}
                  className="p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-red-200 hover:bg-red-50/30 transition flex flex-col items-center justify-center gap-1.5 text-center group cursor-pointer shadow-2xs"
                >
                  <div className="size-8 rounded-xl bg-red-50 text-[#DF1927] group-hover:bg-[#DF1927] group-hover:text-white transition flex items-center justify-center">
                    <Package className="size-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 group-hover:text-[#DF1927] transition">
                    Add Product
                  </span>
                </Link>

                {/* 2. Create Offer */}
                <button
                  type="button"
                  onClick={() => toast.success('Opening Discount & Coupon Creator modal...')}
                  className="p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/30 transition flex flex-col items-center justify-center gap-1.5 text-center group cursor-pointer shadow-2xs"
                >
                  <div className="size-8 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition flex items-center justify-center">
                    <Tag className="size-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition">
                    Create Offer
                  </span>
                </button>

                {/* 3. Manage Inventory */}
                <Link
                  to={ROUTES.sellerInventory}
                  className="p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-200 hover:bg-emerald-50/30 transition flex flex-col items-center justify-center gap-1.5 text-center group cursor-pointer shadow-2xs"
                >
                  <div className="size-8 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition flex items-center justify-center">
                    <Grid className="size-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 group-hover:text-emerald-600 transition">
                    Manage Inventory
                  </span>
                </Link>

                {/* 4. View Reports / Marketing Tools */}
                <button
                  type="button"
                  onClick={() => toast.info('Loading analytics dashboard reports...')}
                  className="p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-purple-200 hover:bg-purple-50/30 transition flex flex-col items-center justify-center gap-1.5 text-center group cursor-pointer shadow-2xs"
                >
                  <div className="size-8 rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition flex items-center justify-center">
                    <BarChart3 className="size-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 group-hover:text-purple-600 transition">
                    {activeVariant === 'variant4' ? 'Marketing Tools' : 'View Reports'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
