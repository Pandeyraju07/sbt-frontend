import type { ReactNode } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

export type StatCardProps = {
  label: string
  value: string
  description?: string
  hint?: string
  trend?: 'positive' | 'negative' | 'neutral'
  icon?: ReactNode
  className?: string
}

export function StatCard({
  label,
  value,
  description,
  hint,
  trend = 'neutral',
  icon,
  className,
}: StatCardProps) {
  const trendColors = {
    positive: 'text-success',
    negative: 'text-error',
    neutral: 'text-muted-foreground',
  }

  const subText = hint ?? description

  return (
    <Card className={cn('shadow-xs', className)}>
      <CardHeader className="flex flex-row items-start justify-between gap-4 pb-2">
        <div>
          <CardDescription className="text-label text-muted-foreground">{label}</CardDescription>
          <CardTitle className="text-h2 mt-1 text-foreground font-semibold">{value}</CardTitle>
        </div>
        {icon ? (
          <div className="bg-primary/10 text-primary flex size-8 items-center justify-center rounded-lg shrink-0">
            {icon}
          </div>
        ) : null}
      </CardHeader>
      {subText ? (
        <CardContent className="pt-0">
          <p className={cn('text-small', trendColors[trend])}>{subText}</p>
        </CardContent>
      ) : null}
    </Card>
  )
}
