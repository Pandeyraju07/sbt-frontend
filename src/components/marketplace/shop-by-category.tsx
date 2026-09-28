import React from 'react'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { toast } from 'sonner'

import catMobiles from '@/assets/premium/iphone15-blue.jpg'
import catFashion from '@/assets/premium/cat-fashion.jpg'
import catElectronics from '@/assets/premium/airpods-pro-2.jpg'
import catHomeLiving from '@/assets/premium/cat-homeliving.jpg'
import catBeauty from '@/assets/premium/cat-beauty.jpg'
import catAppliances from '@/assets/premium/cat-appliances.jpg'
import catSports from '@/assets/premium/cat-sports.jpg'
import catToys from '@/assets/premium/cat-toys.jpg'

interface ShopByCategoryProps {
  onSelectCategory?: (category: string) => void
}

export const ShopByCategory: React.FC<ShopByCategoryProps> = ({
  onSelectCategory,
}) => {
  const categoryCards = [
    {
      id: 'cat-1',
      title: 'Mobiles',
      subtitle: 'Latest smartphones',
      image: catMobiles,
      bgTint: 'bg-[#F4F6F9]',
    },
    {
      id: 'cat-2',
      title: 'Fashion',
      subtitle: 'Trendy styles for you',
      image: catFashion,
      bgTint: 'bg-[#FFF6F4]',
    },
    {
      id: 'cat-3',
      title: 'Electronics',
      subtitle: 'Smart tech for modern life',
      image: catElectronics,
      bgTint: 'bg-[#F5F8FF]',
    },
    {
      id: 'cat-4',
      title: 'Home & Living',
      subtitle: 'Make your space better',
      image: catHomeLiving,
      bgTint: 'bg-[#FAF6F2]',
    },
    {
      id: 'cat-5',
      title: 'Beauty & Care',
      subtitle: 'Look good, feel better',
      image: catBeauty,
      bgTint: 'bg-[#FFF5F8]',
    },
    {
      id: 'cat-6',
      title: 'Appliances',
      subtitle: 'Upgrade your home',
      image: catAppliances,
      bgTint: 'bg-[#F3F6F8]',
    },
    {
      id: 'cat-7',
      title: 'Sports & Outdoors',
      subtitle: 'Gear for every adventure',
      image: catSports,
      bgTint: 'bg-[#F4F9F6]',
    },
    {
      id: 'cat-8',
      title: 'Toys & Kids',
      subtitle: 'Play. Learn. Grow.',
      image: catToys,
      bgTint: 'bg-[#FFFDF4]',
    },
  ]

  return (
    <section
      id="shop-by-category-section"
      className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Shop by Category
        </h2>

        <button
          type="button"
          onClick={() => {
            toast.info('Viewing All Marketplace Categories', {
              description: 'Over 500+ verified categories and product sub-tiers.',
            })
          }}
          className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 transition flex items-center gap-1 cursor-pointer"
        >
          <span>View All Categories</span>
          <ArrowRight className="size-3.5" />
        </button>
      </div>

      {/* 8 Category Bento Cards */}
      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {categoryCards.map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                onSelectCategory?.(cat.title)
                toast.success(`Browsing ${cat.title}`, {
                  description: `${cat.subtitle}`,
                })
              }}
              className={`group rounded-2xl ${cat.bgTint} border border-slate-100 hover:border-slate-300 p-3 flex flex-col justify-between transition-all duration-200 hover:shadow-md hover:-translate-y-1 cursor-pointer overflow-hidden relative`}
            >
              {/* Product Photo Box */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-2.5 flex items-center justify-center bg-white/60">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#DF1927] transition truncate">
                  {cat.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-slate-500 font-normal line-clamp-1 mt-0.5">
                  {cat.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll arrow on the right edge */}
        <button
          type="button"
          aria-label="Next categories"
          className="hidden xl:flex absolute -right-3 top-1/2 -translate-y-1/2 size-8 rounded-full bg-white shadow-md border border-slate-200 text-slate-600 items-center justify-center hover:bg-slate-50 transition cursor-pointer z-10"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </section>
  )
}
