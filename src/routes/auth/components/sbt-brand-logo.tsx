import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import authLogoImg from '@/assets/auth/sbt-auth-logo.png'

interface SbtBrandLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  linkToHome?: boolean
}

export function SbtBrandLogo({
  className = '',
  size = 'md',
  linkToHome = true,
}: SbtBrandLogoProps) {
  const content = (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* High-res asset cropped directly from design mockups */}
      <img
        src={authLogoImg}
        alt="SBT - Sell Buy Trust"
        className={`object-contain transition-transform duration-200 hover:scale-[1.02] ${
          size === 'sm' ? 'h-14' : size === 'lg' ? 'h-24' : 'h-20'
        }`}
      />
    </div>
  )

  if (linkToHome) {
    return (
      <Link to={ROUTES.home} className="inline-block focus:outline-none" title="Return to SBT Marketplace">
        {content}
      </Link>
    )
  }

  return content
}
