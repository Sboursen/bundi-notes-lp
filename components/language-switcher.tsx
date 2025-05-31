"use client"

import { useLocale, useTranslations } from "next-intl"
import { useRouter, usePathname } from "next-intl/client"
import { type ChangeEvent, useTransition } from "react"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher")
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  const [isPending, startTransition] = useTransition()

  const locales = [
    { code: "en", name: t("languages.en") },
    { code: "fr", name: t("languages.fr") },
    { code: "ar", name: t("languages.ar") },
    { code: "sw", name: t("languages.sw") },
    { code: "ha", name: t("languages.ha") },
  ]

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <Globe className="w-4 h-4 text-brand-silver" />
        <select
          defaultValue={locale}
          onChange={onSelectChange}
          disabled={isPending}
          className="appearance-none bg-transparent border-none text-brand-black/70 dark:text-brand-light-text/70 focus:outline-none text-sm pe-6 cursor-pointer"
        >
          {locales.map((loc) => (
            <option key={loc.code} value={loc.code}>
              {loc.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-2 text-brand-black/50 dark:text-brand-light-text/50">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  )
}
