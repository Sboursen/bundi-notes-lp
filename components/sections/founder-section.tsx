"use client"

import Image from 'next/image';
import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function FounderSection() {
  const t = useTranslations("Founder")

  return (
    <section className="py-20 bg-brand-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold font-primary">{t("title")}</h2>
              <div className="space-y-4">
                <p className="text-lg text-brand-light-text/80 font-secondary">{t("story.part1")}</p>
                <p className="text-lg text-brand-light-text/80 font-secondary">{t("story.part2")}</p>
                <p className="text-lg text-brand-gold font-secondary font-medium">{t("story.highlight")}</p>
              </div>
            </div>

            <Card className="bg-brand-light-text/10 border-brand-light-text/20">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-brand-gold mb-4" />
                <blockquote className="text-lg text-brand-light-text/90 font-secondary italic mb-4">
                  {t("quote")}
                </blockquote>
                <div className="flex items-center gap-4">
                  <Image
                    className='rounded-full'
                    src="./founder.jpeg"
                    alt="Founder avatar"
                    width={40}
                    height={40}></Image>
                  <div>
                    <p className="font-medium text-brand-light-text">{t("role.title")}</p>
                    <p className="text-sm text-brand-light-text/70">{t("role.company")}</p>
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
