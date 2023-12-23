"use client";

import React, { useEffect, useState } from "react";
import { useCart } from "../../../hooks/useCart";
import axios from "axios";

const CheckOutClient = () => {
  const { handlePaymentIntent, cartProduct, paymentIntent } = useCart();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const sendData = {
        items: cartProduct,
        payment_intent_id: paymentIntent,
      };

      try {
        const { data } = await axios.post(
          "/api/create-payment-intent",
          sendData
        );
        console.log(data);
      } catch (err) {
        setError(err.response.data.message);
        console.log(err.response.data.message);
      } finally {
        setLoading(false);
      }
    };

    if (cartProduct.length !== 0) {
      fetchData();
    }
  }, [cartProduct, paymentIntent]);
  return <div>CheckOutClient</div>;
};

export default CheckOutClient;
