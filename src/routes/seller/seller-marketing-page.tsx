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
  Settings,
  HelpCircle,
  Crown,
  ChevronRight,
  Plus,
  MoreVertical,
  ChevronLeft,
  Calendar,
  Tag,
  Copy,
  Check,
  Pause,
  Play,
  Edit2,
  FileText,
  Percent,
  X,
} from 'lucide-react'
import { toast } from 'sonner'
import { SbtLogo } from '@/components/sbt-logo'
import { ROUTES } from '@/constants/routes'

import cartIphone from '@/assets/premium/iphone15-black.jpg'
import cartAirpods from '@/assets/premium/airpods-pro-2.jpg'
import cartWatch from '@/assets/premium/galaxy-watch.jpg'
import cartShoes from '@/assets/premium/deal-shoes.jpg'
import cartLuggage from '@/assets/premium/deal-luggage.jpg'
import cartCase from '@/assets/premium/acc-case-clear.jpg'
import cartCharger from '@/assets/premium/acc-magsafe-charger.jpg'
import cartSpeaker from '@/assets/premium/sony-xm5.jpg'

const customerAvatars = {
  dhiraj: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
}

interface OfferItem {
  id: string
  name: string
  code: string
  image: string
  type: 'Percentage' | 'Flat Discount'
  discountBenefit: string
  validity: string
  status: 'Active' | 'Scheduled' | 'Expired'
  usage: string
  minOrderValue?: string
  maxDiscount?: string
  applicableProducts?: string
  usageLimit?: string
  totalUses?: string
}

export const SellerMarketingPage: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTab, setSelectedTab] = useState<'All' | 'Active' | 'Scheduled' | 'Expired'>('All')
  const [selectedType, setSelectedType] = useState('All Types')
  const [selectedStatus, setSelectedStatus] = useState('All Status')
  const [copiedCode, setCopiedCode] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  // 4 Metric KPI Cards matching Image 2 exactly
  const marketingMetrics = [
    {
      title: 'Total Offers',
      value: '24',
      subValue: '8 active',
      trend: '33%',
      trendLabel: '',
      isPositive: true,
      iconColor: 'bg-red-50 text-[#DF1927]',
      sparklineColor: '#DF1927',
      sparklinePath: 'M0,18 Q30,16 60,11 T90,14 T120,4',
      icon: Tag,
    },
    {
      title: 'Total Revenue from Offers',
      value: '₹1,24,580',
      subValue: '',
      trend: '28%',
      trendLabel: 'vs last month',
      isPositive: true,
      iconColor: 'bg-emerald-50 text-emerald-600',
      sparklineColor: '#10B981',
      sparklinePath: 'M0,18 Q30,17 60,12 T95,6 T120,2',
      icon: ShoppingBag,
    },
    {
      title: 'Redemption Count',
      value: '1,892',
      subValue: '',
      trend: '18%',
      trendLabel: 'vs last month',
      isPositive: true,
      iconColor: 'bg-blue-50 text-blue-600',
      sparklineColor: '#3B82F6',
      sparklinePath: 'M0,16 Q25,16 55,10 T95,12 T120,6',
      icon: Users,
    },
    {
      title: 'Avg. Discount Given',
      value: '12%',
      subValue: '',
      trend: '2%',
      trendLabel: 'vs last month',
      isPositive: false,
      iconColor: 'bg-amber-50 text-amber-600',
      sparklineColor: '#F59E0B',
      sparklinePath: 'M0,8 Q30,12 60,15 T90,12 T120,18',
      icon: Percent,
    },
  ]

  // 8 Offers matching Image 2
  const offersData: OfferItem[] = [
    {
      id: '1',
      name: 'Festive Sale',
      code: 'FESTIVE20',
      image: cartIphone,
      type: 'Percentage',
      discountBenefit: '20% OFF',
      validity: '26 Sep 2025 - 10 Oct 2025',
      status: 'Active',
      usage: '234 / 500',
      minOrderValue: '₹5,000',
      maxDiscount: '₹5,000',
      applicableProducts: 'All Smartphones',
      usageLimit: '500 uses per customer',
      totalUses: '234 / 500',
    },
    {
      id: '2',
      name: 'Audio Special',
      code: 'AUDIO500',
      image: cartAirpods,
      type: 'Flat Discount',
      discountBenefit: '₹500 OFF',
      validity: '20 Sep 2025 - 30 Sep 2025',
      status: 'Active',
      usage: '189 / 300',
      minOrderValue: '₹2,500',
      maxDiscount: '₹500',
      applicableProducts: 'All Audio Devices',
      usageLimit: '300 uses total',
      totalUses: '189 / 300',
    },
    {
      id: '3',
      name: 'Watch Bonanza',
      code: 'WATCH10',
      image: cartWatch,
      type: 'Percentage',
      discountBenefit: '10% OFF',
      validity: '15 Sep 2025 - 30 Sep 2025',
      status: 'Scheduled',
      usage: '0 / 200',
      minOrderValue: '₹8,000',
      maxDiscount: '₹2,000',
      applicableProducts: 'Wearables & Smartwatches',
      usageLimit: '200 uses total',
      totalUses: '0 / 200',
    },
    {
      id: '4',
      name: 'Footwear Flash',
      code: 'SHOE300',
      image: cartShoes,
      type: 'Flat Discount',
      discountBenefit: '₹300 OFF',
      validity: '01 Oct 2025 - 07 Oct 2025',
      status: 'Active',
      usage: '56 / 100',
      minOrderValue: '₹1,999',
      maxDiscount: '₹300',
      applicableProducts: 'Footwear',
      usageLimit: '100 uses total',
      totalUses: '56 / 100',
    },
    {
      id: '5',
      name: 'Back to School',
      code: 'SCHOOL15',
      image: cartLuggage,
      type: 'Percentage',
      discountBenefit: '15% OFF',
      validity: '25 Aug 2025 - 30 Sep 2025',
      status: 'Expired',
      usage: '320 / 320',
      minOrderValue: '₹1,500',
      maxDiscount: '₹1,000',
      applicableProducts: 'Bags & Accessories',
      usageLimit: '320 uses total',
      totalUses: '320 / 320',
    },
    {
      id: '6',
      name: 'Accessories Deal',
      code: 'ACC100',
      image: cartCase,
      type: 'Flat Discount',
      discountBenefit: '₹100 OFF',
      validity: '18 Sep 2025 - 25 Sep 2025',
      status: 'Active',
      usage: '98 / 250',
      minOrderValue: '₹499',
      maxDiscount: '₹100',
      applicableProducts: 'Cases & Accessories',
      usageLimit: '250 uses total',
      totalUses: '98 / 250',
    },
    {
      id: '7',
      name: 'Charger Combo',
      code: 'CHARGE10',
      image: cartCharger,
      type: 'Percentage',
      discountBenefit: '10% OFF',
      validity: '10 Sep 2025 - 20 Sep 2025',
      status: 'Expired',
      usage: '150 / 150',
      minOrderValue: '₹999',
      maxDiscount: '₹300',
      applicableProducts: 'Charging Accessories',
      usageLimit: '150 uses total',
      totalUses: '150 / 150',
    },
    {
      id: '8',
      name: 'Electronics Week',
      code: 'ELEC25',
      image: cartSpeaker,
      type: 'Percentage',
      discountBenefit: '25% OFF',
      validity: '01 Oct 2025 - 15 Oct 2025',
      status: 'Scheduled',
      usage: '0 / 400',
      minOrderValue: '₹10,000',
      maxDiscount: '₹5,000',
      applicableProducts: 'Consumer Electronics',
      usageLimit: '400 uses total',
      totalUses: '0 / 400',
    },
  ]

  const [selectedOffer, setSelectedOffer] = useState<OfferItem>(offersData[0]!)

  const toggleSelectAll = () => {
    if (selectedIds.length === offersData.length) {
      setSelectedIds([])
    } else {
      setSelectedIds(offersData.map((item) => item.id))
    }
  }

  const toggleSelectItem = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const copyCouponCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(true)
    toast.success(`Coupon code ${code} copied!`)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  const filteredOffers = offersData.filter((item) => {
    if (selectedTab === 'Active' && item.status !== 'Active') return false
    if (selectedTab === 'Scheduled' && item.status !== 'Scheduled') return false
    if (selectedTab === 'Expired' && item.status !== 'Expired') return false
    if (selectedType !== 'All Types' && item.type !== selectedType) return false
    if (selectedStatus !== 'All Status' && item.status !== selectedStatus) return false
    if (
      searchQuery &&
      !item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.code.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false
    return true
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

              <Link
                to={ROUTES.sellerOrders}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-4 h-4 text-gray-500" />
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

              {/* Marketing & Offers (Active) */}
              <Link
                to={ROUTES.sellerMarketing}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-[#DF1927] bg-red-50 border-l-4 border-[#DF1927] transition"
              >
                <Megaphone className="w-4 h-4 text-[#DF1927]" />
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                <span>Marketing & Offers</span>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-[#DF1927] font-semibold">All Offers</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Marketing & Offers</h1>
              <p className="text-xs text-gray-500 mt-0.5">
                Create and manage offers, coupons, discounts and special campaigns to boost your sales.
              </p>
            </div>

            {/* Top Right Create Button */}
            <button
              type="button"
              onClick={() => setShowCreateModal(true)}
              className="px-4 py-2 bg-[#DF1927] hover:bg-[#c01420] text-white text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm shadow-red-200 transition"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Create New Offer</span>
            </button>
          </div>

          {/* 4 KPI METRIC CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {marketingMetrics.map((metric, idx) => {
              const Icon = metric.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex items-center justify-between gap-3 relative overflow-hidden group hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${metric.iconColor}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">{metric.title}</div>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-2xl font-bold text-gray-900 leading-tight">
                          {metric.value}
                        </span>
                        {metric.subValue && (
                          <span className="text-[11px] text-gray-400">{metric.subValue}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 mt-1 text-[11px]">
                        <span
                          className={`font-semibold ${
                            metric.isPositive ? 'text-emerald-600' : 'text-amber-600'
                          }`}
                        >
                          {metric.isPositive ? '↗' : '↘'} {metric.trend}
                        </span>
                        {metric.trendLabel && (
                          <span className="text-gray-400">{metric.trendLabel}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* SVG Sparkline */}
                  <div className="w-20 h-10 shrink-0 flex items-center justify-end">
                    <svg
                      viewBox="0 0 120 25"
                      className="w-full h-full overflow-visible"
                      fill="none"
                      stroke={metric.sparklineColor}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d={metric.sparklinePath} />
                    </svg>
                  </div>
                </div>
              )
            })}
          </div>

          {/* TABS BAR */}
          <div className="border-b border-gray-200">
            <div className="flex items-center gap-8">
              {[
                { label: 'All Offers (24)', value: 'All' },
                { label: 'Active (8)', value: 'Active' },
                { label: 'Scheduled (4)', value: 'Scheduled' },
                { label: 'Expired (12)', value: 'Expired' },
              ].map((tab) => (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setSelectedTab(tab.value as any)}
                  className={`pb-3 text-xs font-semibold border-b-2 transition ${
                    selectedTab === tab.value
                      ? 'border-[#DF1927] text-[#DF1927]'
                      : 'border-transparent text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* FILTER BAR */}
          <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm flex flex-wrap items-center justify-between gap-3">
            <div className="relative flex-1 min-w-[240px] max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search offers by name, code or type..."
                className="w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927] transition"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium focus:outline-none focus:border-[#DF1927]"
              >
                <option>All Types</option>
                <option>Percentage</option>
                <option>Flat Discount</option>
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium focus:outline-none focus:border-[#DF1927]"
              >
                <option>All Status</option>
                <option>Active</option>
                <option>Scheduled</option>
                <option>Expired</option>
              </select>

              <button
                type="button"
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium flex items-center gap-1.5 hover:bg-gray-100 transition"
              >
                <Calendar className="w-3.5 h-3.5 text-gray-500" />
                <span>26 Sep 2025 - 02 Oct 2025</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>
            </div>
          </div>

          {/* MAIN GRID: TABLE (LEFT) + INSPECTOR (RIGHT) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* OFFERS TABLE (8 COLS) */}
            <div className="lg:col-span-8 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-gray-100 text-gray-400 font-medium bg-gray-50/50">
                      <th className="py-3.5 pl-5 pr-2 w-8">
                        <input
                          type="checkbox"
                          checked={selectedIds.length === offersData.length}
                          onChange={toggleSelectAll}
                          className="rounded border-gray-300 text-[#DF1927] focus:ring-[#DF1927]"
                        />
                      </th>
                      <th className="py-3.5 px-3 font-semibold">Offer Name</th>
                      <th className="py-3.5 px-3 font-semibold">Type</th>
                      <th className="py-3.5 px-3 font-semibold">Discount / Benefit</th>
                      <th className="py-3.5 px-3 font-semibold">Validity</th>
                      <th className="py-3.5 px-3 font-semibold">Status</th>
                      <th className="py-3.5 px-3 font-semibold">Usage</th>
                      <th className="py-3.5 pr-5 pl-2 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredOffers.map((item) => (
                      <tr
                        key={item.id}
                        onClick={() => setSelectedOffer(item)}
                        className={`transition cursor-pointer ${
                          selectedOffer.id === item.id ? 'bg-red-50/30' : 'hover:bg-gray-50/70'
                        }`}
                      >
                        <td className="py-3.5 pl-5 pr-2" onClick={(e) => e.stopPropagation()}>
                          <input
                            type="checkbox"
                            checked={selectedIds.includes(item.id)}
                            onChange={() => toggleSelectItem(item.id)}
                            className="rounded border-gray-300 text-[#DF1927] focus:ring-[#DF1927]"
                          />
                        </td>

                        {/* Offer Name */}
                        <td className="py-3.5 px-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-10 h-10 rounded-xl object-contain bg-gray-50 border border-gray-100 p-1"
                            />
                            <div>
                              <div className="font-bold text-gray-900 leading-snug">{item.name}</div>
                              <div className="text-[11px] font-semibold text-[#DF1927]">{item.code}</div>
                            </div>
                          </div>
                        </td>

                        {/* Type */}
                        <td className="py-3.5 px-3">
                          {item.type === 'Percentage' ? (
                            <span className="inline-flex px-2 py-0.5 rounded-md text-[11px] font-semibold bg-pink-50 text-pink-700">
                              Percentage
                            </span>
                          ) : (
                            <span className="inline-flex px-2 py-0.5 rounded-md text-[11px] font-semibold bg-blue-50 text-blue-700">
                              Flat Discount
                            </span>
                          )}
                        </td>

                        {/* Discount / Benefit */}
                        <td className="py-3.5 px-3 font-bold text-gray-900">
                          {item.discountBenefit}
                        </td>

                        {/* Validity */}
                        <td className="py-3.5 px-3 text-gray-500 leading-tight">
                          {item.validity}
                        </td>

                        {/* Status */}
                        <td className="py-3.5 px-3">
                          {item.status === 'Active' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                              Active
                            </span>
                          )}
                          {item.status === 'Scheduled' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                              Scheduled
                            </span>
                          )}
                          {item.status === 'Expired' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-gray-100 text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                              Expired
                            </span>
                          )}
                        </td>

                        {/* Usage */}
                        <td className="py-3.5 px-3 font-medium text-gray-700">{item.usage}</td>

                        {/* Actions */}
                        <td className="py-3.5 pr-5 pl-2 text-right">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              toast.info(`Offer options for ${item.name}`)
                            }}
                            className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition"
                          >
                            <MoreVertical className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-6 py-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                <div>Showing 1 to 8 of 24 offers</div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    disabled
                    className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 disabled:opacity-40"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-lg bg-[#DF1927] text-white font-semibold flex items-center justify-center shadow-sm"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center justify-center text-gray-700 font-medium"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center justify-center text-gray-700 font-medium"
                  >
                    3
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center justify-center text-gray-600"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT INSPECTOR PANEL (4 COLS) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <h2 className="text-base font-bold text-gray-900">Offer Details</h2>
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl transition"
                  >
                    <Edit2 className="w-3.5 h-3.5 text-gray-500" />
                    <span>Edit</span>
                  </button>
                </div>

                {/* VISUAL OFFER BANNER CARD */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-red-50 via-orange-50/60 to-rose-50 border border-red-100 relative overflow-hidden">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      {selectedOffer.status}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-black text-[#DF1927] tracking-tight">
                        {selectedOffer.discountBenefit}
                      </div>
                      <div className="text-xs text-gray-600 font-medium mt-0.5">
                        On all smartphones
                      </div>

                      {/* Coupon Code Pill */}
                      <button
                        type="button"
                        onClick={() => copyCouponCode(selectedOffer.code)}
                        className="mt-3.5 px-3 py-1.5 bg-[#DF1927] hover:bg-[#c01420] text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow-sm transition"
                      >
                        <span className="tracking-wider">{selectedOffer.code}</span>
                        {copiedCode ? (
                          <Check className="w-3.5 h-3.5 text-white" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-white" />
                        )}
                      </button>
                    </div>

                    <img
                      src={selectedOffer.image}
                      alt={selectedOffer.name}
                      className="w-20 h-24 object-contain drop-shadow-md"
                    />
                  </div>
                </div>

                {/* OFFER ATTRIBUTES */}
                <div className="space-y-3 text-xs divide-y divide-gray-100">
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Offer Name</span>
                    <span className="font-semibold text-gray-900">{selectedOffer.name}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Offer Code</span>
                    <span className="font-bold text-gray-900">{selectedOffer.code}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Offer Type</span>
                    <span className="font-medium text-gray-800">
                      {selectedOffer.type === 'Percentage' ? 'Percentage Discount' : 'Flat Discount'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Discount Value</span>
                    <span className="font-bold text-gray-900">{selectedOffer.discountBenefit}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Min. Order Value</span>
                    <span className="font-medium text-gray-800">
                      {selectedOffer.minOrderValue || '₹5,000'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Max. Discount</span>
                    <span className="font-medium text-gray-800">
                      {selectedOffer.maxDiscount || '₹5,000'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Validity</span>
                    <span className="font-medium text-gray-800 text-right">{selectedOffer.validity}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Applicable Products</span>
                    <span className="font-medium text-gray-800">
                      {selectedOffer.applicableProducts || 'All Smartphones'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Usage Limit</span>
                    <span className="font-medium text-gray-800">
                      {selectedOffer.usageLimit || '500 uses per customer'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Total Uses</span>
                    <span className="font-bold text-gray-900">{selectedOffer.totalUses}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Status</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      {selectedOffer.status}
                    </span>
                  </div>
                </div>

                {/* BOTTOM ACTIONS */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => toast.success('Offer usage analytics report generated')}
                    className="flex-1 py-2.5 px-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm transition"
                  >
                    <BarChart3 className="w-3.5 h-3.5 text-gray-500" />
                    <span>View Usage Report</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsPaused(!isPaused)
                      toast.info(isPaused ? 'Offer resumed' : 'Offer paused')
                    }}
                    className="flex-1 py-2.5 px-3 bg-[#DF1927] hover:bg-[#c01420] text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm transition"
                  >
                    {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                    <span>{isPaused ? 'Resume Offer' : 'Pause Offer'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* CREATE OFFER MODAL */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl w-full max-w-lg p-6 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <h3 className="text-base font-bold text-gray-900">Create New Offer</h3>
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-700 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                toast.success('New promotion campaign created!')
                setShowCreateModal(false)
              }}
              className="mt-4 space-y-4 text-xs"
            >
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Offer Name</label>
                <input
                  type="text"
                  placeholder="e.g. Diwali Super Sale"
                  className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#DF1927] focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Coupon Code</label>
                  <input
                    type="text"
                    placeholder="e.g. DIWALI50"
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl uppercase font-bold focus:border-[#DF1927] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Offer Type</label>
                  <select className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#DF1927] focus:outline-none">
                    <option>Percentage Discount</option>
                    <option>Flat Discount</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Discount Value</label>
                  <input
                    type="text"
                    placeholder="e.g. 20% or ₹500"
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#DF1927] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Min. Order Value</label>
                  <input
                    type="text"
                    placeholder="e.g. ₹2,999"
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#DF1927] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Start Date</label>
                  <input
                    type="date"
                    defaultValue="2025-10-01"
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#DF1927] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">End Date</label>
                  <input
                    type="date"
                    defaultValue="2025-10-15"
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#DF1927] focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 font-semibold text-gray-600 hover:bg-gray-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 font-semibold text-white bg-[#DF1927] hover:bg-[#c01420] rounded-xl shadow-sm"
                >
                  Publish Offer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
