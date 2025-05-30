"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Menu, X } from "lucide-react"

export function Header() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#BDC3C7]/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#131313] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg font-montserrat">B</span>
            </div>
            <span className="text-xl font-bold text-[#131313] font-montserrat">Bundi Notes</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-[#131313]/70 hover:text-[#F39C12] font-lato font-medium transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("vision")}
              className="text-[#131313]/70 hover:text-[#F39C12] font-lato font-medium transition-colors"
            >
              Our Mission
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-[#131313]/70 hover:text-[#F39C12] font-lato font-medium transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-48 border-[#BDC3C7] focus:border-[#F39C12] text-sm"
                  required
                />
                <Button type="submit" className="bg-[#F39C12] hover:bg-[#F39C12]/90 text-white px-4">
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-[#F39C12] font-medium text-sm">
                <span>✓</span>
                <span>You're on the list!</span>
              </div>
            )}
          </div>

          {/* Mobile CTA Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <Button
              onClick={() => scrollToSection("hero-cta")}
              className="bg-[#F39C12] hover:bg-[#F39C12]/90 text-white px-4 py-2 text-sm"
            >
              Join Waitlist
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#131313] hover:text-[#F39C12] transition-colors md:hidden"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#BDC3C7]/20 py-4 bg-white">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-left text-[#131313]/70 hover:text-[#F39C12] font-lato font-medium transition-colors py-2"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("vision")}
                className="text-left text-[#131313]/70 hover:text-[#F39C12] font-lato font-medium transition-colors py-2"
              >
                Our Mission
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left text-[#131313]/70 hover:text-[#F39C12] font-lato font-medium transition-colors py-2"
              >
                FAQ
              </button>

              {/* Mobile Email Form */}
              <div className="pt-4 border-t border-[#BDC3C7]/20">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border-[#BDC3C7] focus:border-[#F39C12]"
                      required
                    />
                    <Button type="submit" className="w-full bg-[#F39C12] hover:bg-[#F39C12]/90 text-white">
                      Join Waitlist
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                ) : (
                  <div className="p-3 bg-[#F39C12]/10 border border-[#F39C12]/20 rounded-lg">
                    <p className="text-[#F39C12] font-medium text-center">
                      ✓ You're on the list! Welcome to the revolution.
                    </p>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
