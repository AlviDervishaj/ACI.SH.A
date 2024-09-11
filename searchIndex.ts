import { SearchResultsType } from "./types";

export const SearchIndex: SearchResultsType = [
  {
    group: "Home",
    title: "Home",
    keywords: [
      "Home",
      "Shtepi",
      "Index"
    ],
    href: "/",
  },
  {
    group: "Oils",
    title: "Oils",
    image: "/images/oils/galp-oil-1.png",
    keywords: [
      "Oils",
      "Vajrat",
      "Lubrifikantet",
      "Lubricants",
    ],
    href: "/lubricants",
  },
  {
    title: "About Us",
    group: "About",
    keywords: [
      "About",
      "Rreth Nesh",
      "Description"
    ],
    href: "/about",
  },
  {
    group: "Products",
    title: "Products",
    keywords: [
      "Products",
      "Produktet",
    ],
    href: "/products",
  },
] as const;
