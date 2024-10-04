"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import Image from "next/image";
import { Menu as MIcon, X } from "lucide-react";
import clsx from "clsx";
import { useTranslations } from "next-intl";

import { LocaleSwitcher } from "../LocaleSwitcher";
import { ThemeSwitch } from "../theme-switch";

import Search from "./Search";
import ShoppingCart from "./ShoppingCart";

import { siteConfig } from "@/config/site";
import { usePathname, Link } from "@/config/routing";

export default function NavigationUI() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  return (
    <Disclosure
      as="nav"
      className="bg-background/80 border-b border-b-slate-700/50 dark:border-b-foreground/50 shadow-lg shadow-foreground/10 backdrop-blur z-50 p-0 m-0 fixed top-0 left-0 w-full h-fit"
    >
      {/* On Large Hide. Show on smaller screens. ( SMALL NAVBAR ) */}
      <div className="mx-auto w-full px-2 md:px-2 lg:px-6 xl:px-10">
        <div className="relative flex h-16 items-center justify-between w-full">
          <div className="flex flex-1 items-center justify-between lg:items-stretch lg:justify-start">
            <div className="flex flex-shrink-0 items-center justify-self-center self-center">
              <Link
                className="flex justify-start items-center gap-1 justify-self-start"
                href="/"
              >
                <Image
                  priority
                  alt={"ACI LOGO "}
                  className={"object-scale-down aspect-square bg-white p-2"}
                  height={70}
                  src={"/images/aci-logo-light.png"}
                  width={70}
                />
              </Link>
            </div>
            <div className="lg:hidden flex flex-row items-center content-center justify-center">
              <LocaleSwitcher />
            </div>
            <div className="lg:hidden flex flex-row items-center content-center gap-2">
              <ThemeSwitch />
              <ShoppingCart />
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <MIcon
                    aria-hidden="true"
                    className="group-data-[open]:hidden dark:stroke-slate-300 stroke-slate-800 group-hover:stroke-slate-300"
                    size={24}
                  />
                  <X
                    aria-hidden="true"
                    className="hidden dark:stroke-slate-300 stroke-slate-800 group-hover:stroke-slate-300 group-data-[open]:block"
                    size={24}
                  />
                </DisclosureButton>
              </div>
            </div>
            <div className="hidden lg:ml-6 lg:block">
              <div className="flex space-x-1 lg:space-x-2">
                {siteConfig.navItems.map((item) => (
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
              </div>
            </div>
          </div>
          {/* Search */}
          <div className="justify-center content-center items-center hidden lg:flex gap-2 lg:gap-6">
            <Search />
            <LocaleSwitcher />
            <div className="space-x-1">
              <ThemeSwitch />
              <ShoppingCart />
            </div>
          </div>
        </div>
      </div>

      {/* On Large Hide. Show on smaller screens. ( SMALL NAVBAR ) */}
      <DisclosurePanel className="lg:hidden w-full">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* Search */}
          <div className="w-full h-full p-0 m-0 inset-y-0">
            <Search />
          </div>
          {siteConfig.navItems.map((item) => (
            <DisclosureButton
              key={item.href}
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
    </Disclosure>
  );
}

export function ProfileDropdown() {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          {/* Logo below */}
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MenuItem>
          <Link
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
            href="#"
          >
            Your Profile
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
            href="#"
          >
            Settings
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
            href="#"
          >
            Sign out
          </Link>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
