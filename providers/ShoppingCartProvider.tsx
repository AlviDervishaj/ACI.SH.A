"use client";
import { memo, useMemo } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react";
import { toast } from "sonner";

import type { Product } from "@/types/Product";
import type {
  InitialStateType,
  ShoppingCartActionType,
  ShoppingCartContextType,
  ShoppingCartProductsType,
} from "@/types/Providers";

// Use useLayoutEffect on client and use a noop on server
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// Storage key for local storage
const STORAGE_KEY = "aci-shopping-cart" as const;

// Toast IDs to prevent duplicate notifications
const TOAST_IDS = {
  ADD_PRODUCT: 'add-product',
  REMOVE_PRODUCT: 'remove-product',
  CLEAR_CART: 'clear-cart',
} as const;

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

// Helper functions to calculate totals - memoize to prevent unnecessary recalculations
const calculateTotals = (products: ShoppingCartProductsType[]): { totalQuantity: number, totalPrice: number } => {
  return products.reduce(
    (acc, item) => {
      return {
        totalQuantity: acc.totalQuantity + item.quantity,
        totalPrice: acc.totalPrice + (item.product.sell_price * item.quantity),
      };
    },
    { totalQuantity: 0, totalPrice: 0 }
  );
};

// Load cart from local storage - avoid re-parsing on every render
const loadCartFromStorage = (): InitialStateType => {
  if (typeof window === 'undefined') {
    return initialState;
  }
  
  try {
    const savedCart = localStorage.getItem(STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : initialState;
  } catch (error) {
    console.error("Failed to load cart from storage:", error);
    return initialState;
  }
};

// Save cart to local storage - only when needed
const saveCartToStorage = (state: InitialStateType): void => {
  if (typeof window === 'undefined') {
    return;
  }
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save cart to storage:", error);
  }
};

// Pure function for state updates
const reducer = (state: InitialStateType, action: ShoppingCartActionType): InitialStateType => {
  let newState: InitialStateType;

  switch (action.type) {
    case "ADD_PRODUCT": {
      // If product is already in cart, do nothing (idempotent)
      if (state.products.some(item => item.product.id === action.product.id)) {
        return state;
      }

      // Add new Product
      const newProducts = [
        ...state.products,
        {
          product: action.product,
          quantity: 1,
        },
      ];
      
      newState = {
        ...state,
        products: newProducts,
        ...calculateTotals(newProducts),
      };
      
      // Show toast with ID to prevent duplicates
      toast.success(`${action.product.name} added to cart`, {
        id: TOAST_IDS.ADD_PRODUCT + action.product.id,
      });
      break;
    }
    
    case "ADD_PRODUCTS": {
      // Add many products (idempotent)
      const newProducts = [...state.products];
      let changed = false;
      
      for (const product of action.products) {
        if (!newProducts.some(item => item.product.id === product.product.id)) {
          newProducts.push(product);
          changed = true;
        }
      }
      
      // Only update state if products were actually added
      if (!changed) {
        return state;
      }
      
      newState = {
        ...state,
        products: newProducts,
        ...calculateTotals(newProducts),
      };
      break;
    }
    
    case "REMOVE_PRODUCT": {
      const productIndex = state.products.findIndex(
        item => item.product.id === action.product.id
      );

      // Product was not in cart (idempotent)
      if (productIndex === -1) {
        return state;
      }
      
      // Remove Product
      const newProducts = [...state.products];
      const product = newProducts[productIndex];
      
      newProducts.splice(productIndex, 1);
      
      toast.success(`${product.product.name} removed from cart`, {
        id: TOAST_IDS.REMOVE_PRODUCT + product.product.id,
      });

      newState = {
        ...state,
        products: newProducts,
        ...calculateTotals(newProducts),
      };
      break;
    }
    
    case "UPDATE_QUANTITY": {
      // If product is not in cart, do nothing (idempotent)
      const productIndex = state.products.findIndex(
        item => item.product.id === action.product.id
      );

      if (productIndex === -1) {
        return state;
      }
      
      // Grab reference to product
      const newProducts = [...state.products];
      const product = { ...newProducts[productIndex] };

      // Increment quantity
      if (action.increment) {
        product.quantity += 1;
        newProducts[productIndex] = product;
        
        newState = {
          ...state,
          products: newProducts,
          ...calculateTotals(newProducts),
        };
      }
      // Decrement quantity
      else {
        // If quantity is 1, remove product from cart
        if (product.quantity === 1) {
          newProducts.splice(productIndex, 1);
          
          toast.success(`${product.product.name} removed from cart`, {
            id: TOAST_IDS.REMOVE_PRODUCT + product.product.id,
          });
        } else {
          // Decrease quantity
          product.quantity -= 1;
          newProducts[productIndex] = product;
        }
        
        newState = {
          ...state,
          products: newProducts,
          ...calculateTotals(newProducts),
        };
      }
      break;
    }
    
    case "CLEAR_CART":
      // Only clear if there are products (idempotent)
      if (state.products.length === 0) {
        return state;
      }
      
      newState = initialState;
      toast.info("Cart cleared", {
        id: TOAST_IDS.CLEAR_CART,
      });
      break;
      
    default:
      return state;
  }
  
  // Save to local storage
  saveCartToStorage(newState);
  return newState;
};

// Memoize the CartProvider to prevent unnecessary re-renders of children
const CartProvider = memo(({ children, value }: { children: ReactNode, value: ShoppingCartContextType }) => {
  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
});

CartProvider.displayName = 'CartProvider';

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize cart from localStorage after first render only on client
  useIsomorphicLayoutEffect(() => {
    const savedCart = loadCartFromStorage();
    
    if (savedCart.products.length > 0) {
      dispatch({ 
        type: "ADD_PRODUCTS", 
        products: savedCart.products 
      });
    }
    
    setIsInitialized(true);
  }, []);

  // Memoized callbacks to prevent unnecessary re-renders
  const addProduct = useCallback((product: Product) => {
    // Only allow cart operations after initialization
    if (!isInitialized) return false;
    
    dispatch({ type: "ADD_PRODUCT", product });
    return true;
  }, [isInitialized]);

  const removeProduct = useCallback((product: Product) => {
    if (!isInitialized) return false;
    
    dispatch({ type: "REMOVE_PRODUCT", product });
    return true;
  }, [isInitialized]);

  const clearCart = useCallback(() => {
    if (!isInitialized) return false;
    
    dispatch({ type: "CLEAR_CART" });
    return true;
  }, [isInitialized]);

  const increaseQuantity = useCallback((product: Product) => {
    if (!isInitialized) return false;
    
    dispatch({ type: "UPDATE_QUANTITY", product, increment: true });
    return true;
  }, [isInitialized]);

  const decreaseQuantity = useCallback((product: Product) => {
    if (!isInitialized) return false;
    
    dispatch({ type: "UPDATE_QUANTITY", product, increment: false });
    return true;
  }, [isInitialized]);

  const isProductInCart = useCallback(
    (product: Product) => {
      return state.products.some((p) => p.product.id === product.id);
    },
    [state.products]
  );

  const addProducts = useCallback((products: ShoppingCartProductsType[]) => {
    if (!isInitialized) return false;
    
    dispatch({ type: "ADD_PRODUCTS", products });
    return true;
  }, [isInitialized]);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    ...state,
    addProduct,
    removeProduct,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    isProductInCart,
    addProducts,
  }), [
    state,
    addProduct,
    removeProduct,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    isProductInCart,
    addProducts
  ]);

  return <CartProvider value={contextValue}>{children}</CartProvider>;
};
