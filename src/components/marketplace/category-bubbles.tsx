import React from 'react'
import {
  LayoutGrid,
  BookOpen,
  Car,
  ShoppingBasket,
  HeartPulse,
  Armchair,
} from 'lucide-react'

import bubbleMobiles from '@/assets/premium/iphone15-blue.jpg'
import bubbleFashion from '@/assets/premium/cat-fashion.jpg'
import bubbleElectronics from '@/assets/premium/airpods-pro-2.jpg'
import bubbleHomeLiving from '@/assets/premium/cat-homeliving.jpg'
import bubbleBeauty from '@/assets/premium/cat-beauty.jpg'
import bubbleAppliances from '@/assets/premium/cat-appliances.jpg'
import bubbleToys from '@/assets/premium/cat-toys.jpg'
import bubbleSports from '@/assets/premium/cat-sports.jpg'

interface CategoryBubblesProps {
  onSelectCategory?: (categoryName: string) => void
}

export const CategoryBubbles: React.FC<CategoryBubblesProps> = ({
  onSelectCategory,
}) => {
  const categories = [
    { id: 'mobiles', name: 'Mobiles', image: bubbleMobiles, isCover: false },
    { id: 'fashion', name: 'Fashion', image: bubbleFashion, isCover: true },
    { id: 'electronics', name: 'Electronics', image: bubbleElectronics, isCover: false },
    { id: 'homeliving', name: 'Home & Living', image: bubbleHomeLiving, isCover: true },
    { id: 'beauty', name: 'Beauty', image: bubbleBeauty, isCover: true },
    { id: 'appliances', name: 'Appliances', image: bubbleAppliances, isCover: true },
    { id: 'toys', name: 'Toys & Kids', image: bubbleToys, isCover: true },
    { id: 'sports', name: 'Sports', image: bubbleSports, isCover: true },
    { id: 'books', name: 'Books', icon: BookOpen, iconBg: 'bg-purple-50 text-purple-600' },
    { id: 'automotive', name: 'Automotive', icon: Car, iconBg: 'bg-slate-100 text-slate-700' },
    { id: 'grocery', name: 'Grocery', icon: ShoppingBasket, iconBg: 'bg-emerald-50 text-emerald-600' },
    { id: 'health', name: 'Health', icon: HeartPulse, iconBg: 'bg-rose-50 text-rose-600' },
    { id: 'furniture', name: 'Furniture', icon: Armchair, iconBg: 'bg-amber-50 text-amber-700' },
    { id: 'more', name: 'More', isGridIcon: true },
  ]

  return (
    <section className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
      <div className="flex items-center justify-between gap-3 sm:gap-4 overflow-x-auto no-scrollbar py-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => {
              onSelectCategory?.(cat.name)
              const el = document.getElementById('shop-by-category-section')
              el?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="flex flex-col items-center gap-2 shrink-0 group cursor-pointer"
          >
            {/* Round Bubble Container */}
            <div className="size-14 sm:size-16 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center p-2 overflow-hidden transition-all duration-200 group-hover:scale-105 group-hover:border-[#DF1927]/60 group-hover:shadow-md group-hover:shadow-red-500/10 shrink-0">
              {cat.isGridIcon ? (
                <LayoutGrid className="size-6 text-slate-700 group-hover:text-[#DF1927] transition" />
              ) : cat.icon ? (
                <cat.icon className="size-6 text-slate-700 group-hover:text-[#DF1927] transition" />
              ) : (
                <img
                  src={cat.image}
                  alt={cat.name}
                  className={`w-full h-full ${
                    cat.isCover ? 'object-cover rounded-full' : 'object-contain'
                  } select-none pointer-events-none transition-transform duration-200 group-hover:scale-105`}
                  loading="lazy"
                />
              )}
            </div>

            {/* Category Label */}
            <span className="text-[11px] sm:text-xs font-semibold text-slate-700 group-hover:text-[#DF1927] transition leading-tight text-center whitespace-nowrap">
              {cat.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
