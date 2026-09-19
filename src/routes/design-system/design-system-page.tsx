import * as React from 'react'
import { Link } from 'react-router-dom'
import {
  Accessibility,
  AlertCircle,
  ArrowRight,
  BarChart3,
  Boxes,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Code2,
  Copy,
  ExternalLink,
  FolderOpen,
  Headphones,
  Home,
  Info,
  Layers,
  Layout,
  LayoutGrid,
  Mail,
  Moon,
  Package,
  Palette,
  Search,
  Settings,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
  Sun,
  Type,
  Users,
  Wallet,
  Zap,
} from 'lucide-react'
import { SbtLogo } from '@/components/sbt-logo'
import { ROUTES } from '@/constants/routes'

export function DesignSystemPage() {
  const [activeSection, setActiveSection] = React.useState('overview')
  const [darkMode, setDarkMode] = React.useState(false)
  const [copiedToken, setCopiedToken] = React.useState<string | null>(null)

  // Interactive Playground states
  const [switchOn, setSwitchOn] = React.useState(true)
  const [checkboxChecked, setCheckboxChecked] = React.useState(true)
  const [radioSelected, setRadioSelected] = React.useState('apple')
  const [buttonLoading, setButtonLoading] = React.useState(false)

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedToken(label)
    setTimeout(() => setCopiedToken(null), 2000)
  }

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutGrid },
    { id: 'brand', label: 'Brand & Identity', icon: Shield },
    { id: 'colors', label: 'Color Tokens', icon: Palette },
    { id: 'typography', label: 'Typography', icon: Type },
    { id: 'buttons', label: 'Buttons & Controls', icon: Boxes },
    { id: 'forms', label: 'Form Controls', icon: Mail },
    { id: 'bento', label: 'Bento Cards', icon: BarChart3 },
    { id: 'badges', label: 'Badges & Indicators', icon: Sparkles },
    { id: 'layout', label: 'Layout & Spacing', icon: Layers },
    { id: 'icons', label: 'System Icons', icon: Zap },
    { id: 'accessibility', label: 'Accessibility (HIG)', icon: Accessibility },
  ]

  return (
    <div className={`min-h-screen flex bg-[#f5f5f7] dark:bg-[#000000] text-slate-900 dark:text-[#f5f5f7] font-sans selection:bg-blue-500/20 ${darkMode ? 'dark' : ''}`}>
      {/* Toast Notification */}
      {copiedToken && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900/90 dark:bg-white/90 text-white dark:text-slate-900 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-2xl text-xs font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Check className="size-3.5 text-emerald-400 dark:text-emerald-600" />
          <span>Copied {copiedToken} to clipboard</span>
        </div>
      )}

      {/* ---------------------------------------------------------------------- */}
      {/* FROSTED GLASS SIDEBAR                                                  */}
      {/* ---------------------------------------------------------------------- */}
      <aside className="w-72 border-r border-black/[0.06] dark:border-white/[0.08] bg-white/70 dark:bg-[#111111]/70 backdrop-blur-2xl p-6 flex flex-col justify-between hidden lg:flex sticky top-0 h-screen overflow-y-auto shrink-0 z-30">
        <div className="space-y-6">
          {/* Logo & Version Badge */}
          <div className="pb-5 border-b border-black/[0.05] dark:border-white/[0.08] flex items-center justify-between">
            <Link to={ROUTES.home}>
              <SbtLogo size="sm" variant="red" />
            </Link>
            <span className="text-[10px] font-mono font-semibold text-[#FE414D] bg-red-50 dark:bg-red-950/40 px-2 py-0.5 rounded-full">
              Sapient Red
            </span>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 mb-3 px-3">
              Design System
            </p>
            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setActiveSection(item.id)
                      const el = document.getElementById(item.id)
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition cursor-pointer ${
                      isActive
                        ? 'bg-[#FE414D] text-white shadow-md shadow-[#FE414D]/25'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.05]'
                    }`}
                  >
                    <Icon className={`size-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Apple HIG & Publicis Sapient Manifesto Card */}
        <div className="p-4 rounded-3xl bg-gradient-to-br from-white to-slate-50 dark:from-white/[0.05] dark:to-white/[0.02] border border-black/[0.06] dark:border-white/[0.08] shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="size-4 text-blue-600" />
            <span className="text-xs font-bold text-slate-900 dark:text-white">Design Standards</span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
            Crafted with the fluidity of Apple HIG and the structural rigor of Publicis Sapient enterprise architecture.
          </p>
        </div>
      </aside>

      {/* ---------------------------------------------------------------------- */}
      {/* MAIN VIEWPORT                                                          */}
      {/* ---------------------------------------------------------------------- */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Sticky Translucent Top Navigation Bar */}
        <header className="h-16 px-6 lg:px-12 border-b border-black/[0.06] dark:border-white/[0.08] bg-white/80 dark:bg-[#000000]/80 backdrop-blur-2xl flex items-center justify-between gap-4 sticky top-0 z-20">
          <div className="relative flex-1 max-w-md">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search design tokens, components, guides..."
              className="w-full h-9.5 pl-10 pr-12 rounded-2xl bg-black/[0.03] dark:bg-white/[0.06] border border-black/[0.05] dark:border-white/[0.08] text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 border border-black/[0.08] dark:border-white/[0.1] rounded-md px-1.5 py-0.5">
              ⌘K
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="size-9 rounded-2xl border border-black/[0.06] dark:border-white/[0.1] bg-white dark:bg-white/[0.06] flex items-center justify-center text-slate-600 dark:text-slate-300 hover:scale-105 transition cursor-pointer shadow-2xs"
              title="Toggle Appearance"
            >
              {darkMode ? <Sun className="size-4 text-amber-400" /> : <Moon className="size-4" />}
            </button>

            <Link
              to={ROUTES.seller.root}
              className="px-4 py-2 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-xs font-semibold text-white flex items-center gap-1.5 shadow-sm shadow-blue-600/25 transition cursor-pointer"
            >
              <span>Launch Marketplace</span>
              <ExternalLink className="size-3.5" />
            </Link>
          </div>
        </header>

        {/* Content Container */}
        <main className="p-6 lg:p-12 space-y-12 max-w-[1500px] w-full mx-auto">
          {/* ------------------------------------------------------------------ */}
          {/* SECTION 1: HERO OVERVIEW                                           */}
          {/* ------------------------------------------------------------------ */}
          <section id="overview" className="relative rounded-3xl bg-white dark:bg-[#111111] border border-black/[0.06] dark:border-white/[0.08] p-8 sm:p-12 overflow-hidden shadow-xs">
            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                <Sparkles className="size-3.5" />
                <span>Apple HIG & Publicis Sapient Foundation</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                SBT Design System
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                A unified design architecture for seamless, high-velocity experiences across all SBT platforms. Built for precision, accessibility, and enterprise scale.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.05] dark:border-white/[0.08]">
                  <Zap className="size-4 text-blue-600" />
                  <span>Fluid Micro-Interactions</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.05] dark:border-white/[0.08]">
                  <Boxes className="size-4 text-blue-600" />
                  <span>Bento Grid Architecture</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.05] dark:border-white/[0.08]">
                  <ShieldCheck className="size-4 text-blue-600" />
                  <span>Enterprise Accessibility</span>
                </div>
              </div>
            </div>

            {/* Ambient Graphic */}
            <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-blue-500/10 via-sky-500/5 to-transparent pointer-events-none rounded-3xl" />
          </section>

          {/* ------------------------------------------------------------------ */}
          {/* SECTION 2: BRAND & IDENTITY                                        */}
          {/* ------------------------------------------------------------------ */}
          <section id="brand" className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Brand & Identity
              </h2>
              <p className="text-xs text-slate-500">Official SBT brand assets, responsive dark mode typography, and lockups.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Primary Logo */}
              <div className="rounded-3xl bg-white dark:bg-[#111111] p-6 border border-black/[0.06] dark:border-white/[0.08] shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Primary Mark</span>
                  <div className="my-6 flex items-center justify-center p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.03]">
                    <SbtLogo size="md" format="horizontal" />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('<SbtLogo size="md" format="horizontal" />', 'Logo Component')}
                  className="w-full py-2 rounded-xl border border-black/[0.08] dark:border-white/[0.1] hover:bg-black/[0.02] text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <Copy className="size-3.5" />
                  <span>Copy JSX</span>
                </button>
              </div>

              {/* Dark Surface Contrast */}
              <div className="dark rounded-3xl bg-[#0a0a0a] text-white p-6 border border-white/10 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Dark Surface</span>
                  <div className="my-6 flex items-center justify-center p-6 rounded-2xl bg-black/60 border border-white/5">
                    <SbtLogo size="md" format="horizontal" />
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 text-center">Sapient Red mark & inverted white text for obsidian dark mode.</p>
              </div>

              {/* Full Brand Lockup */}
              <div className="rounded-3xl bg-white dark:bg-[#111111] p-6 border border-black/[0.06] dark:border-white/[0.08] shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Full Brand Lockup</span>
                  <div className="my-6 flex items-center justify-center p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.03]">
                    <SbtLogo size="md" format="full" />
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 text-center">One Platform. Real Opportunities. Products • Businesses • Trust.</p>
              </div>

              {/* Icon Mark */}
              <div className="rounded-3xl bg-white dark:bg-[#111111] p-6 border border-black/[0.06] dark:border-white/[0.08] shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Icon Mark</span>
                  <div className="my-6 flex items-center justify-center p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.03]">
                    <SbtLogo size="md" format="icon" />
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 text-center">3D origami shopping cart mark for app icons, badges, & favicons.</p>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------------------ */}
          {/* SECTION 3: COLOR PALETTE                                           */}
          {/* ------------------------------------------------------------------ */}
          <section id="colors" className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Color Tokens & Optical Contrast
              </h2>
              <p className="text-xs text-slate-500">Curated semantic hues inspired by Apple HIG with WCAG AAA accessibility.</p>
            </div>

            <div className="rounded-3xl bg-white dark:bg-[#111111] p-6 sm:p-8 border border-black/[0.06] dark:border-white/[0.08] shadow-xs space-y-6">
              {/* Primary System Palette (Publicis Sapient Red, White, Black) */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Publicis Sapient Signature Tokens (Red · White · Black)</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { name: 'Sapient Red', hex: '#FE414D', bg: 'bg-[#FE414D]', desc: 'Primary Interactive Brand' },
                    { name: 'Obsidian Black', hex: '#000000', bg: 'bg-[#000000]', desc: 'Stark High Contrast' },
                    { name: 'Carbon Dark', hex: '#111111', bg: 'bg-[#111111]', desc: 'Surface Architecture' },
                    { name: 'Pure White', hex: '#FFFFFF', bg: 'bg-white border border-slate-200', desc: 'Canvas Crisp Base' },
                  ].map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => copyToClipboard(c.hex, c.name)}
                      className="group rounded-2xl overflow-hidden border border-black/[0.06] dark:border-white/[0.08] text-left hover:scale-[1.02] transition cursor-pointer"
                    >
                      <div className={`h-16 ${c.bg} transition`} />
                      <div className="p-3 bg-slate-50/80 dark:bg-white/[0.03]">
                        <p className="text-xs font-bold text-slate-900 dark:text-white">{c.name}</p>
                        <p className="text-[11px] font-mono text-slate-500">{c.hex}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{c.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Semantic Status Colors */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Semantic Feedback</h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {[
                    { name: 'Success Emerald', hex: '#16A34A', bg: 'bg-[#16a34a]' },
                    { name: 'Warning Amber', hex: '#F59E0B', bg: 'bg-[#f59e0b]' },
                    { name: 'Destructive Coral', hex: '#DC2626', bg: 'bg-[#dc2626]' },
                    { name: 'Information Sky', hex: '#0EA5E9', bg: 'bg-[#0ea5e9]' },
                    { name: 'Neutral Slate', hex: '#64748B', bg: 'bg-[#64748b]' },
                  ].map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => copyToClipboard(c.hex, c.name)}
                      className="group rounded-2xl overflow-hidden border border-black/[0.06] dark:border-white/[0.08] text-left hover:scale-[1.02] transition cursor-pointer"
                    >
                      <div className={`h-12 ${c.bg}`} />
                      <div className="p-2.5 bg-slate-50/80 dark:bg-white/[0.03]">
                        <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{c.name}</p>
                        <p className="text-[11px] font-mono text-slate-500">{c.hex}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------------------ */}
          {/* SECTION 4: TYPOGRAPHY HIERARCHY                                    */}
          {/* ------------------------------------------------------------------ */}
          <section id="typography" className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Typography Scale
              </h2>
              <p className="text-xs text-slate-500">Harmonious scale set in Inter font family with optical kerning.</p>
            </div>

            <div className="rounded-3xl bg-white dark:bg-[#111111] p-6 sm:p-8 border border-black/[0.06] dark:border-white/[0.08] shadow-xs divide-y divide-black/[0.06] dark:divide-white/[0.08]">
              {[
                { token: 'Display 1', size: '48px / 3rem', weight: 'Extrabold (800)', tracking: '-0.03em', sample: 'Buy. Sell. Grow. Together.' },
                { token: 'Heading 1', size: '36px / 2.25rem', weight: 'Extrabold (800)', tracking: '-0.025em', sample: 'Welcome Back, Admin!' },
                { token: 'Heading 2', size: '28px / 1.75rem', weight: 'Bold (700)', tracking: '-0.02em', sample: 'Quality Products from Trusted Sellers' },
                { token: 'Heading 3', size: '20px / 1.25rem', weight: 'Bold (700)', tracking: '-0.015em', sample: 'Sales Performance & Analytics' },
                { token: 'Body Large', size: '16px / 1rem', weight: 'Medium (500)', tracking: 'normal', sample: 'A modern multi-vendor marketplace connecting businesses worldwide.' },
                { token: 'Body Default', size: '14px / 0.875rem', weight: 'Regular (400)', tracking: 'normal', sample: 'Discover thousands of vetted merchandise categories.' },
                { token: 'Caption / Subhead', size: '12px / 0.75rem', weight: 'Semibold (600)', tracking: '0.02em', sample: 'All systems operational — Last synced 2m ago' },
                { token: 'Eyebrow', size: '10px / 0.625rem', weight: 'Extrabold (800)', tracking: '0.25em', sample: 'A TRUSTED MARKETPLACE' },
              ].map((t) => (
                <div key={t.token} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="w-48 shrink-0">
                    <p className="text-xs font-bold text-slate-900 dark:text-white">{t.token}</p>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">{t.size} · {t.weight}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-900 dark:text-white" style={{ fontSize: t.size.split(' ')[0], letterSpacing: t.tracking }}>
                      {t.sample}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ------------------------------------------------------------------ */}
          {/* SECTION 5: BUTTONS & CONTROLS MATRIX                               */}
          {/* ------------------------------------------------------------------ */}
          <section id="buttons" className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Buttons & Tactile Controls
              </h2>
              <p className="text-xs text-slate-500">Apple-inspired pill buttons, glass surfaces, and responsive press states.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Primary Actions */}
              <div className="rounded-3xl bg-white dark:bg-[#111111] p-6 border border-black/[0.06] dark:border-white/[0.08] shadow-xs space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Primary Actions</h3>
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => {
                      setButtonLoading(true)
                      setTimeout(() => setButtonLoading(false), 1500)
                    }}
                    className="w-full py-3 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-600/25 transition cursor-pointer"
                  >
                    {buttonLoading ? (
                      <span className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Primary Action</span>
                        <ArrowRight className="size-3.5" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    className="w-full py-3 px-6 rounded-2xl bg-slate-100 dark:bg-white/[0.08] hover:bg-slate-200 dark:hover:bg-white/[0.12] active:scale-[0.98] text-slate-900 dark:text-white font-semibold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                  >
                    <span>Secondary Pill</span>
                  </button>

                  <button
                    type="button"
                    className="w-full py-3 px-6 rounded-2xl border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40 active:scale-[0.98] font-semibold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                  >
                    <span>Outlined Pill</span>
                  </button>
                </div>
              </div>

              {/* Form Controls */}
              <div className="rounded-3xl bg-white dark:bg-[#111111] p-6 border border-black/[0.06] dark:border-white/[0.08] shadow-xs space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Tactile Switches</h3>
                <div className="space-y-4 text-xs">
                  {/* iOS Toggle Switch */}
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.03]">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Push Notifications</span>
                    <button
                      type="button"
                      onClick={() => setSwitchOn(!switchOn)}
                      className={`w-12 h-7 rounded-full p-1 transition cursor-pointer flex items-center ${switchOn ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700'}`}
                    >
                      <div className={`size-5 rounded-full bg-white shadow-sm transition transform ${switchOn ? 'translate-x-5' : 'translate-x-0'}`} />
                    </button>
                  </div>

                  {/* Tactile Checkbox */}
                  <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.03] cursor-pointer">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Remember Preferences</span>
                    <input
                      type="checkbox"
                      checked={checkboxChecked}
                      onChange={(e) => setCheckboxChecked(e.target.checked)}
                      className="size-4.5 rounded-lg border-black/[0.15] text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                  </label>

                  {/* Radio Button Selector */}
                  <div className="space-y-2">
                    <p className="text-slate-500 font-medium">Payment Option</p>
                    <div className="grid grid-cols-2 gap-2">
                      {['apple', 'card'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setRadioSelected(opt)}
                          className={`p-3 rounded-2xl border text-left font-semibold capitalize transition ${
                            radioSelected === opt
                              ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 text-blue-600'
                              : 'border-black/[0.06] dark:border-white/[0.08]'
                          }`}
                        >
                          {opt === 'apple' ? ' Apple Pay' : '💳 Credit Card'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Badges Matrix */}
              <div className="rounded-3xl bg-white dark:bg-[#111111] p-6 border border-black/[0.06] dark:border-white/[0.08] shadow-xs space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Status Chips</h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-emerald-500" /> Active
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-semibold flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-blue-500" /> In Transit
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-semibold flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-amber-500" /> Pending
                  </span>
                  <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 font-semibold flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-red-500" /> Suspended
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400 border border-slate-500/20 font-semibold flex items-center gap-1.5">
                    Archived
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------------------ */}
          {/* SECTION 6: BENTO GRID ARCHITECTURE (PUBLICIS SAPIENT)              */}
          {/* ------------------------------------------------------------------ */}
          <section id="bento" className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Bento Grid & Executive Metrics
              </h2>
              <p className="text-xs text-slate-500">Publicis Sapient executive scorecard with Apple aesthetic depth.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Metric 1: GMV */}
              <div className="md:col-span-4 rounded-3xl bg-white dark:bg-[#111111] p-6 border border-black/[0.06] dark:border-white/[0.08] shadow-xs flex flex-col justify-between hover:scale-[1.01] transition">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase">Gross Merchandise Value</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[11px] font-bold">
                    ↑ 32.4%
                  </span>
                </div>
                <div className="my-4">
                  <p className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    ₹1,24,56,780
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Total platform transactions across 1,284 stores.</p>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div className="w-3/4 h-full bg-blue-600 rounded-full" />
                </div>
              </div>

              {/* Metric 2: Active Operators */}
              <div className="md:col-span-4 rounded-3xl bg-white dark:bg-[#111111] p-6 border border-black/[0.06] dark:border-white/[0.08] shadow-xs flex flex-col justify-between hover:scale-[1.01] transition">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase">Verified Sellers</span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 text-[11px] font-bold">
                    ↑ 18%
                  </span>
                </div>
                <div className="my-4">
                  <p className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    1,284
                  </p>
                  <p className="text-xs text-slate-400 mt-1">99.8% verification compliance rate.</p>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div className="w-4/5 h-full bg-emerald-500 rounded-full" />
                </div>
              </div>

              {/* Metric 3: Total Orders */}
              <div className="md:col-span-4 rounded-3xl bg-white dark:bg-[#111111] p-6 border border-black/[0.06] dark:border-white/[0.08] shadow-xs flex flex-col justify-between hover:scale-[1.01] transition">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase">Order Velocity</span>
                  <span className="px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 text-[11px] font-bold">
                    ↑ 27%
                  </span>
                </div>
                <div className="my-4">
                  <p className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    24,619
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Average fulfillment time: 1.4 days.</p>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div className="w-2/3 h-full bg-purple-600 rounded-full" />
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------------------ */}
          {/* SECTION 7: SPACING & GRID ARCHITECTURE                             */}
          {/* ------------------------------------------------------------------ */}
          <section id="layout" className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Spacing & Grid Architecture
              </h2>
              <p className="text-xs text-slate-500">8-point grid rhythm with Apple standard padding scales.</p>
            </div>

            <div className="rounded-3xl bg-white dark:bg-[#111111] p-6 sm:p-8 border border-black/[0.06] dark:border-white/[0.08] shadow-xs space-y-6">
              <div className="grid grid-cols-12 gap-2 h-14 p-2 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02]">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="rounded-xl bg-blue-500/20 flex items-center justify-center font-mono text-[9px] text-blue-600 font-bold">
                    {i + 1}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-end gap-3 text-center text-xs font-mono text-slate-400">
                {[
                  { px: '4px', h: 'h-4', label: 'xs' },
                  { px: '8px', h: 'h-6', label: 'sm' },
                  { px: '12px', h: 'h-8', label: 'md' },
                  { px: '16px', h: 'h-10', label: 'lg' },
                  { px: '24px', h: 'h-12', label: 'xl' },
                  { px: '32px', h: 'h-14', label: '2xl' },
                  { px: '48px', h: 'h-16', label: '3xl' },
                  { px: '64px', h: 'h-20', label: '4xl' },
                ].map((s) => (
                  <div key={s.px} className="flex-1 min-w-[50px] flex flex-col items-center">
                    <div className={`w-full ${s.h} bg-blue-500/15 dark:bg-blue-500/25 rounded-xl`} />
                    <span className="text-[10px] text-slate-700 dark:text-slate-300 font-semibold mt-1">{s.px}</span>
                    <span className="text-[9px] text-slate-400">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------------------ */}
          {/* SECTION 8: SYSTEM ICONS MATRIX (APPLE HIG + SAPIENT)              */}
          {/* ------------------------------------------------------------------ */}
          <section id="icons" className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                System Icon Library
              </h2>
              <p className="text-xs text-slate-500">24px stroke icons with uniform optical weighting, clickable copy syntax.</p>
            </div>

            <div className="rounded-3xl bg-white dark:bg-[#111111] p-6 sm:p-8 border border-black/[0.06] dark:border-white/[0.08] shadow-xs">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {[
                  { name: 'ShoppingBag', icon: ShoppingBag, category: 'Commerce' },
                  { name: 'ShoppingCart', icon: ShoppingCart, category: 'Commerce' },
                  { name: 'Store', icon: Store, category: 'Commerce' },
                  { name: 'Package', icon: Package, category: 'Logistics' },
                  { name: 'Wallet', icon: Wallet, category: 'Finance' },
                  { name: 'Users', icon: Users, category: 'Identity' },
                  { name: 'Home', icon: Home, category: 'Navigation' },
                  { name: 'Layout', icon: Layout, category: 'Navigation' },
                  { name: 'ChevronDown', icon: ChevronDown, category: 'Direction' },
                  { name: 'Calendar', icon: Calendar, category: 'Utility' },
                  { name: 'Clock', icon: Clock, category: 'Utility' },
                  { name: 'Settings', icon: Settings, category: 'System' },
                  { name: 'FolderOpen', icon: FolderOpen, category: 'System' },
                  { name: 'Headphones', icon: Headphones, category: 'Support' },
                  { name: 'Info', icon: Info, category: 'Feedback' },
                  { name: 'AlertCircle', icon: AlertCircle, category: 'Feedback' },
                  { name: 'ShieldAlert', icon: ShieldAlert, category: 'Security' },
                  { name: 'Code2', icon: Code2, category: 'Developer' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => copyToClipboard(`<${item.name} />`, item.name)}
                      className="p-3.5 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] hover:border-blue-500 hover:bg-blue-50/40 dark:hover:bg-blue-950/30 flex flex-col items-center gap-2 group transition text-center cursor-pointer"
                    >
                      <div className="size-10 rounded-xl bg-slate-50 dark:bg-white/[0.05] group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition">
                        <Icon className="size-5 text-slate-700 dark:text-slate-300 group-hover:text-white transition" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 truncate w-full">
                        {item.name}
                      </span>
                      <span className="text-[9px] text-slate-400 font-mono">
                        {item.category}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------------------ */}
          {/* SECTION 9: ACCESSIBILITY & HIG COMPLIANCE                          */}
          {/* ------------------------------------------------------------------ */}
          <section id="accessibility" className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Human Interface Guidelines & Accessibility
              </h2>
              <p className="text-xs text-slate-500">WCAG 2.2 AAA standard compliance with tactile touch ergonomics.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-3xl bg-white dark:bg-[#111111] p-6 border border-black/[0.06] dark:border-white/[0.08] shadow-xs space-y-2">
                <div className="size-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                  44px
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Minimum Touch Targets</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  All interactive controls enforce a minimum 44×44 CSS point target envelope conforming to Apple HIG pointer precision.
                </p>
              </div>

              <div className="rounded-3xl bg-white dark:bg-[#111111] p-6 border border-black/[0.06] dark:border-white/[0.08] shadow-xs space-y-2">
                <div className="size-9 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
                  7:1
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">High-Contrast Optics</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Body and display typography strictly exceed 7:1 contrast ratios in light and dark appearances to ensure universal readability.
                </p>
              </div>

              <div className="rounded-3xl bg-white dark:bg-[#111111] p-6 border border-black/[0.06] dark:border-white/[0.08] shadow-xs space-y-2">
                <div className="size-9 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xs">
                  Tab
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Visible Keyboard Focus</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Full 2px outline focus rings with 2px offset on all actionable elements for assistive technology and keyboard navigation.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Apple-style Footer */}
        <footer className="p-8 border-t border-black/[0.06] dark:border-white/[0.08] text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-[1500px] w-full mx-auto">
          <div className="flex items-center gap-2">
            <SbtLogo size="sm" showTagline={false} />
            <span>· Human Interface Guidelines & Enterprise Core</span>
          </div>
          <p>© 2026 SBT Marketplace. Inspired by Apple Developer & Publicis Sapient.</p>
        </footer>
      </div>
    </div>
  )
}
