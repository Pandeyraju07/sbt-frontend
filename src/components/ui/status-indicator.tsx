import * as React from 'react'
import { cn } from '@/lib/utils'
import { STATUS_CONFIG, type SbtWorkflowStatus } from './status-badge'

export interface StatusIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  status: SbtWorkflowStatus
  label?: string
  showLabel?: boolean
  pulse?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const indicatorSizes = {
  sm: 'size-2',
  md: 'size-2.5',
  lg: 'size-3',
}

const indicatorColors: Record<string, string> = {
  success: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-error',
  info: 'bg-info',
  neutral: 'bg-muted-foreground',
  accent: 'bg-sidebar-primary',
}

export function StatusIndicator({
  status,
  label,
  showLabel = false,
  pulse = false,
  size = 'md',
  className,
  ...props
}: StatusIndicatorProps) {
  const config = STATUS_CONFIG[status] ?? {
    label: status,
    description: 'Unknown status',
    variant: 'neutral',
  }
  const displayLabel = label ?? config.label
  const colorClass = indicatorColors[config.variant] ?? 'bg-muted-foreground'

  return (
    <span
      className={cn('inline-flex items-center gap-2 text-xs font-medium', className)}
      title={`${displayLabel}: ${config.description}`}
      {...props}
    >
      <span className="relative flex items-center justify-center">
        {pulse && (
          <span
            className={cn(
              'absolute inline-flex size-full animate-ping rounded-full opacity-75',
              colorClass,
            )}
          />
        )}
        <span
          className={cn('relative inline-flex rounded-full', indicatorSizes[size], colorClass)}
        />
      </span>
      {showLabel && <span className="text-foreground/90">{displayLabel}</span>}
    </span>
  )
}
