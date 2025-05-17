import Image from 'next/image'
import { ArrowRight, Globe, BookOpen, School } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CaseStudies } from './CaseStudies'

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-800">
              Our Mission
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              We believe in the power of education
            </h2>
            <p className="text-lg text-muted-foreground">
              Everlove is a nonprofit organization dedicated to addressing global educational
              inequality. We believe education is a transformative force. In the regions where we
              work, every backpack, every book is a child&apos;s starting point to a better life.
            </p>
            <Button className="bg-rose-600 hover:bg-rose-700">
              About Our Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-xl">
            <Image src="/kids-books.jpg" alt="Kids with books" fill className="object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-lg bg-gradient-to-br from-rose-50 to-purple-300 text-center">
            <Globe className="mx-auto h-10 w-10 text-rose-600 mb-3" />
            <h3 className="text-3xl font-bold mb-2">2+</h3>
            <p className="text-muted-foreground">Countries with active projects</p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-rose-50 to-purple-300 text-center">
            <BookOpen className="mx-auto h-10 w-10 text-rose-600 mb-3" />
            <h3 className="text-3xl font-bold mb-2">120+</h3>
            <p className="text-muted-foreground">Children benefiting from our programs</p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-rose-50 to-purple-300 text-center">
            <School className="mx-auto h-10 w-10 text-rose-600 mb-3" />
            <h3 className="text-3xl font-bold mb-2">1</h3>
            <p className="text-muted-foreground">School currently under construction</p>
          </div>
        </div>

        <CaseStudies />
      </div>
    </section>
  )
}
