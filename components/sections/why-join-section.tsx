'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Users, Crown } from 'lucide-react';
import { FormspreeCtaForm } from '@/components/form-spree-cta-form'; // Adjust path as needed

export function WhyJoinSection() {
  const t = useTranslations('WhyJoin');
  const whyJoinFormClass = 'flex gap-3 max-w-md mx-auto';
  const whyJoinInputClass =
    'flex-1 border-brand-silver focus:border-brand-gold';
  const whyJoinButtonClass =
    'bg-brand-gold hover:bg-brand-gold/90 text-white px-6';

  const whyJoinSuccessContainerClass =
    'p-4 bg-brand-gold/20 border border-brand-gold/30 rounded-lg max-w-md mx-auto';
  const whyJoinSuccessTextClass = 'text-brand-gold font-medium';

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-brand-gold text-brand-gold bg-brand-gold/10 mb-6"
            >
              <Star className="w-4 h-4 me-2" />
              {t('badge')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-black font-primary mb-6">
              {t('title')}
            </h2>
            <p className="text-xl text-brand-black/70 font-secondary">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Card 1: Benefits */}
            <Card className="border-brand-gold/30 bg-brand-gold/5">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Crown className="w-6 h-6 text-brand-gold" />
                    <h3 className="text-xl font-semibold text-brand-black font-primary">
                      {t('benefits.title')}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-brand-gold" />
                      <span className="text-brand-black/80 font-secondary">
                        {t('benefits.items.firstAccess')}
                      </span>
                    </li>
                    {/* ... other benefit items ... */}
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-brand-gold" />
                      <span className="text-brand-black/80 font-secondary">
                        {t('benefits.items.discount')}
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-brand-gold" />
                      <span className="text-brand-black/80 font-secondary">
                        {t('benefits.items.premiumFeatures')}
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-brand-gold" />
                      <span className="text-brand-black/80 font-secondary">
                        {t('benefits.items.feedback')}
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-brand-gold" />
                      <span className="text-brand-black/80 font-secondary">
                        {t('benefits.items.betaTesting')}
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Card 2: Community Stats */}
            <Card className="border-brand-silver/30">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-brand-gold" />
                    <h3 className="text-xl font-semibold text-brand-black font-primary">
                      {t('community.title')}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {/* ... community stats items ... */}
                    <div className="flex items-center justify-between p-3 bg-brand-light rounded-lg">
                      <span className="text-brand-black/80 font-secondary">
                        {t('community.stats.studentsWaiting')}
                      </span>
                      <Badge
                        variant="secondary"
                        className="bg-brand-gold text-white"
                      >
                        1,247
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-brand-light rounded-lg">
                      <span className="text-brand-black/80 font-secondary">
                        {t('community.stats.countriesRepresented')}
                      </span>
                      <Badge
                        variant="secondary"
                        className="bg-brand-gold text-white"
                      >
                        23
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-brand-light rounded-lg">
                      <span className="text-brand-black/80 font-secondary">
                        {t('community.stats.spotsRemaining')}
                      </span>
                      <Badge
                        variant="secondary"
                        className="bg-brand-gold text-white"
                      >
                        753
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Card with Form */}
          <Card className="border-brand-gold/30 bg-gradient-to-r from-brand-gold/10 to-brand-gold/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-brand-black font-primary mb-4">
                {t('cta.title')}
              </h3>
              <p className="text-brand-black/70 font-secondary mb-6">
                {t('cta.subtitle')}
              </p>

              <FormspreeCtaForm
                emailPlaceholder={t('cta.emailPlaceholder')}
                ctaButtonText={t('cta.button')}
                successMessageText={t('cta.successMessage')}
                className={whyJoinFormClass}
                inputCustomClass={whyJoinInputClass}
                buttonCustomClass={whyJoinButtonClass}
                successMessageContainerClass={whyJoinSuccessContainerClass}
                successMessageTextClass={whyJoinSuccessTextClass}
              />

              <p className="text-sm text-brand-black/50 mt-4">
                {t('cta.disclaimer')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
