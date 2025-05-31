import { Badge } from "@/components/ui/badge"
import { Globe, Target, Heart } from "lucide-react"

export function VisionSection() {
  return (
    <section id="vision" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-brand-gold text-brand-gold bg-brand-gold/10 mb-6">
              <Globe className="w-4 h-4 mr-2" />
              UN SDG 4: Quality Education
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-black font-primary mb-6">
              Leveling Up Education <span className="text-brand-gold">Across Africa</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-black font-primary">Six months later...</h3>
              <div className="space-y-4">
                <p className="text-lg text-brand-black/80 font-secondary">
                  Idir no longer struggles in class. He records every lecture, asks questions to his AI study partner,
                  and finally <em>understands</em> instead of just memorizing.
                </p>
                <p className="text-lg text-brand-black/80 font-secondary">
                  His grades improved, but more importantly, his confidence soared. He's not just a better student—he's
                  a more curious, engaged learner.
                </p>
                <p className="text-lg text-brand-gold font-secondary font-medium">
                  This is the transformation we're building for every student, everywhere.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-brand-gold/20 to-brand-silver/20 rounded-2xl flex items-center justify-center border border-brand-silver/30">
                <div className="text-center space-y-4">
                  <Heart className="w-16 h-16 text-brand-gold mx-auto" />
                  <p className="text-brand-black/60 font-secondary">[Idir's Success Story Video]</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-brand-black font-primary">From Morocco to Madagascar</h3>
            <p className="text-xl text-brand-black/70 font-secondary leading-relaxed">
              Every student deserves to understand, not just memorize. We're not just building an app—we're building a
              movement toward
              <span className="text-brand-gold font-medium"> quality education for all</span>.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-brand-black/60">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>Supporting UN SDG 4</span>
              </div>
              <div className="w-1 h-1 bg-brand-silver rounded-full"></div>
              <span>Quality Education Across Africa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
