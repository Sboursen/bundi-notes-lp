import type React from "react"
import { Montserrat, Lato } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/lib/navigation"
import "../globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "swap",
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  // Validate locale
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()
  const t = (key: string) => {
    const keys = key.split(".")
    let value: any = messages
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  // Define the base URL of your site
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

  // Define alternates for hreflang
  const alternates = {
    canonical: `${baseUrl}/${locale}`,
    languages: {
      en: `${baseUrl}/en`,
      fr: `${baseUrl}/fr`,
      ar: `${baseUrl}/ar`,
      sw: `${baseUrl}/sw`,
      ha: `${baseUrl}/ha`,
      "x-default": `${baseUrl}/en`,
    },
  }

  return {
    title: t("Metadata.siteTitle"),
    description: t("Metadata.siteDescription"),
    alternates,
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={`${montserrat.variable} ${lato.variable}`}>
      <body className="font-secondary antialiased">
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
