import Link from 'next/link'
import { LogoName } from '@/components'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <LogoName />
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-base font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link
            href="#about"
            className="text-base font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-base font-medium transition-colors hover:text-primary"
          >
            Projects
          </Link>
          <Link
            href="#get-involved"
            className="text-base font-medium transition-colors hover:text-primary"
          >
            Get Involved
          </Link>
          <Link
            href="#contact"
            className="text-base font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        <Button className="bg-rose-600 hover:bg-rose-700">Donate</Button>
      </div>
    </header>
  )
}
