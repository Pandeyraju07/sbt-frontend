import type { ReactNode } from 'react'
import {
  FormProvider,
  useForm,
  type DefaultValues,
  type FieldValues,
  type SubmitHandler,
  type UseFormReturn,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type { ZodType } from 'zod'
import { cn } from '@/lib/utils'

type AppFormProps<TFieldValues extends FieldValues> = {
  schema: ZodType<TFieldValues>
  defaultValues?: DefaultValues<TFieldValues>
  onSubmit: SubmitHandler<TFieldValues>
  children: ReactNode | ((form: UseFormReturn<TFieldValues>) => ReactNode)
  className?: string
  id?: string
}

export function AppForm<TFieldValues extends FieldValues>({
  schema,
  defaultValues,
  onSubmit,
  children,
  className,
  id,
}: AppFormProps<TFieldValues>) {
  const form = useForm<TFieldValues>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onBlur',
  })

  return (
    <FormProvider {...form}>
      <form
        id={id}
        className={cn('flex flex-col gap-4', className)}
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
      >
        {typeof children === 'function' ? children(form) : children}
      </form>
    </FormProvider>
  )
}
