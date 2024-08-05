"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Spacer } from "@nextui-org/spacer";
import { Button } from "@nextui-org/button";
import { usePathname, useRouter } from "next/navigation";

import { Link as NextLink } from "@/config/routing";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon } from "@/components/icons";

export const Navigation = () => {
  const t = useTranslations("Navigation");
  const p = usePathname();
  const router = useRouter();
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  function handleLocaleChange() {
    const newLocale = p.includes("/en") ? "/al" : "/en";

    router.replace(newLocale);

    return;
  }

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      {/* Large Screen Navigation */}
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

      {/* Small Screen Navigation */}
      <NavbarContent
        className="hidden lg:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <ThemeSwitch />
        <Button
          className={"w-10 h-10 relative"}
          variant={"light"}
          onClick={handleLocaleChange}
        >
          {p.includes("/en") ? (
            <Image
              alt={"Albania Flag"}
              className={"aspect-square"}
              height={512}
              src={"/images/languages/albania.png"}
              width={512}
            />
          ) : (
            <Image
              alt={"US Flag"}
              className={"aspect-square"}
              height={512}
              src={"/images/languages/united-states.png"}
              width={512}
            />
          )}
        </Button>
        {/*
          <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
          */}
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <Button
          className={"w-4 relative"}
          variant={"light"}
          onClick={handleLocaleChange}
        >
          {p.includes("/en") ? (
            <Image
              alt={"Albania Flag"}
              height={256}
              src={"/images/languages/albania.png"}
              width={256}
            />
          ) : (
            <Image
              alt={"US Flag"}
              className={"aspect-square"}
              height={256}
              src={"/images/languages/united-states.png"}
              width={256}
            />
          )}
        </Button>
        <ThemeSwitch />
        <Spacer x={2} />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
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
    </NextUINavbar>
  );
};
