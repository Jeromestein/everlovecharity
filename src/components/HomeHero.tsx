import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 to-rose-800 py-24 md:py-32">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/Education-as-a-Lifeline-Blog-Header-400x250.png"
          alt="Children in classroom"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 75%' }}
          priority
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <div className="mx-auto max-w-3xl space-y-8">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Education changes <span className="text-rose-300">everything</span>.
          </h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-white/80">
            Helping every child access the education they deserve to build a brighter future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-rose-800 border-white hover:bg-black/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
