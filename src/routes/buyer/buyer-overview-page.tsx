import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Search,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Tag,
  Truck,
} from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import { SbtLogo } from '@/components/sbt-logo'
import buyerScene from '@/assets/sbt-buyer-scene.png'

export function BuyerOverviewPage() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-slate-900 font-sans selection:bg-red-100 selection:text-red-900">
      {/* ---------------------------------------------------------------------- */}
      {/* TOP GLOBAL NAVBAR                                                      */}
      {/* ---------------------------------------------------------------------- */}
      <header className="w-full h-16 sm:h-20 px-6 sm:px-10 lg:px-12 flex items-center justify-between border-b border-black/[0.04] bg-white z-20 shrink-0">
        {/* Left: Official SBT Logo & Main Nav Links */}
        <div className="flex items-center gap-8 lg:gap-14">
          <Link to={ROUTES.home} className="shrink-0 transition-opacity hover:opacity-95" title="SBT Home">
            <SbtLogo size="sm" />
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-slate-600">
            <Link to={ROUTES.buyer.root} className="text-slate-900 font-bold relative py-1">
              <span>Buy</span>
              <span className="absolute -bottom-2 left-0 right-0 h-[2.5px] bg-[#DF1927] rounded-full" />
            </Link>
            <Link to={ROUTES.seller.root} className="hover:text-slate-900 transition">
              Sell
            </Link>
            <Link to={ROUTES.buyer.root} className="hover:text-slate-900 transition">
              Categories
            </Link>
            <Link to={ROUTES.admin.root} className="hover:text-slate-900 transition">
              For Business
            </Link>
            <a href="#help" className="hover:text-slate-900 transition">
              Help
            </a>
          </nav>
        </div>

        {/* Right: Search Pill, Cart, Login & Create Account */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Search Pill */}
          <div className="relative hidden lg:block w-64 xl:w-72">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search for products, brands..."
              className="w-full h-9 pl-9 pr-4 rounded-full bg-slate-50/90 border border-slate-200/80 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#DF1927] focus:ring-1 focus:ring-[#DF1927]/20 transition"
            />
          </div>

          {/* Cart Icon */}
          <button
            type="button"
            className="p-1.5 text-slate-700 hover:text-slate-900 transition cursor-pointer"
            title="Shopping Cart"
          >
            <ShoppingCart className="size-5" />
          </button>

          {/* Login Link */}
          <Link
            to={ROUTES.login}
            className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 transition"
          >
            Login
          </Link>

          {/* Create Account Pill Button */}
          <Link
            to={ROUTES.register}
            className="h-9 px-4 sm:px-5 rounded-full border border-[#DF1927] text-[#DF1927] hover:bg-[#DF1927] hover:text-white font-semibold text-xs sm:text-sm flex items-center justify-center transition shadow-2xs cursor-pointer"
          >
            Create Account
          </Link>
        </div>
      </header>

      {/* ---------------------------------------------------------------------- */}
      {/* MAIN HERO SPLIT SECTION                                                */}
      {/* ---------------------------------------------------------------------- */}
      <main className="flex-1 flex flex-col lg:flex-row justify-between w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-12 pt-6 sm:pt-8 pb-4">
        {/* Left Section: Copy, 2x2 Feature Grid, CTA, & Metrics */}
        <div className="lg:w-[48%] xl:w-[46%] flex flex-col justify-between pt-2 lg:pt-4 pr-0 lg:pr-8 z-10">
          <div className="space-y-5">
            {/* Red Accent Pill */}
            <div className="w-8 h-[3px] bg-[#DF1927] rounded-full" />

            {/* Eyebrow */}
            <span className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase block">
              SHOP ON SBT
            </span>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-black text-slate-900 tracking-tight leading-[1.08]">
              Discover.
              <br />
              Shop. <span className="text-[#DF1927]">Trust.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed max-w-md pt-1 pb-3">
              Explore millions of products from trusted sellers, all in one secure marketplace. A better way to shop, for a brighter tomorrow.
            </p>

            {/* 4 Features Grid (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 pb-2">
              {/* Feature 1 */}
              <div className="flex items-start gap-3">
                <div className="size-9 rounded-full bg-[#FFF1F2] text-[#DF1927] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <ShoppingBag className="size-4.5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 leading-tight">Wide Selection</h3>
                  <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                    Millions of products across categories
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3">
                <div className="size-9 rounded-full bg-[#FFF1F2] text-[#DF1927] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <ShieldCheck className="size-4.5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 leading-tight">Trusted Sellers</h3>
                  <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                    Verified and reliable businesses
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3">
                <div className="size-9 rounded-full bg-[#FFF1F2] text-[#DF1927] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <Tag className="size-4.5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 leading-tight">Great Deals</h3>
                  <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                    Best prices and exclusive offers
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-3">
                <div className="size-9 rounded-full bg-[#FFF1F2] text-[#DF1927] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <Truck className="size-4.5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 leading-tight">Safe &amp; Easy Shopping</h3>
                  <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                    Secure payments and fast delivery
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-6 pt-3 pb-4">
              <Link
                to={ROUTES.buyer.root}
                className="h-11 px-7 rounded-xl bg-[#DF1927] hover:bg-[#C8102E] active:bg-[#B00D26] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-[#DF1927]/20 transition cursor-pointer"
              >
                <span>Start Shopping</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                to={ROUTES.buyer.root}
                className="text-xs sm:text-sm font-bold text-slate-900 border-b-2 border-slate-900 pb-0.5 hover:text-[#DF1927] hover:border-[#DF1927] transition"
              >
                Browse Categories
              </Link>
            </div>

            {/* Metrics Row (4 Columns) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/70 max-w-lg">
              <div className="sm:border-r sm:border-slate-200/80 sm:pr-3">
                <p className="text-base sm:text-lg font-black text-slate-900 leading-none">1M+</p>
                <p className="text-[10px] text-slate-400 font-medium leading-tight mt-1">Products</p>
              </div>
              <div className="sm:border-r sm:border-slate-200/80 sm:pr-3">
                <p className="text-base sm:text-lg font-black text-slate-900 leading-none">10K+</p>
                <p className="text-[10px] text-slate-400 font-medium leading-tight mt-1">Trusted Sellers</p>
              </div>
              <div className="sm:border-r sm:border-slate-200/80 sm:pr-3">
                <p className="text-base sm:text-lg font-black text-slate-900 leading-none">50+</p>
                <p className="text-[10px] text-slate-400 font-medium leading-tight mt-1">Categories</p>
              </div>
              <div>
                <p className="text-base sm:text-lg font-black text-slate-900 leading-none">99.9%</p>
                <p className="text-[10px] text-slate-400 font-medium leading-tight mt-1">Secure Transactions</p>
              </div>
            </div>
          </div>

          {/* Bottom Left Quote */}
          <div className="pt-6 pb-4">
            <p className="italic text-xs font-semibold text-slate-700">
              “Opportunities for everyone”
            </p>
            <p className="text-[10px] font-bold text-slate-400 mt-0.5">— SBT</p>
          </div>
        </div>

        {/* Right Section: 3D Archway, Mobile App Showcase & Shopper Scene */}
        <div className="lg:w-[52%] xl:w-[54%] flex flex-col justify-between items-end overflow-hidden relative">
          <div className="w-full flex-1 flex items-center justify-center lg:justify-end overflow-hidden">
            <img
              src={buyerScene}
              alt="SBT 3D Buyer Archway Scene with Mobile App Showcase and Shopper"
              className="w-full h-auto max-h-[660px] object-contain object-right select-none pointer-events-none drop-shadow-sm"
              loading="eager"
            />
          </div>

          {/* Bottom Right Brand Pillar */}
          <div className="w-full flex items-center justify-end px-8 pb-6 pt-2 select-none">
            <div className="flex flex-col items-end">
              <div className="w-6 h-[2.5px] bg-[#DF1927] rounded-full mb-1.5" />
              <p className="font-bold text-[10px] sm:text-[11px] text-slate-400 tracking-[0.25em] uppercase">
                SELL &nbsp;|&nbsp; BUY &nbsp;|&nbsp; TRUST
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
