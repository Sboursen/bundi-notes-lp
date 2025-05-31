"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import LanguageSwitcher from "./language-switcher"
import { EmailCta } from "./email-cta"

export function Header() {
  const t = useTranslations("Header")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 start-0 end-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-silver/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg font-primary">B</span>
            </div>
            <span className="text-xl font-bold text-brand-black font-primary">Bundi Notes</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-brand-black/70 hover:text-brand-gold font-secondary font-medium transition-colors"
            >
              {t("Navigation.howItWorks")}
            </button>
            <button
              onClick={() => scrollToSection("vision")}
              className="text-brand-black/70 hover:text-brand-gold font-secondary font-medium transition-colors"
            >
              {t("Navigation.ourMission")}
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-brand-black/70 hover:text-brand-gold font-secondary font-medium transition-colors"
            >
              {t("Navigation.faq")}
            </button>
            <LanguageSwitcher />
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <EmailCta variant="inline" className="flex gap-2" inputClassName="w-48 text-sm" buttonClassName="px-4" />
          </div>

          {/* Mobile CTA Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <Button
              onClick={() => scrollToSection("hero-cta")}
              className="bg-brand-gold hover:bg-brand-gold/90 text-white px-4 py-2 text-sm"
            >
              {t("Navigation.joinWaitlist")}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-brand-black hover:text-brand-gold transition-colors md:hidden"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-brand-silver/20 py-6 px-4 bg-white">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-start text-brand-black/70 hover:text-brand-gold font-secondary font-medium transition-colors py-3"
              >
                {t("Navigation.howItWorks")}
              </button>
              <button
                onClick={() => scrollToSection("vision")}
                className="text-start text-brand-black/70 hover:text-brand-gold font-secondary font-medium transition-colors py-3"
              >
                {t("Navigation.ourMission")}
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-start text-brand-black/70 hover:text-brand-gold font-secondary font-medium transition-colors py-3"
              >
                {t("Navigation.faq")}
              </button>

              <div className="py-3">
                <LanguageSwitcher />
              </div>

              {/* Mobile Email Form */}
              <div className="pt-6 border-t border-brand-silver/20">
                <EmailCta
                  variant="inline"
                  className="space-y-3 flex-col"
                  inputClassName="w-full"
                  buttonClassName="w-full"
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
