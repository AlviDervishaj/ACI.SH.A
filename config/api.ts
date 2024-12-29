import { AVAILABLE_QUERY_PARAMS, FILTER_MAP } from "@/types/Api";
export const API_BASE_URL = "http://localhost:8000";

/** List products based on filters and queries */
export const listProducts = (filters?: Partial<FILTER_MAP>, queries?: { [key: string]: AVAILABLE_QUERY_PARAMS }[]): string => {
  let url = `${API_BASE_URL}/product/list`;
  if (filters) {
    const filter = Object.entries(filters).map(([key, value]) => `${key}=${value}`).join("&");
    url = `${url}?${filter}`;
  }
  if (queries) {
    const query = queries.map((q) => `${q}=${q}`).join("&");
    url = `${url}?${query}`;
  }
  return url;
}

export const PRODUCTS_API = {
  GET: `${API_BASE_URL}/product/list`,
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
