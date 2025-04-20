import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Heart, BookOpen, School, Globe, Send, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-bold">Everlove</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Projects
            </Link>
            <Link
              href="#get-involved"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Get Involved
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <Button className="bg-rose-600 hover:bg-rose-700">Donate</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 to-rose-800 py-24 md:py-32">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Children in classroom"
              fill
              className="object-cover"
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
                  className="text-white border-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2 p-6 rounded-lg bg-gradient-to-br from-rose-50 to-purple-50">
                <Globe className="mx-auto h-10 w-10 text-rose-600" />
                <h3 className="text-3xl font-bold">2+</h3>
                <p className="text-muted-foreground">Countries with active projects</p>
              </div>
              <div className="space-y-2 p-6 rounded-lg bg-gradient-to-br from-rose-50 to-purple-50">
                <BookOpen className="mx-auto h-10 w-10 text-rose-600" />
                <h3 className="text-3xl font-bold">120+</h3>
                <p className="text-muted-foreground">Children benefiting from our programs</p>
              </div>
              <div className="space-y-2 p-6 rounded-lg bg-gradient-to-br from-rose-50 to-purple-50">
                <School className="mx-auto h-10 w-10 text-rose-600" />
                <h3 className="text-3xl font-bold">1</h3>
                <p className="text-muted-foreground">School currently under construction</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
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
                  inequality. We believe education is a transformative force. In the regions where
                  we work, every backpack, every book is a child's starting point to a better life.
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

        {/* Projects Section */}
        <section
          id="projects"
          className="bg-gradient-to-br from-purple-50 to-rose-50 py-16 md:py-24"
        >
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
                    Building a new school facility in rural Rwanda to provide education for 60+
                    children
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

        {/* CTA Section */}
        <section id="get-involved" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="rounded-xl bg-gradient-to-br from-purple-900 to-rose-800 p-8 md:p-12 text-center text-white">
              <div className="mx-auto max-w-2xl space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Every donation brings a child closer to their dreams
                </h2>
                <p className="text-white/80">
                  Your support makes a real difference in the lives of children seeking education
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-rose-800 hover:bg-white/90">
                    One-time Donation
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white/10"
                  >
                    Monthly Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-800">
                  Get in Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Have questions or want to learn more?
                </h2>
                <p className="text-muted-foreground">
                  We'd love to hear from you. Reach out with any questions about our work or how you
                  can get involved.
                </p>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Send className="h-5 w-5 text-rose-600" />
                    <span>info@everlovecharity.com</span>
                  </p>
                </div>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message" rows={4} />
                  </div>
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="space-y-4 md:max-w-xs">
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-rose-500" />
                <span className="text-xl font-bold">Everlove</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Everlove is a nonprofit initiative currently in the process of applying for
                501(c)(3) status.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">About</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Our Mission
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Partners
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-medium">Get Involved</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Donate
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Volunteer
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Fundraise
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-medium">Connect</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Newsletter
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Social Media
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Everlove Charity Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
