import React, { useState, useEffect } from 'react'
import { Zap, ArrowRight, ShoppingBag, Eye } from 'lucide-react'
import { toast } from 'sonner'

import dealIphone from '@/assets/premium/iphone15-blue.jpg'
import dealAirpods from '@/assets/premium/airpods-pro-2.jpg'
import dealSmartwatch from '@/assets/premium/apple-watch-s9.jpg'
import dealNikeShoes from '@/assets/premium/deal-shoes.jpg'
import dealHandbag from '@/assets/premium/deal-handbag.jpg'
import dealSamsungTv from '@/assets/premium/deal-tv.jpg'
import dealMixer from '@/assets/premium/deal-mixer.jpg'
import dealLuggage from '@/assets/premium/deal-luggage.jpg'

export interface DealProduct {
  id: string
  name: string
  category: string
  discount: string
  price: string
  priceNum: number
  originalPrice: string
  originalPriceNum: number
  image: string
  rating: number
  reviewsCount: number
  sellerName: string
  inStock: boolean
}

interface TodaysDealsProps {
  onAddToCart: (product: DealProduct) => void
  onQuickView: (product: DealProduct) => void
}

export const TodaysDeals: React.FC<TodaysDealsProps> = ({
  onAddToCart,
  onQuickView,
}) => {
  // Live Countdown Timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 24,
    seconds: 17,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0)
          return { ...prev, minutes: 59, seconds: 59 }
        if (prev.hours > 0)
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        return { hours: 12, minutes: 0, seconds: 0 }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const dealProducts: DealProduct[] = [
    {
      id: 'deal-1',
      name: 'iPhone 15 (128 GB)',
      category: 'Mobiles',
      discount: '40% OFF',
      price: '₹52,999',
      priceNum: 52999,
      originalPrice: '₹89,900',
      originalPriceNum: 89900,
      image: dealIphone,
      rating: 4.8,
      reviewsCount: 3410,
      sellerName: 'Apex Digital Retailers',
      inStock: true,
    },
    {
      id: 'deal-2',
      name: 'AirPods Pro (2nd Gen)',
      category: 'Electronics',
      discount: '35% OFF',
      price: '₹18,999',
      priceNum: 18999,
      originalPrice: '₹29,900',
      originalPriceNum: 29900,
      image: dealAirpods,
      rating: 4.9,
      reviewsCount: 1980,
      sellerName: 'SoundWave Hub',
      inStock: true,
    },
    {
      id: 'deal-3',
      name: 'Smart Watch Pro',
      category: 'Electronics',
      discount: '50% OFF',
      price: '₹4,999',
      priceNum: 4999,
      originalPrice: '₹9,999',
      originalPriceNum: 9999,
      image: dealSmartwatch,
      rating: 4.6,
      reviewsCount: 820,
      sellerName: 'FitGear India',
      inStock: true,
    },
    {
      id: 'deal-4',
      name: 'Nike Running Shoes',
      category: 'Fashion',
      discount: '30% OFF',
      price: '₹5,999',
      priceNum: 5999,
      originalPrice: '₹8,999',
      originalPriceNum: 8999,
      image: dealNikeShoes,
      rating: 4.7,
      reviewsCount: 654,
      sellerName: 'Urban Athletics Store',
      inStock: true,
    },
    {
      id: 'deal-5',
      name: 'Women Handbag',
      category: 'Fashion',
      discount: '45% OFF',
      price: '₹2,499',
      priceNum: 2499,
      originalPrice: '₹4,599',
      originalPriceNum: 4599,
      image: dealHandbag,
      rating: 4.5,
      reviewsCount: 420,
      sellerName: 'Elegance Leathercraft',
      inStock: true,
    },
    {
      id: 'deal-6',
      name: 'Samsung 4K Smart TV',
      category: 'Appliances',
      discount: '35% OFF',
      price: '₹32,999',
      priceNum: 32999,
      originalPrice: '₹50,999',
      originalPriceNum: 50999,
      image: dealSamsungTv,
      rating: 4.7,
      reviewsCount: 1140,
      sellerName: 'Vision World Electronics',
      inStock: true,
    },
    {
      id: 'deal-7',
      name: 'Mixer Grinder 750W',
      category: 'Appliances',
      discount: '50% OFF',
      price: '₹3,499',
      priceNum: 3499,
      originalPrice: '₹6,999',
      originalPriceNum: 6999,
      image: dealMixer,
      rating: 4.4,
      reviewsCount: 890,
      sellerName: 'Home Essentials Store',
      inStock: true,
    },
    {
      id: 'deal-8',
      name: 'Travel Luggage Bag',
      category: 'Home & Living',
      discount: '40% OFF',
      price: '₹3,999',
      priceNum: 3999,
      originalPrice: '₹6,699',
      originalPriceNum: 6699,
      image: dealLuggage,
      rating: 4.6,
      reviewsCount: 520,
      sellerName: 'GlobeTrekker Gear',
      inStock: true,
    },
  ]

  const formatTimer = (num: number) => num.toString().padStart(2, '0')

  return (
    <section
      id="todays-deals-section"
      className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8"
    >
      {/* =================================================================== */}
      {/* SECTION HEADER WITH TIMER                                           */}
      {/* =================================================================== */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4 flex-wrap">
          {/* Section Title */}
          <div className="flex items-center gap-2">
            <div className="size-7 rounded-lg bg-red-100/70 text-[#DF1927] flex items-center justify-center">
              <Zap className="size-4.5 fill-[#DF1927]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Today's Deals
            </h2>
          </div>

          {/* Countdown Timer Badge matching image */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-xs font-semibold text-[#DF1927]">
            <span className="text-[11px] font-medium text-slate-600">Ends in</span>
            <span className="font-mono tracking-wider font-bold">
              {formatTimer(timeLeft.hours)} : {formatTimer(timeLeft.minutes)} :{' '}
              {formatTimer(timeLeft.seconds)}
            </span>
          </div>
        </div>

        {/* View All Deals Link */}
        <button
          type="button"
          onClick={() => {
            toast.info("Showing all today's flash deals!", {
              description: '8 limited-time flash discounts available.',
            })
          }}
          className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 transition flex items-center gap-1 cursor-pointer"
        >
          <span>View All Deals</span>
          <ArrowRight className="size-3.5" />
        </button>
      </div>

      {/* =================================================================== */}
      {/* DEALS CAROUSEL / GRID (8 ITEMS MATCHING REFERENCE)                  */}
      {/* =================================================================== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
        {dealProducts.map((product) => (
          <div
            key={product.id}
            className="group rounded-2xl bg-white border border-slate-100 hover:border-slate-300 p-2.5 sm:p-3 flex flex-col justify-between transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 relative"
          >
            {/* Top: Discount Badge */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#DF1927] text-white">
                {product.discount}
              </span>

              <button
                type="button"
                onClick={() => onQuickView(product)}
                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-md cursor-pointer"
                title="Quick View"
              >
                <Eye className="size-3.5" />
              </button>
            </div>

            {/* Product Image Box */}
            <div
              onClick={() => onQuickView(product)}
              className="relative w-full aspect-square rounded-xl bg-slate-50 flex items-center justify-center p-2 mb-2.5 overflow-hidden cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Product Title */}
            <div className="space-y-1">
              <h3
                onClick={() => onQuickView(product)}
                className="text-xs font-semibold text-slate-800 truncate hover:text-[#DF1927] transition cursor-pointer"
                title={product.name}
              >
                {product.name}
              </h3>

              {/* Price Row (Matching red bold price and strikethrough original) */}
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <span className="text-xs sm:text-sm font-bold text-[#DF1927]">
                  {product.price}
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-400 line-through">
                  {product.originalPrice}
                </span>
              </div>
            </div>

            {/* Add to Cart Quick Button */}
            <div className="pt-2 mt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => onAddToCart(product)}
                className="w-full py-1.5 px-2 rounded-lg bg-slate-50 hover:bg-[#DF1927] hover:text-white text-slate-700 font-medium text-[11px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <ShoppingBag className="size-3" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
