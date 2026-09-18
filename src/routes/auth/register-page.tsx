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

export function RegisterPage() {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-h3">Create an account</CardTitle>
        <CardDescription>
          Registration, verification, and RBAC are deferred to later phases. This page is
          a routing placeholder only.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Button asChild>
          <Link to={ROUTES.home}>Back to foundation</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to={ROUTES.login}>Already have an account — later</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
