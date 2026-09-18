import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { getUserErrorMessage } from '@/lib/errors'

type FormErrorProps = {
  error: unknown
  title?: string
}

export function FormError({ error, title = 'Unable to submit' }: FormErrorProps) {
  if (!error) {
    return null
  }

  return (
    <Alert variant="destructive" role="alert">
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{getUserErrorMessage(error)}</AlertDescription>
    </Alert>
  )
}
