'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image'; // <-- Import next/image
import { Badge } from '@/components/ui/badge';
import { Globe, Target, Play } from 'lucide-react'; // <-- Import Play icon (Heart is no longer needed here for the placeholder)

export function VisionSection() {
  const t = useTranslations('Vision');

  // Placeholder for actual video play functionality for Idir's story
  const handlePlayStoryVideo = () => {
    // TODO: Implement video playback for Idir's story
    // (e.g., open a modal with an iframe or video element)
    console.log("Play Idir's story video action triggered");
    // Example: window.open('your-idir-story-video-url', '_blank');
  };

  return (
    <section id="vision" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-brand-gold text-brand-gold bg-brand-gold/10 mb-6"
            >
              <Globe className="w-4 h-4 mr-2" />
              {t('badge')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-black font-primary mb-6">
              {t.rich('title', {
                span: (chunks) => (
                  <span className="text-brand-gold">{chunks}</span>
                ),
              })}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-black font-primary">
                {t('story.heading')}
              </h3>
              <div className="space-y-4">
                <p className="text-lg text-brand-black/80 font-secondary">
                  {t('story.part1')}
                </p>
                <p className="text-lg text-brand-black/80 font-secondary">
                  {t('story.part2')}
                </p>
                <p className="text-lg text-brand-gold font-secondary font-medium">
                  {t('story.highlight')}
                </p>
              </div>
            </div>

            {/* START: Updated Idir's Story Video Player */}
            <div className="relative">
              <div className="group relative aspect-square rounded-2xl overflow-hidden border border-brand-silver/30 shadow-lg">
                {/* Background Image (First Frame) */}
                <Image
                  src="./idir.png"
                  alt={
                    t('story.videoAltText') ||
                    "Idir's success story video preview"
                  }
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay and Play Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-300 group-hover:bg-black/30">
                  <button
                    type="button"
                    onClick={handlePlayStoryVideo}
                    aria-label={
                      t('story.playVideoAriaLabel') ||
                      "Play Idir's success story video"
                    }
                    className="w-16 h-16 lg:w-20 lg:h-20 bg-brand-gold/80 hover:bg-brand-gold text-white rounded-full flex items-center justify-center transition-all duration-300 ease-in-out transform group-hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-light"
                  >
                    <Play
                      className="w-8 h-8 lg:w-10 lg:h-10" // Slightly smaller icon if desired
                      fill="currentColor"
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* END: Updated Idir's Story Video Player */}
          </div>

          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-brand-black font-primary">
              {t('global.heading')}
            </h3>
            <p className="text-xl text-brand-black/70 font-secondary leading-relaxed">
              {t.rich('global.description', {
                span: (chunks) => (
                  <span className="text-brand-gold font-medium">{chunks}</span>
                ),
              })}
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-brand-black/60">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>{t('global.badge1')}</span>
              </div>
              <div className="w-1 h-1 bg-brand-silver rounded-full"></div>
              <span>{t('global.badge2')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
