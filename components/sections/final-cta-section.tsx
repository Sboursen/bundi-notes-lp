"use client"

import type React from "react"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Shield } from "lucide-react"

export function FinalCtaSection() {
  const t = useTranslations("FinalCTA")
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-brand-gold to-brand-gold/80 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="outline" className="border-white/30 text-white bg-white/10 mb-6">
            <Clock className="w-4 h-4 me-2" />
            {t("badge")}
          </Badge>

          <h2 className="text-3xl lg:text-5xl font-bold font-primary mb-6">{t("title")}</h2>

          <p className="text-xl text-white/90 font-secondary mb-8">{t("subtitle")}</p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold font-primary mb-2">{t("stats.spots")}</div>
                <div className="text-white/80 font-secondary">{t("stats.spotsLabel")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-primary mb-2">{t("stats.discount")}</div>
                <div className="text-white/80 font-secondary">{t("stats.discountLabel")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-primary mb-2">{t("stats.students")}</div>
                <div className="text-white/80 font-secondary">{t("stats.studentsLabel")}</div>
              </div>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white"
                  required
                />
                <Button type="submit" className="bg-white text-brand-gold hover:bg-white/90 px-6">
                  {t("ctaButton")}
                  <ArrowRight className="w-4 h-4 ms-2" />
                </Button>
              </form>
            ) : (
              <div className="p-4 bg-white/20 border border-white/30 rounded-lg max-w-md mx-auto">
                <p className="text-white font-medium">{t("successMessage")}</p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>{t("footer.noSpam")}</span>
            </div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <span>{t("footer.unsubscribe")}</span>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <span>{t("footer.launch")}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
