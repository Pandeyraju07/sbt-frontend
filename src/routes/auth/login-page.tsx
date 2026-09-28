import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import { AuthLayout } from './components/auth-layout'
import { SbtBrandLogo } from './components/sbt-brand-logo'

export function LoginPage() {
  const navigate = useNavigate()
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!identifier.trim()) {
      setError('Please enter your email or mobile number')
      return
    }

    if (!password) {
      setError('Please enter your password')
      return
    }

    setIsLoading(true)

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false)
      navigate(ROUTES.home)
    }, 600)
  }

  return (
    <AuthLayout
      variant="login"
      topAction={{
        label: "Don't have an account?",
        buttonText: 'Create Account',
        to: ROUTES.register,
      }}
    >
      <div className="flex flex-col items-center">
        {/* Brand Logo */}
        <div className="mb-6">
          <SbtBrandLogo size="lg" linkToHome />
        </div>

        {/* Error message if any - non-bold */}
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

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          {/* Email or Mobile Number Input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-slate-600">
              Email or Mobile Number
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                <Mail className="w-4.5 h-4.5 text-slate-400 stroke-[1.5]" />
              </span>
              <input
                id="login-identifier"
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="Enter your email or mobile number"
                className="w-full h-12 pl-11 pr-4 bg-white border border-slate-200 rounded-xl text-sm font-normal text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#DF1927] focus:ring-2 focus:ring-[#DF1927]/15 transition-all"
                autoComplete="username"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-slate-600">
              Password
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                <Lock className="w-4.5 h-4.5 text-slate-400 stroke-[1.5]" />
              </span>
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full h-12 pl-11 pr-11 bg-white border border-slate-200 rounded-xl text-sm font-normal text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#DF1927] focus:ring-2 focus:ring-[#DF1927]/15 transition-all"
                autoComplete="current-password"
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

          {/* Remember Me and Forgot Password Row - non-bold */}
          <div className="flex items-center justify-between pt-1 pb-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded text-[#DF1927] focus:ring-[#DF1927] border-slate-300 accent-[#DF1927] cursor-pointer"
              />
              <span className="text-xs text-slate-600 font-normal">Remember me</span>
            </label>

            <Link
              to={ROUTES.forgotPassword}
              className="text-xs font-normal text-[#DF1927] hover:text-[#B8101E] hover:underline transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button - refined font-medium (non-bold) */}
          <button
            id="login-submit-button"
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-[#DF1927] hover:bg-[#C8102E] active:scale-[0.99] text-white font-medium text-sm rounded-xl transition-all shadow-md shadow-red-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="inline-flex items-center gap-2 font-normal">
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Logging in...
              </span>
            ) : (
              <>
                <span className="font-medium">Login</span>
                <ArrowRight className="w-4 h-4 stroke-[1.5]" />
              </>
            )}
          </button>
        </form>

        {/* Quick Demo Pre-fill helper - non-bold */}
        <div className="mt-6 pt-4 border-t border-slate-100 w-full text-center">
          <button
            type="button"
            onClick={() => {
              setIdentifier('demo@sellbuytrust.com')
              setPassword('SecurePass123!')
            }}
            className="text-[11px] text-slate-400 hover:text-slate-600 transition-colors font-normal"
          >
            Fill Demo Credentials
          </button>
        </div>
      </div>
    </AuthLayout>
  )
}
