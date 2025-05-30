import { Badge } from "@/components/ui/badge"
import { Sparkles, MessageCircle, Lightbulb, Brain } from "lucide-react"

export function SolutionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#131313] to-[#131313]/95 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="border-[#F39C12] text-[#F39C12] bg-[#F39C12]/10 mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            The Future of Learning
          </Badge>

          <h2 className="text-3xl lg:text-5xl font-bold font-['Montserrat'] mb-8">
            Imagine if you could have a <span className="text-[#F39C12]">conversation</span> with your lectures
          </h2>

          <p className="text-xl text-[#EAEAEA]/80 font-['Lato'] mb-12 leading-relaxed">
            We're building the AI study partner every student deserves. One that transforms passive note-taking into
            active, engaging learning.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F39C12] rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold font-['Montserrat'] mb-3">Never Miss Again</h3>
              <p className="text-[#EAEAEA]/70 font-['Lato']">
                Never miss important explanations again. Every word is captured and understood.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F39C12] rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold font-['Montserrat'] mb-3">Ask Anytime</h3>
              <p className="text-[#EAEAEA]/70 font-['Lato']">
                Ask your teacher's words any question, anytime. Get answers from the actual lecture content.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F39C12] rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold font-['Montserrat'] mb-3">Active Learning</h3>
              <p className="text-[#EAEAEA]/70 font-['Lato']">
                Transform passive note-taking into active learning that sticks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
