import "server-only";
import { listProducts, PRODUCTS_API } from "@/config/api";

import { ListProducts } from "../types/Api";

export const getAllSorted = async (
  sort: "default" | "popular" | "discounted" | "price-asc" | "price-desc",
): Promise<ListProducts> => {

  let endpoint = PRODUCTS_API.GET;
  const _productsUrl: string = listProducts({ filters: {}, queries: { sort: ["name"], order: "asc" } });
  switch (sort) {
    case "popular":
      endpoint = PRODUCTS_API.GET_POPULAR;
      break;
    case "discounted":
      endpoint = PRODUCTS_API.GET_DISCOUNTED;
      break;
    case "price-asc":
      endpoint = PRODUCTS_API.GET_PRICE_ASC;
      break;
    case "price-desc":
      endpoint = PRODUCTS_API.GET_PRICE_DESC;
      break;
  }
  return await (await fetch(endpoint)).json() as ListProducts;
};

