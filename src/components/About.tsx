import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Child studying"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
