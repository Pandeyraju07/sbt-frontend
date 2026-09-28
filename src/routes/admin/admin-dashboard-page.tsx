import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Search,
  Bell,
  ChevronDown,
  LayoutDashboard,
  Users,
  Store,
  Building2,
  Package,
  ShoppingBag,
  CreditCard,
  AlertCircle,
  ShieldCheck,
  FileText,
  BarChart3,
  Settings,
  Calendar,
  Download,
  ArrowUpRight,
  ChevronRight,
  Clock,
  AlertTriangle,
  Menu,
  Crown,
} from 'lucide-react'
import { toast } from 'sonner'
import { SbtLogo } from '@/components/sbt-logo'
import { ROUTES } from '@/constants/routes'

export const AdminDashboardPage: React.FC = () => {
  const navigate = useNavigate()
  const [dateRange] = useState('01 Sep 2024 - 30 Sep 2024')
  const [activeTab, setActiveTab] = useState<'sellers' | 'products' | 'withdrawals' | 'kyc'>('sellers')

  const recentOrders = [
    {
      id: '#SBT2498517362',
      customer: 'Rahul Sharma',
      amount: '₹56,998',
      items: '2',
      status: 'Processing',
      statusColor: 'bg-blue-50 text-blue-600 border-blue-200',
      date: 'Today, 10:24 AM',
    },
    {
      id: '#SBT2498517123',
      customer: 'Priya Verma',
      amount: '₹1,999',
      items: '1',
      status: 'Shipped',
      statusColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      date: 'Today, 09:12 AM',
    },
    {
      id: '#SBT2498516981',
      customer: 'Amit Singh',
      amount: '₹12,450',
      items: '3',
      status: 'Delivered',
      statusColor: 'bg-teal-50 text-teal-700 border-teal-200',
      date: 'Yesterday, 08:45 PM',
    },
    {
      id: '#SBT2498516654',
      customer: 'Neha Gupta',
      amount: '₹3,999',
      items: '1',
      status: 'Processing',
      statusColor: 'bg-blue-50 text-blue-600 border-blue-200',
      date: 'Yesterday, 06:30 PM',
    },
    {
      id: '#SBT2498516321',
      customer: 'Rohan Mehta',
      amount: '₹8,998',
      items: '2',
      status: 'Cancelled',
      statusColor: 'bg-rose-50 text-rose-600 border-rose-200',
      date: '28 Sep, 04:15 PM',
    },
  ]

  const pendingApprovalsSellers = [
    {
      id: 'app-1',
      initials: 'SE',
      avatarBg: 'bg-rose-100 text-rose-700',
      name: 'Sharma Electronics',
      email: 'seller.sharma@example.com',
      action: 'Seller Registration',
      time: '2 hours ago',
    },
    {
      id: 'app-2',
      initials: 'SS',
      avatarBg: 'bg-purple-100 text-purple-700',
      name: 'Style Studio',
      email: 'style.studio@example.com',
      action: 'Seller Registration',
      time: '5 hours ago',
    },
    {
      id: 'app-3',
      initials: 'GM',
      avatarBg: 'bg-emerald-100 text-emerald-700',
      name: 'GreenMart Pvt Ltd',
      email: 'greenmart@example.com',
      action: 'Organization Verification',
      time: '1 day ago',
    },
    {
      id: 'app-4',
      initials: 'TW',
      avatarBg: 'bg-blue-100 text-blue-700',
      name: 'Tech World',
      email: 'techworld@example.com',
      action: 'KYC Verification',
      time: '1 day ago',
    },
    {
      id: 'app-5',
      initials: 'HN',
      avatarBg: 'bg-amber-100 text-amber-700',
      name: 'Home Needs',
      email: 'homeneeds@example.com',
      action: 'Seller Registration',
      time: '2 days ago',
    },
  ]

  const pendingApprovalsProducts = [
    {
      id: 'prod-1',
      initials: 'IP',
      avatarBg: 'bg-blue-100 text-blue-700',
      name: 'Apple iPhone 15 Pro Max',
      email: 'Submitted by Apex Retail',
      action: 'Product Listing Review',
      time: '3 hours ago',
    },
    {
      id: 'prod-2',
      initials: 'GW',
      avatarBg: 'bg-amber-100 text-amber-700',
      name: 'Galaxy Watch 6 Classic',
      email: 'Submitted by MegaStore',
      action: 'Pricing & SKU Approval',
      time: '6 hours ago',
    },
  ]

  const handleApprove = (name: string) => {
    toast.success(`Approved: ${name}`, {
      description: 'Record status marked as verified.',
    })
  }

  const handleReject = (name: string) => {
    toast.error(`Rejected: ${name}`, {
      description: 'Notification sent with compliance guidelines.',
    })
  }

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F8F9FA] text-slate-900 font-sans antialiased selection:bg-red-100 selection:text-red-900">
      {/* ===================================================================== */}
      {/* TOP HEADER BAR (MATCHING SCREENSHOT 3)                                */}
      {/* ===================================================================== */}
      <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-40 h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left: Hamburger & SBT Logo */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <button
            type="button"
            className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 transition cursor-pointer"
            aria-label="Toggle Navigation"
          >
            <Menu className="size-5" />
          </button>

          <Link to={ROUTES.home}>
            <SbtLogo size="sm" format="horizontal" />
          </Link>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 max-w-2xl mx-4 hidden md:flex items-center h-10 rounded-full border border-slate-200 bg-slate-50/80 px-3.5 focus-within:border-[#DF1927] focus-within:bg-white transition">
          <Search className="size-4 text-slate-400 shrink-0 mr-2" />
          <input
            type="text"
            placeholder="Search users, products, orders, sellers..."
            className="w-full bg-transparent text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            type="button"
            aria-label="Search"
            className="size-7 rounded-full bg-[#DF1927] text-white flex items-center justify-center shrink-0 hover:bg-[#C8102E] transition"
          >
            <Search className="size-3.5 stroke-[2.5]" />
          </button>
        </div>

        {/* Right: Notifications & Profile */}
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          <button
            type="button"
            onClick={() => toast.info('12 Pending Approvals', { description: 'New sellers & KYC docs waiting.' })}
            className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition cursor-pointer"
            title="Notifications"
          >
            <Bell className="size-5" />
            <span className="absolute top-1 right-1 size-4 rounded-full bg-[#DF1927] text-white text-[9px] font-bold flex items-center justify-center">
              12
            </span>
          </button>

          {/* User Profile Pill */}
          <div className="flex items-center gap-2.5 pl-2 sm:border-l sm:border-slate-200 cursor-pointer">
            <div className="size-9 rounded-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center">
              AD
            </div>
            <div className="hidden sm:block text-left leading-tight">
              <span className="text-xs font-bold text-slate-900 block">Admin</span>
              <span className="text-[10px] text-slate-400 flex items-center gap-0.5">
                Super Admin
                <ChevronDown className="size-2.5 text-slate-400" />
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ===================================================================== */}
      {/* 2-COLUMN LAYOUT: SIDEBAR + MAIN WORKSPACE                             */}
      {/* ===================================================================== */}
      <div className="flex-1 w-full max-w-[1600px] mx-auto flex items-start">
        {/* Left Admin Sidebar */}
        <aside className="w-64 shrink-0 bg-white border-r border-slate-200 min-h-[calc(100vh-4rem)] p-4 flex flex-col justify-between hidden lg:flex">
          <nav className="space-y-1 text-xs font-medium">
            <Link
              to={ROUTES.adminDashboard}
              className="flex items-center justify-between px-3 py-2 rounded-xl bg-red-50/70 text-[#DF1927] font-bold transition"
            >
              <div className="flex items-center gap-3">
                <LayoutDashboard className="size-4" />
                <span>Dashboard</span>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => toast.info('Navigating to Users Management')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Users className="size-4 text-slate-400" />
                <span>Users</span>
              </div>
              <ChevronRight className="size-3.5 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => toast.info('Navigating to Sellers Management')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Store className="size-4 text-slate-400" />
                <span>Sellers</span>
              </div>
              <ChevronRight className="size-3.5 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => toast.info('Organizations')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Building2 className="size-4 text-slate-400" />
                <span>Organizations</span>
              </div>
              <ChevronRight className="size-3.5 text-slate-400" />
            </button>

            <Link
              to={ROUTES.adminProducts}
              className="flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition"
            >
              <div className="flex items-center gap-3">
                <Package className="size-4 text-slate-400" />
                <span>Products</span>
              </div>
              <ChevronRight className="size-3.5 text-slate-400" />
            </Link>

            <button
              type="button"
              onClick={() => toast.info('Orders Management')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <ShoppingBag className="size-4 text-slate-400" />
                <span>Orders</span>
              </div>
              <ChevronRight className="size-3.5 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => toast.info('Payments & Settlements')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <CreditCard className="size-4 text-slate-400" />
                <span>Payments</span>
              </div>
              <ChevronRight className="size-3.5 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => toast.info('Disputes & Resolutions')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <AlertCircle className="size-4 text-slate-400" />
                <span>Disputes</span>
              </div>
              <ChevronRight className="size-3.5 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => toast.info('KYC Approvals & Documents')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-4 text-slate-400" />
                <span>KYC & Verification</span>
              </div>
              <span className="px-1.5 py-0.5 rounded-full bg-[#DF1927] text-white text-[10px] font-bold">
                24
              </span>
            </button>

            <button
              type="button"
              onClick={() => toast.info('CMS & Content')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <FileText className="size-4 text-slate-400" />
                <span>CMS & Content</span>
              </div>
              <ChevronRight className="size-3.5 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => toast.info('Reports & Analytics')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <BarChart3 className="size-4 text-slate-400" />
                <span>Reports & Analytics</span>
              </div>
              <ChevronRight className="size-3.5 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => toast.info('Platform Settings')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Settings className="size-4 text-slate-400" />
                <span>Settings</span>
              </div>
              <ChevronRight className="size-3.5 text-slate-400" />
            </button>
          </nav>

          {/* SBT Admin Pro Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FFF5F4] to-[#FFF0ED] border border-[#FDE5E0] text-left mt-6">
            <div className="flex items-center gap-2 mb-1.5">
              <Crown className="size-4 text-amber-500 fill-amber-400" />
              <span className="text-xs font-black text-slate-900">SBT Admin Pro</span>
            </div>
            <p className="text-[10px] text-slate-500 leading-snug mb-3">
              Advanced controls, insights and more.
            </p>
            <button
              type="button"
              onClick={() => toast.info('SBT Admin Pro feature details')}
              className="w-full py-1.5 px-3 rounded-xl border border-[#DF1927] text-[#DF1927] hover:bg-[#DF1927] hover:text-white font-bold text-xs transition cursor-pointer"
            >
              Know More →
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6">
          {/* Header & Action Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                Welcome back, Admin!
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Here's an overview of your marketplace performance.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Date Filter Dropdown */}
              <button
                type="button"
                onClick={() => toast.info('Date Range: Sep 2024 active')}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-2xs transition cursor-pointer"
              >
                <Calendar className="size-3.5 text-slate-400" />
                <span>{dateRange}</span>
                <ChevronDown className="size-3 text-slate-400" />
              </button>

              {/* Generate Report Button */}
              <button
                type="button"
                onClick={() => toast.success('Platform Report Generated (PDF)')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#DF1927] hover:bg-[#C8102E] text-white font-bold text-xs shadow-md shadow-[#DF1927]/20 transition cursor-pointer"
              >
                <Download className="size-4 stroke-[2.2]" />
                <span>Generate Report</span>
              </button>
            </div>
          </div>

          {/* 4 Stat Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Total GMV */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Total GMV</span>
                <div className="size-9 rounded-xl bg-red-50 text-[#DF1927] flex items-center justify-center">
                  <Package className="size-4.5" />
                </div>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="text-2xl font-black text-slate-950">₹28,45,670</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
                  <ArrowUpRight className="size-3.5 stroke-[2.5]" />
                  <span>18.2%</span>
                </span>
                <span className="text-[10px] text-slate-400">vs last month</span>
                <svg className="w-16 h-5 text-red-500 stroke-current fill-none stroke-[2]" viewBox="0 0 100 30">
                  <path d="M0,25 Q30,5 60,20 T100,5" />
                </svg>
              </div>
            </div>

            {/* Card 2: Total Orders */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Total Orders</span>
                <div className="size-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <ShoppingBag className="size-4.5" />
                </div>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="text-2xl font-black text-slate-950">12,846</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
                  <ArrowUpRight className="size-3.5 stroke-[2.5]" />
                  <span>24.6%</span>
                </span>
                <span className="text-[10px] text-slate-400">vs last month</span>
                <svg className="w-16 h-5 text-blue-500 stroke-current fill-none stroke-[2]" viewBox="0 0 100 30">
                  <path d="M0,28 Q25,18 50,15 T85,10 T100,6" />
                </svg>
              </div>
            </div>

            {/* Card 3: Total Users */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Total Users</span>
                <div className="size-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Users className="size-4.5" />
                </div>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="text-2xl font-black text-slate-950">8,420</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
                  <ArrowUpRight className="size-3.5 stroke-[2.5]" />
                  <span>12.3%</span>
                </span>
                <span className="text-[10px] text-slate-400">vs last month</span>
                <svg className="w-16 h-5 text-emerald-500 stroke-current fill-none stroke-[2]" viewBox="0 0 100 30">
                  <path d="M0,26 Q30,22 60,14 T100,8" />
                </svg>
              </div>
            </div>

            {/* Card 4: Active Sellers */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Active Sellers</span>
                <div className="size-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Store className="size-4.5" />
                </div>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="text-2xl font-black text-slate-950">1,268</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
                  <ArrowUpRight className="size-3.5 stroke-[2.5]" />
                  <span>16.8%</span>
                </span>
                <span className="text-[10px] text-slate-400">vs last month</span>
                <svg className="w-16 h-5 text-amber-500 stroke-current fill-none stroke-[2]" viewBox="0 0 100 30">
                  <path d="M0,24 Q30,20 60,16 T100,10" />
                </svg>
              </div>
            </div>
          </div>

          {/* Middle Row: Sales & Orders Overview + Platform Health */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Sales & Orders Overview */}
            <div className="lg:col-span-8 p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-6">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    Sales & Orders Overview
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-[#DF1927]" />
                      <span>Sales (₹)</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-rose-200" />
                      <span>Orders</span>
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="px-3 py-1 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
                >
                  <span>Last 30 days</span>
                  <ChevronDown className="size-3 text-slate-400" />
                </button>
              </div>

              {/* Graphic Chart with Tooltip */}
              <div className="relative pt-6">
                {/* Y-Axis Labels */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                  <div className="border-b border-slate-200 text-[10px] text-slate-400 pb-0.5">₹15L</div>
                  <div className="border-b border-slate-200 text-[10px] text-slate-400 pb-0.5">₹10L</div>
                  <div className="border-b border-slate-200 text-[10px] text-slate-400 pb-0.5">₹5L</div>
                  <div className="border-b border-slate-200 text-[10px] text-slate-400 pb-0.5">0</div>
                </div>

                {/* SVG Curve + Bars */}
                <div className="relative h-44 px-10 pt-4 flex items-end">
                  {/* Tooltip Overlay */}
                  <div className="absolute left-[50%] top-6 -translate-x-1/2 p-2 rounded-xl bg-slate-900 text-white shadow-xl text-center z-20">
                    <p className="text-xs font-bold">₹8,42,300</p>
                    <p className="text-[10px] text-slate-400">● 216 orders</p>
                  </div>

                  <svg className="w-full h-full text-red-500 fill-none stroke-current stroke-[2.5]" viewBox="0 0 500 120" preserveAspectRatio="none">
                    <path
                      d="M0,110 C50,90 100,50 150,80 C200,105 230,40 250,30 C270,20 300,70 350,90 C400,100 450,60 500,80"
                    />
                  </svg>
                </div>

                {/* X-Axis Labels */}
                <div className="flex justify-between text-[10px] text-slate-400 px-10 pt-2 font-medium">
                  <span>1 Sep</span>
                  <span>5 Sep</span>
                  <span>10 Sep</span>
                  <span>15 Sep</span>
                  <span>20 Sep</span>
                  <span>25 Sep</span>
                  <span>30 Sep</span>
                </div>
              </div>
            </div>

            {/* Platform Health Card */}
            <div className="lg:col-span-4 p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">Platform Health</h3>
                <span className="text-xs font-semibold text-slate-400 hover:text-slate-700 cursor-pointer">
                  &gt;
                </span>
              </div>

              {/* Status Header */}
              <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-emerald-600 animate-pulse" />
                  <span className="text-xs font-bold text-emerald-800">All Systems Operational</span>
                </div>
                <span className="text-[10px] text-slate-400">Last updated: 30 Sep, 11:42 AM</span>
              </div>

              {/* System Components Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    <span>API Services</span>
                  </div>
                  <span className="text-sm font-black text-slate-900">99.98%</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    <span>Payment Gateway</span>
                  </div>
                  <span className="text-sm font-black text-slate-900">99.95%</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    <span>Database</span>
                  </div>
                  <span className="text-sm font-black text-slate-900">99.99%</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    <span>Message Queue</span>
                  </div>
                  <span className="text-sm font-black text-slate-900">99.97%</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Alert Boxes Row (Matching Screenshot 3) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Box 1 */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Clock className="size-5" />
                </div>
                <div className="leading-tight">
                  <span className="text-[11px] text-slate-500 block">Pending Seller Approvals</span>
                  <span className="text-lg font-black text-slate-950">24</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => toast.info('Reviewing pending seller registrations')}
                className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
              >
                Review →
              </button>
            </div>

            {/* Box 2 */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Package className="size-5" />
                </div>
                <div className="leading-tight">
                  <span className="text-[11px] text-slate-500 block">Pending Products</span>
                  <span className="text-lg font-black text-slate-950">56</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => navigate(ROUTES.adminProducts)}
                className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
              >
                Review →
              </button>
            </div>

            {/* Box 3 */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-red-50 text-[#DF1927] flex items-center justify-center shrink-0">
                  <AlertTriangle className="size-5" />
                </div>
                <div className="leading-tight">
                  <span className="text-[11px] text-slate-500 block">Disputed Orders</span>
                  <span className="text-lg font-black text-slate-950">12</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => toast.info('Opening Disputes resolution panel')}
                className="text-xs font-bold text-[#DF1927] hover:underline cursor-pointer"
              >
                Resolve →
              </button>
            </div>

            {/* Box 4 */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="size-5" />
                </div>
                <div className="leading-tight">
                  <span className="text-[11px] text-slate-500 block">Pending KYC</span>
                  <span className="text-lg font-black text-slate-950">38</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => toast.info('Verifying Seller KYC documents')}
                className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
              >
                Verify →
              </button>
            </div>
          </div>

          {/* Bottom Row: Recent Orders (Left) & Pending Approvals (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Recent Orders (~45%) */}
            <div className="lg:col-span-5 p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900">Recent Orders</h3>
                <span className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer">
                  View All →
                </span>
              </div>

              <div className="overflow-x-auto no-scrollbar">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 text-slate-400 font-semibold text-[11px]">
                      <th className="pb-2">Order ID</th>
                      <th className="pb-2">Customer</th>
                      <th className="pb-2">Amount</th>
                      <th className="pb-2">Items</th>
                      <th className="pb-2">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {recentOrders.map((ord) => (
                      <tr key={ord.id} className="hover:bg-slate-50/60 transition">
                        <td className="py-2.5 font-bold text-slate-900 font-mono text-[11px]">
                          {ord.id}
                        </td>
                        <td className="py-2.5 font-medium">{ord.customer}</td>
                        <td className="py-2.5 font-bold text-slate-900">{ord.amount}</td>
                        <td className="py-2.5 text-slate-500">{ord.items}</td>
                        <td className="py-2.5">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${ord.statusColor}`}>
                            {ord.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right: Pending Approvals with Tabs (~55%) */}
            <div className="lg:col-span-7 p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900">Pending Approvals</h3>
                <span className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer">
                  View All →
                </span>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-4 text-xs font-semibold border-b border-slate-100 pb-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('sellers')}
                  className={`pb-1 flex items-center gap-1.5 transition cursor-pointer ${
                    activeTab === 'sellers'
                      ? 'text-[#DF1927] border-b-2 border-[#DF1927]'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <span>Sellers</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-[#DF1927] text-white text-[10px]">
                    18
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('products')}
                  className={`pb-1 flex items-center gap-1.5 transition cursor-pointer ${
                    activeTab === 'products'
                      ? 'text-[#DF1927] border-b-2 border-[#DF1927]'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <span>Products</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-slate-200 text-slate-700 text-[10px]">
                    24
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('withdrawals')}
                  className={`pb-1 flex items-center gap-1.5 transition cursor-pointer ${
                    activeTab === 'withdrawals'
                      ? 'text-[#DF1927] border-b-2 border-[#DF1927]'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <span>Withdrawals</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-slate-200 text-slate-700 text-[10px]">
                    6
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('kyc')}
                  className={`pb-1 flex items-center gap-1.5 transition cursor-pointer ${
                    activeTab === 'kyc'
                      ? 'text-[#DF1927] border-b-2 border-[#DF1927]'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <span>KYC</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-slate-200 text-slate-700 text-[10px]">
                    38
                  </span>
                </button>
              </div>

              {/* Items List */}
              <div className="space-y-3 pt-1">
                {(activeTab === 'sellers' ? pendingApprovalsSellers : pendingApprovalsProducts).map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-slate-200 transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`size-9 rounded-full ${item.avatarBg} flex items-center justify-center font-bold text-xs shrink-0`}>
                        {item.initials}
                      </div>
                      <div className="leading-tight">
                        <p className="text-xs font-bold text-slate-900">{item.name}</p>
                        <p className="text-[10px] text-slate-400">{item.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 text-xs">
                      <div className="text-left sm:text-right">
                        <span className="text-[11px] font-semibold text-slate-700 block">{item.action}</span>
                        <span className="text-[10px] text-slate-400">{item.time}</span>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleApprove(item.name)}
                          className="px-3 py-1 rounded-xl border border-emerald-500 text-emerald-700 hover:bg-emerald-50 font-bold text-xs transition cursor-pointer"
                        >
                          Approve
                        </button>
                        <button
                          type="button"
                          onClick={() => handleReject(item.name)}
                          className="px-3 py-1 rounded-xl border border-rose-300 text-rose-600 hover:bg-rose-50 font-bold text-xs transition cursor-pointer"
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
