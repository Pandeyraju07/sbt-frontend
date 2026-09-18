import type { ReactNode } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

type StatCardProps = {
  label: string
  value: string
  description?: string
  icon?: ReactNode
  className?: string
}

export function StatCard({ label, value, description, icon, className }: StatCardProps) {
  return (
    <Card className={cn('shadow-xs', className)}>
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div>
          <CardDescription className="text-label">{label}</CardDescription>
          <CardTitle className="text-h2 mt-1">{value}</CardTitle>
        </div>
        {icon ? <div className="text-muted-foreground">{icon}</div> : null}
      </CardHeader>
      {description ? (
        <CardContent className="text-small text-muted-foreground">
          {description}
        </CardContent>
      ) : null}
    </Card>
  )
}
