import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, ShieldCheck } from 'lucide-react'
import { ROUTES } from '@/constants/routes'

import heroIphone from '@/assets/premium/iphone15-blue.jpg'
import heroAirpods from '@/assets/premium/airpods-pro-2.jpg'
import heroWatch from '@/assets/premium/apple-watch-s9.jpg'
import heroTv from '@/assets/premium/deal-tv.jpg'

export const MarketplaceHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      eyebrow: 'A TRUSTED MARKETPLACE',
      titleLine1: 'Buy. Sell. Grow.',
      titleLine2: 'Together.',
      description:
        'SBT is a secure multi-vendor marketplace where buyers and sellers connect, build trust and create new opportunities.',
      ctaPrimary: 'Shop Now',
      ctaSecondary: 'View Smartphones',
      ctaSecondaryLink: ROUTES.categoryMobiles,
      badgeText: 'Top Brands. Great Prices. Everyday.',
      slideType: 'trio',
    },
    {
      id: 2,
      eyebrow: 'EXCLUSIVE DEALS',
      titleLine1: 'Mega Electronics',
      titleLine2: '& Tech Fest.',
      description:
        'Discover the best prices on 100% verified smartphones, smart accessories, laptops, and home appliances.',
      ctaPrimary: 'Explore Deals',
      ctaSecondary: 'Smartphones Hub',
      ctaSecondaryLink: ROUTES.categoryMobiles,
      badgeText: 'Up to 60% Off on Top Electronics.',
      slideType: 'electronics',
    },
    {
      id: 3,
      eyebrow: 'BEST SELLER SMARTPHONE',
      titleLine1: 'Apple iPhone 15',
      titleLine2: 'Now in Stock.',
      description:
        'Featuring the Dynamic Island, 48MP main camera, and USB-C. Get up to ₹4,000 instant discount with bank offers.',
      ctaPrimary: 'Shop iPhone 15',
      ctaSecondary: 'View Mobiles',
      ctaSecondaryLink: ROUTES.categoryMobiles,
      badgeText: 'Over 12,000+ Verified Customer Ratings.',
      slideType: 'iphone',
    },
  ]

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6500)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const slide = slides[currentSlide] ?? slides[0]!

  return (
    <section className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 pt-4 sm:pt-6">
      <div className="relative w-full rounded-2xl sm:rounded-3xl bg-[#FAF7F2] border border-[#F0ECE1] overflow-hidden shadow-2xs min-h-[300px] sm:min-h-[340px] flex items-center">
        {/* Subtle Background Glow */}
        <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-[#FAF7F2] via-transparent to-transparent pointer-events-none z-10 hidden lg:block" />

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center relative z-20">
          {/* ================================================================= */}
          {/* LEFT: EDITORIAL COPY & CTA BUTTONS                                 */}
          {/* ================================================================= */}
          <div className="lg:col-span-6 px-6 sm:px-10 lg:px-14 py-8 sm:py-10 space-y-4 sm:space-y-5 max-w-xl">
            {/* Eyebrow */}
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.16em] text-slate-500 uppercase block">
              {slide.eyebrow}
            </span>

            {/* Main Headline (Pixel-perfect matching reference image) */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-black text-slate-950 tracking-[-0.03em] leading-[1.08]">
              {slide.titleLine1}
              <br />
              <span className="text-[#DF1927]">{slide.titleLine2}</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-md pt-0.5">
              {slide.description}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              {/* Primary Pill Button: Shop Now */}
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('todays-deals-section')
                  el?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="h-10 sm:h-11 px-6 rounded-full bg-[#DF1927] hover:bg-[#C8102E] active:scale-95 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-sm shadow-[#DF1927]/25 transition-all cursor-pointer"
              >
                <span>{slide.ctaPrimary}</span>
                <ArrowRight className="size-4" />
              </button>

              {/* Secondary Pill Button: Become a Seller */}
              <Link
                to={slide.ctaSecondaryLink}
                className="h-10 sm:h-11 px-6 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 font-semibold text-xs sm:text-sm flex items-center justify-center transition-all shadow-2xs"
              >
                <span>{slide.ctaSecondary}</span>
              </Link>
            </div>

            {/* Slide Pagination Indicators */}
            <div className="pt-4 flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx
                      ? 'w-6 bg-[#DF1927]'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ================================================================= */}
          {/* ================================================================= */}
          {/* RIGHT: HIGH-DEFINITION STUDIO PRODUCT SHOWCASE                    */}
          {/* ================================================================= */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center h-full px-4 lg:px-8 py-4">
            {/* Top Brands Floating Tag */}
            <div className="absolute top-4 right-16 sm:right-24 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/80 shadow-xs">
              <Sparkles className="size-3.5 text-amber-500" />
              <p className="text-[11px] font-bold text-slate-800">
                Top Brands • Verified Quality
              </p>
            </div>

            {/* Dynamic Product Showcase per Slide */}
            <div className="relative w-full max-w-[500px] h-[260px] sm:h-[300px] flex items-center justify-center">
              {slide.slideType === 'iphone' ? (
                /* Slide 3: Flagship iPhone 15 Focus */
                <Link
                  to={ROUTES.productIphone}
                  className="relative group w-full h-full flex items-center justify-center"
                >
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-white/80 p-4 shadow-lg border border-slate-200/80 flex items-center justify-center transition-transform group-hover:scale-105">
                    <img
                      src={heroIphone}
                      alt="Apple iPhone 15 Blue"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#DF1927] text-white text-xs font-bold shadow-md whitespace-nowrap flex items-center gap-1">
                      <ShieldCheck className="size-3.5" />
                      <span>Special ₹52,999</span>
                    </div>
                  </div>
                </Link>
              ) : slide.slideType === 'electronics' ? (
                /* Slide 2: Mega Electronics Showcase */
                <div className="relative w-full h-full flex items-center justify-center gap-3">
                  <div className="w-44 h-48 sm:w-52 sm:h-56 rounded-2xl bg-white p-3 shadow-md border border-slate-200 flex flex-col items-center justify-between">
                    <img
                      src={heroTv}
                      alt="4K Smart TV"
                      className="w-full h-28 object-contain"
                    />
                    <div className="text-center">
                      <p className="text-[11px] font-bold text-slate-800">4K Smart TV</p>
                      <p className="text-xs font-black text-[#DF1927]">₹32,999</p>
                    </div>
                  </div>
                  <div className="w-40 h-44 sm:w-44 sm:h-52 rounded-2xl bg-white p-3 shadow-md border border-slate-200 flex flex-col items-center justify-between">
                    <img
                      src={heroAirpods}
                      alt="AirPods Pro 2"
                      className="w-full h-24 object-contain"
                    />
                    <div className="text-center">
                      <p className="text-[11px] font-bold text-slate-800">AirPods Pro (2nd Gen)</p>
                      <p className="text-xs font-black text-[#DF1927]">₹18,999</p>
                    </div>
                  </div>
                </div>
              ) : (
                /* Slide 1: Trio Ecosystem Showcase */
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Left: AirPods */}
                  <div className="absolute -left-2 sm:left-4 z-10 w-32 h-36 sm:w-36 sm:h-40 rounded-2xl bg-white/95 p-2.5 shadow-md border border-slate-200/90 flex flex-col items-center justify-between transition hover:-translate-y-1">
                    <img
                      src={heroAirpods}
                      alt="AirPods Pro 2"
                      className="w-full h-20 object-contain"
                    />
                    <span className="text-[10px] font-bold text-slate-800 truncate">AirPods Pro</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">35% OFF</span>
                  </div>

                  {/* Center Main: iPhone 15 Blue */}
                  <Link
                    to={ROUTES.productIphone}
                    className="relative z-20 w-44 h-56 sm:w-48 sm:h-64 rounded-3xl bg-white p-3 shadow-xl border border-slate-200 flex flex-col items-center justify-between hover:scale-105 transition-transform"
                  >
                    <img
                      src={heroIphone}
                      alt="Apple iPhone 15"
                      className="w-full h-36 sm:h-44 object-contain"
                    />
                    <div className="text-center pb-1">
                      <span className="text-xs font-bold text-slate-900 block">iPhone 15 (128 GB)</span>
                      <span className="text-xs font-black text-[#DF1927]">₹52,999</span>
                    </div>
                  </Link>

                  {/* Right: Apple Watch */}
                  <div className="absolute -right-2 sm:right-4 z-10 w-32 h-36 sm:w-36 sm:h-40 rounded-2xl bg-white/95 p-2.5 shadow-md border border-slate-200/90 flex flex-col items-center justify-between transition hover:-translate-y-1">
                    <img
                      src={heroWatch}
                      alt="Apple Watch Series 9"
                      className="w-full h-20 object-contain"
                    />
                    <span className="text-[10px] font-bold text-slate-800 truncate">Apple Watch S9</span>
                    <span className="text-[10px] font-bold text-[#DF1927] bg-red-50 px-2 py-0.5 rounded-full">₹41,999</span>
                  </div>
                </div>
              )}
            </div>

            {/* Floating Navigation Circle Buttons < and > (matching screenshot) */}
            <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 flex items-center gap-2 z-30">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                className="size-8 sm:size-9 rounded-full bg-white/95 hover:bg-white text-slate-700 shadow-md border border-slate-200/80 flex items-center justify-center transition hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="size-4.5 stroke-[2.2]" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="size-8 sm:size-9 rounded-full bg-white/95 hover:bg-white text-slate-700 shadow-md border border-slate-200/80 flex items-center justify-center transition hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="size-4.5 stroke-[2.2]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
