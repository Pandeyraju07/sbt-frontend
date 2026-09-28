import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
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
  MessageSquare,
  Edit2,
  MoreVertical,
  Wallet,
  ShoppingCart,
  Home,
  Briefcase,
  X,
  Send,
  Download,
  FileText,
  Ban,
  ShieldCheck,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Check,
  Heart,
} from 'lucide-react'
import { toast } from 'sonner'
import { SbtLogo } from '@/components/sbt-logo'
import { ROUTES } from '@/constants/routes'

import cartIphone from '@/assets/premium/iphone15-black.jpg'
import cartAirpods from '@/assets/premium/airpods-pro-2.jpg'
import cartWatch from '@/assets/premium/apple-watch-s9.jpg'
import cartShoes from '@/assets/premium/deal-shoes.jpg'
import cartLuggage from '@/assets/premium/deal-luggage.jpg'

const customerAvatars = {
  amit: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=240&auto=format&fit=crop&q=80',
  dhiraj: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
}

interface OrderHistoryItem {
  id: string
  code: string
  date: string
  images: string[]
  additionalItemsCount?: number
  amount: string
  status: 'Delivered' | 'Shipped' | 'Processing'
}

export const SellerCustomerDetailPage: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [activeTab, setActiveTab] = useState<'orders' | 'addresses' | 'payments' | 'wishlist' | 'reviews' | 'activity'>('orders')
  const [showMoreActions, setShowMoreActions] = useState(false)
  const [showMessageModal, setShowMessageModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [messageText, setMessageText] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')

  // Customer Data (Amit Kumar as primary mock)
  const [customer, setCustomer] = useState({
    code: id ? (id.startsWith('CUST') ? id : `#${id}`) : 'CUST001',
    name: 'Amit Kumar',
    status: 'Active' as const,
    avatar: customerAvatars.amit,
    joinedOn: '12 Aug 2025',
    location: 'Noida, Uttar Pradesh',
    fullAddress: 'Flat 302, A Block, Green Residency, Sector 76, Noida, UP - 201301',
    email: 'amit.kumar@gmail.com',
    phone: '+91 98765 43210',
    gender: 'Male',
    dob: '12 Mar 1995',
    totalOrders: 12,
    totalSpent: '₹24,999',
    avgOrderValue: '₹2,083',
    lastOrderDate: '26 Sep 2025',
    rating: 4.8,
    reviewsCount: 3,
  })

  // Order history matching Mockup 5 exactly
  const orderHistory: OrderHistoryItem[] = [
    {
      id: 'SBT1023439',
      code: '#SBT1023439',
      date: '26 Sep 2025, 09:02 AM',
      images: [cartIphone],
      additionalItemsCount: 1,
      amount: '₹4,999',
      status: 'Delivered',
    },
    {
      id: 'SBT1023342',
      code: '#SBT1023342',
      date: '18 Sep 2025, 08:45 AM',
      images: [cartShoes],
      amount: '₹12,450',
      status: 'Delivered',
    },
    {
      id: 'SBT1022876',
      code: '#SBT1022876',
      date: '02 Sep 2025, 06:30 PM',
      images: [cartLuggage],
      additionalItemsCount: 2,
      amount: '₹7,550',
      status: 'Shipped',
    },
    {
      id: 'SBT1022543',
      code: '#SBT1022543',
      date: '20 Aug 2025, 11:15 AM',
      images: [cartWatch],
      amount: '₹6,999',
      status: 'Processing',
    },
    {
      id: 'SBT1022211',
      code: '#SBT1022211',
      date: '12 Aug 2025, 04:20 PM',
      images: [cartAirpods],
      additionalItemsCount: 1,
      amount: '₹2,499',
      status: 'Delivered',
    },
  ]

  // Wishlist items matching Mockup 5
  const wishlistItems = [
    {
      id: 'w-1',
      title: 'iPhone 15',
      price: '₹79,900',
      image: cartIphone,
    },
    {
      id: 'w-2',
      title: 'Nike Air Max',
      price: '₹12,999',
      image: cartShoes,
    },
    {
      id: 'w-3',
      title: 'Apple Watch',
      price: '₹41,900',
      image: cartWatch,
    },
    {
      id: 'w-4',
      title: 'AirPods Pro',
      price: '₹24,900',
      image: cartAirpods,
    },
  ]

  // Recent reviews matching Mockup 5
  const recentReviews = [
    {
      id: 'r-1',
      productName: 'iPhone 15 (128GB)',
      rating: 5,
      date: '20 Sep 2025',
      comment: 'Great product! Fast delivery and good packaging.',
      image: cartIphone,
    },
    {
      id: 'r-2',
      productName: 'Nike Air Max',
      rating: 5,
      date: '10 Aug 2025',
      comment: 'Very comfortable. Worth the price.',
      image: cartShoes,
    },
    {
      id: 'r-3',
      productName: 'Apple Watch Series 9',
      rating: 5,
      date: '05 Aug 2025',
      comment: 'Amazing product and genuine seller!',
      image: cartWatch,
    },
  ]

  // Customer addresses matching Mockup 5
  const deliveryAddresses = [
    {
      id: 'addr-1',
      type: 'home',
      title: 'Home',
      isDefault: true,
      line1: 'Flat 302, A Block, Green Residency',
      line2: 'Sector 76, Noida, UP - 201301',
    },
    {
      id: 'addr-2',
      type: 'office',
      title: 'Office',
      isDefault: false,
      line1: 'Tech Park, Tower B',
      line2: 'Sector 62, Noida, UP - 201309',
    },
    {
      id: 'addr-3',
      type: 'other',
      title: 'Other',
      isDefault: false,
      line1: 'C-123, Indirapuram',
      line2: 'Ghaziabad, UP - 201010',
    },
  ]

  // Payment methods matching Mockup 5
  const paymentMethods = [
    {
      id: 'pay-1',
      type: 'upi',
      name: 'UPI (PhonePe)',
      detail: 'amit.kumar@ybl',
      isDefault: true,
    },
    {
      id: 'pay-2',
      type: 'card',
      name: 'HDFC Bank Credit Card',
      detail: '**** 4321',
      isDefault: false,
    },
  ]

  // Activity log timeline matching Mockup 5
  const activityLog = [
    {
      id: 'act-1',
      title: 'Order Delivered',
      code: '#SBT1023439',
      timestamp: '26 Sep 2025, 11:15 AM',
      dotColor: 'bg-emerald-500',
    },
    {
      id: 'act-2',
      title: 'Order Placed',
      code: '#SBT1023439',
      timestamp: '26 Sep 2025, 09:02 AM',
      dotColor: 'bg-emerald-500',
    },
    {
      id: 'act-3',
      title: 'Payment Received',
      code: '₹4,999',
      timestamp: '26 Sep 2025, 09:02 AM',
      dotColor: 'bg-amber-500',
    },
    {
      id: 'act-4',
      title: 'Address Updated',
      code: '',
      timestamp: '26 Aug 2025, 04:20 PM',
      dotColor: 'bg-purple-500',
    },
    {
      id: 'act-5',
      title: 'Account Created',
      code: '',
      timestamp: '12 Aug 2025, 10:30 AM',
      dotColor: 'bg-blue-500',
    },
  ]

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!messageText.trim()) return
    toast.success(`Message sent to ${customer.name}`)
    setMessageText('')
    setShowMessageModal(false)
  }

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Customer details updated successfully')
    setShowEditModal(false)
  }

  const filteredOrders = orderHistory.filter((order) => {
    const matchesSearch =
      order.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.amount.includes(searchQuery) ||
      order.date.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus =
      statusFilter === 'All Status' || order.status === statusFilter
    return matchesSearch && matchesStatus
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

              {/* Customers (Active with red border & background) */}
              <div className="pt-0.5">
                <Link
                  to={ROUTES.sellerCustomers}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-[#DF1927] bg-red-50 border-l-4 border-[#DF1927] transition"
                >
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-[#DF1927]" />
                    <span>Customers</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-[#DF1927]" />
                </Link>

                {/* Submenu */}
                <div className="pl-9 pr-3 py-1.5 space-y-1 text-xs">
                  <Link
                    to={ROUTES.sellerCustomers}
                    className="block py-1.5 px-2 font-medium text-[#DF1927] hover:bg-red-50/50 rounded-lg transition"
                  >
                    All Customers
                  </Link>
                  <Link
                    to={ROUTES.sellerCustomers}
                    className="block py-1.5 px-2 font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition"
                  >
                    Segments
                  </Link>
                  <Link
                    to={ROUTES.sellerCustomers}
                    className="block py-1.5 px-2 font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition"
                  >
                    Reviews & Ratings
                  </Link>
                  <Link
                    to={ROUTES.sellerCustomers}
                    className="block py-1.5 px-2 font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition"
                  >
                    Support Tickets
                  </Link>
                </div>
              </div>

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
          {/* Breadcrumb matching Mockup 5: Customers > CUST001 */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link to={ROUTES.sellerCustomers} className="hover:text-gray-800 transition">
              Customers
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#DF1927] font-semibold">{customer.code}</span>
          </div>

          {/* Header Row matching Mockup 5 */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                  {customer.name}
                </h1>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Active
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Customer since {customer.joinedOn} <span className="text-gray-300 mx-1">|</span> {customer.code}
              </p>
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setShowEditModal(true)}
                className="px-3.5 py-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm transition"
              >
                <Edit2 className="w-3.5 h-3.5 text-gray-500" />
                <span>Edit</span>
              </button>

              <button
                type="button"
                onClick={() => setShowMessageModal(true)}
                className="px-3.5 py-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm transition"
              >
                <MessageSquare className="w-3.5 h-3.5 text-gray-500" />
                <span>Send Message</span>
              </button>

              <Link
                to={ROUTES.sellerCreateOrder}
                className="px-4 py-2 bg-[#DF1927] hover:bg-[#c01420] text-white text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm shadow-red-200 transition"
              >
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>Create Order</span>
              </Link>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowMoreActions(!showMoreActions)}
                  className="p-2 bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl shadow-sm transition"
                  title="More actions"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>

                {showMoreActions && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 z-30 animate-in fade-in zoom-in-95">
                    <button
                      type="button"
                      onClick={() => {
                        setShowMoreActions(false)
                        toast.success('Customer report downloaded')
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <Download className="w-3.5 h-3.5 text-gray-400" />
                      <span>Export Profile</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowMoreActions(false)
                        toast.info('Password reset email sent to ' + customer.email)
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-gray-400" />
                      <span>Send Password Reset</span>
                    </button>
                    <div className="my-1 border-t border-gray-100"></div>
                    <button
                      type="button"
                      onClick={() => {
                        setShowMoreActions(false)
                        toast.error(`Customer ${customer.name} marked as Inactive`)
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-red-600 hover:bg-red-50 flex items-center gap-2"
                    >
                      <Ban className="w-3.5 h-3.5 text-red-500" />
                      <span>Block Customer</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CUSTOMER PROFILE & STATS BANNER CARD (Mockup 5) */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col lg:flex-row items-stretch justify-between gap-6">
            {/* Left side: Avatar & details */}
            <div className="flex items-center gap-5 lg:w-1/2">
              <img
                src={customer.avatar}
                alt={customer.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-50 shadow-sm shrink-0"
              />
              <div className="space-y-1.5">
                <h2 className="text-xl font-bold text-gray-900">{customer.name}</h2>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Mail className="w-3.5 h-3.5 text-gray-400" />
                  <span>{customer.email}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Phone className="w-3.5 h-3.5 text-gray-400" />
                  <span>{customer.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  <span>{customer.location}</span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700">
                    Regular Customer
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    High Value
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700">
                    <Check className="w-3 h-3 text-blue-600" />
                    Verified
                  </span>
                </div>
              </div>
            </div>

            {/* Right side: 2x2 Grid of 4 Stat Cards */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {/* Total Orders */}
              <div className="bg-[#FAF5F5] rounded-2xl p-4 flex items-center justify-between border border-red-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-100/70 text-[#DF1927] flex items-center justify-center shrink-0">
                    <ShoppingCart className="w-5 h-5 text-[#DF1927]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-gray-500">Total Orders</div>
                    <div className="text-xl font-bold text-gray-900 mt-0.5">{customer.totalOrders}</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">vs last month</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-600 self-start">↗ 20%</span>
              </div>

              {/* Total Spent */}
              <div className="bg-[#F0FDF4] rounded-2xl p-4 flex items-center justify-between border border-emerald-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-600 flex items-center justify-center shrink-0">
                    <Wallet className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-gray-500">Total Spent</div>
                    <div className="text-xl font-bold text-gray-900 mt-0.5">{customer.totalSpent}</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">vs last month</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-600 self-start">↗ 28%</span>
              </div>

              {/* Avg. Order Value */}
              <div className="bg-[#F0F7FF] rounded-2xl p-4 flex items-center justify-between border border-blue-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-blue-600 flex items-center justify-center shrink-0">
                    <ShoppingBag className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-gray-500">Avg. Order Value</div>
                    <div className="text-xl font-bold text-gray-900 mt-0.5">{customer.avgOrderValue}</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">vs last month</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-600 self-start">↗ 12%</span>
              </div>

              {/* Last Order */}
              <div className="bg-[#FFFBF0] rounded-2xl p-4 flex items-center justify-between border border-amber-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-600 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-gray-500">Last Order</div>
                    <div className="text-base font-bold text-gray-900 mt-0.5">{customer.lastOrderDate}</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">3 days ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TAB NAVIGATION (Mockup 5) */}
          <div className="border-b border-gray-200">
            <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
              <button
                type="button"
                onClick={() => setActiveTab('orders')}
                className={`pb-3 text-sm font-semibold border-b-2 transition whitespace-nowrap ${
                  activeTab === 'orders'
                    ? 'border-[#DF1927] text-[#DF1927]'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                Order History (12)
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('addresses')}
                className={`pb-3 text-sm font-semibold border-b-2 transition whitespace-nowrap ${
                  activeTab === 'addresses'
                    ? 'border-[#DF1927] text-[#DF1927]'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                Addresses (3)
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('payments')}
                className={`pb-3 text-sm font-semibold border-b-2 transition whitespace-nowrap ${
                  activeTab === 'payments'
                    ? 'border-[#DF1927] text-[#DF1927]'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                Payment Methods (2)
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('wishlist')}
                className={`pb-3 text-sm font-semibold border-b-2 transition whitespace-nowrap ${
                  activeTab === 'wishlist'
                    ? 'border-[#DF1927] text-[#DF1927]'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                Wishlist (4)
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('reviews')}
                className={`pb-3 text-sm font-semibold border-b-2 transition whitespace-nowrap ${
                  activeTab === 'reviews'
                    ? 'border-[#DF1927] text-[#DF1927]'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                Reviews (3)
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('activity')}
                className={`pb-3 text-sm font-semibold border-b-2 transition whitespace-nowrap ${
                  activeTab === 'activity'
                    ? 'border-[#DF1927] text-[#DF1927]'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                Activity Log
              </button>
            </div>
          </div>

          {/* TWO COLUMN GRID CONTENT (Mockup 5) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* LEFT 8 COLUMNS */}
            <div className="lg:col-span-8 space-y-6">
              {/* Search & Filter Bar */}
              <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by order ID, product, or date..."
                    className="w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927]"
                  />
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto">
                  <select
                    className="px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927] text-gray-600 font-medium"
                    aria-label="Filter orders"
                  >
                    <option>All Orders</option>
                    <option>Completed</option>
                    <option>Pending</option>
                  </select>

                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927] text-gray-600 font-medium"
                    aria-label="Filter status"
                  >
                    <option>All Status</option>
                    <option>Delivered</option>
                    <option>Shipped</option>
                    <option>Processing</option>
                  </select>

                  <button
                    type="button"
                    className="px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl text-gray-600 flex items-center gap-1.5 whitespace-nowrap hover:bg-gray-100 transition"
                  >
                    <Calendar className="w-3.5 h-3.5 text-gray-500" />
                    <span>26 Jun 2025 - 02 Oct 2025</span>
                  </button>
                </div>
              </div>

              {/* Order History Table Card */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-gray-100 text-gray-400 font-medium">
                        <th className="pb-3.5 font-semibold">Order ID</th>
                        <th className="pb-3.5 font-semibold">Date</th>
                        <th className="pb-3.5 font-semibold">Items</th>
                        <th className="pb-3.5 font-semibold">Total Amount</th>
                        <th className="pb-3.5 font-semibold">Status</th>
                        <th className="pb-3.5 font-semibold text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredOrders.map((order) => (
                        <tr key={order.id} className="hover:bg-gray-50/70 transition group">
                          {/* Order ID */}
                          <td className="py-3.5 pr-3">
                            <Link
                              to={`/seller/orders/${order.id}`}
                              className="font-semibold text-blue-600 hover:underline"
                            >
                              {order.code}
                            </Link>
                          </td>

                          {/* Date */}
                          <td className="py-3.5 px-3 text-gray-600">{order.date}</td>

                          {/* Items (Thumbnails) */}
                          <td className="py-3.5 px-3">
                            <div className="flex items-center gap-1.5">
                              {order.images.map((img, i) => (
                                <img
                                  key={i}
                                  src={img}
                                  alt="Product thumbnail"
                                  className="w-9 h-9 rounded-lg object-contain bg-gray-50 border border-gray-100 p-0.5"
                                />
                              ))}
                              {order.additionalItemsCount && (
                                <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 w-7 h-7 rounded-lg flex items-center justify-center border border-gray-200">
                                  +{order.additionalItemsCount}
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Amount */}
                          <td className="py-3.5 px-3 font-bold text-gray-900">{order.amount}</td>

                          {/* Status */}
                          <td className="py-3.5 px-3">
                            {order.status === 'Delivered' && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                Delivered
                              </span>
                            )}
                            {order.status === 'Shipped' && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                Shipped
                              </span>
                            )}
                            {order.status === 'Processing' && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                Processing
                              </span>
                            )}
                          </td>

                          {/* Actions */}
                          <td className="py-3.5 pl-3 text-right">
                            <button
                              type="button"
                              onClick={() => navigate(`/seller/orders/${order.id}`)}
                              className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition"
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
              </div>

              {/* TWO CARDS SIDE-BY-SIDE: Wishlist (4) & Recent Reviews (3) (Mockup 5) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Wishlist Card */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                    <h3 className="text-sm font-bold text-gray-900">Wishlist (4)</h3>
                    <button
                      type="button"
                      onClick={() => toast.info('View full wishlist')}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition"
                    >
                      View All
                    </button>
                  </div>

                  <div className="grid grid-cols-4 gap-3">
                    {wishlistItems.map((item) => (
                      <div
                        key={item.id}
                        className="bg-gray-50/70 border border-gray-100 rounded-2xl p-2 flex flex-col items-center text-center relative group hover:border-gray-200 transition"
                      >
                        <button
                          type="button"
                          className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-white/80 flex items-center justify-center text-red-500 shadow-xs"
                          title="Favorite"
                        >
                          <Heart className="w-3 h-3 fill-red-50 text-red-500" />
                        </button>
                        <div className="w-14 h-14 my-1 flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <div className="w-full truncate text-[11px] font-semibold text-gray-800">
                          {item.title}
                        </div>
                        <div className="text-[11px] font-bold text-gray-900 mt-0.5">
                          {item.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Reviews Card */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                    <h3 className="text-sm font-bold text-gray-900">Recent Reviews (3)</h3>
                    <button
                      type="button"
                      onClick={() => toast.info('View all reviews')}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition"
                    >
                      View All
                    </button>
                  </div>

                  <div className="space-y-3.5">
                    {recentReviews.map((rev) => (
                      <div key={rev.id} className="flex items-start gap-3">
                        <img
                          src={rev.image}
                          alt={rev.productName}
                          className="w-10 h-10 rounded-xl object-contain bg-gray-50 border border-gray-100 p-0.5 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-xs font-bold text-gray-900 truncate">
                              {rev.productName}
                            </span>
                            <span className="text-[10px] text-gray-400 shrink-0">{rev.date}</span>
                          </div>
                          <div className="flex text-amber-400 my-0.5">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <p className="text-[11px] text-gray-500 leading-snug truncate">
                            {rev.comment}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT 4 COLUMNS (Mockup 5) */}
            <div className="lg:col-span-4 space-y-6">
              {/* 1. CUSTOMER ADDRESS (3) */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900">Customer Address (3)</h3>
                  <button
                    type="button"
                    onClick={() => toast.info('All 3 addresses displayed')}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {deliveryAddresses.map((addr) => (
                    <div
                      key={addr.id}
                      className="p-3.5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200 transition"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                            {addr.type === 'home' ? (
                              <Home className="w-3.5 h-3.5" />
                            ) : addr.type === 'office' ? (
                              <Briefcase className="w-3.5 h-3.5" />
                            ) : (
                              <MapPin className="w-3.5 h-3.5" />
                            )}
                          </div>
                          <span className="text-xs font-bold text-gray-900">{addr.title}</span>
                          {addr.isDefault && (
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-[#DF1927]">
                              Default
                            </span>
                          )}
                        </div>

                        <button
                          type="button"
                          className="p-1 text-gray-400 hover:text-gray-700 rounded-lg transition"
                        >
                          <MoreVertical className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-gray-500 pl-9 leading-relaxed">
                        <p>{addr.line1}</p>
                        <p>{addr.line2}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. PAYMENT METHODS (2) */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900">Payment Methods (2)</h3>
                  <button
                    type="button"
                    onClick={() => toast.info('Add new payment method modal')}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-3">
                  {paymentMethods.map((pay) => (
                    <div
                      key={pay.id}
                      className="p-3.5 rounded-2xl border border-gray-100 bg-gray-50/50 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-7 rounded-lg bg-purple-50 text-purple-700 text-[11px] font-extrabold flex items-center justify-center shrink-0 border border-purple-100">
                          {pay.type === 'upi' ? 'UPI' : 'CARD'}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-900">{pay.name}</div>
                          <div className="text-[11px] text-gray-500">{pay.detail}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {pay.isDefault && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                            Default
                          </span>
                        )}
                        <button
                          type="button"
                          className="p-1 text-gray-400 hover:text-gray-700 rounded-lg transition"
                        >
                          <MoreVertical className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. ACTIVITY LOG */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900">Activity Log</h3>
                  <button
                    type="button"
                    onClick={() => setActiveTab('activity')}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition"
                  >
                    View All
                  </button>
                </div>

                <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
                  {activityLog.map((act) => (
                    <div key={act.id} className="relative">
                      {/* Timeline dot */}
                      <span
                        className={`absolute -left-6 top-1 w-2.5 h-2.5 rounded-full border-2 border-white ring-2 ring-gray-100 ${act.dotColor}`}
                      ></span>

                      <div className="flex items-center justify-between gap-2 text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-gray-800">{act.title}</span>
                          {act.code && (
                            <span className="text-gray-500 font-normal">{act.code}</span>
                          )}
                        </div>
                        <span className="text-[10px] text-gray-400 shrink-0 whitespace-nowrap">
                          {act.timestamp}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* SEND MESSAGE MODAL */}
      {showMessageModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl w-full max-w-lg p-6 shadow-2xl border border-gray-100">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <img
                  src={customer.avatar}
                  alt={customer.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Message {customer.name}</h3>
                  <p className="text-xs text-gray-500">{customer.email}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowMessageModal(false)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-700 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSendMessage} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  defaultValue="Regarding your recent order #SBT1023439"
                  className="w-full px-3.5 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Message Content
                </label>
                <textarea
                  rows={4}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full p-3.5 text-xs bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#DF1927] resize-none"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowMessageModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#DF1927] hover:bg-[#c01420] rounded-xl flex items-center gap-1.5 shadow-sm shadow-red-200 transition"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EDIT CUSTOMER MODAL */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl w-full max-w-lg p-6 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <h3 className="text-base font-bold text-gray-900">Edit Customer Information</h3>
              <button
                type="button"
                onClick={() => setShowEditModal(false)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-700 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="mt-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={customer.name}
                    onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:border-[#DF1927] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Customer ID</label>
                  <input
                    type="text"
                    disabled
                    value={customer.code}
                    className="w-full px-3 py-2 text-xs bg-gray-100 text-gray-500 border border-gray-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={customer.email}
                    onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:border-[#DF1927] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:border-[#DF1927] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Gender</label>
                  <select
                    value={customer.gender}
                    onChange={(e) => setCustomer({ ...customer, gender: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:border-[#DF1927] focus:outline-none"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Date of Birth</label>
                  <input
                    type="text"
                    value={customer.dob}
                    onChange={(e) => setCustomer({ ...customer, dob: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:border-[#DF1927] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  value={customer.location}
                  onChange={(e) => setCustomer({ ...customer, location: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:border-[#DF1927] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#DF1927] hover:bg-[#c01420] rounded-xl shadow-sm transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
