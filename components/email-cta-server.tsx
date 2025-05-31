"use client"
import { useActionState } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { submitEmailToFormspree } from "@/app/actions/email-signup"

interface EmailCtaServerProps {
  translationKey?: string
  placeholder?: string
  buttonText?: string
  successMessage?: string
  className?: string
  inputClassName?: string
  buttonClassName?: string
  variant?: "default" | "hero" | "inline"
  showArrow?: boolean
}

export function EmailCtaServer({
  translationKey = "Hero",
  placeholder,
  buttonText,
  successMessage,
  className,
  inputClassName,
  buttonClassName,
  variant = "default",
  showArrow = true,
}: EmailCtaServerProps) {
  const t = useTranslations("Header")
  const [state, formAction, isPending] = useActionState(submitEmailToFormspree, null)

  // Get translated text with fallbacks
  const emailPlaceholder = placeholder || t(`${translationKey}.emailPlaceholder`)
  const ctaButtonText = buttonText || t(`${translationKey}.ctaButton`) || t("Navigation.joinWaitlist")
  const successText = successMessage || t(`${translationKey}.successMessage`)

  if (state?.success) {
    return (
      <div
        className={cn(
          "p-4 rounded-lg",
          variant === "hero" && "bg-brand-gold/20 border border-brand-gold/30",
          variant === "default" && "bg-brand-gold/20 border border-brand-gold/30",
          variant === "inline" && "bg-brand-gold/10 border border-brand-gold/20",
          className,
        )}
      >
        <p
          className={cn(
            "font-medium text-center",
            variant === "hero" && "text-brand-gold",
            variant === "default" && "text-brand-gold",
            variant === "inline" && "text-brand-gold",
          )}
        >
          ✓ {state.message || successText}
        </p>
      </div>
    )
  }

  return (
    <div>
      <form
        action={formAction}
        className={cn(
          "flex gap-3",
          variant === "inline" && "max-w-md",
          variant === "hero" && "max-w-md",
          variant === "default" && "max-w-md mx-auto",
          className,
        )}
      >
        <div className="flex-1">
          <Input
            type="email"
            name="email"
            placeholder={emailPlaceholder}
            className={cn(
              "border-brand-silver focus:border-brand-gold",
              variant === "hero" &&
                "border-brand-light-text/30 bg-white/10 text-white placeholder:text-brand-light-text/60 focus:border-brand-gold",
              inputClassName,
            )}
            required
          />
        </div>
        <Button
          type="submit"
          disabled={isPending}
          className={cn(
            "bg-brand-gold hover:bg-brand-gold/90 text-white px-6",
            variant === "hero" && "bg-brand-gold hover:bg-brand-gold/90 text-white",
            buttonClassName,
          )}
        >
          {isPending ? "..." : ctaButtonText}
          {showArrow && !isPending && <ArrowRight className="w-4 h-4 ms-2" />}
        </Button>
      </form>

      {state?.error && <p className="text-red-500 text-sm mt-2 text-center">{state.error}</p>}
    </div>
  )
}
