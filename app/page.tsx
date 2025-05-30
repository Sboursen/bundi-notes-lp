import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { SolutionSection } from "@/components/sections/solution-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { VisionSection } from "@/components/sections/vision-section"
import { FounderSection } from "@/components/sections/founder-section"
import { FinalCtaSection } from "@/components/sections/final-cta-section"
import { FaqSection } from "@/components/sections/faq-section"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <VisionSection />
        <FounderSection />
        <FinalCtaSection />
        <FaqSection />
        <Footer />
      </div>
    </main>
  )
}
