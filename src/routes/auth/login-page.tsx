import * as React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  ArrowRight,
  Eye,
  EyeOff,
  KeyRound,
  Lock,
  Mail,
  Phone,
  ShieldCheck,
  ShoppingCart,
  Store,
  Users,
} from 'lucide-react'
import { ROUTES } from '@/constants/routes'
import { SbtLogo } from '@/components/sbt-logo'
import { GoogleIcon, MicrosoftIcon, AppleIcon } from '@/components/social-icons'
import { useAuth } from '@/features/auth/hooks/use-auth'
import showcaseImage from '@/assets/sbt-showcase.jpg'

const emailPasswordSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean(),
})

const mobileOtpSchema = z.object({
  phone: z
    .string()
    .min(10, 'Mobile number must be at least 10 digits')
    .regex(/^[0-9+\s-]+$/, 'Please enter a valid mobile number'),
  otp: z
    .string()
    .min(6, 'Enter the 6-digit OTP code')
    .max(6, 'OTP must be 6 digits')
    .regex(/^[0-9]+$/, 'OTP must be numeric'),
})

type EmailPasswordFormValues = {
  email: string
  password: string
  rememberMe: boolean
}

type MobileOtpFormValues = {
  phone: string
  otp: string
}

export function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { setSession } = useAuth()

  const [authMode, setAuthMode] = React.useState<'password' | 'otp'>('password')
  const [showPassword, setShowPassword] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [otpSent, setOtpSent] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)

  // Redirect destination after login
  const from = (location.state as { from?: { pathname?: string } })?.from?.pathname || ROUTES.seller.root

  // Email & Password form
  const emailForm = useForm<EmailPasswordFormValues>({
    resolver: zodResolver(emailPasswordSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  // Mobile & OTP form
  const mobileForm = useForm<MobileOtpFormValues>({
    resolver: zodResolver(mobileOtpSchema),
    defaultValues: {
      phone: '',
      otp: '',
    },
  })

  const handleEmailSubmit = (data: EmailPasswordFormValues) => {
    setErrorMessage(null)
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      const username = data.email.split('@')[0] || 'User'
      setSession({
        user: {
          id: 'usr_sbt_01',
          email: data.email,
          name: username,
          roles: ['SELLER_OWNER'],
          permissions: ['store:read', 'store:write', 'product:read', 'product:create'],
        },
        accessToken: 'sbt_access_token_demo',
        status: 'authenticated',
        isAuthenticated: true,
      })
      navigate(from, { replace: true })
    }, 600)
  }

  const handleMobileSubmit = async (data: MobileOtpFormValues) => {
    setErrorMessage(null)
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setSession({
        user: {
          id: 'usr_sbt_02',
          email: `${data.phone.replace(/\D/g, '')}@mobile.sellbuytrust.com`,
          name: `User ${data.phone.slice(-4)}`,
          phone: data.phone,
          roles: ['BUYER'],
          permissions: ['buyer:checkout', 'buyer:orders'],
        },
        accessToken: 'sbt_access_token_demo',
        status: 'authenticated',
        isAuthenticated: true,
      })
      navigate(from, { replace: true })
    }, 600)
  }

  const handleSendOtp = async () => {
    const isValid = await mobileForm.trigger('phone')
    if (isValid) {
      setOtpSent(true)
      mobileForm.clearErrors('otp')
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-slate-900 font-sans selection:bg-red-100 selection:text-red-900">
      {/* ---------------------------------------------------------------------- */}
      {/* TOP GLOBAL NAVBAR                                                      */}
      {/* ---------------------------------------------------------------------- */}
      <header className="w-full h-16 sm:h-20 px-6 sm:px-10 lg:px-12 flex items-center justify-between border-b border-black/[0.04] bg-white z-20 shrink-0">
        {/* Left: Official SBT Logo & Main Nav Links */}
        <div className="flex items-center gap-8 lg:gap-14">
          <Link to={ROUTES.home} className="shrink-0 transition-opacity hover:opacity-95" title="SBT Home">
            <SbtLogo size="sm" />
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-slate-600">
            <Link to={ROUTES.buyer.root} className="hover:text-slate-900 transition">
              Buy
            </Link>
            <Link to={ROUTES.seller.root} className="hover:text-slate-900 transition">
              Sell
            </Link>
            <Link to={ROUTES.buyer.root} className="hover:text-slate-900 transition">
              Categories
            </Link>
            <Link to={ROUTES.admin.root} className="hover:text-slate-900 transition">
              For Business
            </Link>
            <a href="#help" className="hover:text-slate-900 transition">
              Help
            </a>
          </nav>
        </div>

        {/* Right: New to SBT? + Create Account Pill */}
        <div className="flex items-center gap-3 text-sm">
          <span className="text-slate-500 text-xs sm:text-[13px] font-medium">New to SBT?</span>
          <Link
            to={ROUTES.register}
            className="rounded-full border border-[#DF1927] text-slate-900 hover:bg-[#DF1927] hover:text-white px-4 py-1.5 font-semibold text-xs transition active:scale-[0.98] shadow-2xs"
          >
            Create Account
          </Link>
        </div>
      </header>

      {/* ---------------------------------------------------------------------- */}
      {/* MAIN TWO-COLUMN WORKSPACE                                               */}
      {/* ---------------------------------------------------------------------- */}
      <main className="flex-1 w-full flex flex-col lg:flex-row items-stretch">
        {/* -------------------------------------------------------------------- */}
        {/* LEFT SECTION: BRAND SHOWCASE & 3D ARCH PRODUCT PODIUM                */}
        {/* -------------------------------------------------------------------- */}
        <div className="lg:w-[58%] xl:w-[61%] bg-gradient-to-b from-[#FAFBFD] via-[#F8F9FB] to-[#F4F5F8] border-b lg:border-b-0 lg:border-r border-slate-200/70 flex flex-col justify-between overflow-hidden relative">
          <div className="p-6 sm:p-10 lg:pl-12 lg:pr-6 pt-6 sm:pt-8 flex-1 flex flex-col justify-between z-10">
            {/* Top Row: Left Brand Info & Right 3D Arch Illustration */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Left Column: Headlines & Features */}
              <div className="md:col-span-6 xl:col-span-5 space-y-4">
                {/* Red Accent Pill */}
                <div className="w-8 h-[3px] bg-[#DF1927] rounded-full" />

                {/* Eyebrow */}
                <span className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase block">
                  A TRUSTED MARKETPLACE
                </span>

                {/* Main Display Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black text-slate-900 tracking-tight leading-[1.08]">
                  Buy. Sell. Grow.
                  <br />
                  <span className="text-[#DF1927]">Together.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed max-w-[310px] pt-1 pb-2">
                  SBT is a modern multi-vendor marketplace where businesses and buyers connect, build
                  trust and create new opportunities.
                </p>

                {/* 4 Feature Items */}
                <div className="space-y-3.5 pt-1">
                  {/* Item 1 */}
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-full bg-[#FFF1F2] text-[#DF1927] flex items-center justify-center shrink-0 shadow-2xs">
                      <ShoppingCart className="size-4.5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 leading-tight">Wide Product Selection</h3>
                      <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                        From trusted sellers across categories
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-full bg-[#FFF1F2] text-[#DF1927] flex items-center justify-center shrink-0 shadow-2xs">
                      <Store className="size-4.5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 leading-tight">Grow Your Business</h3>
                      <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                        Set up your store and reach more customers
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-full bg-[#FFF1F2] text-[#DF1927] flex items-center justify-center shrink-0 shadow-2xs">
                      <ShieldCheck className="size-4.5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 leading-tight">Secure Transactions</h3>
                      <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                        Your trust and safety come first
                      </p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-full bg-[#FFF1F2] text-[#DF1927] flex items-center justify-center shrink-0 shadow-2xs">
                      <Users className="size-4.5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 leading-tight">A Community That Grows</h3>
                      <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                        Sellers, buyers and partners together
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Exact 3D Product Podium with City Archway */}
              <div className="md:col-span-6 xl:col-span-7 flex justify-center md:justify-end items-center h-full">
                <div className="relative w-full max-w-[420px] lg:max-w-none flex justify-center md:justify-end">
                  <img
                    src={showcaseImage}
                    alt="SBT 3D Commerce Podium with City Skyline Arch"
                    className="w-full h-auto max-h-[500px] xl:max-h-[540px] object-contain object-bottom select-none pointer-events-none drop-shadow-sm transition-transform duration-500 hover:scale-[1.01]"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Row: 4 Metric Columns & Quote */}
            <div className="pt-6 sm:pt-8 mt-4 border-t border-slate-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 max-w-xl">
                <div className="sm:border-r sm:border-slate-200/80 sm:pr-4">
                  <p className="text-base sm:text-lg font-black text-slate-900 leading-none">10K+</p>
                  <p className="text-[11px] text-slate-400 font-medium leading-tight mt-1">Active Sellers</p>
                </div>
                <div className="sm:border-r sm:border-slate-200/80 sm:pr-4">
                  <p className="text-base sm:text-lg font-black text-slate-900 leading-none">1M+</p>
                  <p className="text-[11px] text-slate-400 font-medium leading-tight mt-1">Happy Customers</p>
                </div>
                <div className="sm:border-r sm:border-slate-200/80 sm:pr-4">
                  <p className="text-base sm:text-lg font-black text-slate-900 leading-none">500+</p>
                  <p className="text-[11px] text-slate-400 font-medium leading-tight mt-1">Product Categories</p>
                </div>
                <div>
                  <p className="text-base sm:text-lg font-black text-slate-900 leading-none">99.9%</p>
                  <p className="text-[11px] text-slate-400 font-medium leading-tight mt-1">Secure Transactions</p>
                </div>
              </div>

              {/* Opportunities Quote */}
              <div className="pt-4">
                <p className="italic text-xs font-semibold text-slate-700">
                  “Opportunities for everyone”
                </p>
                <p className="text-[10px] font-bold text-slate-400 mt-0.5">— SBT</p>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------- */}
        {/* RIGHT SECTION: AUTH LOGIN FORM                                       */}
        {/* -------------------------------------------------------------------- */}
        <div className="lg:w-[42%] xl:w-[39%] bg-white flex flex-col justify-center px-6 sm:px-12 lg:px-12 xl:px-16 py-8 sm:py-12">
          <div className="w-full max-w-[430px] mx-auto space-y-6">
            {/* Title & Subtitle */}
            <div>
              <h2 className="text-3xl sm:text-[34px] font-black text-slate-900 tracking-tight leading-tight">
                Welcome Back
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-500 mt-1.5 font-medium">
                Sign in to your SBT account
              </p>
            </div>

            {/* Segmented Auth Mode Switcher (Email & Password | Mobile & OTP) */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setAuthMode('password')
                  setErrorMessage(null)
                }}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs transition cursor-pointer ${
                  authMode === 'password'
                    ? 'bg-[#FFF1F2] text-[#DF1927] font-bold shadow-2xs'
                    : 'bg-slate-50/80 text-slate-600 hover:bg-slate-100 font-medium'
                }`}
              >
                <Mail className="size-3.5" />
                <span>Email & Password</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setAuthMode('otp')
                  setErrorMessage(null)
                }}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs transition cursor-pointer ${
                  authMode === 'otp'
                    ? 'bg-[#FFF1F2] text-[#DF1927] font-bold shadow-2xs'
                    : 'bg-slate-50/80 text-slate-600 hover:bg-slate-100 font-medium'
                }`}
              >
                <Phone className="size-3.5" />
                <span>Mobile & OTP</span>
              </button>
            </div>

            {/* Inline Error Banner */}
            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200/80 text-red-700 text-xs font-medium">
                {errorMessage}
              </div>
            )}

            {/* ---------------- Email & Password Mode ---------------- */}
            {authMode === 'password' && (
              <form onSubmit={emailForm.handleSubmit(handleEmailSubmit)} className="space-y-4">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-800 mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      autoComplete="email"
                      className={`w-full h-11 pl-10 pr-3.5 rounded-xl border bg-white text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#DF1927] focus:ring-2 focus:ring-[#DF1927]/15 transition ${
                        emailForm.formState.errors.email ? 'border-red-400' : 'border-slate-200'
                      }`}
                      {...emailForm.register('email')}
                    />
                  </div>
                  {emailForm.formState.errors.email && (
                    <p className="text-red-500 text-[11px] font-medium mt-1">
                      {emailForm.formState.errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-xs font-bold text-slate-800 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      className={`w-full h-11 pl-10 pr-10 rounded-xl border bg-white text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#DF1927] focus:ring-2 focus:ring-[#DF1927]/15 transition ${
                        emailForm.formState.errors.password ? 'border-red-400' : 'border-slate-200'
                      }`}
                      {...emailForm.register('password')}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                    </button>
                  </div>
                  {emailForm.formState.errors.password && (
                    <p className="text-red-500 text-[11px] font-medium mt-1">
                      {emailForm.formState.errors.password.message}
                    </p>
                  )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between pt-0.5">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      className="size-4 rounded border-slate-300 text-[#DF1927] focus:ring-[#DF1927]"
                      {...emailForm.register('rememberMe')}
                    />
                    <span className="text-xs font-medium text-slate-600">Remember me</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      const email = emailForm.getValues('email')
                      if (email) {
                        alert(`Password reset link sent to ${email}`)
                      } else {
                        emailForm.setError('email', { message: 'Enter your email to receive a reset link' })
                      }
                    }}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-11 bg-[#DF1927] hover:bg-[#C8102E] active:bg-[#B00D26] disabled:opacity-70 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-md shadow-[#DF1927]/20 transition mt-2 cursor-pointer"
                >
                  {isLoading ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Signing In…
                    </span>
                  ) : (
                    <>
                      <span>Sign In</span>
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* ---------------- Mobile & OTP Mode ---------------- */}
            {authMode === 'otp' && (
              <form onSubmit={mobileForm.handleSubmit(handleMobileSubmit)} className="space-y-4">
                {/* Mobile Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-800 mb-1.5">
                    Mobile Number
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Phone className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                        className={`w-full h-11 pl-10 pr-3 rounded-xl border bg-white text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#DF1927] focus:ring-2 focus:ring-[#DF1927]/15 transition ${
                          mobileForm.formState.errors.phone ? 'border-red-400' : 'border-slate-200'
                        }`}
                        {...mobileForm.register('phone')}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      className="h-11 px-3.5 rounded-xl border border-[#DF1927] text-[#DF1927] hover:bg-red-50 text-xs font-semibold transition shrink-0 cursor-pointer"
                    >
                      {otpSent ? 'Resend' : 'Send OTP'}
                    </button>
                  </div>
                  {mobileForm.formState.errors.phone && (
                    <p className="text-red-500 text-[11px] font-medium mt-1">
                      {mobileForm.formState.errors.phone.message}
                    </p>
                  )}
                  {otpSent && (
                    <p className="text-emerald-600 text-[11px] font-medium mt-1">
                      Verification code sent to your mobile device.
                    </p>
                  )}
                </div>

                {/* OTP Field */}
                <div>
                  <label htmlFor="otp" className="block text-xs font-bold text-slate-800 mb-1.5">
                    6-Digit Verification Code
                  </label>
                  <div className="relative">
                    <KeyRound className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                    <input
                      id="otp"
                      type="text"
                      maxLength={6}
                      placeholder="123456"
                      className={`w-full h-11 pl-10 pr-3 rounded-xl border bg-white text-sm font-mono tracking-widest text-slate-900 placeholder:tracking-normal placeholder:font-sans placeholder:text-slate-400 focus:outline-none focus:border-[#DF1927] focus:ring-2 focus:ring-[#DF1927]/15 transition ${
                        mobileForm.formState.errors.otp ? 'border-red-400' : 'border-slate-200'
                      }`}
                      {...mobileForm.register('otp')}
                    />
                  </div>
                  {mobileForm.formState.errors.otp && (
                    <p className="text-red-500 text-[11px] font-medium mt-1">
                      {mobileForm.formState.errors.otp.message}
                    </p>
                  )}
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-11 bg-[#DF1927] hover:bg-[#C8102E] active:bg-[#B00D26] disabled:opacity-70 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-md shadow-[#DF1927]/20 transition mt-2 cursor-pointer"
                >
                  {isLoading ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Verifying OTP…
                    </span>
                  ) : (
                    <>
                      <span>Sign In</span>
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* ---------------- OR CONTINUE WITH Divider ---------------- */}
            <div className="relative my-5 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-3 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                  OR CONTINUE WITH
                </span>
              </div>
            </div>

            {/* ---------------- 3 Social Providers Grid (Horizontal Buttons) ---------------- */}
            <div className="grid grid-cols-3 gap-2.5">
              {/* Google */}
              <button
                type="button"
                onClick={() =>
                  handleEmailSubmit({
                    email: 'google.user@sellbuytrust.com',
                    password: 'password123',
                    rememberMe: true,
                  })
                }
                className="h-11 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 flex items-center justify-center gap-2 px-2 transition cursor-pointer shadow-2xs"
                title="Continue with Google"
              >
                <GoogleIcon className="size-4 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Google</span>
              </button>

              {/* Microsoft */}
              <button
                type="button"
                onClick={() =>
                  handleEmailSubmit({
                    email: 'microsoft.user@sellbuytrust.com',
                    password: 'password123',
                    rememberMe: true,
                  })
                }
                className="h-11 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 flex items-center justify-center gap-2 px-2 transition cursor-pointer shadow-2xs"
                title="Continue with Microsoft"
              >
                <MicrosoftIcon className="size-4 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Microsoft</span>
              </button>

              {/* Apple */}
              <button
                type="button"
                onClick={() =>
                  handleEmailSubmit({
                    email: 'apple.user@sellbuytrust.com',
                    password: 'password123',
                    rememberMe: true,
                  })
                }
                className="h-11 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 flex items-center justify-center gap-2 px-2 transition cursor-pointer shadow-2xs"
                title="Continue with Apple"
              >
                <AppleIcon className="size-4 text-slate-900 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Apple</span>
              </button>
            </div>

            {/* ---------------- Terms of Service & Privacy Policy ---------------- */}
            <p className="text-center text-[11px] sm:text-xs text-slate-500 pt-2 leading-relaxed">
              By signing in, you agree to our{' '}
              <a href="#" className="text-blue-600 hover:underline font-semibold">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-600 hover:underline font-semibold">
                Privacy Policy
              </a>
              .
            </p>

            {/* ---------------- Under Card Trust Badge ---------------- */}
            <div className="flex items-center justify-center gap-3 pt-2 text-slate-600">
              <ShieldCheck className="size-5.5 text-slate-600 shrink-0" />
              <div className="text-left">
                <p className="text-xs font-bold text-slate-800 leading-tight">Your data is secure with SBT</p>
                <p className="text-[11px] text-slate-400 leading-tight mt-0.5">Trusted by thousands of businesses</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
