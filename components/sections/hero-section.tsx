"use client"

import type React from "react"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Calendar } from "lucide-react"

export function HeroSection() {
  const t = useTranslations("Header")
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    setIsSubmitted(true)
  }

  return (
    <section id="hero-cta" className="relative overflow-hidden bg-brand-black text-white">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="border-brand-gold text-brand-gold bg-brand-gold/10">
                <Calendar className="w-4 h-4 me-2" />
                {t("Hero.badge")}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white font-primary leading-tight">
                {t.rich("Hero.title", {
                  span: (chunks) => <span className="text-brand-gold">{chunks}</span>,
                })}
              </h1>
              <p className="text-xl text-brand-light-text/80 font-secondary leading-relaxed">{t("Hero.subtitle")}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-brand-light-text/60">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{t("Hero.stats.students")}</span>
                </div>
                <div className="w-1 h-1 bg-brand-silver rounded-full"></div>
                <span>{t("Hero.stats.countries")}</span>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex gap-3 max-w-md">
                  <Input
                    type="email"
                    placeholder={t("Hero.emailPlaceholder")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 border-brand-light-text/30 bg-white/10 text-white placeholder:text-brand-light-text/60 focus:border-brand-gold"
                    required
                  />
                  <Button type="submit" className="bg-brand-gold hover:bg-brand-gold/90 text-white px-6">
                    {t("Hero.ctaButton")}
                    <ArrowRight className="w-4 h-4 ms-2" />
                  </Button>
                </form>
              ) : (
                <div className="p-4 bg-brand-gold/20 border border-brand-gold/30 rounded-lg">
                  <p className="text-brand-gold font-medium">{t("Hero.successMessage")}</p>
                </div>
              )}

              <p className="text-sm text-brand-light-text/50">{t("Hero.belowCta")}</p>
            </div>
          </div>

          <div className="relative">
            {/* Placeholder for hero visual */}
            <div className="aspect-square bg-gradient-to-br from-brand-gold/30 to-brand-light-text/20 rounded-2xl flex items-center justify-center border border-brand-light-text/20">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-brand-black rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">B</span>
                </div>
                <p className="text-brand-light-text/60 font-secondary">Product mockup coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
