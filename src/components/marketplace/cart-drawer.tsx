import React from 'react'
import { X, Trash2, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react'
import type { DealProduct } from './todays-deals'
import { toast } from 'sonner'

export interface CartItem {
  product: DealProduct
  quantity: number
}

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  cartItems: CartItem[]
  onUpdateQuantity: (productId: string, delta: number) => void
  onRemoveItem: (productId: string) => void
  onClearCart: () => void
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.priceNum * item.quantity,
    0
  )
  const savings = cartItems.reduce(
    (sum, item) =>
      sum +
      (item.product.originalPriceNum - item.product.priceNum) * item.quantity,
    0
  )

  const handleCheckout = () => {
    toast.success('Order Placed Successfully!', {
      description: `Proceeding with checkout for ₹${subtotal.toLocaleString('en-IN')}. Fast & secure delivery across India!`,
    })
    onClearCart()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="size-9 rounded-xl bg-red-50 text-[#DF1927] flex items-center justify-center">
              <ShoppingBag className="size-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 leading-tight">
                Your Shopping Cart
              </h3>
              <p className="text-xs text-slate-500">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in cart
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <div className="size-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 mb-3">
                <ShoppingBag className="size-8" />
              </div>
              <h4 className="text-base font-bold text-slate-800">Your cart is empty</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-xs">
                Explore today's top deals and discover trusted products from verified sellers.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-5 px-5 py-2.5 rounded-full bg-[#DF1927] text-white text-xs font-semibold hover:bg-[#C8102E] transition shadow-sm cursor-pointer"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.product.id}
                className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 flex gap-3.5 items-center"
              >
                {/* Product Thumbnail */}
                <div className="size-16 rounded-xl bg-white p-1 border border-slate-100 shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold text-slate-900 truncate">
                    {item.product.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-normal">
                    Sold by: {item.product.sellerName}
                  </p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-xs font-bold text-[#DF1927]">
                      {item.product.price}
                    </span>
                    <span className="text-[10px] text-slate-400 line-through">
                      {item.product.originalPrice}
                    </span>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => onRemoveItem(item.product.id)}
                    className="text-slate-400 hover:text-red-500 transition cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 className="size-3.5" />
                  </button>

                  <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden text-xs">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.product.id, -1)}
                      className="px-2 py-0.5 hover:bg-slate-100 text-slate-600 font-bold"
                    >
                      -
                    </button>
                    <span className="px-2 font-semibold text-slate-800">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.product.id, 1)}
                      className="px-2 py-0.5 hover:bg-slate-100 text-slate-600 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout CTA */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-slate-100 bg-white space-y-3">
            {savings > 0 && (
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 text-[11px] font-semibold flex items-center justify-between">
                <span>Total Savings on this order:</span>
                <span>₹{savings.toLocaleString('en-IN')}</span>
              </div>
            )}

            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between text-emerald-600 font-medium">
                <span>Delivery across India</span>
                <span className="uppercase text-[11px] font-bold">FREE</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex justify-between items-baseline">
              <span className="text-sm font-bold text-slate-900">Total Amount</span>
              <span className="text-lg font-black text-[#DF1927]">
                ₹{subtotal.toLocaleString('en-IN')}
              </span>
            </div>

            <button
              type="button"
              onClick={handleCheckout}
              className="w-full py-3 px-4 rounded-xl bg-[#DF1927] hover:bg-[#C8102E] active:scale-95 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#DF1927]/25 transition cursor-pointer"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="size-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
              <ShieldCheck className="size-3.5 text-emerald-600" />
              <span>100% Safe & Secure Multi-Vendor Checkout</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
