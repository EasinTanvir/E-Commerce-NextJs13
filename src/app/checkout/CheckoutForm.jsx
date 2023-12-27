"use client";
import { formatPrice } from "../../utils/formatPrice";

import { useCart } from "../../../hooks/useCart";
import toast, { Toaster } from "react-hot-toast";
import {
  PaymentElement,
  useStripe,
  useElements,
  AddressElement,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
const CheckoutForm = ({ clientSecret, handlePaymentSuccess }) => {
  const { cartTotalPrice, clearCart, handlePaymentIntent } = useCart();
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  const price = formatPrice(cartTotalPrice);

  useEffect(() => {
    if (!stripe || !clientSecret) {
      return;
    }

    handlePaymentSuccess(false);
  }, [stripe]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    stripe
      .confirmPayment({
        elements,
        redirect: "if_required",
      })
      .then((result) => {
        if (!result.error) {
          toast.success("Chckout Success");
          clearCart();
          handlePaymentSuccess(true);
          handlePaymentIntent(null);
          setIsLoading(false);
        }
      });
  };
  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form className="mt-7" onSubmit={handleSubmit} id="payment-form">
      <div>
        <h1 className="text-slate-700 text-2xl font-semibold mb-6">
          Enter Payment Details
        </h1>
      </div>
      <h4 className="text-slate-700 text-lg font-semibold mb-6">
        Address Information
      </h4>
      <AddressElement
        options={{ mode: "shipping", allowedCountries: ["US", "KE", "BD"] }}
      />
      <hr />
      <h4 className="text-slate-700 text-lg font-semibold mt-6">
        Enter Information
      </h4>
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <div className="mt-4 text-center">
        <h4 className="text-slate-700 text-lg  mt-6">
          Total Price : <span className="font-bold">{price}</span>
        </h4>
      </div>
      <div className="text-center mt-4">
        <button
          type="submit"
          className="bg-teal-600 w-full text-white font-semibold text-center  rounded-md py-2 hover:text-gray-300"
          disabled={isLoading || !stripe || !elements}
        >
          {isLoading ? "Loading" : "Pay Now"}
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
