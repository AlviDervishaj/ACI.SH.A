import "server-only";
import type { ListProducts } from "../types/Api";

import { PRODUCTS_API } from "@/config/api";

const buildProductUrl = (
  page?: number,
  filter?: { [key: string]: boolean | string },
): string => {
  let url = PRODUCTS_API.GET;

  // When Brand is provided pass it as a query parameter like this:
  //...?filter={"brand": 2}
  if (page) {
    url += `?page=${page}`;
  } else {
    url += "?page=1";
  }
  if (filter && Object.keys(filter).length > 0) {
    url += `&filter=${JSON.stringify(filter)}`;
  }

  return url;
};

export const getAllProducts = async (
  page?: number,
  filters?: string[],
  term?: string,
): Promise<{
  products: ListProducts;
  error: string | null;
}> => {
  const filter_opts: { [key: string]: boolean | string } = {};

  if (filters && filters.filter.length > 0) {
    if (term && term.trim() !== "") {
      filter_opts.name = term;
    }
    filters.map((filter) => {
      const inverse = filter.includes("not_");
      const filterName = inverse ? filter.split("not_")[1] : filter;
      const filterValue = !inverse;

      filter_opts[filterName] = filterValue;

      return filter;
    });
  }
  const endpoint = buildProductUrl(page, filter_opts);
  let error = null;
  const result: ListProducts = {
    data: [],
    pagination: { previous: null, count: 0, next: null },
  };

  try {
    const response = await fetch(endpoint);
    const data = (await response.json()) as ListProducts;

    result.data = data.data;
    result.pagination = data.pagination;
  } catch (_error) {
    error = "An error occurred while fetching products.";
    // eslint-disable-next-line no-console
    console.error("Error in getAllProducts:", _error);
  }

  return { products: result, error };
};
