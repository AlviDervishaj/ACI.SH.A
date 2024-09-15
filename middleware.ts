import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';
import { locales } from './config';

const handleI18nRouting = createMiddleware({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale: "al",
});

const isProtectedRoute = createRouteMatcher(['/:locale/admin(.*)']);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
  return handleI18nRouting(req);
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(al|en)/:path*']
};
