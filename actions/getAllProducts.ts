import "server-only";
import { PRODUCTS_API } from "@/config/api";

import { ListProducts } from "../types/Api";

const buildProductUrl = (page?: number, brand?: number): string => {
  let url = PRODUCTS_API.GET;
  // When Brand is provided pass it as a query parameter like this:
  //...?filter={"brand": 2}
  if (page) {
    url += `?page=${page}`;
  }
  if (brand || brand !== 0) {
    url += `&filter={"brand": ${brand}}`;
  }
  return url;
}

export const getAllProducts = async (
  page?: number,
  brand?: number,
): Promise<{
  products: ListProducts;
  error: any;
}> => {
  const endpoint = buildProductUrl(page, brand);

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
