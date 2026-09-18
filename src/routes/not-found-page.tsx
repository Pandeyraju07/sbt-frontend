import { Link } from 'react-router-dom'
import { ErrorState } from '@/components/feedback/error-state'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants/routes'

export function NotFoundPage() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <ErrorState
        title="Page not found"
        description="This route is not part of the current frontend foundation."
        action={
          <Button asChild>
            <Link to={ROUTES.home}>Go home</Link>
          </Button>
        }
        className="max-w-lg"
      />
    </div>
  )
}
