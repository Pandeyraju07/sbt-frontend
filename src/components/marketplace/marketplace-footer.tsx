import React from 'react'
import { Link } from 'react-router-dom'
import { SbtLogo } from '@/components/sbt-logo'
import { ROUTES } from '@/constants/routes'
import { ShieldCheck, ArrowUp, Globe } from 'lucide-react'

export const MarketplaceFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-[#131A22] text-slate-300 text-xs mt-12">
      {/* Back to top banner */}
      <button
        type="button"
        onClick={scrollToTop}
        className="w-full py-3 bg-[#232F3E] hover:bg-[#37475A] text-slate-200 text-xs font-semibold text-center transition flex items-center justify-center gap-1.5 cursor-pointer"
      >
        <span>Back to top</span>
        <ArrowUp className="size-3.5" />
      </button>

      {/* Main 4-Column Directory */}
      <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-tight">
              Get to Know Us
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to={ROUTES.home} className="hover:text-white transition">
                  About SBT (Sell Buy Trust)
                </Link>
              </li>
              <li>
                <a href="#careers" className="hover:text-white transition">
                  Careers at SBT
                </a>
              </li>
              <li>
                <a href="#press" className="hover:text-white transition">
                  Press Releases
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-white transition">
                  Trust & Safety Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-tight">
              Connect with Us
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#facebook" className="hover:text-white transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#twitter" className="hover:text-white transition">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-white transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#linkedin" className="hover:text-white transition">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Make Money with Us */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-tight">
              Make Money with Us
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link
                  to={ROUTES.categoryMobiles}
                  className="text-[#FF6B6B] hover:text-white font-semibold transition"
                >
                  Explore Mobiles Store
                </Link>
              </li>
              <li>
                <Link to={ROUTES.categoryMobiles} className="hover:text-white transition">
                  Verified Brand Stores
                </Link>
              </li>
              <li>
                <a href="#protect" className="hover:text-white transition">
                  Protect and Build Your Brand
                </a>
              </li>
              <li>
                <a href="#fulfillment" className="hover:text-white transition">
                  Fulfillment by SBT Express
                </a>
              </li>
              <li>
                <Link to={ROUTES.orderSuccess} className="hover:text-white transition">
                  Order Tracking Centre
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Help */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-tight">
              Let Us Help You
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to={ROUTES.orderSuccess} className="hover:text-white transition">
                  Your Account & Orders
                </Link>
              </li>
              <li>
                <Link to={ROUTES.orderSuccess} className="hover:text-white transition">
                  Returns Centre & Refunds
                </Link>
              </li>
              <li>
                <a href="#protection" className="hover:text-white transition flex items-center gap-1 text-emerald-400 font-medium">
                  <ShieldCheck className="size-3.5" />
                  <span>100% Purchase Protection</span>
                </a>
              </li>
              <li>
                <a href="#help" className="hover:text-white transition">
                  Help Centre & 24/7 Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Logo & Country Selector */}
          <div className="flex items-center gap-6">
            <Link to={ROUTES.home} className="hover:opacity-90 transition block">
              <SbtLogo size="lg" format="full" theme="dark" />
            </Link>

            <div className="flex items-center gap-2 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-300">
              <Globe className="size-3.5 text-slate-400" />
              <span>India (English) • 🇮🇳</span>
            </div>
          </div>

          {/* Payment Badges & Trust */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-400">
            <span className="px-2 py-1 rounded bg-[#232F3E] text-slate-200 font-bold">
              UPI
            </span>
            <span className="px-2 py-1 rounded bg-[#232F3E] text-slate-200 font-bold">
              RuPay
            </span>
            <span className="px-2 py-1 rounded bg-[#232F3E] text-slate-200 font-bold">
              Visa
            </span>
            <span className="px-2 py-1 rounded bg-[#232F3E] text-slate-200 font-bold">
              Mastercard
            </span>
            <span className="px-2 py-1 rounded bg-[#232F3E] text-slate-200 font-bold">
              NetBanking
            </span>
            <span className="px-2 py-1 rounded bg-[#232F3E] text-slate-200 font-bold">
              Cash on Delivery
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} SBT — Sell Buy Trust, Inc. All rights reserved. Multi-Vendor E-Commerce Platform.
          </p>
        </div>
      </div>
    </footer>
  )
}
