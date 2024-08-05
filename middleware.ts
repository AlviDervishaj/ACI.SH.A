import createMiddleware from "next-intl/middleware";

import { locales } from "./config/locales";

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: "al",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|al)/:path*"],
};
