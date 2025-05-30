import { Badge } from "@/components/ui/badge"
import { Globe, Target, Heart } from "lucide-react"

export function VisionSection() {
  return (
    <section id="vision" className="py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-[#F39C12] text-[#F39C12] bg-[#F39C12]/10 mb-6">
              <Globe className="w-4 h-4 mr-2" />
              UN SDG 4: Quality Education
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#131313] font-['Montserrat'] mb-6">
              Leveling Up Education <span className="text-[#F39C12]">Across Africa</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#131313] font-['Montserrat']">Six months later...</h3>
              <div className="space-y-4">
                <p className="text-lg text-[#131313]/80 font-['Lato']">
                  Idir no longer struggles in class. He records every lecture, asks questions to his AI study partner,
                  and finally <em>understands</em> instead of just memorizing.
                </p>
                <p className="text-lg text-[#131313]/80 font-['Lato']">
                  His grades improved, but more importantly, his confidence soared. He's not just a better student—he's
                  a more curious, engaged learner.
                </p>
                <p className="text-lg text-[#F39C12] font-['Lato'] font-medium">
                  This is the transformation we're building for every student, everywhere.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#F39C12]/20 to-[#BDC3C7]/20 rounded-2xl flex items-center justify-center border border-[#BDC3C7]/30">
                <div className="text-center space-y-4">
                  <Heart className="w-16 h-16 text-[#F39C12] mx-auto" />
                  <p className="text-[#131313]/60 font-['Lato']">[Idir's Success Story Video]</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-[#131313] font-['Montserrat']">From Morocco to Nigeria</h3>
            <p className="text-xl text-[#131313]/70 font-['Lato'] leading-relaxed">
              Every student deserves to understand, not just memorize. We're not just building an app—we're building a
              movement toward
              <span className="text-[#F39C12] font-medium"> quality education for all</span>.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-[#131313]/60">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>Supporting UN SDG 4</span>
              </div>
              <div className="w-1 h-1 bg-[#BDC3C7] rounded-full"></div>
              <span>Quality Education Across Africa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
