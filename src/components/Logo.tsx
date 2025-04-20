import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/utilities/ui'

interface LogoProps {
  size?: number
  className?: string
  href?: string
}

export function Logo({ size = 32, className }: LogoProps) {
  const logo = (
    <Image
      src="/favicon.svg"
      alt="Everlove Charity Foundation Logo"
      width={size}
      height={size}
      className={cn('text-rose-500', className)}
    />
  )

  return logo
}
