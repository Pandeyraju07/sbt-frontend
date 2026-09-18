import { CheckIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export type StepperStep = {
  id: string
  label: string
  description?: string
}

type StepperProps = {
  steps: StepperStep[]
  currentStepId: string
}

export function Stepper({ steps, currentStepId }: StepperProps) {
  const currentIndex = steps.findIndex((step) => step.id === currentStepId)

  return (
    <ol
      className="flex flex-col gap-4 md:flex-row md:items-start md:gap-2"
      aria-label="Progress"
    >
      {steps.map((step, index) => {
        const complete = index < currentIndex
        const current = index === currentIndex
        return (
          <li key={step.id} className="flex flex-1 items-start gap-3">
            <span
              className={cn(
                'flex size-7 shrink-0 items-center justify-center rounded-full border text-xs font-medium',
                complete && 'border-success bg-success text-success-foreground',
                current && 'border-primary bg-primary text-primary-foreground',
                !complete &&
                  !current &&
                  'border-border bg-background text-muted-foreground',
              )}
              aria-current={current ? 'step' : undefined}
            >
              {complete ? <CheckIcon className="size-3.5" /> : index + 1}
            </span>
            <span className="min-w-0">
              <span
                className={cn(
                  'text-label block',
                  current ? 'text-foreground' : 'text-muted-foreground',
                )}
              >
                {step.label}
              </span>
              {step.description ? (
                <span className="text-caption text-muted-foreground mt-0.5 hidden md:block">
                  {step.description}
                </span>
              ) : null}
            </span>
          </li>
        )
      })}
    </ol>
  )
}
