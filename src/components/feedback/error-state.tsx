import type { ReactNode } from 'react'
import { CircleAlertIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { getUserErrorMessage } from '@/lib/errors'

type ErrorStateProps = {
  title?: string
  error?: unknown
  description?: string
  onRetry?: () => void
  action?: ReactNode
  className?: string
}

export function ErrorState({
  title = 'Something went wrong',
  error,
  description,
  onRetry,
  action,
  className,
}: ErrorStateProps) {
  const message = description ?? (error ? getUserErrorMessage(error) : undefined)

  return (
    <div
      role="alert"
      className={cn(
        'border-border bg-card flex flex-col items-center justify-center rounded-xl border px-6 py-12 text-center shadow-sm',
        className,
      )}
    >
      <CircleAlertIcon className="text-destructive mb-4 size-8" aria-hidden="true" />
      <h2 className="text-h4">{title}</h2>
      {message ? (
        <p className="text-body text-muted-foreground mt-2 max-w-md">{message}</p>
      ) : null}
      {onRetry || action ? (
        <div className="mt-6 flex items-center gap-3">
          {onRetry ? (
            <Button type="button" variant="outline" onClick={onRetry}>
              Try again
            </Button>
          ) : null}
          {action}
        </div>
      ) : null}
    </div>
  )
}
