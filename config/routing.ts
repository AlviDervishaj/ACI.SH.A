import { createSharedPathnamesNavigation } from "next-intl/navigation";

import { locales } from "./locales";

export const { Link, redirect, usePathname, useRouter, permanentRedirect } =
  createSharedPathnamesNavigation({ locales });
