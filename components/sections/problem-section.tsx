import { Card, CardContent } from "@/components/ui/card"
import { Clock, BookOpen, Brain } from "lucide-react"

export function ProblemSection() {
  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#131313] font-['Montserrat'] mb-6">
              Meet Idir, a 16-year-old student in Morocco
            </h2>
            <p className="text-xl text-[#131313]/70 font-['Lato'] leading-relaxed">
              Like millions of students worldwide, Idir faces an impossible choice every day in class...
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-[#BDC3C7]/30 hover:border-[#F39C12]/30 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#F39C12]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-[#F39C12]" />
                </div>
                <h3 className="text-lg font-semibold text-[#131313] font-['Montserrat'] mb-3">Listen or Write?</h3>
                <p className="text-[#131313]/70 font-['Lato']">
                  Focus on the teacher and miss important details, or frantically scribble notes and lose the
                  explanation?
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#BDC3C7]/30 hover:border-[#F39C12]/30 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#F39C12]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-[#F39C12]" />
                </div>
                <h3 className="text-lg font-semibold text-[#131313] font-['Montserrat'] mb-3">Silent Confusion</h3>
                <p className="text-[#131313]/70 font-['Lato']">
                  Questions pile up but there's never enough time to ask. The lesson moves on, leaving gaps in
                  understanding.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#BDC3C7]/30 hover:border-[#F39C12]/30 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#F39C12]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-[#F39C12]" />
                </div>
                <h3 className="text-lg font-semibold text-[#131313] font-['Montserrat'] mb-3">
                  Memorize, Don't Understand
                </h3>
                <p className="text-[#131313]/70 font-['Lato']">
                  Study sessions become cramming sessions. Information goes in one ear and out the other.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-2xl text-[#131313] font-['Montserrat'] font-medium">
              Sound familiar? <span className="text-[#F39C12]">You're not alone.</span>
            </p>
            <p className="text-lg text-[#131313]/70 font-['Lato'] mt-4">
              This is the daily reality for students everywhere, from Morocco to Malaysia, from high school to
              university.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
