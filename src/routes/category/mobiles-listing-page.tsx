import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronDown,
  Heart,
  ShoppingCart,
  Search,
} from 'lucide-react'
import { toast } from 'sonner'
import { MarketplaceNavbar } from '@/components/marketplace/marketplace-navbar'
import { MarketplaceFooter } from '@/components/marketplace/marketplace-footer'
import { CartDrawer, type CartItem } from '@/components/marketplace/cart-drawer'
import { PincodeModal } from '@/components/marketplace/pincode-modal'
import { ROUTES } from '@/constants/routes'

import iphone15Img from '@/assets/premium/iphone15-blue.jpg'
import galaxyS24Img from '@/assets/premium/galaxy-s24.png'
import oneplus12Img from '@/assets/premium/oneplus-12.jpg'
import xiaomi14Img from '@/assets/premium/xiaomi-14.png'
import pixel8Img from '@/assets/premium/pixel-8.png'
import iphone13Img from '@/assets/premium/iphone13-blue.jpg'
import galaxyA55Img from '@/assets/premium/samsung-a55.png'
import realme12Img from '@/assets/premium/realme-12.jpg'
import redmiNote13Img from '@/assets/premium/redmi-note-13.jpg'
import vivoV30Img from '@/assets/premium/vivo-v30.jpg'
import iphoneMainImg from '@/assets/iphone15-showcase.png'

export const MobilesListingPage: React.FC = () => {

  // Filter states
  const [selectedBrands, setSelectedBrands] = useState<string[]>(['Apple'])
  const [priceMax, setPriceMax] = useState(200000)
  const [sortBy, setSortBy] = useState('popularity')

  // Global cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [currentCity, setCurrentCity] = useState('New Delhi')
  const [currentPincode, setCurrentPincode] = useState('110001')
  const [isPincodeModalOpen, setIsPincodeModalOpen] = useState(false)

  const mobileProducts = [
    {
      id: 'phone-1',
      name: 'Apple iPhone 15 (128 GB)',
      specs: '6.1" Super Retina XDR Display | A16 Bionic Chip',
      rating: 4.7,
      reviews: '12.4K',
      price: '₹52,999',
      priceNum: 52999,
      origPrice: '₹69,900',
      discount: '24% off',
      badge: 'Best Seller',
      badgeColor: 'bg-[#DF1927] text-white',
      image: iphone15Img,
      brand: 'Apple',
      link: ROUTES.productIphone,
    },
    {
      id: 'phone-2',
      name: 'Samsung Galaxy S24 (256 GB)',
      specs: '6.2" Dynamic AMOLED 2X | Snapdragon 8 Gen 3',
      rating: 4.6,
      reviews: '8.1K',
      price: '₹62,999',
      priceNum: 62999,
      origPrice: '₹89,999',
      discount: '30% off',
      badge: '30% OFF',
      badgeColor: 'bg-red-600 text-white',
      image: galaxyS24Img,
      brand: 'Samsung',
      link: ROUTES.productIphone,
    },
    {
      id: 'phone-3',
      name: 'OnePlus 12 (256 GB)',
      specs: '6.82" Fluid AMOLED | Snapdragon 8 Gen 3',
      rating: 4.5,
      reviews: '5.2K',
      price: '₹54,999',
      priceNum: 54999,
      origPrice: '₹64,999',
      discount: '15% off',
      badge: 'New Launch',
      badgeColor: 'bg-purple-600 text-white',
      image: oneplus12Img,
      brand: 'OnePlus',
      link: ROUTES.productIphone,
    },
    {
      id: 'phone-4',
      name: 'Xiaomi 14 (256 GB)',
      specs: '6.36" AMOLED Display | Snapdragon 8 Gen 3',
      rating: 4.4,
      reviews: '3.8K',
      price: '₹49,999',
      priceNum: 49999,
      origPrice: '₹69,999',
      discount: '29% off',
      badge: 'Great Deal',
      badgeColor: 'bg-red-500 text-white',
      image: xiaomi14Img,
      brand: 'Xiaomi',
      link: ROUTES.productIphone,
    },
    {
      id: 'phone-5',
      name: 'Google Pixel 8 (128 GB)',
      specs: '6.2" OLED Display | Google Tensor G3',
      rating: 4.3,
      reviews: '2.9K',
      price: '₹52,999',
      priceNum: 52999,
      origPrice: '₹64,999',
      discount: '18% off',
      badge: 'No Cost EMI',
      badgeColor: 'bg-red-500 text-white',
      image: pixel8Img,
      brand: 'Google',
      link: ROUTES.productIphone,
    },
    {
      id: 'phone-6',
      name: 'iPhone 13 (128 GB)',
      specs: '6.1" Super Retina XDR Display | A15 Bionic Chip',
      rating: 4.5,
      reviews: '6.1K',
      price: '₹34,999',
      priceNum: 34999,
      origPrice: '₹49,900',
      discount: '29% off',
      badge: 'Refurbished',
      badgeColor: 'bg-slate-800 text-white',
      image: iphone13Img,
      brand: 'Apple',
      link: ROUTES.productIphone,
    },
    {
      id: 'phone-7',
      name: 'Samsung Galaxy A55 (128 GB)',
      specs: '6.6" Super AMOLED | Exynos 1480',
      rating: 4.4,
      reviews: '4.8K',
      price: '₹26,999',
      priceNum: 26999,
      origPrice: '₹39,999',
      discount: '32% off',
      badge: '5G',
      badgeColor: 'bg-red-600 text-white',
      image: galaxyA55Img,
      brand: 'Samsung',
      link: ROUTES.productIphone,
    },
    {
      id: 'phone-8',
      name: 'Realme 12 Pro+ (256 GB)',
      specs: '6.7" AMOLED Display | Snapdragon 7s Gen 2',
      rating: 4.3,
      reviews: '3.6K',
      price: '₹29,999',
      priceNum: 29999,
      origPrice: '₹37,999',
      discount: '21% off',
      badge: 'Trending',
      badgeColor: 'bg-[#DF1927] text-white',
      image: realme12Img,
      brand: 'Realme',
      link: ROUTES.productIphone,
    },
    {
      id: 'phone-9',
      name: 'Redmi Note 13 Pro (256 GB)',
      specs: '6.67" AMOLED Display | Snapdragon 7s Gen 2',
      rating: 4.3,
      reviews: '5.1K',
      price: '₹23,999',
      priceNum: 23999,
      origPrice: '₹29,999',
      discount: '20% off',
      badge: 'Value for Money',
      badgeColor: 'bg-emerald-600 text-white',
      image: redmiNote13Img,
      brand: 'Xiaomi',
      link: ROUTES.productIphone,
    },
    {
      id: 'phone-10',
      name: 'Vivo V30 (256 GB)',
      specs: '6.78" AMOLED Display | Snapdragon 7 Gen 3',
      rating: 4.4,
      reviews: '4.2K',
      price: '₹32,999',
      priceNum: 32999,
      origPrice: '₹41,999',
      discount: '21% off',
      badge: 'Great Price',
      badgeColor: 'bg-red-600 text-white',
      image: vivoV30Img,
      brand: 'Vivo',
      link: ROUTES.productIphone,
    },
  ]

  const handleAddToCart = (product: (typeof mobileProducts)[0]) => {
    const newItem: CartItem = {
      product: {
        id: product.id,
        name: product.name,
        category: 'Mobiles',
        discount: product.discount,
        price: product.price,
        priceNum: product.priceNum,
        originalPrice: product.origPrice,
        originalPriceNum: product.priceNum + 12000,
        image: product.image,
        rating: product.rating,
        reviewsCount: 8200,
        sellerName: 'SBT Official',
        inStock: true,
      },
      quantity: 1,
    }

    setCartItems((prev) => [...prev, newItem])
    toast.success(`Added ${product.name} to Cart`, {
      description: `Price: ${product.price}`,
      action: {
        label: 'View Cart',
        onClick: () => setIsCartOpen(true),
      },
    })
  }

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    )
  }

  const brands = [
    { name: 'Apple', count: 120 },
    { name: 'Samsung', count: 310 },
    { name: 'Xiaomi', count: 210 },
    { name: 'OnePlus', count: 85 },
    { name: 'Realme', count: 142 },
    { name: 'Vivo', count: 176 },
    { name: 'Oppo', count: 134 },
  ]

  const subCategories = [
    'Smartphones',
    'Feature Phones',
    'Refurbished Mobiles',
    'Gaming Phones',
    '5G Mobiles',
    'Accessories',
    'Power Banks',
    'Mobile Cases & Covers',
    'Screen Protectors',
    'Chargers & Cables',
    'Earphones & Headphones',
    'Smart Watches',
    'Tablets',
  ]

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-slate-900 font-sans selection:bg-red-100 selection:text-red-900 antialiased">
      <MarketplaceNavbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenPincodeModal={() => setIsPincodeModalOpen(true)}
        currentPincode={currentPincode}
        currentCity={currentCity}
        activeCategory="mobiles"
      />

      <main className="flex-1 w-full max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 py-4 sm:py-6 space-y-6">
        {/* Top Category Hero Banner (Matching Screenshot 3 in 100% Vector Crispness) */}
        <div className="w-full rounded-3xl overflow-hidden bg-gradient-to-r from-[#FFF5F4] via-[#FFF9F8] to-[#F8F9FA] border border-[#FDE5E0] shadow-xs p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative">
          {/* Left Text Column */}
          <div className="space-y-4 max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-[#DF1927] border-l-2 border-[#DF1927] pl-2">
              Latest Smartphones
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
              Upgrade to <br />
              <span className="text-slate-900">Smarter Living</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Top brands. Great prices. Exclusive deals.
            </p>
            <div className="pt-2">
              <Link
                to={ROUTES.productIphone}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#DF1927] hover:bg-[#C8102E] text-white font-bold text-sm shadow-md shadow-[#DF1927]/25 transition hover:scale-105 active:scale-95"
              >
                Shop Now →
              </Link>
            </div>
          </div>

          {/* Middle Value Props Grid (Matching Screenshot 3) */}
          <div className="grid grid-cols-2 gap-3 max-w-sm w-full">
            <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs flex items-center gap-3">
              <div className="size-10 rounded-xl bg-red-50 text-[#DF1927] flex items-center justify-center font-bold text-base shrink-0">
                📱
              </div>
              <div className="leading-tight">
                <span className="text-xs font-bold text-slate-900 block">Latest Models</span>
                <span className="text-[10px] text-slate-500">From top brands</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs flex items-center gap-3">
              <div className="size-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-base shrink-0">
                🏷️
              </div>
              <div className="leading-tight">
                <span className="text-xs font-bold text-slate-900 block">Best Prices</span>
                <span className="text-[10px] text-slate-500">Across the marketplace</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs flex items-center gap-3">
              <div className="size-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-base shrink-0">
                %
              </div>
              <div className="leading-tight">
                <span className="text-xs font-bold text-slate-900 block">No Cost EMI</span>
                <span className="text-[10px] text-slate-500">On selected cards</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs flex items-center gap-3">
              <div className="size-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-base shrink-0">
                🚚
              </div>
              <div className="leading-tight">
                <span className="text-xs font-bold text-slate-900 block">Fast Delivery</span>
                <span className="text-[10px] text-slate-500">Across India</span>
              </div>
            </div>
          </div>

          {/* Right Product Image Showcase */}
          <div className="w-56 sm:w-64 lg:w-72 shrink-0 flex items-center justify-center drop-shadow-xl">
            <img
              src={iphoneMainImg}
              alt="Flagship Smartphone Showcase"
              className="w-full h-auto object-contain select-none"
              loading="eager"
            />
          </div>
        </div>

        {/* Header Row: Title & Sort */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Mobiles <span className="text-xs font-normal text-slate-500">(1,245 products)</span>
          </h1>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500 hidden sm:inline">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-9 px-3 rounded-xl border border-slate-200 font-semibold text-slate-800 bg-white focus:outline-none cursor-pointer"
            >
              <option value="popularity">Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>
        </div>

        {/* 2-Column Layout: Sidebar Filters + Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ================================================================= */}
          {/* LEFT: FILTERS SIDEBAR (MATCHING SCREENSHOT 3)                     */}
          {/* ================================================================= */}
          <aside className="lg:col-span-3 space-y-6 bg-slate-50/50 p-5 rounded-3xl border border-slate-200/80">
            {/* Category Filter */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center justify-between">
                <span>Category</span>
                <ChevronDown className="size-3.5 text-slate-400" />
              </h3>

              <div className="space-y-1.5 text-xs text-slate-600 pl-1">
                {subCategories.map((sub, i) => (
                  <button
                    key={sub}
                    type="button"
                    className={`block w-full text-left py-0.5 transition cursor-pointer ${
                      i === 0
                        ? 'text-[#DF1927] font-bold pl-2 border-l-2 border-[#DF1927]'
                        : 'hover:text-slate-900'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            <div className="space-y-3 pt-4 border-t border-slate-200/70">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center justify-between">
                <span>Brand</span>
                <ChevronDown className="size-3.5 text-slate-400" />
              </h3>

              {/* Search brand */}
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search brands"
                  className="w-full h-8 pl-8 pr-3 rounded-lg border border-slate-200 text-xs bg-white text-slate-800 focus:outline-none"
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-2 text-xs text-slate-700">
                {brands.map((b) => (
                  <label
                    key={b.name}
                    className="flex items-center justify-between cursor-pointer hover:text-slate-900"
                  >
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(b.name)}
                        onChange={() => toggleBrand(b.name)}
                        className="size-3.5 accent-[#DF1927] rounded"
                      />
                      <span>{b.name}</span>
                    </span>
                    <span className="text-[10px] text-slate-400">({b.count})</span>
                  </label>
                ))}
              </div>
              <span className="text-xs font-bold text-blue-600 hover:underline block cursor-pointer">
                See More
              </span>
            </div>

            {/* Price Range Filter */}
            <div className="space-y-3 pt-4 border-t border-slate-200/70">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center justify-between">
                <span>Price Range</span>
                <ChevronDown className="size-3.5 text-slate-400" />
              </h3>

              <input
                type="range"
                min="1000"
                max="200000"
                step="5000"
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-full accent-[#DF1927] cursor-pointer"
              />

              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>₹1,000</span>
                <span>₹{priceMax.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Customer Rating */}
            <div className="space-y-2.5 pt-4 border-t border-slate-200/70 text-xs">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Customer Rating
              </h3>

              <div className="space-y-1.5 text-slate-600">
                <label className="flex items-center gap-2 cursor-pointer hover:text-slate-900">
                  <input type="checkbox" className="size-3.5 accent-[#DF1927] rounded" />
                  <span className="flex items-center text-amber-500">★★★★☆</span>
                  <span className="text-[11px]">& above (542)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer hover:text-slate-900">
                  <input type="checkbox" className="size-3.5 accent-[#DF1927] rounded" />
                  <span className="flex items-center text-amber-500">★★★☆☆</span>
                  <span className="text-[11px]">& above (1,210)</span>
                </label>
              </div>
            </div>
          </aside>

          {/* ================================================================= */}
          {/* RIGHT: 10 PHONES GRID (5 COLS X 2 ROWS MATCHING SCREENSHOT)       */}
          {/* ================================================================= */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
              {mobileProducts.map((phone) => (
                <div
                  key={phone.id}
                  className="p-3 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-200 hover:shadow-md flex flex-col justify-between group relative"
                >
                  <div>
                    {/* Top Badge & Heart */}
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-[9px] font-bold px-2 py-0.5 rounded ${phone.badgeColor}`}
                      >
                        {phone.badge}
                      </span>
                      <button
                        type="button"
                        onClick={() => toast.success('Added to Wishlist!')}
                        className="text-slate-300 hover:text-red-500 transition cursor-pointer"
                      >
                        <Heart className="size-4" />
                      </button>
                    </div>

                    {/* Image */}
                    <Link
                      to={phone.link}
                      className="block aspect-square w-full rounded-xl bg-slate-50 p-2 mb-2 flex items-center justify-center overflow-hidden"
                    >
                      <img
                        src={phone.image}
                        alt={phone.name}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </Link>

                    {/* Title */}
                    <Link
                      to={phone.link}
                      className="text-xs font-bold text-slate-900 line-clamp-1 group-hover:text-[#DF1927] transition"
                    >
                      {phone.name}
                    </Link>

                    <p className="text-[10px] text-slate-400 line-clamp-2 mt-0.5 leading-snug">
                      {phone.specs}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 text-[11px] text-amber-500 font-semibold mt-1">
                      <span>★ {phone.rating}</span>
                      <span className="text-slate-400 text-[10px]">({phone.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-1.5 flex-wrap mt-1.5">
                      <span className="text-xs sm:text-sm font-bold text-[#DF1927]">
                        {phone.price}
                      </span>
                      <span className="text-[10px] text-slate-400 line-through">
                        {phone.origPrice}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-600">
                        {phone.discount}
                      </span>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <div className="pt-2 mt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => handleAddToCart(phone)}
                      className="w-full py-1.5 px-2 rounded-lg bg-white border border-[#DF1927] hover:bg-[#DF1927] hover:text-white text-[#DF1927] font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ShoppingCart className="size-3" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

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
