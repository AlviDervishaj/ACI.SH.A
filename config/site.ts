export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "AÇI SH.A",
  description:
    "Distributor ekskluziv i Galp në Ballkan. Lubrifikante per Automjete e Industri - Bateri Automjetesh - Vaj Motorri per makina",
  navItems: [
    {
      label: "home",
      name: "Home",
      href: "/",
    },
    {
      label: "gallery",
      href: "/gallery",
    },
    {
      label: "about_us",
      href: "/about",
    },
    {
      label: "lubricants",
      href: "/lubricants",
    },
    {
      label: "contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "home",
      href: "/",
    },
    {
      label: "gallery",
      href: "/gallery",
    },
    {
      label: "about_us",
      href: "/about",
    },
    {
      label: "lubricants",
      href: "/lubricants",
    },
    {
      label: "contact",
      href: "/contact",
    },
  ],
  links: {
    galp: "https://galp.com/pt/en/personal/road/lubricants",
    repsol:
      "https://lubricants.repsol.com/en/products/lubricants-search-engine/",
    prefix: "http://www.prefixoil.com/our-products/",
  },
} as const;
