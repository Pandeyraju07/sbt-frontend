import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type PageContainerProps = {
  children: ReactNode
  className?: string
  width?: 'default' | 'narrow' | 'full'
}

export function PageContainer({
  children,
  className,
  width = 'default',
}: PageContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 py-6 md:px-6 lg:px-8 lg:py-8',
        width === 'narrow' && 'max-w-3xl',
        width === 'default' && 'max-w-6xl',
        width === 'full' && 'max-w-none',
        className,
      )}
    >
      {children}
    </div>
  )
}
