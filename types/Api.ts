import { Product } from "./Product";

export type ListProducts = {
  data: Product[];
  pagination: Pagination;
};

export type Pagination = {
  count: number;
  next: string | null;
  previous: string | null;
};

export type AVAILABLE_QUERY_PARAMS = {
  sort: SORT_PARAMS[];
  order: "asc" | "desc";
};

export type SORT_PARAMS =
  | "brand"
  | "brand_id"
  | "buy_price"
  | "deleted"
  | "description"
  | "discount"
  | "has_discount"
  | "id"
  | "main_image"
  | "name"
  | "order_products"
  | "product_buy_orders"
  | "product_categories"
  | "product_images"
  | "product_popularities"
  | "sell_price"
  | "sku_code"
  | "stock";

export type FILTER_MAP = {
  category: string[];
  brand: string;
  discount: boolean;
  name: string;
};

export type OrderedProduct = {
  product: number;
  product_count: number;
};

export type CreateOrderType = {
  name: string;
  email: string;
  printed_receipt: boolean;
  is_paid_online: boolean;
  client_secret: string;
  address: string;
  is_admin: boolean;
  paid: boolean;
  order_products: OrderedProduct[];
}
