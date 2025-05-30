import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function FounderSection() {
  return (
    <section className="py-20 bg-[#131313] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold font-['Montserrat']">Why We're Building This</h2>
              <div className="space-y-4">
                <p className="text-lg text-[#EAEAEA]/80 font-['Lato']">
                  As someone who struggled through traditional education systems, I know firsthand the frustration of
                  sitting in class, wanting to understand, but feeling lost in a sea of information.
                </p>
                <p className="text-lg text-[#EAEAEA]/80 font-['Lato']">
                  Education shouldn't be about who can write the fastest or memorize the most. It should be about
                  understanding, curiosity, and genuine learning.
                </p>
                <p className="text-lg text-[#F39C12] font-['Lato'] font-medium">
                  This isn't just another app—it's a mission to democratize quality education worldwide.
                </p>
              </div>
            </div>

            <Card className="bg-[#EAEAEA]/10 border-[#EAEAEA]/20">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-[#F39C12] mb-4" />
                <blockquote className="text-lg text-[#EAEAEA]/90 font-['Lato'] italic mb-4">
                  "Every student deserves a personal tutor who never gets tired, never judges, and never forgets. We're
                  building that tutor for the world."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F39C12] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">F</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#EAEAEA]">Founder</p>
                    <p className="text-sm text-[#EAEAEA]/70">Bundi Notes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
