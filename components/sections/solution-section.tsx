import { Badge } from "@/components/ui/badge"
import { Sparkles, MessageCircle, Lightbulb, Brain } from "lucide-react"

export function SolutionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-black to-brand-black/95 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="border-brand-gold text-brand-gold bg-brand-gold/10 mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            The Future of Learning
          </Badge>

          <h2 className="text-3xl lg:text-5xl font-bold font-primary mb-8">
            Imagine if you could have a <span className="text-brand-gold">conversation</span> with your lectures
          </h2>

          <p className="text-xl text-brand-light-text/80 font-secondary mb-12 leading-relaxed">
            We're building the AI study partner every student deserves. One that transforms passive note-taking into
            active, engaging learning.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold font-primary mb-3">Never Miss Again</h3>
              <p className="text-brand-light-text/70 font-secondary">
                Never miss important explanations again. Every word is captured and understood.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold font-primary mb-3">Ask Anytime</h3>
              <p className="text-brand-light-text/70 font-secondary">
                Ask your teacher's words any question, anytime. Get answers from the actual lecture content.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold font-primary mb-3">Active Learning</h3>
              <p className="text-brand-light-text/70 font-secondary">
                Transform passive note-taking into active learning that sticks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
