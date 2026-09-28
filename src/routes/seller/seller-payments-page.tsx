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
  MoreVertical,
  ChevronLeft,
  Calendar,
  Download,
  ArrowDownLeft,
  ArrowUpRight,
  Landmark,
  Wallet,
  Coins,
  RefreshCw,
  Building2,
  CircleDollarSign,
} from 'lucide-react'
import { toast } from 'sonner'
import { SbtLogo } from '@/components/sbt-logo'
import { ROUTES } from '@/constants/routes'

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

interface TransactionRowItem {
  id: string
  txnId: string
  orderId: string
  customer: {
    name: string
    avatar: string
  }
  type: 'Payment' | 'Refund' | 'Settlement'
  amount: string
  status: 'Success' | 'Processed' | 'Settled' | 'Pending'
  dateTime: string
  paymentMethod: string
  utrRef: string
}

export const SellerPaymentsPage: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState<
    'All' | 'Payments' | 'Settlements' | 'Refunds' | 'Failed'
  >('All')
  const [selectedType, setSelectedType] = useState('All Types')
  const [selectedStatus, setSelectedStatus] = useState('All Status')
  const [selectedPayment, setSelectedPayment] = useState('All Payment Methods')
  const [currentPage, setCurrentPage] = useState(1)

  // 4 Metric KPI Cards matching Image 5 exactly
  const paymentMetrics = [
    {
      title: 'Total Payments Received',
      value: '₹3,24,580',
      trend: '18%',
      trendLabel: 'vs last week',
      isPositive: true,
      iconColor: 'bg-red-50 text-[#DF1927]',
      sparklineColor: '#DF1927',
      sparklinePath: 'M0,18 Q30,16 60,11 T90,14 T120,4',
      icon: Wallet,
    },
    {
      title: 'Total Settled Amount',
      value: '₹2,98,450',
      trend: '16%',
      trendLabel: 'vs last week',
      isPositive: true,
      iconColor: 'bg-emerald-50 text-emerald-600',
      sparklineColor: '#10B981',
      sparklinePath: 'M0,18 Q30,17 60,12 T95,6 T120,2',
      icon: CircleDollarSign,
    },
    {
      title: 'Pending Settlements',
      value: '₹26,130',
      trend: '8%',
      trendLabel: '3 transactions',
      isPositive: false,
      iconColor: 'bg-blue-50 text-blue-600',
      sparklineColor: '#3B82F6',
      sparklinePath: 'M0,8 Q30,12 60,15 T90,12 T120,18',
      icon: CreditCard,
    },
    {
      title: 'Refunds Issued',
      value: '₹4,650',
      trend: '12%',
      trendLabel: '5 transactions',
      isPositive: true,
      iconColor: 'bg-amber-50 text-amber-600',
      sparklineColor: '#F59E0B',
      sparklinePath: 'M0,18 Q30,14 60,9 T90,12 T120,5',
      icon: Coins,
    },
  ]

  // 10 Transaction rows matching Image 5
  const transactionsData: TransactionRowItem[] = [
    {
      id: '1',
      txnId: 'TXN10234390',
      orderId: '#SBT102343',
      customer: {
        name: 'Amit Kumar',
        avatar: customerAvatars.amit,
      },
      type: 'Payment',
      amount: '₹24,999',
      status: 'Success',
      dateTime: '26 Sep 2025 09:05 AM',
      paymentMethod: 'UPI (PhonePe)',
      utrRef: 'T2509260905123456',
    },
    {
      id: '2',
      txnId: 'TXN10234389',
      orderId: '#SBT102342',
      customer: {
        name: 'Priya Sharma',
        avatar: customerAvatars.priya,
      },
      type: 'Payment',
      amount: '₹18,450',
      status: 'Success',
      dateTime: '26 Sep 2025 11:20 AM',
      paymentMethod: 'Credit Card (HDFC)',
      utrRef: 'T2509261120987654',
    },
    {
      id: '3',
      txnId: 'TXN10234388',
      orderId: '#SBT102341',
      customer: {
        name: 'Rahul Verma',
        avatar: customerAvatars.rahul,
      },
      type: 'Refund',
      amount: '₹2,499',
      status: 'Processed',
      dateTime: '25 Sep 2025 04:18 PM',
      paymentMethod: 'Bank Refund (UPI)',
      utrRef: 'REF25092504185678',
    },
    {
      id: '4',
      txnId: 'TXN10234387',
      orderId: '#SBT102340',
      customer: {
        name: 'Sneha Patel',
        avatar: customerAvatars.sneha,
      },
      type: 'Payment',
      amount: '₹12,999',
      status: 'Success',
      dateTime: '25 Sep 2025 12:30 PM',
      paymentMethod: 'Google Pay (UPI)',
      utrRef: 'T2509251230123987',
    },
    {
      id: '5',
      txnId: 'TXN10234386',
      orderId: '#SBT102339',
      customer: {
        name: 'Karan Mehta',
        avatar: customerAvatars.karan,
      },
      type: 'Settlement',
      amount: '₹68,990',
      status: 'Settled',
      dateTime: '24 Sep 2025 11:05 AM',
      paymentMethod: 'Bank Settlement (HDFC)',
      utrRef: 'SET25092411054321',
    },
    {
      id: '6',
      txnId: 'TXN10234385',
      orderId: '#SBT102338',
      customer: {
        name: 'Neha Singh',
        avatar: customerAvatars.neha,
      },
      type: 'Payment',
      amount: '₹7,999',
      status: 'Success',
      dateTime: '24 Sep 2025 09:42 AM',
      paymentMethod: 'Net Banking (SBI)',
      utrRef: 'T2509240942765432',
    },
    {
      id: '7',
      txnId: 'TXN10234384',
      orderId: '#SBT102337',
      customer: {
        name: 'Vikas Gupta',
        avatar: customerAvatars.vikas,
      },
      type: 'Refund',
      amount: '₹7,499',
      status: 'Processed',
      dateTime: '23 Sep 2025 05:15 PM',
      paymentMethod: 'Card Refund',
      utrRef: 'REF23092305159012',
    },
    {
      id: '8',
      txnId: 'TXN10234383',
      orderId: '#SBT102336',
      customer: {
        name: 'Pooja Reddy',
        avatar: customerAvatars.pooja,
      },
      type: 'Payment',
      amount: '₹16,999',
      status: 'Success',
      dateTime: '22 Sep 2025 03:20 PM',
      paymentMethod: 'Debit Card (Axis)',
      utrRef: 'T2509220320876543',
    },
    {
      id: '9',
      txnId: 'TXN10234382',
      orderId: '#SBT102335',
      customer: {
        name: 'Rohit Yadav',
        avatar: customerAvatars.rohit,
      },
      type: 'Payment',
      amount: '₹9,450',
      status: 'Pending',
      dateTime: '22 Sep 2025 11:18 AM',
      paymentMethod: 'Cash on Delivery',
      utrRef: 'PENDING_COD_COLLECT',
    },
    {
      id: '10',
      txnId: 'TXN10234381',
      orderId: '#SBT102334',
      customer: {
        name: 'Ankita Das',
        avatar: customerAvatars.ankita,
      },
      type: 'Settlement',
      amount: '₹42,000',
      status: 'Settled',
      dateTime: '21 Sep 2025 10:10 AM',
      paymentMethod: 'Bank Settlement (ICICI)',
      utrRef: 'SET25092110107890',
    },
  ]

  const [selectedTxn, setSelectedTxn] = useState<TransactionRowItem>(transactionsData[0]!)

  const toggleSelectAll = () => {
    if (selectedIds.length === transactionsData.length) {
      setSelectedIds([])
    } else {
      setSelectedIds(transactionsData.map((item) => item.id))
    }
  }

  const toggleSelectItem = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const filteredTransactions = transactionsData.filter((item) => {
    if (activeTab === 'Payments' && item.type !== 'Payment') return false
    if (activeTab === 'Settlements' && item.type !== 'Settlement') return false
    if (activeTab === 'Refunds' && item.type !== 'Refund') return false
    if (selectedType !== 'All Types' && item.type !== selectedType) return false
    if (selectedStatus !== 'All Status' && item.status !== selectedStatus) return false
    if (
      searchQuery &&
      !item.txnId.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.orderId.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.customer.name.toLowerCase().includes(searchQuery.toLowerCase())
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

              <Link
                to={ROUTES.sellerMarketing}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
              >
                <Megaphone className="w-4 h-4 text-gray-500" />
                <span>Marketing & Offers</span>
              </Link>

              {/* Payments (Active) */}
              <Link
                to={ROUTES.sellerPayments}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-[#DF1927] bg-red-50 border-l-4 border-[#DF1927] transition"
              >
                <CreditCard className="w-4 h-4 text-[#DF1927]" />
                <span>Payments</span>
              </Link>

              <div className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition cursor-pointer">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-4 h-4 text-gray-500" />
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
                <span>Payments</span>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-[#DF1927] font-semibold">Transactions</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Transactions</h1>
              <p className="text-xs text-gray-500 mt-0.5">
                View and manage all your payments, settlements and transaction history.
              </p>
            </div>

            {/* Top Right Controls */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="px-3.5 py-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm transition"
              >
                <Calendar className="w-3.5 h-3.5 text-gray-500" />
                <span>26 Sep 2025 - 02 Oct 2025</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              <button
                type="button"
                onClick={() => toast.success('Account statement downloaded for current period')}
                className="px-4 py-2 bg-[#DF1927] hover:bg-[#c01420] text-white text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm shadow-red-200 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Statement</span>
              </button>
            </div>
          </div>

          {/* 4 KPI METRIC CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {paymentMetrics.map((metric, idx) => {
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
                        <span
                          className={`font-semibold ${
                            metric.isPositive ? 'text-emerald-600' : 'text-amber-600'
                          }`}
                        >
                          {metric.isPositive ? '↗' : '↘'} {metric.trend}
                        </span>
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

          {/* TABS BAR */}
          <div className="border-b border-gray-200">
            <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
              {[
                { label: 'All Transactions (124)', value: 'All' },
                { label: 'Payments Received (98)', value: 'Payments' },
                { label: 'Settlements (18)', value: 'Settlements' },
                { label: 'Refunds (8)', value: 'Refunds' },
                { label: 'Failed (2)', value: 'Failed' },
              ].map((tab) => (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setActiveTab(tab.value as any)}
                  className={`pb-3 text-xs font-semibold border-b-2 transition whitespace-nowrap ${
                    activeTab === tab.value
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
                placeholder="Search by order ID, transaction ID, customer name..."
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
                <option>Payment</option>
                <option>Refund</option>
                <option>Settlement</option>
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium focus:outline-none focus:border-[#DF1927]"
              >
                <option>All Status</option>
                <option>Success</option>
                <option>Processed</option>
                <option>Settled</option>
                <option>Pending</option>
              </select>

              <select
                value={selectedPayment}
                onChange={(e) => setSelectedPayment(e.target.value)}
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium focus:outline-none focus:border-[#DF1927]"
              >
                <option>All Payment Methods</option>
                <option>UPI (PhonePe)</option>
                <option>Credit / Debit Card</option>
                <option>Net Banking</option>
              </select>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedType('All Types')
                  setSelectedStatus('All Status')
                  setSelectedPayment('All Payment Methods')
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
            {/* TRANSACTIONS TABLE (8 COLS) */}
            <div className="lg:col-span-8 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-gray-100 text-gray-400 font-medium bg-gray-50/50">
                      <th className="py-3.5 pl-5 pr-2 w-8">
                        <input
                          type="checkbox"
                          checked={selectedIds.length === transactionsData.length}
                          onChange={toggleSelectAll}
                          className="rounded border-gray-300 text-[#DF1927] focus:ring-[#DF1927]"
                        />
                      </th>
                      <th className="py-3.5 px-3 font-semibold">Transaction ID</th>
                      <th className="py-3.5 px-3 font-semibold">Order ID</th>
                      <th className="py-3.5 px-3 font-semibold">Customer</th>
                      <th className="py-3.5 px-3 font-semibold">Type</th>
                      <th className="py-3.5 px-3 font-semibold">Amount</th>
                      <th className="py-3.5 px-3 font-semibold">Status</th>
                      <th className="py-3.5 px-3 font-semibold">Date &amp; Time</th>
                      <th className="py-3.5 pr-5 pl-2 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredTransactions.map((item) => (
                      <tr
                        key={item.id}
                        onClick={() => setSelectedTxn(item)}
                        className={`transition cursor-pointer ${
                          selectedTxn.id === item.id ? 'bg-red-50/30' : 'hover:bg-gray-50/70'
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

                        {/* Txn ID */}
                        <td className="py-3.5 px-3 font-semibold text-gray-800">{item.txnId}</td>

                        {/* Order ID */}
                        <td className="py-3.5 px-3">
                          <Link
                            to={`/seller/orders/${item.orderId.replace('#', '')}`}
                            className="font-bold text-blue-600 hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {item.orderId}
                          </Link>
                        </td>

                        {/* Customer */}
                        <td className="py-3.5 px-3">
                          <div className="flex items-center gap-2.5">
                            <img
                              src={item.customer.avatar}
                              alt={item.customer.name}
                              className="w-7 h-7 rounded-full object-cover border border-gray-100"
                            />
                            <span className="font-semibold text-gray-900">
                              {item.customer.name}
                            </span>
                          </div>
                        </td>

                        {/* Type */}
                        <td className="py-3.5 px-3">
                          {item.type === 'Payment' && (
                            <span className="inline-flex items-center gap-1 font-semibold text-emerald-600">
                              <ArrowDownLeft className="w-3.5 h-3.5 text-emerald-600" />
                              Payment
                            </span>
                          )}
                          {item.type === 'Refund' && (
                            <span className="inline-flex items-center gap-1 font-semibold text-red-500">
                              <ArrowUpRight className="w-3.5 h-3.5 text-red-500" />
                              Refund
                            </span>
                          )}
                          {item.type === 'Settlement' && (
                            <span className="inline-flex items-center gap-1 font-semibold text-purple-600">
                              <Landmark className="w-3.5 h-3.5 text-purple-600" />
                              Settlement
                            </span>
                          )}
                        </td>

                        {/* Amount */}
                        <td className="py-3.5 px-3 font-bold text-gray-900">{item.amount}</td>

                        {/* Status */}
                        <td className="py-3.5 px-3">
                          {item.status === 'Success' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                              Success
                            </span>
                          )}
                          {item.status === 'Processed' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                              Processed
                            </span>
                          )}
                          {item.status === 'Settled' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-50 text-purple-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                              Settled
                            </span>
                          )}
                          {item.status === 'Pending' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                              Pending
                            </span>
                          )}
                        </td>

                        {/* Date & Time */}
                        <td className="py-3.5 px-3 text-gray-500 leading-tight">
                          {item.dateTime}
                        </td>

                        {/* Actions */}
                        <td className="py-3.5 pr-5 pl-2 text-right">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              toast.info(`Transaction actions for ${item.txnId}`)
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
                <div>Showing 1 to 10 of 124 transactions</div>
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
                    13
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
              {/* 1. TRANSACTION DETAILS */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <h2 className="text-base font-bold text-gray-900">Transaction Details</h2>
                  <button
                    type="button"
                    className="p-1 text-gray-400 hover:text-gray-700 rounded-lg transition"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-gray-900">{selectedTxn.txnId}</span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    {selectedTxn.status}
                  </span>
                </div>

                <div className="space-y-3 text-xs divide-y divide-gray-100 pt-1">
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Order ID</span>
                    <Link
                      to={`/seller/orders/${selectedTxn.orderId.replace('#', '')}`}
                      className="font-semibold text-blue-600 hover:underline"
                    >
                      {selectedTxn.orderId}
                    </Link>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Customer</span>
                    <span className="font-semibold text-gray-900">
                      {selectedTxn.customer.name}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Type</span>
                    <span className="font-medium text-gray-800">
                      {selectedTxn.type === 'Payment'
                        ? 'Payment Received'
                        : selectedTxn.type === 'Refund'
                        ? 'Refund Issued'
                        : 'Settlement'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Amount</span>
                    <span className="font-bold text-gray-900 text-sm">{selectedTxn.amount}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Payment Method</span>
                    <span className="font-medium text-gray-800">{selectedTxn.paymentMethod}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">Transaction Date</span>
                    <span className="font-medium text-gray-800">{selectedTxn.dateTime}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-400">UTR / Ref No.</span>
                    <span className="font-mono text-[11px] text-gray-700 font-semibold">
                      {selectedTxn.utrRef}
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. PAYMENT METHODS BREAKDOWN */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <h2 className="text-base font-bold text-gray-900">Payment Methods</h2>
                  <button
                    type="button"
                    onClick={() => toast.info('All payment method details')}
                    className="text-xs font-semibold text-blue-600 hover:underline"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-3.5 text-xs">
                  {/* UPI */}
                  <div className="p-3 bg-gray-50/60 rounded-2xl border border-gray-100">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-[10px]">
                          UPI
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">UPI (PhonePe)</div>
                          <div className="text-[10px] text-gray-400">72 transactions</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">₹1,84,550</div>
                        <div className="text-[10px] font-semibold text-purple-600">56%</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-purple-600 h-full rounded-full" style={{ width: '56%' }}></div>
                    </div>
                  </div>

                  {/* Credit / Debit Card */}
                  <div className="p-3 bg-gray-50/60 rounded-2xl border border-gray-100">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-[10px]">
                          <CreditCard className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">Credit / Debit Card</div>
                          <div className="text-[10px] text-gray-400">28 transactions</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">₹72,490</div>
                        <div className="text-[10px] font-semibold text-blue-600">22%</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full" style={{ width: '22%' }}></div>
                    </div>
                  </div>

                  {/* Net Banking */}
                  <div className="p-3 bg-gray-50/60 rounded-2xl border border-gray-100">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">
                          <Building2 className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">Net Banking</div>
                          <div className="text-[10px] text-gray-400">16 transactions</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">₹42,999</div>
                        <div className="text-[10px] font-semibold text-emerald-600">13%</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-600 h-full rounded-full" style={{ width: '13%' }}></div>
                    </div>
                  </div>

                  {/* Wallet */}
                  <div className="p-3 bg-gray-50/60 rounded-2xl border border-gray-100">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-[10px]">
                          <Wallet className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">Wallet</div>
                          <div className="text-[10px] text-gray-400">8 transactions</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">₹18,540</div>
                        <div className="text-[10px] font-semibold text-amber-600">6%</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full rounded-full" style={{ width: '6%' }}></div>
                    </div>
                  </div>

                  {/* Others */}
                  <div className="p-3 bg-gray-50/60 rounded-2xl border border-gray-100">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-gray-400 text-white flex items-center justify-center font-bold text-[10px]">
                          ···
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">Others</div>
                          <div className="text-[10px] text-gray-400">0 transactions</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">₹0</div>
                        <div className="text-[10px] font-semibold text-gray-400">0%</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gray-400 h-full rounded-full" style={{ width: '0%' }}></div>
                    </div>
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
