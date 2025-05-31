'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './language-switcher';
import { FormspreeCtaForm } from '@/components/form-spree-cta-form';

export function Header() {
  const t = useTranslations('Header');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const headerInputClass =
    'border-brand-silver focus:border-brand-gold text-sm';
  const headerButtonClass =
    'bg-brand-gold hover:bg-brand-gold/90 text-white px-4';
  const headerSuccessContainerClassDesktop =
    'flex items-center gap-2 text-brand-gold font-medium text-sm';
  const headerSuccessTextClassDesktop = '';
  const headerSuccessContainerClassMobile =
    'p-3 bg-brand-gold/10 border border-brand-gold/20 rounded-lg';
  const headerSuccessTextClassMobile =
    'text-brand-gold font-medium text-center';

  return (
    <header className="fixed top-0 start-0 end-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-silver/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            {' '}
            <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
              {' '}
              {!logoError ? (
                <Image
                  src="./icon.png"
                  alt="Bundi Notes Logo"
                  width={40}
                  height={40}
                  onError={() => {
                    console.warn(
                      'Logo image failed to load, showing fallback.',
                    );
                    setLogoError(true);
                  }}
                />
              ) : (
                // Fallback: Styled "B"
                <div className="w-full h-full bg-brand-black flex items-center justify-center">
                  <span className="text-white font-bold text-lg font-primary">
                    B
                  </span>
                </div>
              )}
            </div>
            <span className="text-xl font-bold text-brand-black font-primary">
              Bundi Notes
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-brand-black/70 hover:text-brand-gold font-secondary font-medium transition-colors"
            >
              {t('Navigation.howItWorks')}
            </button>
            <button
              onClick={() => scrollToSection('vision')}
              className="text-brand-black/70 hover:text-brand-gold font-secondary font-medium transition-colors"
            >
              {t('Navigation.ourMission')}
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-brand-black/70 hover:text-brand-gold font-secondary font-medium transition-colors"
            >
              {t('Navigation.faq')}
            </button>
            <LanguageSwitcher />
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <FormspreeCtaForm
              emailPlaceholder={t('Hero.emailPlaceholder')}
              ctaButtonText={t('Navigation.joinWaitlist')}
              successMessageText={`✓ ${t('Hero.successMessage')}`}
              className="flex gap-2"
              inputCustomClass={`w-48 ${headerInputClass}`}
              buttonCustomClass={headerButtonClass}
              successMessageContainerClass={headerSuccessContainerClassDesktop}
              successMessageTextClass={headerSuccessTextClassDesktop}
            />
          </div>

          {/* Mobile CTA Button & Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <Button
              onClick={() => scrollToSection('hero-cta')}
              className="bg-brand-gold hover:bg-brand-gold/90 text-white px-4 py-2 text-sm"
            >
              {t('Navigation.joinWaitlist')}
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-brand-black hover:text-brand-gold transition-colors lg:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-brand-silver/20 py-6 px-4 bg-white">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-start text-brand-black/70 hover:text-brand-gold font-secondary font-medium transition-colors py-3"
              >
                {t('Navigation.howItWorks')}
              </button>
              <button
                onClick={() => scrollToSection('vision')}
                className="text-start text-brand-black/70 hover:text-brand-gold font-secondary font-medium transition-colors py-3"
              >
                {t('Navigation.ourMission')}
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-start text-brand-black/70 hover:text-brand-gold font-secondary font-medium transition-colors py-3"
              >
                {t('Navigation.faq')}
              </button>
              <div className="py-3">
                <LanguageSwitcher />
              </div>
              <div className="pt-6 border-t border-brand-silver/20">
                <FormspreeCtaForm
                  emailPlaceholder={t('Hero.emailPlaceholder')}
                  ctaButtonText={t('Navigation.joinWaitlist')}
                  successMessageText={`✓ ${t('Hero.successMessage')}`}
                  className="space-y-3"
                  inputCustomClass={`w-full ${headerInputClass}`}
                  buttonCustomClass={`w-full ${headerButtonClass}`}
                  successMessageContainerClass={
                    headerSuccessContainerClassMobile
                  }
                  successMessageTextClass={headerSuccessTextClassMobile}
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
