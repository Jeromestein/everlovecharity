import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export function WhatWeDo() {
  return (
    <div className="container mx-auto py-12 space-y-16">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter mb-6">WHAT WE DO</h1>
        <p className="text-lg text-muted-foreground">
          Everlove Charity Foundation is committed to empowering children in vulnerable communities
          by expanding access to education, emotional support, and safe family environments — one
          child, one heart, one future at a time.
        </p>
      </div>

      <Separator />

      {/* Children in Crisis Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-rose-600">263 million</h3>
              <p className="text-muted-foreground">
                children and youth worldwide are out of school.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-rose-600">1 in 5 girls</h3>
              <p className="text-muted-foreground">
                in sub-Saharan Africa does not complete primary school.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-rose-600">Every 26 seconds</h3>
              <p className="text-muted-foreground">
                a child drops out of school due to poverty, conflict, or forced labor.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-rose-600">Over 40 million</h3>
              <p className="text-muted-foreground">
                children are displaced or orphaned due to conflict or social collapse.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Safe Spaces Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">SAFE SPACES TO LEARN</h2>
          <p className="text-muted-foreground">
            At Everlove, we believe every child deserves a safe place to learn, grow, and dream.
            Whether in rural villages or underserved urban zones, we partner with local communities
            to build and support schools, learning centers, and family-based environments where
            children feel loved and protected.
          </p>
          <p className="font-semibold">Together, we can restore childhood through education.</p>
          <div className="space-y-2">
            <h3 className="font-semibold">Our focus:</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Educational Sponsorships</li>
              <li>Safe Learning Environments</li>
              <li>Protection from Exploitation & Abuse</li>
            </ul>
          </div>
          <div className="flex gap-4">
            <Button variant="default">LEARN MORE</Button>
            <Button variant="outline">GET HELP</Button>
          </div>
        </div>
        <div className="bg-rose-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">🎒 EQUIPPING FOR LIFE</h3>
          <p className="text-muted-foreground mb-6">
            We go beyond classrooms. Education is a lifelong journey, and we walk beside each child
            every step of the way. From literacy to leadership, we provide skills that foster
            independence and resilience.
          </p>
          <p className="font-semibold mb-4">Once an Everlove child, always part of our family.</p>
          <div className="space-y-2">
            <h4 className="font-semibold">Our support includes:</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Life Skills & Youth Leadership</li>
              <li>Mental Health & Emotional Care</li>
              <li>Teacher Training & Local Empowerment</li>
              <li>Mentorship for Teens & Young Adults</li>
            </ul>
          </div>
          <div className="flex gap-4 mt-6">
            <Button variant="default">LEARN MORE</Button>
            <Button variant="outline">GET HELP</Button>
          </div>
        </div>
      </div>

      <Separator />

      {/* Strong Families Section */}
      <div className="bg-rose-50 p-8 rounded-lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">👨‍👩‍👧 STRONG FAMILIES</h2>
          <p className="text-muted-foreground mb-6">
            We believe lasting change starts at home. Whether through reunification, foster care
            support, or extended family mentorship, we work with caregivers to ensure children are
            nurtured in stable, loving homes.
          </p>
          <p className="font-semibold mb-6">Every child deserves a family to come home to.</p>
          <div className="space-y-2 mb-6">
            <h3 className="font-semibold">We help with:</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Family Strengthening & Parenting Support</li>
              <li>Reunification & Community Integration</li>
              <li>Long-term Stability Through Foster & Kinship Care</li>
            </ul>
          </div>
          <div className="flex gap-4">
            <Button variant="default">LEARN MORE</Button>
            <Button variant="outline">GET HELP</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
