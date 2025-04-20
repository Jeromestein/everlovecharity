import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {
  return (
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
              We&apos;d love to hear from you. Reach out with any questions about our work or how
              you can get involved.
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
  )
}
