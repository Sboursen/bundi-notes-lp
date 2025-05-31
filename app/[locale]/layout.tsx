import type React from "react"
import { Montserrat, Lato } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { notFound } from "next/navigation"
import { getTranslations } from "next-intl/server"
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

// Define supported locales for generating static params
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }, { locale: "ar" }, { locale: "sw" }, { locale: "ha" }]
}

// Function to generate metadata, including hreflang
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" })

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
      "x-default": `${baseUrl}/en`, // Your default language version
    },
  }

  return {
    title: t("siteTitle"),
    description: t("siteDescription"),
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
  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  // Basic validation
  if (!generateStaticParams().find((p) => p.locale === locale)) {
    notFound()
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={`${montserrat.variable} ${lato.variable}`}>
      <body className="font-secondary antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
