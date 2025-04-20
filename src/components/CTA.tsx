import { Button } from '@/components/ui/button'

export function CTA() {
  return (
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
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                One-time Donation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-rose-800 border-white hover:bg-white/10"
              >
                Monthly Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
