import Image from "next/image";
import { DisclosureButton } from "@headlessui/react";
import { Menu as MIcon, X } from "lucide-react";

import { Link } from "@/i18n/routing";
import { siteConfig } from "@/config/site";

import { ThemeSwitch } from "../ThemeSwitcher";
import { LocaleSwitcher } from "../LocaleSwitcher";

// import Search from "./Search";
import ShoppingCart from "./ShoppingCart";
import { NavigationBigScreenLinks } from "./NavigationLink";

export const NavigationBigScreen = () => {
  return (
    <div className="mx-auto w-full px-2 md:px-2 lg:px-6 xl:px-10">
      <div className="relative flex h-16 items-center justify-between w-full">
        <div className="flex flex-1 items-center justify-between lg:justify-start">
          <div className="flex shrink-0 items-center justify-self-center self-center">
            <Link
              className="flex justify-start items-center gap-1 justify-self-start"
              href="/"
            >
              <Image
                priority
                alt={"ACI LOGO "}
                className={
                  "object-scale-down aspect-square bg-white p-1 rounded-lg"
                }
                height={60}
                src={"/images/aci-logo-light.png"}
                width={60}
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
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-hidden focus:ring-2 focus:ring-inset focus:ring-white cursor-pointer">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <MIcon
                  aria-hidden="true"
                  className="group-data-open:hidden dark:stroke-slate-300 stroke-slate-800 group-hover:stroke-slate-300"
                  size={24}
                />
                <X
                  aria-hidden="true"
                  className="hidden dark:stroke-slate-300 stroke-slate-800 group-hover:stroke-slate-300 group-data-open:block"
                  size={24}
                />
              </DisclosureButton>
            </div>
          </div>
          <div className="hidden lg:ml-6 lg:block">
            <div className="flex space-x-1 lg:space-x-2">
              <NavigationBigScreenLinks links={siteConfig.navItems} />
            </div>
          </div>
        </div>
        {/* Search */}
        <div className="justify-center content-center items-center hidden lg:flex gap-2 lg:gap-6">
          {/* <Search /> */}
          <LocaleSwitcher />
          <div className="space-x-1">
            <ThemeSwitch />
            <ShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};
