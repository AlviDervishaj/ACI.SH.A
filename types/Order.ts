import { Product } from "./Product";

export interface Order {
  transaction_time: string;
  client_secret: string;
  is_paid_online: boolean;
  printed_receipt: boolean;
  name: string;
  email: string;
  address: string;
  phone_number: string;
  is_admin: boolean;
  paid: boolean;
}

export interface OrderedProduct {
  product: Product;
  order: Order;
  product_count: number;
  price: number;
  discount: number;
  total_price: number;
}
