import React, { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Tag, Store, ShieldCheck } from 'lucide-react'
import slideMarketplaceImg from '@/assets/auth/sbt-slide-marketplace.jpg'
import slideLogisticsImg from '@/assets/auth/sbt-slide-logistics.jpg'
import slideLuxuryImg from '@/assets/auth/sbt-slide-luxury.jpg'
import slideHeroImg from '@/assets/auth/sbt-auth-left-hero.jpg'

export interface SlideItem {
  id: string
  image: string
  tag: string
  title: string
  highlight: string
  subtitle: string
  feature: {
    icon: React.ReactNode
    label: string
  }
}

export function AuthSlideshow() {
  const slides: SlideItem[] = [
    {
      id: 'marketplace',
      image: slideMarketplaceImg,
      tag: 'Smart Marketplace',
      title: 'A Smarter Marketplace for',
      highlight: 'Real Opportunities.',
      subtitle:
        'Connect buyers and sellers on one trusted platform to discover, trade, and grow together.',
      feature: {
        icon: <Tag className="w-3.5 h-3.5 text-[#DF1927] stroke-[1.5]" />,
        label: 'Wide Range of Products',
      },
    },
    {
      id: 'logistics',
      image: slideLogisticsImg,
      tag: 'Enterprise Commerce',
      title: 'Accelerate Business with',
      highlight: 'Nationwide Logistics.',
      subtitle:
        'Zero-friction onboarding, real-time analytics, and guaranteed dispatch for verified merchants.',
      feature: {
        icon: <Store className="w-3.5 h-3.5 text-[#DF1927] stroke-[1.5]" />,
        label: 'Grow Your Business',
      },
    },
    {
      id: 'luxury',
      image: slideLuxuryImg,
      tag: 'Curated Quality',
      title: 'Handpicked Flagship Brands &',
      highlight: 'Lifestyle Goods.',
      subtitle:
        'From high-precision electronics to bespoke lifestyle collections with 100% buyer protection.',
      feature: {
        icon: <ShieldCheck className="w-3.5 h-3.5 text-[#DF1927] stroke-[1.5]" />,
        label: 'Trusted & Secure Transactions',
      },
    },
    {
      id: 'platform',
      image: slideHeroImg,
      tag: 'Unified Ecosystem',
      title: 'One Platform for Discovery,',
      highlight: 'Commerce & Growth.',
      subtitle:
        'Explore thousands of authentic products directly from certified manufacturers and brand owners.',
      feature: {
        icon: <Tag className="w-3.5 h-3.5 text-[#DF1927] stroke-[1.5]" />,
        label: 'Certified Authentic Products',
      },
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      goToNext()
    }, 5500)
    return () => clearInterval(timer)
  }, [goToNext, isPaused])

  const currentSlide = (slides[currentIndex] ?? slides[0]) as SlideItem

  return (
    <div
      className="relative w-full h-full flex flex-col justify-between overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides with crossfade animation */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03]'
              }`}
              style={{
                transitionProperty: 'opacity, transform',
                transitionDuration: '1000ms',
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
              {/* Refined gradient overlay for text readability without obscuring photo clarity */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-white/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-transparent" />
            </div>
          )
        })}
      </div>

      {/* Slide Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20 flex flex-col gap-2">
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Previous slide"
          className="w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 shadow-md backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer border border-slate-200/60"
        >
          <ChevronLeft className="w-4 h-4 stroke-[1.5]" />
        </button>
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next slide"
          className="w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 shadow-md backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer border border-slate-200/60"
        >
          <ChevronRight className="w-4 h-4 stroke-[1.5]" />
        </button>
      </div>

      {/* Slide Content Overlay (NO BOLD TEXT - Clean, medium/regular modern typography) */}
      <div className="relative z-10 p-8 xl:p-12 flex flex-col justify-end h-full">
        <div className="max-w-md space-y-3.5 backdrop-blur-[2px] bg-white/50 p-6 rounded-3xl border border-white/60 shadow-lg shadow-black/5">
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-[#DF1927] text-xs font-medium tracking-wide">
            {currentSlide.feature.icon}
            <span>{currentSlide.tag}</span>
          </div>

          {/* Headline - strictly using font-normal and font-medium (NO bold text) */}
          <h2 className="text-2xl xl:text-3xl font-normal text-slate-900 tracking-tight leading-snug">
            {currentSlide.title}{' '}
            <span className="text-[#DF1927] font-medium">{currentSlide.highlight}</span>
          </h2>

          {/* Subtitle - font-normal */}
          <p className="text-xs xl:text-sm text-slate-600 font-normal leading-relaxed">
            {currentSlide.subtitle}
          </p>

          {/* Progress Indicators & Dots */}
          <div className="pt-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? 'w-8 bg-[#DF1927]'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <div className="text-[11px] text-slate-500 font-normal">
              0{currentIndex + 1} / 0{slides.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
