import React, { useCallback, useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const CartContext = React.createContext();

export const CardContextProvider = ({ children }) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartData")
      ? JSON.parse(localStorage.getItem("cartData"))
      : [];

    setCartProduct(cartItems);
  }, []);

  useEffect(() => {
    if (cartProduct.length === 0) return;

    const getPrice = () => {
      const { total, qty } = cartProduct.reduce(
        (acc, item) => {
          const totalPrice = item.price * item.quantity;
          acc.total += totalPrice;
          acc.qty += item.quantity;
          return acc;
        },
        { total: 0, qty: 0 }
      );

      setCartTotalQty(qty);
      setCartTotalPrice(total);
    };

    getPrice();
  }, [cartProduct]);
  console.log(cartTotalPrice);
  console.log(cartTotalQty);
  console.log(cartProduct);

  const hadleAddProductCart = useCallback(
    (product) => {
      let updatedCart;
      setCartProduct((prevData) => {
        if (prevData) {
          updatedCart = [...prevData, product];
        } else {
          updatedCart = [product];
        }

        return updatedCart;
      });
      localStorage.setItem("cartData", JSON.stringify(updatedCart));
      toast.success("Product added to cart", {
        position: "bottom-center",
        style: {
          color: "#fff",
          background: "rgb(51 65 85)",
        },
      });
    },
    [cartProduct]
  );

  const removeItemFromCart = useCallback(
    (product) => {
      let updateCart;

      setCartProduct((prebData) => {
        updateCart = prebData.filter((item) => item.id !== product.id);
        return updateCart;
      });

      localStorage.setItem("cartData", JSON.stringify(updateCart));
      toast.success("Product remove from cart", {
        position: "bottom-center",
        style: {
          color: "#fff",
          background: "rgb(51 65 85)",
        },
      });
    },
    [cartProduct]
  );

  const handleQtyIncrease = useCallback(
    (product) => {
      let updateProduct;
      if (product.quantity === 15) {
        return toast.error("Opps! Maximum amount reached");
      }
      updateProduct = [...cartProduct];
      const existingProduct = cartProduct.findIndex(
        (item) => item.id === product.id
      );

      if (existingProduct > -1) {
        updateProduct[existingProduct].quantity = ++updateProduct[
          existingProduct
        ].quantity;
      }

      setCartProduct(updateProduct);
      localStorage.setItem("cartData", JSON.stringify(updateProduct));
    },
    [cartProduct]
  );
  const handleQtyDecrease = useCallback(
    (product) => {
      let updateProduct;
      if (product.quantity === 1) {
        return toast.error("Opps! Minimum amount reached");
      }
      updateProduct = [...cartProduct];
      const existingProduct = cartProduct.findIndex(
        (item) => item.id === product.id
      );

      if (existingProduct > -1) {
        updateProduct[existingProduct].quantity = --updateProduct[
          existingProduct
        ].quantity;
      }

      setCartProduct(updateProduct);
      localStorage.setItem("cartData", JSON.stringify(updateProduct));
    },
    [cartProduct]
  );

  const clearCart = () => {
    setCartProduct([]);
    setCartTotalQty(0);
    localStorage.setItem("cartData", JSON.stringify([]));
  };

  const sendData = {
    cartTotalQty,
    cartProduct,
    hadleAddProductCart,
    removeItemFromCart,
    handleQtyIncrease,
    handleQtyDecrease,
    clearCart,
    cartTotalPrice,
    cartTotalQty,
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
