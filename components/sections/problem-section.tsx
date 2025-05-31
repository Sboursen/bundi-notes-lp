import { Card, CardContent } from "@/components/ui/card"
import { Clock, BookOpen, Brain } from "lucide-react"

export function ProblemSection() {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-black font-primary mb-6">
              Meet Idir, a 16-year-old student in Morocco
            </h2>
            <p className="text-xl text-brand-black/70 font-secondary leading-relaxed">
              Like millions of students worldwide, Idir faces an impossible choice every day in class...
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-brand-silver/30 hover:border-brand-gold/30 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-lg font-semibold text-brand-black font-primary mb-3">Listen or Write?</h3>
                <p className="text-brand-black/70 font-secondary">
                  Focus on the teacher and miss important details, or frantically scribble notes and lose the
                  explanation?
                </p>
              </CardContent>
            </Card>

            <Card className="border-brand-silver/30 hover:border-brand-gold/30 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-lg font-semibold text-brand-black font-primary mb-3">Silent Confusion</h3>
                <p className="text-brand-black/70 font-secondary">
                  Questions pile up but there's never enough time to ask. The lesson moves on, leaving gaps in
                  understanding.
                </p>
              </CardContent>
            </Card>

            <Card className="border-brand-silver/30 hover:border-brand-gold/30 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-lg font-semibold text-brand-black font-primary mb-3">Memorize, Don't Understand</h3>
                <p className="text-brand-black/70 font-secondary">
                  Study sessions become cramming sessions. Information goes in one ear and out the other.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-2xl text-brand-black font-primary font-medium">
              Sound familiar? <span className="text-brand-gold">You're not alone.</span>
            </p>
            <p className="text-lg text-brand-black/70 font-secondary mt-4">
              This is the daily reality for students everywhere, from Morocco to Malaysia, from high school to
              university.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
