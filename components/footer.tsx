import { Heart, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-brand-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-black rounded-full flex items-center justify-center border border-brand-light-text/20">
                  <span className="text-white font-bold">B</span>
                </div>
                <span className="text-xl font-bold font-primary">Bundi Notes</span>
              </div>
              <p className="text-brand-light-text/70 font-secondary">
                Transforming education through AI-powered learning companions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold font-primary">Mission</h3>
              <div className="flex items-center gap-2 text-brand-light-text/70">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-secondary">Supporting UN SDG 4: Quality Education</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold font-primary">Contact</h3>
              <p className="text-brand-light-text/70 font-secondary text-sm">Questions? We'd love to hear from you.</p>
            </div>
          </div>

          <div className="border-t border-brand-light-text/20 pt-8 text-center">
            <p className="text-brand-light-text/60 font-secondary text-sm flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-brand-gold" /> for students across Africa
            </p>
            <p className="text-brand-light-text/40 font-secondary text-xs mt-2">
              © 2024 Bundi Notes. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
