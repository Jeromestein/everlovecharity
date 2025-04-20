import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-br from-purple-50 to-rose-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-800 mb-4">
            Our Projects
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Making a difference, one child at a time
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Explore our current initiatives bringing education to children in need
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl">
            <div className="aspect-video relative overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Classroom building project"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Rwanda Classroom Initiative</h3>
              <p className="mt-2 text-muted-foreground">
                Building a new school facility in rural Rwanda to provide education for 60+ children
              </p>
              <Button variant="link" className="mt-4 p-0 text-rose-600">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl">
            <div className="aspect-video relative overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="School supplies program"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Books & Supplies Program</h3>
              <p className="mt-2 text-muted-foreground">
                Providing essential learning materials to children in underserved communities
              </p>
              <Button variant="link" className="mt-4 p-0 text-rose-600">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
