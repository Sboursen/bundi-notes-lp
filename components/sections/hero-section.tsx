'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image'; // Import next/image
import { Badge } from '@/components/ui/badge';
import { Users, Calendar, Play } from 'lucide-react'; // Import Play icon
import { FormspreeCtaForm } from '@/components/form-spree-cta-form';

export function HeroSection() {
  const t = useTranslations('Header');

  // Placeholder for actual video play functionality
  const handlePlayVideo = () => {
    // TODO: Implement video playback (e.g., open a modal with an iframe or video element)
    console.log('Play video action triggered');
    // Example: window.open('your-video-url', '_blank');
  };

  return (
    <section
      id="hero-cta"
      className="relative overflow-hidden bg-brand-black text-white"
    >
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="border-brand-gold text-brand-gold bg-brand-gold/10"
              >
                <Calendar className="w-4 h-4 me-2" />
                {t('Hero.badge')}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white font-primary leading-tight">
                {t.rich('Hero.title', {
                  span: (chunks) => (
                    <span className="text-brand-gold">{chunks}</span>
                  ),
                })}
              </h1>
              <p className="text-xl text-brand-light-text/80 font-secondary leading-relaxed">
                {t('Hero.subtitle')}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-brand-light-text/60">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{t('Hero.stats.students')}</span>
                </div>
                <div className="w-1 h-1 bg-brand-silver rounded-full"></div>
                <span>{t('Hero.stats.countries')}</span>
              </div>

              <FormspreeCtaForm
                emailPlaceholder={t('Hero.emailPlaceholder')}
                ctaButtonText={t('Hero.ctaButton')}
                successMessageText={t('Hero.successMessage')}
                className="flex gap-3 max-w-md"
                inputCustomClass="flex-1 border-brand-light-text/30 bg-white/10 text-white placeholder:text-brand-light-text/60 focus:border-brand-gold"
                buttonCustomClass="bg-brand-gold hover:bg-brand-gold/90 text-white px-6"
                successMessageContainerClass="p-4 bg-brand-gold/20 border border-brand-gold/30 rounded-lg max-w-md"
                successMessageTextClass="text-brand-gold font-medium"
              />

              <p className="text-sm text-brand-light-text/50">
                {t('Hero.belowCta')}
              </p>
            </div>
          </div>

          {/* START: Updated Hero Visual (Video Player Design) */}
          <div className="relative">
            <div className="group relative aspect-square rounded-2xl overflow-hidden border border-brand-light-text/20 shadow-lg">
              {/* Background Image (First Frame) */}
              <Image
                // IMPORTANT: Replace with your actual image path/URL
                // e.g., /images/hero-video-preview.jpg (place in /public/images folder)
                // or a remote URL: https://example.com/your-image.jpg
                src="./hero.png"
                alt={t('Hero.videoAltText') || 'Video preview'}
                layout="fill"
                objectFit="cover"
                priority // Good for LCP if this is a key visual
                className="transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay and Play Button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors duration-300 group-hover:bg-black/40">
                <button
                  type="button"
                  onClick={handlePlayVideo}
                  aria-label={t('Hero.playVideoAriaLabel') || 'Play video'}
                  className="w-20 h-20 lg:w-24 lg:h-24 bg-brand-gold/80 hover:bg-brand-gold text-white rounded-full flex items-center justify-center transition-all duration-300 ease-in-out transform group-hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
                >
                  <Play
                    className="w-10 h-10 lg:w-12 lg:h-12"
                    fill="currentColor"
                  />
                </button>
              </div>
            </div>
          </div>
          {/* END: Updated Hero Visual (Video Player Design) */}
        </div>
      </div>
    </section>
  );
}
