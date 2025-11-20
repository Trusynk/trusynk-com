import { cn } from '@/lib/utils'
import Link from 'next/link'

type TypographyProps = {
  children: React.ReactNode
  className?: string
}

type LinkTypographyProps = TypographyProps & {
  href: string
  target?: '_blank' | '_self'
}

export const H1 = ({ children, className }: TypographyProps) => {
  return (
    <h1 className={cn('text-pretty text-[64px] text-brand-11 leading-16 font-inter', className)}>
      {children}
    </h1>
  )
}

export const H2 = ({ children, className }: TypographyProps) => {
  return (
    <h2
      className={cn(
        'text-pretty text-3xl text-brand-11 leading-4 font-inter tracking-tight font-bold',
        className,
      )}
    >
      {children}
    </h2>
  )
}

export const H3 = ({ children, className }: TypographyProps) => {
  return (
    <h3
      className={cn(
        'text-pretty text-2xl text-brand-11 leading-8 font-inter tracking-tight font-bold',
        className,
      )}
    >
      {children}
    </h3>
  )
}

export const P = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={cn(
        'text-pretty text-lg leading-7 tracking-normal text-brand-11 font-inter',
        className,
      )}
    >
      {children}
    </p>
  )
}

export const LinkP = ({ children, className, href, target = '_blank' }: LinkTypographyProps) => {
  return (
    <Link
      href={href}
      target={target}
      className={cn(
        'text-pretty text-lg leading-7 tracking-normal text-brand-11 font-inter underline',
        className,
      )}
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  )
}
