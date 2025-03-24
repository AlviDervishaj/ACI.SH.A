import "server-only";
import { PRODUCTS_API } from "@/config/api";

import { ListProducts } from "../types/Api";

export const getOneProduct = async (
  product_name: string,
): Promise<{
  products: ListProducts;
  error: string | null;
}> => {
  const endpoint: string = PRODUCTS_API.GET_ONE(product_name);
  let error: string | null = null;
  let result: ListProducts = {
    data: [],
    pagination: { previous: null, count: 0, next: null },
  };

  try {
    const response: Response = await fetch(endpoint);
    const data = (await response.json()) as ListProducts;

    result.data = data.data;
    result.pagination = data.pagination;
  } catch (_error) {
    error = "Something unexpected happened. Please try again later.";
    // eslint-disable-next-line no-console
    console.log({ getAllProductsError: _error });
  } finally {
    return { products: result, error };
  }
};
