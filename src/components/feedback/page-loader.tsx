import { Skeleton } from '@/components/ui/skeleton'

type PageLoaderProps = {
  message?: string
}

export function PageLoader({ message }: PageLoaderProps) {
  return (
    <div className="flex flex-col gap-6" aria-busy="true" aria-live="polite">
      <span className="sr-only">{message ?? 'Loading page'}</span>
      {message && (
        <p className="text-xs text-muted-foreground font-medium animate-pulse">
          {message}
        </p>
      )}
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-8 w-72" />
        <Skeleton className="h-4 w-full max-w-xl" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Skeleton className="h-36 rounded-xl" />
        <Skeleton className="h-36 rounded-xl" />
      </div>
      <Skeleton className="h-64 rounded-xl" />
    </div>
  )
}
