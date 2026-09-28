import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  Bell,
  ChevronDown,
  LayoutDashboard,
  Users,
  Store,
  Building2,
  Package,
  ShoppingBag,
  CreditCard,
  AlertCircle,
  ShieldCheck,
  FileText,
  BarChart3,
  Settings,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  MoreVertical,
  X,
  ExternalLink,
  Edit2,
  List,
  Grid,
  Filter,
  Upload,
  Crown,
  Menu,
} from 'lucide-react'
import { toast } from 'sonner'
import { SbtLogo } from '@/components/sbt-logo'
import { ROUTES } from '@/constants/routes'

import iphone15Blue from '@/assets/premium/iphone15-blue.jpg'
import iphone15Black from '@/assets/premium/iphone15-black.jpg'
import iphone15Pink from '@/assets/premium/iphone15-pink.jpg'
import iphone15Yellow from '@/assets/premium/iphone15-yellow.jpg'
import iphone15Green from '@/assets/premium/iphone15-green.jpg'
import airpodsPro from '@/assets/premium/airpods-pro-2.jpg'
import appleWatchS9 from '@/assets/premium/apple-watch-s9.jpg'
import accCharger from '@/assets/premium/acc-charger-20w.jpg'
import accCase from '@/assets/premium/acc-case-clear.jpg'
import macbookM2 from '@/assets/premium/macbook-m2.jpg'
import sonyXm5 from '@/assets/premium/sony-xm5.jpg'
import galaxyWatch from '@/assets/premium/galaxy-watch.jpg'

export const AdminProductsPage: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<string>('prod-1')
  const [showDrawer, setShowDrawer] = useState(true)
  const [selectedColorIdx, setSelectedColorIdx] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')

  const colorVariants = [
    { name: 'Blue', image: iphone15Blue },
    { name: 'Black', image: iphone15Black },
    { name: 'Pink', image: iphone15Pink },
    { name: 'Yellow', image: iphone15Yellow },
    { name: 'Green', image: iphone15Green },
  ]

  const products = [
    {
      id: 'prod-1',
      name: 'Apple iPhone 15 (128 GB)',
      sku: 'AP15-128-BLU',
      category: 'Mobiles',
      subCategory: 'Mobiles > Smartphones',
      seller: 'SBT Official',
      price: '₹52,999',
      origPrice: '₹69,900',
      discount: '24% off',
      stock: 120,
      status: 'Active',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      addedOn: '25 Sep 2024',
      image: iphone15Blue,
      featured: true,
    },
    {
      id: 'prod-2',
      name: 'Apple AirPods Pro (2nd Gen)',
      sku: 'AP-PP2-WHT',
      category: 'Audio',
      subCategory: 'Audio > Wireless Earbuds',
      seller: 'Appario Retail',
      price: '₹18,999',
      origPrice: '₹29,900',
      discount: '36% off',
      stock: 85,
      status: 'Active',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      addedOn: '24 Sep 2024',
      image: airpodsPro,
      featured: true,
    },
    {
      id: 'prod-3',
      name: 'Apple Watch Series 9',
      sku: 'AW9-MID-45',
      category: 'Wearables',
      subCategory: 'Wearables > Smartwatches',
      seller: 'ClickTech',
      price: '₹41,999',
      origPrice: '₹49,900',
      discount: '16% off',
      stock: 40,
      status: 'Active',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      addedOn: '22 Sep 2024',
      image: appleWatchS9,
      featured: false,
    },
    {
      id: 'prod-4',
      name: '20W USB-C Charger',
      sku: 'AP-20W-WHT',
      category: 'Accessories',
      subCategory: 'Accessories > Adapters',
      seller: 'SBT Official',
      price: '₹1,799',
      origPrice: '₹2,199',
      discount: '18% off',
      stock: 220,
      status: 'Active',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      addedOn: '20 Sep 2024',
      image: accCharger,
      featured: false,
    },
    {
      id: 'prod-5',
      name: 'iPhone 15 Clear Case',
      sku: 'AP-CL-15',
      category: 'Accessories',
      subCategory: 'Accessories > Cases',
      seller: 'SBT Accessories',
      price: '₹1,999',
      origPrice: '₹2,999',
      discount: '33% off',
      stock: 0,
      status: 'Out of Stock',
      statusColor: 'bg-rose-50 text-rose-700 border-rose-200',
      addedOn: '18 Sep 2024',
      image: accCase,
      featured: false,
    },
    {
      id: 'prod-6',
      name: 'MacBook Air M2 (256 GB)',
      sku: 'MBA-M2-256',
      category: 'Laptops',
      subCategory: 'Computers > Laptops',
      seller: 'Tech World',
      price: '₹89,999',
      origPrice: '₹99,900',
      discount: '10% off',
      stock: 25,
      status: 'Active',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      addedOn: '16 Sep 2024',
      image: macbookM2,
      featured: true,
    },
    {
      id: 'prod-7',
      name: 'Sony WH-1000XM5',
      sku: 'SONY-XM5-BLK',
      category: 'Audio',
      subCategory: 'Audio > Over-Ear Headphones',
      seller: 'AudioHub',
      price: '₹29,990',
      origPrice: '₹34,900',
      discount: '14% off',
      stock: 18,
      status: 'Active',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      addedOn: '14 Sep 2024',
      image: sonyXm5,
      featured: false,
    },
    {
      id: 'prod-8',
      name: 'Samsung Galaxy Watch 6',
      sku: 'SGW6-44MM',
      category: 'Wearables',
      subCategory: 'Wearables > Smartwatches',
      seller: 'MegaStore',
      price: '₹24,999',
      origPrice: '₹29,999',
      discount: '17% off',
      stock: 12,
      status: 'Pending',
      statusColor: 'bg-amber-50 text-amber-700 border-amber-200',
      addedOn: '12 Sep 2024',
      image: galaxyWatch,
      featured: false,
    },
  ]

  const activeProduct = products.find((p) => p.id === selectedProductId) || products[0]!

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F8F9FA] text-slate-900 font-sans antialiased selection:bg-red-100 selection:text-red-900">
      {/* ===================================================================== */}
      {/* TOP HEADER BAR (MATCHING SCREENSHOT 5)                                */}
      {/* ===================================================================== */}
      <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-40 h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left: Hamburger & SBT Logo */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <button
            type="button"
            className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 transition cursor-pointer"
            aria-label="Toggle Navigation"
          >
            <Menu className="size-5" />
          </button>

          <Link to={ROUTES.home}>
            <SbtLogo size="sm" format="horizontal" />
          </Link>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 max-w-2xl mx-4 hidden md:flex items-center h-10 rounded-full border border-slate-200 bg-slate-50/80 px-3.5 focus-within:border-[#DF1927] focus-within:bg-white transition">
          <Search className="size-4 text-slate-400 shrink-0 mr-2" />
          <input
            type="text"
            placeholder="Search products, orders, customers, sellers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            type="button"
            aria-label="Search"
            className="size-7 rounded-full bg-[#DF1927] text-white flex items-center justify-center shrink-0 hover:bg-[#C8102E] transition"
          >
            <Search className="size-3.5 stroke-[2.5]" />
          </button>
        </div>

        {/* Right: Notifications & Profile */}
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          <button
            type="button"
            onClick={() => toast.info('12 Notifications', { description: 'New products submitted for review.' })}
            className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition cursor-pointer"
            title="Notifications"
          >
            <Bell className="size-5" />
            <span className="absolute top-1 right-1 size-4 rounded-full bg-[#DF1927] text-white text-[9px] font-bold flex items-center justify-center">
              12
            </span>
          </button>

          {/* User Profile Pill */}
          <div className="flex items-center gap-2.5 pl-2 sm:border-l sm:border-slate-200 cursor-pointer">
            <div className="size-9 rounded-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center">
              AD
            </div>
            <div className="hidden sm:block text-left leading-tight">
              <span className="text-xs font-bold text-slate-900 block">Admin</span>
              <span className="text-[10px] text-slate-400 flex items-center gap-0.5">
                Super Admin
                <ChevronDown className="size-2.5 text-slate-400" />
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ===================================================================== */}
      {/* 2-COLUMN WORKSPACE: SIDEBAR + MAIN PRODUCTS LISTING                   */}
      {/* ===================================================================== */}
      <div className="flex-1 w-full max-w-[1600px] mx-auto flex items-start">
        {/* Left Admin Sidebar */}
        <aside className="w-64 shrink-0 bg-white border-r border-slate-200 min-h-[calc(100vh-4rem)] p-4 flex flex-col justify-between hidden lg:flex">
          <nav className="space-y-1 text-xs font-medium">
            <Link
              to={ROUTES.adminDashboard}
              className="flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition"
            >
              <div className="flex items-center gap-3">
                <LayoutDashboard className="size-4" />
                <span>Dashboard</span>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => toast.info('Users')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Users className="size-4 text-slate-400" />
                <span>Users</span>
              </div>
              <ChevronRight className="size-3.5 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => toast.info('Sellers')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Store className="size-4 text-slate-400" />
                <span>Sellers</span>
              </div>
              <ChevronRight className="size-3.5 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => toast.info('Organizations')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Building2 className="size-4 text-slate-400" />
                <span>Organizations</span>
              </div>
              <ChevronRight className="size-3.5 text-slate-400" />
            </button>

            {/* Products (Active) */}
            <Link
              to={ROUTES.adminProducts}
              className="flex items-center justify-between px-3 py-2 rounded-xl bg-red-50/70 text-[#DF1927] font-bold transition"
            >
              <div className="flex items-center gap-3">
                <Package className="size-4" />
                <span>Products</span>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => toast.info('Orders')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <ShoppingBag className="size-4 text-slate-400" />
                <span>Orders</span>
              </div>
              <ChevronRight className="size-3.5 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => toast.info('Payments')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <CreditCard className="size-4 text-slate-400" />
                <span>Payments</span>
              </div>
              <ChevronRight className="size-3.5 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => toast.info('Disputes')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <AlertCircle className="size-4 text-slate-400" />
                <span>Disputes</span>
              </div>
              <ChevronRight className="size-3.5 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => toast.info('KYC Verification')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-4 text-slate-400" />
                <span>KYC & Verification</span>
              </div>
              <span className="px-1.5 py-0.5 rounded-full bg-[#DF1927] text-white text-[10px] font-bold">
                24
              </span>
            </button>

            <button
              type="button"
              onClick={() => toast.info('CMS & Content')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <FileText className="size-4 text-slate-400" />
                <span>CMS & Content</span>
              </div>
              <ChevronRight className="size-3.5 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => toast.info('Reports')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <BarChart3 className="size-4 text-slate-400" />
                <span>Reports & Analytics</span>
              </div>
              <ChevronRight className="size-3.5 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => toast.info('Settings')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Settings className="size-4 text-slate-400" />
                <span>Settings</span>
              </div>
              <ChevronRight className="size-3.5 text-slate-400" />
            </button>
          </nav>

          {/* SBT Admin Pro Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FFF5F4] to-[#FFF0ED] border border-[#FDE5E0] text-left mt-6">
            <div className="flex items-center gap-2 mb-1.5">
              <Crown className="size-4 text-amber-500 fill-amber-400" />
              <span className="text-xs font-black text-slate-900">SBT Admin Pro</span>
            </div>
            <p className="text-[10px] text-slate-500 leading-snug mb-3">
              Advanced controls, insights and more.
            </p>
            <button
              type="button"
              onClick={() => toast.info('SBT Admin Pro feature details')}
              className="w-full py-1.5 px-3 rounded-xl border border-[#DF1927] text-[#DF1927] hover:bg-[#DF1927] hover:text-white font-bold text-xs transition cursor-pointer"
            >
              Upgrade Now →
            </button>
          </div>
        </aside>

        {/* Main Products Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6">
          {/* Header & Action Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                Products
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Manage your marketplace products, inventory, pricing and listings.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Import Products */}
              <button
                type="button"
                onClick={() => toast.info('Import products via CSV / Excel template')}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-2xs transition cursor-pointer"
              >
                <Upload className="size-3.5 text-slate-500" />
                <span>Import Products</span>
              </button>

              {/* Add Product Button */}
              <button
                type="button"
                onClick={() => toast.success('Open New Product Form')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#DF1927] hover:bg-[#C8102E] text-white font-bold text-xs shadow-md shadow-[#DF1927]/20 transition cursor-pointer"
              >
                <Plus className="size-4 stroke-[2.5]" />
                <span>Add Product</span>
              </button>
            </div>
          </div>

          {/* 4 Stat Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Total Products */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Total Products</span>
                <div className="size-9 rounded-xl bg-red-50 text-[#DF1927] flex items-center justify-center">
                  <Package className="size-4.5" />
                </div>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="text-2xl font-black text-slate-950">12,486</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
                  <ArrowUpRight className="size-3.5 stroke-[2.5]" />
                  <span>12.5%</span>
                </span>
                <span className="text-[10px] text-slate-400">vs last month</span>
                <svg className="w-16 h-5 text-red-500 stroke-current fill-none stroke-[2]" viewBox="0 0 100 30">
                  <path d="M0,25 Q30,8 60,20 T100,6" />
                </svg>
              </div>
            </div>

            {/* Active Products */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Active Products</span>
                <div className="size-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Package className="size-4.5" />
                </div>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="text-2xl font-black text-slate-950">10,245</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
                  <ArrowUpRight className="size-3.5 stroke-[2.5]" />
                  <span>18.3%</span>
                </span>
                <span className="text-[10px] text-slate-400">vs last month</span>
                <svg className="w-16 h-5 text-emerald-500 stroke-current fill-none stroke-[2]" viewBox="0 0 100 30">
                  <path d="M0,26 Q30,22 60,14 T100,8" />
                </svg>
              </div>
            </div>

            {/* Out of Stock */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Out of Stock</span>
                <div className="size-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Package className="size-4.5" />
                </div>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="text-2xl font-black text-slate-950">1,245</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-bold text-rose-600 flex items-center gap-0.5">
                  <ArrowUpRight className="size-3.5 stroke-[2.5]" />
                  <span>6.2%</span>
                </span>
                <span className="text-[10px] text-slate-400">vs last month</span>
                <svg className="w-16 h-5 text-amber-500 stroke-current fill-none stroke-[2]" viewBox="0 0 100 30">
                  <path d="M0,24 Q30,20 60,16 T100,10" />
                </svg>
              </div>
            </div>

            {/* Pending Approval */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Pending Approval</span>
                <div className="size-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Package className="size-4.5" />
                </div>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="text-2xl font-black text-slate-950">996</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-bold text-purple-600 flex items-center gap-0.5">
                  <ArrowDownRight className="size-3.5 stroke-[2.5]" />
                  <span>22.4%</span>
                </span>
                <span className="text-[10px] text-slate-400">vs last month</span>
                <svg className="w-16 h-5 text-purple-500 stroke-current fill-none stroke-[2]" viewBox="0 0 100 30">
                  <path d="M0,10 Q30,15 60,18 T100,26" />
                </svg>
              </div>
            </div>
          </div>

          {/* Filter Bar matching Screenshot 5 */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-full md:w-auto flex-1 flex flex-wrap items-center gap-3">
              {/* Search input */}
              <div className="flex-1 min-w-[240px] max-w-sm flex items-center h-9 rounded-xl border border-slate-200 bg-slate-50/80 px-3 focus-within:border-[#DF1927] focus-within:bg-white transition">
                <Search className="size-3.5 text-slate-400 mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="Search products by name, SKU, seller..."
                  className="w-full bg-transparent text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
              </div>

              {/* Dropdowns */}
              <button
                type="button"
                className="h-9 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-1.5 hover:bg-slate-50 transition cursor-pointer"
              >
                <span>Category</span>
                <ChevronDown className="size-3 text-slate-400" />
              </button>

              <button
                type="button"
                className="h-9 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-1.5 hover:bg-slate-50 transition cursor-pointer"
              >
                <span>Status</span>
                <ChevronDown className="size-3 text-slate-400" />
              </button>

              <button
                type="button"
                className="h-9 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-1.5 hover:bg-slate-50 transition cursor-pointer"
              >
                <span>Seller</span>
                <ChevronDown className="size-3 text-slate-400" />
              </button>

              <button
                type="button"
                className="h-9 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-1.5 hover:bg-slate-50 transition cursor-pointer"
              >
                <Filter className="size-3 text-slate-400" />
                <span>More Filters</span>
              </button>
            </div>

            {/* View Switcher: List & Grid */}
            <div className="flex items-center gap-1.5 shrink-0 self-end md:self-auto">
              <button
                type="button"
                className="size-9 rounded-xl bg-[#DF1927] text-white flex items-center justify-center shadow-xs transition"
                title="List View"
              >
                <List className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => toast.info('Grid view toggle')}
                className="size-9 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center justify-center transition"
                title="Grid View"
              >
                <Grid className="size-4" />
              </button>
            </div>
          </div>

          {/* 2-Column: Table (Left) + Product Details Drawer (Right) */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
            {/* Products Table (~65% or 100%) */}
            <div className={`${showDrawer ? 'xl:col-span-8' : 'xl:col-span-12'} p-5 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-4`}>
              <div className="overflow-x-auto no-scrollbar">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 text-slate-400 font-semibold text-[11px]">
                      <th className="pb-3 w-8">
                        <input type="checkbox" className="rounded text-[#DF1927]" />
                      </th>
                      <th className="pb-3">Product</th>
                      <th className="pb-3">Category</th>
                      <th className="pb-3">Seller</th>
                      <th className="pb-3">Price</th>
                      <th className="pb-3">Stock</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3">Added On</th>
                      <th className="pb-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {products.map((p) => (
                      <tr
                        key={p.id}
                        onClick={() => {
                          setSelectedProductId(p.id)
                          setShowDrawer(true)
                        }}
                        className={`hover:bg-slate-50/80 transition cursor-pointer ${
                          selectedProductId === p.id && showDrawer ? 'bg-red-50/40' : ''
                        }`}
                      >
                        <td className="py-3" onClick={(e) => e.stopPropagation()}>
                          <input
                            type="checkbox"
                            checked={selectedProductId === p.id}
                            onChange={() => setSelectedProductId(p.id)}
                            className="rounded text-[#DF1927]"
                          />
                        </td>

                        {/* Product image & details */}
                        <td className="py-3">
                          <div className="flex items-center gap-3">
                            <div className="size-10 rounded-xl bg-slate-50 border border-slate-100 p-1 flex items-center justify-center shrink-0">
                              <img src={p.image} alt={p.name} className="size-full object-contain" />
                            </div>
                            <div className="leading-tight">
                              <p className="font-bold text-slate-900 truncate max-w-[160px]">{p.name}</p>
                              <p className="text-[10px] text-slate-400 font-mono">SKU: {p.sku}</p>
                            </div>
                          </div>
                        </td>

                        <td className="py-3 font-medium text-slate-600">{p.category}</td>

                        <td className="py-3">
                          <span className="font-semibold text-slate-800 text-[11px]">{p.seller}</span>
                        </td>

                        <td className="py-3">
                          <div className="leading-tight">
                            <span className="font-bold text-slate-900 block">{p.price}</span>
                            <span className="text-[10px] text-slate-400 line-through">{p.origPrice}</span>
                          </div>
                        </td>

                        <td className="py-3 font-mono font-bold text-slate-900">{p.stock}</td>

                        <td className="py-3">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${p.statusColor}`}>
                            {p.status}
                          </span>
                        </td>

                        <td className="py-3 text-[11px] text-slate-500 whitespace-nowrap">{p.addedOn}</td>

                        <td className="py-3 text-right" onClick={(e) => e.stopPropagation()}>
                          <button
                            type="button"
                            onClick={() => toast.info(`Action menu for ${p.name}`)}
                            className="p-1 text-slate-400 hover:text-slate-800 rounded-md transition"
                          >
                            <MoreVertical className="size-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination Row matching Screenshot 5 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
                <span>Showing 1-8 of 12,486 products</span>

                <div className="flex items-center gap-1.5 self-center sm:self-auto font-medium">
                  <button
                    type="button"
                    className="size-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50"
                  >
                    &lt;
                  </button>
                  <button
                    type="button"
                    className="size-7 rounded-lg bg-[#DF1927] text-white font-bold flex items-center justify-center"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="size-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="size-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50"
                  >
                    3
                  </button>
                  <button
                    type="button"
                    className="size-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50"
                  >
                    4
                  </button>
                  <button
                    type="button"
                    className="size-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50"
                  >
                    5
                  </button>
                  <span className="px-1 text-slate-400">...</span>
                  <button
                    type="button"
                    className="h-7 px-2 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-[11px]"
                  >
                    1,561
                  </button>
                  <button
                    type="button"
                    className="size-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50"
                  >
                    &gt;
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <span>Rows per page</span>
                  <select
                    defaultValue="8"
                    className="px-2 py-1 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700"
                  >
                    <option value="8">8</option>
                    <option value="16">16</option>
                    <option value="32">32</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Right: Product Details Slide-Over Card matching Screenshot 5 */}
            {showDrawer && (
              <div className="xl:col-span-4 p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-5 relative">
                {/* Header & Close Button */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <h3 className="text-base font-bold text-slate-900">Product Details</h3>
                  <button
                    type="button"
                    onClick={() => setShowDrawer(false)}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                  >
                    <X className="size-4.5" />
                  </button>
                </div>

                {/* Main Product Image (1200x1200 Studio Quality) */}
                <div className="w-full aspect-[4/3] rounded-2xl bg-slate-50/80 border border-slate-100 p-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={colorVariants[selectedColorIdx]?.image || activeProduct.image}
                    alt={activeProduct.name}
                    className="w-full h-full object-contain drop-shadow-sm"
                  />
                </div>

                {/* Color Variations Mini Thumbnail Strip */}
                <div className="flex items-center justify-center gap-2">
                  {colorVariants.map((c, idx) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColorIdx(idx)}
                      className={`size-12 rounded-xl p-1 bg-white border transition-all cursor-pointer ${
                        selectedColorIdx === idx
                          ? 'border-[#DF1927] ring-2 ring-[#DF1927]/20 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                      title={`${c.name} finish`}
                    >
                      <img src={c.image} alt={c.name} className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>

                {/* Product Title & SKU */}
                <div className="space-y-1">
                  <h4 className="text-base font-black text-slate-950">{activeProduct.name}</h4>
                  <p className="text-xs text-slate-400 font-mono">SKU: {activeProduct.sku}</p>
                </div>

                {/* Status Badges */}
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[11px] border border-emerald-200">
                    Active
                  </span>
                  {activeProduct.featured && (
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-[#DF1927] font-bold text-[11px] border border-rose-200">
                      Featured
                    </span>
                  )}
                </div>

                {/* Price Row */}
                <div className="flex items-baseline gap-3 pt-1">
                  <span className="text-2xl font-black text-[#DF1927]">{activeProduct.price}</span>
                  <span className="text-sm text-slate-400 line-through">{activeProduct.origPrice}</span>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-bold text-xs">
                    {activeProduct.discount}
                  </span>
                </div>

                {/* Meta details */}
                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Category</span>
                    <span className="font-semibold text-slate-800">{activeProduct.subCategory}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px]">Seller</span>
                    <div className="flex items-center gap-1.5 pt-0.5">
                      <span className="size-2 rounded-full bg-[#DF1927]" />
                      <span className="font-bold text-slate-900">{activeProduct.seller}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px]">Stock Quantity</span>
                    <div className="flex items-center justify-between font-bold text-slate-900 pt-0.5">
                      <span>{activeProduct.stock} units</span>
                      <button
                        type="button"
                        onClick={() => toast.info('Updating inventory stock level')}
                        className="p-1 text-slate-400 hover:text-slate-800 cursor-pointer"
                        title="Edit stock"
                      >
                        <Edit2 className="size-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* CTA Action Buttons matching Screenshot 5 */}
                <div className="space-y-2.5 pt-3">
                  <button
                    type="button"
                    onClick={() => toast.info(`Editing ${activeProduct.name}`)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#DF1927] hover:bg-[#C8102E] text-white font-bold text-xs shadow-md shadow-[#DF1927]/20 flex items-center justify-center gap-2 transition cursor-pointer"
                  >
                    <Edit2 className="size-3.5" />
                    <span>Edit Product</span>
                  </button>

                  <Link
                    to={ROUTES.productIphone}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center justify-center gap-2 transition"
                  >
                    <span>View on Store</span>
                    <ExternalLink className="size-3.5 text-slate-400" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
