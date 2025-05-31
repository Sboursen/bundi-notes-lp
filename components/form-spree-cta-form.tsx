'use client';

import type React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';

const DEFAULT_FORMSPREE_ID = 'f/xrbkzkpr'; // Your default Formspree ID

interface FormspreeCtaFormProps {
  formId?: string; // Now optional, will use default if not provided
  emailPlaceholder: string;
  ctaButtonText: string;
  successMessageText: string;
  className?: string;
  inputCustomClass?: string;
  buttonCustomClass?: string;
  successMessageContainerClass?: string;
  successMessageTextClass?: string;
}

export function FormspreeCtaForm({
  formId = DEFAULT_FORMSPREE_ID, // Use default if formId is not passed
  emailPlaceholder,
  ctaButtonText,
  successMessageText,
  className = 'flex gap-3 max-w-md mx-auto',
  inputCustomClass = 'flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white',
  buttonCustomClass = 'bg-white text-brand-gold hover:bg-white/90 px-6',
  successMessageContainerClass = 'p-4 bg-white/20 border border-white/30 rounded-lg max-w-md mx-auto',
  successMessageTextClass = 'text-white font-medium',
}: FormspreeCtaFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData();
    formData.append('email', email);
    // formData.append("_formName", formId); // You can use this for debugging or routing in Formspree

    try {
      const response = await fetch(`https://formspree.io/${formId}`, {
        // formId will be the prop or the default
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
      } else {
        const data = await response.json();
        if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
          setError(
            data['errors']
              .map((err: { message: string }) => err.message)
              .join(', '),
          );
        } else {
          setError('Oops! There was a problem submitting your form.');
        }
        setIsSubmitted(false);
      }
    } catch {
      setError('An unexpected error occurred. Please try again.');
      setIsSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={successMessageContainerClass}>
        <p className={successMessageTextClass}>{successMessageText}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      action={`https://formspree.io/${formId}`} // formId will be the prop or the default
      method="POST"
      className={className}
    >
      <Input
        type="email"
        name="email"
        placeholder={emailPlaceholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputCustomClass}
        required
        disabled={isSubmitting}
      />
      <Button
        type="submit"
        className={buttonCustomClass}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : ctaButtonText}
        {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
      </Button>
      {error && (
        <p className="text-red-400 text-sm mt-2 w-full text-center">{error}</p>
      )}
    </form>
  );
}
