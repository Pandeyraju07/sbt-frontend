import React, { useState } from 'react'
import { MarketplaceNavbar } from './marketplace-navbar'
import { MarketplaceHero } from './marketplace-hero'
import { CategoryBubbles } from './category-bubbles'
import { TrustRibbon } from './trust-ribbon'
import { TodaysDeals } from './todays-deals'
import type { DealProduct } from './todays-deals'
import { ShopByCategory } from './shop-by-category'
import { CartDrawer } from './cart-drawer'
import type { CartItem } from './cart-drawer'
import { PincodeModal } from './pincode-modal'
import { ProductQuickView } from './product-quick-view'
import { MarketplaceFooter } from './marketplace-footer'
import { toast } from 'sonner'

export const SbtMarketplacePage: React.FC = () => {
  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Delivery Location state (defaults to New Delhi 110001 matching screenshot)
  const [currentCity, setCurrentCity] = useState('New Delhi')
  const [currentPincode, setCurrentPincode] = useState('110001')
  const [isPincodeModalOpen, setIsPincodeModalOpen] = useState(false)

  // Quick View Product modal
  const [quickViewProduct, setQuickViewProduct] = useState<DealProduct | null>(null)

  const handleAddToCart = (product: DealProduct, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { product, quantity }]
    })

    toast.success(`Added ${product.name} to Cart`, {
      description: `Quantity: ${quantity} • Price: ${product.price}`,
      action: {
        label: 'View Cart',
        onClick: () => setIsCartOpen(true),
      },
    })
  }

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta
            return newQty > 0 ? { ...item, quantity: newQty } : null
          }
          return item
        })
        .filter(Boolean) as CartItem[]
    )
  }

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId))
    toast.info('Item removed from cart')
  }

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#FDFDFD] text-slate-900 font-sans selection:bg-red-100 selection:text-red-900 antialiased">
      {/* 1. Global Navigation Bar */}
      <MarketplaceNavbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenPincodeModal={() => setIsPincodeModalOpen(true)}
        currentPincode={currentPincode}
        currentCity={currentCity}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full space-y-2 sm:space-y-4">
        {/* 2. Hero Carousel Banner */}
        <MarketplaceHero />

        {/* 3. Circular Category Icons Bar */}
        <CategoryBubbles
          onSelectCategory={(category) => {
            toast.info(`Filtered by ${category}`, {
              description: 'Browsing top rated deals and verified stores.',
            })
          }}
        />

        {/* 4. 5-Pillar Trust & Values Ribbon */}
        <TrustRibbon />

        {/* 5. Today's Flash Deals Section with Live Countdown */}
        <TodaysDeals
          onAddToCart={(product) => handleAddToCart(product, 1)}
          onQuickView={(product) => setQuickViewProduct(product)}
        />

        {/* 6. Shop by Category Section */}
        <ShopByCategory
          onSelectCategory={(_category) => {
            const el = document.getElementById('todays-deals-section')
            el?.scrollIntoView({ behavior: 'smooth' })
          }}
        />
      </main>

      {/* 7. Marketplace Footer */}
      <MarketplaceFooter />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCartItems([])}
      />

      {/* Location Pincode Modal */}
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

      {/* Product Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  )
}
