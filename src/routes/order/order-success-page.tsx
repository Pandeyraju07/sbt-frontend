import React from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircle2,
  Copy,
  ChevronRight,
  Package,
  Truck,
  RotateCcw,
  FileText,
  HelpCircle,
  MapPin,
  ShoppingCart,
  XCircle,
  Heart,
  Search,
  ChevronDown,
} from 'lucide-react'
import { toast } from 'sonner'
import { SbtLogo } from '@/components/sbt-logo'
import { MarketplaceFooter } from '@/components/marketplace/marketplace-footer'
import { ROUTES } from '@/constants/routes'

import orderBagImg from '@/assets/order-success-bag.png'
import cartIphone from '@/assets/premium/iphone15-blue.jpg'
import cartAirpods from '@/assets/premium/airpods-pro-2.jpg'
import cartAppleWatch from '@/assets/premium/apple-watch-s9.jpg'

import accMagsafe from '@/assets/premium/acc-magsafe-charger.jpg'
import accCase from '@/assets/premium/acc-case-clear.jpg'
import accAdapter from '@/assets/premium/acc-charger-20w.jpg'
import accAirTag from '@/assets/premium/acc-airtag-4pack.jpg'

export const OrderSuccessPage: React.FC = () => {
  const copyOrderNumber = () => {
    navigator.clipboard.writeText('#SBT2498517362')
    toast.success('Order Number Copied: #SBT2498517362')
  }

  const items = [
    {
      id: '1',
      name: 'Apple iPhone 15 (128 GB)',
      variant: 'Blue',
      seller: 'SBT Official',
      price: '₹52,999',
      origPrice: '₹69,900',
      discount: '24% off',
      qty: 1,
      image: cartIphone,
    },
    {
      id: '2',
      name: 'Apple AirPods Pro (2nd Gen)',
      variant: 'White',
      seller: 'Appario Retail',
      price: '₹18,999',
      origPrice: '₹29,900',
      discount: '36% off',
      qty: 1,
      image: cartAirpods,
    },
    {
      id: '3',
      name: 'Apple Watch Series 9',
      variant: 'Midnight | 45 mm',
      seller: 'ClickTech',
      price: '₹41,999',
      origPrice: '₹49,900',
      discount: '16% off',
      qty: 1,
      image: cartAppleWatch,
    },
  ]

  const recommendations = [
    {
      id: 'r1',
      name: 'MagSafe Charger',
      price: '₹3,999',
      origPrice: '₹4,999',
      discount: '20% off',
      image: accMagsafe,
    },
    {
      id: 'r2',
      name: 'iPhone 15 Case',
      price: '₹1,999',
      origPrice: '₹2,999',
      discount: '33% off',
      image: accCase,
    },
    {
      id: 'r3',
      name: 'Apple 20W Adapter',
      price: '₹1,799',
      origPrice: '₹2,199',
      discount: '18% off',
      image: accAdapter,
    },
    {
      id: 'r4',
      name: 'AirPods Case Cover',
      price: '₹599',
      origPrice: '₹999',
      discount: '40% off',
      image: accAirTag,
    },
  ]

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F8F9FA] text-slate-900 font-sans antialiased selection:bg-red-100 selection:text-red-900">
      {/* ===================================================================== */}
      {/* MARKETPLACE TOP HEADER BAR (MATCHING SCREENSHOT 3)                    */}
      {/* ===================================================================== */}
      <header className="w-full bg-white border-b border-slate-200">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          {/* Logo & Category Dropdown */}
          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
            <Link to={ROUTES.home}>
              <SbtLogo size="sm" format="horizontal" />
            </Link>

            <button
              type="button"
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 transition"
            >
              <div className="flex flex-col gap-0.5">
                <span className="w-3.5 h-0.5 bg-slate-700" />
                <span className="w-3.5 h-0.5 bg-slate-700" />
                <span className="w-3.5 h-0.5 bg-slate-700" />
              </div>
              <span>All Categories</span>
              <ChevronDown className="size-3 text-slate-400" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-2 hidden md:flex items-center h-11 rounded-full border border-slate-200 bg-slate-50 px-4 focus-within:border-[#DF1927] focus-within:bg-white transition">
            <Search className="size-4 text-slate-400 shrink-0 mr-2" />
            <input
              type="text"
              placeholder="Search for products, brands and more..."
              className="w-full bg-transparent text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
            <button
              type="button"
              aria-label="Search"
              className="size-8 rounded-full bg-[#DF1927] hover:bg-[#C8102E] text-white flex items-center justify-center shrink-0 transition"
            >
              <Search className="size-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Right Header: Location, Account, Wishlist, Cart */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0 text-xs">
            {/* Deliver to location */}
            <div className="hidden xl:flex items-center gap-2 text-left cursor-pointer">
              <MapPin className="size-4 text-slate-600 shrink-0" />
              <div className="leading-tight">
                <span className="text-[10px] text-slate-400 block">Deliver to</span>
                <span className="font-bold text-slate-900 flex items-center gap-0.5">
                  New Delhi 110001
                  <ChevronDown className="size-2.5 text-slate-400" />
                </span>
              </div>
            </div>

            {/* Account */}
            <Link
              to={ROUTES.sellerDashboard}
              className="flex items-center gap-2 text-left cursor-pointer hover:opacity-80 transition"
            >
              <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700 text-xs">
                DK
              </div>
              <div className="hidden sm:block leading-tight">
                <span className="text-[10px] text-slate-400 block">Hello, Dhiraj</span>
                <span className="font-bold text-slate-900 flex items-center gap-0.5">
                  Account & Lists
                  <ChevronDown className="size-2.5 text-slate-400" />
                </span>
              </div>
            </Link>

            {/* Wishlist */}
            <div className="relative p-1 text-slate-600 hover:text-slate-900 cursor-pointer">
              <Heart className="size-5" />
              <span className="absolute -top-1 -right-1 size-4 rounded-full bg-[#DF1927] text-white text-[9px] font-bold flex items-center justify-center">
                3
              </span>
            </div>

            {/* Cart */}
            <Link
              to={ROUTES.cart}
              className="flex items-center gap-1.5 p-1 text-slate-700 hover:text-[#DF1927] transition"
            >
              <div className="relative">
                <ShoppingCart className="size-5" />
                <span className="absolute -top-1.5 -right-1.5 size-4 rounded-full bg-[#DF1927] text-white text-[9px] font-bold flex items-center justify-center">
                  0
                </span>
              </div>
              <span className="font-bold hidden sm:inline">Cart</span>
            </Link>
          </div>
        </div>

        {/* Categories Strip */}
        <div className="border-t border-slate-100 bg-white px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-none">
          <div className="max-w-[1520px] mx-auto flex items-center justify-between text-xs font-medium text-slate-600 py-2.5 whitespace-nowrap gap-6">
            <div className="flex items-center gap-6">
              <span className="text-slate-900 font-semibold cursor-pointer">Today's Deals</span>
              <Link to={ROUTES.categoryMobiles} className="hover:text-[#DF1927] cursor-pointer">
                Mobiles
              </Link>
              <span className="hover:text-[#DF1927] cursor-pointer">Fashion</span>
              <span className="hover:text-[#DF1927] cursor-pointer">Electronics</span>
              <span className="hover:text-[#DF1927] cursor-pointer">Home & Living</span>
              <span className="hover:text-[#DF1927] cursor-pointer">Beauty & Personal Care</span>
              <span className="hover:text-[#DF1927] cursor-pointer">Appliances</span>
              <span className="hover:text-[#DF1927] cursor-pointer">Sports & Outdoors</span>
              <span className="hover:text-[#DF1927] cursor-pointer">Toys & Kids</span>
              <span className="hover:text-[#DF1927] cursor-pointer">Books</span>
              <span className="hover:text-[#DF1927] cursor-pointer">Automotive</span>
              <span className="flex items-center gap-0.5 hover:text-[#DF1927] cursor-pointer">
                More <ChevronDown className="size-3" />
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold">
              <Link to={ROUTES.sellerDashboard} className="text-[#DF1927] hover:underline">
                Sell on SBT
              </Link>
              <span className="text-slate-600 hover:text-slate-900 cursor-pointer">
                For Business
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ===================================================================== */}
      {/* MAIN BODY                                                             */}
      {/* ===================================================================== */}
      <main className="flex-1 w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* TOP CELEBRATION BANNER (MATCHING SCREENSHOT 3) */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20">
              <CheckCircle2 className="size-7 stroke-[2.2]" />
            </div>

            <div className="space-y-1.5">
              <h1 className="text-2xl sm:text-[26px] font-bold text-slate-900 tracking-tight">
                Order Placed Successfully!
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Thank you, Dhiraj! Your order has been placed and is being processed.
              </p>

              {/* Order Meta details line */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-600">
                <div className="flex items-center gap-1 font-medium">
                  <span>Order ID:</span>
                  <span className="font-bold text-slate-900">#SBT2498517362</span>
                  <button
                    type="button"
                    onClick={copyOrderNumber}
                    className="p-1 text-slate-400 hover:text-slate-700 transition"
                    title="Copy Order ID"
                  >
                    <Copy className="size-3.5" />
                  </button>
                </div>
                <span className="text-slate-300">•</span>
                <span>Order Date: 30 Sep 2024, 10:24 AM</span>
                <span className="text-slate-300">•</span>
                <span className="font-medium">
                  Total Amount:{' '}
                  <strong className="text-[#DF1927] font-bold">₹89,095</strong>
                </span>
              </div>
            </div>
          </div>

          {/* 3D Celebration Bag Illustration */}
          <div className="shrink-0 w-32 h-24 hidden md:flex items-center justify-center">
            <img
              src={orderBagImg}
              alt="SBT Shopping Bag Celebration"
              className="w-full h-full object-contain filter drop-shadow-sm"
            />
          </div>
        </div>

        {/* 2-COLUMN ORDER BODY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* ================================================================= */}
          {/* LEFT: ORDER TRACKING, ITEMS & RECOMMENDATIONS                     */}
          {/* ================================================================= */}
          <div className="lg:col-span-8 space-y-6">
            {/* Order Tracking Timeline */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-6">
              <div className="flex items-center gap-2">
                <div className="size-6 rounded-lg bg-red-50 text-[#DF1927] flex items-center justify-center">
                  <Package className="size-3.5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Order Tracking</h3>
              </div>

              {/* Stepper track */}
              <div className="relative pt-2 pb-2">
                {/* Background Line */}
                <div className="absolute top-5 left-10 right-10 h-0.5 bg-slate-200" />
                <div className="absolute top-5 left-10 w-1/4 h-0.5 bg-[#DF1927]" />

                {/* 5 Points */}
                <div className="relative flex justify-between text-center text-xs">
                  {/* Point 1: Order Placed */}
                  <div className="flex flex-col items-center">
                    <div className="size-9 rounded-full bg-[#DF1927] text-white flex items-center justify-center font-bold text-xs ring-4 ring-white shadow-sm z-10">
                      <Package className="size-4.5" />
                    </div>
                    <span className="font-bold text-slate-900 mt-2 text-xs">Order Placed</span>
                    <span className="text-[10px] text-slate-400 mt-0.5">30 Sep, 10:24 AM</span>
                  </div>

                  {/* Point 2: Processing */}
                  <div className="flex flex-col items-center">
                    <div className="size-9 rounded-full bg-[#DF1927] text-white flex items-center justify-center font-bold text-xs ring-4 ring-white shadow-sm z-10">
                      <FileText className="size-4.5" />
                    </div>
                    <span className="font-bold text-[#DF1927] mt-2 text-xs">Processing</span>
                    <span className="text-[10px] text-slate-400 mt-0.5">Expected today</span>
                  </div>

                  {/* Point 3: Shipped */}
                  <div className="flex flex-col items-center">
                    <div className="size-9 rounded-full border border-slate-300 bg-white text-slate-400 flex items-center justify-center text-xs ring-4 ring-white z-10">
                      <Truck className="size-4.5" />
                    </div>
                    <span className="font-medium text-slate-500 mt-2 text-xs">Shipped</span>
                    <span className="text-[10px] text-slate-400 mt-0.5">Expected by 1 Oct</span>
                  </div>

                  {/* Point 4: Out for Delivery */}
                  <div className="flex flex-col items-center">
                    <div className="size-9 rounded-full border border-slate-300 bg-white text-slate-400 flex items-center justify-center text-xs ring-4 ring-white z-10">
                      <Truck className="size-4.5" />
                    </div>
                    <span className="font-medium text-slate-500 mt-2 text-xs">
                      Out for Delivery
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5">Expected by 2 Oct</span>
                  </div>

                  {/* Point 5: Delivered */}
                  <div className="flex flex-col items-center">
                    <div className="size-9 rounded-full border border-slate-300 bg-white text-slate-400 flex items-center justify-center text-xs ring-4 ring-white z-10">
                      <Package className="size-4.5" />
                    </div>
                    <span className="font-medium text-slate-500 mt-2 text-xs">Delivered</span>
                    <span className="text-[10px] text-slate-400 mt-0.5">Expected by 2 Oct</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Items in this Order (3) */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-5">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="text-sm font-bold text-slate-900">Items in this Order (3)</h3>
                <span className="text-xs font-semibold text-[#DF1927] hover:underline cursor-pointer flex items-center gap-0.5">
                  <span>View All</span>
                  <ChevronRight className="size-3" />
                </span>
              </div>

              <div className="space-y-4 divide-y divide-slate-100">
                {items.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      idx > 0 ? 'pt-4' : ''
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="size-16 rounded-2xl bg-slate-50 border border-slate-100 p-2 shrink-0 flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="space-y-0.5 text-xs">
                        <h4 className="font-bold text-slate-900">{item.name}</h4>
                        <p className="text-[11px] text-slate-400">{item.variant}</p>
                        <p className="text-[11px] text-slate-500">Sold by {item.seller}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 text-xs shrink-0">
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-slate-900">{item.price}</span>
                        <span className="text-[11px] text-slate-400 line-through">
                          {item.origPrice}
                        </span>
                        <span className="text-[11px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
                          {item.discount}
                        </span>
                      </div>

                      <span className="text-xs text-slate-500 font-medium">Qty: {item.qty}</span>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => toast.success(`Re-ordering ${item.name}`)}
                          className="px-4 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition"
                        >
                          Buy Again
                        </button>
                        <button
                          type="button"
                          onClick={() => toast.info(`Viewing details for ${item.name}`)}
                          className="px-4 py-1.5 rounded-xl border border-[#DF1927] text-[#DF1927] hover:bg-[#DF1927] hover:text-white text-xs font-semibold transition"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended for You */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900">Recommended for You</h3>
                <span className="text-xs font-semibold text-[#DF1927] hover:underline cursor-pointer flex items-center gap-0.5">
                  <span>View All</span>
                  <ChevronRight className="size-3" />
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {recommendations.map((rec) => (
                  <div
                    key={rec.id}
                    className="p-3.5 rounded-2xl bg-slate-50/60 border border-slate-100 hover:border-slate-300 transition flex flex-col justify-between group"
                  >
                    <div className="w-full aspect-square rounded-xl bg-white p-2.5 flex items-center justify-center overflow-hidden mb-2.5">
                      <img
                        src={rec.image}
                        alt={rec.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-slate-900 truncate">{rec.name}</h4>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xs font-bold text-slate-900">{rec.price}</span>
                        <span className="text-[10px] text-slate-400 line-through">
                          {rec.origPrice}
                        </span>
                      </div>
                      <span className="text-[10px] text-emerald-600 font-semibold block">
                        {rec.discount}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => toast.success(`Added ${rec.name} to Cart`)}
                      className="mt-2.5 w-full py-1.5 rounded-xl border border-red-200 text-[#DF1927] hover:bg-[#DF1927] hover:text-white transition flex items-center justify-center"
                    >
                      <ShoppingCart className="size-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================================================================= */}
          {/* RIGHT: ORDER SUMMARY, ADDRESS & NEED HELP                         */}
          {/* ================================================================= */}
          <div className="lg:col-span-4 space-y-5">
            {/* Order Summary Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4 text-xs">
              <h3 className="text-sm font-bold text-slate-900">Order Summary</h3>

              <div className="space-y-2.5 text-slate-600">
                <div className="flex justify-between">
                  <span>Items (3)</span>
                  <span className="font-semibold text-slate-900">₹1,13,997</span>
                </div>
                <div className="flex justify-between text-emerald-600 font-medium">
                  <span>Discount</span>
                  <span>- ₹24,902</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-emerald-600 font-semibold">FREE</span>
                </div>
                <div className="pt-2 border-t border-slate-100 flex justify-between items-baseline">
                  <span className="text-sm font-bold text-slate-900">Total Amount</span>
                  <span className="text-xl font-black text-[#DF1927]">₹89,095</span>
                </div>
              </div>

              {/* Savings callout pill */}
              <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                <span className="leading-tight">
                  You saved <strong>₹24,902</strong> on this order! Great choice, Dhiraj!
                </span>
              </div>
            </div>

            {/* Delivery Address Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-2.5 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-lg bg-red-50 text-[#DF1927] flex items-center justify-center">
                    <MapPin className="size-3.5" />
                  </div>
                  <span className="font-bold text-slate-900 text-xs">Delivery Address</span>
                </div>
                <span className="text-[10px] font-bold text-[#DF1927] bg-red-50 px-2 py-0.5 rounded-full">
                  Home
                </span>
              </div>

              <div className="space-y-1 pt-1 text-slate-600">
                <p className="font-bold text-slate-900">Dhiraj Kumar</p>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  H No. 123, Sector 62, Near Fortis Hospital
                  <br />
                  Noida, Uttar Pradesh 201309
                </p>
                <p className="text-[11px] font-mono text-slate-600 pt-0.5">+91 98765 43210</p>
              </div>
            </div>

            {/* Need Help Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-3 text-xs">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <HelpCircle className="size-4 text-[#DF1927]" />
                <span className="font-bold text-slate-900 text-xs">Need Help?</span>
              </div>

              <div className="space-y-1 text-slate-700">
                <button
                  type="button"
                  onClick={() => toast.info('Opening Track Order Portal')}
                  className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Truck className="size-4 text-slate-400" />
                    <span>Track Order</span>
                  </div>
                  <ChevronRight className="size-3.5 text-slate-400" />
                </button>

                <button
                  type="button"
                  onClick={() => toast.info('Opening Cancellation Request')}
                  className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <XCircle className="size-4 text-slate-400" />
                    <span>Cancel Item</span>
                  </div>
                  <ChevronRight className="size-3.5 text-slate-400" />
                </button>

                <button
                  type="button"
                  onClick={() => toast.info('Initiating Return / Replacement')}
                  className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <RotateCcw className="size-4 text-slate-400" />
                    <span>Return or Replace</span>
                  </div>
                  <ChevronRight className="size-3.5 text-slate-400" />
                </button>

                <button
                  type="button"
                  onClick={() => toast.success('Tax Invoice Downloaded (PDF)')}
                  className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="size-4 text-slate-400" />
                    <span>Get Invoice</span>
                  </div>
                  <ChevronRight className="size-3.5 text-slate-400" />
                </button>

                <button
                  type="button"
                  onClick={() => toast.info('Connecting to 24x7 Customer Support')}
                  className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <HelpCircle className="size-4 text-slate-400" />
                    <span>Help & Support</span>
                  </div>
                  <ChevronRight className="size-3.5 text-slate-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <MarketplaceFooter />
    </div>
  )
}
