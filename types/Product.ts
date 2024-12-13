export interface Product {
  id: number;
  name: string;
  category: Category;
  sku_code: string;
  buy_price: number;
  sell_price: number;
  has_discount: boolean;
  brand: string;
  discount: number;
  main_image: string | null;
  total_discount: number;
  product_images: string[];
}

export interface Category {
  name: string;
  description: string;
}
