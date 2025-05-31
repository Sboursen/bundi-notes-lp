"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, BookOpen, Brain } from "lucide-react"

export function ProblemSection() {
  const t = useTranslations("Problem")

  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-black font-primary mb-6">{t("title")}</h2>
            <p className="text-xl text-brand-black/70 font-secondary leading-relaxed">{t("subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-brand-silver/30 hover:border-brand-gold/30 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-lg font-semibold text-brand-black font-primary mb-3">{t("cards.card1.title")}</h3>
                <p className="text-brand-black/70 font-secondary">{t("cards.card1.description")}</p>
              </CardContent>
            </Card>

            <Card className="border-brand-silver/30 hover:border-brand-gold/30 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-lg font-semibold text-brand-black font-primary mb-3">{t("cards.card2.title")}</h3>
                <p className="text-brand-black/70 font-secondary">{t("cards.card2.description")}</p>
              </CardContent>
            </Card>

            <Card className="border-brand-silver/30 hover:border-brand-gold/30 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-lg font-semibold text-brand-black font-primary mb-3">{t("cards.card3.title")}</h3>
                <p className="text-brand-black/70 font-secondary">{t("cards.card3.description")}</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-2xl text-brand-black font-primary font-medium">
              {t("conclusion.emphasis")} <span className="text-brand-gold">{t("conclusion.highlight")}</span>
            </p>
            <p className="text-lg text-brand-black/70 font-secondary mt-4">{t("conclusion.description")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
