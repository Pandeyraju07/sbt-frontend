import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ChevronRight,
  Star,
  Tag,
  CreditCard,
  RefreshCw,
  Truck,
  RotateCcw,
  ShieldCheck,
  Award,
  ShoppingCart,
  Heart,
  BarChart2,
  Share2,
  MapPin,
  CheckCircle2,
  Smartphone,
  Cpu,
  Camera,
  Layers,
} from 'lucide-react'
import { toast } from 'sonner'
import { MarketplaceNavbar } from '@/components/marketplace/marketplace-navbar'
import { MarketplaceFooter } from '@/components/marketplace/marketplace-footer'
import { CartDrawer, type CartItem } from '@/components/marketplace/cart-drawer'
import { PincodeModal } from '@/components/marketplace/pincode-modal'
import { ROUTES } from '@/constants/routes'

import iphoneMainImg from '@/assets/iphone15-showcase.png'
import iphone15Blue from '@/assets/premium/iphone15-blue.jpg'
import iphone15Black from '@/assets/premium/iphone15-black.jpg'
import iphone15Pink from '@/assets/premium/iphone15-pink.jpg'
import iphone15Yellow from '@/assets/premium/iphone15-yellow.jpg'
import iphone15Green from '@/assets/premium/iphone15-green.jpg'
import iphoneGallery1 from '@/assets/premium/iphone-15-model-unselect-gallery-1-202309.jpg'
import iphoneGallery2 from '@/assets/premium/iphone-15-model-unselect-gallery-2-202309.jpg'

export const ProductDetailPage: React.FC = () => {
  const navigate = useNavigate()

  // Gallery state
  const [selectedThumb, setSelectedThumb] = useState(0)

  // Variant configurator state
  const [selectedColor, setSelectedColor] = useState('Blue')
  const [selectedStorage, setSelectedStorage] = useState('128 GB')
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('about')

  // Global state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: {
        id: 'deal-1',
        name: 'Apple iPhone 15 (128 GB)',
        category: 'Mobiles',
        discount: '24% off',
        price: '₹52,999',
        priceNum: 52999,
        originalPrice: '₹69,900',
        originalPriceNum: 69900,
        image: iphone15Blue,
        rating: 4.7,
        reviewsCount: 12400,
        sellerName: 'SBT Official',
        inStock: true,
      },
      quantity: 1,
    },
  ])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [currentCity, setCurrentCity] = useState('New Delhi')
  const [currentPincode, setCurrentPincode] = useState('110001')
  const [isPincodeModalOpen, setIsPincodeModalOpen] = useState(false)

  // Prices based on storage
  const pricingByStorage: Record<
    string,
    { price: string; priceNum: number; original: string; discount: string }
  > = {
    '128 GB': { price: '₹52,999', priceNum: 52999, original: '₹69,900', discount: '24% off' },
    '256 GB': { price: '₹62,999', priceNum: 62999, original: '₹79,900', discount: '21% off' },
    '512 GB': { price: '₹82,999', priceNum: 82999, original: '₹99,900', discount: '17% off' },
  }

  const currentPricing = pricingByStorage[selectedStorage] ?? pricingByStorage['128 GB']!

  const colorPhotos: Record<string, string> = {
    Blue: iphone15Blue,
    Black: iphone15Black,
    Pink: iphone15Pink,
    Yellow: iphone15Yellow,
    Green: iphone15Green,
  }

  const activeColorPhoto = colorPhotos[selectedColor] || iphone15Blue

  const thumbnails = [
    { id: 0, image: activeColorPhoto, preview: activeColorPhoto, label: `${selectedColor} Studio Finish` },
    { id: 1, image: iphoneGallery1, preview: iphoneGallery1, label: 'Aerospace-Grade Precision Enclosure' },
    { id: 2, image: iphoneGallery2, preview: iphoneGallery2, label: '48 MP Main Camera Sensor' },
    { id: 3, image: iphoneMainImg, preview: iphoneMainImg, label: 'Hero Dual Angle Overview' },
    { id: 4, image: iphone15Black, preview: iphone15Black, label: 'Sleek Dark Finish' },
  ]

  const colors = [
    { name: 'Blue', hex: '#8FBAD6', ringHex: '#60A5FA' },
    { name: 'Black', hex: '#353839', ringHex: '#64748B' },
    { name: 'Pink', hex: '#F3C5CD', ringHex: '#F472B6' },
    { name: 'Yellow', hex: '#F6E6A7', ringHex: '#FBBF24' },
    { name: 'Green', hex: '#CEE3D0', ringHex: '#34D399' },
  ]

  const storageOptions = ['128 GB', '256 GB', '512 GB']

  const handleAddToCart = () => {
    const newItem: CartItem = {
      product: {
        id: `iphone-15-${selectedStorage}-${selectedColor}`,
        name: `Apple iPhone 15 (${selectedStorage}) - ${selectedColor}`,
        category: 'Mobiles',
        discount: currentPricing.discount,
        price: currentPricing.price,
        priceNum: currentPricing.priceNum,
        originalPrice: currentPricing.original,
        originalPriceNum: currentPricing.priceNum + 16901,
        image: activeColorPhoto,
        rating: 4.7,
        reviewsCount: 12400,
        sellerName: 'SBT Official',
        inStock: true,
      },
      quantity: quantity,
    }

    setCartItems((prev) => [...prev, newItem])
    toast.success('Added to Shopping Cart', {
      description: `Apple iPhone 15 (${selectedStorage}) in ${selectedColor} • ${currentPricing.price}`,
      action: {
        label: 'View Cart',
        onClick: () => setIsCartOpen(true),
      },
    })
  }

  const handleBuyNow = () => {
    navigate(ROUTES.checkout)
  }

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-slate-900 font-sans selection:bg-red-100 selection:text-red-900 antialiased">
      {/* 1. Global Navigation Bar */}
      <MarketplaceNavbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenPincodeModal={() => setIsPincodeModalOpen(true)}
        currentPincode={currentPincode}
        currentCity={currentCity}
        activeCategory="mobiles"
      />

      <main className="flex-1 w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-5">
        {/* ================================================================= */}
        {/* BREADCRUMBS                                                       */}
        {/* ================================================================= */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-500 py-2 overflow-x-auto no-scrollbar">
          <Link to={ROUTES.home} className="hover:text-slate-900 transition">
            Home
          </Link>
          <ChevronRight className="size-3 text-slate-400 shrink-0" />
          <Link to={ROUTES.categoryMobiles} className="hover:text-slate-900 transition">
            Mobiles
          </Link>
          <ChevronRight className="size-3 text-slate-400 shrink-0" />
          <Link to={ROUTES.categoryMobiles} className="hover:text-slate-900 transition">
            Smartphones
          </Link>
          <ChevronRight className="size-3 text-slate-400 shrink-0" />
          <span className="hover:text-slate-900 transition cursor-pointer">Apple</span>
          <ChevronRight className="size-3 text-slate-400 shrink-0" />
          <span className="font-semibold text-slate-900 truncate">
            Apple iPhone 15 ({selectedStorage})
          </span>
        </nav>

        {/* ================================================================= */}
        {/* MAIN PRODUCT DETAIL 3-COLUMN SHOWCASE (MATCHING REFERENCE)        */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-4 pb-10">
          {/* --------------------------------------------------------------- */}
          {/* LEFT: GALLERY THUMBNAIL STRIP + HIGH-RES SHOWCASE IMAGE         */}
          {/* --------------------------------------------------------------- */}
          <div className="lg:col-span-5 flex gap-4 sm:gap-6 items-start">
            {/* Vertical Thumbnails */}
            <div className="flex flex-col gap-2.5 shrink-0">
              {thumbnails.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedThumb(t.id)}
                  className={`size-14 sm:size-16 rounded-xl border p-1 bg-slate-50/80 flex items-center justify-center transition cursor-pointer relative overflow-hidden ${
                    selectedThumb === t.id
                      ? 'border-blue-500 ring-2 ring-blue-500/20 bg-white'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                  title={t.label}
                >
                  <img
                    src={t.image}
                    alt={t.label}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>

            {/* Main Showcase Photo Box */}
            <div className="flex-1 aspect-[3/4] max-h-[560px] rounded-3xl bg-white border border-slate-200/80 flex items-center justify-center p-6 relative overflow-hidden group shadow-xs">
              <img
                src={thumbnails[selectedThumb]?.preview || activeColorPhoto}
                alt={`Apple iPhone 15 ${selectedColor} Full High Resolution Studio`}
                className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110 drop-shadow-md select-none"
                loading="eager"
              />
              <div className="absolute bottom-3 right-4 px-2.5 py-1 rounded-full bg-slate-900/70 text-white text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                🔍 Hover to zoom
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------- */}
          {/* CENTER: PRODUCT CONFIGURATOR, SPECS, OFFERS                     */}
          {/* --------------------------------------------------------------- */}
          <div className="lg:col-span-4 space-y-5">
            {/* Brand & Title */}
            <div>
              <span className="text-xs font-semibold text-slate-500 block">Apple</span>
              <h1 className="text-2xl sm:text-[28px] font-black text-slate-950 tracking-tight leading-tight mt-0.5">
                Apple iPhone 15 ({selectedStorage})
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                6.1" Super Retina XDR Display | A16 Bionic Chip | 48 MP Camera | iOS 17
              </p>
            </div>

            {/* Rating & Best Seller Badge */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1.5 text-xs text-slate-700">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold">4.7</span>
                <span className="text-slate-400">(12.4K ratings) ▾</span>
              </div>

              <div className="flex items-center gap-1 text-[11px] font-bold">
                <span className="px-2 py-0.5 rounded bg-[#DF1927] text-white">
                  #1 Best Seller
                </span>
                <span className="text-slate-600 font-medium">in Smartphones</span>
              </div>
            </div>

            {/* Price Block (Matching screenshot) */}
            <div className="pt-2 border-t border-slate-100">
              <div className="flex items-baseline gap-2.5 flex-wrap">
                <span className="text-3xl sm:text-[34px] font-black text-[#DF1927] tracking-tight">
                  {currentPricing.price}
                </span>
                <span className="text-sm text-slate-400 line-through">
                  {currentPricing.original}
                </span>
                <span className="text-sm font-bold text-emerald-600">
                  {currentPricing.discount}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5 font-normal">
                Inclusive of all taxes
              </p>
            </div>

            {/* Bank Offer Banner */}
            <div className="p-3.5 rounded-2xl bg-[#FFF6F4] border border-[#FDE5E0] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="size-7 rounded-lg bg-red-100 text-[#DF1927] flex items-center justify-center shrink-0">
                  <Tag className="size-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900 leading-tight">
                    Get up to ₹4,000 instant discount
                  </p>
                  <p className="text-[11px] text-slate-500">with selected bank cards</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  toast.info('Bank Offers Available', {
                    description: 'HDFC, ICICI, SBI Cards: Instant 10% off up to ₹4,000.',
                  })
                }}
                className="text-xs font-bold text-[#DF1927] hover:underline whitespace-nowrap cursor-pointer"
              >
                View offers →
              </button>
            </div>

            {/* 6 Value Badges Grid (2x3) */}
            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <div className="p-2.5 rounded-xl border border-slate-100 bg-slate-50/60 flex items-center gap-2.5">
                <CreditCard className="size-4 text-slate-600 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 block text-[11px]">
                    No Cost EMI
                  </span>
                  <span className="text-[10px] text-slate-500">From ₹4,417/month</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl border border-slate-100 bg-slate-50/60 flex items-center gap-2.5">
                <RefreshCw className="size-4 text-slate-600 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 block text-[11px]">
                    Exchange Offer
                  </span>
                  <span className="text-[10px] text-slate-500">Up to ₹32,000 off</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl border border-slate-100 bg-slate-50/60 flex items-center gap-2.5">
                <Truck className="size-4 text-slate-600 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 block text-[11px]">
                    Free Delivery
                  </span>
                  <span className="text-[10px] text-slate-500">By Tomorrow, 29 Sep</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl border border-slate-100 bg-slate-50/60 flex items-center gap-2.5">
                <RotateCcw className="size-4 text-slate-600 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 block text-[11px]">
                    7 Days Replacement
                  </span>
                  <span className="text-[10px] text-slate-500">Easy returns</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl border border-slate-100 bg-slate-50/60 flex items-center gap-2.5">
                <ShieldCheck className="size-4 text-slate-600 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 block text-[11px]">
                    1 Year Warranty
                  </span>
                  <span className="text-[10px] text-slate-500">From Apple</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl border border-slate-100 bg-slate-50/60 flex items-center gap-2.5">
                <Award className="size-4 text-slate-600 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 block text-[11px]">
                    100% Original
                  </span>
                  <span className="text-[10px] text-slate-500">Authorized seller</span>
                </div>
              </div>
            </div>

            {/* Color Selector */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-bold text-slate-800">
                Color:{' '}
                <span className="font-semibold text-slate-600">{selectedColor}</span>
              </span>
              <div className="flex items-center gap-3">
                {colors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => {
                      setSelectedColor(c.name)
                      setSelectedThumb(0)
                    }}
                    className="flex flex-col items-center gap-1 group cursor-pointer"
                  >
                    <div
                      className={`size-8 rounded-full border-2 transition-all p-0.5 flex items-center justify-center ${
                        selectedColor === c.name
                          ? 'border-blue-500 scale-110 shadow-sm'
                          : 'border-transparent hover:border-slate-300'
                      }`}
                    >
                      <div
                        className="size-full rounded-full border border-black/10"
                        style={{ backgroundColor: c.hex }}
                      />
                    </div>
                    <span
                      className={`text-[10px] ${
                        selectedColor === c.name
                          ? 'font-bold text-blue-600'
                          : 'text-slate-500'
                      }`}
                    >
                      {c.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Storage Selector */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-bold text-slate-800">
                Storage:{' '}
                <span className="font-semibold text-slate-600">{selectedStorage}</span>
              </span>
              <div className="flex items-center gap-2.5">
                {storageOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelectedStorage(opt)}
                    className={`h-9 px-4 rounded-xl text-xs font-bold transition cursor-pointer border ${
                      selectedStorage === opt
                        ? 'border-[#DF1927] text-[#DF1927] bg-red-50/30'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-white'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------- */}
          {/* RIGHT: BUY BOX & SELLER BADGE                                    */}
          {/* --------------------------------------------------------------- */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl bg-white border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4 sticky top-24">
              {/* Radio Buy New */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="size-4 rounded-full border-2 border-[#DF1927] flex items-center justify-center">
                    <div className="size-2 rounded-full bg-[#DF1927]" />
                  </div>
                  <span className="text-xs font-bold text-slate-900">Buy New</span>
                </label>
                <div className="text-right">
                  <span className="text-sm font-black text-[#DF1927]">
                    {currentPricing.price}
                  </span>
                  <span className="text-[10px] text-slate-400 line-through ml-1">
                    {currentPricing.original}
                  </span>
                </div>
              </div>

              {/* In Stock & Seller */}
              <div className="space-y-0.5">
                <span className="text-sm font-bold text-emerald-600 block">
                  In Stock
                </span>
                <p className="text-[11px] text-slate-500">
                  Sold by <span className="font-semibold text-slate-700">SBT Official</span>{' '}
                  | Fulfilled by{' '}
                  <span className="font-semibold text-slate-700">SBT</span>
                </p>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-600 font-medium">Quantity:</span>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="h-8 px-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800 bg-slate-50 focus:outline-none cursor-pointer"
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full h-11 rounded-xl bg-[#DF1927] hover:bg-[#C8102E] active:scale-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm shadow-[#DF1927]/25 transition cursor-pointer"
                >
                  <ShoppingCart className="size-4" />
                  <span>Add to Cart</span>
                </button>

                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="w-full h-11 rounded-xl bg-white hover:bg-slate-50 active:scale-95 border border-[#DF1927] text-[#DF1927] font-bold text-xs sm:text-sm flex items-center justify-center transition cursor-pointer"
                >
                  <span>Buy Now</span>
                </button>
              </div>

              {/* Action Links */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => toast.success('Added to your Wishlist!')}
                  className="hover:text-slate-900 transition flex items-center gap-1 cursor-pointer"
                >
                  <Heart className="size-3.5" />
                  <span>Add to Wishlist</span>
                </button>
                <button
                  type="button"
                  onClick={() => toast.info('Comparing iPhone 15 with top models')}
                  className="hover:text-slate-900 transition flex items-center gap-1 cursor-pointer"
                >
                  <BarChart2 className="size-3.5" />
                  <span>Compare</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href)
                    toast.success('Product Link Copied!')
                  }}
                  className="hover:text-slate-900 transition flex items-center gap-1 cursor-pointer"
                >
                  <Share2 className="size-3.5" />
                  <span>Share</span>
                </button>
              </div>

              {/* Delivery Box */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-slate-700 font-medium">
                    <MapPin className="size-3.5 text-slate-500" />
                    <span>
                      Deliver to {currentCity} {currentPincode}
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsPincodeModalOpen(true)}
                    className="text-[11px] font-bold text-blue-600 hover:underline cursor-pointer"
                  >
                    Change
                  </button>
                </div>

                <div className="text-[11px] text-slate-600 space-y-0.5">
                  <p className="font-bold text-slate-900 flex items-center gap-1">
                    <Truck className="size-3 text-emerald-600" />
                    <span>FREE delivery by Tomorrow, 29 Sep</span>
                  </p>
                  <p className="text-slate-500 pl-4">Order within 5 hrs 32 mins</p>
                  <p className="text-slate-500 pl-4">Cash on Delivery available</p>
                </div>
              </div>

              {/* Verified Seller Box (Apple Official Store) */}
              <div className="p-3.5 rounded-2xl border border-slate-100 bg-white space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                      
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1">
                        <span>Apple Official Store</span>
                        <CheckCircle2 className="size-3.5 text-blue-600 fill-blue-50" />
                      </h4>
                      <span className="text-[10px] text-slate-400">
                        Verified SBT Brand Store
                      </span>
                    </div>
                  </div>

                  <Link
                    to={ROUTES.categoryMobiles}
                    className="text-xs font-bold text-blue-600 hover:underline"
                  >
                    View Store
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-1 pt-2 border-t border-slate-100 text-center text-[10px]">
                  <div>
                    <span className="font-bold text-slate-900 block text-xs">4.8 ★</span>
                    <span className="text-slate-400">Seller Rating</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs">99%</span>
                    <span className="text-slate-400">Positive</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs">2M+</span>
                    <span className="text-slate-400">Followers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* BOTTOM TABS: ABOUT ITEM, SPECIFICATIONS, KEY FEATURES             */}
        {/* ================================================================= */}
        <div className="border-t border-slate-200 pt-8 pb-12 space-y-6">
          {/* Tab Navigation */}
          <div className="flex items-center gap-8 border-b border-slate-200 text-xs sm:text-sm font-semibold">
            <button
              type="button"
              onClick={() => setActiveTab('about')}
              className={`pb-3 border-b-2 transition cursor-pointer ${
                activeTab === 'about'
                  ? 'border-[#DF1927] text-[#DF1927]'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              About this item
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('specs')}
              className={`pb-3 border-b-2 transition cursor-pointer ${
                activeTab === 'specs'
                  ? 'border-[#DF1927] text-[#DF1927]'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              Specifications
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('reviews')}
              className={`pb-3 border-b-2 transition cursor-pointer ${
                activeTab === 'reviews'
                  ? 'border-[#DF1927] text-[#DF1927]'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              Reviews (12.4K)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('qna')}
              className={`pb-3 border-b-2 transition cursor-pointer ${
                activeTab === 'qna'
                  ? 'border-[#DF1927] text-[#DF1927]'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              Questions & Answers
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('similar')}
              className={`pb-3 border-b-2 transition cursor-pointer ${
                activeTab === 'similar'
                  ? 'border-[#DF1927] text-[#DF1927]'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              Similar Products
            </button>
          </div>

          {/* Tab Content: About this item */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <h3 className="text-base font-bold text-slate-900">About this item</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                iPhone 15 brings you dynamic performance, an advanced camera system, and a
                beautiful design. With the powerful A16 Bionic chip, stunning 6.1" Super
                Retina XDR display and a 48 MP main camera, it's everything you love, now
                even better.
              </p>
            </div>

            {/* 4 Key Features Cards matching screenshot */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center space-y-2">
                <div className="size-10 rounded-xl bg-white text-slate-800 flex items-center justify-center shadow-2xs">
                  <Smartphone className="size-5" />
                </div>
                <span className="text-xs font-semibold text-slate-800 leading-tight">
                  6.1" Super Retina XDR Display
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center space-y-2">
                <div className="size-10 rounded-xl bg-white text-slate-800 flex items-center justify-center shadow-2xs">
                  <Cpu className="size-5" />
                </div>
                <span className="text-xs font-semibold text-slate-800 leading-tight">
                  A16 Bionic Chip
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center space-y-2">
                <div className="size-10 rounded-xl bg-white text-slate-800 flex items-center justify-center shadow-2xs">
                  <Camera className="size-5" />
                </div>
                <span className="text-xs font-semibold text-slate-800 leading-tight">
                  48 MP Main Camera
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center space-y-2">
                <div className="size-10 rounded-xl bg-white text-slate-800 flex items-center justify-center shadow-2xs">
                  <Layers className="size-5" />
                </div>
                <span className="text-xs font-semibold text-slate-800 leading-tight">
                  iOS 17 Latest OS
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <MarketplaceFooter />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={(id, delta) => {
          setCartItems((prev) =>
            prev
              .map((item) => {
                if (item.product.id === id) {
                  const newQty = item.quantity + delta
                  return newQty > 0 ? { ...item, quantity: newQty } : null
                }
                return item
              })
              .filter(Boolean) as CartItem[]
          )
        }}
        onRemoveItem={(id) => {
          setCartItems((prev) => prev.filter((item) => item.product.id !== id))
        }}
        onClearCart={() => setCartItems([])}
      />

      {/* Pincode Modal */}
      <PincodeModal
        isOpen={isPincodeModalOpen}
        onClose={() => setIsPincodeModalOpen(false)}
        currentPincode={currentPincode}
        currentCity={currentCity}
        onUpdateLocation={(city, pin) => {
          setCurrentCity(city)
          setCurrentPincode(pin)
        }}
      />
    </div>
  )
}
