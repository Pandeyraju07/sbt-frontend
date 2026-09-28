import React from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  Truck,
  Users2,
  Award,
  Store,
} from 'lucide-react'
import { ROUTES } from '@/constants/routes'

export const TrustRibbon: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Secure Transactions',
      description: 'Your trust and safety come first',
    },
    {
      icon: Truck,
      title: 'Fast & Reliable Delivery',
      description: 'Across India',
    },
    {
      icon: Users2,
      title: 'A Community That Grows',
      description: 'Sellers, buyers and partners together',
    },
    {
      icon: Award,
      title: 'Wide Product Selection',
      description: 'From trusted sellers',
    },
    {
      icon: Store,
      title: 'Top Verified Sellers',
      description: '100% genuine products with warranty',
      link: ROUTES.categoryMobiles,
    },
  ]

  return (
    <section className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 py-2 sm:py-4">
      <div className="w-full rounded-2xl bg-white border border-slate-100 shadow-2xs p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
        {pillars.map((item, idx) => {
          const Icon = item.icon
          const content = (
            <div
              key={idx}
              className={`flex items-center gap-3.5 ${
                idx > 0 ? 'pt-4 sm:pt-0 lg:pl-6' : ''
              } group`}
            >
              {/* Red Outline Icon */}
              <div className="size-11 rounded-xl bg-red-50/70 text-[#DF1927] flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                <Icon className="size-5.5 stroke-[1.8]" />
              </div>

              {/* Title & Subtitle */}
              <div className="leading-snug">
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#DF1927] transition">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-500 font-normal mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          )

          if (item.link) {
            return (
              <Link key={idx} to={item.link} className="block">
                {content}
              </Link>
            )
          }

          return <div key={idx}>{content}</div>
        })}
      </div>
    </section>
  )
}
