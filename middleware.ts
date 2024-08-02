import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "de", "al"],

  // Used when no locale matches
  defaultLocale: "al",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(de|en|al)/:path*"],
};
