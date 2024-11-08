"use client";
import clsx from "clsx";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";
import { Link, usePathname } from "@/i18n/routing";

export function NavigationBigScreenLinks({
  links,
}: {
  links: typeof siteConfig.navItems;
}) {
  const pathname = usePathname();
  const t = useTranslations("Navigation");

  return (
    <>
      {links.map((item) => (
        <Link
          key={item.href}
          aria-current={item.href === pathname ? "page" : undefined}
          className={clsx(
            item.href === pathname
              ? "bg-gray-600 dark:bg-gray-500 font-bold tracking-wide text-white"
              : "text-gray-900 dark:text-gray-300 hover:bg-gray-600 hover:text-white",
            "rounded-md px-3 py-2 text-sm font-medium inline-block whitespace-nowrap",
          )}
          href={item.href}
        >
          {t(item.label)}
        </Link>
      ))}
    </>
  );
}
