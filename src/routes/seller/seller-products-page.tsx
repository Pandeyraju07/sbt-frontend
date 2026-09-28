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
  Settings,
  HelpCircle,
  Crown,
  ChevronRight,
  Plus,
  MoreVertical,
  ChevronLeft,
  ArrowRight,
  Upload,
  Download,
  Filter,
  RotateCcw,
  FileSpreadsheet,
  FileText,
  AlertCircle,
  Percent,
  Laptop,
  Smartphone,
  Headphones,
  Watch,
  Footprints,
} from 'lucide-react'
import { toast } from 'sonner'
import { SbtLogo } from '@/components/sbt-logo'
import { ROUTES } from '@/constants/routes'

import cartIphone from '@/assets/premium/iphone15-black.jpg'
import dealShoes from '@/assets/premium/deal-shoes.jpg'
import appleWatch from '@/assets/premium/apple-watch-s9.jpg'
import airpodsPro from '@/assets/premium/airpods-pro-2.jpg'
import dealLuggage from '@/assets/premium/deal-luggage.jpg'
import catFashion from '@/assets/premium/cat-fashion.jpg'
import sonyHeadphones from '@/assets/premium/sony-xm5.jpg'
import macbookAir from '@/assets/premium/macbook-m2.jpg'
import bottleImg from '@/assets/premium/acc-charger-20w.jpg'

const customerAvatars = {
  dhiraj: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
}

interface ProductItem {
  id: string
  name: string
  color: string
  sku: string
  category: string
  image: string
  price: string
  stock: number
  isLowStock?: boolean
  status: 'In Stock' | 'Low Stock' | 'Out of Stock'
}

export const SellerProductsPage: React.FC = () => {
  const navigate = useNavigate()
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [selectedBrand, setSelectedBrand] = useState('All Brands')
  const [selectedStatus, setSelectedStatus] = useState('All Status')
  const [currentPage, setCurrentPage] = useState(1)

  // 10 Products exactly matching Mockup 2
  const products: ProductItem[] = [
    {
      id: 'p-1',
      name: 'iPhone 15 (128GB)',
      color: 'Black',
      sku: 'IP15-128',
      category: 'Mobiles',
      image: cartIphone,
      price: '79,900',
      stock: 24,
      status: 'In Stock',
    },
    {
      id: 'p-2',
      name: 'Nike Air Max',
      color: 'White',
      sku: 'NK-AM-001',
      category: 'Footwear',
      image: dealShoes,
      price: '12,999',
      stock: 5,
      isLowStock: true,
      status: 'Low Stock',
    },
    {
      id: 'p-3',
      name: 'Apple Watch Series 9',
      color: 'Black',
      sku: 'AW-009',
      category: 'Wearables',
      image: appleWatch,
      price: '41,900',
      stock: 12,
      status: 'In Stock',
    },
    {
      id: 'p-4',
      name: 'AirPods Pro',
      color: 'White',
      sku: 'AP-PRO-001',
      category: 'Audio',
      image: airpodsPro,
      price: '24,900',
      stock: 0,
      isLowStock: true,
      status: 'Out of Stock',
    },
    {
      id: 'p-5',
      name: 'Premium Backpack',
      color: 'Black',
      sku: 'BP-001',
      category: 'Bags',
      image: dealLuggage,
      price: '4,999',
      stock: 40,
      status: 'In Stock',
    },
    {
      id: 'p-6',
      name: 'Cotton T-Shirt',
      color: 'Blue',
      sku: 'TS-002',
      category: 'Apparel',
      image: catFashion,
      price: '899',
      stock: 18,
      status: 'In Stock',
    },
    {
      id: 'p-7',
      name: 'Denim Jeans',
      color: 'Blue',
      sku: 'DJ-005',
      category: 'Apparel',
      image: catFashion,
      price: '1,499',
      stock: 7,
      isLowStock: true,
      status: 'Low Stock',
    },
    {
      id: 'p-8',
      name: 'Sony Headphones',
      color: 'Black',
      sku: 'SH-007',
      category: 'Audio',
      image: sonyHeadphones,
      price: '8,999',
      stock: 0,
      isLowStock: true,
      status: 'Out of Stock',
    },
    {
      id: 'p-9',
      name: 'Smart Water Bottle',
      color: 'White',
      sku: 'WB-003',
      category: 'Lifestyle',
      image: bottleImg,
      price: '1,299',
      stock: 56,
      status: 'In Stock',
    },
    {
      id: 'p-10',
      name: 'MacBook Air M2',
      color: 'Silver',
      sku: 'MBA-M2',
      category: 'Laptops',
      image: macbookAir,
      price: '99,900',
      stock: 6,
      isLowStock: true,
      status: 'Low Stock',
    },
  ]

  // Top Performing Products matching Mockup 2
  const topPerforming = [
    {
      rank: 1,
      name: 'iPhone 15 (128GB)',
      sold: '120 sold',
      revenue: '₹95,88,000',
      image: cartIphone,
    },
    {
      rank: 2,
      name: 'Nike Air Max',
      sold: '98 sold',
      revenue: '₹12,73,902',
      image: dealShoes,
    },
    {
      rank: 3,
      name: 'Apple Watch Series 9',
      sold: '76 sold',
      revenue: '₹31,84,000',
      image: appleWatch,
    },
    {
      rank: 4,
      name: 'Premium Backpack',
      sold: '65 sold',
      revenue: '₹3,24,935',
      image: dealLuggage,
    },
    {
      rank: 5,
      name: 'Sony Headphones',
      sold: '52 sold',
      revenue: '₹4,67,948',
      image: sonyHeadphones,
    },
  ]

  // Categories matching Mockup 2
  const categoryStats = [
    { name: 'Mobiles & Tablets', count: 48, icon: Smartphone },
    { name: 'Laptops', count: 22, icon: Laptop },
    { name: 'Audio & Headphones', count: 34, icon: Headphones },
    { name: 'Wearables', count: 18, icon: Watch },
    { name: 'Footwear', count: 26, icon: Footprints },
  ]

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedIds(products.map((p) => p.id))
    } else {
      setSelectedIds([])
    }
  }

  const handleToggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === 'All Categories' || p.category === selectedCategory
    const matchesStatus =
      selectedStatus === 'All Status' || p.status === selectedStatus
    return matchesSearch && matchesCategory && matchesStatus
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

              {/* Products (Active) */}
              <div className="pt-0.5">
                <Link
                  to={ROUTES.sellerProducts}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-[#DF1927] bg-red-50 border-l-4 border-[#DF1927] transition"
                >
                  <div className="flex items-center gap-3">
                    <Package className="w-4 h-4 text-[#DF1927]" />
                    <span>Products</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-[#DF1927]" />
                </Link>

                {/* Submenu matching mockup */}
                <div className="pl-9 pr-3 py-1.5 space-y-1 text-xs">
                  <Link
                    to={ROUTES.sellerProducts}
                    className="block py-1.5 px-2 font-medium text-[#DF1927] hover:bg-red-50/50 rounded-lg transition"
                  >
                    Product List
                  </Link>
                  <Link
                    to={ROUTES.sellerAddProduct}
                    className="block py-1.5 px-2 font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition"
                  >
                    Add Product
                  </Link>
                  <Link
                    to={ROUTES.sellerProducts}
                    className="block py-1.5 px-2 font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition"
                  >
                    Categories
                  </Link>
                  <Link
                    to={ROUTES.sellerProducts}
                    className="block py-1.5 px-2 font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition"
                  >
                    Brands
                  </Link>
                  <Link
                    to={ROUTES.sellerInventory}
                    className="block py-1.5 px-2 font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition"
                  >
                    Inventory
                  </Link>
                  <Link
                    to={ROUTES.sellerProducts}
                    className="block py-1.5 px-2 font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition"
                  >
                    Attributes
                  </Link>
                </div>
              </div>

              <Link
                to={ROUTES.sellerInventory}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
              >
                <Layers className="w-4 h-4 text-gray-500" />
                <span>Inventory</span>
              </Link>

              <Link
                to={ROUTES.sellerCustomers}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span>Customers</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>

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
          {/* Breadcrumb matching Mockup 2: Products > Product List */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link to={ROUTES.sellerProducts} className="hover:text-gray-800 transition">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#DF1927] font-semibold">Product List</span>
          </div>

          {/* Header Row matching Mockup 2 */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Products</h1>
              <p className="text-xs text-gray-500 mt-1">
                Manage your product catalogue, update stock, prices and more.
              </p>
            </div>

            {/* Top Right Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => toast.info('Import products template')}
                className="px-3.5 py-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm transition"
              >
                <Download className="w-3.5 h-3.5 text-gray-500" />
                <span>Import Products</span>
              </button>

              <button
                type="button"
                onClick={() => toast.success('Products exported to CSV')}
                className="px-3.5 py-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm transition"
              >
                <Upload className="w-3.5 h-3.5 text-gray-500" />
                <span>Export</span>
              </button>

              <Link
                to={ROUTES.sellerAddProduct}
                className="px-4 py-2 bg-[#DF1927] hover:bg-[#c01420] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-sm shadow-red-200 transition"
              >
                <Plus className="w-4 h-4" />
                <span>Add Product</span>
              </Link>
            </div>
          </div>

          {/* 5 KPI METRIC CARDS (Mockup 2) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* 1. Total Products */}
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium">Total Products</div>
                <div className="text-2xl font-bold text-gray-900 leading-tight mt-0.5">248</div>
                <div className="text-[11px] font-semibold text-emerald-600 mt-0.5">
                  ↗ 12% <span className="text-gray-400 font-normal">vs last month</span>
                </div>
              </div>
            </div>

            {/* 2. In Stock */}
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0">
                <ShoppingBag className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium">In Stock</div>
                <div className="text-2xl font-bold text-gray-900 leading-tight mt-0.5">186</div>
                <div className="text-[11px] font-semibold text-emerald-600 mt-0.5">↗ 8%</div>
              </div>
            </div>

            {/* 3. Low Stock */}
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0">
                <AlertCircle className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium">Low Stock</div>
                <div className="text-2xl font-bold text-gray-900 leading-tight mt-0.5">32</div>
                <div className="text-[11px] font-semibold text-red-500 mt-0.5">↘ 15%</div>
              </div>
            </div>

            {/* 4. Out of Stock */}
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                <Package className="w-6 h-6 text-[#DF1927]" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium">Out of Stock</div>
                <div className="text-2xl font-bold text-gray-900 leading-tight mt-0.5">18</div>
                <div className="text-[11px] font-semibold text-red-500 mt-0.5">↗ 6%</div>
              </div>
            </div>

            {/* 5. Draft Products */}
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0">
                <FileSpreadsheet className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium">Draft Products</div>
                <div className="text-2xl font-bold text-gray-900 leading-tight mt-0.5">12</div>
                <div className="text-[11px] font-semibold text-purple-600 mt-0.5">↗ 20%</div>
              </div>
            </div>
          </div>

          {/* FILTER BAR (Mockup 2) */}
          <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by name, SKU or category..."
                className="w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927] text-gray-600 font-medium"
                aria-label="Filter category"
              >
                <option>All Categories</option>
                <option>Mobiles</option>
                <option>Footwear</option>
                <option>Wearables</option>
                <option>Audio</option>
                <option>Bags</option>
                <option>Apparel</option>
                <option>Lifestyle</option>
                <option>Laptops</option>
              </select>

              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927] text-gray-600 font-medium"
                aria-label="Filter brand"
              >
                <option>All Brands</option>
                <option>Apple</option>
                <option>Nike</option>
                <option>Sony</option>
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927] text-gray-600 font-medium"
                aria-label="Filter status"
              >
                <option>All Status</option>
                <option>In Stock</option>
                <option>Low Stock</option>
                <option>Out of Stock</option>
              </select>

              <button
                type="button"
                className="px-3.5 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl text-gray-700 flex items-center gap-1.5 font-medium hover:bg-gray-100 transition"
              >
                <Filter className="w-3.5 h-3.5 text-gray-500" />
                <span>Filter</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All Categories')
                  setSelectedBrand('All Brands')
                  setSelectedStatus('All Status')
                }}
                className="px-3.5 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl text-gray-700 flex items-center gap-1.5 font-medium hover:bg-gray-100 transition"
              >
                <RotateCcw className="w-3.5 h-3.5 text-gray-500" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* TWO COLUMN GRID: Table (Left 8 cols) + Right Inspector (Right 4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* LEFT 8 COLUMNS: PRODUCTS TABLE */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm overflow-hidden space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-gray-100 text-gray-400 font-medium">
                      <th className="pb-3.5 pr-3 w-8">
                        <input
                          type="checkbox"
                          checked={
                            selectedIds.length === filteredProducts.length &&
                            filteredProducts.length > 0
                          }
                          onChange={handleSelectAll}
                          className="rounded border-gray-300 text-[#DF1927] focus:ring-[#DF1927]"
                          aria-label="Select all products"
                        />
                      </th>
                      <th className="pb-3.5 font-semibold">Product</th>
                      <th className="pb-3.5 font-semibold">SKU</th>
                      <th className="pb-3.5 font-semibold">Category</th>
                      <th className="pb-3.5 font-semibold">Price (₹)</th>
                      <th className="pb-3.5 font-semibold">Stock</th>
                      <th className="pb-3.5 font-semibold">Status</th>
                      <th className="pb-3.5 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredProducts.map((p) => (
                      <tr key={p.id} className="hover:bg-gray-50/70 transition group">
                        {/* Checkbox */}
                        <td className="py-3.5 pr-3">
                          <input
                            type="checkbox"
                            checked={selectedIds.includes(p.id)}
                            onChange={() => handleToggleSelect(p.id)}
                            className="rounded border-gray-300 text-[#DF1927] focus:ring-[#DF1927]"
                            aria-label={`Select ${p.name}`}
                          />
                        </td>

                        {/* Product Thumbnail & Name */}
                        <td className="py-3.5 pr-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={p.image}
                              alt={p.name}
                              className="w-10 h-10 rounded-xl object-contain bg-gray-50 border border-gray-100 p-0.5 shrink-0"
                            />
                            <div>
                              <div className="font-semibold text-gray-900 hover:text-[#DF1927] cursor-pointer transition">
                                {p.name}
                              </div>
                              <div className="text-[11px] text-gray-400">{p.color}</div>
                            </div>
                          </div>
                        </td>

                        {/* SKU */}
                        <td className="py-3.5 px-3 text-gray-600 font-medium">{p.sku}</td>

                        {/* Category */}
                        <td className="py-3.5 px-3 text-gray-600">{p.category}</td>

                        {/* Price */}
                        <td className="py-3.5 px-3 font-bold text-gray-900">{p.price}</td>

                        {/* Stock */}
                        <td className="py-3.5 px-3 font-semibold">
                          <span className={p.isLowStock ? 'text-red-500 font-bold' : 'text-gray-900'}>
                            {p.stock}
                          </span>
                        </td>

                        {/* Status */}
                        <td className="py-3.5 px-3">
                          {p.status === 'In Stock' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                              In Stock
                            </span>
                          )}
                          {p.status === 'Low Stock' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                              Low Stock
                            </span>
                          )}
                          {p.status === 'Out of Stock' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-red-50 text-red-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                              Out of Stock
                            </span>
                          )}
                        </td>

                        {/* Actions */}
                        <td className="py-3.5 pl-3 text-right">
                          <button
                            type="button"
                            onClick={() => navigate(ROUTES.sellerAddProduct)}
                            className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition"
                            title="Product options"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
                <div>Showing 1 to 10 of 248 products</div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 transition"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    className="w-8 h-8 rounded-lg bg-[#DF1927] text-white font-bold flex items-center justify-center shadow-xs"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700 flex items-center justify-center transition"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700 flex items-center justify-center transition"
                  >
                    3
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700 flex items-center justify-center transition"
                  >
                    4
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700 flex items-center justify-center transition"
                  >
                    5
                  </button>
                  <span className="px-1 text-gray-400">...</span>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700 flex items-center justify-center transition"
                  >
                    25
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => p + 1)}
                    className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-1.5">
                  <span>Show</span>
                  <select
                    className="px-2 py-1 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-700"
                    aria-label="Rows per page"
                  >
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                  </select>
                  <span>per page</span>
                </div>
              </div>
            </div>

            {/* RIGHT 4 COLUMNS: SIDEBAR CARDS */}
            <div className="lg:col-span-4 space-y-6">
              {/* Card 1: Categories */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-gray-700" />
                    <h3 className="text-sm font-bold text-gray-900">Categories</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => toast.info('Manage categories')}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition"
                  >
                    Manage Categories
                  </button>
                </div>

                <div className="space-y-3">
                  {categoryStats.map((c, i) => {
                    const Icon = c.icon
                    return (
                      <div
                        key={i}
                        className="flex items-center justify-between text-xs hover:bg-gray-50 p-2 rounded-xl transition cursor-pointer"
                        onClick={() => setSelectedCategory(c.name)}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4 text-gray-500" />
                          <span className="font-medium text-gray-700">{c.name}</span>
                        </div>
                        <span className="font-bold text-gray-900">{c.count}</span>
                      </div>
                    )
                  })}
                </div>

                <div className="pt-2 border-t border-gray-100 text-center">
                  <button
                    type="button"
                    onClick={() => toast.info('All categories list')}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition"
                  >
                    <span>View All Categories</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Card 2: Top Performing Products */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900">Top Performing Products</h3>
                  <select
                    className="px-2 py-1 text-[11px] bg-gray-50 border border-gray-200 rounded-lg text-gray-600 font-medium"
                    aria-label="Select timeframe"
                  >
                    <option>This Month</option>
                    <option>This Year</option>
                  </select>
                </div>

                <div className="space-y-3.5">
                  {topPerforming.map((item) => (
                    <div key={item.rank} className="flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="w-5 h-5 rounded-full bg-amber-50 text-amber-700 font-bold text-[11px] flex items-center justify-center shrink-0">
                          {item.rank}
                        </span>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-8 h-8 rounded-lg object-contain bg-gray-50 border border-gray-100 p-0.5 shrink-0"
                        />
                        <div className="min-w-0 truncate">
                          <div className="font-semibold text-gray-900 truncate">{item.name}</div>
                          <div className="text-[11px] text-gray-400">{item.sold}</div>
                        </div>
                      </div>
                      <div className="font-bold text-gray-900 shrink-0 text-right">
                        {item.revenue}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 3: Create Offers & Boost Sales Red Promo Card */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50/50 border border-red-100 rounded-3xl p-4 flex items-center justify-between gap-3 cursor-pointer hover:border-red-200 transition">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#DF1927] text-white flex items-center justify-center shrink-0 shadow-sm shadow-red-200">
                    <Percent className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Create Offers & Boost Sales</h4>
                    <p className="text-[11px] text-gray-600 mt-0.5">
                      Run exclusive deals to attract more customers.
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-red-500 shrink-0" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
