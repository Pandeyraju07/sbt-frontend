import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ChevronRight,
  Trash2,
  ShieldCheck,
  Tag,
  ArrowRight,
  Gift,
  Truck,
  RotateCcw,
  Headphones,
} from 'lucide-react'
import { toast } from 'sonner'
import { MarketplaceNavbar } from '@/components/marketplace/marketplace-navbar'
import { MarketplaceFooter } from '@/components/marketplace/marketplace-footer'
import { ROUTES } from '@/constants/routes'

import cartIphone from '@/assets/premium/iphone15-blue.jpg'
import cartAirpods from '@/assets/premium/airpods-pro-2.jpg'
import cartAppleWatch from '@/assets/premium/apple-watch-s9.jpg'

import accCase from '@/assets/premium/acc-case-clear.jpg'
import accCharger from '@/assets/premium/acc-charger-20w.jpg'
import accCable from '@/assets/premium/acc-cable-usbc.jpg'
import accWallet from '@/assets/premium/acc-wallet-magsafe.jpg'
import accMagsafe from '@/assets/premium/acc-magsafe-charger.jpg'

export const CartPage: React.FC = () => {
  const navigate = useNavigate()

  const [items, setItems] = useState([
    {
      id: 'cart-1',
      name: 'Apple iPhone 15 (128 GB)',
      variant: 'Blue | 128 GB',
      seller: 'SBT Official',
      price: '₹52,999',
      priceNum: 52999,
      origPrice: '₹69,900',
      origPriceNum: 69900,
      discount: '24% off',
      image: cartIphone,
      qty: 1,
      selected: true,
      delivery: 'FREE delivery by Tomorrow, 29 Sep',
    },
    {
      id: 'cart-2',
      name: 'Apple AirPods Pro (2nd Gen)',
      variant: 'White',
      seller: 'Appario Retail',
      price: '₹18,999',
      priceNum: 18999,
      origPrice: '₹29,900',
      origPriceNum: 29900,
      discount: '36% off',
      image: cartAirpods,
      qty: 1,
      selected: true,
      delivery: 'FREE delivery by Tomorrow, 29 Sep',
    },
    {
      id: 'cart-3',
      name: 'Apple Watch Series 9',
      variant: 'Midnight | 45 mm',
      seller: 'ClickTech',
      price: '₹41,999',
      priceNum: 41999,
      origPrice: '₹49,900',
      origPriceNum: 49900,
      discount: '16% off',
      image: cartAppleWatch,
      qty: 1,
      selected: true,
      delivery: 'FREE delivery by 1 Oct, Wed',
    },
  ])

  const frequentlyBought = [
    {
      id: 'acc-1',
      name: 'iPhone 15 Clear Case',
      price: '₹1,999',
      priceNum: 1999,
      rating: '4.5',
      reviews: '12K',
      image: accCase,
    },
    {
      id: 'acc-2',
      name: '20W USB-C Charger',
      price: '₹1,799',
      priceNum: 1799,
      rating: '4.6',
      reviews: '8.4K',
      image: accCharger,
    },
    {
      id: 'acc-3',
      name: 'USB-C to Lightning Cable',
      price: '₹1,299',
      priceNum: 1299,
      rating: '4.4',
      reviews: '6.2K',
      image: accCable,
    },
    {
      id: 'acc-4',
      name: 'MagSafe Wallet',
      price: '₹4,999',
      priceNum: 4999,
      rating: '4.3',
      reviews: '3.1K',
      image: accWallet,
    },
    {
      id: 'acc-5',
      name: 'AirPods Pro Case Cover',
      price: '₹599',
      priceNum: 599,
      rating: '4.2',
      reviews: '2.9K',
      image: accMagsafe,
    },
  ]

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta
            return newQty > 0 ? { ...item, qty: newQty } : null
          }
          return item
        })
        .filter(Boolean) as typeof items
    )
  }

  const toggleSelect = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item))
    )
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
    toast.info('Item removed from cart')
  }

  const removeAll = () => {
    setItems([])
    toast.info('All items removed from cart')
  }

  const selectedItems = items.filter((i) => i.selected)
  const totalCount = selectedItems.reduce((sum, i) => sum + i.qty, 0)
  const subtotal = selectedItems.reduce((sum, i) => sum + i.priceNum * i.qty, 0)
  const originalSubtotal = selectedItems.reduce(
    (sum, i) => sum + i.origPriceNum * i.qty,
    0
  )
  const totalSavings = originalSubtotal - subtotal

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F8F9FA] text-slate-900 font-sans selection:bg-red-100 selection:text-red-900 antialiased">
      {/* Top Navbar */}
      <MarketplaceNavbar
        cartCount={totalCount}
        onOpenCart={() => {}}
        onOpenPincodeModal={() => {}}
        currentPincode="110001"
        currentCity="New Delhi"
        activeCategory="mobiles"
      />

      <main className="flex-1 w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 py-4 sm:py-6 space-y-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-500">
          <Link to={ROUTES.home} className="hover:text-slate-900 transition">
            Home
          </Link>
          <ChevronRight className="size-3 text-slate-400" />
          <span className="font-semibold text-slate-900">Cart</span>
        </nav>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ================================================================= */}
          {/* LEFT: CART ITEMS LIST + FREQUENTLY BOUGHT                         */}
          {/* ================================================================= */}
          <div className="lg:col-span-8 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between pb-1">
              <h1 className="text-2xl font-black text-slate-950 tracking-tight">
                Shopping Cart ({items.length} items)
              </h1>

              {items.length > 0 && (
                <button
                  type="button"
                  onClick={removeAll}
                  className="text-xs font-semibold text-[#DF1927] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="size-3.5" />
                  <span>Remove all items</span>
                </button>
              )}
            </div>

            {/* Cart Items Cards List */}
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between transition hover:border-slate-300"
                >
                  <div className="flex items-start gap-4 flex-1">
                    {/* Checkbox */}
                    <input
                      type="checkbox"
                      checked={item.selected}
                      onChange={() => toggleSelect(item.id)}
                      className="mt-1 size-4 accent-[#DF1927] cursor-pointer rounded"
                    />

                    {/* Image Thumbnail */}
                    <div className="size-20 sm:size-24 rounded-2xl bg-slate-50 border border-slate-100 p-2 shrink-0 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Info */}
                    <div className="space-y-1 min-w-0">
                      <h3 className="text-sm font-bold text-slate-900 truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-400">{item.variant}</p>
                      <p className="text-[11px] text-slate-500">
                        Sold by: <span className="font-semibold">{item.seller}</span> |{' '}
                        <span className="font-bold text-emerald-600">In Stock</span>
                      </p>

                      <div className="flex items-center gap-1.5 text-[11px] text-slate-600 pt-1">
                        <Truck className="size-3 text-emerald-600 shrink-0" />
                        <span>{item.delivery}</span>
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                        <Gift className="size-3 text-slate-400" />
                        <span>This will be a gift</span>
                        <a href="#learn" className="text-blue-600 hover:underline">
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Price & Quantity Controls */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <div className="text-left sm:text-right">
                      <div className="flex items-baseline gap-2">
                        <span className="text-base font-black text-[#DF1927]">
                          {item.price}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          {item.origPrice}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">
                        {item.discount}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden text-xs">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2.5 py-1 hover:bg-slate-100 text-slate-600 font-bold"
                        >
                          -
                        </button>
                        <span className="px-3 font-semibold text-slate-900">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2.5 py-1 hover:bg-slate-100 text-slate-600 font-bold"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => toast.info('Saved for later!')}
                        className="text-xs text-blue-600 hover:underline"
                      >
                        Save for later
                      </button>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-slate-400 hover:text-red-500 transition"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Frequently Bought Together Carousel (Matching Screenshot) */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-base font-bold text-slate-900 tracking-tight">
                Frequently Bought Together
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {frequentlyBought.map((acc) => (
                  <div
                    key={acc.id}
                    className="p-3 rounded-2xl bg-slate-50/60 border border-slate-100 flex flex-col justify-between hover:border-slate-300 transition"
                  >
                    <div>
                      <input type="checkbox" className="mb-2 size-3.5 accent-[#DF1927]" />
                      <div className="w-full aspect-square rounded-xl bg-white p-2 mb-2 flex items-center justify-center">
                        <img
                          src={acc.image}
                          alt={acc.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h4 className="text-xs font-semibold text-slate-800 line-clamp-1">
                        {acc.name}
                      </h4>
                      <p className="text-[10px] text-slate-400">
                        ★ {acc.rating} ({acc.reviews})
                      </p>
                    </div>

                    <div className="pt-2 mt-2 border-t border-slate-200/60 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">{acc.price}</span>
                      <button
                        type="button"
                        onClick={() => toast.success(`Added ${acc.name} to cart!`)}
                        className="px-2.5 py-1 rounded-md bg-white border border-red-200 text-[#DF1927] hover:bg-red-50 text-[10px] font-bold transition cursor-pointer"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================================================================= */}
          {/* RIGHT: ORDER SUMMARY & OFFERS (MATCHING SCREENSHOT)               */}
          {/* ================================================================= */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-5">
              <h3 className="text-base font-bold text-slate-900">Order Summary</h3>

              {/* Price Breakdown */}
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Price ({totalCount} items)</span>
                  <span className="font-semibold text-slate-900">
                    ₹{originalSubtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Discount</span>
                  <span>- ₹{totalSavings.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Delivery Charges</span>
                  <span className="uppercase text-[11px] font-bold">FREE</span>
                </div>
              </div>

              {/* Total Row */}
              <div className="pt-3 border-t border-slate-100 flex items-baseline justify-between">
                <div>
                  <span className="text-sm font-bold text-slate-900 block">
                    Total Amount
                  </span>
                  <span className="text-[10px] text-slate-400">Inclusive of all taxes</span>
                </div>
                <span className="text-2xl font-black text-[#DF1927]">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Proceed to Checkout CTA */}
              <button
                type="button"
                onClick={() => navigate(ROUTES.checkout)}
                className="w-full h-12 rounded-xl bg-[#DF1927] hover:bg-[#C8102E] active:scale-95 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#DF1927]/25 transition cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="size-4" />
              </button>
            </div>

            {/* Available Offers Box */}
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-slate-900">Available Offers</h4>
                <a href="#offers" className="text-[11px] font-bold text-blue-600 hover:underline">
                  View All
                </a>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Tag className="size-4 text-[#DF1927]" />
                    <div>
                      <p className="font-semibold text-slate-900">
                        Get up to ₹4,000 instant discount
                      </p>
                      <p className="text-[10px] text-slate-400">with selected bank cards</p>
                    </div>
                  </div>
                  <ChevronRight className="size-3.5 text-slate-400" />
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Tag className="size-4 text-purple-600" />
                    <div>
                      <p className="font-semibold text-slate-900">No Cost EMI</p>
                      <p className="text-[10px] text-slate-400">From ₹4,417/month</p>
                    </div>
                  </div>
                  <ChevronRight className="size-3.5 text-slate-400" />
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Tag className="size-4 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-900">Exchange Offer</p>
                      <p className="text-[10px] text-slate-400">Up to ₹32,000 off</p>
                    </div>
                  </div>
                  <ChevronRight className="size-3.5 text-slate-400" />
                </div>
              </div>
            </div>

            {/* Secure Checkout Card */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs flex items-center gap-3">
              <ShieldCheck className="size-5 text-emerald-600 shrink-0" />
              <div>
                <p className="font-bold text-slate-900">Secure Checkout</p>
                <p className="text-[11px] text-slate-400">
                  Your information is always protected with industry standard encryption.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Value Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-200 text-xs">
          <div className="flex items-center gap-3 p-3">
            <Truck className="size-5 text-[#DF1927]" />
            <div>
              <p className="font-bold text-slate-900">Free & Fast Delivery</p>
              <p className="text-[11px] text-slate-400">Across India</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3">
            <ShieldCheck className="size-5 text-emerald-600" />
            <div>
              <p className="font-bold text-slate-900">Secure Payments</p>
              <p className="text-[11px] text-slate-400">100% safe and encrypted</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3">
            <RotateCcw className="size-5 text-blue-600" />
            <div>
              <p className="font-bold text-slate-900">Easy Returns</p>
              <p className="text-[11px] text-slate-400">7 days return policy</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3">
            <Headphones className="size-5 text-purple-600" />
            <div>
              <p className="font-bold text-slate-900">24/7 Support</p>
              <p className="text-[11px] text-slate-400">We're here to help</p>
            </div>
          </div>
        </div>
      </main>

      <MarketplaceFooter />
    </div>
  )
}
