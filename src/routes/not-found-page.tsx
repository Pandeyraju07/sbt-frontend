import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Home,
  Search,
  Store,
  Users,
} from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import { SbtLogo } from '@/components/sbt-logo'
import scene404 from '@/assets/sbt-404-scene.png'

export function NotFoundPage() {
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
            <Link to={ROUTES.buyer.root} className="hover:text-slate-900 transition">
              Buy
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

        {/* Right: Search Input Pill */}
        <div className="relative flex items-center max-w-xs w-full">
          <Search className="pointer-events-none absolute left-3.5 size-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search for products, brands..."
            className="w-full h-9.5 pl-9 pr-4 rounded-full bg-slate-50/80 border border-slate-200/80 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#DF1927] focus:ring-2 focus:ring-[#DF1927]/15 transition"
          />
        </div>
      </header>

      {/* ---------------------------------------------------------------------- */}
      {/* MAIN TWO-COLUMN 404 BODY                                               */}
      {/* ---------------------------------------------------------------------- */}
      <main className="flex-1 w-full flex flex-col lg:flex-row items-stretch overflow-hidden">
        {/* Left Section: 404 Message & Actions */}
        <div className="lg:w-[50%] xl:w-[48%] flex flex-col justify-between p-6 sm:p-10 lg:pl-12 lg:pr-6 pt-6 sm:pt-10 z-10">
          <div className="space-y-4 max-w-xl">
            {/* Red Accent Pill */}
            <div className="w-8 h-[3px] bg-[#DF1927] rounded-full" />

            {/* Eyebrow */}
            <span className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase block">
              PAGE NOT FOUND
            </span>

            {/* Giant 404 Display */}
            <div className="flex items-center text-7xl sm:text-8xl lg:text-[110px] xl:text-[124px] font-black tracking-tight leading-none py-1 select-none">
              <span className="text-slate-900">4</span>
              <span className="text-[#DF1927]">0</span>
              <span className="text-slate-900">4</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-black text-slate-900 tracking-tight leading-[1.12]">
              Looks like you’re
              <br />
              off the <span className="text-[#DF1927]">marketplace.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md pt-1 pb-3">
              The page you’re looking for doesn’t exist or has been moved. Let’s get you back to what matters.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-6 pt-1 pb-4">
              <Link
                to={ROUTES.home}
                className="h-11 px-6 rounded-xl bg-[#DF1927] hover:bg-[#C8102E] active:bg-[#B00D26] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-[#DF1927]/20 transition cursor-pointer"
              >
                <span>Go to Homepage</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                to={ROUTES.buyer.root}
                className="text-xs sm:text-sm font-bold text-slate-900 border-b-2 border-slate-900 pb-0.5 hover:text-[#DF1927] hover:border-[#DF1927] transition cursor-pointer"
              >
                Explore Categories
              </Link>
            </div>

            {/* 3 Quick Destination Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200/70">
              {/* Shop */}
              <Link
                to={ROUTES.buyer.root}
                className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition group cursor-pointer"
              >
                <div className="size-10 rounded-full bg-[#FFF1F2] text-[#DF1927] flex items-center justify-center shrink-0 shadow-2xs">
                  <Home className="size-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#DF1927] transition">
                    Shop
                  </h4>
                  <p className="text-[11px] text-slate-400">Discover great products</p>
                </div>
              </Link>

              {/* Sell */}
              <Link
                to={ROUTES.seller.root}
                className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition group cursor-pointer"
              >
                <div className="size-10 rounded-full bg-[#FFF1F2] text-[#DF1927] flex items-center justify-center shrink-0 shadow-2xs">
                  <Store className="size-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#DF1927] transition">
                    Sell
                  </h4>
                  <p className="text-[11px] text-slate-400">Grow your business</p>
                </div>
              </Link>

              {/* Help */}
              <a
                href="#help"
                className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition group cursor-pointer"
              >
                <div className="size-10 rounded-full bg-[#FFF1F2] text-[#DF1927] flex items-center justify-center shrink-0 shadow-2xs">
                  <Users className="size-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#DF1927] transition">
                    Help
                  </h4>
                  <p className="text-[11px] text-slate-400">Get support</p>
                </div>
              </a>
            </div>
          </div>

          {/* Bottom Left Quote */}
          <div className="pt-8 pb-4">
            <p className="italic text-xs font-semibold text-slate-700">
              “Opportunities for everyone”
            </p>
            <p className="text-[10px] font-bold text-slate-400 mt-0.5">— SBT</p>
          </div>
        </div>

        {/* Right Section: 3D Archway & Floating Card Scene */}
        <div className="lg:w-[50%] xl:w-[52%] flex flex-col justify-between items-end overflow-hidden relative">
          <div className="w-full flex-1 flex items-center justify-center lg:justify-end">
            <img
              src={scene404}
              alt="SBT 404 Archway Scene with Directional Signpost"
              className="w-full h-auto max-h-[640px] object-contain object-right-bottom select-none pointer-events-none drop-shadow-sm"
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
