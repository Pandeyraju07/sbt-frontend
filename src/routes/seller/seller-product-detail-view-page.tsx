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
  Settings,
  HelpCircle,
  Crown,
  ChevronRight,
  Eye,
  Copy,
  Trash2,
  Edit2,
  Star,
  Share2,
  FileText,
} from 'lucide-react'
import { toast } from 'sonner'
import { SbtLogo } from '@/components/sbt-logo'
import { ROUTES } from '@/constants/routes'

import cartIphone from '@/assets/premium/iphone15-black.jpg'
import iphonePink from '@/assets/premium/iphone15-pink.jpg'
import iphoneBlue from '@/assets/premium/iphone15-blue.jpg'
import iphoneGreen from '@/assets/premium/iphone15-green.jpg'

const customerAvatars = {
  dhiraj: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
}

export const SellerProductDetailViewPage: React.FC = () => {
  const navigate = useNavigate()
  useParams<{ id: string }>()
  const [activeTab, setActiveTab] = useState('Overview')
  const [isActive, setIsActive] = useState(true)

  // Selected variations
  const [selectedColor, setSelectedColor] = useState('Black')
  const [selectedStorage, setSelectedStorage] = useState('128GB')

  // Visibility toggles
  const [visibility, setVisibility] = useState({
    storefront: true,
    searchResults: true,
    customerReviews: true,
    featured: false,
  })

  // Selected main image
  const [mainImage, setMainImage] = useState(cartIphone)

  const galleryImages = [
    { name: 'Black', src: cartIphone },
    { name: 'Blue', src: iphoneBlue },
    { name: 'Pink', src: iphonePink },
    { name: 'Green', src: iphoneGreen },
  ]

  const tabs = [
    'Overview',
    'Images & Media',
    'Pricing & Inventory',
    'Specifications',
    'Variations (3)',
    'SEO',
    'Reviews (124)',
    'Related Products',
  ]

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

                <div className="pl-9 pr-3 py-1.5 space-y-1 text-xs">
                  <Link
                    to={ROUTES.sellerProducts}
                    className="block py-1.5 px-2 font-medium text-[#DF1927] hover:bg-red-50/50 rounded-lg transition"
                  >
                    All Products
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
                    Brand Management
                  </Link>
                  <Link
                    to={ROUTES.sellerProducts}
                    className="block py-1.5 px-2 font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition"
                  >
                    Attributes
                  </Link>
                  <Link
                    to={ROUTES.sellerProducts}
                    className="block py-1.5 px-2 font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition"
                  >
                    Bulk Upload
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
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link to={ROUTES.sellerProducts} className="hover:text-gray-800 transition">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#DF1927] font-semibold">Product Details</span>
          </div>

          {/* TOP HEADER CARD */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                  iPhone 15 (128GB)
                </h1>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Active
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-gray-500">
                <span>SKU: IP15-128</span>
                <span className="text-gray-300">|</span>
                <span>Brand: Apple</span>
                <span className="text-gray-300">|</span>
                <span>Category: Mobiles</span>
                <span className="text-gray-300">|</span>
                <span>Added on: 12 Sep 2025, 10:30 AM</span>
              </div>
            </div>

            {/* Header Action Buttons */}
            <div className="flex items-center gap-3">
              <Link
                to={ROUTES.productIphone}
                target="_blank"
                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm transition"
              >
                <Eye className="w-3.5 h-3.5 text-gray-600" />
                <span>View on Store</span>
              </Link>

              <button
                type="button"
                onClick={() => toast.success('Product duplicated successfully as draft')}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm transition"
              >
                <Copy className="w-3.5 h-3.5 text-gray-600" />
                <span>Duplicate</span>
              </button>

              <button
                type="button"
                onClick={() => toast.error('Are you sure you want to delete this product?')}
                className="px-4 py-2 bg-white border border-red-200 text-red-600 hover:bg-red-50 text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm transition"
              >
                <Trash2 className="w-3.5 h-3.5 text-red-500" />
                <span>Delete</span>
              </button>

              <button
                type="button"
                onClick={() => toast.success('Product changes saved successfully')}
                className="px-5 py-2 bg-[#DF1927] hover:bg-[#c01420] text-white text-xs font-semibold rounded-xl shadow-sm shadow-red-200 transition"
              >
                Save Changes
              </button>
            </div>
          </div>

          {/* TAB BAR */}
          <div className="border-b border-gray-200">
            <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-xs font-semibold border-b-2 transition whitespace-nowrap ${
                    activeTab === tab
                      ? 'border-[#DF1927] text-[#DF1927]'
                      : 'border-transparent text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* 2 COLUMN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* LEFT 8 COLUMNS */}
            <div className="lg:col-span-8 space-y-6">
              {/* 1. PRODUCT INFORMATION CARD */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                  <h2 className="text-base font-bold text-gray-900">Product Information</h2>
                  <button
                    type="button"
                    onClick={() => navigate(ROUTES.sellerEditProduct)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl transition"
                  >
                    <Edit2 className="w-3.5 h-3.5 text-gray-500" />
                    <span>Edit</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Product Image & Gallery */}
                  <div className="md:col-span-5 space-y-3">
                    <div className="bg-gray-50 rounded-2xl border border-gray-100 p-4 flex items-center justify-center">
                      <img
                        src={mainImage}
                        alt="Product Showcase"
                        className="w-48 h-56 object-contain"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      {galleryImages.map((img, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setMainImage(img.src)}
                          className={`w-12 h-14 rounded-xl border p-1 bg-white flex items-center justify-center transition ${
                            mainImage === img.src
                              ? 'border-[#DF1927] ring-2 ring-red-100'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <img
                            src={img.src}
                            alt={img.name}
                            className="w-full h-full object-contain"
                          />
                        </button>
                      ))}
                      <div className="w-12 h-14 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 font-semibold text-xs flex items-center justify-center">
                        +2
                      </div>
                    </div>
                  </div>

                  {/* Attributes list */}
                  <div className="md:col-span-7 space-y-3.5 text-xs">
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-gray-400">Product Name</span>
                      <span className="col-span-2 font-bold text-gray-900 text-sm">
                        iPhone 15 (128GB)
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-gray-400">Brand</span>
                      <span className="col-span-2 font-semibold text-gray-900">Apple</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-gray-400">Category</span>
                      <span className="col-span-2 font-medium text-gray-800">
                        Mobiles &gt; Smartphones
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-gray-400">SKU</span>
                      <span className="col-span-2 font-semibold text-gray-900">IP15-128</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-gray-400">HSN Code</span>
                      <span className="col-span-2 font-medium text-gray-800">85171290</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-gray-400">Condition</span>
                      <span className="col-span-2 font-medium text-gray-800">New</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-100">
                      <span className="text-gray-400">Description</span>
                      <p className="col-span-2 text-gray-600 leading-relaxed text-xs">
                        iPhone 15 features a stunning 6.1-inch Super Retina XDR display, powerful
                        A16 Bionic chip, advanced dual-camera system, and all-day battery life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. PRICING & INVENTORY CARD */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                  <h2 className="text-base font-bold text-gray-900">Pricing & Inventory</h2>
                  <button
                    type="button"
                    onClick={() => navigate(ROUTES.sellerEditProduct)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl transition"
                  >
                    <Edit2 className="w-3.5 h-3.5 text-gray-500" />
                    <span>Edit</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs mb-4">
                  <div>
                    <label className="block text-gray-400 mb-1">Selling Price (₹)</label>
                    <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-200 font-bold text-gray-900">
                      79900
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-1">MRP (₹)</label>
                    <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-200 font-bold text-gray-900">
                      79900
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-1">Discount (%)</label>
                    <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-200 font-bold text-gray-900">
                      0
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-1">Tax Rate</label>
                    <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-200 font-semibold text-gray-900 flex items-center justify-between">
                      <span>18% (GST)</span>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-xs pt-3 border-t border-gray-100">
                  <div>
                    <span className="text-gray-400 block mb-1">Current Stock</span>
                    <span className="text-base font-bold text-gray-900">45</span>
                  </div>

                  <div>
                    <span className="text-gray-400 block mb-1">Low Stock Alert</span>
                    <span className="text-base font-bold text-gray-900">10</span>
                  </div>

                  <div>
                    <span className="text-gray-400 block mb-1">Stock Status</span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      In Stock
                    </span>
                  </div>
                </div>
              </div>

              {/* 3. VARIATIONS CARD */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                  <h2 className="text-base font-bold text-gray-900">Variations</h2>
                  <button
                    type="button"
                    onClick={() => navigate(ROUTES.sellerEditProduct)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl transition"
                  >
                    <Edit2 className="w-3.5 h-3.5 text-gray-500" />
                    <span>Edit</span>
                  </button>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-center gap-4">
                    <span className="w-16 font-medium text-gray-400">Color</span>
                    <div className="flex flex-wrap items-center gap-2">
                      {['Black', 'Blue', 'Green', 'Pink', 'Yellow'].map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setSelectedColor(c)}
                          className={`px-4 py-1.5 rounded-full font-medium transition ${
                            selectedColor === c
                              ? 'border-2 border-blue-500 bg-white text-gray-900 font-semibold shadow-xs'
                              : 'border border-gray-200 bg-gray-50 text-gray-600 hover:bg-white'
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="w-16 font-medium text-gray-400">Storage</span>
                    <div className="flex flex-wrap items-center gap-2">
                      {['128GB', '256GB', '512GB'].map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSelectedStorage(s)}
                          className={`px-4 py-1.5 rounded-full font-medium transition ${
                            selectedStorage === s
                              ? 'border-2 border-blue-500 bg-white text-gray-900 font-semibold shadow-xs'
                              : 'border border-gray-200 bg-gray-50 text-gray-600 hover:bg-white'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT 4 COLUMNS */}
            <div className="lg:col-span-4 space-y-6">
              {/* 1. PRODUCT STATUS */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <h2 className="text-base font-bold text-gray-900">Product Status</h2>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Active
                    </span>
                    {/* Toggle Switch */}
                    <button
                      type="button"
                      onClick={() => setIsActive(!isActive)}
                      className={`w-11 h-6 flex items-center rounded-full p-1 transition duration-300 ${
                        isActive ? 'bg-emerald-500' : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition duration-300 ${
                          isActive ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      ></div>
                    </button>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-gray-700 mb-2">Visibility</div>
                  <div className="space-y-2 text-xs">
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={visibility.storefront}
                        onChange={(e) =>
                          setVisibility({ ...visibility, storefront: e.target.checked })
                        }
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">Show on Storefront</span>
                    </label>

                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={visibility.searchResults}
                        onChange={(e) =>
                          setVisibility({ ...visibility, searchResults: e.target.checked })
                        }
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">Show in Search Results</span>
                    </label>

                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={visibility.customerReviews}
                        onChange={(e) =>
                          setVisibility({ ...visibility, customerReviews: e.target.checked })
                        }
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">Allow Customer Reviews</span>
                    </label>

                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={visibility.featured}
                        onChange={(e) =>
                          setVisibility({ ...visibility, featured: e.target.checked })
                        }
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">Featured Product</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* 2. PRODUCT PERFORMANCE */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
                  <h2 className="text-base font-bold text-gray-900">Product Performance</h2>
                  <select className="px-2.5 py-1 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-600 font-medium">
                    <option>Last 30 Days</option>
                    <option>Last 7 Days</option>
                    <option>All Time</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  {/* Views */}
                  <div className="p-3.5 bg-blue-50/50 rounded-2xl border border-blue-100/60">
                    <div className="flex items-center justify-between mb-1">
                      <Eye className="w-4 h-4 text-blue-500" />
                      <span className="text-[11px] font-semibold text-emerald-600">↗ 28%</span>
                    </div>
                    <div className="text-lg font-bold text-gray-900 leading-tight">5,240</div>
                    <div className="text-[10px] text-gray-500">Views</div>
                  </div>

                  {/* Orders */}
                  <div className="p-3.5 bg-emerald-50/50 rounded-2xl border border-emerald-100/60">
                    <div className="flex items-center justify-between mb-1">
                      <ShoppingBag className="w-4 h-4 text-emerald-500" />
                      <span className="text-[11px] font-semibold text-emerald-600">↗ 18%</span>
                    </div>
                    <div className="text-lg font-bold text-gray-900 leading-tight">320</div>
                    <div className="text-[10px] text-gray-500">Orders</div>
                  </div>

                  {/* Revenue */}
                  <div className="p-3.5 bg-amber-50/50 rounded-2xl border border-amber-100/60">
                    <div className="flex items-center justify-between mb-1">
                      <CreditCard className="w-4 h-4 text-amber-500" />
                      <span className="text-[11px] font-semibold text-emerald-600">↗ 24%</span>
                    </div>
                    <div className="text-base font-bold text-gray-900 leading-tight">
                      ₹16,99,680
                    </div>
                    <div className="text-[10px] text-gray-500">Revenue</div>
                  </div>

                  {/* Rating */}
                  <div className="p-3.5 bg-purple-50/50 rounded-2xl border border-purple-100/60">
                    <div className="flex items-center justify-between mb-1">
                      <Star className="w-4 h-4 text-purple-500 fill-purple-400" />
                      <span className="text-[10px] text-gray-400">(124)</span>
                    </div>
                    <div className="text-lg font-bold text-gray-900 leading-tight">4.6</div>
                    <div className="flex text-amber-400 mt-0.5">
                      <Star className="w-2.5 h-2.5 fill-amber-400" />
                      <Star className="w-2.5 h-2.5 fill-amber-400" />
                      <Star className="w-2.5 h-2.5 fill-amber-400" />
                      <Star className="w-2.5 h-2.5 fill-amber-400" />
                      <Star className="w-2.5 h-2.5 fill-amber-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. QUICK ACTIONS */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <h2 className="text-base font-bold text-gray-900 mb-3">Quick Actions</h2>

                <div className="space-y-1 text-xs">
                  <Link
                    to={ROUTES.productIphone}
                    target="_blank"
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 text-gray-700 transition group"
                  >
                    <div className="flex items-center gap-3">
                      <Eye className="w-4 h-4 text-red-500" />
                      <span className="group-hover:text-gray-900 font-medium">
                        View Product on Store
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.origin + ROUTES.productIphone)
                      toast.success('Product link copied to clipboard!')
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 text-gray-700 transition group text-left"
                  >
                    <div className="flex items-center gap-3">
                      <Copy className="w-4 h-4 text-blue-500" />
                      <span className="group-hover:text-gray-900 font-medium">
                        Copy Product Link
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      window.open(
                        `https://api.whatsapp.com/send?text=Check out iPhone 15 on SBT: ${window.location.origin}${ROUTES.productIphone}`,
                        '_blank'
                      )
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 text-gray-700 transition group text-left"
                  >
                    <div className="flex items-center gap-3">
                      <Share2 className="w-4 h-4 text-emerald-500" />
                      <span className="group-hover:text-gray-900 font-medium">
                        Share on WhatsApp
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>

                  <button
                    type="button"
                    onClick={() => toast.success('Similar product clone draft created!')}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 text-gray-700 transition group text-left"
                  >
                    <div className="flex items-center gap-3">
                      <Copy className="w-4 h-4 text-blue-600" />
                      <span className="group-hover:text-gray-900 font-medium">
                        Create Similar Product
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>

                  <button
                    type="button"
                    onClick={() => toast.info('Product moved to draft')}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 text-gray-700 transition group text-left"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-blue-500" />
                      <span className="group-hover:text-gray-900 font-medium">Move to Draft</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>

                  <button
                    type="button"
                    onClick={() => toast.error('Product deleted')}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-red-50 text-red-600 transition group text-left"
                  >
                    <div className="flex items-center gap-3">
                      <Trash2 className="w-4 h-4 text-red-500" />
                      <span className="font-semibold">Delete Product</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-red-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
