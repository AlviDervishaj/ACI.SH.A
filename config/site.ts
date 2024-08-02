export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "AÇI SH.A",
  description:
    "Distributor ekskluziv i Galp në Ballkan. Lubrifikante per Automjete e Industri - Bateri Automjetesh - Vaj Motorri per makina",
  navItems: [
    {
      label: "home",
      href: "/",
    },
    {
      label: "about_us",
      href: "/about",
    },
    {
      label: "lubricants",
      href: "/blog",
    },
    {
      label: "contact",
      href: "/pricing",
    },
  ],
  navMenuItems: [
    {
      label: "home",
      href: "/",
    },
    {
      label: "about_us",
      href: "/about",
    },
    {
      label: "lubricants",
      href: "/blog",
    },
    {
      label: "contact",
      href: "/pricing",
    },
  ],
  links: {
    galp: "https://galp.com/pt/en/personal/road/lubricants",
    repsol:
      "https://lubricants.repsol.com/en/products/lubricants-search-engine/",
    prefix: "http://www.prefixoil.com/our-products/",
  },
} as const;
