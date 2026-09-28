import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  MapPin,
  User,
  Package,
  ShoppingCart,
  Menu,
  ChevronDown,
} from 'lucide-react'
import { SbtLogo } from '@/components/sbt-logo'
import { ROUTES } from '@/constants/routes'

interface MarketplaceNavbarProps {
  cartCount: number
  onOpenCart?: () => void
  onOpenPincodeModal?: () => void
  currentPincode?: string
  currentCity?: string
  activeCategory?: string
}

export const MarketplaceNavbar: React.FC<MarketplaceNavbarProps> = ({
  cartCount = 0,
  onOpenCart,
  onOpenPincodeModal,
  currentPincode = '110001',
  currentCity = 'New Delhi',
  activeCategory,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [searchQuery, setSearchQuery] = useState('')
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false)
  const [showAccountDropdown, setShowAccountDropdown] = useState(false)

  const categories = [
    'All Categories',
    'Mobiles & Tablets',
    'Fashion & Apparel',
    'Electronics',
    'Home & Living',
    'Beauty & Personal Care',
    'Appliances',
    'Sports & Outdoors',
    'Toys & Kids',
    'Books',
    'Automotive',
    'Grocery',
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // scroll to deals or products
      const el = document.getElementById('todays-deals-section')
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="w-full bg-white z-40 sticky top-0 shadow-xs border-b border-slate-100">
      {/* -------------------------------------------------------------------- */}
      {/* TOP GLOBAL BAR                                                       */}
      {/* -------------------------------------------------------------------- */}
      <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between gap-4 lg:gap-8">
        {/* Left: SBT Logo */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <Link
            to={ROUTES.home}
            className="transition-opacity hover:opacity-95"
            title="SBT — Sell Buy Trust"
          >
            <SbtLogo size="md" format="horizontal" />
          </Link>
        </div>

        {/* Center: Category Selector & Large Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex-1 max-w-3xl flex items-center h-11 sm:h-12 rounded-full border border-slate-200/90 bg-slate-50/90 hover:border-slate-300 focus-within:border-[#DF1927] focus-within:ring-2 focus-within:ring-[#DF1927]/15 transition-all shadow-2xs relative"
        >
          {/* Category Dropdown Pill */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              className="h-full px-3.5 sm:px-4 text-xs font-medium text-slate-700 hover:text-slate-900 flex items-center gap-1.5 border-r border-slate-200 cursor-pointer rounded-l-full"
            >
              <span className="hidden sm:inline max-w-[120px] truncate">
                {selectedCategory}
              </span>
              <span className="sm:hidden">All</span>
              <ChevronDown className="size-3 text-slate-400" />
            </button>

            {showCategoryDropdown && (
              <div className="absolute left-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat)
                      setShowCategoryDropdown(false)
                    }}
                    className={`w-full text-left px-4 py-2 text-xs font-medium transition cursor-pointer ${
                      selectedCategory === cat
                        ? 'text-[#DF1927] bg-red-50/60 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Input */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products, brands and more..."
            className="flex-1 h-full px-3 sm:px-4 text-xs sm:text-sm bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />

          {/* Red Search Button with White Magnifying Glass (matching screenshot) */}
          <button
            type="submit"
            aria-label="Search"
            className="size-9 sm:size-10 mr-1 rounded-full bg-[#DF1927] hover:bg-[#C8102E] active:scale-95 text-white flex items-center justify-center shrink-0 transition-transform cursor-pointer shadow-sm shadow-[#DF1927]/25"
          >
            <Search className="size-4 sm:size-4.5 stroke-[2.2]" />
          </button>
        </form>

        {/* Right Section: Delivery Pin, Account, Orders, Cart */}
        <div className="flex items-center gap-3 sm:gap-6 shrink-0">
          {/* Deliver to Pin Code */}
          <button
            type="button"
            onClick={onOpenPincodeModal}
            className="hidden xl:flex items-center gap-2 text-left p-1.5 rounded-xl hover:bg-slate-50 transition cursor-pointer"
          >
            <MapPin className="size-5 text-slate-700 stroke-[1.8] shrink-0" />
            <div className="leading-tight">
              <span className="text-[10px] text-slate-400 font-normal block">
                Deliver to
              </span>
              <span className="text-xs font-semibold text-slate-900 flex items-center gap-0.5">
                {currentCity} {currentPincode}
                <ChevronDown className="size-3 text-slate-400" />
              </span>
            </div>
          </button>

          {/* Account & Sign in Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowAccountDropdown(!showAccountDropdown)}
              className="flex items-center gap-2 text-left p-1.5 rounded-xl hover:bg-slate-50 transition cursor-pointer"
            >
              <User className="size-5 text-slate-700 stroke-[1.8] shrink-0" />
              <div className="hidden sm:block leading-tight">
                <span className="text-[10px] text-slate-400 font-normal block">
                  Hello, Sign in
                </span>
                <span className="text-xs font-semibold text-slate-900 flex items-center gap-0.5">
                  Account & Lists
                  <ChevronDown className="size-3 text-slate-400" />
                </span>
              </div>
            </button>

            {showAccountDropdown && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="size-9 rounded-full bg-red-50 text-[#DF1927] font-bold text-xs flex items-center justify-center">
                      DK
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">Dhiraj Kumar</p>
                      <p className="text-[10px] text-slate-400">dhirajkumar@example.com</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      to={ROUTES.login}
                      onClick={() => setShowAccountDropdown(false)}
                      className="flex-1 py-1.5 px-3 rounded-xl bg-[#DF1927] hover:bg-[#C8102E] text-white font-semibold text-xs flex items-center justify-center transition shadow-sm shadow-[#DF1927]/20"
                    >
                      Login
                    </Link>
                    <Link
                      to={ROUTES.register}
                      onClick={() => setShowAccountDropdown(false)}
                      className="flex-1 py-1.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 font-semibold text-xs flex items-center justify-center transition border border-slate-200"
                    >
                      Register
                    </Link>
                  </div>
                </div>

                <div className="pt-3 space-y-1 text-xs text-slate-700 font-medium">
                  <Link
                    to={ROUTES.orderSuccess}
                    onClick={() => setShowAccountDropdown(false)}
                    className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition"
                  >
                    Your Orders & Tracking
                  </Link>
                  <Link
                    to={ROUTES.cart}
                    onClick={() => setShowAccountDropdown(false)}
                    className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition"
                  >
                    Your Shopping Cart
                  </Link>
                  <Link
                    to={ROUTES.categoryMobiles}
                    onClick={() => setShowAccountDropdown(false)}
                    className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-[#DF1927] font-semibold transition"
                  >
                    Mobiles & Devices Store
                  </Link>
                  <Link
                    to={ROUTES.forgotPassword}
                    onClick={() => setShowAccountDropdown(false)}
                    className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-500 text-xs transition"
                  >
                    Forgot Password / Reset
                  </Link>
                  <div className="pt-2 border-t border-slate-100 mt-2 space-y-1">
                    <Link
                      to={ROUTES.sellerDashboard}
                      onClick={() => setShowAccountDropdown(false)}
                      className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-800 font-bold transition flex items-center justify-between"
                    >
                      <span>Seller Central</span>
                      <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-mono">Store</span>
                    </Link>
                    <Link
                      to={ROUTES.adminDashboard}
                      onClick={() => setShowAccountDropdown(false)}
                      className="block px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-800 font-bold transition flex items-center justify-between"
                    >
                      <span>Admin Portal</span>
                      <span className="text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded font-mono">Super Admin</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Returns & Orders */}
          <Link
            to={ROUTES.orderSuccess}
            className="hidden sm:flex items-center gap-2 text-left p-1.5 rounded-xl hover:bg-slate-50 transition"
          >
            <Package className="size-5 text-slate-700 stroke-[1.8] shrink-0" />
            <div className="leading-tight">
              <span className="text-[10px] text-slate-400 font-normal block">
                Returns
              </span>
              <span className="text-xs font-semibold text-slate-900 block">
                & Orders
              </span>
            </div>
          </Link>

          {/* Shopping Cart with Red Count Badge */}
          {onOpenCart ? (
            <button
              type="button"
              onClick={onOpenCart}
              className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition cursor-pointer relative"
            >
              <div className="relative">
                <ShoppingCart className="size-6 text-slate-800 stroke-[1.8]" />
                <span className="absolute -top-1.5 -right-2 size-5 rounded-full bg-[#DF1927] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              </div>
              <span className="hidden sm:inline text-xs font-bold text-slate-900">
                Cart
              </span>
            </button>
          ) : (
            <Link
              to={ROUTES.cart}
              className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition cursor-pointer relative"
            >
              <div className="relative">
                <ShoppingCart className="size-6 text-slate-800 stroke-[1.8]" />
                <span className="absolute -top-1.5 -right-2 size-5 rounded-full bg-[#DF1927] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              </div>
              <span className="hidden sm:inline text-xs font-bold text-slate-900">
                Cart
              </span>
            </Link>
          )}
        </div>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* SECONDARY NAVIGATION CATEGORY BAR                                     */}
      {/* -------------------------------------------------------------------- */}
      <nav className="w-full border-t border-slate-100 bg-white">
        <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 h-10 sm:h-11 flex items-center justify-between overflow-x-auto no-scrollbar gap-6 text-xs font-medium text-slate-700">
          {/* Left Category Links */}
          <div className="flex items-center gap-5 sm:gap-7 whitespace-nowrap h-full">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('todays-deals-section')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="flex items-center gap-2 text-slate-900 font-semibold hover:text-[#DF1927] transition cursor-pointer h-full"
            >
              <Menu className="size-4 text-slate-700" />
              <span>Today's Deals</span>
            </button>

            <Link
              to={ROUTES.categoryMobiles}
              className={`h-full flex items-center transition relative ${
                activeCategory === 'mobiles'
                  ? 'text-[#DF1927] font-bold border-b-2 border-[#DF1927]'
                  : 'hover:text-[#DF1927]'
              }`}
            >
              Mobiles
            </Link>
            <Link to={ROUTES.home} className="hover:text-[#DF1927] transition">
              Fashion
            </Link>
            <Link to={ROUTES.home} className="hover:text-[#DF1927] transition">
              Electronics
            </Link>
            <Link to={ROUTES.home} className="hover:text-[#DF1927] transition">
              Home & Living
            </Link>
            <Link to={ROUTES.home} className="hover:text-[#DF1927] transition">
              Beauty & Personal Care
            </Link>
            <Link to={ROUTES.home} className="hover:text-[#DF1927] transition">
              Appliances
            </Link>
            <Link to={ROUTES.home} className="hover:text-[#DF1927] transition">
              Sports & Outdoors
            </Link>
            <Link to={ROUTES.home} className="hover:text-[#DF1927] transition">
              Toys & Kids
            </Link>
            <Link to={ROUTES.home} className="hover:text-[#DF1927] transition">
              Books
            </Link>
            <Link to={ROUTES.home} className="hover:text-[#DF1927] transition">
              Automotive
            </Link>
            <div className="flex items-center gap-0.5 hover:text-[#DF1927] cursor-pointer">
              <span>More</span>
              <ChevronDown className="size-3" />
            </div>
          </div>

          {/* Right Links: Sell on SBT (Accent Red) & For Business matching Screenshots 2 & 4 */}
          <div className="flex items-center gap-5 sm:gap-6 whitespace-nowrap pl-4 shrink-0">
            <Link
              to={ROUTES.sellerDashboard}
              className="text-[#DF1927] font-bold hover:underline transition flex items-center gap-1"
            >
              <span>Sell on SBT</span>
            </Link>
            <Link
              to={ROUTES.adminDashboard}
              className="text-slate-600 hover:text-slate-900 transition"
            >
              For Business
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
