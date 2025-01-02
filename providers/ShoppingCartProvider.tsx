"use client";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useReducer,
} from "react";
import { toast } from "sonner";

import { Product } from "@/types/Product";
import {
  InitialStateType,
  ShoppingCartActionType,
  ShoppingCartContextType,
  ShoppingCartProductsType,
} from "@/types/Providers";

const ShoppingCartContext = createContext<ShoppingCartContextType>({
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
  addProduct: () => false,
  removeProduct: () => false,
  clearCart: () => false,
  increaseQuantity: () => false,
  decreaseQuantity: () => false,
  isProductInCart: () => false,
  addProducts: () => false,
});

export const useShoppingCart = () => useContext(ShoppingCartContext);

const initialState: InitialStateType = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const reducer = (state: InitialStateType, action: ShoppingCartActionType) => {
  // insert some cases
  switch (action.type) {
    case "ADD_PRODUCT": {
      // If product is already in cart, do nothing
      if (
        state.products.some(
          (product) => product.product.id === action.product.id,
        )
      ) {
        return state;
      }

      // Add new Product
      return {
        ...state,
        products: [
          ...state.products,
          {
            product: action.product,
            quantity: 1,
          },
        ],
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + action.product.sell_price,
      };
    }
    case "ADD_PRODUCTS": {
      // Add many products
      const newProducts = [...state.products];
      let totalQuantity = state.totalQuantity;
      let totalPrice = state.totalPrice;

      action.products.forEach((product) => {
        if (newProducts.some((p) => p.product.id === product.product.id)) {
          return;
        }
        newProducts.push(product);
        totalQuantity += product.quantity;
        totalPrice += product.quantity * product.product.sell_price;
      });

      return {
        ...state,
        products: newProducts,
        totalQuantity,
        totalPrice,
      };
    }
    case "REMOVE_PRODUCT": {
      const productIndex = state.products.findIndex(
        (product) => product.product.id === action.product.id,
      );

      // Product was not in cart
      if (productIndex === -1) {
        return state;
      }
      // Remove Product
      const newProducts = [...state.products];
      const product = newProducts[productIndex];

      newProducts.splice(productIndex, 1);
      toast.success(`${product.product.name} removed from cart`, {
        id: "remove_product",
      });

      return {
        ...state,
        products: newProducts,
        totalQuantity: state.totalQuantity - product.quantity,
        totalPrice:
          state.totalPrice - product.quantity * product.product.sell_price,
      };
    }
    // Increase or decrease quantity
    case "UPDATE_QUANTITY": {
      // If product is not in cart, do nothing
      const productIndex = state.products.findIndex(
        (product) => product.product.id === action.product.id,
      );

      if (productIndex === -1) {
        return state;
      }
      // Grab reference to product
      const newProducts = [...state.products];
      const product = newProducts[productIndex];

      // Increment quantity
      if (action.increment) {
        newProducts[productIndex] = {
          ...product,
          quantity: product.quantity + 1,
        };

        return {
          ...state,
          products: newProducts,
          totalQuantity: state.totalQuantity + 1,
          totalPrice: state.totalPrice + product.product.sell_price,
        };
      }
      // Decrement quantity
      else {
        // If quantity is 1, remove product from cart
        if (product.quantity === 1) {
          // remove it from cart
          newProducts.splice(productIndex, 1);
          toast.success(`${product.product.name} removed from cart`, {
            id: "remove_product",
          });

          return {
            ...state,
            products: newProducts,
            totalQuantity: state.totalQuantity - 1,
            totalPrice: state.totalPrice - product.product.sell_price,
          };
        }
        // Decrease quantity if quantity is more than 1
        newProducts[productIndex] = {
          ...product,
          quantity: product.quantity - 1,
        };

        return {
          ...state,
          products: newProducts,
          totalQuantity: state.totalQuantity - 1,
          totalPrice: state.totalPrice - product.product.sell_price,
        };
      }
    }
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
};

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addProduct = useCallback(
    (product: Product) => {
      dispatch({ type: "ADD_PRODUCT", product });

      return true;
    },
    [state.products.length],
  );

  const removeProduct = useCallback(
    (product: Product) => {
      dispatch({ type: "REMOVE_PRODUCT", product });

      return true;
    },
    [state.products.length],
  );

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });

    return true;
  }, [state.products.length]);

  const increaseQuantity = useCallback(
    (product: Product) => {
      dispatch({ type: "UPDATE_QUANTITY", product, increment: true });

      return true;
    },
    [state.products.length],
  );

  const decreaseQuantity = useCallback(
    (product: Product) => {
      dispatch({ type: "UPDATE_QUANTITY", product, increment: false });

      return true;
    },
    [state.products.length],
  );

  const isProductInCart = useCallback(
    (product: Product) => {
      return state.products.some((p) => p.product.id === product.id);
    },
    [state.products.length],
  );

  const addProducts = useCallback(
    (products: ShoppingCartProductsType[]) => {
      dispatch({ type: "ADD_PRODUCTS", products });

      return true;
    },
    [state.products.length],
  );

  return (
    <ShoppingCartContext.Provider
      value={{
        ...state,
        addProduct,
        removeProduct,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        isProductInCart,
        addProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
