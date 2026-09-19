import * as React from 'react'
import { Link } from 'react-router-dom'
import {
  AlertCircle,
  AppWindow,
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  ChevronDown,
  ChevronRight,
  CreditCard,
  Heart,
  Home,
  IdCard,
  Inbox,
  LayoutGrid,
  Layers,
  Lock,
  Package,
  Scan,
  Search,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Store,
  Table,
  Tag,
  ToggleLeft,
  Truck,
  Users,
  X,
} from 'lucide-react'
import logoHorizontal from '@/assets/sbt-logo-horizontal.png'
import logoIcon from '@/assets/sbt-icon-mark.png'
import { ROUTES } from '@/constants/routes'

// Official Figma 5-color vector icon
function FigmaIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"
        fill="#1ABCFE"
      />
      <path
        d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
        fill="#0ACF83"
      />
      <path
        d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"
        fill="#FF7262"
      />
      <path
        d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"
        fill="#F24E1E"
      />
      <path
        d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"
        fill="#A259FF"
      />
    </svg>
  )
}

export function DesignSystemPage() {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [filledInputValue, setFilledInputValue] = React.useState('Wireless Headphones')

  // Sidebar accordion toggle states
  const [foundationsOpen, setFoundationsOpen] = React.useState(true)
  const [componentsOpen, setComponentsOpen] = React.useState(true)
  const [patternsOpen, setPatternsOpen] = React.useState(true)
  const [resourcesOpen, setResourcesOpen] = React.useState(false)

  const foundationsItems = [
    'Colors',
    'Typography',
    'Spacing',
    'Grid & Layout',
    'Icons',
    'Elevation',
    'Motion',
  ]

  const componentItems = [
    'Buttons',
    'Inputs',
    'Navigation',
    'Cards',
    'Tables',
    'Alerts',
    'Modals',
    'Forms',
    'Badge & Chips',
    'Avatars',
    'Progress',
  ]

  const patternItems = [
    'Login & Auth',
    'Dashboards',
    'Empty States',
    'Error States',
    'Onboarding',
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans flex antialiased selection:bg-red-500/20 selection:text-red-900">
      {/* ---------------------------------------------------------------------- */}
      {/* 1. LEFT SIDEBAR                                                        */}
      {/* ---------------------------------------------------------------------- */}
      <aside className="w-[260px] bg-white border-r border-slate-200/80 shrink-0 hidden lg:flex flex-col justify-between sticky top-0 h-screen overflow-y-auto z-30">
        <div>
          {/* Logo Header */}
          <div className="px-6 py-5 border-b border-slate-100 flex items-center">
            <Link to={ROUTES.home} className="inline-block transition-transform duration-200 hover:scale-[1.01]">
              <img
                src={logoHorizontal}
                alt="SBT — Sell Buy Trust"
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Nav List */}
          <div className="px-3 py-4 space-y-1 text-xs">
            {/* Overview */}
            <button
              type="button"
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition cursor-pointer font-medium text-left"
            >
              <Home className="size-4 text-slate-400" />
              <span>Overview</span>
            </button>

            {/* Brand Identity */}
            <button
              type="button"
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition cursor-pointer font-medium text-left"
            >
              <IdCard className="size-4 text-slate-400" />
              <span>Brand Identity</span>
            </button>

            {/* Design System (ACTIVE PILL) */}
            <button
              type="button"
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-[#FEE2E2]/70 text-[#E31B23] font-semibold transition cursor-pointer text-left shadow-2xs"
            >
              <Layers className="size-4 text-[#E31B23]" />
              <span>Design System</span>
            </button>

            {/* Foundations Accordion */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setFoundationsOpen(!foundationsOpen)}
                className="w-full flex items-center justify-between px-3 py-1.5 text-slate-700 hover:text-slate-900 font-semibold cursor-pointer rounded-md hover:bg-slate-50 transition text-left"
              >
                <div className="flex items-center gap-3">
                  <LayoutGrid className="size-4 text-slate-400" />
                  <span>Foundations</span>
                </div>
                {foundationsOpen ? (
                  <ChevronDown className="size-3.5 text-slate-400" />
                ) : (
                  <ChevronRight className="size-3.5 text-slate-400" />
                )}
              </button>

              {foundationsOpen && (
                <div className="pl-10 pr-2 py-1 space-y-1">
                  {foundationsItems.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className="w-full text-left py-1 text-slate-500 hover:text-slate-900 transition font-normal hover:translate-x-0.5 cursor-pointer block"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Components Accordion */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setComponentsOpen(!componentsOpen)}
                className="w-full flex items-center justify-between px-3 py-1.5 text-slate-700 hover:text-slate-900 font-semibold cursor-pointer rounded-md hover:bg-slate-50 transition text-left"
              >
                <div className="flex items-center gap-3">
                  <ToggleLeft className="size-4 text-slate-400" />
                  <span>Components</span>
                </div>
                {componentsOpen ? (
                  <ChevronDown className="size-3.5 text-slate-400" />
                ) : (
                  <ChevronRight className="size-3.5 text-slate-400" />
                )}
              </button>

              {componentsOpen && (
                <div className="pl-10 pr-2 py-1 space-y-1">
                  {componentItems.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className="w-full text-left py-1 text-slate-500 hover:text-slate-900 transition font-normal hover:translate-x-0.5 cursor-pointer block"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Patterns Accordion */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setPatternsOpen(!patternsOpen)}
                className="w-full flex items-center justify-between px-3 py-1.5 text-slate-700 hover:text-slate-900 font-semibold cursor-pointer rounded-md hover:bg-slate-50 transition text-left"
              >
                <div className="flex items-center gap-3">
                  <Lock className="size-4 text-slate-400" />
                  <span>Patterns</span>
                </div>
                {patternsOpen ? (
                  <ChevronDown className="size-3.5 text-slate-400" />
                ) : (
                  <ChevronRight className="size-3.5 text-slate-400" />
                )}
              </button>

              {patternsOpen && (
                <div className="pl-10 pr-2 py-1 space-y-1">
                  {patternItems.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className="w-full text-left py-1 text-slate-500 hover:text-slate-900 transition font-normal hover:translate-x-0.5 cursor-pointer block"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Group */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="w-full flex items-center justify-between px-3 py-1.5 text-slate-700 hover:text-slate-900 font-semibold cursor-pointer rounded-md hover:bg-slate-50 transition text-left"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="size-4 text-slate-400" />
                  <span>Resources</span>
                </div>
                {resourcesOpen ? (
                  <ChevronDown className="size-3.5 text-slate-400" />
                ) : (
                  <ChevronRight className="size-3.5 text-slate-400" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Card in Sidebar */}
        <div className="p-4 m-3 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/80 shadow-xs relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="font-extrabold text-slate-900 text-sm tracking-tight">SBT</h4>
            <p className="text-[11px] text-slate-500 leading-snug mt-1">
              A smarter marketplace for everyone.
            </p>
            <p className="text-[10px] font-mono text-slate-400 mt-3 font-semibold">v1.0.0</p>
          </div>
          {/* Subtle watermark emblem in background */}
          <div className="absolute -right-4 -bottom-4 w-24 h-24 opacity-[0.06] pointer-events-none select-none">
            <img src={logoIcon} alt="" className="w-full h-full object-contain rotate-12" />
          </div>
        </div>
      </aside>

      {/* ---------------------------------------------------------------------- */}
      {/* MAIN VIEWPORT CONTAINER                                                */}
      {/* ---------------------------------------------------------------------- */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* -------------------------------------------------------------------- */}
        {/* 2. TOP HEADER NAVBAR                                                 */}
        {/* -------------------------------------------------------------------- */}
        <header className="h-16 px-6 lg:px-10 bg-white border-b border-slate-200/80 flex items-center justify-between gap-4 sticky top-0 z-20 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
          {/* Search Box */}
          <div className="relative flex-1 max-w-sm">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search design system..."
              className="w-full h-9 pl-9 pr-14 rounded-lg bg-slate-50/70 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#E31B23] focus:bg-white focus:ring-2 focus:ring-[#E31B23]/10 transition"
            />
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <span className="text-[10px] font-mono font-medium text-slate-400 border border-slate-200/90 rounded px-1.5 py-0.5 bg-white shadow-2xs">
                Ctrl
              </span>
              <span className="text-[10px] font-mono font-medium text-slate-400 border border-slate-200/90 rounded px-1.5 py-0.5 bg-white shadow-2xs">
                K
              </span>
            </div>
          </div>

          {/* Right Header Navigation & Actions */}
          <div className="flex items-center gap-6 text-xs">
            <a
              href="#docs"
              className="text-slate-600 hover:text-slate-900 font-medium transition cursor-pointer hidden sm:inline"
            >
              Documentation
            </a>

            <a
              href="https://figma.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-slate-900 font-medium flex items-center gap-1 transition cursor-pointer hidden sm:inline-flex"
            >
              <span>Figma Library</span>
              <span className="text-xs">↗</span>
            </a>

            {/* Changelog with Red Dot Indicator */}
            <div className="relative cursor-pointer">
              <a href="#changelog" className="text-slate-600 hover:text-slate-900 font-medium transition">
                Changelog
              </a>
              <span className="absolute -top-1 -right-2 size-2 bg-[#E31B23] rounded-full ring-2 ring-white" />
            </div>

            {/* Go to App Action Button */}
            <Link
              to={ROUTES.seller.root}
              className="px-4 py-2 rounded-full bg-[#E31B23] hover:bg-[#c9161d] active:scale-[0.98] text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm shadow-[#E31B23]/20 transition cursor-pointer"
            >
              <span>Go to App</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </header>

        {/* -------------------------------------------------------------------- */}
        {/* MAIN BODY CONTENT                                                    */}
        {/* -------------------------------------------------------------------- */}
        <main className="p-6 lg:p-8 space-y-6 max-w-[1440px] w-full mx-auto">
          {/* ------------------------------------------------------------------ */}
          {/* 3. HERO SECTION                                                    */}
          {/* ------------------------------------------------------------------ */}
          <section className="relative rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 overflow-hidden shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Headline & CTA */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-[2px] bg-[#E31B23] rounded-full" />
                  <span className="text-[11px] font-bold tracking-[0.25em] text-[#E31B23] uppercase">
                    DESIGN SYSTEM
                  </span>
                </div>

                <h1 className="text-3xl sm:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                  Build Consistent
                  <br />
                  Experiences with <span className="text-[#E31B23]">SBT</span>
                </h1>

                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xl">
                  A unified design system to build beautiful, accessible and consistent experiences across all SBT products — for buyers, sellers, admins and partners.
                </p>

                <div className="pt-3 flex flex-wrap items-center gap-3.5">
                  <a
                    href="https://figma.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#E31B23] hover:bg-[#c9161d] active:scale-[0.98] text-white font-semibold text-xs flex items-center gap-2 shadow-sm shadow-[#E31B23]/25 transition cursor-pointer"
                  >
                    <FigmaIcon className="size-3.5 brightness-0 invert" />
                    <span>Open in Figma</span>
                    <span className="text-xs">↗</span>
                  </a>

                  <button
                    type="button"
                    className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 active:scale-[0.98] text-slate-700 font-semibold text-xs transition cursor-pointer shadow-2xs"
                  >
                    Read Guidelines
                  </button>
                </div>
              </div>

              {/* Right Column: 3D Frosted Glass Cards Composition */}
              <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end min-h-[220px]">
                {/* Soft ambient background glow */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 w-64 h-64 bg-radial from-red-500/10 via-blue-500/5 to-transparent blur-2xl pointer-events-none rounded-full" />

                <div className="relative flex items-center gap-6">
                  {/* Floating Tilted Glass Cards with SBT 3D Emblem */}
                  <div className="relative w-44 h-44 flex items-center justify-center">
                    {/* Background angled glass card */}
                    <div className="absolute inset-0 rounded-3xl bg-white/40 backdrop-blur-md border border-white/80 shadow-lg transform -rotate-12 translate-x-1 -translate-y-2" />
                    {/* Secondary middle glass layer */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/70 to-white/30 backdrop-blur-xl border border-white shadow-xl transform rotate-6 translate-x-2" />
                    {/* Foreground card with centered 3D icon */}
                    <div className="relative z-10 w-36 h-36 rounded-2xl bg-white/60 backdrop-blur-2xl border border-white/90 shadow-2xl flex items-center justify-center p-5 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                      <img
                        src={logoIcon}
                        alt="SBT 3D Mark"
                        className="w-24 h-24 object-contain drop-shadow-[0_12px_20px_rgba(227,27,35,0.35)] hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Brand Pillar Text */}
                  <div className="flex flex-col justify-center select-none">
                    <p className="text-xs font-extrabold tracking-[0.35em] text-slate-700 uppercase">SELL</p>
                    <p className="text-xs font-extrabold tracking-[0.35em] text-slate-700 uppercase mt-1">BUY</p>
                    <p className="text-xs font-extrabold tracking-[0.35em] text-slate-700 uppercase mt-1">TRUST</p>
                    <div className="w-6 h-[2px] bg-[#E31B23] my-3 rounded-full" />
                    <p className="text-[11px] text-slate-500 font-medium">One Design.</p>
                    <p className="text-[11px] text-slate-500 font-medium">Many Possibilities.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------------------ */}
          {/* 4. SHOWCASE BENTO GRID                                             */}
          {/* ------------------------------------------------------------------ */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            {/* ---------------------------------------------------------------- */}
            {/* LEFT 9 COLUMNS (Rows 1, 2, 3)                                    */}
            {/* ---------------------------------------------------------------- */}
            <div className="xl:col-span-9 space-y-6">
              {/* -------------------------------------------------------------- */}
              {/* ROW 1: Brand Identity, Color Palette, Typography               */}
              {/* -------------------------------------------------------------- */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 1. Brand Identity Card */}
                <div className="rounded-2xl bg-white p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Brand Identity</h3>
                    <div className="my-5 flex items-center justify-center p-4 rounded-xl bg-slate-50/70 border border-slate-100">
                      <img
                        src={logoHorizontal}
                        alt="SBT Logo"
                        className="h-9 w-auto object-contain"
                      />
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Our visual identity represents trust, connection and a smarter marketplace.
                    </p>
                  </div>

                  <a
                    href="#brand-guidelines"
                    className="mt-4 text-xs font-semibold text-[#0F6CBD] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Brand Guidelines</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>

                {/* 2. Color Palette Card */}
                <div className="rounded-2xl bg-white p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Color Palette</h3>

                    {/* Primary Palette */}
                    <div className="mt-3">
                      <p className="text-[11px] font-medium text-slate-400 mb-1.5">Primary</p>
                      <div className="grid grid-cols-4 gap-1.5">
                        <div className="h-7 rounded-md bg-[#E31B23]" />
                        <div className="h-7 rounded-md bg-[#EF4444]" />
                        <div className="h-7 rounded-md bg-[#F87171]" />
                        <div className="h-7 rounded-md bg-[#FCA5A5]" />
                      </div>
                      <p className="text-[10px] font-mono text-slate-400 mt-1">#E31B23</p>
                    </div>

                    {/* Neutrals Palette */}
                    <div className="mt-3">
                      <p className="text-[11px] font-medium text-slate-400 mb-1.5">Neutrals</p>
                      <div className="grid grid-cols-5 gap-1.5">
                        <div className="h-7 rounded-md bg-[#F1F5F9] border border-slate-200/60" />
                        <div className="h-7 rounded-md bg-[#CBD5E1]" />
                        <div className="h-7 rounded-md bg-[#64748B]" />
                        <div className="h-7 rounded-md bg-[#334155]" />
                        <div className="h-7 rounded-md bg-[#0F172A]" />
                      </div>
                    </div>

                    {/* Semantic Colors */}
                    <div className="mt-3">
                      <p className="text-[11px] font-medium text-slate-400 mb-1.5">Semantic Colors</p>
                      <div className="grid grid-cols-4 gap-2 text-[10px]">
                        <div className="flex items-center gap-1.5">
                          <div className="size-4 rounded-sm bg-[#16A34A] shrink-0" />
                          <div className="truncate">
                            <p className="font-semibold text-slate-700 leading-tight">Success</p>
                            <p className="font-mono text-slate-400 text-[9px]">#16A34A</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <div className="size-4 rounded-sm bg-[#F59E0B] shrink-0" />
                          <div className="truncate">
                            <p className="font-semibold text-slate-700 leading-tight">Warning</p>
                            <p className="font-mono text-slate-400 text-[9px]">#F59E0B</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <div className="size-4 rounded-sm bg-[#DC2626] shrink-0" />
                          <div className="truncate">
                            <p className="font-semibold text-slate-700 leading-tight">Error</p>
                            <p className="font-mono text-slate-400 text-[9px]">#DC2626</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <div className="size-4 rounded-sm bg-[#0F6CBD] shrink-0" />
                          <div className="truncate">
                            <p className="font-semibold text-slate-700 leading-tight">Info</p>
                            <p className="font-mono text-slate-400 text-[9px]">#0F6CBD</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#colors"
                    className="mt-4 text-xs font-semibold text-[#0F6CBD] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View All Colors</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>

                {/* 3. Typography Card */}
                <div className="rounded-2xl bg-white p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Typography</h3>
                    <div className="my-2">
                      <span className="text-[52px] font-extrabold text-slate-900 leading-none tracking-tight block">
                        Aa
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 font-medium">Display</span>
                        <span className="text-slate-800 font-semibold text-[11px]">SF Pro Display / Inter</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 font-medium">Heading</span>
                        <span className="text-slate-800 font-semibold text-[11px]">Semibold</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 font-medium">Body</span>
                        <span className="text-slate-800 font-semibold text-[11px]">Regular</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 font-medium">Caption</span>
                        <span className="text-slate-800 font-semibold text-[11px]">Medium</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#typography"
                    className="mt-4 text-xs font-semibold text-[#0F6CBD] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Typography</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>

              {/* -------------------------------------------------------------- */}
              {/* ROW 2: Buttons & Input Fields                                  */}
              {/* -------------------------------------------------------------- */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Buttons Card (Span 7) */}
                <div className="lg:col-span-7 rounded-2xl bg-white p-5 border border-slate-200/80 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm mb-3">Buttons</h3>

                  <div className="grid grid-cols-3 gap-4">
                    {/* Column 1: Default States */}
                    <div className="space-y-3">
                      <div>
                        <p className="text-[11px] font-medium text-slate-400 mb-1">Primary</p>
                        <button
                          type="button"
                          className="w-full py-2 px-3 rounded-lg bg-[#E31B23] hover:bg-[#c9161d] text-white font-medium text-xs text-center shadow-xs transition"
                        >
                          Primary Button
                        </button>
                      </div>

                      <div>
                        <p className="text-[11px] font-medium text-slate-400 mb-1">Secondary</p>
                        <button
                          type="button"
                          className="w-full py-2 px-3 rounded-lg bg-white border border-[#E31B23] text-[#E31B23] font-medium text-xs text-center transition hover:bg-red-50"
                        >
                          Secondary
                        </button>
                      </div>

                      <div>
                        <p className="text-[11px] font-medium text-slate-400 mb-1">Text Button</p>
                        <button
                          type="button"
                          className="py-1 text-[#E31B23] font-medium text-xs flex items-center gap-1 hover:underline"
                        >
                          <span>Text Button</span>
                          <ArrowRight className="size-3" />
                        </button>
                      </div>
                    </div>

                    {/* Column 2: Hover States */}
                    <div className="space-y-3">
                      <div>
                        <p className="text-[11px] font-medium text-slate-400 mb-1">Hover</p>
                        <button
                          type="button"
                          className="w-full py-2 px-3 rounded-lg bg-[#B91C1C] text-white font-medium text-xs text-center shadow-xs cursor-default"
                        >
                          Hover State
                        </button>
                      </div>

                      <div>
                        <p className="text-[11px] font-medium text-slate-400 mb-1">Hover</p>
                        <button
                          type="button"
                          className="w-full py-2 px-3 rounded-lg bg-[#FEE2E2] border border-[#FCA5A5] text-[#E31B23] font-medium text-xs text-center cursor-default"
                        >
                          Hover
                        </button>
                      </div>

                      <div>
                        <p className="text-[11px] font-medium text-slate-400 mb-1">Hover</p>
                        <button
                          type="button"
                          className="py-1 px-2.5 rounded-full bg-[#FEE2E2] text-[#E31B23] font-medium text-xs flex items-center gap-1 cursor-default"
                        >
                          <span>Text Button</span>
                          <ArrowRight className="size-3" />
                        </button>
                      </div>
                    </div>

                    {/* Column 3: Disabled States */}
                    <div className="space-y-3">
                      <div>
                        <p className="text-[11px] font-medium text-slate-400 mb-1">Disabled</p>
                        <button
                          type="button"
                          disabled
                          className="w-full py-2 px-3 rounded-lg bg-[#FCA5A5] text-white font-medium text-xs text-center cursor-not-allowed opacity-90"
                        >
                          Disabled
                        </button>
                      </div>

                      <div>
                        <p className="text-[11px] font-medium text-slate-400 mb-1">Disabled</p>
                        <button
                          type="button"
                          disabled
                          className="w-full py-2 px-3 rounded-lg bg-[#E2E8F0] text-slate-400 font-medium text-xs text-center cursor-not-allowed"
                        >
                          Disabled
                        </button>
                      </div>

                      <div>
                        <p className="text-[11px] font-medium text-slate-400 mb-1">Dbutton</p>
                        <button
                          type="button"
                          disabled
                          className="py-1 text-slate-300 font-medium text-xs flex items-center gap-1 cursor-not-allowed"
                        >
                          <span>Text Button</span>
                          <ArrowRight className="size-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input Fields Card (Span 5) */}
                <div className="lg:col-span-5 rounded-2xl bg-white p-5 border border-slate-200/80 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm mb-3">Input Fields</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Default Input */}
                    <div>
                      <p className="text-[11px] font-medium text-slate-500 mb-1">Default</p>
                      <input
                        type="text"
                        placeholder="Enter product name"
                        className="w-full h-9 px-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#E31B23]"
                      />
                    </div>

                    {/* Focused Input */}
                    <div>
                      <p className="text-[11px] font-medium text-slate-500 mb-1">Focused</p>
                      <div className="relative">
                        <input
                          type="text"
                          defaultValue="Enter product name"
                          className="w-full h-9 px-3 rounded-lg bg-white border border-[#E31B23] ring-2 ring-[#E31B23]/10 text-xs text-slate-800 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Filled Input */}
                    <div>
                      <p className="text-[11px] font-medium text-slate-500 mb-1">Filled</p>
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          value={filledInputValue}
                          onChange={(e) => setFilledInputValue(e.target.value)}
                          className="w-full h-9 pl-3 pr-8 rounded-lg bg-slate-50/80 border border-slate-200 text-xs text-slate-800 font-medium focus:outline-none focus:border-[#E31B23]"
                        />
                        {filledInputValue && (
                          <button
                            type="button"
                            onClick={() => setFilledInputValue('')}
                            className="absolute right-2.5 p-0.5 text-slate-400 hover:text-slate-600 transition cursor-pointer"
                          >
                            <X className="size-3.5" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Error Input */}
                    <div>
                      <p className="text-[11px] font-medium text-slate-500 mb-1">Error</p>
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          defaultValue="Enter product name"
                          className="w-full h-9 pl-3 pr-8 rounded-lg bg-white border border-[#DC2626] text-xs text-slate-800 focus:outline-none"
                        />
                        <div className="absolute right-2.5 text-[#DC2626]">
                          <AlertCircle className="size-3.5 fill-[#DC2626] text-white" />
                        </div>
                      </div>
                      <p className="text-[10px] text-[#DC2626] font-medium mt-1">This field is required.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* -------------------------------------------------------------- */}
              {/* ROW 3: Components & Patterns                                   */}
              {/* -------------------------------------------------------------- */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Components Bar (Span 7) */}
                <div className="md:col-span-7 rounded-2xl bg-white p-5 border border-slate-200/80 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm mb-3">Components</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {[
                      { name: 'Buttons', icon: ToggleLeft },
                      { name: 'Inputs', icon: AppWindow },
                      { name: 'Cards', icon: CreditCard },
                      { name: 'Tables', icon: Table },
                      { name: 'Modals', icon: Layers },
                      { name: 'Alerts', icon: Bell },
                    ].map((c) => {
                      const Icon = c.icon
                      return (
                        <button
                          key={c.name}
                          type="button"
                          className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/60 hover:bg-slate-100 hover:border-slate-300 flex flex-col items-center justify-center gap-1.5 transition cursor-pointer group"
                        >
                          <Icon className="size-4 text-slate-600 group-hover:text-slate-900 group-hover:scale-110 transition" />
                          <span className="text-[11px] font-medium text-slate-700 group-hover:text-slate-900">
                            {c.name}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Patterns Bar (Span 5) */}
                <div className="md:col-span-5 rounded-2xl bg-white p-5 border border-slate-200/80 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm mb-3">Patterns</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {[
                      { name: 'Authentication', icon: Lock },
                      { name: 'Dashboard', icon: LayoutGrid },
                      { name: 'Empty State', icon: Inbox },
                      { name: 'Error State', icon: AlertCircle },
                      { name: 'Onboarding', icon: Scan },
                    ].map((p) => {
                      const Icon = p.icon
                      return (
                        <button
                          key={p.name}
                          type="button"
                          className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/60 hover:bg-slate-100 hover:border-slate-300 flex flex-col items-center justify-center gap-1.5 transition cursor-pointer group"
                        >
                          <Icon className="size-4 text-slate-600 group-hover:text-slate-900 group-hover:scale-110 transition" />
                          <span className="text-[10px] font-medium text-slate-700 group-hover:text-slate-900 truncate w-full text-center">
                            {p.name}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* RIGHT 3 COLUMNS: Iconography, Spacing, Shadows, Tools            */}
            {/* ---------------------------------------------------------------- */}
            <div className="xl:col-span-3 space-y-6">
              {/* 1. Iconography Card */}
              <div className="rounded-2xl bg-white p-5 border border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-slate-900 text-sm">Iconography</h3>
                  <a href="#icons" className="text-xs text-slate-400 hover:text-slate-700 font-medium flex items-center gap-0.5">
                    <span>View All</span>
                    <span>→</span>
                  </a>
                </div>

                {/* 3x5 Grid of 15 Icons */}
                <div className="grid grid-cols-5 gap-2">
                  {[
                    { icon: Home, label: 'Home' },
                    { icon: LayoutGrid, label: 'Grid' },
                    { icon: ShoppingBag, label: 'Shop' },
                    { icon: Users, label: 'Users' },
                    { icon: Settings, label: 'Settings' },

                    { icon: Search, label: 'Search' },
                    { icon: Heart, label: 'Favorite' },
                    { icon: Bell, label: 'Notifications' },
                    { icon: BarChart3, label: 'Analytics' },
                    { icon: Package, label: 'Inventory' },

                    { icon: ShieldCheck, label: 'Trust' },
                    { icon: CreditCard, label: 'Payments' },
                    { icon: Truck, label: 'Logistics' },
                    { icon: Tag, label: 'Pricing' },
                    { icon: Store, label: 'Merchant' },
                  ].map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={idx}
                        title={item.label}
                        className="w-full aspect-square rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 hover:scale-105 transition cursor-pointer"
                      >
                        <Icon className="size-4.5" />
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* 2. Spacing System Card */}
              <div className="rounded-2xl bg-white p-5 border border-slate-200/80 shadow-xs">
                <h3 className="font-bold text-slate-900 text-sm">Spacing System</h3>
                <p className="text-xs text-slate-400 mb-3">Base unit: 8px</p>

                {/* Proportional Ascending Bars */}
                <div className="flex items-end justify-between gap-1.5 h-20 pt-2">
                  {[
                    { val: '4', h: 'h-3' },
                    { val: '8', h: 'h-5' },
                    { val: '12', h: 'h-7' },
                    { val: '16', h: 'h-9' },
                    { val: '24', h: 'h-11' },
                    { val: '32', h: 'h-13' },
                    { val: '48', h: 'h-16' },
                    { val: '64', h: 'h-18' },
                  ].map((bar) => (
                    <div key={bar.val} className="flex-1 flex flex-col items-center gap-1.5">
                      <div className={`w-full ${bar.h} rounded-md bg-[#DBEAFE]/80 transition-all hover:bg-[#93C5FD]`} />
                      <span className="text-[10px] font-mono text-slate-500 font-medium">
                        {bar.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Shadows Card */}
              <div className="rounded-2xl bg-white p-5 border border-slate-200/80 shadow-xs">
                <h3 className="font-bold text-slate-900 text-sm mb-3">Shadows</h3>

                <div className="grid grid-cols-4 gap-2 text-center">
                  <div>
                    <div className="w-12 h-12 mx-auto rounded-xl bg-white border border-slate-100 shadow-xs hover:scale-105 transition" />
                    <span className="text-[10px] font-mono text-slate-400 font-medium mt-1.5 block">sm</span>
                  </div>
                  <div>
                    <div className="w-12 h-12 mx-auto rounded-xl bg-white border border-slate-100 shadow-md hover:scale-105 transition" />
                    <span className="text-[10px] font-mono text-slate-400 font-medium mt-1.5 block">md</span>
                  </div>
                  <div>
                    <div className="w-12 h-12 mx-auto rounded-xl bg-white border border-slate-100 shadow-lg hover:scale-105 transition" />
                    <span className="text-[10px] font-mono text-slate-400 font-medium mt-1.5 block">lg</span>
                  </div>
                  <div>
                    <div className="w-12 h-12 mx-auto rounded-xl bg-white border border-slate-100 shadow-xl hover:scale-105 transition" />
                    <span className="text-[10px] font-mono text-slate-400 font-medium mt-1.5 block">xl</span>
                  </div>
                </div>
              </div>

              {/* 4. Tools & Resources Card */}
              <div className="rounded-2xl bg-white p-5 border border-slate-200/80 shadow-xs">
                <h3 className="font-bold text-slate-900 text-sm mb-3">Tools & Resources</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="https://figma.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white border border-slate-200/80 hover:bg-slate-50 hover:border-slate-300 flex items-center justify-center gap-2 text-xs font-semibold text-slate-800 transition cursor-pointer shadow-2xs"
                  >
                    <FigmaIcon className="size-4 shrink-0" />
                    <span>Figma Library</span>
                  </a>

                  <a
                    href="#component-docs"
                    className="p-3 rounded-xl bg-white border border-slate-200/80 hover:bg-slate-50 hover:border-slate-300 flex items-center justify-center gap-2 text-xs font-semibold text-slate-800 transition cursor-pointer shadow-2xs"
                  >
                    <BookOpen className="size-4 text-slate-700 shrink-0" />
                    <span>Component Docs</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
