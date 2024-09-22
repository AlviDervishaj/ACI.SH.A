import { useTranslations } from "next-intl";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

import Search from "./Search";

import { Link } from "@/config/routing";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ThemeSwitch } from "@/components/_layout/theme-switch";
import { LocaleSwitcher } from "@/components/_layout/LocaleSwitcher";

export default function LargeScreenNavigation() {
  const t = useTranslations("Navigation");

  return (
    <section className="md:w-[97%] w-11/12 mx-auto justify-self-center h-fit hidden lg:flex flex-row items-center content-center justify-between">
      <div className="w-full flex flex-row items-center content-center justify-start pl-4 gap-10">
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
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{t(item.label)}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full hidden lg:flex flex-row items-center content-center justify-end justify-self-end md:space-x-2 lg:space-x-4">
        <Search />
        <LocaleSwitcher />
        <ThemeSwitch />
        <Button className="min-w-10" size="icon" variant="outline">
          <ShoppingCart />
        </Button>
      </div>
    </section>
  );
}
