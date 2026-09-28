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
  ArrowLeft,
  ExternalLink,
  Copy,
  Save,
  Pencil,
  Upload,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link2,
  Box,
  LifeBuoy,
} from 'lucide-react'
import { toast } from 'sonner'
import { SbtLogo } from '@/components/sbt-logo'
import { ROUTES } from '@/constants/routes'

import cartIphone from '@/assets/premium/iphone15-blue.jpg'
import iphoneBlack from '@/assets/premium/iphone15-black.jpg'
import iphonePink from '@/assets/premium/iphone15-pink.jpg'
import iphoneYellow from '@/assets/premium/iphone15-yellow.jpg'

const dhirajAvatar =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80'

export const SellerEditProductPage: React.FC = () => {
  const navigate = useNavigate()

  // Form States matching Mockup 1
  const [productName, setProductName] = useState('iPhone 15 (128GB)')
  const [brand, setBrand] = useState('Apple')
  const [category, setCategory] = useState('Mobiles & Accessories')
  const [subCategory, setSubCategory] = useState('Smartphones')
  const [shortDesc, setShortDesc] = useState(
    'iPhone 15 featuring a powerful A16 Bionic chip, stunning display and advanced camera system.'
  )
  const [fullDesc, setFullDesc] = useState(
    'iPhone 15 comes with a 6.1-inch Super Retina XDR display, A16 Bionic chip, advanced dual-camera system and all-day battery life. Experience powerful performance and a sleek design in a whole new color lineup.'
  )

  // Pricing
  const [sellingPrice, setSellingPrice] = useState('69,999')
  const [mrp, setMrp] = useState('79,999')
  const [discountPercent, setDiscountPercent] = useState('12')

  // Inventory
  const [sku, setSku] = useState('IP15-128')
  const [stockQuantity, setStockQuantity] = useState('45')
  const [lowStockAlert, setLowStockAlert] = useState('10')
  const [warehouse, setWarehouse] = useState('Main Warehouse')

  // Product Attributes
  const [selectedColor, setSelectedColor] = useState('Black')
  const [selectedStorage, setSelectedStorage] = useState('128GB')
  const [selectedCondition, setSelectedCondition] = useState('New')

  // Shipping
  const [weight, setWeight] = useState('0.2')
  const [length, setLength] = useState('15')
  const [width, setWidth] = useState('8')
  const [height, setHeight] = useState('1')
  const [shippingType, setShippingType] = useState('Standard Shipping')
  const [isPhysical, setIsPhysical] = useState(true)

  // Images selection
  const [selectedImage, setSelectedImage] = useState(iphoneBlack)
  const galleryImages = [
    { src: iphoneBlack, alt: 'Front Angle' },
    { src: cartIphone, alt: 'Back Camera' },
    { src: iphonePink, alt: 'Side Edge' },
    { src: iphoneYellow, alt: 'Dark Back', extraCount: 3 },
  ]

  const handleSave = () => {
    toast.success('Product details updated successfully!')
  }

  const handleDuplicate = () => {
    toast.success('Created duplicate of iPhone 15 (128GB)')
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans flex flex-col selection:bg-red-100 selection:text-red-900">
      {/* 1. TOP HEADER BAR */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 h-16 px-4 lg:px-6 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-5">
          <Link to={ROUTES.home} className="flex items-center gap-2">
            <SbtLogo className="h-8 w-auto" />
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            className="p-2 rounded-lg hover:bg-slate-100 text-slate-700 transition cursor-pointer"
          >
            <div className="flex flex-col gap-1 w-4">
              <span className="w-4 h-0.5 bg-slate-700 rounded-full" />
              <span className="w-4 h-0.5 bg-slate-700 rounded-full" />
              <span className="w-4 h-0.5 bg-slate-700 rounded-full" />
            </div>
          </button>
        </div>

        {/* Global Search */}
        <div className="flex-1 max-w-xl mx-6 hidden md:block">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              placeholder="Search products, orders, customers..."
              className="w-full pl-11 pr-12 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#DF1927]/20 focus:border-[#DF1927] transition-all"
            />
            <button
              type="button"
              className="absolute right-1 w-8 h-8 rounded-full bg-[#DF1927] text-white flex items-center justify-center hover:bg-[#c01420] transition-colors shadow-xs cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Right user & notifications */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 size-4 bg-[#DF1927] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
              12
            </span>
          </button>

          <button
            type="button"
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors hidden sm:flex cursor-pointer"
            aria-label="Help"
          >
            <HelpCircle className="w-5 h-5" />
          </button>

          <div className="h-7 w-px bg-gray-200 hidden sm:block" />

          {/* User Profile */}
          <div className="flex items-center gap-2.5 cursor-pointer group">
            <img
              src={dhirajAvatar}
              alt="Dhiraj Sharma"
              className="size-9 rounded-full object-cover border border-slate-200 shadow-xs"
            />
            <div className="hidden sm:block text-left">
              <div className="text-xs font-semibold text-gray-900 group-hover:text-[#DF1927] transition-colors">
                Dhiraj Sharma
              </div>
              <div className="text-[11px] text-gray-500">Seller</div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </div>
        </div>
      </header>

      {/* 2. BODY LAYOUT: SIDEBAR + MAIN CONTENT */}
      <div className="flex-1 flex max-w-[1680px] w-full mx-auto">
        {/* Left Sidebar */}
        <aside className="w-60 bg-white border-r border-gray-200 p-4 flex flex-col justify-between shrink-0 hidden lg:flex">
          <div className="space-y-1">
            <Link
              to={ROUTES.sellerDashboard}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              <LayoutDashboard className="w-4 h-4 text-gray-500" />
              <span>Dashboard</span>
            </Link>

            <Link
              to={ROUTES.sellerOrders}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-4 h-4 text-gray-500" />
                <span>Orders</span>
              </div>
              <span className="size-5 rounded-full bg-red-100 text-[#DF1927] font-bold text-[10px] flex items-center justify-center">
                8
              </span>
            </Link>

            {/* Products Active Navigation Item */}
            <div className="space-y-1 pt-0.5">
              <Link
                to={ROUTES.sellerProducts}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold bg-red-50 text-[#DF1927] border-l-4 border-[#DF1927] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Package className="w-4 h-4 text-[#DF1927]" />
                  <span>Products</span>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-[#DF1927]" />
              </Link>

              {/* Sub-menu matching Mockup 1 */}
              <div className="pl-6 space-y-1 text-xs">
                <Link
                  to={ROUTES.sellerProducts}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-[#DF1927] bg-red-50/60"
                >
                  <span className="size-1.5 rounded-full bg-[#DF1927]" />
                  <span>All Products</span>
                </Link>
                <Link
                  to={ROUTES.sellerAddProduct}
                  className="block px-3 py-1.5 rounded-lg text-[11px] text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition"
                >
                  Add Product
                </Link>
                <span className="block px-3 py-1.5 rounded-lg text-[11px] text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition cursor-pointer">
                  Categories
                </span>
                <span className="block px-3 py-1.5 rounded-lg text-[11px] text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition cursor-pointer">
                  Attributes
                </span>
                <span className="block px-3 py-1.5 rounded-lg text-[11px] text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition cursor-pointer">
                  Bulk Upload
                </span>
              </div>
            </div>

            <Link
              to={ROUTES.sellerInventory}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              <Layers className="w-4 h-4 text-gray-500" />
              <span>Inventory</span>
            </Link>

            <Link
              to="/seller/customers"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              <Users className="w-4 h-4 text-gray-500" />
              <span>Customers</span>
            </Link>

            <span className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 cursor-pointer">
              <BarChart3 className="w-4 h-4 text-gray-500" />
              <span>Analytics</span>
            </span>

            <span className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 cursor-pointer">
              <Megaphone className="w-4 h-4 text-gray-500" />
              <span>Marketing &amp; Offers</span>
            </span>

            <span className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 cursor-pointer">
              <CreditCard className="w-4 h-4 text-gray-500" />
              <span>Payments</span>
            </span>

            <span className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-4 h-4 text-gray-500" />
                <span>Reports</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </span>

            <span className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 cursor-pointer">
              <Settings className="w-4 h-4 text-gray-500" />
              <span>Store Settings</span>
            </span>

            <span className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 cursor-pointer">
              <LifeBuoy className="w-4 h-4 text-gray-500" />
              <span>Support</span>
            </span>
          </div>

          {/* SBT Seller Pro Banner */}
          <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-red-50/80 via-white to-pink-50/60 border border-red-100 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-900">
              <Crown className="w-4 h-4 text-amber-500" />
              <span>SBT Seller Pro</span>
            </div>
            <p className="text-[11px] text-gray-500 leading-snug">
              Unlock advanced tools, marketing support and grow your business.
            </p>
            <button
              type="button"
              onClick={() => toast.info('SBT Seller Pro Upgrade requested')}
              className="w-full py-1.5 px-3 text-xs font-semibold text-[#DF1927] border border-[#DF1927] hover:bg-[#DF1927] hover:text-white rounded-xl transition cursor-pointer"
            >
              Upgrade Now →
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-7 space-y-6 overflow-hidden">
          {/* Header Row: Breadcrumb, Back Arrow, Title, Status & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              {/* Breadcrumb */}
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Link to={ROUTES.sellerProducts} className="hover:text-slate-600">
                  Products
                </Link>
                <span>&gt;</span>
                <Link to={ROUTES.sellerProducts} className="hover:text-slate-600">
                  All Products
                </Link>
                <span>&gt;</span>
                <span className="text-[#DF1927] font-semibold">{productName}</span>
              </div>

              {/* Title with Back Button & Status Badge */}
              <div className="flex items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => navigate(ROUTES.sellerProducts)}
                  className="size-8 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 transition cursor-pointer shadow-2xs"
                  aria-label="Back to products"
                >
                  <ArrowLeft className="size-4" />
                </button>
                <h1 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight">
                  {productName}
                </h1>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/60 inline-flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  <span>Active</span>
                </span>
              </div>

              {/* Meta Info line */}
              <div className="text-xs text-slate-400 flex flex-wrap items-center gap-2 pt-0.5">
                <span>SKU: {sku}</span>
                <span>|</span>
                <span>Category: {category}</span>
                <span>|</span>
                <span>Added on: 12 Sep 2025, 10:30 AM</span>
              </div>
            </div>

            {/* Top Right Action Buttons matching Mockup 1 */}
            <div className="flex items-center gap-2.5 shrink-0 self-start sm:self-auto">
              <Link
                to={ROUTES.productIphone}
                target="_blank"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-2xs transition cursor-pointer"
              >
                <ExternalLink className="size-3.5" />
                <span>View on Store</span>
              </Link>

              <button
                type="button"
                onClick={handleDuplicate}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-2xs transition cursor-pointer"
              >
                <Copy className="size-3.5" />
                <span>Duplicate</span>
              </button>

              <button
                type="button"
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#DF1927] hover:bg-[#c01420] text-white text-xs font-bold transition shadow-md shadow-[#DF1927]/25 cursor-pointer"
              >
                <Save className="size-3.5 stroke-[2.5]" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>

          {/* 2-Column Form Layout matching Mockup 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* =============================================================== */}
            {/* LEFT COLUMN: IMAGES + PRICING + INVENTORY (5 cols on lg)       */}
            {/* =============================================================== */}
            <div className="lg:col-span-5 space-y-6">
              {/* 1. Product Images Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-slate-900">Product Images</h3>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  {/* Big Image Preview (7 cols) with edit button */}
                  <div className="sm:col-span-7 aspect-[4/5] rounded-2xl bg-slate-50 border border-slate-200/80 p-3 relative flex items-center justify-center group overflow-hidden">
                    <img
                      src={selectedImage}
                      alt={productName}
                      className="size-full object-contain transition group-hover:scale-105 duration-300"
                    />
                    <button
                      type="button"
                      onClick={() => toast.info('Edit current photo modal')}
                      className="absolute top-3 right-3 size-7 rounded-lg bg-white/90 backdrop-blur-xs border border-slate-200 shadow-2xs flex items-center justify-center text-slate-600 hover:text-slate-900 transition cursor-pointer"
                      title="Edit main photo"
                    >
                      <Pencil className="size-3.5" />
                    </button>
                  </div>

                  {/* Thumbnail Grid (5 cols) */}
                  <div className="sm:col-span-5 flex flex-col justify-between gap-2.5">
                    <div className="grid grid-cols-2 gap-2">
                      {galleryImages.map((thumb, i) => (
                        <div
                          key={i}
                          onClick={() => setSelectedImage(thumb.src)}
                          className={`aspect-square rounded-xl bg-slate-50 border p-1 flex items-center justify-center relative cursor-pointer transition ${
                            selectedImage === thumb.src
                              ? 'border-[#DF1927] ring-2 ring-[#DF1927]/20'
                              : 'border-slate-200/80 hover:border-slate-300'
                          }`}
                        >
                          <img
                            src={thumb.src}
                            alt={thumb.alt}
                            className="size-full object-contain"
                          />
                          {thumb.extraCount && (
                            <div className="absolute inset-0 bg-slate-900/60 rounded-xl flex items-center justify-center text-white text-xs font-bold">
                              +{thumb.extraCount}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Upload Drop Zone matching Mockup 1 */}
                    <button
                      type="button"
                      onClick={() => toast.info('Select photos from computer (up to 10)')}
                      className="p-3.5 rounded-xl border border-dashed border-slate-300 hover:border-[#DF1927] bg-slate-50/50 hover:bg-red-50/20 flex flex-col items-center justify-center text-center transition cursor-pointer group"
                    >
                      <Upload className="size-4 text-slate-400 group-hover:text-[#DF1927] transition" />
                      <span className="text-xs font-bold text-slate-800 group-hover:text-[#DF1927] mt-1 transition">
                        Upload Images
                      </span>
                      <span className="text-[10px] text-slate-400 mt-0.5">
                        Add up to 10 images (JPG, PNG)
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* 2. Pricing Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-slate-900">Pricing</h3>

                <div className="grid grid-cols-2 gap-4">
                  {/* Selling Price */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Selling Price <span className="text-[#DF1927]">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3 text-xs text-slate-500 font-semibold">
                        ₹
                      </span>
                      <input
                        type="text"
                        value={sellingPrice}
                        onChange={(e) => setSellingPrice(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-[#DF1927]"
                      />
                    </div>
                  </div>

                  {/* MRP */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      MRP (Original Price) <span className="text-[#DF1927]">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3 text-xs text-slate-500 font-semibold">
                        ₹
                      </span>
                      <input
                        type="text"
                        value={mrp}
                        onChange={(e) => setMrp(e.target.value)}
                        className="w-full pl-7 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-[#DF1927]"
                      />
                    </div>
                  </div>

                  {/* Discount */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Discount
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        value={discountPercent}
                        onChange={(e) => setDiscountPercent(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-[#DF1927]"
                      />
                      <span className="absolute right-3 text-xs text-slate-400 font-bold">%</span>
                    </div>
                  </div>

                  {/* Discounted Price Display Container */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Discounted Price
                    </label>
                    <div className="py-2 px-3 bg-red-50/70 border border-red-100 rounded-xl flex items-center justify-between">
                      <span className="text-xs font-bold text-[#DF1927]">₹{mrp}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Inventory Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-slate-900">Inventory</h3>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      SKU <span className="text-[#DF1927]">*</span>
                    </label>
                    <input
                      type="text"
                      value={sku}
                      onChange={(e) => setSku(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-[#DF1927]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Stock Quantity <span className="text-[#DF1927]">*</span>
                    </label>
                    <input
                      type="text"
                      value={stockQuantity}
                      onChange={(e) => setStockQuantity(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-[#DF1927]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Low Stock Alert
                    </label>
                    <input
                      type="text"
                      value={lowStockAlert}
                      onChange={(e) => setLowStockAlert(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-[#DF1927]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <div className="w-1/2">
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Warehouse Location
                    </label>
                    <select
                      value={warehouse}
                      onChange={(e) => setWarehouse(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-700 focus:outline-none cursor-pointer"
                    >
                      <option value="Main Warehouse">Main Warehouse</option>
                      <option value="Delhi Hub">Delhi Hub</option>
                      <option value="Bengaluru Warehouse">Bengaluru Warehouse</option>
                    </select>
                  </div>

                  <Link
                    to={ROUTES.sellerInventory}
                    className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline pt-4"
                  >
                    <Box className="size-4" />
                    <span>Manage Inventory</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* =============================================================== */}
            {/* RIGHT COLUMN: BASIC INFO + ATTRIBUTES + SHIPPING (7 cols on lg) */}
            {/* =============================================================== */}
            <div className="lg:col-span-7 space-y-6">
              {/* 1. Basic Information Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-slate-900">Basic Information</h3>

                <div className="grid grid-cols-2 gap-4">
                  {/* Product Name */}
                  <div className="col-span-2 sm:col-span-1">
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Product Name <span className="text-[#DF1927]">*</span>
                    </label>
                    <input
                      type="text"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 focus:outline-none focus:border-[#DF1927]"
                    />
                  </div>

                  {/* Brand */}
                  <div className="col-span-2 sm:col-span-1">
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Brand <span className="text-[#DF1927]">*</span>
                    </label>
                    <select
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 focus:outline-none cursor-pointer"
                    >
                      <option value="Apple">Apple</option>
                      <option value="Samsung">Samsung</option>
                      <option value="Sony">Sony</option>
                      <option value="Nike">Nike</option>
                    </select>
                  </div>

                  {/* Category */}
                  <div className="col-span-2 sm:col-span-1">
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Category <span className="text-[#DF1927]">*</span>
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 focus:outline-none cursor-pointer"
                    >
                      <option value="Mobiles & Accessories">Mobiles &amp; Accessories</option>
                      <option value="Audio">Audio</option>
                      <option value="Wearables">Wearables</option>
                      <option value="Laptops">Laptops</option>
                    </select>
                  </div>

                  {/* Sub Category */}
                  <div className="col-span-2 sm:col-span-1">
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Sub Category <span className="text-[#DF1927]">*</span>
                    </label>
                    <select
                      value={subCategory}
                      onChange={(e) => setSubCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 focus:outline-none cursor-pointer"
                    >
                      <option value="Smartphones">Smartphones</option>
                      <option value="Cases & Covers">Cases &amp; Covers</option>
                      <option value="Chargers">Chargers</option>
                    </select>
                  </div>
                </div>

                {/* Short Description */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Short Description <span className="text-[#DF1927]">*</span>
                    </label>
                    <span className="text-[10px] text-slate-400">98/500</span>
                  </div>
                  <textarea
                    rows={2}
                    value={shortDesc}
                    onChange={(e) => setShortDesc(e.target.value)}
                    className="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 focus:outline-none focus:border-[#DF1927] resize-none"
                  />
                </div>

                {/* Full Description with Rich Text Toolbar matching Mockup 1 */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Full Description
                    </label>
                    <span className="text-[10px] text-slate-400">164/5000</span>
                  </div>

                  {/* Editor Toolbar */}
                  <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                    <div className="px-3 py-2 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center gap-2 text-xs">
                      <select className="px-2 py-0.5 rounded border border-slate-200 bg-white text-slate-700 text-[11px] font-semibold">
                        <option>Paragraph</option>
                        <option>Heading 1</option>
                        <option>Heading 2</option>
                      </select>

                      <div className="h-4 w-px bg-slate-200" />

                      <button
                        type="button"
                        className="p-1 rounded hover:bg-slate-200 text-slate-700"
                        title="Bold"
                      >
                        <Bold className="size-3.5 stroke-[2.5]" />
                      </button>
                      <button
                        type="button"
                        className="p-1 rounded hover:bg-slate-200 text-slate-700"
                        title="Italic"
                      >
                        <Italic className="size-3.5 stroke-[2.5]" />
                      </button>
                      <button
                        type="button"
                        className="p-1 rounded hover:bg-slate-200 text-slate-700"
                        title="Underline"
                      >
                        <Underline className="size-3.5 stroke-[2.5]" />
                      </button>

                      <div className="h-4 w-px bg-slate-200" />

                      <button
                        type="button"
                        className="p-1 rounded hover:bg-slate-200 text-slate-700"
                        title="Bullet List"
                      >
                        <List className="size-3.5" />
                      </button>
                      <button
                        type="button"
                        className="p-1 rounded hover:bg-slate-200 text-slate-700"
                        title="Numbered List"
                      >
                        <ListOrdered className="size-3.5" />
                      </button>
                      <button
                        type="button"
                        className="p-1 rounded hover:bg-slate-200 text-slate-700"
                        title="Insert Link"
                      >
                        <Link2 className="size-3.5" />
                      </button>
                    </div>

                    <textarea
                      rows={4}
                      value={fullDesc}
                      onChange={(e) => setFullDesc(e.target.value)}
                      className="w-full p-3 text-xs bg-white text-slate-900 focus:outline-none resize-none leading-relaxed"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Product Attributes Card matching Mockup 1 */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-slate-900">Product Attributes</h3>

                {/* Color Pills */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-2">Color</label>
                  <div className="flex flex-wrap items-center gap-2">
                    {[
                      { name: 'Black', color: 'bg-slate-900' },
                      { name: 'Blue', color: 'bg-blue-500' },
                      { name: 'Pink', color: 'bg-pink-400' },
                      { name: 'Yellow', color: 'bg-amber-400' },
                      { name: 'Green', color: 'bg-emerald-500' },
                    ].map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => setSelectedColor(c.name)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 transition cursor-pointer ${
                          selectedColor === c.name
                            ? 'border-2 border-slate-900 bg-white text-slate-900 shadow-2xs'
                            : 'border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <span className={`size-2.5 rounded-full ${c.color}`} />
                        <span>{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Storage Pills */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-2">Storage</label>
                  <div className="flex flex-wrap items-center gap-2">
                    {['128GB', '256GB', '512GB'].map((st) => (
                      <button
                        key={st}
                        type="button"
                        onClick={() => setSelectedStorage(st)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                          selectedStorage === st
                            ? 'border-2 border-slate-900 bg-white text-slate-900 shadow-2xs font-bold'
                            : 'border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <span
                          className={`size-2 rounded-full ${
                            selectedStorage === st ? 'bg-slate-900' : 'border border-slate-400'
                          }`}
                        />
                        <span>{st}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Condition Pills */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-2">
                    Condition
                  </label>
                  <div className="flex flex-wrap items-center gap-2">
                    {['New', 'Refurbished'].map((cond) => (
                      <button
                        key={cond}
                        type="button"
                        onClick={() => setSelectedCondition(cond)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                          selectedCondition === cond
                            ? 'border-2 border-slate-900 bg-white text-slate-900 shadow-2xs font-bold'
                            : 'border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <span
                          className={`size-2 rounded-full ${
                            selectedCondition === cond ? 'bg-slate-900' : 'border border-slate-400'
                          }`}
                        />
                        <span>{cond}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Shipping & Delivery Card matching Mockup 1 */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-slate-900">Shipping &amp; Delivery</h3>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  {/* Weight */}
                  <div className="sm:col-span-4">
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Weight (kg)
                    </label>
                    <input
                      type="text"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-[#DF1927]"
                    />
                  </div>

                  {/* Dimensions */}
                  <div className="sm:col-span-4">
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Dimensions (cm)
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      <input
                        type="text"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        placeholder="L"
                        className="w-full px-2 py-2 text-xs text-center bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-[#DF1927]"
                      />
                      <input
                        type="text"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        placeholder="W"
                        className="w-full px-2 py-2 text-xs text-center bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-[#DF1927]"
                      />
                      <input
                        type="text"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="H"
                        className="w-full px-2 py-2 text-xs text-center bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:outline-none focus:border-[#DF1927]"
                      />
                    </div>
                  </div>

                  {/* Shipping Type */}
                  <div className="sm:col-span-4">
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Shipping Type
                    </label>
                    <select
                      value={shippingType}
                      onChange={(e) => setShippingType(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 focus:outline-none cursor-pointer"
                    >
                      <option value="Standard Shipping">Standard Shipping</option>
                      <option value="Express Shipping">Express Shipping</option>
                      <option value="Free Shipping">Free Shipping</option>
                    </select>
                  </div>
                </div>

                {/* Physical Product Checkbox */}
                <div className="pt-2">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={isPhysical}
                      onChange={(e) => setIsPhysical(e.target.checked)}
                      className="size-4 accent-[#DF1927] rounded cursor-pointer"
                    />
                    <span className="text-xs font-medium text-slate-700">
                      This is a physical product (requires shipping)
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
