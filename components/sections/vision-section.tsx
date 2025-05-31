"use client"

import { useTranslations } from "next-intl"
import { Badge } from "@/components/ui/badge"
import { Globe, Target, Heart } from "lucide-react"

export function VisionSection() {
  const t = useTranslations("Vision")

  return (
    <section id="vision" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-brand-gold text-brand-gold bg-brand-gold/10 mb-6">
              <Globe className="w-4 h-4 me-2" />
              {t("badge")}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-black font-primary mb-6">
              {t.rich("title", {
                span: (chunks) => <span className="text-brand-gold">{chunks}</span>,
              })}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-black font-primary">{t("story.heading")}</h3>
              <div className="space-y-4">
                <p className="text-lg text-brand-black/80 font-secondary">{t("story.part1")}</p>
                <p className="text-lg text-brand-black/80 font-secondary">{t("story.part2")}</p>
                <p className="text-lg text-brand-gold font-secondary font-medium">{t("story.highlight")}</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-brand-gold/20 to-brand-silver/20 rounded-2xl flex items-center justify-center border border-brand-silver/30">
                <div className="text-center space-y-4">
                  <Heart className="w-16 h-16 text-brand-gold mx-auto" />
                  <p className="text-brand-black/60 font-secondary">[Idir's Success Story Video]</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-brand-black font-primary">{t("global.heading")}</h3>
            <p className="text-xl text-brand-black/70 font-secondary leading-relaxed">
              {t.rich("global.description", {
                span: (chunks) => <span className="text-brand-gold font-medium">{chunks}</span>,
              })}
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-brand-black/60">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>{t("global.badge1")}</span>
              </div>
              <div className="w-1 h-1 bg-brand-silver rounded-full"></div>
              <span>{t("global.badge2")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
