import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, Eye, EyeOff, ArrowRight } from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import { AuthLayout } from './components/auth-layout'
import { SbtBrandLogo } from './components/sbt-brand-logo'

export function ResetPasswordPage() {
  const navigate = useNavigate()
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  // Password requirement tests matching screenshot criteria:
  const rules = [
    {
      id: 'min-length',
      label: 'At least 8 characters',
      valid: newPassword.length >= 8,
    },
    {
      id: 'uppercase',
      label: 'Include at least one uppercase letter (A–Z)',
      valid: /[A-Z]/.test(newPassword),
    },
    {
      id: 'lowercase',
      label: 'Include at least one lowercase letter (a–z)',
      valid: /[a-z]/.test(newPassword),
    },
    {
      id: 'number',
      label: 'Include at least one number (0–9)',
      valid: /[0-9]/.test(newPassword),
    },
    {
      id: 'special',
      label: 'Include at least one special character (e.g. ! @ # $ % ^ & *)',
      valid: /[^A-Za-z0-9]/.test(newPassword),
    },
  ]

  const allRulesValid = rules.every((r) => r.valid)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!newPassword) {
      setError('Please enter a new password')
      return
    }

    if (!allRulesValid) {
      setError('Please satisfy all password security requirements')
      return
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setSuccess(true)
      setTimeout(() => {
        navigate(ROUTES.login)
      }, 1500)
    }, 800)
  }

  return (
    <AuthLayout
      variant="reset-password"
      topAction={{
        label: 'Back to Login?',
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
          Reset Password
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 font-normal text-center mt-1 mb-5">
          Create a new password for your account.
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

        {/* Success notification */}
        {success && (
          <div className="w-full mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl text-center font-normal">
            Password reset successfully! Redirecting to login...
          </div>
        )}

        {/* Form Fields matching Screenshot 3 */}
        <form onSubmit={handleSubmit} className="w-full space-y-3.5">
          {/* New Password */}
          <div className="space-y-1">
            <label className="block text-xs font-medium text-slate-600">
              New Password
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                <Lock className="w-4.5 h-4.5 text-slate-400 stroke-[1.5]" />
              </span>
              <input
                id="reset-new-password"
                type={showNewPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter your new password"
                className="w-full h-11 pl-11 pr-11 bg-white border border-slate-200 rounded-xl text-sm font-normal text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#DF1927] focus:ring-2 focus:ring-[#DF1927]/15 transition-all"
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3.5 text-slate-400 hover:text-slate-600 focus:outline-none p-1 transition-colors"
                title={showNewPassword ? 'Hide password' : 'Show password'}
              >
                {showNewPassword ? (
                  <EyeOff className="w-4.5 h-4.5 stroke-[1.5]" />
                ) : (
                  <Eye className="w-4.5 h-4.5 stroke-[1.5]" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm New Password */}
          <div className="space-y-1">
            <label className="block text-xs font-medium text-slate-600">
              Confirm New Password
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                <Lock className="w-4.5 h-4.5 text-slate-400 stroke-[1.5]" />
              </span>
              <input
                id="reset-confirm-password"
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your new password"
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

          {/* Password Security Rules Checklist - non-bold */}
          <div className="pt-2 pb-2 space-y-2 select-none">
            {rules.map((rule) => (
              <div key={rule.id} className="flex items-center gap-2.5 text-xs">
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    rule.valid
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-300 text-white'
                  }`}
                >
                  <svg
                    className="w-2.5 h-2.5 stroke-[2]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span
                  className={`transition-colors font-normal ${
                    rule.valid ? 'text-slate-800' : 'text-slate-500'
                  }`}
                >
                  {rule.label}
                </span>
              </div>
            ))}
          </div>

          {/* Submit Button - font-medium (non-bold) */}
          <button
            id="reset-password-submit-button"
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-[#DF1927] hover:bg-[#C8102E] active:scale-[0.99] text-white font-medium text-sm rounded-xl transition-all shadow-md shadow-red-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed mt-3"
          >
            {isLoading ? (
              <span className="inline-flex items-center gap-2 font-normal">
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Updating password...
              </span>
            ) : (
              <>
                <span className="font-medium">Reset Password</span>
                <ArrowRight className="w-4 h-4 stroke-[1.5]" />
              </>
            )}
          </button>
        </form>
      </div>
    </AuthLayout>
  )
}
