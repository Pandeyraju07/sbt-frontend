import React, { useState } from 'react'
import {
  X,
  Star,
  ShieldCheck,
  Truck,
  Store,
  CheckCircle2,
  ShoppingBag,
} from 'lucide-react'
import type { DealProduct } from './todays-deals'

interface ProductQuickViewProps {
  product: DealProduct | null
  onClose: () => void
  onAddToCart: (product: DealProduct, quantity: number) => void
}

export const ProductQuickView: React.FC<ProductQuickViewProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1)

  if (!product) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl rounded-3xl bg-white border border-slate-100 shadow-2xl p-6 sm:p-8 relative animate-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
        >
          <X className="size-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Product Image */}
          <div className="relative rounded-2xl bg-slate-50 border border-slate-100 p-6 aspect-square flex items-center justify-center">
            <span className="absolute top-4 left-4 text-xs font-bold px-2.5 py-1 rounded-md bg-[#DF1927] text-white">
              {product.discount}
            </span>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <div>
              <span className="text-[11px] font-semibold text-[#DF1927] uppercase tracking-wider block">
                {product.category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mt-0.5">
                {product.name}
              </h3>
            </div>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-2 text-xs">
              <div className="flex items-center text-amber-500 font-bold gap-1 bg-amber-50 px-2 py-0.5 rounded-md">
                <Star className="size-3.5 fill-amber-500" />
                <span>{product.rating}</span>
              </div>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500">{product.reviewsCount} Verified Ratings</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2.5">
              <span className="text-2xl font-black text-[#DF1927]">
                {product.price}
              </span>
              <span className="text-xs text-slate-400 line-through">
                {product.originalPrice}
              </span>
              <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                Save {(product.originalPriceNum - product.priceNum).toLocaleString('en-IN')} ₹
              </span>
            </div>

            {/* SBT Seller Trust & Multi-Vendor Verification Info */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <Store className="size-4 text-[#DF1927]" />
                <span>Sold by: {product.sellerName}</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded flex items-center gap-1">
                  <CheckCircle2 className="size-3" />
                  Verified Store
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                <Truck className="size-3.5 text-blue-600" />
                <span>Standard Delivery: 2-3 Business Days Across India</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                <ShieldCheck className="size-3.5 text-emerald-600" />
                <span>7-Day Replacement Guarantee • 100% Genuine SBT Verified</span>
              </div>
            </div>

            {/* Quantity Selector & Add to Cart */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-700">Quantity:</span>
                <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden text-xs">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2.5 py-1 hover:bg-slate-100 text-slate-600 font-bold"
                  >
                    -
                  </button>
                  <span className="px-3 font-semibold text-slate-900">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2.5 py-1 hover:bg-slate-100 text-slate-600 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  onAddToCart(product, quantity)
                  onClose()
                }}
                className="w-full py-3 px-5 rounded-xl bg-[#DF1927] hover:bg-[#C8102E] active:scale-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-[#DF1927]/25 transition cursor-pointer"
              >
                <ShoppingBag className="size-4" />
                <span>Add to Cart • {(product.priceNum * quantity).toLocaleString('en-IN')} ₹</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
