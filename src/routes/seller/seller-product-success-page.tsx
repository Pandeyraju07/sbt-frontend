import React from 'react'
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
  Eye,
  Check,
  Edit2,
  Share2,
  Tag,
  ArrowRight,
} from 'lucide-react'
import { toast } from 'sonner'
import { SbtLogo } from '@/components/sbt-logo'
import { ROUTES } from '@/constants/routes'

import cartIphone from '@/assets/premium/iphone15-black.jpg'

const customerAvatars = {
  dhiraj: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
}

export const SellerProductSuccessPage: React.FC = () => {

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

                {/* Submenu */}
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
                  <Package className="w-4 h-4 text-gray-500" />
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
          {/* Breadcrumb matching Mockup 1: Products > Add Product > Product Added */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link to={ROUTES.sellerProducts} className="hover:text-gray-800 transition">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link to={ROUTES.sellerAddProduct} className="hover:text-gray-800 transition">
              Add Product
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#DF1927] font-semibold">Product Added</span>
          </div>

          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                Product Added Successfully!
              </h1>
              <p className="text-xs text-gray-500 mt-1">
                Your product has been added to your catalogue and is now visible in your product list.
              </p>
            </div>

            {/* Top Right Buttons */}
            <div className="flex items-center gap-3">
              <Link
                to={ROUTES.sellerAddProduct}
                className="px-3.5 py-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-sm transition"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Another Product</span>
              </Link>

              <button
                type="button"
                onClick={() => toast.info('Navigating to live product view')}
                className="px-4 py-2 bg-[#DF1927] hover:bg-[#c01420] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-sm shadow-red-200 transition"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Product</span>
              </button>
            </div>
          </div>

          {/* LARGE SUCCESS BANNER CARD (Mockup 1) */}
          <div className="bg-[#EAFBF3] border border-[#A7F3D0]/60 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Product Added Successfully!</h2>
                <div className="text-xs text-gray-700 font-medium mt-0.5">
                  <span className="font-bold text-gray-900">iPhone 15 (128GB)</span> has been added to your store.
                </div>
                <div className="text-[11px] text-gray-500 mt-0.5">
                  You can now manage stock, update details or promote this product.
                </div>
              </div>
            </div>

            <Link
              to={ROUTES.sellerProducts}
              className="px-5 py-2.5 bg-white border border-emerald-300 text-emerald-800 hover:bg-emerald-50 text-xs font-semibold rounded-2xl flex items-center gap-2 shadow-xs transition whitespace-nowrap self-stretch md:self-auto justify-center"
            >
              <span>View in Product List</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
            </Link>
          </div>

          {/* MAIN 2-COLUMN SECTION (Mockup 1) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* LEFT 8 COLUMNS */}
            <div className="lg:col-span-8 space-y-6">
              {/* CARD 1: Product Details */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-gray-700" />
                    <h3 className="text-sm font-bold text-gray-900">Product Details</h3>
                  </div>
                  <Link
                    to={ROUTES.sellerAddProduct}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                    <span>Edit Product</span>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Left: Product Images with Thumbnails */}
                  <div className="md:col-span-4 flex flex-col items-center">
                    <div className="w-full h-56 bg-gray-50 rounded-2xl border border-gray-100 p-3 flex items-center justify-center">
                      <img
                        src={cartIphone}
                        alt="iPhone 15"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="grid grid-cols-4 gap-2 mt-3 w-full">
                      <div className="relative border-2 border-[#DF1927] rounded-xl p-1 bg-white h-12 flex items-center justify-center">
                        <img
                          src={cartIphone}
                          alt="Thumb 1"
                          className="max-h-full object-contain"
                        />
                        <span className="absolute bottom-0 inset-x-0 bg-red-500 text-white text-[8px] font-bold text-center rounded-b">
                          Primary
                        </span>
                      </div>
                      <div className="border border-gray-200 rounded-xl p-1 bg-gray-50 h-12 flex items-center justify-center">
                        <img
                          src={cartIphone}
                          alt="Thumb 2"
                          className="max-h-full object-contain grayscale"
                        />
                      </div>
                      <div className="border border-gray-200 rounded-xl p-1 bg-gray-50 h-12 flex items-center justify-center">
                        <img
                          src={cartIphone}
                          alt="Thumb 3"
                          className="max-h-full object-contain scale-75"
                        />
                      </div>
                      <div className="border border-gray-200 rounded-xl bg-gray-100 h-12 flex items-center justify-center text-xs font-bold text-gray-500">
                        +2
                      </div>
                    </div>
                  </div>

                  {/* Right: Info */}
                  <div className="md:col-span-8 space-y-4 text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-gray-900">iPhone 15 (128GB)</h4>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          Active
                        </span>
                      </div>
                      <div className="text-[11px] text-gray-500 mt-1 flex items-center gap-1.5">
                        <span className="font-semibold text-gray-700">Apple</span>
                        <span className="text-gray-300">|</span>
                        <span>Mobiles & Tablets &gt; Mobile Phones</span>
                      </div>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        Latest iPhone 15 with A16 Bionic chip, stunning display and advanced camera system.
                      </p>
                    </div>

                    {/* Metadata boxes */}
                    <div className="grid grid-cols-3 gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-100">
                      <div>
                        <div className="text-[11px] text-gray-400">SKU</div>
                        <div className="font-bold text-gray-900 mt-0.5">IP15-128-BLK</div>
                      </div>
                      <div>
                        <div className="text-[11px] text-gray-400">HSN Code</div>
                        <div className="font-bold text-gray-900 mt-0.5">8517</div>
                      </div>
                      <div>
                        <div className="text-[11px] text-gray-400">Model</div>
                        <div className="font-bold text-gray-900 mt-0.5">iPhone 15</div>
                      </div>
                    </div>

                    {/* Financial boxes */}
                    <div className="grid grid-cols-4 gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-100">
                      <div>
                        <div className="text-[11px] text-gray-400">MRP (₹)</div>
                        <div className="font-bold text-gray-900 mt-0.5">82,900</div>
                      </div>
                      <div>
                        <div className="text-[11px] text-gray-400">Selling Price (₹)</div>
                        <div className="font-bold text-gray-900 mt-0.5">79,900</div>
                      </div>
                      <div>
                        <div className="text-[11px] text-gray-400">Discount</div>
                        <div className="font-bold text-emerald-600 mt-0.5">3.61%</div>
                      </div>
                      <div>
                        <div className="text-[11px] text-gray-400">Tax (GST)</div>
                        <div className="font-bold text-gray-900 mt-0.5">18%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 2: Product Images (4) */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-3">
                <h3 className="text-sm font-bold text-gray-900">Product Images (4)</h3>
                <div className="grid grid-cols-4 gap-3">
                  <div className="relative border-2 border-[#DF1927] rounded-2xl p-2 bg-white h-24 flex items-center justify-center">
                    <img
                      src={cartIphone}
                      alt="Img 1"
                      className="max-h-full object-contain"
                    />
                    <span className="absolute bottom-1.5 left-2 bg-[#DF1927] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                      Primary
                    </span>
                  </div>
                  <div className="border border-gray-100 rounded-2xl p-2 bg-gray-50 h-24 flex items-center justify-center">
                    <img
                      src={cartIphone}
                      alt="Img 2"
                      className="max-h-full object-contain grayscale"
                    />
                  </div>
                  <div className="border border-gray-100 rounded-2xl p-2 bg-gray-50 h-24 flex items-center justify-center">
                    <img
                      src={cartIphone}
                      alt="Img 3"
                      className="max-h-full object-contain scale-75"
                    />
                  </div>
                  <div className="border border-gray-100 rounded-2xl p-2 bg-gray-50 h-24 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-xl bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-400 text-xs font-semibold">
                      Box
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 3: Next Steps */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Next Steps</h3>
                  <p className="text-[11px] text-gray-500">What would you like to do next?</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {/* 1. Manage Inventory */}
                  <Link
                    to={ROUTES.sellerInventory}
                    className="p-3.5 rounded-2xl border border-gray-100 bg-gray-50/70 hover:bg-white hover:border-gray-200 transition flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <Package className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">Manage Inventory</div>
                        <div className="text-[10px] text-gray-400">Update stock, set alerts</div>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-700 transition" />
                  </Link>

                  {/* 2. Create Offer */}
                  <Link
                    to={ROUTES.sellerMarketing}
                    className="p-3.5 rounded-2xl border border-gray-100 bg-gray-50/70 hover:bg-white hover:border-gray-200 transition flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DF1927] flex items-center justify-center shrink-0">
                        <Tag className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">Create Offer</div>
                        <div className="text-[10px] text-gray-400">Run discounts and deals</div>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-700 transition" />
                  </Link>

                  {/* 3. Share Product */}
                  <button
                    type="button"
                    onClick={() => toast.success('Product link copied to clipboard')}
                    className="p-3.5 rounded-2xl border border-gray-100 bg-gray-50/70 hover:bg-white hover:border-gray-200 transition flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <Share2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">Share Product</div>
                        <div className="text-[10px] text-gray-400">Get more visibility</div>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-700 transition" />
                  </button>

                  {/* 4. View Analytics */}
                  <Link
                    to={ROUTES.sellerDashboard}
                    className="p-3.5 rounded-2xl border border-gray-100 bg-gray-50/70 hover:bg-white hover:border-gray-200 transition flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">View Analytics</div>
                        <div className="text-[10px] text-gray-400">Track performance</div>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-700 transition" />
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT 4 COLUMNS (Mockup 1) */}
            <div className="lg:col-span-4 space-y-6">
              {/* CARD 1: Inventory Status */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                  <Layers className="w-4 h-4 text-gray-700" />
                  <h3 className="text-sm font-bold text-gray-900">Inventory Status</h3>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Current Stock</span>
                    <span className="font-bold text-blue-600 text-sm">24</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Minimum Stock Alert</span>
                    <span className="font-bold text-red-500">5</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Stock Status</span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      In Stock
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <span className="text-gray-700 font-medium">Track Inventory</span>
                    <div className="w-11 h-6 bg-[#DF1927] rounded-full p-1 flex items-center justify-end shadow-xs cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 2: Additional Info */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                  <HelpCircle className="w-4 h-4 text-gray-700" />
                  <h3 className="text-sm font-bold text-gray-900">Additional Info</h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Condition</span>
                    <span className="font-semibold text-gray-900">New</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Warranty</span>
                    <span className="font-semibold text-gray-900">12 Months</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Return Available</span>
                    <span className="font-semibold text-gray-900">Yes</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Cash on Delivery</span>
                    <span className="font-semibold text-gray-900">Enabled</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Featured Product</span>
                    <span className="font-semibold text-gray-900">Yes</span>
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
