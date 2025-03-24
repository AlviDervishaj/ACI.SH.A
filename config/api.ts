export const API_BASE_URL = "http://localhost:8000";

export const PRODUCTS_API = {
  // TODO: Implement it
  // Order based on popularity in ascending order
  GET: `${API_BASE_URL}/product/list`,
  GET_ONE: (name: string) =>
    `${API_BASE_URL}/product/list?filter={"name": "${name}"}`,
  GET_POPULAR: `${API_BASE_URL}/product/list?sort=["popularity"]&order=desc`,
  GET_DISCOUNTED: `${API_BASE_URL}/product/list?sort=["discount"]&order=desc`,
  GET_BASED_ON_BRAND: (brand: string) =>
    `${API_BASE_URL}/product/list?filter={"brand":"${brand}"}`,
  GET_BASED_ON_CATEGORY: (category: string) =>
    `${API_BASE_URL}/product/list?filter={"category":"${category}"}`,
  GET_BASED_ON_DISCOUNT: `${API_BASE_URL}/product/list?filter={"discount":true}`,
  GET_PRICE_ASC: `${API_BASE_URL}/product/list?sort=["sell_price"]&order=asc`,
  GET_PRICE_DESC: `${API_BASE_URL}/product/list?sort=["sell_price"]&order=desc`,
  POST: `${API_BASE_URL}/product/create`,
  PUT: `${API_BASE_URL}/product/update`,
  CATEGORY: {
    GET: `${API_BASE_URL}/product/category/list/create`,
    POST: `${API_BASE_URL}/product/category/list/create`,
  },
  BRAND: {
    GET: `${API_BASE_URL}/product/brand/list/create/`,
    POST: `${API_BASE_URL}/product/brand/list/create/`,
  },
  ORDER: {
    GET: `${API_BASE_URL}/product/order/list/`,
    POST: `${API_BASE_URL}/product/order/create/`,
  },
};

export const SUPPORT_TEAM = {
  general_email: "alvidervishaj9@gmail.com",
} as const;
