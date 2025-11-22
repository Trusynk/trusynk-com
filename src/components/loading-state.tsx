// src/components/loading-state.tsx
import { Spinner } from '@/components/ui/spinner'
import { cn } from '@/lib/utils'

interface LoadingStateProps {
  className?: string
  text?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function LoadingState({
  className,
  text = 'Loading...',
  size = 'md',
}: LoadingStateProps) {
  const spinnerSizes = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  }

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  }

  return (
    <div className={cn('flex flex-col items-center justify-center gap-4', className)}>
      <Spinner className={cn('text-brand-9', spinnerSizes[size])} />
      {text && (
        <p className={cn('text-gray-10 font-medium animate-pulse', textSizes[size])}>{text}</p>
      )}
    </div>
  )
}
