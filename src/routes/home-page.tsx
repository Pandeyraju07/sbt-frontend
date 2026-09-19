import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BarChart3,
  Bell,
  ChevronDown,
  Headphones,
  Package,
  Search,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Store,
  TrendingUp,
  UserCheck,
  Users,
} from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import { SbtLogo } from '@/components/sbt-logo'
import hubScene from '@/assets/sbt-portal-hub-scene.png'

export function HomePage() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F8F9FB] text-slate-900 font-sans selection:bg-red-100 selection:text-red-900">
      {/* ---------------------------------------------------------------------- */}
      {/* TOP GLOBAL NAVBAR                                                      */}
      {/* ---------------------------------------------------------------------- */}
      <header className="w-full h-16 sm:h-20 px-6 sm:px-10 lg:px-12 flex items-center justify-between border-b border-black/[0.04] bg-white z-20 shrink-0">
        {/* Left: Official SBT Logo & Main Navigation Tabs */}
        <div className="flex items-center gap-8 lg:gap-14">
          <Link to={ROUTES.home} className="shrink-0 transition-opacity hover:opacity-95" title="SBT Home">
            <SbtLogo size="sm" />
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-slate-600">
            <Link to={ROUTES.home} className="text-slate-900 font-bold relative py-1">
              <span>Portal Hub</span>
              <span className="absolute -bottom-2 left-0 right-0 h-[2.5px] bg-[#DF1927] rounded-full" />
            </Link>
            <Link to={ROUTES.buyer.root} className="hover:text-slate-900 transition">
              Marketplace
            </Link>
            <Link to={ROUTES.designSystem} className="hover:text-slate-900 transition">
              Resources
            </Link>
            <a href="#support" className="hover:text-slate-900 transition">
              Support
            </a>
          </nav>
        </div>

        {/* Right: Notifications & User Profile */}
        <div className="flex items-center gap-4">
          {/* Notification Bell with Badge */}
          <button
            type="button"
            className="relative p-2 rounded-xl text-slate-600 hover:bg-slate-50 transition cursor-pointer"
            aria-label="Notifications"
          >
            <Bell className="size-5" />
            <span className="absolute top-1.5 right-1.5 size-4 rounded-full bg-[#DF1927] text-white text-[9px] font-black flex items-center justify-center">
              3
            </span>
          </button>

          {/* User Profile Badge */}
          <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200">
            <div className="size-9 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">
              RS
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-bold text-slate-900 leading-tight">Rohan Sharma</p>
              <p className="text-[10px] text-slate-400 font-medium leading-tight">Super Admin</p>
            </div>
            <ChevronDown className="size-3.5 text-slate-400 hidden sm:block" />
          </div>
        </div>
      </header>

      {/* ---------------------------------------------------------------------- */}
      {/* MAIN PORTAL HUB CONTENT                                                */}
      {/* ---------------------------------------------------------------------- */}
      <main className="flex-1 w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-12 py-6 sm:py-8 space-y-8">
        {/* HERO ROW: Left Headlines & Right 3D Glass Connected Cubes Scene */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-black/[0.04] shadow-xs">
          {/* Left Column: Headlines & Search */}
          <div className="lg:col-span-6 space-y-4 max-w-xl">
            {/* Red Accent Pill */}
            <div className="w-8 h-[3px] bg-[#DF1927] rounded-full" />

            {/* Eyebrow */}
            <span className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase block">
              ONE ECOSYSTEM. MANY POSSIBILITIES.
            </span>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-slate-900 tracking-tight leading-[1.08]">
              Welcome to
              <br />
              SBT <span className="text-[#DF1927]">Portal Hub</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-lg pt-1 pb-2">
              Access all your portals in one place. Manage, monitor and scale your marketplace with ease.
            </p>

            {/* Search Bar with Shortcut */}
            <div className="relative max-w-md w-full pt-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search portals, tools, or help..."
                className="w-full h-11 pl-11 pr-16 rounded-2xl bg-slate-50/90 border border-slate-200/80 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#DF1927] focus:ring-2 focus:ring-[#DF1927]/15 transition"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 border border-slate-200 rounded-md px-1.5 py-0.5">
                Ctrl K
              </span>
            </div>
          </div>

          {/* Right Column: 3D Floating Glass Cubes Scene */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px] flex justify-center lg:justify-end">
              <img
                src={hubScene}
                alt="SBT 3D Connected Glassmorphic Portals"
                className="w-full h-auto max-h-[300px] object-contain object-right select-none pointer-events-none drop-shadow-sm"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------- */}
        {/* CHOOSE YOUR PORTAL SECTION                                           */}
        {/* -------------------------------------------------------------------- */}
        <div className="space-y-5">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Choose Your Portal
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-500 mt-0.5">
                Quick access to all SBT portals and tools
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 transition cursor-pointer"
              >
                <Settings className="size-3.5 text-slate-500" />
                <span>Manage Access</span>
              </button>

              <Link
                to={ROUTES.designSystem}
                className="rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-4 py-1.5 text-xs font-bold text-slate-800 transition flex items-center gap-1.5 shadow-2xs"
              >
                <span>View All Portals</span>
                <ArrowRight className="size-3.5 text-slate-500" />
              </Link>
            </div>
          </div>

          {/* 4 Portal Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: Buyer Portal */}
            <div className="bg-gradient-to-b from-[#FFF5F5]/60 via-white to-white rounded-3xl p-6 border border-red-100/80 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-red-200 transition-all duration-300">
              <div className="space-y-4">
                {/* Icon Squircle */}
                <div className="size-11 rounded-2xl bg-red-50 text-[#DF1927] flex items-center justify-center shadow-2xs">
                  <ShoppingBag className="size-5" />
                </div>

                <div>
                  <h3 className="text-base font-black text-slate-900">Buyer Portal</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Discover, shop and experience trusted products from verified sellers.
                  </p>
                </div>

                {/* 4 Nav Items */}
                <ul className="space-y-2.5 pt-2 text-xs font-medium text-slate-700">
                  <li>
                    <Link to={ROUTES.buyer.root} className="flex items-center justify-between hover:text-[#DF1927] transition">
                      <span className="flex items-center gap-2">
                        <Package className="size-3.5 text-slate-400" />
                        Browse Products
                      </span>
                      <ArrowRight className="size-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.buyer.root} className="flex items-center justify-between hover:text-[#DF1927] transition">
                      <span className="flex items-center gap-2">
                        <TrendingUp className="size-3.5 text-slate-400" />
                        Track Orders
                      </span>
                      <ArrowRight className="size-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.buyer.root} className="flex items-center justify-between hover:text-[#DF1927] transition">
                      <span className="flex items-center gap-2">
                        <UserCheck className="size-3.5 text-slate-400" />
                        Manage Profile
                      </span>
                      <ArrowRight className="size-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <a href="#support" className="flex items-center justify-between hover:text-[#DF1927] transition">
                      <span className="flex items-center gap-2">
                        <Headphones className="size-3.5 text-slate-400" />
                        Support
                      </span>
                      <ArrowRight className="size-3 text-slate-400" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <Link
                  to={ROUTES.buyer.root}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#DF1927] hover:bg-[#C8102E] active:bg-[#B00D26] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm shadow-[#DF1927]/20 transition cursor-pointer"
                >
                  <span>Open Buyer Portal</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Seller Portal */}
            <div className="bg-gradient-to-b from-[#F0F7FF]/60 via-white to-white rounded-3xl p-6 border border-blue-100/80 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-blue-200 transition-all duration-300">
              <div className="space-y-4">
                {/* Icon Squircle */}
                <div className="size-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-2xs">
                  <Store className="size-5" />
                </div>

                <div>
                  <h3 className="text-base font-black text-slate-900">Seller Portal</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    List products, manage orders and grow your business with SBT.
                  </p>
                </div>

                {/* 4 Nav Items */}
                <ul className="space-y-2.5 pt-2 text-xs font-medium text-slate-700">
                  <li>
                    <Link to={ROUTES.seller.root} className="flex items-center justify-between hover:text-blue-600 transition">
                      <span className="flex items-center gap-2">
                        <Package className="size-3.5 text-slate-400" />
                        Manage Products
                      </span>
                      <ArrowRight className="size-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.seller.root} className="flex items-center justify-between hover:text-blue-600 transition">
                      <span className="flex items-center gap-2">
                        <TrendingUp className="size-3.5 text-slate-400" />
                        Track Sales
                      </span>
                      <ArrowRight className="size-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.seller.root} className="flex items-center justify-between hover:text-blue-600 transition">
                      <span className="flex items-center gap-2">
                        <UserCheck className="size-3.5 text-slate-400" />
                        Payouts & Settlements
                      </span>
                      <ArrowRight className="size-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.seller.root} className="flex items-center justify-between hover:text-blue-600 transition">
                      <span className="flex items-center gap-2">
                        <Settings className="size-3.5 text-slate-400" />
                        Business Settings
                      </span>
                      <ArrowRight className="size-3 text-slate-400" />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <Link
                  to={ROUTES.seller.root}
                  className="w-full py-2.5 px-4 rounded-xl border border-blue-500 hover:bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <span>Open Seller Portal</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Admin Portal */}
            <div className="bg-gradient-to-b from-[#F0FDF4]/60 via-white to-white rounded-3xl p-6 border border-emerald-100/80 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-emerald-200 transition-all duration-300">
              <div className="space-y-4">
                {/* Icon Squircle */}
                <div className="size-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-2xs">
                  <ShieldCheck className="size-5" />
                </div>

                <div>
                  <h3 className="text-base font-black text-slate-900">Admin Portal</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Monitor platform activity, manage users, and ensure trust & compliance.
                  </p>
                </div>

                {/* 4 Nav Items */}
                <ul className="space-y-2.5 pt-2 text-xs font-medium text-slate-700">
                  <li>
                    <Link to={ROUTES.admin.root} className="flex items-center justify-between hover:text-emerald-600 transition">
                      <span className="flex items-center gap-2">
                        <UserCheck className="size-3.5 text-slate-400" />
                        User Management
                      </span>
                      <ArrowRight className="size-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.admin.root} className="flex items-center justify-between hover:text-emerald-600 transition">
                      <span className="flex items-center gap-2">
                        <Package className="size-3.5 text-slate-400" />
                        Product Moderation
                      </span>
                      <ArrowRight className="size-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.admin.root} className="flex items-center justify-between hover:text-emerald-600 transition">
                      <span className="flex items-center gap-2">
                        <BarChart3 className="size-3.5 text-slate-400" />
                        Analytics & Reports
                      </span>
                      <ArrowRight className="size-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.admin.root} className="flex items-center justify-between hover:text-emerald-600 transition">
                      <span className="flex items-center gap-2">
                        <Settings className="size-3.5 text-slate-400" />
                        System Configuration
                      </span>
                      <ArrowRight className="size-3 text-slate-400" />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <Link
                  to={ROUTES.admin.root}
                  className="w-full py-2.5 px-4 rounded-xl border border-emerald-500 hover:bg-emerald-50 text-emerald-600 font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <span>Open Admin Portal</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 4: Analytics Hub */}
            <div className="bg-gradient-to-b from-[#FAF5FF]/60 via-white to-white rounded-3xl p-6 border border-purple-100/80 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-purple-200 transition-all duration-300">
              <div className="space-y-4">
                {/* Icon Squircle */}
                <div className="size-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shadow-2xs">
                  <BarChart3 className="size-5" />
                </div>

                <div>
                  <h3 className="text-base font-black text-slate-900">Analytics Hub</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Insights that drive growth across the marketplace.
                  </p>
                </div>

                {/* 4 Nav Items */}
                <ul className="space-y-2.5 pt-2 text-xs font-medium text-slate-700">
                  <li>
                    <Link to={ROUTES.admin.root} className="flex items-center justify-between hover:text-purple-600 transition">
                      <span className="flex items-center gap-2">
                        <TrendingUp className="size-3.5 text-slate-400" />
                        Sales Analytics
                      </span>
                      <ArrowRight className="size-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.admin.root} className="flex items-center justify-between hover:text-purple-600 transition">
                      <span className="flex items-center gap-2">
                        <Users className="size-3.5 text-slate-400" />
                        User Insights
                      </span>
                      <ArrowRight className="size-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.admin.root} className="flex items-center justify-between hover:text-purple-600 transition">
                      <span className="flex items-center gap-2">
                        <Package className="size-3.5 text-slate-400" />
                        Product Trends
                      </span>
                      <ArrowRight className="size-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <Link to={ROUTES.admin.root} className="flex items-center justify-between hover:text-purple-600 transition">
                      <span className="flex items-center gap-2">
                        <BarChart3 className="size-3.5 text-slate-400" />
                        Custom Reports
                      </span>
                      <ArrowRight className="size-3 text-slate-400" />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <Link
                  to={ROUTES.admin.root}
                  className="w-full py-2.5 px-4 rounded-xl border border-purple-500 hover:bg-purple-50 text-purple-600 font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <span>Open Analytics Hub</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------- */}
        {/* BOTTOM ENTERPRISE BAR: METRICS & HELP                                */}
        {/* -------------------------------------------------------------------- */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-black/[0.04] shadow-xs flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: SBT Logo & Quote */}
          <div className="flex items-center gap-4">
            <SbtLogo size="xs" />
            <div className="h-5 w-[1px] bg-slate-200 hidden sm:block" />
            <p className="text-[11px] text-slate-400 font-medium">
              Opportunities for everyone <span className="font-bold text-slate-600">— SBT</span>
            </p>
          </div>

          {/* Center: 4 Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center sm:text-left">
            <div>
              <p className="text-sm sm:text-base font-black text-slate-900 leading-none">1M+</p>
              <p className="text-[10px] text-slate-400 font-medium mt-1">Buyers</p>
            </div>
            <div>
              <p className="text-sm sm:text-base font-black text-slate-900 leading-none">10K+</p>
              <p className="text-[10px] text-slate-400 font-medium mt-1">Sellers</p>
            </div>
            <div>
              <p className="text-sm sm:text-base font-black text-slate-900 leading-none">500+</p>
              <p className="text-[10px] text-slate-400 font-medium mt-1">Categories</p>
            </div>
            <div>
              <p className="text-sm sm:text-base font-black text-slate-900 leading-none">99.9%</p>
              <p className="text-[10px] text-slate-400 font-medium mt-1">Secure Transactions</p>
            </div>
          </div>

          {/* Right: Need Help Card */}
          <a
            href="#help"
            className="flex items-center gap-3 p-2.5 px-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition group cursor-pointer"
          >
            <div className="size-9 rounded-full bg-[#FFF1F2] text-[#DF1927] flex items-center justify-center shrink-0">
              <Headphones className="size-4" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-slate-900 leading-tight">Need Help?</p>
              <p className="text-[10px] text-slate-400 leading-tight mt-0.5">Get support or access documentation</p>
            </div>
            <ArrowRight className="size-3.5 text-slate-400 group-hover:translate-x-0.5 transition" />
          </a>
        </div>
      </main>
    </div>
  )
}
