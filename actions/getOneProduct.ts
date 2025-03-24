import "server-only";
import type { ListProducts } from "../types/Api";

import { PRODUCTS_API } from "@/config/api";

export const getOneProduct = async (
  product_name: string,
): Promise<{
  products: ListProducts;
  error: string | null;
}> => {
  const endpoint: string = PRODUCTS_API.GET_ONE(product_name);
  let error: string | null = null;
  const result: ListProducts = {
    data: [],
    pagination: { previous: null, count: 0, next: null },
  };

  try {
    const response: Response = await fetch(endpoint);
    const data = (await response.json()) as ListProducts;

    result.data = data.data;
    result.pagination = data.pagination;
  } catch (_error) {
    error = "An error occurred while fetching products.";
    // eslint-disable-next-line no-console
    console.error("Error in getOneProduct:", _error);
  }

  return { products: result, error };
};
