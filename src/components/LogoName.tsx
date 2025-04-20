import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '@/components'

export function LogoName() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Logo size={64} />
      <div className="flex flex-col">
        <span className="text-2xl font-bold leading-tight">Everlove</span>
        <span className="text-sm text-muted-foreground">Charity Foundation</span>
      </div>
    </Link>
  )
}
