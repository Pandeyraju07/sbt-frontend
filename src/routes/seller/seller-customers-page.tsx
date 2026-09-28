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
  Star,
  Settings,
  HelpCircle,
  Crown,
  ChevronRight,
  Plus,
  MoreVertical,
  ChevronLeft,
  Download,
  Mail,
  Phone,
  MessageSquare,
  FileText,
  UserPlus,
  RefreshCw,
  Filter,
} from 'lucide-react'
import { toast } from 'sonner'
import { SbtLogo } from '@/components/sbt-logo'
import { ROUTES } from '@/constants/routes'

import cartIphone from '@/assets/premium/iphone15-black.jpg'
import cartShoes from '@/assets/premium/deal-shoes.jpg'
import cartLuggage from '@/assets/premium/deal-luggage.jpg'

const customerAvatars = {
  dhiraj: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
  amit: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
  priya: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
  rahul: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80',
  sneha: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
  karan: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80',
  neha: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
  vikas: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80',
  pooja: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80',
  rohit: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=120&auto=format&fit=crop&q=80',
  ankita: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=120&auto=format&fit=crop&q=80',
}

interface CustomerRow {
  id: string
  code: string
  name: string
  email: string
  avatar: string
  location: string
  ordersCount: number
  totalSpent: string
  lastOrder: string
  status: 'Active' | 'Inactive' | 'VIP'
  phone: string
  avgOrderValue: string
  customerSince: string
}

export const SellerCustomersPage: React.FC = () => {
  const navigate = useNavigate()
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSegment, setSelectedSegment] = useState('All Customers')
  const [selectedLocation, setSelectedLocation] = useState('All Locations')
  const [selectedPurchaseValue, setSelectedPurchaseValue] = useState('All Purchase Value')
  const [currentPage, setCurrentPage] = useState(1)

  // 4 Metric KPI Cards matching Image 4
  const customerMetrics = [
    {
      title: 'Total Customers',
      value: '12,480',
      trend: '18%',
      trendLabel: 'vs last month',
      isPositive: true,
      iconColor: 'bg-red-50 text-[#DF1927]',
      sparklineColor: '#DF1927',
      sparklinePath: 'M0,18 Q30,16 60,11 T90,14 T120,4',
      icon: Users,
    },
    {
      title: 'New Customers',
      value: '1,240',
      trend: '25%',
      trendLabel: 'vs last month',
      isPositive: true,
      iconColor: 'bg-blue-50 text-blue-600',
      sparklineColor: '#3B82F6',
      sparklinePath: 'M0,18 Q30,17 60,12 T95,6 T120,2',
      icon: UserPlus,
    },
    {
      title: 'Repeat Customers',
      value: '3,890',
      trend: '12%',
      trendLabel: '31% of total',
      isPositive: true,
      iconColor: 'bg-emerald-50 text-emerald-600',
      sparklineColor: '#10B981',
      sparklinePath: 'M0,16 Q25,16 55,10 T95,12 T120,6',
      icon: ShoppingBag,
    },
    {
      title: 'VIP Customers',
      value: '560',
      trend: '8%',
      trendLabel: '4% of total',
      isPositive: true,
      iconColor: 'bg-amber-50 text-amber-600',
      sparklineColor: '#F59E0B',
      sparklinePath: 'M0,18 Q35,16 70,11 T100,5 T120,3',
      icon: Star,
    },
  ]

  // 10 Customers matching Image 4
  const customersList: CustomerRow[] = [
    {
      id: '1',
      code: 'CUST001',
      name: 'Amit Kumar',
      email: 'amit.kumar@gmail.com',
      avatar: customerAvatars.amit,
      location: 'Noida, Uttar Pradesh',
      ordersCount: 12,
      totalSpent: '₹24,999',
      lastOrder: '26 Sep 2025',
      status: 'Active',
      phone: '+91 98765 43210',
      avgOrderValue: '₹2,083',
      customerSince: '12 Aug 2025',
    },
    {
      id: '2',
      code: 'CUST002',
      name: 'Priya Sharma',
      email: 'priya.sharma@gmail.com',
      avatar: customerAvatars.priya,
      location: 'Delhi, India',
      ordersCount: 8,
      totalSpent: '₹18,450',
      lastOrder: '25 Sep 2025',
      status: 'Active',
      phone: '+91 98112 34567',
      avgOrderValue: '₹2,306',
      customerSince: '20 Jan 2025',
    },
    {
      id: '3',
      code: 'CUST003',
      name: 'Rahul Verma',
      email: 'rahul.verma@gmail.com',
      avatar: customerAvatars.rahul,
      location: 'Bengaluru, India',
      ordersCount: 15,
      totalSpent: '₹32,190',
      lastOrder: '25 Sep 2025',
      status: 'Active',
      phone: '+91 98223 45678',
      avgOrderValue: '₹2,146',
      customerSince: '10 Jan 2025',
    },
    {
      id: '4',
      code: 'CUST004',
      name: 'Sneha Patel',
      email: 'sneha.patel@gmail.com',
      avatar: customerAvatars.sneha,
      location: 'Mumbai, India',
      ordersCount: 6,
      totalSpent: '₹12,499',
      lastOrder: '24 Sep 2025',
      status: 'Active',
      phone: '+91 98334 56789',
      avgOrderValue: '₹2,083',
      customerSince: '05 Feb 2025',
    },
    {
      id: '5',
      code: 'CUST005',
      name: 'Karan Mehta',
      email: 'karan.mehta@gmail.com',
      avatar: customerAvatars.karan,
      location: 'Pune, India',
      ordersCount: 20,
      totalSpent: '₹61,990',
      lastOrder: '24 Sep 2025',
      status: 'VIP',
      phone: '+91 98445 67890',
      avgOrderValue: '₹3,099',
      customerSince: '22 Dec 2024',
    },
    {
      id: '6',
      code: 'CUST006',
      name: 'Neha Singh',
      email: 'neha.singh@gmail.com',
      avatar: customerAvatars.neha,
      location: 'Lucknow, India',
      ordersCount: 9,
      totalSpent: '₹29,999',
      lastOrder: '24 Sep 2025',
      status: 'Active',
      phone: '+91 98556 78901',
      avgOrderValue: '₹3,333',
      customerSince: '18 Feb 2025',
    },
    {
      id: '7',
      code: 'CUST007',
      name: 'Vikas Gupta',
      email: 'vikas.gupta@gmail.com',
      avatar: customerAvatars.vikas,
      location: 'Hyderabad, India',
      ordersCount: 5,
      totalSpent: '₹8,750',
      lastOrder: '23 Sep 2025',
      status: 'Inactive',
      phone: '+91 98667 89012',
      avgOrderValue: '₹1,750',
      customerSince: '14 Jan 2025',
    },
    {
      id: '8',
      code: 'CUST008',
      name: 'Pooja Reddy',
      email: 'pooja.reddy@gmail.com',
      avatar: customerAvatars.pooja,
      location: 'Chennai, India',
      ordersCount: 14,
      totalSpent: '₹27,450',
      lastOrder: '22 Sep 2025',
      status: 'Active',
      phone: '+91 98778 90123',
      avgOrderValue: '₹1,960',
      customerSince: '01 Mar 2025',
    },
    {
      id: '9',
      code: 'CUST009',
      name: 'Rohit Yadav',
      email: 'rohit.yadav@gmail.com',
      avatar: customerAvatars.rohit,
      location: 'Kolkata, India',
      ordersCount: 3,
      totalSpent: '₹4,999',
      lastOrder: '21 Sep 2025',
      status: 'Inactive',
      phone: '+91 98889 01234',
      avgOrderValue: '₹1,666',
      customerSince: '15 Feb 2025',
    },
    {
      id: '10',
      code: 'CUST010',
      name: 'Ankita Das',
      email: 'ankita.das@gmail.com',
      avatar: customerAvatars.ankita,
      location: 'Jaipur, India',
      ordersCount: 11,
      totalSpent: '₹16,890',
      lastOrder: '21 Sep 2025',
      status: 'Active',
      phone: '+91 98990 12345',
      avgOrderValue: '₹1,535',
      customerSince: '28 Jan 2025',
    },
  ]

  const [selectedCustomer, setSelectedCustomer] = useState<CustomerRow>(customersList[0]!)

  const toggleSelectAll = () => {
    if (selectedIds.length === customersList.length) {
      setSelectedIds([])
    } else {
      setSelectedIds(customersList.map((c) => c.id))
    }
  }

  const toggleSelectItem = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const filteredCustomers = customersList.filter((item) => {
    if (
      searchQuery &&
      !item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.email.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.code.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false
    if (selectedLocation !== 'All Locations' && !item.location.includes(selectedLocation))
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

              {/* Customers (Active) */}
              <Link
                to={ROUTES.sellerCustomers}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-[#DF1927] bg-red-50 border-l-4 border-[#DF1927] transition"
              >
                <Users className="w-4 h-4 text-[#DF1927]" />
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                <span>Customers</span>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-[#DF1927] font-semibold">All Customers</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Customers</h1>
              <p className="text-xs text-gray-500 mt-0.5">
                Manage your customer base, view purchase history and build stronger relationships.
              </p>
            </div>

            {/* Top Right Controls */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => toast.success('Customers list exported to CSV')}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm transition"
              >
                <Download className="w-3.5 h-3.5 text-gray-600" />
                <span>Export</span>
              </button>

              <button
                type="button"
                onClick={() => toast.info('Add new customer modal')}
                className="px-4 py-2 bg-[#DF1927] hover:bg-[#c01420] text-white text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm shadow-red-200 transition"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Customer</span>
              </button>
            </div>
          </div>

          {/* 4 KPI METRIC CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {customerMetrics.map((metric, idx) => {
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
                      <div className="text-2xl font-bold text-gray-900 leading-tight mt-0.5">
                        {metric.value}
                      </div>
                      <div className="flex items-center gap-1.5 mt-1 text-[11px]">
                        <span className="font-semibold text-emerald-600">↗ {metric.trend}</span>
                        <span className="text-gray-400">{metric.trendLabel}</span>
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

          {/* FILTER BAR */}
          <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm flex flex-wrap items-center justify-between gap-3">
            <div className="relative flex-1 min-w-[240px] max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, email, phone or customer ID..."
                className="w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927] transition"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <select
                value={selectedSegment}
                onChange={(e) => setSelectedSegment(e.target.value)}
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium focus:outline-none focus:border-[#DF1927]"
              >
                <option>All Customers</option>
                <option>VIP Customers</option>
                <option>Active Customers</option>
                <option>Inactive</option>
              </select>

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium focus:outline-none focus:border-[#DF1927]"
              >
                <option>All Locations</option>
                <option>Noida</option>
                <option>Delhi</option>
                <option>Bengaluru</option>
                <option>Mumbai</option>
                <option>Pune</option>
              </select>

              <select
                value={selectedPurchaseValue}
                onChange={(e) => setSelectedPurchaseValue(e.target.value)}
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium focus:outline-none focus:border-[#DF1927]"
              >
                <option>All Purchase Value</option>
                <option>&gt; ₹50,000</option>
                <option>₹10,000 - ₹50,000</option>
                <option>&lt; ₹10,000</option>
              </select>

              <button
                type="button"
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium flex items-center gap-1.5 hover:bg-gray-100 transition"
              >
                <Filter className="w-3.5 h-3.5 text-gray-500" />
                <span>Filter</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedSegment('All Customers')
                  setSelectedLocation('All Locations')
                  setSelectedPurchaseValue('All Purchase Value')
                  toast.info('Filters reset')
                }}
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium flex items-center gap-1.5 hover:bg-gray-100 transition"
              >
                <RefreshCw className="w-3.5 h-3.5 text-gray-500" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* MAIN GRID: TABLE (LEFT) + INSPECTOR (RIGHT) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* CUSTOMERS TABLE (8 COLS) */}
            <div className="lg:col-span-8 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-gray-100 text-gray-400 font-medium bg-gray-50/50">
                      <th className="py-3.5 pl-5 pr-2 w-8">
                        <input
                          type="checkbox"
                          checked={selectedIds.length === customersList.length}
                          onChange={toggleSelectAll}
                          className="rounded border-gray-300 text-[#DF1927] focus:ring-[#DF1927]"
                        />
                      </th>
                      <th className="py-3.5 px-3 font-semibold">Customer</th>
                      <th className="py-3.5 px-3 font-semibold">ID</th>
                      <th className="py-3.5 px-3 font-semibold">Orders</th>
                      <th className="py-3.5 px-3 font-semibold">Total Spent</th>
                      <th className="py-3.5 px-3 font-semibold">Last Order</th>
                      <th className="py-3.5 px-3 font-semibold">Status</th>
                      <th className="py-3.5 pr-5 pl-2 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredCustomers.map((item) => (
                      <tr
                        key={item.id}
                        onClick={() => setSelectedCustomer(item)}
                        className={`transition cursor-pointer ${
                          selectedCustomer.id === item.id ? 'bg-red-50/30' : 'hover:bg-gray-50/70'
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

                        {/* Customer info */}
                        <td className="py-3.5 px-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.avatar}
                              alt={item.name}
                              className="w-9 h-9 rounded-full object-cover border border-gray-100"
                            />
                            <div>
                              <div className="font-bold text-gray-900 leading-snug">{item.name}</div>
                              <div className="text-[11px] text-gray-400">{item.email}</div>
                            </div>
                          </div>
                        </td>

                        {/* ID */}
                        <td className="py-3.5 px-3 font-medium text-gray-500">{item.code}</td>

                        {/* Orders count */}
                        <td className="py-3.5 px-3 font-bold text-gray-900">{item.ordersCount}</td>

                        {/* Total Spent */}
                        <td className="py-3.5 px-3 font-bold text-gray-900">{item.totalSpent}</td>

                        {/* Last Order */}
                        <td className="py-3.5 px-3 text-gray-600">{item.lastOrder}</td>

                        {/* Status */}
                        <td className="py-3.5 px-3">
                          {item.status === 'Active' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                              Active
                            </span>
                          )}
                          {item.status === 'Inactive' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-red-50 text-red-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                              Inactive
                            </span>
                          )}
                          {item.status === 'VIP' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700">
                              ★ VIP
                            </span>
                          )}
                        </td>

                        {/* Actions */}
                        <td className="py-3.5 pr-5 pl-2 text-right">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              navigate(`/seller/customers/${item.code}`)
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
                <div>Showing 1 to 10 of 12,480 customers</div>
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
                    onClick={() => setCurrentPage(1)}
                    className={`w-8 h-8 rounded-lg font-semibold flex items-center justify-center shadow-sm ${
                      currentPage === 1
                        ? 'bg-[#DF1927] text-white'
                        : 'border border-gray-200 hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    1
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentPage(2)}
                    className={`w-8 h-8 rounded-lg font-semibold flex items-center justify-center ${
                      currentPage === 2
                        ? 'bg-[#DF1927] text-white shadow-sm'
                        : 'border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium'
                    }`}
                  >
                    2
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentPage(3)}
                    className="w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center justify-center text-gray-700 font-medium"
                  >
                    3
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentPage(4)}
                    className="w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center justify-center text-gray-700 font-medium"
                  >
                    4
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentPage(5)}
                    className="w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center justify-center text-gray-700 font-medium"
                  >
                    5
                  </button>
                  <span className="px-1 text-gray-400">...</span>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center justify-center text-gray-700 font-medium"
                  >
                    1248
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
              {/* SELECTED CUSTOMER PROFILE CARD */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <h2 className="text-base font-bold text-gray-900">Customer Details</h2>
                  <Link
                    to={`/seller/customers/${selectedCustomer.code}`}
                    className="text-xs font-semibold text-blue-600 hover:underline"
                  >
                    View Full Profile
                  </Link>
                </div>

                <div className="flex items-center gap-3.5">
                  <img
                    src={selectedCustomer.avatar}
                    alt={selectedCustomer.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900 text-sm">
                        {selectedCustomer.name}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        {selectedCustomer.status}
                      </span>
                    </div>
                    <div className="text-[11px] text-gray-400 font-medium mt-0.5">
                      {selectedCustomer.code}
                    </div>
                  </div>
                </div>

                {/* 4 ACTION ICONS */}
                <div className="flex items-center justify-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => toast.info(`Calling ${selectedCustomer.phone}`)}
                    className="w-9 h-9 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600 flex items-center justify-center transition border border-gray-200"
                    title="Phone Call"
                  >
                    <Phone className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => toast.info(`Emailing ${selectedCustomer.email}`)}
                    className="w-9 h-9 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600 flex items-center justify-center transition border border-gray-200"
                    title="Send Email"
                  >
                    <Mail className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      window.open(
                        `https://api.whatsapp.com/send?phone=${selectedCustomer.phone.replace(/[^0-9]/g, '')}`,
                        '_blank'
                      )
                    }
                    className="w-9 h-9 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-600 flex items-center justify-center transition border border-emerald-200"
                    title="WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    className="w-9 h-9 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600 flex items-center justify-center transition border border-gray-200"
                  >
                    <span className="font-bold text-xs tracking-widest">···</span>
                  </button>
                </div>

                {/* ATTRIBUTES LIST */}
                <div className="space-y-3 text-xs divide-y divide-gray-100 pt-1">
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Email</span>
                    <span className="font-medium text-gray-800">{selectedCustomer.email}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Phone</span>
                    <span className="font-medium text-gray-800">{selectedCustomer.phone}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Location</span>
                    <span className="font-medium text-gray-800">{selectedCustomer.location}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Total Orders</span>
                    <span className="font-bold text-gray-900">{selectedCustomer.ordersCount}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Total Spent</span>
                    <span className="font-bold text-gray-900">{selectedCustomer.totalSpent}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Average Order Value</span>
                    <span className="font-bold text-gray-900">
                      {selectedCustomer.avgOrderValue}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Last Order</span>
                    <span className="font-medium text-gray-800">
                      {selectedCustomer.lastOrder}, 09:02 AM
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Customer Since</span>
                    <span className="font-medium text-gray-800">
                      {selectedCustomer.customerSince}
                    </span>
                  </div>
                </div>

                {/* RECENT ORDERS LIST */}
                <div className="pt-3 border-t border-gray-100 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900 text-xs">Recent Orders</span>
                    <Link
                      to={ROUTES.sellerOrders}
                      className="text-[11px] font-semibold text-blue-600 hover:underline"
                    >
                      View All
                    </Link>
                  </div>

                  <div className="space-y-2">
                    {[
                      {
                        code: '#SBT1023439',
                        date: '26 Sep 2025',
                        amount: '₹4,999',
                        image: cartIphone,
                      },
                      {
                        code: '#SBT1023011',
                        date: '18 Sep 2025',
                        amount: '₹12,450',
                        image: cartShoes,
                      },
                      {
                        code: '#SBT1022876',
                        date: '02 Sep 2025',
                        amount: '₹7,550',
                        image: cartLuggage,
                      },
                    ].map((ord, i) => (
                      <div
                        key={i}
                        onClick={() => navigate(`/seller/orders/${ord.code.replace('#', '')}`)}
                        className="p-2.5 bg-gray-50/70 hover:bg-gray-100 rounded-xl flex items-center justify-between cursor-pointer transition"
                      >
                        <div className="flex items-center gap-2.5">
                          <img
                            src={ord.image}
                            alt="Order thumbnail"
                            className="w-8 h-8 rounded-lg object-contain bg-white border border-gray-200 p-0.5"
                          />
                          <div>
                            <div className="font-bold text-gray-900 text-xs">{ord.code}</div>
                            <div className="text-[10px] text-gray-400">{ord.date}</div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="font-bold text-gray-900 text-xs">{ord.amount}</div>
                          <span className="text-[10px] font-semibold text-emerald-600">
                            ● Delivered
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
