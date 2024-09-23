"use client";
import { link as linkStyles } from "@nextui-org/theme";
import { useTranslations } from "next-intl";
import { Menu, ShoppingCart, X } from "lucide-react";
import clsx from "clsx";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, Variants } from "framer-motion";
import { motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";

import Search from "./Search";

import { Link } from "@/config/routing";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ThemeSwitch } from "@/components/_layout/theme-switch";
import { LocaleSwitcher } from "@/components/_layout/LocaleSwitcher";

export default function SmallScreenNavigation() {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const navRef = useRef<HTMLUListElement>(null);
  const t = useTranslations("Navigation");
  const navigationContainerAnimation: Variants = {
    visible: {
      height: "100dvh",
      opacity: 1,
      transition: {
        height: { velocity: 100 },
        duration: 0.5,
      },
    },
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        height: { velocity: 100 },
        duration: 0.7,
      },
    },
  };

  function handleClickOutsideNavigation() {
    setIsEnabled(false);

    return;
  }

  useOnClickOutside(navRef, handleClickOutsideNavigation);

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
          <NavbarMenuToggle setIsEnabled={setIsEnabled} />
        </div>
      </div>

      <AnimatePresence>
        {isEnabled && (
          <motion.div
            animate={isEnabled ? "visible" : "hidden"}
            className="absolute top-0 left-0 z-50 bg-background/70 backdrop-blur-md w-dvw h-dvh"
            exit="hidden"
            initial="hidden"
            variants={navigationContainerAnimation}
          >
            <ul ref={navRef} className="ml-4 m-2 flex flex-col gap-2">
              <div className="w-full h-fit flex flex-row items-center content-center justify-between">
                <section className="flex flex-row items-center content-center justiy-center gap-2">
                  <LocaleSwitcher />
                  <ThemeSwitch />
                  <Button className="min-w-10" size="icon" variant="outline">
                    <ShoppingCart />
                  </Button>
                </section>
                <NavbarMenuClose setIsEnabled={setIsEnabled} />
              </div>
              {/* Search bar here */}
              <div className="w-[90dvw]">
                <Search variant="small_screen_search" />
              </div>
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
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function NavbarMenuToggle({
  setIsEnabled,
}: {
  setIsEnabled: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Button
      className="min-w-10"
      size="icon"
      variant="outline"
      onClick={() => setIsEnabled(true)}
    >
      <Menu size={25} />
    </Button>
  );
}
function NavbarMenuClose({
  setIsEnabled,
}: {
  setIsEnabled: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Button
      className="min-w-10"
      size="icon"
      variant="outline"
      onClick={() => setIsEnabled(false)}
    >
      <X size={25} />
    </Button>
  );
}
