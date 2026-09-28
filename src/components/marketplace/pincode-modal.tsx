import React, { useState } from 'react'
import { MapPin, X, Check } from 'lucide-react'
import { toast } from 'sonner'

interface PincodeModalProps {
  isOpen: boolean
  onClose: () => void
  currentPincode: string
  currentCity?: string
  onUpdateLocation: (city: string, pincode: string) => void
}

export const PincodeModal: React.FC<PincodeModalProps> = ({
  isOpen,
  onClose,
  currentPincode,
  onUpdateLocation,
}) => {
  const [pincode, setPincode] = useState(currentPincode)

  if (!isOpen) return null

  const popularCities = [
    { city: 'New Delhi', pincode: '110001' },
    { city: 'Mumbai', pincode: '400001' },
    { city: 'Bengaluru', pincode: '560001' },
    { city: 'Hyderabad', pincode: '500001' },
    { city: 'Kolkata', pincode: '700001' },
    { city: 'Chennai', pincode: '600001' },
    { city: 'Pune', pincode: '411001' },
    { city: 'Ahmedabad', pincode: '380001' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (pincode.length !== 6) {
      toast.error('Invalid Pincode', {
        description: 'Please enter a valid 6-digit Indian postal code.',
      })
      return
    }

    // Default to city matching or custom
    const match = popularCities.find((c) => c.pincode === pincode)
    const cityName = match ? match.city : 'India'

    onUpdateLocation(cityName, pincode)
    toast.success('Delivery Location Updated', {
      description: `Deliveries set to ${cityName} ${pincode}.`,
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-md rounded-3xl bg-white border border-slate-100 shadow-2xl p-6 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
        >
          <X className="size-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-5">
          <div className="size-11 rounded-2xl bg-red-50 text-[#DF1927] flex items-center justify-center">
            <MapPin className="size-6 stroke-[1.8]" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 tracking-tight">
              Choose your delivery location
            </h3>
            <p className="text-xs text-slate-500">
              Delivery options and speeds may vary for different locations
            </p>
          </div>
        </div>

        {/* Pincode Input Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex gap-2">
            <input
              type="text"
              maxLength={6}
              value={pincode}
              onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
              placeholder="Enter 6-digit Pincode"
              className="flex-1 h-11 px-4 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#DF1927] focus:ring-2 focus:ring-[#DF1927]/15"
            />
            <button
              type="submit"
              className="px-5 h-11 rounded-xl bg-[#DF1927] hover:bg-[#C8102E] text-white font-semibold text-xs sm:text-sm transition cursor-pointer"
            >
              Apply
            </button>
          </div>
        </form>

        {/* Popular Cities Grid */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <p className="text-xs font-semibold text-slate-700 mb-3">
            Popular Delivery Hubs:
          </p>
          <div className="grid grid-cols-2 gap-2">
            {popularCities.map((item) => (
              <button
                key={item.pincode}
                type="button"
                onClick={() => {
                  onUpdateLocation(item.city, item.pincode)
                  toast.success(`Location updated to ${item.city}`, {
                    description: `Pincode: ${item.pincode}`,
                  })
                  onClose()
                }}
                className={`p-2.5 rounded-xl border text-left text-xs transition cursor-pointer flex items-center justify-between ${
                  currentPincode === item.pincode
                    ? 'border-[#DF1927] bg-red-50/50 text-[#DF1927] font-semibold'
                    : 'border-slate-100 hover:border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div>
                  <span className="block font-medium">{item.city}</span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {item.pincode}
                  </span>
                </div>
                {currentPincode === item.pincode && (
                  <Check className="size-4 text-[#DF1927]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
