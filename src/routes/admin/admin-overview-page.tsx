import * as React from 'react'
import { Link } from 'react-router-dom'
import {
  Activity,
  ArrowRight,
  Bell,
  Building2,
  Calendar,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Clock,
  Database,
  FileText,
  Globe,
  HardDrive,
  Home,
  Image as ImageIcon,
  LayoutGrid,
  MessageSquare,
  Package,
  Search,
  Settings,
  ShieldCheck,
  Store,
  Users,
} from 'lucide-react'
import { SbtLogo } from '@/components/sbt-logo'
import { ROUTES } from '@/constants/routes'

export function AdminOverviewPage() {
  const [activeMetricTab, setActiveMetricTab] = React.useState<'Orders' | 'GMV' | 'Active Users'>('Orders')
  const [searchQuery, setSearchQuery] = React.useState('')
  const [activeSidebarItem, setActiveSidebarItem] = React.useState('Overview')

  const sidebarNavItems = [
    { label: 'Overview', icon: Home },
    { label: 'Users', icon: Users },
    { label: 'Seller Organizations', icon: Building2 },
    { label: 'Stores', icon: Store },
    { label: 'Products', icon: Package },
    { label: 'Categories', icon: LayoutGrid },
    { label: 'Reviews', icon: MessageSquare },
    { label: 'Media', icon: ImageIcon },
    { label: 'Configuration', icon: Settings, hasSubmenu: true },
    { label: 'Roles & Permissions', icon: ShieldCheck },
    { label: 'Audit & Activity', icon: FileText },
    { label: 'System Health', icon: Activity },
  ]

  const approvalQueueItems = [
    {
      icon: Users,
      title: 'Seller Verifications',
      count: '42',
      badge: 'Pending',
      badgeColor: 'bg-[#FFF0F2] text-[#DF1927]',
    },
    {
      icon: Store,
      title: 'Store Approvals',
      count: '18',
      badge: 'In Review',
      badgeColor: 'bg-[#FFFBEB] text-[#D97706]',
    },
    {
      icon: Package,
      title: 'Product Reviews',
      count: '96',
      badge: 'Needs Changes',
      badgeColor: 'bg-[#EFF6FF] text-[#2563EB]',
    },
  ]

  const platformHealthItems = [
    { icon: Globe, name: 'API Services', status: 'Healthy', uptime: '99.9%' },
    { icon: Database, name: 'Database', status: 'Healthy', uptime: '99.9%' },
    { icon: HardDrive, name: 'Media Storage', status: 'Healthy', uptime: '99.8%' },
    { icon: Activity, name: 'Event Processing', status: 'Healthy', uptime: '99.7%' },
  ]

  const recentActivityData = [
    {
      initials: 'RS',
      userName: 'Rohan Sharma',
      userRole: 'Admin',
      action: 'Approved seller',
      resourceName: 'FreshMart Pvt Ltd',
      resourceType: 'Seller Organization',
      scope: 'Sellers',
      time: '2 minutes ago',
      status: 'Success',
    },
    {
      initials: 'AP',
      userName: 'Anjali Patel',
      userRole: 'Moderator',
      action: 'Rejected product',
      resourceName: 'Wireless Headphones',
      resourceType: 'Product',
      scope: 'Products',
      time: '18 minutes ago',
      status: 'Rejected',
    },
    {
      initials: 'VK',
      userName: 'Vikram Kumar',
      userRole: 'Admin',
      action: 'Updated category',
      resourceName: 'Home & Living',
      resourceType: 'Category',
      scope: 'Catalog',
      time: '1 hour ago',
      status: 'Success',
    },
    {
      initials: 'SN',
      userName: 'Sneha Nair',
      userRole: 'Support',
      action: 'Verified store',
      resourceName: 'StyleHub',
      resourceType: 'Store',
      scope: 'Stores',
      time: '2 hours ago',
      status: 'Success',
    },
    {
      initials: 'AR',
      userName: 'Arjun Rao',
      userRole: 'Admin',
      action: 'Updated permissions',
      resourceName: 'Store Manager',
      resourceType: 'Role',
      scope: 'Access',
      time: '3 hours ago',
      status: 'Success',
    },
  ]

  const quickActions = [
    {
      icon: Users,
      title: 'Review Sellers',
      description: 'Approve or reject seller requests',
    },
    {
      icon: Package,
      title: 'Review Products',
      description: 'Moderate product listings',
    },
    {
      icon: LayoutGrid,
      title: 'Manage Categories',
      description: 'Add, edit or organize categories',
    },
    {
      icon: FileText,
      title: 'View Audit Logs',
      description: 'Track all platform activities',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFB] text-slate-900 font-sans selection:bg-red-100 selection:text-red-900">
      {/* ---------------------------------------------------------------------- */}
      {/* TOP NAVBAR                                                             */}
      {/* ---------------------------------------------------------------------- */}
      <header className="w-full h-16 bg-white border-b border-black/[0.06] px-6 flex items-center justify-between sticky top-0 z-40 shrink-0">
        {/* Left: Logo & Portal Title */}
        <div className="flex items-center gap-6">
          <Link to={ROUTES.home} className="shrink-0">
            <SbtLogo size="sm" />
          </Link>

          <div className="hidden md:flex items-center gap-2.5 text-xs text-slate-500">
            <span className="font-bold text-slate-900 text-[13px]">Admin Portal</span>
            <span className="h-3.5 w-[2px] bg-[#DF1927] inline-block rounded-full" />
            <span className="text-slate-500 text-[12px]">Marketplace Control Center</span>
          </div>
        </div>

        {/* Center: Search input */}
        <div className="relative max-w-md w-full mx-6 hidden sm:block">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search users, products, orders, stores..."
            className="w-full h-9 pl-9 pr-4 rounded-xl bg-slate-50/80 border border-slate-200/80 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#DF1927] focus:ring-2 focus:ring-[#DF1927]/10 transition"
          />
        </div>

        {/* Right: Notifications, Help, Profile */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Notifications with Badge */}
          <button
            type="button"
            className="relative p-1.5 text-slate-600 hover:text-slate-900 transition cursor-pointer"
            title="Notifications"
          >
            <Bell className="size-5 text-slate-700" />
            <span className="absolute top-0.5 right-0.5 size-4 rounded-full bg-[#DF1927] text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
              5
            </span>
          </button>

          {/* Help Button */}
          <button
            type="button"
            className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 transition cursor-pointer"
          >
            <CircleHelp className="size-4.5 text-slate-600" />
            <span>Help</span>
          </button>

          <span className="h-5 w-px bg-slate-200 hidden sm:inline-block" />

          {/* User Profile */}
          <div className="flex items-center gap-2.5 cursor-pointer select-none">
            <div className="size-8 rounded-full bg-[#0F172A] text-white font-bold text-xs flex items-center justify-center shadow-xs">
              A
            </div>
            <div className="hidden lg:block text-left leading-tight">
              <p className="text-xs font-bold text-slate-900">Admin</p>
              <p className="text-[10px] text-slate-400 font-medium">Super Admin</p>
            </div>
            <ChevronDown className="size-3.5 text-slate-400 hidden sm:block" />
          </div>
        </div>
      </header>

      {/* ---------------------------------------------------------------------- */}
      {/* BODY WITH SIDEBAR & MAIN CONTENT                                       */}
      {/* ---------------------------------------------------------------------- */}
      <div className="flex-1 flex w-full">
        {/* LEFT SIDEBAR */}
        <aside className="w-56 lg:w-60 border-r border-black/[0.06] bg-white p-4 flex flex-col justify-between hidden md:flex shrink-0">
          <div className="space-y-1">
            {sidebarNavItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSidebarItem === item.label
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActiveSidebarItem(item.label)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition cursor-pointer ${
                    isActive
                      ? 'bg-[#FFF1F2] text-[#DF1927] font-bold relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[3px] before:bg-[#DF1927] before:rounded-r'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`size-4 ${isActive ? 'text-[#DF1927]' : 'text-slate-500'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.hasSubmenu && <ChevronRight className="size-3.5 text-slate-400" />}
                </button>
              )
            })}
          </div>

          {/* Bottom Sidebar Card & Footer */}
          <div className="pt-6 space-y-4">
            <div className="rounded-2xl p-4 bg-gradient-to-br from-[#FFF5F5] to-[#FFE4E6] border border-[#FFD0D4]/60 relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-black text-xs text-slate-900 tracking-tight">SBT</h4>
                <p className="text-[10px] text-slate-500 leading-snug mt-1">
                  A trusted marketplace for a better tomorrow.
                </p>
              </div>
              {/* Subtle decorative folded corner polygon */}
              <div className="absolute right-0 bottom-0 size-16 opacity-30 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 0 L100 100 L0 100 Z" fill="#DF1927" />
                </svg>
              </div>
            </div>

            <div className="px-1 text-[10px] text-slate-400 leading-tight space-y-0.5">
              <p>v1.0.0</p>
              <p>© 2026 SBT. All rights reserved.</p>
            </div>
          </div>
        </aside>

        {/* MAIN DASHBOARD CONTENT */}
        <main className="flex-1 p-6 sm:p-8 space-y-6 max-w-[1480px] mx-auto w-full overflow-x-hidden">
          {/* Header Title Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Good morning, <span className="text-[#DF1927]">Admin.</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Monitor marketplace activity, approvals, trust and platform health from one place.
              </p>
            </div>

            {/* Date Pill Dropdown */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-700 shadow-2xs self-start sm:self-auto cursor-pointer">
              <Calendar className="size-3.5 text-slate-500" />
              <span>Today, 17 Sep 2026</span>
              <ChevronDown className="size-3 text-slate-400" />
            </div>
          </div>

          {/* 4 TOP KPI CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Total Users */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs flex items-center justify-between hover:shadow-md transition">
              <div>
                <div className="size-9 rounded-xl bg-[#FFF1F2] text-[#DF1927] flex items-center justify-center mb-3">
                  <Users className="size-4.5" />
                </div>
                <p className="text-xs font-medium text-slate-500">Total Users</p>
                <p className="text-2xl font-black text-slate-900 tracking-tight mt-0.5">1,24,580</p>
                <p className="text-[11px] font-semibold text-emerald-600 mt-1 flex items-center gap-1">
                  <span>↑ +12%</span>
                  <span className="text-slate-400 font-normal">vs last month</span>
                </p>
              </div>
              <div className="w-20 h-10 shrink-0">
                <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                  <path
                    d="M0 30 Q25 28 40 20 T70 15 T100 8"
                    fill="none"
                    stroke="#DF1927"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Card 2: Active Sellers */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs flex items-center justify-between hover:shadow-md transition">
              <div>
                <div className="size-9 rounded-xl bg-[#FFF1F2] text-[#DF1927] flex items-center justify-center mb-3">
                  <Store className="size-4.5" />
                </div>
                <p className="text-xs font-medium text-slate-500">Active Sellers</p>
                <p className="text-2xl font-black text-slate-900 tracking-tight mt-0.5">8,432</p>
                <p className="text-[11px] font-semibold text-emerald-600 mt-1 flex items-center gap-1">
                  <span>↑ +8%</span>
                  <span className="text-slate-400 font-normal">vs last month</span>
                </p>
              </div>
              <div className="w-20 h-10 shrink-0">
                <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                  <path
                    d="M0 32 Q30 30 50 18 T80 12 T100 6"
                    fill="none"
                    stroke="#DF1927"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Card 3: Pending Approvals */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs flex items-center justify-between hover:shadow-md transition">
              <div>
                <div className="size-9 rounded-xl bg-[#FFF1F2] text-[#DF1927] flex items-center justify-center mb-3">
                  <Clock className="size-4.5" />
                </div>
                <p className="text-xs font-medium text-slate-500">Pending Approvals</p>
                <p className="text-2xl font-black text-slate-900 tracking-tight mt-0.5">256</p>
                <p className="text-[11px] font-semibold text-[#DF1927] mt-1 flex items-center gap-1">
                  <span>↓ -18%</span>
                  <span className="text-slate-400 font-normal">vs last month</span>
                </p>
              </div>
              <div className="w-20 h-10 shrink-0">
                <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                  <path
                    d="M0 35 Q20 32 45 26 T75 22 T100 12"
                    fill="none"
                    stroke="#DF1927"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Card 4: Active Products */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs flex items-center justify-between hover:shadow-md transition">
              <div>
                <div className="size-9 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-3">
                  <Package className="size-4.5" />
                </div>
                <p className="text-xs font-medium text-slate-500">Active Products</p>
                <p className="text-2xl font-black text-slate-900 tracking-tight mt-0.5">54,218</p>
                <p className="text-[11px] font-semibold text-emerald-600 mt-1 flex items-center gap-1">
                  <span>↑ +22%</span>
                  <span className="text-slate-400 font-normal">vs last month</span>
                </p>
              </div>
              <div className="w-20 h-10 shrink-0">
                <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                  <path
                    d="M0 35 Q30 30 55 20 T85 14 T100 10"
                    fill="none"
                    stroke="#DF1927"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* MIDDLE ROW: PERFORMANCE CHART & QUEUE/HEALTH */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Marketplace Performance Chart (8 cols) */}
            <div className="lg:col-span-8 bg-white rounded-2xl p-6 border border-slate-100 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Marketplace Performance</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Overview of key metrics for the last 30 days</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 bg-slate-100/60 p-1 rounded-xl">
                    {(['Orders', 'GMV', 'Active Users'] as const).map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveMetricTab(tab)}
                        className={`px-3 py-1 text-xs font-bold rounded-lg transition cursor-pointer ${
                          activeMetricTab === tab
                            ? 'bg-[#FFF1F2] text-[#DF1927] shadow-2xs'
                            : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600 cursor-pointer">
                    <span>Last 30 days</span>
                    <ChevronDown className="size-3 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Interactive Performance SVG Curve */}
              <div className="relative w-full h-[280px] select-none pt-4">
                <svg viewBox="0 0 700 240" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#DF1927" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#DF1927" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Grid lines */}
                  <line x1="40" y1="20" x2="700" y2="20" stroke="#F1F5F9" strokeWidth="1" />
                  <line x1="40" y1="65" x2="700" y2="65" stroke="#F1F5F9" strokeWidth="1" />
                  <line x1="40" y1="110" x2="700" y2="110" stroke="#F1F5F9" strokeWidth="1" />
                  <line x1="40" y1="155" x2="700" y2="155" stroke="#F1F5F9" strokeWidth="1" />
                  <line x1="40" y1="200" x2="700" y2="200" stroke="#F1F5F9" strokeWidth="1" />

                  {/* Y-axis text labels */}
                  <text x="15" y="24" fontSize="11" fill="#94A3B8" fontFamily="sans-serif">4K</text>
                  <text x="15" y="69" fontSize="11" fill="#94A3B8" fontFamily="sans-serif">3K</text>
                  <text x="15" y="114" fontSize="11" fill="#94A3B8" fontFamily="sans-serif">2K</text>
                  <text x="15" y="159" fontSize="11" fill="#94A3B8" fontFamily="sans-serif">1K</text>
                  <text x="22" y="204" fontSize="11" fill="#94A3B8" fontFamily="sans-serif">0</text>

                  {/* Area Fill */}
                  <path
                    d="M 40 180 
                       C 90 180, 110 160, 140 160 
                       C 170 160, 190 175, 230 150 
                       C 270 125, 300 165, 340 150 
                       C 380 135, 410 155, 450 130 
                       C 490 105, 520 120, 560 90 
                       C 600 60, 630 65, 700 80
                       L 700 200 L 40 200 Z"
                    fill="url(#areaGradient)"
                  />

                  {/* Stroke Line */}
                  <path
                    d="M 40 180 
                       C 90 180, 110 160, 140 160 
                       C 170 160, 190 175, 230 150 
                       C 270 125, 300 165, 340 150 
                       C 380 135, 410 155, 450 130 
                       C 490 105, 520 120, 560 90 
                       C 600 60, 630 65, 700 80"
                    fill="none"
                    stroke="#DF1927"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Dashed vertical indicator line to 12 Sep tooltip */}
                  <line x1="535" y1="102" x2="535" y2="200" stroke="#DF1927" strokeWidth="1.5" strokeDasharray="3,3" />

                  {/* Active Tooltip Point */}
                  <circle cx="535" cy="102" r="4.5" fill="#DF1927" stroke="#FFFFFF" strokeWidth="2" />
                </svg>

                {/* Floating Tooltip Box matching Screenshot */}
                <div className="absolute top-10 left-[72%] -translate-x-1/2 bg-[#0F172A] text-white px-3 py-1.5 rounded-lg shadow-xl pointer-events-none text-center">
                  <p className="text-[11px] font-bold leading-tight">2,840 orders</p>
                  <p className="text-[9px] text-slate-400 leading-tight">12 Sep 2026</p>
                </div>

                {/* X-axis date labels */}
                <div className="flex justify-between pl-8 pr-2 pt-2 text-[10px] sm:text-[11px] text-slate-400 font-medium">
                  <span>18 Aug</span>
                  <span>22 Aug</span>
                  <span>26 Aug</span>
                  <span>30 Aug</span>
                  <span>3 Sep</span>
                  <span>7 Sep</span>
                  <span>11 Sep</span>
                  <span>15 Sep</span>
                </div>
              </div>
            </div>

            {/* Right: Approval Queue & Platform Health (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Approval Queue */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900">Approval Queue</h3>
                  <button type="button" className="text-xs font-semibold text-slate-400 hover:text-slate-900 transition flex items-center gap-1">
                    <span>View all</span>
                    <ArrowRight className="size-3" />
                  </button>
                </div>

                <div className="space-y-3">
                  {approvalQueueItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.title} className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                            <Icon className="size-4" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-slate-800">{item.title}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-slate-900">{item.count}</span>
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${item.badgeColor}`}>
                            {item.badge}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Platform Health */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900">Platform Health</h3>
                  <button type="button" className="text-xs font-semibold text-slate-400 hover:text-slate-900 transition flex items-center gap-1">
                    <span>View details</span>
                    <ArrowRight className="size-3" />
                  </button>
                </div>

                <div className="space-y-2.5">
                  {platformHealthItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.name} className="flex items-center justify-between text-xs py-1">
                        <div className="flex items-center gap-2.5 text-slate-700 font-medium">
                          <Icon className="size-3.5 text-slate-500" />
                          <span>{item.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold">
                            <span className="size-1.5 rounded-full bg-emerald-500" />
                            {item.status}
                          </span>
                          <span className="font-bold text-slate-900 text-xs">{item.uptime}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW: RECENT ACTIVITY & QUICK ACTIONS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Recent Activity Table (8 cols) */}
            <div className="lg:col-span-8 bg-white rounded-2xl p-6 border border-slate-100 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900">Recent Activity</h3>
                <button type="button" className="text-xs font-semibold text-slate-400 hover:text-slate-900 transition flex items-center gap-1">
                  <span>View all</span>
                  <ArrowRight className="size-3" />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      <th className="pb-3 font-semibold">User</th>
                      <th className="pb-3 font-semibold">Action</th>
                      <th className="pb-3 font-semibold">Resource</th>
                      <th className="pb-3 font-semibold">Scope</th>
                      <th className="pb-3 font-semibold">Time</th>
                      <th className="pb-3 font-semibold text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 text-xs">
                    {recentActivityData.map((row) => (
                      <tr key={row.userName + row.action} className="hover:bg-slate-50/70 transition">
                        {/* User */}
                        <td className="py-3 flex items-center gap-2.5">
                          <div className="size-7 rounded-full bg-slate-100 text-slate-700 font-bold text-[10px] flex items-center justify-center shrink-0">
                            {row.initials}
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 leading-tight">{row.userName}</p>
                            <p className="text-[10px] text-slate-400">{row.userRole}</p>
                          </div>
                        </td>

                        {/* Action */}
                        <td className="py-3 text-slate-600 font-medium">{row.action}</td>

                        {/* Resource */}
                        <td className="py-3">
                          <p className="font-bold text-slate-900 leading-tight">{row.resourceName}</p>
                          <p className="text-[10px] text-slate-400">{row.resourceType}</p>
                        </td>

                        {/* Scope */}
                        <td className="py-3 text-slate-500 font-medium">{row.scope}</td>

                        {/* Time */}
                        <td className="py-3 text-slate-400 text-[11px]">{row.time}</td>

                        {/* Status */}
                        <td className="py-3 text-right">
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold ${
                              row.status === 'Success'
                                ? 'bg-[#ECFDF5] text-[#059669]'
                                : 'bg-[#FFF1F2] text-[#DF1927]'
                            }`}
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right: Quick Actions (4 cols) */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-100 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900">Quick Actions</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
                {quickActions.map((action) => {
                  const Icon = action.icon
                  return (
                    <button
                      key={action.title}
                      type="button"
                      className="p-3.5 rounded-xl border border-slate-100 bg-[#FAFAFA] hover:bg-white hover:border-[#DF1927]/30 hover:shadow-xs transition text-left group cursor-pointer"
                    >
                      <div className="size-8 rounded-lg bg-[#FFF1F2] text-[#DF1927] flex items-center justify-center mb-2.5 group-hover:scale-105 transition">
                        <Icon className="size-4" />
                      </div>
                      <p className="text-xs font-bold text-slate-900 group-hover:text-[#DF1927] transition">
                        {action.title}
                      </p>
                      <p className="text-[10px] text-slate-400 leading-snug mt-0.5">
                        {action.description}
                      </p>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
