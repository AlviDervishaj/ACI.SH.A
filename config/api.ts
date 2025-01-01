import { AVAILABLE_QUERY_PARAMS, FILTER_MAP } from "@/types/Api";
export const API_BASE_URL = "http://localhost:8000";

type ListProductsUrlType = {
  filters?: Partial<FILTER_MAP>,
  queries?: AVAILABLE_QUERY_PARAMS,
}

/** List products based on filters and queries */
export const listProducts = ({ filters, queries }: ListProductsUrlType): string => {
  let url = PRODUCTS_API.GET;
  if (filters) {
    const filter = Object.entries(filters).map(([key, value]) => `${key}=${value}`).join("&");
    url = `${url}?${filter}`;
  }
  if (queries) {
    const order = queries;
    // Sort should have a format like this: /list?sort=["sell_price", "name"]&order=asc
    const sort = queries.sort.map((s) => `"${s}"`).join(",");
    url = `${url}?sort=[${sort}]&order=${order}`;
  }
  return url;
}

export const PRODUCTS_API = {
  // TODO: Implement it
  // Order based on popularity in ascending order
  GET: `${API_BASE_URL}/product/list`,
  GET_POPULAR: `${API_BASE_URL}/product/list?sort=["popularity"]&order=desc`,
  GET_DISCOUNTED: `${API_BASE_URL}/product/list?sort=["discount"]&order=desc`,
  GET_PRICE_ASC: `${API_BASE_URL}/product/list?sort=["sell_price"]&order=asc`,
  GET_PRICE_DESC: `${API_BASE_URL}/product/list?sort=["sell_price"]&order=desc`,
  POST: `${API_BASE_URL}/product/create`,
  PUT: `${API_BASE_URL}/product/update`,
  CATEGORY: {
    GET: `${API_BASE_URL}/category/list/create`,
    POST: `${API_BASE_URL}/category/list/create`,
  },
  BRAND: {
    GET: `${API_BASE_URL}/brand/list/create`,
    POST: `${API_BASE_URL}/brand/list/create`,
  },
  ORDER: {
    GET: `${API_BASE_URL}/order/list`,
    POST: `${API_BASE_URL}/order/create`,
  },
};
export const SUPPORT_TEAM = {
  general_email: "alvidervishaj9@gmail.com",
} as const;
