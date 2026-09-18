import { useId, useRef, type ChangeEvent, type DragEvent } from 'react'
import { UploadIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type FileUploadProps = {
  label?: string
  description?: string
  accept?: string
  multiple?: boolean
  disabled?: boolean
  onFilesSelected?: (files: File[]) => void
  className?: string
}

export function FileUpload({
  label = 'Upload files',
  description = 'Drop files here or choose from your device.',
  accept,
  multiple = true,
  disabled,
  onFilesSelected,
  className,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const inputId = useId()

  const emit = (fileList: FileList | null) => {
    if (!fileList) {
      return
    }
    onFilesSelected?.(Array.from(fileList))
  }

  const onDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault()
    if (disabled) {
      return
    }
    emit(event.dataTransfer.files)
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    emit(event.target.files)
  }

  return (
    <div className={className}>
      <label
        htmlFor={inputId}
        onDragOver={(event) => event.preventDefault()}
        onDrop={onDrop}
        className={cn(
          'border-border bg-surface flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed px-6 py-10 text-center transition-colors',
          'hover:border-ring hover:bg-accent/40',
          'focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-3',
          disabled && 'pointer-events-none opacity-50',
        )}
      >
        <UploadIcon className="text-muted-foreground mb-3 size-6" aria-hidden="true" />
        <span className="text-label text-foreground">{label}</span>
        <span className="text-caption text-muted-foreground mt-1">{description}</span>
        <input
          ref={inputRef}
          id={inputId}
          type="file"
          className="sr-only"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={onChange}
        />
      </label>
    </div>
  )
}
