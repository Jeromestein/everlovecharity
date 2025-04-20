'use client'

import { Send } from 'lucide-react'
import { ContactForm } from './ContactForm'

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
                <a href="mailto:info@everlovecharity.com">info@everlovecharity.com</a>
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
