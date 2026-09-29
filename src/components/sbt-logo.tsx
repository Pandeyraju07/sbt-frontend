import { cn } from '@/lib/utils'
import logoHorizontal from '@/assets/sbt-logo-horizontal.png'
import logoHorizontalDark from '@/assets/sbt-logo-horizontal-dark.png'
import logoFull from '@/assets/sbt-logo-full.png'
import logoFullDark from '@/assets/sbt-logo-full-dark.png'
import logoMarketplace from '@/assets/sbt-logo-marketplace.png'
import logoMarketplaceDark from '@/assets/sbt-logo-marketplace-dark.png'
import logoIcon from '@/assets/sbt-icon-mark.png'

export interface SbtLogoProps {
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  format?: 'horizontal' | 'full' | 'marketplace' | 'icon'
  theme?: 'auto' | 'light' | 'dark'
  variant?: 'blue' | 'red' // maintained for backwards compatibility
  showTagline?: boolean // maintained for backwards compatibility
}

export function SbtLogo({
  className,
  size = 'md',
  format = 'horizontal',
  theme = 'auto',
}: SbtLogoProps) {
  const heightClasses = {
    xs: 'h-6',
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  }

  if (format === 'icon') {
    return (
      <div className={cn('inline-flex items-center select-none shrink-0', className)}>
        <img
          src={logoIcon}
          alt="SBT Logo Icon"
          className={cn('w-auto object-contain transition-transform duration-200 hover:scale-[1.02]', heightClasses[size])}
          loading="eager"
        />
      </div>
    )
  }

  if (format === 'full') {
    if (theme === 'dark') {
      return (
        <div className={cn('inline-flex items-center select-none shrink-0', className)}>
          <img
            src={logoFullDark}
            alt="SBT — Sell Buy Trust (One Platform. Real Opportunities.)"
            className={cn('w-auto object-contain transition-transform duration-200 hover:scale-[1.02]', heightClasses[size])}
            loading="eager"
          />
        </div>
      )
    }

    if (theme === 'light') {
      return (
        <div className={cn('inline-flex items-center select-none shrink-0', className)}>
          <img
            src={logoFull}
            alt="SBT — Sell Buy Trust (One Platform. Real Opportunities.)"
            className={cn('w-auto object-contain transition-transform duration-200 hover:scale-[1.02]', heightClasses[size])}
            loading="eager"
          />
        </div>
      )
    }

    return (
      <div className={cn('inline-flex items-center select-none shrink-0 relative', className)}>
        <img
          src={logoFull}
          alt="SBT — Sell Buy Trust"
          className={cn('w-auto object-contain transition-transform duration-200 hover:scale-[1.02] dark:hidden block', heightClasses[size])}
          loading="eager"
        />
        <img
          src={logoFullDark}
          alt="SBT — Sell Buy Trust"
          className={cn('w-auto object-contain transition-transform duration-200 hover:scale-[1.02] hidden dark:block', heightClasses[size])}
          loading="eager"
        />
      </div>
    )
  }

  if (format === 'marketplace') {
    if (theme === 'dark') {
      return (
        <div className={cn('inline-flex items-center select-none shrink-0', className)}>
          <img
            src={logoMarketplaceDark}
            alt="SBT — Sell Buy Trust (A Smarter Marketplace)"
            className={cn('w-auto object-contain transition-transform duration-200 hover:scale-[1.02]', heightClasses[size])}
            loading="eager"
          />
        </div>
      )
    }

    if (theme === 'light') {
      return (
        <div className={cn('inline-flex items-center select-none shrink-0', className)}>
          <img
            src={logoMarketplace}
            alt="SBT — Sell Buy Trust (A Smarter Marketplace)"
            className={cn('w-auto object-contain transition-transform duration-200 hover:scale-[1.02]', heightClasses[size])}
            loading="eager"
          />
        </div>
      )
    }

    return (
      <div className={cn('inline-flex items-center select-none shrink-0 relative', className)}>
        <img
          src={logoMarketplace}
          alt="SBT — Sell Buy Trust"
          className={cn('w-auto object-contain transition-transform duration-200 hover:scale-[1.02] dark:hidden block', heightClasses[size])}
          loading="eager"
        />
        <img
          src={logoMarketplaceDark}
          alt="SBT — Sell Buy Trust"
          className={cn('w-auto object-contain transition-transform duration-200 hover:scale-[1.02] hidden dark:block', heightClasses[size])}
          loading="eager"
        />
      </div>
    )
  }

  // Default: Horizontal logo with responsive light/dark support
  if (theme === 'dark') {
    return (
      <div className={cn('inline-flex items-center select-none shrink-0', className)}>
        <img
          src={logoHorizontalDark}
          alt="SBT — Sell Buy Trust"
          className={cn('w-auto object-contain transition-transform duration-200 hover:scale-[1.02]', heightClasses[size])}
          loading="eager"
        />
      </div>
    )
  }

  if (theme === 'light') {
    return (
      <div className={cn('inline-flex items-center select-none shrink-0', className)}>
        <img
          src={logoHorizontal}
          alt="SBT — Sell Buy Trust"
          className={cn('w-auto object-contain transition-transform duration-200 hover:scale-[1.02]', heightClasses[size])}
          loading="eager"
        />
      </div>
    )
  }

  return (
    <div className={cn('inline-flex items-center select-none shrink-0 relative', className)}>
      {/* Light appearance version */}
      <img
        src={logoHorizontal}
        alt="SBT — Sell Buy Trust"
        className={cn('w-auto object-contain transition-transform duration-200 hover:scale-[1.02] dark:hidden block', heightClasses[size])}
        loading="eager"
      />
      {/* Dark appearance version */}
      <img
        src={logoHorizontalDark}
        alt="SBT — Sell Buy Trust"
        className={cn('w-auto object-contain transition-transform duration-200 hover:scale-[1.02] hidden dark:block', heightClasses[size])}
        loading="eager"
      />
    </div>
  )
}
