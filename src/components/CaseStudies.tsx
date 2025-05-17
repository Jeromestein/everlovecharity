import { Card } from '@/components/ui/card'
import { Home, Users } from 'lucide-react'

export function CaseStudies() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-800 mb-4">
          Our Impact
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Stories of Hope and Transformation
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
          Meet some of the individuals and communities we're helping to build better futures
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-rose-100">
              <Home className="h-6 w-6 text-rose-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Ana's Journey to Stability</h3>
              <p className="text-muted-foreground">
                After fleeing a domestic violence situation, Ana and her two children found
                themselves in a motel with only basic necessities. Through our support program, we
                provided essential items and temporary childcare while she rebuilt her life. Today,
                Ana has secured a one-bedroom apartment and is working towards creating a stable
                home for her family. We continue to support her by helping gather basic household
                items like a microwave and blender to make daily life easier.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-rose-100">
              <Users className="h-6 w-6 text-rose-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Supporting Youth in Foster Care</h3>
              <p className="text-muted-foreground">
                Our three Short Term Residential homes in Orange County provide specialized care for
                18 youth aged 13-18 who require higher levels of behavioral and emotional support.
                These young people, many of whom have experienced severe trauma, find a stable
                environment where they can heal and grow. Our dedicated staff work to support their
                recovery and help them transition to long-term housing or family reunification when
                appropriate.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
