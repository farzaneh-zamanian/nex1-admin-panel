import { createContext, useReducer } from "react";
import productReducer from "../src/reducer/productReducer";

const initialState = {
  cartProductsData: [],
  totalPrice: 0,
  productsQuantity: 0,
  checkOut: false,
};

export const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialState);

  //   PROVIDER
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
