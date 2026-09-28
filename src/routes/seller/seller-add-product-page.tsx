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
  UploadCloud,
  X,
  Plus,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link2,
  Bookmark,
  ArrowRight,
  FolderOpen,
  DollarSign,
  Image as ImageIcon,
} from 'lucide-react'
import { toast } from 'sonner'
import { SbtLogo } from '@/components/sbt-logo'
import { ROUTES } from '@/constants/routes'

import cartIphone from '@/assets/premium/iphone15-black.jpg'

const customerAvatars = {
  dhiraj: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
}

export const SellerAddProductPage: React.FC = () => {
  const navigate = useNavigate()

  // Form States matching Mockup 4
  const [productName, setProductName] = useState('iPhone 15 (128GB)')
  const [shortDesc, setShortDesc] = useState(
    'Latest iPhone 15 with A16 Bionic chip, stunning display and advanced camera system.'
  )
  const [detailedDesc, setDetailedDesc] = useState(
    'Experience the power of iPhone 15 with A16 Bionic chip, 6.1-inch Super Retina XDR display, advanced dual-camera system, and all-day battery life. Comes with latest iOS features and premium design.'
  )

  const [category, setCategory] = useState('Mobiles & Tablets > Mobile Phones')
  const [brand, setBrand] = useState('Apple')
  const [model, setModel] = useState('iPhone 15')
  const [sku, setSku] = useState('IP15-128-BLK')
  const [hsn, setHsn] = useState('8517')

  const [sellingPrice, setSellingPrice] = useState('79900')
  const [mrp, setMrp] = useState('82900')
  const [discount, setDiscount] = useState('3.61')
  const [tax, setTax] = useState('18% GST')

  const [trackInventory, setTrackInventory] = useState(true)
  const [stockQuantity, setStockQuantity] = useState('24')
  const [minStockAlert, setMinStockAlert] = useState('5')
  const [condition, setCondition] = useState('New')
  const [warranty, setWarranty] = useState('12')

  const [isFeatured, setIsFeatured] = useState(true)
  const [allowCod, setAllowCod] = useState(false)
  const [returnAvailable, setReturnAvailable] = useState(false)

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Product published successfully!')
    navigate(ROUTES.sellerProductSuccess)
  }

  const handleSaveDraft = () => {
    toast.info('Product saved as draft')
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

                {/* Submenu matching Mockup 4 */}
                <div className="pl-9 pr-3 py-1.5 space-y-1 text-xs">
                  <Link
                    to={ROUTES.sellerProducts}
                    className="block py-1.5 px-2 font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition"
                  >
                    Product List
                  </Link>
                  <Link
                    to={ROUTES.sellerAddProduct}
                    className="block py-1.5 px-2 font-medium text-[#DF1927] hover:bg-red-50/50 rounded-lg transition"
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
                  <Bookmark className="w-4 h-4 text-gray-500" />
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
          {/* Breadcrumb: Products > Add Product */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link to={ROUTES.sellerProducts} className="hover:text-gray-800 transition">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#DF1927] font-semibold">Add Product</span>
          </div>

          {/* Title and Subtitle */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Add Product</h1>
            <p className="text-xs text-gray-500 mt-1">
              List a new product in your catalogue. Fill in the details below.
            </p>
          </div>

          <form onSubmit={handlePublish}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* LEFT 7-8 COLUMNS */}
              <div className="lg:col-span-8 space-y-6">
                {/* CARD 1: Basic Information */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                    <Bookmark className="w-4 h-4 text-gray-700" />
                    <div>
                      <h2 className="text-sm font-bold text-gray-900">Basic Information</h2>
                      <p className="text-[11px] text-gray-500">
                        Provide the basic details about your product.
                      </p>
                    </div>
                  </div>

                  {/* Product Name */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-gray-700 mb-1.5">
                      <label>
                        Product Name <span className="text-red-500">*</span>
                      </label>
                      <span className="text-[11px] font-normal text-gray-400">
                        {productName.length}/100
                      </span>
                    </div>
                    <input
                      type="text"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      maxLength={100}
                      className="w-full px-3.5 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927] font-medium"
                      placeholder="e.g. iPhone 15 (128GB)"
                      required
                    />
                  </div>

                  {/* Short Description */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-gray-700 mb-1.5">
                      <label>
                        Short Description <span className="text-red-500">*</span>
                      </label>
                      <span className="text-[11px] font-normal text-gray-400">
                        {shortDesc.length}/200
                      </span>
                    </div>
                    <textarea
                      rows={2}
                      value={shortDesc}
                      onChange={(e) => setShortDesc(e.target.value)}
                      maxLength={200}
                      className="w-full p-3.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927] resize-none"
                      required
                    />
                  </div>

                  {/* Detailed Description with Rich Text Toolbar */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Detailed Description
                    </label>

                    {/* Toolbar matching Mockup 4 */}
                    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50">
                      <div className="bg-white border-b border-gray-200 p-2 flex items-center gap-3">
                        <select
                          className="text-xs bg-transparent text-gray-700 font-medium focus:outline-none cursor-pointer"
                          aria-label="Font format"
                        >
                          <option>Normal</option>
                          <option>Heading 1</option>
                          <option>Heading 2</option>
                        </select>
                        <div className="h-4 w-px bg-gray-200"></div>

                        <button
                          type="button"
                          className="p-1 hover:bg-gray-100 rounded text-gray-600 font-bold"
                          title="Bold"
                        >
                          <Bold className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          className="p-1 hover:bg-gray-100 rounded text-gray-600 italic"
                          title="Italic"
                        >
                          <Italic className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          className="p-1 hover:bg-gray-100 rounded text-gray-600 underline"
                          title="Underline"
                        >
                          <Underline className="w-3.5 h-3.5" />
                        </button>
                        <div className="h-4 w-px bg-gray-200"></div>

                        <button
                          type="button"
                          className="p-1 hover:bg-gray-100 rounded text-gray-600"
                          title="Bullet List"
                        >
                          <List className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          className="p-1 hover:bg-gray-100 rounded text-gray-600"
                          title="Numbered List"
                        >
                          <ListOrdered className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          className="p-1 hover:bg-gray-100 rounded text-gray-600"
                          title="Link"
                        >
                          <Link2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <textarea
                        rows={4}
                        value={detailedDesc}
                        onChange={(e) => setDetailedDesc(e.target.value)}
                        maxLength={2000}
                        className="w-full p-3.5 text-xs bg-gray-50 focus:outline-none focus:bg-white resize-none"
                      />
                      <div className="px-3 py-1.5 bg-gray-50 text-right text-[11px] text-gray-400 border-t border-gray-100">
                        {detailedDesc.length}/2000
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARD 2: Category & Brand */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                    <FolderOpen className="w-4 h-4 text-gray-700" />
                    <div>
                      <h2 className="text-sm font-bold text-gray-900">Category & Brand</h2>
                      <p className="text-[11px] text-gray-500">
                        Choose the right category and brand for your product.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927]"
                        aria-label="Select category"
                      >
                        <option>Mobiles & Tablets &gt; Mobile Phones</option>
                        <option>Laptops & Computers</option>
                        <option>Audio & Accessories</option>
                        <option>Wearable Technology</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Brand <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927]"
                        aria-label="Select brand"
                      >
                        <option>Apple</option>
                        <option>Samsung</option>
                        <option>Nike</option>
                        <option>Sony</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Model</label>
                      <input
                        type="text"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        SKU <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={sku}
                        onChange={(e) => setSku(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927]"
                        required
                      />
                      <span className="text-[10px] text-gray-400 mt-1 block">
                        Unique SKU for this product
                      </span>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        HSN Code
                      </label>
                      <input
                        type="text"
                        value={hsn}
                        onChange={(e) => setHsn(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927]"
                      />
                      <span className="text-[10px] text-gray-400 mt-1 block">
                        For tax and invoicing
                      </span>
                    </div>
                  </div>
                </div>

                {/* CARD 3: Pricing Information */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                    <DollarSign className="w-4 h-4 text-gray-700" />
                    <div>
                      <h2 className="text-sm font-bold text-gray-900">Pricing Information</h2>
                      <p className="text-[11px] text-gray-500">
                        Set the selling price and tax details.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Selling Price (₹) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={sellingPrice}
                        onChange={(e) => setSellingPrice(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927] font-bold"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">MRP (₹)</label>
                      <input
                        type="text"
                        value={mrp}
                        onChange={(e) => setMrp(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Discount (%)
                      </label>
                      <input
                        type="text"
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Tax Applicable <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={tax}
                        onChange={(e) => setTax(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927]"
                        aria-label="Select tax rate"
                      >
                        <option>18% GST</option>
                        <option>12% GST</option>
                        <option>5% GST</option>
                        <option>0% (Exempt)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT 4-5 COLUMNS */}
              <div className="lg:col-span-4 space-y-6">
                {/* CARD 1: Product Images */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                    <ImageIcon className="w-4 h-4 text-gray-700" />
                    <div>
                      <h2 className="text-sm font-bold text-gray-900">Product Images</h2>
                      <p className="text-[11px] text-gray-500">
                        Upload high quality images of your product.
                      </p>
                    </div>
                  </div>

                  {/* Dropzone */}
                  <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center bg-gray-50/50 hover:bg-gray-50 transition cursor-pointer">
                    <UploadCloud className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-xs font-bold text-gray-900">Click to upload images</div>
                    <div className="text-[11px] text-gray-500">or drag and drop</div>
                    <div className="text-[10px] text-gray-400 mt-1">
                      PNG, JPG, JPEG (Max 5MB each, up to 6 images)
                    </div>
                  </div>

                  {/* Thumbnails row */}
                  <div className="grid grid-cols-4 gap-2.5 pt-1">
                    {/* Primary */}
                    <div className="relative rounded-xl border-2 border-[#DF1927] p-1 bg-white">
                      <button
                        type="button"
                        onClick={() => toast.info('Removed primary image')}
                        className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-red-500 text-white flex items-center justify-center text-[10px]"
                        title="Remove image"
                      >
                        <X className="w-2.5 h-2.5" />
                      </button>
                      <img
                        src={cartIphone}
                        alt="Primary front"
                        className="w-full h-14 object-contain rounded-lg"
                      />
                      <span className="block text-center text-[9px] font-bold text-red-500 mt-0.5">
                        Primary
                      </span>
                    </div>

                    {/* Back */}
                    <div className="relative rounded-xl border border-gray-200 p-1 bg-gray-50">
                      <img
                        src={cartIphone}
                        alt="Back view"
                        className="w-full h-14 object-contain rounded-lg grayscale"
                      />
                    </div>

                    {/* Side */}
                    <div className="relative rounded-xl border border-gray-200 p-1 bg-gray-50">
                      <img
                        src={cartIphone}
                        alt="Side view"
                        className="w-full h-14 object-contain rounded-lg scale-75"
                      />
                    </div>

                    {/* Add More button */}
                    <div className="rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition cursor-pointer h-[74px]">
                      <Plus className="w-4 h-4" />
                      <span className="text-[9px] font-semibold mt-1">Add More</span>
                    </div>
                  </div>
                </div>

                {/* CARD 2: Inventory & Stock */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                    <Package className="w-4 h-4 text-gray-700" />
                    <div>
                      <h2 className="text-sm font-bold text-gray-900">Inventory & Stock</h2>
                      <p className="text-[11px] text-gray-500">
                        Manage your stock levels and inventory.
                      </p>
                    </div>
                  </div>

                  {/* Track inventory switch */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-800">Track Inventory</span>
                    <button
                      type="button"
                      onClick={() => setTrackInventory(!trackInventory)}
                      className={`w-11 h-6 flex items-center rounded-full p-1 transition duration-200 ease-in-out ${
                        trackInventory ? 'bg-[#DF1927]' : 'bg-gray-300'
                      }`}
                      aria-label="Toggle track inventory"
                    >
                      <div
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition duration-200 ease-in-out ${
                          trackInventory ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Stock Quantity <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={stockQuantity}
                        onChange={(e) => setStockQuantity(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Minimum Stock Alert
                      </label>
                      <input
                        type="text"
                        value={minStockAlert}
                        onChange={(e) => setMinStockAlert(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Condition <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={condition}
                        onChange={(e) => setCondition(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927]"
                        aria-label="Select condition"
                      >
                        <option>New</option>
                        <option>Refurbished</option>
                        <option>Used</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Warranty (Months)
                      </label>
                      <input
                        type="text"
                        value={warranty}
                        onChange={(e) => setWarranty(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#DF1927]"
                      />
                    </div>
                  </div>
                </div>

                {/* CARD 3: Additional Options */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-3.5">
                  <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                    <Settings className="w-4 h-4 text-gray-700" />
                    <h2 className="text-sm font-bold text-gray-900">Additional Options</h2>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isFeatured}
                      onChange={(e) => setIsFeatured(e.target.checked)}
                      className="mt-0.5 rounded border-gray-300 text-[#DF1927] focus:ring-[#DF1927]"
                    />
                    <div>
                      <div className="text-xs font-semibold text-gray-800">Featured Product</div>
                      <div className="text-[11px] text-gray-400 leading-snug">
                        Show this product on homepage and featured sections
                      </div>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={allowCod}
                      onChange={(e) => setAllowCod(e.target.checked)}
                      className="mt-0.5 rounded border-gray-300 text-[#DF1927] focus:ring-[#DF1927]"
                    />
                    <div>
                      <div className="text-xs font-semibold text-gray-800">
                        Allow Cash on Delivery
                      </div>
                      <div className="text-[11px] text-gray-400 leading-snug">
                        Enable COD for this product
                      </div>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={returnAvailable}
                      onChange={(e) => setReturnAvailable(e.target.checked)}
                      className="mt-0.5 rounded border-gray-300 text-[#DF1927] focus:ring-[#DF1927]"
                    />
                    <div>
                      <div className="text-xs font-semibold text-gray-800">Return Available</div>
                      <div className="text-[11px] text-gray-400 leading-snug">
                        Allow easy returns for this product
                      </div>
                    </div>
                  </label>
                </div>

                {/* ACTION BUTTONS (Mockup 4) */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleSaveDraft}
                    className="flex-1 py-2.5 px-4 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm transition"
                  >
                    <Bookmark className="w-3.5 h-3.5 text-gray-500" />
                    <span>Save as Draft</span>
                  </button>

                  <button
                    type="submit"
                    className="flex-1 py-2.5 px-4 bg-[#DF1927] hover:bg-[#c01420] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 shadow-sm shadow-red-200 transition"
                  >
                    <span>Publish Product</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}
