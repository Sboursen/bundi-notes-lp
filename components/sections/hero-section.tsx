"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Calendar } from "lucide-react"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    setIsSubmitted(true)
  }

  return (
    <section id="hero-cta" className="relative overflow-hidden bg-[#131313] text-white">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="border-[#F39C12] text-[#F39C12] bg-[#F39C12]/10">
                <Calendar className="w-4 h-4 mr-2" />
                Launching Fall 2025
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white font-['Montserrat'] leading-tight">
                The AI Study Partner That <span className="text-[#F39C12]">Transforms</span> How You Learn
              </h1>
              <p className="text-xl text-[#EAEAEA]/80 font-['Lato'] leading-relaxed">
                Record lectures, ask questions to your own notes, and finally understand—not just memorize. Join the
                revolution in education.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-[#EAEAEA]/60">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>1,247 students waiting</span>
                </div>
                <div className="w-1 h-1 bg-[#BDC3C7] rounded-full"></div>
                <span>23 countries</span>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex gap-3 max-w-md">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 border-[#EAEAEA]/30 bg-white/10 text-white placeholder:text-[#EAEAEA]/60 focus:border-[#F39C12]"
                    required
                  />
                  <Button type="submit" className="bg-[#F39C12] hover:bg-[#F39C12]/90 text-white px-6">
                    Join Waitlist
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              ) : (
                <div className="p-4 bg-[#F39C12]/20 border border-[#F39C12]/30 rounded-lg">
                  <p className="text-[#F39C12] font-medium">
                    🎉 Welcome to the revolution! Check your email for confirmation.
                  </p>
                </div>
              )}

              <p className="text-sm text-[#EAEAEA]/50">
                Be among the first 1,000 students to experience the future of learning
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Placeholder for hero visual */}
            <div className="aspect-square bg-gradient-to-br from-[#F39C12]/30 to-[#EAEAEA]/20 rounded-2xl flex items-center justify-center border border-[#EAEAEA]/20">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-[#131313] rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">B</span>
                </div>
                <p className="text-[#EAEAEA]/60 font-['Lato']">Product mockup coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
