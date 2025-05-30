import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Lato } from "next/font/google"
import "./globals.css"

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

export const metadata: Metadata = {
  title: "Bundi Notes - Transform How You Learn",
  description:
    "The AI study partner that transforms how you learn. Record lectures, ask questions to your notes, and finally understand—not just memorize.",
  keywords: ["AI", "education", "study", "notes", "learning", "lectures", "students"],
  authors: [{ name: "Bundi Notes" }],
  openGraph: {
    title: "Bundi Notes - Transform How You Learn",
    description: "Join the waitlist for the AI study partner that transforms education worldwide.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <body className="font-lato antialiased">{children}</body>
    </html>
  )
}
