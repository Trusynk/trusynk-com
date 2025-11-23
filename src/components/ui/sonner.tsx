'use client'

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from 'lucide-react'
import { Toaster as Sonner, type ToasterProps } from 'sonner'

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      position="bottom-right"
      icons={{
        success: <CircleCheckIcon className="size-5" />,
        info: <InfoIcon className="size-5" />,
        warning: <TriangleAlertIcon className="size-5" />,
        error: <OctagonXIcon className="size-5" />,
        loading: <Loader2Icon className="size-5 animate-spin" />,
      }}
      toastOptions={{
        style: {
          borderRadius: '12px',
          padding: '16px',
          fontSize: '14px',
        },
        classNames: {
          success: '!bg-green-50 !text-green-900 !border !border-green-300 [&>svg]:!text-green-600',
          error: '!bg-red-50 !text-red-900 !border !border-red-300 [&>svg]:!text-red-600',
          warning: '!bg-amber-50 !text-amber-900 !border !border-amber-300 [&>svg]:!text-amber-600',
          info: '!bg-blue-50 !text-blue-900 !border !border-blue-300 [&>svg]:!text-blue-600',
          loading: '!bg-gray-50 !text-gray-900 !border !border-gray-300 [&>svg]:!text-gray-600',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
