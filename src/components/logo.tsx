import { cn } from '@/lib/utils'
import Image from 'next/image'

type LogoProps = {
  width?: number
  height?: number
  className?: string
  isWhite?: boolean
}

const Logo = ({ width = 128, height = 128, className, isWhite = false }: LogoProps) => {
  return isWhite ? (
    <Image
      src="/logo-white.svg"
      alt="Trusynk with logo"
      width={width}
      height={height}
      className={cn('object-contain', className)}
    />
  ) : (
    <Image
      src="/logo-blue.svg"
      alt="Trusynk with logo"
      width={width}
      height={height}
      className={cn('object-contain', className)}
    />
  )
}

export default Logo
