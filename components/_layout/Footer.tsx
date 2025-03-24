import type { ReactNode } from "react";

import { useTranslations } from "next-intl";
import Link from "next/link";

import { flex, section, text, link } from "../primitives";

type FooterLinkTypes = {
  href: string;
  children: "home" | "contact" | "about_us" | "lubricants" | "gallery";
};

const footerLinks: FooterLinkTypes[] = [
  {
    href: "/",
    children: "home",
  },

  {
    href: "/contact",
    children: "contact",
  },

  {
    href: "/about",
    children: "about_us",
  },

  {
    href: "/lubricants",
    children: "lubricants",
  },
];

export function Footer() {
  const tf = useTranslations("Footer");
  const tn = useTranslations("Navigation");

  return (
    <footer
      className={flex({
        direction: "rowResponsive",
        justify: "evenly",
        align: "start",
        gap: "md",
        fullWidth: true,
        className: "p-4 border-t-2 border-slate-400",
      })}
    >
      <div>
        <ul
          className={section({
            spacing: "sm",
            padding: "sm",
            className: "w-fit h-fit",
          })}
        >
          <li
            className={text({
              size: "xl",
              weight: "bold",
              tracking: "wider",
            })}
          >
            <h4>ACI SH.A</h4>
          </li>
          {footerLinks.map((link) => (
            <FooterLink key={link.href} href={link.href}>
              {tn(link.children)}
            </FooterLink>
          ))}
        </ul>
      </div>
      <div>
        <ul
          className={section({
            spacing: "sm",
            padding: "sm",
            className: "w-fit h-fit",
          })}
        >
          <li
            className={text({
              size: "xl",
              weight: "bold",
              tracking: "wider",
            })}
          >
            <h4>{tf("help")}</h4>
          </li>
          <FooterLink key="help-link-home" href={"/"}>
            {tf("which_is_better")}
          </FooterLink>
        </ul>
      </div>
    </footer>
  );
}

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <li
      className={link({
        variant: "default",
        size: "lg",
        className: "border-b-2 border-b-transparent",
      })}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};
