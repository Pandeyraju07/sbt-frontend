import * as React from 'react'
import {
  AlertCircle,
  AlertTriangle,
  Archive,
  Ban,
  CheckCircle2,
  Clock,
  EyeOff,
  FileText,
  HelpCircle,
  RefreshCw,
  Sparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils'

export type SbtWorkflowStatus =
  | 'DRAFT'
  | 'SUBMITTED'
  | 'UNDER_REVIEW'
  | 'MORE_INFORMATION_REQUIRED'
  | 'RESUBMITTED'
  | 'APPROVED'
  | 'REJECTED'
  | 'ACTIVE'
  | 'SUSPENDED'
  | 'DISABLED'
  | 'PUBLISHED'
  | 'UNPUBLISHED'
  | 'ARCHIVED'

export type StatusBadgeSize = 'sm' | 'md' | 'lg'

export type StatusConfig = {
  label: string
  description: string
  variant: 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'accent'
  icon: React.ComponentType<{ className?: string }>
}

export const STATUS_CONFIG: Record<SbtWorkflowStatus, StatusConfig> = {
  DRAFT: {
    label: 'Draft',
    description: 'Item created but not yet submitted for review or publication',
    variant: 'neutral',
    icon: FileText,
  },
  SUBMITTED: {
    label: 'Submitted',
    description: 'Submitted and queued for verification',
    variant: 'info',
    icon: Clock,
  },
  UNDER_REVIEW: {
    label: 'Under Review',
    description: 'Currently undergoing compliance or admin review',
    variant: 'info',
    icon: RefreshCw,
  },
  MORE_INFORMATION_REQUIRED: {
    label: 'Info Required',
    description: 'Reviewer requested additional documentation or corrections',
    variant: 'warning',
    icon: HelpCircle,
  },
  RESUBMITTED: {
    label: 'Resubmitted',
    description: 'Updated with requested details and resubmitted for review',
    variant: 'info',
    icon: RefreshCw,
  },
  APPROVED: {
    label: 'Approved',
    description: 'Verified and approved by platform administrators',
    variant: 'success',
    icon: CheckCircle2,
  },
  REJECTED: {
    label: 'Rejected',
    description: 'Application or item rejected during review',
    variant: 'error',
    icon: AlertCircle,
  },
  ACTIVE: {
    label: 'Active',
    description: 'Operational and healthy in live marketplace',
    variant: 'success',
    icon: CheckCircle2,
  },
  SUSPENDED: {
    label: 'Suspended',
    description: 'Temporarily suspended due to policy or review flag',
    variant: 'warning',
    icon: AlertTriangle,
  },
  DISABLED: {
    label: 'Disabled',
    description: 'Deactivated by owner or platform policy',
    variant: 'error',
    icon: Ban,
  },
  PUBLISHED: {
    label: 'Published',
    description: 'Live and discoverable on buyer storefronts',
    variant: 'accent',
    icon: Sparkles,
  },
  UNPUBLISHED: {
    label: 'Unpublished',
    description: 'Removed from public storefront visibility',
    variant: 'neutral',
    icon: EyeOff,
  },
  ARCHIVED: {
    label: 'Archived',
    description: 'Permanently archived record retained for compliance',
    variant: 'neutral',
    icon: Archive,
  },
}

const variantStyles: Record<StatusConfig['variant'], string> = {
  success: 'bg-success/12 text-success border-success/25 dark:bg-success/20 dark:border-success/40',
  warning: 'bg-warning/15 text-warning-foreground border-warning/30 dark:bg-warning/25 dark:border-warning/50',
  error: 'bg-error/12 text-error border-error/25 dark:bg-error/20 dark:border-error/40',
  info: 'bg-info/12 text-info border-info/25 dark:bg-info/20 dark:border-info/40',
  neutral: 'bg-muted text-muted-foreground border-border dark:bg-muted/50 dark:border-border',
  accent: 'bg-accent text-accent-foreground border-accent/40 dark:bg-accent/30 dark:border-accent/50',
}

const dotStyles: Record<StatusConfig['variant'], string> = {
  success: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-error',
  info: 'bg-info',
  neutral: 'bg-muted-foreground',
  accent: 'bg-sidebar-primary',
}

const sizeStyles: Record<StatusBadgeSize, { badge: string; icon: string; text: string }> = {
  sm: {
    badge: 'px-1.5 py-0.5 gap-1 text-[11px] leading-tight',
    icon: 'size-3 shrink-0',
    text: 'text-[11px]',
  },
  md: {
    badge: 'px-2.5 py-1 gap-1.5 text-xs font-medium',
    icon: 'size-3.5 shrink-0',
    text: 'text-xs',
  },
  lg: {
    badge: 'px-3 py-1.5 gap-2 text-sm font-medium',
    icon: 'size-4 shrink-0',
    text: 'text-sm',
  },
}

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status: SbtWorkflowStatus
  label?: string
  size?: StatusBadgeSize
  showIcon?: boolean
  showDot?: boolean
}

export function StatusBadge({
  status,
  label,
  size = 'md',
  showIcon = true,
  showDot = false,
  className,
  ...props
}: StatusBadgeProps) {
  const config = STATUS_CONFIG[status] ?? {
    label: status,
    description: 'Unknown status',
    variant: 'neutral' as const,
    icon: FileText,
  }

  const Icon = config.icon
  const displayLabel = label ?? config.label

  return (
    <span
      role="status"
      aria-label={`Status: ${displayLabel}`}
      title={config.description}
      className={cn(
        'inline-flex items-center rounded-full border font-medium select-none whitespace-nowrap transition-colors',
        variantStyles[config.variant],
        sizeStyles[size].badge,
        className,
      )}
      {...props}
    >
      {showDot ? (
        <span
          className={cn('size-1.5 rounded-full shrink-0 animate-pulse', dotStyles[config.variant])}
          aria-hidden="true"
        />
      ) : null}
      {showIcon ? <Icon className={sizeStyles[size].icon} aria-hidden="true" /> : null}
      <span className={sizeStyles[size].text}>{displayLabel}</span>
    </span>
  )
}
