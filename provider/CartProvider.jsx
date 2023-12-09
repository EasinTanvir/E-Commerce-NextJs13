"use client";

import { CardContextProvider } from "../hooks/useCart";

const CartProvider = ({ children }) => {
  return <CardContextProvider>{children}</CardContextProvider>;
};

export default CartProvider;
