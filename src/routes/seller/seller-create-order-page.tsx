import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
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
  Truck,
  CheckCircle2,
  FileText,
  MapPin,
  Check,
  Edit2,
  Minus,
  X,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react'
import { toast } from 'sonner'
import { SbtLogo } from '@/components/sbt-logo'
import { ROUTES } from '@/constants/routes'

import cartIphone from '@/assets/premium/iphone15-black.jpg'
import cartShoes from '@/assets/premium/deal-shoes.jpg'
import cartWatch from '@/assets/premium/galaxy-watch.jpg'
import cartAirpods from '@/assets/premium/airpods-pro-2.jpg'
import cartLuggage from '@/assets/premium/deal-luggage.jpg'

const customerAvatars = {
  dhiraj: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
  amit: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
}

interface ProductItem {
  id: string
  name: string
  variant: string
  image: string
  sku: string
  price: number
  stockStatus: 'In Stock' | 'Low Stock'
  quantity: number
  selected: boolean
}

export const SellerCreateOrderPage: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Step 1: Customer & Products (Mockup 2), Step 2: Review (Mockup 3)
  const isReviewUrl = location.pathname.includes('/review')
  const [currentStep, setCurrentStep] = useState<number>(isReviewUrl ? 2 : 1)

  // Customer
  const [customer] = useState({
    name: 'Amit Kumar',
    code: 'CUST001',
    email: 'amit.kumar@gmail.com',
    phone: '+91 98765 43210',
    address: 'Flat 302, A Block, Green Residency, Sector 76, Noida, UP - 201301',
    status: 'Regular Customer',
    avatar: customerAvatars.amit,
  })

  // Product items matching Mockup 2
  const [products, setProducts] = useState<ProductItem[]>([
    {
      id: '1',
      name: 'iPhone 15 (128GB)',
      variant: 'Black',
      image: cartIphone,
      sku: 'IP15-128',
      price: 79900,
      stockStatus: 'In Stock',
      quantity: 1,
      selected: false,
    },
    {
      id: '2',
      name: 'Nike Air Max',
      variant: 'White',
      image: cartShoes,
      sku: 'NK-AM-001',
      price: 12999,
      stockStatus: 'In Stock',
      quantity: 2,
      selected: true, // Selected as in mockup 2
    },
    {
      id: '3',
      name: 'Apple Watch Series 9',
      variant: 'Black',
      image: cartWatch,
      sku: 'AW-009',
      price: 41900,
      stockStatus: 'Low Stock',
      quantity: 1,
      selected: false,
    },
    {
      id: '4',
      name: 'AirPods Pro',
      variant: 'White',
      image: cartAirpods,
      sku: 'AP-PRO-001',
      price: 24900,
      stockStatus: 'In Stock',
      quantity: 1,
      selected: false,
    },
    {
      id: '5',
      name: 'Premium Backpack',
      variant: 'Black',
      image: cartLuggage,
      sku: 'BP-001',
      price: 4999,
      stockStatus: 'In Stock',
      quantity: 1,
      selected: false,
    },
  ])

  const [orderNotes, setOrderNotes] = useState('')
  const [productSearch, setProductSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [showAddCustomerModal, setShowAddCustomerModal] = useState(false)
  const [showCustomItemModal, setShowCustomItemModal] = useState(false)

  // Calculations matching Mockup 2 & 3
  // In mockup: Items (2) = ₹25,998, Tax (18%) = ₹4,680, Total = ₹30,678
  const selectedProducts = products.filter((p) => p.selected)
  const subtotal = selectedProducts.reduce((sum, p) => sum + p.price * p.quantity, 0)
  const tax = Math.round(subtotal * 0.18)
  const totalAmount = subtotal + tax

  const updateQuantity = (id: string, delta: number) => {
    setProducts((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta)
          return { ...item, quantity: newQty }
        }
        return item
      })
    )
  }

  const toggleSelectProduct = (id: string) => {
    setProducts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item))
    )
  }

  const handlePlaceOrder = () => {
    toast.success('Order placed successfully! Redirecting...')
    setTimeout(() => {
      navigate(ROUTES.sellerOrderSuccess)
    }, 600)
  }

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
          <div>
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
              <Link to={ROUTES.sellerOrders} className="hover:text-gray-800 transition">
                Orders
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className={currentStep === 1 ? 'text-[#DF1927] font-semibold' : ''}>
                Create Order
              </span>
              {currentStep === 2 && (
                <>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-[#DF1927] font-semibold">Review Order</span>
                </>
              )}
            </div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              {currentStep === 1 ? 'Create New Order' : 'Review Order'}
            </h1>
            <p className="text-xs text-gray-500 mt-0.5">
              {currentStep === 1
                ? 'Create and send a new order to your customer quickly.'
                : 'Please review all details before placing the order.'}
            </p>
          </div>

          {/* 4-STAGE STEPPER HEADER */}
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
              {/* Step 1: Customer */}
              <div
                onClick={() => setCurrentStep(1)}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition shadow-sm ${
                    currentStep > 1
                      ? 'bg-red-500 text-white'
                      : 'bg-[#DF1927] text-white ring-4 ring-red-100'
                  }`}
                >
                  {currentStep > 1 ? <Check className="w-4 h-4" /> : '1'}
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Customer</div>
                  <div className="text-[11px] text-gray-500">Select customer</div>
                </div>
              </div>

              {/* Step 2: Products */}
              <div
                onClick={() => setCurrentStep(1)}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition shadow-sm ${
                    currentStep > 1
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 text-gray-500 border border-gray-200'
                  }`}
                >
                  {currentStep > 1 ? <Check className="w-4 h-4" /> : '2'}
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Products</div>
                  <div className="text-[11px] text-gray-500">Add products</div>
                </div>
              </div>

              {/* Step 3: Review */}
              <div
                onClick={() => setCurrentStep(2)}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition shadow-sm ${
                    currentStep === 2
                      ? 'bg-[#DF1927] text-white ring-4 ring-red-100'
                      : 'bg-gray-100 text-gray-500 border border-gray-200'
                  }`}
                >
                  3
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Review</div>
                  <div className="text-[11px] text-gray-500">Check details</div>
                </div>
              </div>

              {/* Step 4: Confirm */}
              <div className="flex items-center gap-3 opacity-60">
                <div className="w-9 h-9 rounded-full bg-gray-100 text-gray-500 border border-gray-200 flex items-center justify-center text-xs font-bold">
                  4
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Confirm</div>
                  <div className="text-[11px] text-gray-500">Place order</div>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN TWO-COLUMN CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* LEFT 8 COLUMNS */}
            <div className="lg:col-span-8 space-y-6">
              {/* STEP 1: CREATE NEW ORDER (Mockup 2) */}
              {currentStep === 1 && (
                <>
                  {/* 1. CUSTOMER DETAILS */}
                  <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <h2 className="text-base font-bold text-gray-900">Customer Details</h2>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowAddCustomerModal(true)}
                        className="text-xs font-semibold text-blue-600 hover:underline"
                      >
                        + Add New Customer
                      </button>
                    </div>

                    {/* Customer search box */}
                    <div className="relative">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search by name, phone or customer ID..."
                        defaultValue="Amit Kumar"
                        className="w-full pl-10 pr-10 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927]"
                      />
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>

                    {/* Selected Customer Card */}
                    <div className="p-4 bg-gray-50/70 rounded-2xl border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-3.5">
                        <img
                          src={customer.avatar}
                          alt={customer.name}
                          className="w-12 h-12 rounded-full object-cover border border-gray-200 shrink-0"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-900 text-sm">{customer.name}</span>
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                              {customer.status}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-2 text-[11px] text-gray-500 mt-1">
                            <span className="font-medium text-gray-700">{customer.code}</span>
                            <span>|</span>
                            <span>{customer.email}</span>
                            <span>|</span>
                            <span>{customer.phone}</span>
                          </div>

                          <div className="flex items-center gap-1.5 text-[11px] text-gray-500 mt-1.5">
                            <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                            <span>{customer.address}</span>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => toast.info('Customer search enabled')}
                        className="px-3.5 py-1.5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold rounded-xl self-start sm:self-center transition shadow-xs"
                      >
                        Change
                      </button>
                    </div>
                  </div>

                  {/* 2. ADD PRODUCTS */}
                  <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4 text-gray-500" />
                        <h2 className="text-base font-bold text-gray-900">Add Products</h2>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowCustomItemModal(true)}
                        className="text-xs font-semibold text-blue-600 hover:underline"
                      >
                        + Add Custom Item
                      </button>
                    </div>

                    {/* Filter row */}
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="relative flex-1 min-w-[200px]">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          value={productSearch}
                          onChange={(e) => setProductSearch(e.target.value)}
                          placeholder="Search products by name, SKU or category..."
                          className="w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927]"
                        />
                      </div>

                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-3.5 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium focus:outline-none focus:border-[#DF1927]"
                      >
                        <option>All Categories</option>
                        <option>Mobiles</option>
                        <option>Footwear</option>
                        <option>Wearables</option>
                        <option>Audio</option>
                        <option>Bags &amp; Luggage</option>
                      </select>
                    </div>

                    {/* Products Table matching Mockup 2 */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="border-b border-gray-100 text-gray-400 font-medium bg-gray-50/50">
                            <th className="py-3 pl-4 pr-2 w-8">
                              <input
                                type="checkbox"
                                checked={products.every((p) => p.selected)}
                                onChange={() => {
                                  const all = products.every((p) => p.selected)
                                  setProducts((prev) => prev.map((p) => ({ ...p, selected: !all })))
                                }}
                                className="rounded border-gray-300 text-[#DF1927] focus:ring-[#DF1927]"
                              />
                            </th>
                            <th className="py-3 px-3 font-semibold">Product</th>
                            <th className="py-3 px-3 font-semibold">SKU</th>
                            <th className="py-3 px-3 font-semibold">Price (₹)</th>
                            <th className="py-3 px-3 font-semibold">Stock</th>
                            <th className="py-3 px-3 font-semibold">Quantity</th>
                            <th className="py-3 px-3 font-semibold">Subtotal (₹)</th>
                            <th className="py-3 pr-4 pl-2 font-semibold text-right"></th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {products.map((item) => (
                            <tr
                              key={item.id}
                              className={`transition ${
                                item.selected ? 'bg-red-50/20' : 'hover:bg-gray-50/60'
                              }`}
                            >
                              <td className="py-3.5 pl-4 pr-2">
                                <input
                                  type="checkbox"
                                  checked={item.selected}
                                  onChange={() => toggleSelectProduct(item.id)}
                                  className="rounded border-gray-300 text-[#DF1927] focus:ring-[#DF1927]"
                                />
                              </td>

                              {/* Product info */}
                              <td className="py-3.5 px-3">
                                <div className="flex items-center gap-3">
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-10 h-10 rounded-xl object-contain bg-gray-50 border border-gray-100 p-1"
                                  />
                                  <div>
                                    <div className="font-bold text-gray-900 leading-snug">
                                      {item.name}
                                    </div>
                                    <div className="text-[11px] text-gray-400">{item.variant}</div>
                                  </div>
                                </div>
                              </td>

                              <td className="py-3.5 px-3 font-medium text-gray-500">{item.sku}</td>

                              <td className="py-3.5 px-3 font-medium text-gray-900">
                                {item.price.toLocaleString('en-IN')}
                              </td>

                              <td className="py-3.5 px-3">
                                {item.stockStatus === 'In Stock' ? (
                                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    In Stock
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-700">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                    Low Stock
                                  </span>
                                )}
                              </td>

                              {/* Quantity stepper */}
                              <td className="py-3.5 px-3">
                                <div className="inline-flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white">
                                  <button
                                    type="button"
                                    onClick={() => updateQuantity(item.id, -1)}
                                    className="px-2 py-1 text-gray-500 hover:bg-gray-100 transition"
                                  >
                                    <Minus className="w-3 h-3" />
                                  </button>
                                  <span className="px-3 py-1 font-bold text-gray-900 text-xs min-w-[28px] text-center">
                                    {item.quantity}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => updateQuantity(item.id, 1)}
                                    className="px-2 py-1 text-gray-500 hover:bg-gray-100 transition"
                                  >
                                    <Plus className="w-3 h-3" />
                                  </button>
                                </div>
                              </td>

                              <td className="py-3.5 px-3 font-bold text-gray-900">
                                {(item.price * item.quantity).toLocaleString('en-IN')}
                              </td>

                              <td className="py-3.5 pr-4 pl-2 text-right">
                                <button
                                  type="button"
                                  className="p-1 text-gray-400 hover:text-gray-700 rounded-lg transition"
                                >
                                  <MoreVertical className="w-3.5 h-3.5" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}

              {/* STEP 2: REVIEW ORDER (Mockup 3) */}
              {currentStep === 2 && (
                <>
                  {/* 1. CUSTOMER DETAILS CARD */}
                  <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <h2 className="text-base font-bold text-gray-900">Customer Details</h2>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline"
                      >
                        <Edit2 className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                    </div>

                    <div className="flex items-start gap-4">
                      <img
                        src={customer.avatar}
                        alt={customer.name}
                        className="w-12 h-12 rounded-full object-cover border border-gray-200 shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900 text-sm">{customer.name}</span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            {customer.status}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mt-1">
                          <span className="font-medium text-gray-700">{customer.code}</span>
                          <span>|</span>
                          <span>{customer.email}</span>
                          <span>|</span>
                          <span>{customer.phone}</span>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1.5">
                          <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                          <span>{customer.address}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2. PRODUCTS (2 ITEMS) CARD */}
                  <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4 text-gray-500" />
                        <h2 className="text-base font-bold text-gray-900">
                          Products ({selectedProducts.length || 2} Items)
                        </h2>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline"
                      >
                        <Edit2 className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="border-b border-gray-100 text-gray-400 font-medium bg-gray-50/50">
                            <th className="py-3 px-3 font-semibold">Product</th>
                            <th className="py-3 px-3 font-semibold">SKU</th>
                            <th className="py-3 px-3 font-semibold">Price (₹)</th>
                            <th className="py-3 px-3 font-semibold">Quantity</th>
                            <th className="py-3 px-3 font-semibold text-right">Subtotal (₹)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {selectedProducts.length > 0 ? (
                            selectedProducts.map((p) => (
                              <tr key={p.id}>
                                <td className="py-3.5 px-3">
                                  <div className="flex items-center gap-3">
                                    <img
                                      src={p.image}
                                      alt={p.name}
                                      className="w-10 h-10 rounded-xl object-contain bg-gray-50 border border-gray-100 p-1"
                                    />
                                    <div>
                                      <div className="font-bold text-gray-900">{p.name}</div>
                                      <div className="text-[11px] text-gray-400">{p.variant}</div>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-3.5 px-3 font-medium text-gray-500">{p.sku}</td>
                                <td className="py-3.5 px-3 font-medium text-gray-900">
                                  {p.price.toLocaleString('en-IN')}
                                </td>
                                <td className="py-3.5 px-3 font-bold text-gray-900">{p.quantity}</td>
                                <td className="py-3.5 px-3 font-bold text-gray-900 text-right">
                                  {(p.price * p.quantity).toLocaleString('en-IN')}
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={5} className="py-4 text-center text-gray-400">
                                No items selected
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 3. DELIVERY DETAILS CARD */}
                  <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-gray-500" />
                        <h2 className="text-base font-bold text-gray-900">Delivery Details</h2>
                      </div>
                      <button
                        type="button"
                        onClick={() => toast.info('Delivery details editor')}
                        className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline"
                      >
                        <Edit2 className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="p-4 rounded-2xl bg-gray-50/70 border border-gray-100 flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-gray-900 block mb-1">
                            Delivery Address
                          </span>
                          <p className="text-gray-600 leading-relaxed">{customer.address}</p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-gray-50/70 border border-gray-100 flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <Truck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-gray-900 block mb-1">
                              Delivery Method
                            </span>
                            <p className="text-gray-900 font-semibold">Standard Delivery</p>
                            <p className="text-gray-400 text-[11px]">3 – 5 business days</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => toast.info('Delivery method selector')}
                          className="text-xs font-semibold text-blue-600 hover:underline shrink-0"
                        >
                          Change
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 4. PAYMENT METHOD CARD */}
                  <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-gray-500" />
                        <h2 className="text-base font-bold text-gray-900">Payment Method</h2>
                      </div>
                      <button
                        type="button"
                        onClick={() => toast.info('Payment method editor')}
                        className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline"
                      >
                        <Edit2 className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                    </div>

                    <div className="p-4 rounded-2xl bg-gray-50/70 border border-gray-100 flex items-center gap-3">
                      <div className="w-10 h-8 rounded-lg bg-purple-600 text-white font-bold text-xs flex items-center justify-center italic shadow-xs">
                        UPI
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-xs">UPI (PhonePe)</div>
                        <div className="text-[11px] text-gray-500">amit.kumar@ybl</div>
                      </div>
                    </div>
                  </div>

                  {/* 5. ORDER NOTES CARD */}
                  <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                      <FileText className="w-4 h-4 text-gray-500" />
                      <h2 className="text-base font-bold text-gray-900">Order Notes (Optional)</h2>
                    </div>
                    <p className="text-xs text-gray-500">
                      {orderNotes || 'No special instructions.'}
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* RIGHT 4 COLUMNS: ORDER SUMMARY & PROCEED */}
            <div className="lg:col-span-4 space-y-6">
              {/* ORDER SUMMARY */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                  <ShoppingBag className="w-4 h-4 text-gray-700" />
                  <h2 className="text-base font-bold text-gray-900">Order Summary</h2>
                </div>

                <div className="space-y-3 text-xs divide-y divide-gray-100">
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-gray-500">Items ({selectedProducts.length || 2})</span>
                    <span className="font-bold text-gray-900">
                      ₹{subtotal.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-bold text-gray-900">
                      ₹{subtotal.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1.5 text-gray-500">
                      <span>Shipping Charges</span>
                      <Edit2 className="w-3 h-3 text-gray-400 cursor-pointer" />
                    </div>
                    <span className="font-bold text-gray-900">₹0</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1.5 text-gray-500">
                      <span>Discount</span>
                      <Edit2 className="w-3 h-3 text-gray-400 cursor-pointer" />
                    </div>
                    <span className="font-bold text-gray-900">₹0</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-500">Tax (18% GST)</span>
                    <span className="font-bold text-gray-900">
                      ₹{tax.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <span className="text-sm font-bold text-gray-900">Total Amount</span>
                    <span className="text-lg font-black text-gray-900 tracking-tight">
                      ₹{totalAmount.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* STEP 1 RIGHT CARDS: DELIVERY & PAYMENT DETAILS */}
              {currentStep === 1 && (
                <>
                  {/* Delivery Details Card */}
                  <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-gray-500" />
                        <span className="text-xs font-bold text-gray-900">Delivery Details</span>
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-3 text-xs">
                      <div className="flex items-start gap-2 text-gray-600">
                        <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-gray-900 block mb-0.5">
                            Delivery Address
                          </span>
                          <p className="text-[11px] leading-relaxed text-gray-500">
                            {customer.address}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => toast.info('Change delivery address')}
                        className="text-xs font-semibold text-blue-600 hover:underline shrink-0"
                      >
                        Change
                      </button>
                    </div>
                  </div>

                  {/* Payment Method Card */}
                  <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-gray-500" />
                        <span className="text-xs font-bold text-gray-900">Payment Method</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => toast.info('Change payment method')}
                        className="text-xs font-semibold text-blue-600 hover:underline"
                      >
                        Change
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-6 rounded bg-purple-600 text-white font-bold text-[10px] flex items-center justify-center italic">
                        UPI
                      </div>
                      <div className="text-xs">
                        <div className="font-bold text-gray-900">UPI (PhonePe)</div>
                        <div className="text-[11px] text-gray-500">amit.kumar@ybl</div>
                      </div>
                    </div>
                  </div>

                  {/* Order Notes Card */}
                  <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-2">
                    <div className="flex items-center gap-2 pb-1 border-b border-gray-100">
                      <FileText className="w-4 h-4 text-gray-500" />
                      <span className="text-xs font-bold text-gray-900">
                        Order Notes (Optional)
                      </span>
                    </div>
                    <textarea
                      rows={3}
                      value={orderNotes}
                      onChange={(e) => setOrderNotes(e.target.value)}
                      placeholder="Add any special instructions for this order..."
                      className="w-full p-3 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927] resize-none"
                    />
                  </div>

                  {/* Review Order Button */}
                  <button
                    type="button"
                    onClick={() => {
                      if (selectedProducts.length === 0) {
                        toast.error('Please select at least one product')
                        return
                      }
                      setCurrentStep(2)
                    }}
                    className="w-full py-3 px-4 bg-[#DF1927] hover:bg-[#c01420] text-white font-bold text-xs rounded-2xl flex items-center justify-center gap-2 shadow-md shadow-red-200 transition"
                  >
                    <span>Review Order</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </>
              )}

              {/* STEP 2 RIGHT BUTTONS: PLACE ORDER & BACK */}
              {currentStep === 2 && (
                <>
                  {/* Notification banner matching Mockup 3 */}
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center gap-3 text-xs text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>This order will be created and sent to the customer.</span>
                  </div>

                  <button
                    type="button"
                    onClick={handlePlaceOrder}
                    className="w-full py-3.5 px-4 bg-[#DF1927] hover:bg-[#c01420] text-white font-bold text-xs rounded-2xl flex items-center justify-center gap-2 shadow-md shadow-red-200 transition"
                  >
                    <span>Place Order</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="w-full py-3 px-4 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold text-xs rounded-2xl flex items-center justify-center gap-2 shadow-xs transition"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Products</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* ADD CUSTOMER MODAL */}
      {showAddCustomerModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl w-full max-w-md p-6 shadow-2xl border border-gray-100">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="text-base font-bold text-gray-900">Add New Customer</h3>
              <button
                type="button"
                onClick={() => setShowAddCustomerModal(false)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                toast.success('Customer added and selected')
                setShowAddCustomerModal(false)
              }}
              className="mt-4 space-y-3 text-xs"
            >
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Chandra"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#DF1927] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="e.g. ramesh@gmail.com"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#DF1927] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  placeholder="+91 98..."
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#DF1927] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  placeholder="Street, City, State, PIN"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#DF1927] focus:outline-none"
                  required
                />
              </div>
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddCustomerModal(false)}
                  className="px-4 py-2 font-semibold text-gray-600 hover:bg-gray-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 font-semibold text-white bg-[#DF1927] hover:bg-[#c01420] rounded-xl shadow-sm"
                >
                  Save Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ADD CUSTOM ITEM MODAL */}
      {showCustomItemModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl w-full max-w-md p-6 shadow-2xl border border-gray-100">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="text-base font-bold text-gray-900">Add Custom Item</h3>
              <button
                type="button"
                onClick={() => setShowCustomItemModal(false)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                toast.success('Custom item added to order')
                setShowCustomItemModal(false)
              }}
              className="mt-4 space-y-3 text-xs"
            >
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Item Name</label>
                <input
                  type="text"
                  placeholder="e.g. Custom Gift Wrap & Card"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#DF1927] focus:outline-none"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Price (₹)</label>
                  <input
                    type="number"
                    placeholder="250"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#DF1927] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Quantity</label>
                  <input
                    type="number"
                    defaultValue="1"
                    min="1"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#DF1927] focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCustomItemModal(false)}
                  className="px-4 py-2 font-semibold text-gray-600 hover:bg-gray-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 font-semibold text-white bg-[#DF1927] hover:bg-[#c01420] rounded-xl shadow-sm"
                >
                  Add Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
