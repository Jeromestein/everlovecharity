import { Globe, BookOpen, School } from 'lucide-react'

export function ImpactStats() {
  return (
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
  )
}
