"use client";
import { DisclosureButton, DisclosurePanel } from "@headlessui/react";
import clsx from "clsx";
import { useTranslations } from "next-intl";

// import Search from "./Search";

import { Link, usePathname } from "@/i18n/routing";
import { siteConfig } from "@/config/site";
import { flex, section } from "../../primitives";

export const NavigationBigScreen = () => {
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  return (
    <DisclosurePanel className="lg:hidden w-full">
      <div className={section({
        spacing: "sm",
        padding: "sm",
        className: "pb-3 pt-2"
      })}>
        {siteConfig.navItems.map((item) => (
          <DisclosureButton
            key={`nav-panel-${item.href}`}
            aria-current={item.href === pathname ? "page" : undefined}
            as={Link}
            className={clsx(
              item.href === pathname
                ? "bg-gray-600 text-background dark:text-foreground"
                : "text-gray-900 hover:bg-gray-700 hover:text-white dark:hover:text-foreground dark:text-slate-300",
              "block rounded-md px-3 py-2 text-base font-medium",
            )}
            href={item.href}
          >
            {t(item.label)}
          </DisclosureButton>
        ))}
      </div>
    </DisclosurePanel>
  );
};
