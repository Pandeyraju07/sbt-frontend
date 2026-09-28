import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ShieldCheck,
  Check,
  Truck,
  Zap,
  Lock,
  Plus,
} from 'lucide-react'
import { toast } from 'sonner'
import { MarketplaceNavbar } from '@/components/marketplace/marketplace-navbar'
import { MarketplaceFooter } from '@/components/marketplace/marketplace-footer'
import { ROUTES } from '@/constants/routes'

import cartIphone from '@/assets/premium/iphone15-blue.jpg'
import cartAirpods from '@/assets/premium/airpods-pro-2.jpg'
import cartAppleWatch from '@/assets/premium/apple-watch-s9.jpg'

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate()

  // Selected Options state
  const [selectedAddress, setSelectedAddress] = useState('home')
  const [deliveryOption, setDeliveryOption] = useState<'free' | 'express'>('free')
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking' | 'wallets' | 'cod'>('upi')
  const [upiProvider, setUpiProvider] = useState<'gpay' | 'phonepe' | 'paytm' | 'amazonpay'>('gpay')
  const [upiId, setUpiId] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  const items = [
    {
      id: 'item-1',
      name: 'Apple iPhone 15 (128 GB)',
      variant: 'Blue | 128 GB',
      seller: 'SBT Official',
      price: '₹52,999',
      origPrice: '₹69,900',
      image: cartIphone,
      qty: 1,
    },
    {
      id: 'item-2',
      name: 'Apple AirPods Pro (2nd Gen)',
      variant: 'White',
      seller: 'Appario Retail',
      price: '₹18,999',
      origPrice: '₹29,900',
      image: cartAirpods,
      qty: 1,
    },
    {
      id: 'item-3',
      name: 'Apple Watch Series 9',
      variant: 'Midnight | 45 mm',
      seller: 'ClickTech',
      price: '₹41,999',
      origPrice: '₹49,900',
      image: cartAppleWatch,
      qty: 1,
    },
  ]

  const handlePlaceOrder = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      toast.success('Order Placed Successfully!', {
        description: 'Payment authorized via UPI. Confirmation email sent.',
      })
      navigate(ROUTES.orderSuccess)
    }, 1200)
  }

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F8F9FA] text-slate-900 font-sans selection:bg-red-100 selection:text-red-900 antialiased">
      {/* Top Header matching Screenshot 4 */}
      <MarketplaceNavbar cartCount={3} />

      <main className="flex-1 w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 space-y-6">
        {/* Header & Stepper */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Checkout
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Review your details and complete your order
            </p>
          </div>

          {/* Stepper Progress matching Screenshot 4 */}
          <div className="flex items-center gap-2 sm:gap-4 text-xs font-medium">
            {/* Step 1: Address */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] text-slate-500 font-bold mb-1">1</span>
              <div className="size-6 sm:size-7 rounded-full bg-[#DF1927] text-white flex items-center justify-center font-bold text-[11px] shadow-xs">
                <Check className="size-3.5 stroke-[2.5]" />
              </div>
              <span className="font-bold text-slate-900 mt-1 text-[11px]">Address</span>
            </div>

            <div className="w-8 sm:w-16 h-0.5 bg-[#DF1927] -mt-4" />

            {/* Step 2: Payment */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] text-[#DF1927] font-bold mb-1">2</span>
              <div className="size-6 sm:size-7 rounded-full bg-[#DF1927] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                2
              </div>
              <span className="font-bold text-[#DF1927] mt-1 text-[11px]">Payment</span>
            </div>

            <div className="w-8 sm:w-16 h-0.5 bg-slate-200 -mt-4" />

            {/* Step 3: Review */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] text-slate-400 font-bold mb-1">3</span>
              <div className="size-6 sm:size-7 rounded-full border border-slate-300 text-slate-400 flex items-center justify-center text-xs">
                3
              </div>
              <span className="text-slate-500 mt-1 text-[11px]">Review</span>
            </div>

            <div className="w-8 sm:w-16 h-0.5 bg-slate-200 -mt-4" />

            {/* Step 4: Order Placed */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] text-slate-400 font-bold mb-1">4</span>
              <div className="size-6 sm:size-7 rounded-full border border-slate-300 text-slate-400 flex items-center justify-center text-xs">
                4
              </div>
              <span className="text-slate-500 mt-1 text-[11px] whitespace-nowrap">Order Placed</span>
            </div>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ================================================================= */}
          {/* LEFT: 1. ADDRESS, 2. DELIVERY OPTIONS, 3. PAYMENT METHOD          */}
          {/* ================================================================= */}
          <div className="lg:col-span-8 space-y-6">
            {/* STEP 1: Delivery Address */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-7 rounded-full bg-[#DF1927] text-white flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <h2 className="text-base font-bold text-slate-900">
                    Delivery Address
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => toast.info('Add New Address Modal')}
                  className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="size-3.5" />
                  <span>Add New Address</span>
                </button>
              </div>

              {/* Address Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {/* Home Address Card */}
                <div
                  onClick={() => setSelectedAddress('home')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer relative ${
                    selectedAddress === 'home'
                      ? 'border-[#DF1927] ring-2 ring-[#DF1927]/10 bg-red-50/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`size-4 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0 ${
                        selectedAddress === 'home'
                          ? 'border-[#DF1927]'
                          : 'border-slate-300'
                      }`}
                    >
                      {selectedAddress === 'home' && (
                        <div className="size-2 rounded-full bg-[#DF1927]" />
                      )}
                    </div>

                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">Dhiraj Kumar</span>
                        <span className="text-[10px] font-bold text-red-600 bg-red-100 px-1.5 py-0.2 rounded">
                          Home
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        H No. 123, Sector 62, Near Fortis Hospital, Noida, Uttar Pradesh - 201309
                      </p>
                      <p className="text-slate-500 font-mono text-[11px] pt-1">
                        Phone: +91 98765 43210
                      </p>

                      <div className="flex items-center gap-3 pt-2 text-[11px] text-blue-600 font-semibold">
                        <span className="hover:underline">Edit</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-400 hover:text-red-500">Remove</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Address Card */}
                <div
                  onClick={() => setSelectedAddress('office')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer relative ${
                    selectedAddress === 'office'
                      ? 'border-[#DF1927] ring-2 ring-[#DF1927]/10 bg-red-50/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`size-4 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0 ${
                        selectedAddress === 'office'
                          ? 'border-[#DF1927]'
                          : 'border-slate-300'
                      }`}
                    >
                      {selectedAddress === 'office' && (
                        <div className="size-2 rounded-full bg-[#DF1927]" />
                      )}
                    </div>

                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">Dhiraj Kumar</span>
                        <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-1.5 py-0.2 rounded">
                          Office
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        SBT Commerce Hub, Tower A, Sector 136, Noida, Uttar Pradesh - 201304
                      </p>
                      <p className="text-slate-500 font-mono text-[11px] pt-1">
                        Phone: +91 98765 43210
                      </p>

                      <div className="flex items-center gap-3 pt-2 text-[11px] text-blue-600 font-semibold">
                        <span className="hover:underline">Edit</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-400 hover:text-red-500">Remove</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 2: Delivery Options */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="size-7 rounded-full bg-[#DF1927] text-white flex items-center justify-center font-bold text-xs">
                  2
                </div>
                <h2 className="text-base font-bold text-slate-900">
                  Delivery Options
                </h2>
              </div>

              <div className="space-y-3 pt-1">
                {/* Standard Free Delivery */}
                <div
                  onClick={() => setDeliveryOption('free')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    deliveryOption === 'free'
                      ? 'border-[#DF1927] ring-2 ring-[#DF1927]/10 bg-red-50/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`size-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        deliveryOption === 'free' ? 'border-[#DF1927]' : 'border-slate-300'
                      }`}
                    >
                      {deliveryOption === 'free' && (
                        <div className="size-2 rounded-full bg-[#DF1927]" />
                      )}
                    </div>
                    <div className="size-9 rounded-xl bg-red-50 text-[#DF1927] flex items-center justify-center shrink-0">
                      <Truck className="size-4.5" />
                    </div>
                    <div className="text-xs">
                      <p className="font-bold text-slate-900">
                        FREE Delivery • Tomorrow, 29 Sep
                      </p>
                      <p className="text-slate-500 text-[11px]">
                        Delivered by SBT Official Logistics
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                    FREE
                  </span>
                </div>

                {/* Express Delivery */}
                <div
                  onClick={() => setDeliveryOption('express')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    deliveryOption === 'express'
                      ? 'border-[#DF1927] ring-2 ring-[#DF1927]/10 bg-red-50/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`size-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        deliveryOption === 'express'
                          ? 'border-[#DF1927]'
                          : 'border-slate-300'
                      }`}
                    >
                      {deliveryOption === 'express' && (
                        <div className="size-2 rounded-full bg-[#DF1927]" />
                      )}
                    </div>
                    <div className="size-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <Zap className="size-4.5" />
                    </div>
                    <div className="text-xs">
                      <p className="font-bold text-slate-900">
                        Express Delivery • Today, 28 Sep
                      </p>
                      <p className="text-slate-500 text-[11px]">Order within 4 hrs 12 mins</p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-slate-900">₹70</span>
                </div>
              </div>
            </div>

            {/* STEP 3: Payment Method */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-5">
              <div className="flex items-center gap-3">
                <div className="size-7 rounded-full bg-[#DF1927] text-white flex items-center justify-center font-bold text-xs">
                  3
                </div>
                <h2 className="text-base font-bold text-slate-900">Payment Method</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-1">
                {/* Left Method Tabs */}
                <div className="md:col-span-4 space-y-1 text-xs font-semibold text-slate-700 border-r border-slate-100 pr-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`w-full text-left p-2.5 rounded-xl transition flex items-center justify-between cursor-pointer ${
                      paymentMethod === 'upi'
                        ? 'bg-red-50 text-[#DF1927] font-bold'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <span>UPI (Recommended)</span>
                    <span className="text-[10px] bg-red-100 text-[#DF1927] px-1.5 py-0.2 rounded font-bold">
                      FAST
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`w-full text-left p-2.5 rounded-xl transition cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'bg-red-50 text-[#DF1927] font-bold'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    Credit / Debit Card
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('netbanking')}
                    className={`w-full text-left p-2.5 rounded-xl transition cursor-pointer ${
                      paymentMethod === 'netbanking'
                        ? 'bg-red-50 text-[#DF1927] font-bold'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    Net Banking
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('wallets')}
                    className={`w-full text-left p-2.5 rounded-xl transition cursor-pointer ${
                      paymentMethod === 'wallets'
                        ? 'bg-red-50 text-[#DF1927] font-bold'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    Wallets
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`w-full text-left p-2.5 rounded-xl transition cursor-pointer ${
                      paymentMethod === 'cod'
                        ? 'bg-red-50 text-[#DF1927] font-bold'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    Cash on Delivery
                  </button>
                </div>

                {/* Right Method Details (UPI active matching screenshot) */}
                <div className="md:col-span-8 space-y-4">
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-slate-900">Pay using UPI</h4>
                    <p className="text-[11px] text-slate-500">
                      Secure and instant payment with zero transaction fees
                    </p>
                  </div>

                  {/* 4 UPI Apps Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {/* Google Pay */}
                    <div
                      onClick={() => setUpiProvider('gpay')}
                      className={`p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer text-xs transition ${
                        upiProvider === 'gpay'
                          ? 'border-[#DF1927] bg-red-50/30'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div
                        className={`size-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                          upiProvider === 'gpay' ? 'border-[#DF1927]' : 'border-slate-300'
                        }`}
                      >
                        {upiProvider === 'gpay' && (
                          <div className="size-1.5 rounded-full bg-[#DF1927]" />
                        )}
                      </div>
                      <span className="font-bold text-slate-800">Google Pay</span>
                    </div>

                    {/* PhonePe */}
                    <div
                      onClick={() => setUpiProvider('phonepe')}
                      className={`p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer text-xs transition ${
                        upiProvider === 'phonepe'
                          ? 'border-[#DF1927] bg-red-50/30'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div
                        className={`size-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                          upiProvider === 'phonepe'
                            ? 'border-[#DF1927]'
                            : 'border-slate-300'
                        }`}
                      >
                        {upiProvider === 'phonepe' && (
                          <div className="size-1.5 rounded-full bg-[#DF1927]" />
                        )}
                      </div>
                      <span className="font-bold text-slate-800">PhonePe</span>
                    </div>

                    {/* Paytm */}
                    <div
                      onClick={() => setUpiProvider('paytm')}
                      className={`p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer text-xs transition ${
                        upiProvider === 'paytm'
                          ? 'border-[#DF1927] bg-red-50/30'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div
                        className={`size-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                          upiProvider === 'paytm' ? 'border-[#DF1927]' : 'border-slate-300'
                        }`}
                      >
                        {upiProvider === 'paytm' && (
                          <div className="size-1.5 rounded-full bg-[#DF1927]" />
                        )}
                      </div>
                      <span className="font-bold text-slate-800">Paytm</span>
                    </div>

                    {/* Amazon Pay */}
                    <div
                      onClick={() => setUpiProvider('amazonpay')}
                      className={`p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer text-xs transition ${
                        upiProvider === 'amazonpay'
                          ? 'border-[#DF1927] bg-red-50/30'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div
                        className={`size-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                          upiProvider === 'amazonpay'
                            ? 'border-[#DF1927]'
                            : 'border-slate-300'
                        }`}
                      >
                        {upiProvider === 'amazonpay' && (
                          <div className="size-1.5 rounded-full bg-[#DF1927]" />
                        )}
                      </div>
                      <span className="font-bold text-slate-800">Amazon Pay</span>
                    </div>
                  </div>

                  {/* Or Enter UPI ID */}
                  <div className="space-y-1.5 pt-2">
                    <label className="text-[11px] font-semibold text-slate-600 block">
                      Or enter custom UPI ID:
                    </label>
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="yourname@upi or mobile@okhdfcbank"
                      className="w-full h-10 px-3 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#DF1927]"
                    />
                  </div>

                  {/* Security Assurance */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="size-4 text-emerald-600" />
                      <span>100% Encrypted & Secure Payments</span>
                    </span>

                    <div className="flex items-center gap-2 font-bold text-slate-600">
                      <span>UPI</span>
                      <span>•</span>
                      <span>VISA</span>
                      <span>•</span>
                      <span>Mastercard</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================================= */}
          {/* RIGHT: ORDER SUMMARY (3 ITEMS MATCHING SCREENSHOT)                */}
          {/* ================================================================= */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-5 sticky top-24">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-sm font-bold text-slate-900">
                  Order Summary (3 items)
                </h3>
                <Link
                  to={ROUTES.cart}
                  className="text-xs font-bold text-blue-600 hover:underline"
                >
                  Edit Cart
                </Link>
              </div>

              {/* 3 Items List */}
              <div className="space-y-3.5 divide-y divide-slate-100">
                {items.map((item, idx) => (
                  <div key={item.id} className={`flex gap-3 items-center ${idx > 0 ? 'pt-3.5' : ''}`}>
                    <div className="size-14 rounded-xl bg-slate-50 border border-slate-100 p-1 shrink-0 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0 text-xs">
                      <h4 className="font-semibold text-slate-900 truncate">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-slate-400">{item.variant}</p>
                      <p className="text-[10px] text-slate-500">
                        Seller: {item.seller} • Qty: {item.qty}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold text-slate-900 block">
                        {item.price}
                      </span>
                      <span className="text-[10px] text-slate-400 line-through">
                        {item.origPrice}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon Bar */}
              <div className="p-3 rounded-xl bg-red-50/50 border border-red-100 flex items-center justify-between text-xs cursor-pointer hover:bg-red-50 transition">
                <span className="font-bold text-[#DF1927]">Apply Coupon</span>
                <span className="font-semibold text-slate-500 text-[11px]">&gt;</span>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 text-xs text-slate-600 pt-1">
                <div className="flex justify-between">
                  <span>Price (3 items)</span>
                  <span className="font-semibold text-slate-900">₹1,40,897</span>
                </div>
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Discount</span>
                  <span>- ₹26,902</span>
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
                  ₹1,13,995
                </span>
              </div>

              {/* Savings Badge */}
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold text-center">
                🌱 You are saving ₹26,902 on this order!
              </div>

              {/* Place Order CTA */}
              <button
                type="button"
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="w-full h-12 rounded-xl bg-[#DF1927] hover:bg-[#C8102E] active:scale-95 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#DF1927]/25 transition cursor-pointer disabled:opacity-75"
              >
                {isProcessing ? (
                  <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Lock className="size-4" />
                    <span>Place Order</span>
                  </>
                )}
              </button>

              <p className="text-[10px] text-slate-400 text-center leading-relaxed">
                By placing your order, you agree to SBT's{' '}
                <a href="#terms" className="underline">Terms of Service</a> and{' '}
                <a href="#privacy" className="underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </main>

      <MarketplaceFooter />
    </div>
  )
}
