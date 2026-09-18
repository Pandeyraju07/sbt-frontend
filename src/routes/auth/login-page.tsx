import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants/routes'

export function LoginPage() {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-h3">Sign in</CardTitle>
        <CardDescription>
          Identity and authentication will be implemented in Phase 2. This route only
          establishes the auth layout.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Button asChild>
          <Link to={ROUTES.home}>Back to foundation</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to={ROUTES.register}>Create an account — later</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
