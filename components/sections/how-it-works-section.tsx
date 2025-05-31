"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, Brain, MessageSquare } from "lucide-react"

export function HowItWorksSection() {
  const t = useTranslations("HowItWorks")

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-black font-primary mb-6">{t("title")}</h2>
            <p className="text-xl text-brand-black/70 font-secondary">{t("subtitle")}</p>
          </div>

          <div className="space-y-8">
            <Card className="border-brand-silver/30 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 flex items-center">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                          <Mic className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-sm text-brand-gold font-medium">{t("steps.step1.label")}</span>
                          <h3 className="text-2xl font-bold text-brand-black font-primary">{t("steps.step1.title")}</h3>
                        </div>
                      </div>
                      <p className="text-brand-black/70 font-secondary text-lg">{t("steps.step1.description")}</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-brand-gold/10 to-brand-silver/10 p-8 flex items-center justify-center">
                    <div className="text-center text-brand-black/60">[Recording Interface Mockup]</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-silver/30 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-brand-gold/10 to-brand-silver/10 p-8 flex items-center justify-center md:order-1">
                    <div className="text-center text-brand-black/60">[AI Processing Animation]</div>
                  </div>
                  <div className="p-8 flex items-center md:order-2">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-sm text-brand-gold font-medium">{t("steps.step2.label")}</span>
                          <h3 className="text-2xl font-bold text-brand-black font-primary">{t("steps.step2.title")}</h3>
                        </div>
                      </div>
                      <p className="text-brand-black/70 font-secondary text-lg">{t("steps.step2.description")}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-silver/30 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 flex items-center">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                          <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-sm text-brand-gold font-medium">{t("steps.step3.label")}</span>
                          <h3 className="text-2xl font-bold text-brand-black font-primary">{t("steps.step3.title")}</h3>
                        </div>
                      </div>
                      <p className="text-brand-black/70 font-secondary text-lg">{t("steps.step3.description")}</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-brand-gold/10 to-brand-silver/10 p-8 flex items-center justify-center">
                    <div className="text-center text-brand-black/60">[Chat Interface Mockup]</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
