import "server-only";
import { PRODUCTS_API } from "@/config/api";

import { ListProducts } from "../types/Api";

export const getAllProducts = async (
  page?: number,
): Promise<{
  products: ListProducts;
  error: any;
}> => {
  const endpoint = page ? `${PRODUCTS_API.GET}?page=${page}` : PRODUCTS_API.GET;

  let error = null;
  let result: ListProducts = {
    data: [],
    pagination: { previous: null, count: 0, next: null },
  };

  try {
    const response = await fetch(endpoint);
    const data = (await response.json()) as ListProducts;

    result.data = data.data;
    result.pagination = data.pagination;
  } catch (_err) {
    error = _err;
  } finally {
    return { products: result, error };
  }
};
