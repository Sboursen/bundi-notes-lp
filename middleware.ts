import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "fr", "ar", "sw", "ha"],

  // Used when no locale matches
  defaultLocale: "en",

  // Enable automatic locale detection based on the user's browser settings
  localeDetection: true,
})

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ar|en|fr|ha|sw)/:path*"],
}
