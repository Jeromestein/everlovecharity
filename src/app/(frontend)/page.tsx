import type { Metadata } from 'next'

import { Header, HomeHero, ImpactStats, About, Projects, CTA, Contact, Footer } from '@/components'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HomeHero />
        <ImpactStats />
        <About />
        <Projects />
        <CTA />
        <Contact />
      </main>
    </div>
  )
}
