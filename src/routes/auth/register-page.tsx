import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, Mail, Smartphone, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import { AuthLayout } from './components/auth-layout'
import { SbtBrandLogo } from './components/sbt-brand-logo'

export function RegisterPage() {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!fullName.trim()) {
      setError('Please enter your full name')
      return
    }
    if (!email.trim()) {
      setError('Please enter your email address')
      return
    }
    if (!mobileNumber.trim()) {
      setError('Please enter your mobile number')
      return
    }
    if (!password) {
      setError('Please create a password')
      return
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    if (!agreedToTerms) {
      setError('You must agree to the Terms of Service and Privacy Policy')
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setSuccess(true)
      setTimeout(() => {
        navigate(ROUTES.login)
      }, 1200)
    }, 800)
  }

  return (
    <AuthLayout
      variant="register"
      topAction={{
        label: 'Already have an account?',
        buttonText: 'Login',
        to: ROUTES.login,
      }}
    >
      <div className="flex flex-col items-center">
        {/* Brand Logo */}
        <div className="mb-3">
          <SbtBrandLogo size="md" linkToHome />
        </div>

        {/* Header - non-bold font-normal */}
        <h1 className="text-2xl sm:text-[26px] font-normal text-slate-900 tracking-tight text-center">
          Create Account
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 font-normal text-center mt-1 mb-5">
          Join SBT and be part of a trusted marketplace.
        </p>

        {/* Error Notification */}
        {error && (
          <div className="w-full mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center justify-between font-normal">
            <span>{error}</span>
            <button
              type="button"
              onClick={() => setError(null)}
              className="text-red-500 hover:text-red-800 text-sm font-medium"
            >
              ×
            </button>
          </div>
        )}

        {/* Success Notification */}
        {success && (
          <div className="w-full mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl text-center font-normal">
            Account created successfully! Redirecting to login...
          </div>
        )}

        {/* Form Fields - clean non-bold styling */}
        <form onSubmit={handleSubmit} className="w-full space-y-3">
          {/* Full Name */}
          <div className="space-y-1">
            <label className="block text-xs font-medium text-slate-600">
              Full Name
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                <User className="w-4.5 h-4.5 text-slate-400 stroke-[1.5]" />
              </span>
              <input
                id="register-fullname"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full h-11 pl-11 pr-4 bg-white border border-slate-200 rounded-xl text-sm font-normal text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#DF1927] focus:ring-2 focus:ring-[#DF1927]/15 transition-all"
                autoComplete="name"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="space-y-1">
            <label className="block text-xs font-medium text-slate-600">
              Email Address
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                <Mail className="w-4.5 h-4.5 text-slate-400 stroke-[1.5]" />
              </span>
              <input
                id="register-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full h-11 pl-11 pr-4 bg-white border border-slate-200 rounded-xl text-sm font-normal text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#DF1927] focus:ring-2 focus:ring-[#DF1927]/15 transition-all"
                autoComplete="email"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div className="space-y-1">
            <label className="block text-xs font-medium text-slate-600">
              Mobile Number
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                <Smartphone className="w-4.5 h-4.5 text-slate-400 stroke-[1.5]" />
              </span>
              <input
                id="register-mobile"
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Enter your mobile number"
                className="w-full h-11 pl-11 pr-4 bg-white border border-slate-200 rounded-xl text-sm font-normal text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#DF1927] focus:ring-2 focus:ring-[#DF1927]/15 transition-all"
                autoComplete="tel"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="block text-xs font-medium text-slate-600">
              Password
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                <Lock className="w-4.5 h-4.5 text-slate-400 stroke-[1.5]" />
              </span>
              <input
                id="register-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="w-full h-11 pl-11 pr-11 bg-white border border-slate-200 rounded-xl text-sm font-normal text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#DF1927] focus:ring-2 focus:ring-[#DF1927]/15 transition-all"
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 text-slate-400 hover:text-slate-600 focus:outline-none p-1 transition-colors"
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeOff className="w-4.5 h-4.5 stroke-[1.5]" />
                ) : (
                  <Eye className="w-4.5 h-4.5 stroke-[1.5]" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-1">
            <label className="block text-xs font-medium text-slate-600">
              Confirm Password
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                <Lock className="w-4.5 h-4.5 text-slate-400 stroke-[1.5]" />
              </span>
              <input
                id="register-confirm-password"
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full h-11 pl-11 pr-11 bg-white border border-slate-200 rounded-xl text-sm font-normal text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#DF1927] focus:ring-2 focus:ring-[#DF1927]/15 transition-all"
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3.5 text-slate-400 hover:text-slate-600 focus:outline-none p-1 transition-colors"
                title={showConfirmPassword ? 'Hide password' : 'Show password'}
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-4.5 h-4.5 stroke-[1.5]" />
                ) : (
                  <Eye className="w-4.5 h-4.5 stroke-[1.5]" />
                )}
              </button>
            </div>
          </div>

          {/* Agreement Checkbox - non-bold */}
          <div className="pt-1 pb-1">
            <label className="flex items-start gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded text-[#DF1927] focus:ring-[#DF1927] border-slate-300 accent-[#DF1927] cursor-pointer"
              />
              <span className="text-xs text-slate-600 font-normal leading-snug">
                I agree to the{' '}
                <span className="text-[#DF1927] hover:underline font-normal">
                  Terms of Service
                </span>{' '}
                and{' '}
                <span className="text-[#DF1927] hover:underline font-normal">
                  Privacy Policy
                </span>
              </span>
            </label>
          </div>

          {/* Submit Button - font-medium non-bold */}
          <button
            id="register-submit-button"
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-[#DF1927] hover:bg-[#C8102E] active:scale-[0.99] text-white font-medium text-sm rounded-xl transition-all shadow-md shadow-red-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed mt-2"
          >
            {isLoading ? (
              <span className="inline-flex items-center gap-2 font-normal">
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Creating Account...
              </span>
            ) : (
              <>
                <span className="font-medium">Create Account</span>
                <ArrowRight className="w-4 h-4 stroke-[1.5]" />
              </>
            )}
          </button>
        </form>
      </div>
    </AuthLayout>
  )
}
