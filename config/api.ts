export const API_BASE_URL = "http://localhost:8000";
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
