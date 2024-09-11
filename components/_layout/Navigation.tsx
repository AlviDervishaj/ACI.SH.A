"use client";
import { Link as NextLink } from "@/config/routing";
import { ThemeSwitch } from "@/components/theme-switch";
import { link as linkStyles } from "@nextui-org/theme";
import { LocaleSwitcher } from "../LocaleSwitcher";
import { useTranslations } from "next-intl";
import { Spacer } from "@nextui-org/spacer";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import clsx from "clsx";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Search } from "./Search";
import { ShoppingCart } from "lucide-react";

export const Navigation = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      {/* Large Screen Navigation */}
      <LargeScreenNavigation />
      {/* Small Screen Navigation */}
      <SmallScreenNavigation />
    </NextUINavbar>
  );
};

function LargeScreenNavigation() {
  const t = useTranslations("Navigation");
  return (
    <>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        {/* Logo below */}
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              priority
              alt={"ACI LOGO "}
              className={"object-scale-down w-20 bg-white p-2"}
              height={177}
              src={"/images/aci-logo-light.png"}
              width={400}
            />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                prefetch
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {t(item.label)}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
      <NavbarContent
        className="hidden lg:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex">
          <Search />
        </NavbarItem>
        <LocaleSwitcher />
        <ThemeSwitch />
        <button className="p-2">
          <ShoppingCart />
        </button>
      </NavbarContent>
    </>
  )
}

function SmallScreenNavigation() {
  const t = useTranslations("Navigation");
  return (
    <>
      {/* Hidden on large screen */}
      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <LocaleSwitcher />
        <ThemeSwitch />
        <Spacer x={2} />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <Search />
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarItem
              key={`${item.href}--${item}-${index}`}
              className="font-xl"
            >
              <NextLink
                prefetch
                className={clsx(
                  linkStyles({ color: "foreground", size: "lg" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {t(item.label)}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarMenu>
    </>
  )
}
