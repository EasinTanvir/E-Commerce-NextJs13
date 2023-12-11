import React, { useCallback, useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
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
      } else {
        updatedCart = [product];
      }
      localStorage.setItem("cartData", JSON.stringify(updatedCart));
      toast.success("Product added to cart", {
        position: "bottom-center",
        style: {
          color: "#fff",
          background: "rgb(51 65 85)",
        },
      });

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
