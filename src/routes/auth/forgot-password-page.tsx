import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import { AuthLayout } from './components/auth-layout'
import { SbtBrandLogo } from './components/sbt-brand-logo'

export function ForgotPasswordPage() {
  const [identifier, setIdentifier] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!identifier.trim()) {
      setError('Please enter your email or mobile number')
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 700)
  }

  return (
    <AuthLayout
      variant="forgot-password"
      topAction={{
        label: 'Remembered your password?',
        buttonText: 'Login',
        to: ROUTES.login,
      }}
    >
      <div className="flex flex-col items-center">
        {/* Brand Logo */}
        <div className="mb-4">
          <SbtBrandLogo size="md" linkToHome />
        </div>

        {/* Header - non-bold font-normal */}
        <h1 className="text-2xl sm:text-[26px] font-normal text-slate-900 tracking-tight text-center">
          Forgot Password?
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 font-normal text-center mt-2 mb-6 max-w-xs leading-relaxed">
          No worries! Enter your email or mobile number and we'll send you a link to reset your password.
        </p>

        {/* Error notification */}
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

        {isSubmitted ? (
          /* Reset Link Sent Success State */
          <div className="w-full space-y-5 text-center">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div className="space-y-1">
              <h2 className="text-base font-normal text-slate-900">Reset link sent</h2>
              <p className="text-xs text-slate-500 font-normal leading-relaxed max-w-xs mx-auto">
                We've sent a password reset link to <span className="text-slate-800 font-medium">{identifier}</span>. Please check your inbox or SMS.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to={ROUTES.resetPassword}
                className="w-full h-11 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Proceed to Reset Password Page (Demo)
              </Link>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="text-xs text-[#DF1927] hover:underline font-normal cursor-pointer"
              >
                Try another email or number
              </button>
            </div>
          </div>
        ) : (
          /* Form matching Screenshot 1 */
          <form onSubmit={handleSubmit} className="w-full space-y-5">
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
                  id="forgot-identifier"
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="Enter your email or mobile number"
                  className="w-full h-12 pl-11 pr-4 bg-white border border-slate-200 rounded-xl text-sm font-normal text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#DF1927] focus:ring-2 focus:ring-[#DF1927]/15 transition-all"
                  autoComplete="username"
                />
              </div>
            </div>

            {/* Submit Button - font-medium (non-bold) */}
            <button
              id="send-reset-link-button"
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
                  Sending link...
                </span>
              ) : (
                <>
                  <span className="font-medium">Send Reset Link</span>
                  <ArrowRight className="w-4 h-4 stroke-[1.5]" />
                </>
              )}
            </button>
          </form>
        )}

        {/* Back to Login Footer Link - non-bold */}
        <div className="mt-8 text-center">
          <Link
            to={ROUTES.login}
            className="text-xs font-normal text-slate-600 hover:text-slate-900 transition-colors"
          >
            Back to{' '}
            <span className="text-[#DF1927] font-medium hover:underline">
              Login
            </span>
          </Link>
        </div>
      </div>
    </AuthLayout>
  )
}
