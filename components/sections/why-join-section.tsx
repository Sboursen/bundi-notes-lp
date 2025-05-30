"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Users, Crown } from "lucide-react"

export function WhyJoinSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-[#F39C12] text-[#F39C12] bg-[#F39C12]/10 mb-6">
              <Star className="w-4 h-4 mr-2" />
              Exclusive Early Access
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#131313] font-['Montserrat'] mb-6">
              Why Join the Waitlist?
            </h2>
            <p className="text-xl text-[#131313]/70 font-['Lato']">
              Be part of the education revolution and get exclusive benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-[#F39C12]/30 bg-[#F39C12]/5">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Crown className="w-6 h-6 text-[#F39C12]" />
                    <h3 className="text-xl font-semibold text-[#131313] font-['Montserrat']">Exclusive Benefits</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#F39C12]" />
                      <span className="text-[#131313]/80 font-['Lato']">First access when we launch</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#F39C12]" />
                      <span className="text-[#131313]/80 font-['Lato']">50% off your first year</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#F39C12]" />
                      <span className="text-[#131313]/80 font-['Lato']">Free premium features for early adopters</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#F39C12]" />
                      <span className="text-[#131313]/80 font-['Lato']">Help shape the product with feedback</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#F39C12]" />
                      <span className="text-[#131313]/80 font-['Lato']">Beta testing opportunities</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#BDC3C7]/30">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-[#F39C12]" />
                    <h3 className="text-xl font-semibold text-[#131313] font-['Montserrat']">Join the Community</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-[#F8F9FA] rounded-lg">
                      <span className="text-[#131313]/80 font-['Lato']">Students waiting</span>
                      <Badge variant="secondary" className="bg-[#F39C12] text-white">
                        1,247
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#F8F9FA] rounded-lg">
                      <span className="text-[#131313]/80 font-['Lato']">Countries represented</span>
                      <Badge variant="secondary" className="bg-[#F39C12] text-white">
                        23
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#F8F9FA] rounded-lg">
                      <span className="text-[#131313]/80 font-['Lato']">Spots remaining</span>
                      <Badge variant="secondary" className="bg-[#F39C12] text-white">
                        753
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-[#F39C12]/30 bg-gradient-to-r from-[#F39C12]/10 to-[#F39C12]/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-[#131313] font-['Montserrat'] mb-4">
                Ready to Transform Your Learning?
              </h3>
              <p className="text-[#131313]/70 font-['Lato'] mb-6">
                Join 1,247 students from 23 countries who are waiting for the future of education
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 border-[#BDC3C7] focus:border-[#F39C12]"
                    required
                  />
                  <Button type="submit" className="bg-[#F39C12] hover:bg-[#F39C12]/90 text-white px-6">
                    Secure Your Spot
                  </Button>
                </form>
              ) : (
                <div className="p-4 bg-[#F39C12]/20 border border-[#F39C12]/30 rounded-lg max-w-md mx-auto">
                  <p className="text-[#F39C12] font-medium">🎉 You're in! Welcome to the future of learning.</p>
                </div>
              )}

              <p className="text-sm text-[#131313]/50 mt-4">
                No spam, unsubscribe anytime. Only 753 spots left for early access.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
