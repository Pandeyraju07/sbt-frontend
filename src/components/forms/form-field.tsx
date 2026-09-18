import type { ReactNode } from 'react'
import { useFormContext, type FieldValues, type Path } from 'react-hook-form'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

type FormFieldProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>
  label: string
  description?: string
  required?: boolean
  children: ReactNode
  className?: string
}

export function FormField<TFieldValues extends FieldValues>({
  name,
  label,
  description,
  required,
  children,
  className,
}: FormFieldProps<TFieldValues>) {
  const {
    formState: { errors },
  } = useFormContext<TFieldValues>()
  const error = errors[name]
  const message = typeof error?.message === 'string' ? error.message : undefined
  const fieldId = String(name)

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <Label htmlFor={fieldId} className="text-label">
        {label}
        {required ? (
          <span className="text-destructive" aria-hidden="true">
            *
          </span>
        ) : null}
      </Label>
      {children}
      {description && !message ? (
        <p className="text-caption text-muted-foreground">{description}</p>
      ) : null}
      {message ? (
        <p id={`${fieldId}-error`} role="alert" className="text-caption text-destructive">
          {message}
        </p>
      ) : null}
    </div>
  )
}
