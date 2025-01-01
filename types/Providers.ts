import { Product } from "./Product";

export type ShoppingCartContextType = {
  products: ShoppingCartProductsType[];
  totalQuantity: number;
  totalPrice: number;
  addProduct: (product: Product) => boolean;
  removeProduct: (product: Product) => boolean;
  clearCart: () => boolean;
  increaseQuantity: (product: Product) => boolean;
  decreaseQuantity: (product: Product) => boolean;
  isProductInCart: (product: Product) => boolean;
  addProducts: (products: ShoppingCartProductsType[]) => boolean;
}

export type ShoppingCartProductsType = {
  product: Product;
  quantity: number;
}

export type ShoppingCartActionType = {
  type: "ADD_PRODUCT" | "REMOVE_PRODUCT";
  product: Product;
} | {
  type: "ADD_PRODUCTS";
  products: ShoppingCartProductsType[];
} | {
  type: "UPDATE_QUANTITY";
  product: Product;
  increment: boolean;
} | {
  type: "CLEAR_CART";
};
export type LocalProductsType = {
  totalQuantity: number;
  totalPrice: number,
  products: {
    id: number,
    quantity: number;
  }[]
}

export type InitialStateType = {
  products: ShoppingCartProductsType[];
  totalQuantity: number;
  totalPrice: number;
}
