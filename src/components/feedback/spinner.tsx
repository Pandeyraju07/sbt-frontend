import { Loader2Icon } from 'lucide-react'
import { cn } from '@/lib/utils'

type SpinnerProps = {
  className?: string
  label?: string
}

export function Spinner({ className, label = 'Loading' }: SpinnerProps) {
  return (
    <span className="inline-flex items-center gap-2" role="status" aria-live="polite">
      <Loader2Icon
        className={cn('text-muted-foreground size-4 animate-spin', className)}
      />
      <span className="sr-only">{label}</span>
    </span>
  )
}
