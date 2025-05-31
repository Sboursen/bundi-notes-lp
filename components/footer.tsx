"use client"

import { useTranslations } from "next-intl"
import { Heart, Globe } from "lucide-react"

export function Footer() {
  const t = useTranslations("Footer")

  return (
    <footer className="bg-brand-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-black rounded-full flex items-center justify-center border border-brand-light-text/20">
                  <span className="text-white font-bold">B</span>
                </div>
                <span className="text-xl font-bold font-primary">Bundi Notes</span>
              </div>
              <p className="text-brand-light-text/70 font-secondary">{t("description")}</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold font-primary">{t("mission.title")}</h3>
              <div className="flex items-center gap-2 text-brand-light-text/70">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-secondary">{t("mission.text")}</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold font-primary">{t("contact.title")}</h3>
              <p className="text-brand-light-text/70 font-secondary text-sm">{t("contact.text")}</p>
            </div>
          </div>

          <div className="border-t border-brand-light-text/20 pt-8 text-center">
            <p className="text-brand-light-text/60 font-secondary text-sm flex items-center justify-center gap-2">
              {t("copyright.madeWith")} <Heart className="w-4 h-4 text-brand-gold" /> {t("copyright.forStudents")}
            </p>
            <p className="text-brand-light-text/40 font-secondary text-xs mt-2">{t("copyright.rights")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
