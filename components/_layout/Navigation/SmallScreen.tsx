"use client";
import { link as linkStyles } from "@nextui-org/theme";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";

import Search from "./Search";

import { Link } from "@/config/routing";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ThemeSwitch } from "@/components/_layout/theme-switch";
import { LocaleSwitcher } from "@/components/_layout/LocaleSwitcher";

export default function SmallScreenNavigation() {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const t = useTranslations("Navigation");

  return (
    <section className="lg:hidden w-full h-fit flex flex-row items-center content-center">
      {/* Hidden on large screen */}
      <div className="w-full h-fit flex flex-row items-center content-center justify-between justify-self-end">
        {/* Logo below */}
        <Link
          className="flex justify-start items-center gap-1 justify-self-start"
          href="/"
        >
          <Image
            priority
            alt={"ACI LOGO "}
            className={"object-scale-down w-20 bg-white p-2"}
            height={177}
            src={"/images/aci-logo-light.png"}
            width={400}
          />
        </Link>

        <div className="flex flex-row items-center content-center justify-evenly gap-3 ml-4">
          <LocaleSwitcher />
          <ThemeSwitch />
          {/*
          <Button className="min-w-10" size="icon" variant="outline">
            <ShoppingCart />
          </Button>
          */}
          <NavbarMenuToggle />
        </div>
      </div>

      {isEnabled ? (
        <ul className="mx-4 mt-2 flex flex-col gap-2">
          {/* Search bar here */}
          <Search />
          {siteConfig.navMenuItems.map((item, index) => (
            <li key={`${item.href}--${item}-${index}`} className="font-xl">
              <Link
                className={clsx(
                  linkStyles({ color: "foreground", size: "lg" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {t(item.label)}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function NavbarMenuToggle() {
  return (
    <Button className="min-w-10" size="icon" variant="outline">
      <Menu size={25} />
    </Button>
  );
}
