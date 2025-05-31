import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section id="faq" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-black font-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-brand-black/70 font-secondary">
              Everything you need to know about joining the waitlist
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-brand-silver/30 rounded-lg px-6">
              <AccordionTrigger className="text-left font-primary font-semibold text-brand-black hover:text-brand-gold">
                When will Bundi Notes be available?
              </AccordionTrigger>
              <AccordionContent className="text-brand-black/70 font-secondary">
                We're launching in Spring 2026. Waitlist members will get early access before the public launch, with
                beta testing opportunities starting in Fall 2025.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-brand-silver/30 rounded-lg px-6">
              <AccordionTrigger className="text-left font-primary font-semibold text-brand-black hover:text-brand-gold">
                Will it cost money?
              </AccordionTrigger>
              <AccordionContent className="text-brand-black/70 font-secondary">
                Bundi Notes will have both free and premium tiers. Waitlist members get 50% off their first year and
                access to premium features during the early access period.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-brand-silver/30 rounded-lg px-6">
              <AccordionTrigger className="text-left font-primary font-semibold text-brand-black hover:text-brand-gold">
                What devices will it work on?
              </AccordionTrigger>
              <AccordionContent className="text-brand-black/70 font-secondary">
                Bundi Notes will be available on web, iOS, and Android. We're designing it to work seamlessly across all
                your devices, so you can record on your phone and study on your laptop.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-brand-silver/30 rounded-lg px-6">
              <AccordionTrigger className="text-left font-primary font-semibold text-brand-black hover:text-brand-gold">
                How do I know this is real?
              </AccordionTrigger>
              <AccordionContent className="text-brand-black/70 font-secondary">
                We're committed to transparency. Waitlist members receive regular development updates, behind-the-scenes
                content, and early previews of the product as we build it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-brand-silver/30 rounded-lg px-6">
              <AccordionTrigger className="text-left font-primary font-semibold text-brand-black hover:text-brand-gold">
                What if I change my mind?
              </AccordionTrigger>
              <AccordionContent className="text-brand-black/70 font-secondary">
                No problem at all! You can unsubscribe from the waitlist at any time. We respect your inbox and will
                never spam you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-brand-silver/30 rounded-lg px-6">
              <AccordionTrigger className="text-left font-primary font-semibold text-brand-black hover:text-brand-gold">
                Will it work in my language?
              </AccordionTrigger>
              <AccordionContent className="text-brand-black/70 font-secondary">
                We're starting with Arabic, English, and French, with plans to add more African languages based on
                community demand. Let us know what language you need!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
