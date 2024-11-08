import { useTranslations } from "next-intl";
import Link from "next/link";
import { ReactNode } from "react";

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
    href: "/",
    children: "contact",
  },

  {
    href: "/",
    children: "about_us",
  },

  {
    href: "/",
    children: "lubricants",
  },
];

export function Footer() {
  const tf = useTranslations("Footer");
  const tn = useTranslations("Navigation");

  return (
    <footer
      className={
        "w-full h-full relative flex flex-col md:flex-row p-4 gap-2 items-start content-center justify-evenly border-t-2 border-slate-400"
      }
    >
      <div>
        <ul
          className={
            "w-fit h-fit p-2 flex flex-col items-start gap-1 lg:gap-4 content-center justify-evenly "
          }
        >
          <li className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wider">
            <h4>ACI SH.A</h4>
          </li>
          {footerLinks.map((link, index) => (
            <FooterLink key={index} href={link.href}>
              {tn(link.children)}
            </FooterLink>
          ))}
        </ul>
      </div>
      <div>
        <ul
          className={
            "w-fit h-fit p-2 flex flex-col items-start gap-1 lg:gap-4 content-center justify-evenly"
          }
        >
          <li className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wider">
            <h4>{tf("help")}</h4>
          </li>
          <FooterLink href={"/"}>{tf("which_is_better")}</FooterLink>
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
    <li className="text-sm md:text-lg lg:text-xl border-b-2 hover:border-b-gray-600 border-b-transparent transition-colors duration-300 ease-in-out">
      <Link href={href}>{children}</Link>
    </li>
  );
};
