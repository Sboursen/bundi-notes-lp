"use client"

import { useTranslations } from "next-intl"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const t = useTranslations("FAQ")

  return (
    <section id="faq" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-black font-primary mb-6">{t("title")}</h2>
            <p className="text-xl text-brand-black/70 font-secondary">{t("subtitle")}</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-brand-silver/30 rounded-lg px-6">
              <AccordionTrigger className="text-start font-primary font-semibold text-brand-black hover:text-brand-gold">
                {t("questions.q1.question")}
              </AccordionTrigger>
              <AccordionContent className="text-brand-black/70 font-secondary">
                {t("questions.q1.answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-brand-silver/30 rounded-lg px-6">
              <AccordionTrigger className="text-start font-primary font-semibold text-brand-black hover:text-brand-gold">
                {t("questions.q2.question")}
              </AccordionTrigger>
              <AccordionContent className="text-brand-black/70 font-secondary">
                {t("questions.q2.answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-brand-silver/30 rounded-lg px-6">
              <AccordionTrigger className="text-start font-primary font-semibold text-brand-black hover:text-brand-gold">
                {t("questions.q3.question")}
              </AccordionTrigger>
              <AccordionContent className="text-brand-black/70 font-secondary">
                {t("questions.q3.answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-brand-silver/30 rounded-lg px-6">
              <AccordionTrigger className="text-start font-primary font-semibold text-brand-black hover:text-brand-gold">
                {t("questions.q4.question")}
              </AccordionTrigger>
              <AccordionContent className="text-brand-black/70 font-secondary">
                {t("questions.q4.answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-brand-silver/30 rounded-lg px-6">
              <AccordionTrigger className="text-start font-primary font-semibold text-brand-black hover:text-brand-gold">
                {t("questions.q5.question")}
              </AccordionTrigger>
              <AccordionContent className="text-brand-black/70 font-secondary">
                {t("questions.q5.answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-brand-silver/30 rounded-lg px-6">
              <AccordionTrigger className="text-start font-primary font-semibold text-brand-black hover:text-brand-gold">
                {t("questions.q6.question")}
              </AccordionTrigger>
              <AccordionContent className="text-brand-black/70 font-secondary">
                {t("questions.q6.answer")}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
