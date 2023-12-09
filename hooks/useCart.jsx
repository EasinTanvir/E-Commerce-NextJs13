import React, { useCallback, useContext, useEffect, useState } from "react";

const CartContext = React.createContext();

export const CardContextProvider = ({ children }) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartData")
      ? JSON.parse(localStorage.getItem("cartData"))
      : [];

    setCartProduct(cartItems);
  }, []);

  const hadleAddProductCart = useCallback((product) => {
    setCartProduct((prevData) => {
      let updatedCart;

      if (prevData) {
        updatedCart = [...prevData, product];
        localStorage.setItem("cartData", JSON.stringify(updatedCart));
      } else {
        updatedCart = [product];
      }

      return updatedCart;
    });
  }, []);

  const sendData = {
    cartTotalQty,
    cartProduct,
    hadleAddProductCart,
  };

  return (
    <CartContext.Provider value={sendData}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be sed under a wrapped component");
  }

  return context;
};
