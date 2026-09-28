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
  Download,
  Upload,
  ArrowUpDown,
  Edit2,
  FileText,
  AlertTriangle,
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
import cartPowerbank from '@/assets/premium/acc-charger-20w.jpg'
import cartSpeaker from '@/assets/premium/sony-xm5.jpg'
import cartBlueShoes from '@/assets/premium/deal-shoes.jpg'

const customerAvatars = {
  dhiraj: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
}

interface InventoryProduct {
  id: string
  name: string
  variant: string
  image: string
  sku: string
  category: string
  currentStock: number
  status: 'In Stock' | 'Low Stock' | 'Out of Stock'
  location: 'Main Warehouse' | 'Secondary Warehouse'
}

export const SellerInventoryPage: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [selectedStatus, setSelectedStatus] = useState('All Status')
  const [selectedLocation, setSelectedLocation] = useState('All Locations')
  const [sortBy] = useState('Sort by')
  const [currentPage, setCurrentPage] = useState(1)

  // Modals state
  const [showAddStockModal, setShowAddStockModal] = useState(false)
  const [showTransferModal, setShowTransferModal] = useState(false)
  const [stockQty, setStockQty] = useState('')
  const [selectedProductForAction, setSelectedProductForAction] = useState<InventoryProduct | null>(null)

  // 4 Metric KPI Cards matching Image 1 exactly
  const inventoryMetrics = [
    {
      title: 'Total Stock',
      value: '1,248',
      trend: '12%',
      trendLabel: 'vs last month',
      isPositive: true,
      iconColor: 'bg-red-50 text-[#DF1927]',
      sparklineColor: '#DF1927',
      sparklinePath: 'M0,18 Q30,16 60,11 T90,14 T120,4',
      icon: Layers,
    },
    {
      title: 'In Stock',
      value: '1,028',
      trend: '15%',
      trendLabel: '82% of total',
      isPositive: true,
      iconColor: 'bg-emerald-50 text-emerald-600',
      sparklineColor: '#10B981',
      sparklinePath: 'M0,18 Q30,17 60,12 T95,6 T120,2',
      icon: Package,
    },
    {
      title: 'Low Stock',
      value: '148',
      trend: '8%',
      trendLabel: 'Needs attention',
      isPositive: false,
      iconColor: 'bg-amber-50 text-amber-600',
      sparklineColor: '#F59E0B',
      sparklinePath: 'M0,8 Q30,12 60,15 T90,12 T120,18',
      icon: AlertTriangle,
    },
    {
      title: 'Out of Stock',
      value: '72',
      trend: '20%',
      trendLabel: 'Replenish soon',
      isPositive: true,
      iconColor: 'bg-red-50 text-[#DF1927]',
      sparklineColor: '#DF1927',
      sparklinePath: 'M0,18 Q30,14 60,9 T90,12 T120,5',
      icon: X,
    },
  ]

  // 10 Inventory Rows matching Image 1
  const inventoryData: InventoryProduct[] = [
    {
      id: '1',
      name: 'iPhone 15 (128GB)',
      variant: 'Black',
      image: cartIphone,
      sku: 'IP15-128',
      category: 'Mobiles',
      currentStock: 45,
      status: 'In Stock',
      location: 'Main Warehouse',
    },
    {
      id: '2',
      name: 'Apple AirPods Pro',
      variant: '2nd Gen',
      image: cartAirpods,
      sku: 'AP-PRO-2',
      category: 'Audio',
      currentStock: 18,
      status: 'Low Stock',
      location: 'Main Warehouse',
    },
    {
      id: '3',
      name: 'Samsung Galaxy Watch 6',
      variant: 'Black',
      image: cartWatch,
      sku: 'SGW6-44',
      category: 'Wearables',
      currentStock: 0,
      status: 'Out of Stock',
      location: 'Main Warehouse',
    },
    {
      id: '4',
      name: 'Nike Air Force 1',
      variant: 'White',
      image: cartShoes,
      sku: 'NK-AF1',
      category: 'Footwear',
      currentStock: 32,
      status: 'In Stock',
      location: 'Secondary Warehouse',
    },
    {
      id: '5',
      name: 'Fastrack Backpack',
      variant: 'Black',
      image: cartLuggage,
      sku: 'FB-BP-001',
      category: 'Bags & Luggage',
      currentStock: 12,
      status: 'Low Stock',
      location: 'Secondary Warehouse',
    },
    {
      id: '6',
      name: 'Spigen Phone Case',
      variant: 'Black',
      image: cartCase,
      sku: 'SP-CASE-01',
      category: 'Accessories',
      currentStock: 56,
      status: 'In Stock',
      location: 'Main Warehouse',
    },
    {
      id: '7',
      name: 'Wireless Charger',
      variant: 'White',
      image: cartCharger,
      sku: 'WC-001',
      category: 'Accessories',
      currentStock: 8,
      status: 'Low Stock',
      location: 'Secondary Warehouse',
    },
    {
      id: '8',
      name: 'Xiaomi Power Bank',
      variant: '20000mAh',
      image: cartPowerbank,
      sku: 'MI-PB-20K',
      category: 'Accessories',
      currentStock: 3,
      status: 'Out of Stock',
      location: 'Main Warehouse',
    },
    {
      id: '9',
      name: 'JBL Bluetooth Speaker',
      variant: 'Black',
      image: cartSpeaker,
      sku: 'JBL-FLIP6',
      category: 'Audio',
      currentStock: 27,
      status: 'In Stock',
      location: 'Main Warehouse',
    },
    {
      id: '10',
      name: 'Adidas Running Shoes',
      variant: 'Blue',
      image: cartBlueShoes,
      sku: 'AD-RUN-01',
      category: 'Footwear',
      currentStock: 15,
      status: 'Low Stock',
      location: 'Secondary Warehouse',
    },
  ]

  const toggleSelectAll = () => {
    if (selectedIds.length === inventoryData.length) {
      setSelectedIds([])
    } else {
      setSelectedIds(inventoryData.map((item) => item.id))
    }
  }

  const toggleSelectItem = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const handleAddStockSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!stockQty) return
    toast.success(`Successfully added ${stockQty} units of stock!`)
    setStockQty('')
    setShowAddStockModal(false)
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

              {/* Inventory (Active) */}
              <Link
                to={ROUTES.sellerInventory}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-[#DF1927] bg-red-50 border-l-4 border-[#DF1927] transition"
              >
                <Layers className="w-4 h-4 text-[#DF1927]" />
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                <span>Inventory</span>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-[#DF1927] font-semibold">Stock Management</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Inventory</h1>
              <p className="text-xs text-gray-500 mt-0.5">
                Track and manage your stock levels across all products and locations.
              </p>
            </div>

            {/* Top Right Buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => toast.info('Bulk Update mode opened')}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm transition"
              >
                <Upload className="w-3.5 h-3.5 text-gray-600" />
                <span>Bulk Update</span>
              </button>

              <button
                type="button"
                onClick={() => toast.success('Inventory report exported')}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm transition"
              >
                <Download className="w-3.5 h-3.5 text-gray-600" />
                <span>Export</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedProductForAction(inventoryData[0] || null)
                  setShowAddStockModal(true)
                }}
                className="px-4 py-2 bg-[#DF1927] hover:bg-[#c01420] text-white text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm shadow-red-200 transition"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Stock</span>
              </button>
            </div>
          </div>

          {/* 4 KPI METRIC CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {inventoryMetrics.map((metric, idx) => {
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

          {/* FILTER BAR */}
          <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm flex flex-wrap items-center justify-between gap-3">
            <div className="relative flex-1 min-w-[240px] max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by product name, SKU, or category..."
                className="w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927] transition"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium focus:outline-none focus:border-[#DF1927]"
              >
                <option>All Categories</option>
                <option>Mobiles</option>
                <option>Audio</option>
                <option>Wearables</option>
                <option>Footwear</option>
                <option>Bags & Luggage</option>
                <option>Accessories</option>
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium focus:outline-none focus:border-[#DF1927]"
              >
                <option>All Status</option>
                <option>In Stock</option>
                <option>Low Stock</option>
                <option>Out of Stock</option>
              </select>

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium focus:outline-none focus:border-[#DF1927]"
              >
                <option>All Locations</option>
                <option>Main Warehouse</option>
                <option>Secondary Warehouse</option>
              </select>

              <button
                type="button"
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium flex items-center gap-1.5 hover:bg-gray-100 transition"
              >
                <ArrowUpDown className="w-3.5 h-3.5 text-gray-500" />
                <span>{sortBy}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>
            </div>
          </div>

          {/* MAIN GRID: TABLE (LEFT) + INSPECTOR (RIGHT) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* INVENTORY TABLE (8 COLS) */}
            <div className="lg:col-span-8 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-gray-100 text-gray-400 font-medium bg-gray-50/50">
                      <th className="py-3.5 pl-5 pr-2 w-8">
                        <input
                          type="checkbox"
                          checked={selectedIds.length === inventoryData.length}
                          onChange={toggleSelectAll}
                          className="rounded border-gray-300 text-[#DF1927] focus:ring-[#DF1927]"
                        />
                      </th>
                      <th className="py-3.5 px-3 font-semibold">Product</th>
                      <th className="py-3.5 px-3 font-semibold">SKU</th>
                      <th className="py-3.5 px-3 font-semibold">Category</th>
                      <th className="py-3.5 px-3 font-semibold">Current Stock</th>
                      <th className="py-3.5 px-3 font-semibold">Status</th>
                      <th className="py-3.5 px-3 font-semibold">Location</th>
                      <th className="py-3.5 pr-5 pl-2 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {inventoryData.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50/70 transition group">
                        <td className="py-3.5 pl-5 pr-2">
                          <input
                            type="checkbox"
                            checked={selectedIds.includes(item.id)}
                            onChange={() => toggleSelectItem(item.id)}
                            className="rounded border-gray-300 text-[#DF1927] focus:ring-[#DF1927]"
                          />
                        </td>

                        {/* Product */}
                        <td className="py-3.5 px-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-10 h-10 rounded-xl object-contain bg-gray-50 border border-gray-100 p-1"
                            />
                            <div>
                              <div className="font-bold text-gray-900 leading-snug">{item.name}</div>
                              <div className="text-[11px] text-gray-400">{item.variant}</div>
                            </div>
                          </div>
                        </td>

                        {/* SKU */}
                        <td className="py-3.5 px-3 font-medium text-gray-500">{item.sku}</td>

                        {/* Category */}
                        <td className="py-3.5 px-3 text-gray-600">{item.category}</td>

                        {/* Current Stock */}
                        <td className="py-3.5 px-3 font-bold text-gray-900">{item.currentStock}</td>

                        {/* Status */}
                        <td className="py-3.5 px-3">
                          {item.status === 'In Stock' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                              In Stock
                            </span>
                          )}
                          {item.status === 'Low Stock' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                              Low Stock
                            </span>
                          )}
                          {item.status === 'Out of Stock' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-red-50 text-red-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                              Out of Stock
                            </span>
                          )}
                        </td>

                        {/* Location */}
                        <td className="py-3.5 px-3 text-gray-600">{item.location}</td>

                        {/* Actions */}
                        <td className="py-3.5 pr-5 pl-2 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedProductForAction(item)
                                setShowAddStockModal(true)
                              }}
                              className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition"
                              title="Edit Stock"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition"
                            >
                              <MoreVertical className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-6 py-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                <div>Showing 1 to 10 of 320 products</div>
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
                    32
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
              {/* 1. STOCK DISTRIBUTION DONUT */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <h2 className="text-base font-bold text-gray-900 mb-4">Stock Distribution</h2>

                <div className="flex items-center justify-center py-2">
                  <div className="relative w-44 h-44 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      {/* Gray track */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        stroke="#F1F5F9"
                        strokeWidth="12"
                        fill="transparent"
                      />
                      {/* Green: In Stock (82%) -> circumference ~ 238.76, 82% = 195.78 */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        stroke="#10B981"
                        strokeWidth="12"
                        strokeDasharray="195.78 238.76"
                        strokeDashoffset="0"
                        fill="transparent"
                      />
                      {/* Yellow: Low Stock (12%) -> 12% = 28.65, offset = -195.78 */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        stroke="#F59E0B"
                        strokeWidth="12"
                        strokeDasharray="28.65 238.76"
                        strokeDashoffset="-195.78"
                        fill="transparent"
                      />
                      {/* Red: Out of Stock (6%) -> 6% = 14.33, offset = -224.43 */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        stroke="#EF4444"
                        strokeWidth="12"
                        strokeDasharray="14.33 238.76"
                        strokeDashoffset="-224.43"
                        fill="transparent"
                      />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-xl font-black text-gray-900 tracking-tight">1,248</span>
                      <span className="text-[10px] text-gray-500 font-medium">Total Stock</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      <span className="text-gray-600">In Stock</span>
                    </div>
                    <span className="font-semibold text-gray-900">1,028 (82%)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      <span className="text-gray-600">Low Stock</span>
                    </div>
                    <span className="font-semibold text-gray-900">148 (12%)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                      <span className="text-gray-600">Out of Stock</span>
                    </div>
                    <span className="font-semibold text-gray-900">72 (6%)</span>
                  </div>
                </div>
              </div>

              {/* 2. TOP LOW STOCK PRODUCTS */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">📍</span>
                    <h2 className="text-base font-bold text-gray-900">Top Low Stock Products</h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedStatus('Low Stock')}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      name: 'Apple AirPods Pro',
                      left: '18 left',
                      image: cartAirpods,
                    },
                    {
                      name: 'Fastrack Backpack',
                      left: '12 left',
                      image: cartLuggage,
                    },
                    {
                      name: 'Wireless Charger',
                      left: '8 left',
                      image: cartCharger,
                    },
                    {
                      name: 'Adidas Running Shoes',
                      left: '15 left',
                      image: cartBlueShoes,
                    },
                  ].map((prod, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setSelectedProductForAction(
                          inventoryData.find((item) => item.name === prod.name) || null
                        )
                        setShowAddStockModal(true)
                      }}
                      className="p-2.5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200 transition flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-9 h-9 rounded-xl object-contain bg-white border border-gray-100 p-0.5"
                        />
                        <div>
                          <div className="text-xs font-bold text-gray-900 group-hover:text-[#DF1927] transition">
                            {prod.name}
                          </div>
                          <div className="text-[11px] text-amber-600 font-semibold">{prod.left}</div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-700 transition" />
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. QUICK ACTIONS */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-red-500 font-bold">⚡</span>
                  <h2 className="text-base font-bold text-gray-900">Quick Actions</h2>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <button
                    type="button"
                    onClick={() => setShowAddStockModal(true)}
                    className="p-3 bg-red-50/60 hover:bg-red-50 text-gray-800 font-semibold rounded-2xl flex items-center gap-2 border border-red-100 transition shadow-sm"
                  >
                    <div className="w-7 h-7 rounded-xl bg-white text-[#DF1927] flex items-center justify-center shadow-xs">
                      <Plus className="w-3.5 h-3.5" />
                    </div>
                    <span>Add Stock</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowTransferModal(true)}
                    className="p-3 bg-blue-50/60 hover:bg-blue-50 text-gray-800 font-semibold rounded-2xl flex items-center gap-2 border border-blue-100 transition shadow-sm"
                  >
                    <div className="w-7 h-7 rounded-xl bg-white text-blue-600 flex items-center justify-center shadow-xs">
                      <ArrowUpDown className="w-3.5 h-3.5" />
                    </div>
                    <span>Stock Transfer</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toast.success('Stock report downloaded successfully')}
                    className="p-3 bg-emerald-50/60 hover:bg-emerald-50 text-gray-800 font-semibold rounded-2xl flex items-center gap-2 border border-emerald-100 transition shadow-sm"
                  >
                    <div className="w-7 h-7 rounded-xl bg-white text-emerald-600 flex items-center justify-center shadow-xs">
                      <FileText className="w-3.5 h-3.5" />
                    </div>
                    <span>Stock Report</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toast.info('Low Stock Alert thresholds configured')}
                    className="p-3 bg-purple-50/60 hover:bg-purple-50 text-gray-800 font-semibold rounded-2xl flex items-center gap-2 border border-purple-100 transition shadow-sm"
                  >
                    <div className="w-7 h-7 rounded-xl bg-white text-purple-600 flex items-center justify-center shadow-xs">
                      <Bell className="w-3.5 h-3.5" />
                    </div>
                    <span>Low Stock Alerts</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* ADD STOCK MODAL */}
      {showAddStockModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl w-full max-w-md p-6 shadow-2xl border border-gray-100">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <h3 className="text-base font-bold text-gray-900">Add Stock to Product</h3>
              <button
                type="button"
                onClick={() => setShowAddStockModal(false)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-700 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddStockSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Select Product
                </label>
                <select
                  defaultValue={selectedProductForAction?.id || '1'}
                  className="w-full px-3.5 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927]"
                >
                  {inventoryData.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name} ({item.sku}) - Current: {item.currentStock}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Quantity to Add
                </label>
                <input
                  type="number"
                  min="1"
                  value={stockQty}
                  onChange={(e) => setStockQty(e.target.value)}
                  placeholder="e.g. 50"
                  className="w-full px-3.5 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Target Warehouse
                </label>
                <select className="w-full px-3.5 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927]">
                  <option>Main Warehouse (Noida)</option>
                  <option>Secondary Warehouse (Bengaluru)</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddStockModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#DF1927] hover:bg-[#c01420] rounded-xl shadow-sm transition"
                >
                  Add Stock
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* STOCK TRANSFER MODAL */}
      {showTransferModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl w-full max-w-md p-6 shadow-2xl border border-gray-100">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <h3 className="text-base font-bold text-gray-900">Inter-Warehouse Stock Transfer</h3>
              <button
                type="button"
                onClick={() => setShowTransferModal(false)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-700 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4 space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">From Warehouse</label>
                <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl">
                  <option>Main Warehouse (Noida)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">To Warehouse</label>
                <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl">
                  <option>Secondary Warehouse (Bengaluru)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">Product</label>
                <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl">
                  {inventoryData.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name} - Available: {item.currentStock}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">Quantity</label>
                <input
                  type="number"
                  placeholder="e.g. 20"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowTransferModal(false)}
                  className="px-4 py-2 font-semibold text-gray-600 hover:bg-gray-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    toast.success('Stock transfer initiated')
                    setShowTransferModal(false)
                  }}
                  className="px-5 py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm"
                >
                  Initiate Transfer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
