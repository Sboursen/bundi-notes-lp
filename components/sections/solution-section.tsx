"use client"

import { useTranslations } from "next-intl"
import { Badge } from "@/components/ui/badge"
import { Sparkles, MessageCircle, Lightbulb, Brain } from "lucide-react"

export function SolutionSection() {
  const t = useTranslations("Solution")

  return (
    <section className="py-20 bg-gradient-to-br from-brand-black to-brand-black/95 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="border-brand-gold text-brand-gold bg-brand-gold/10 mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            {t("badge")}
          </Badge>

          <h2 className="text-3xl lg:text-5xl font-bold font-primary mb-8">
            {t.rich("title", {
              span: (chunks) => <span className="text-brand-gold">{chunks}</span>,
            })}
          </h2>

          <p className="text-xl text-brand-light-text/80 font-secondary mb-12 leading-relaxed">{t("subtitle")}</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold font-primary mb-3">{t("features.feature1.title")}</h3>
              <p className="text-brand-light-text/70 font-secondary">{t("features.feature1.description")}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold font-primary mb-3">{t("features.feature2.title")}</h3>
              <p className="text-brand-light-text/70 font-secondary">{t("features.feature2.description")}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold font-primary mb-3">{t("features.feature3.title")}</h3>
              <p className="text-brand-light-text/70 font-secondary">{t("features.feature3.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
