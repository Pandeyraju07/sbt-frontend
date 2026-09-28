import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { AuthSlideshow } from './auth-slideshow'
import headerLogoImg from '@/assets/auth/sbt-header-logo.png'

export interface AuthLayoutProps {
  children: React.ReactNode
  variant?: 'login' | 'register' | 'forgot-password' | 'reset-password'
  topAction?: {
    label: string
    buttonText: string
    to: string
  }
}

export function AuthLayout({
  children,
  variant: _variant = 'login',
  topAction,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-[#FAFAFC] flex flex-col lg:flex-row relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* LEFT COLUMN: Dynamic High-Definition Project Slideshow */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-[52%] relative bg-slate-50 flex-col justify-between border-r border-slate-100 overflow-hidden min-h-screen">
        {/* Brand Header Overlay on top-left of slide view */}
        <div className="absolute top-8 left-8 xl:left-12 z-20 pointer-events-auto">
          <Link
            to={ROUTES.home}
            className="inline-block transition-transform hover:opacity-90 focus:outline-none"
            title="Return to SBT Marketplace Home"
          >
            <img
              src={headerLogoImg}
              alt="SBT - Sell Buy Trust"
              className="h-12 w-auto object-contain filter drop-shadow-sm"
            />
          </Link>
        </div>

        {/* High-Definition Interactive Carousel of Project Slides */}
        <div className="relative w-full h-full flex-1">
          <AuthSlideshow />
        </div>

        {/* Bottom subtle copyright / branding - non-bold */}
        <div className="absolute bottom-4 left-8 xl:left-12 z-20 text-[11px] text-slate-500 font-normal">
          © 2026 SBT (Sell Buy Trust). One Platform. Real Opportunities.
        </div>
      </div>

      {/* RIGHT COLUMN: Floating Card & Form Container */}
      <div className="w-full lg:w-1/2 xl:w-[48%] flex flex-col justify-between p-4 sm:p-8 lg:p-12 relative min-h-screen bg-[#FDFDFE]">
        {/* Subtle decorative background ambient glow */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-gradient-to-br from-rose-100/40 via-red-50/20 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-gradient-to-tr from-rose-100/30 to-transparent blur-3xl pointer-events-none" />

        {/* Top-Right Action Link - clean non-bold styling */}
        <div className="w-full flex justify-end items-center mb-4 sm:mb-6 z-20">
          {topAction ? (
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-normal">
              <span>{topAction.label}</span>
              <Link
                to={topAction.to}
                className="px-4 py-1.5 rounded-full border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-700 font-medium text-xs transition-colors shadow-sm"
              >
                {topAction.buttonText}
              </Link>
            </div>
          ) : (
            <div className="h-8" />
          )}
        </div>

        {/* Center Floating Card */}
        <div className="flex-1 flex items-center justify-center my-auto z-10 w-full py-4 sm:py-6">
          <div className="w-full max-w-[460px] bg-white rounded-[28px] sm:rounded-[32px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] border border-slate-100 p-6 sm:p-10 transition-all">
            {children}
          </div>
        </div>

        {/* Mobile-only Quick Links / Footer - non-bold */}
        <div className="text-center text-xs text-slate-400 font-normal py-3 z-10">
          <Link to={ROUTES.home} className="hover:text-slate-600 underline transition-colors">
            Back to Marketplace
          </Link>
          <span className="mx-2">•</span>
          <span>Terms & Privacy</span>
        </div>
      </div>
    </div>
  )
}
