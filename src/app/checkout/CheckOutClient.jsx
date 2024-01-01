"use client";
import toast from "react-hot-toast";
import React, { useCallback, useEffect, useState } from "react";
import { useCart } from "../../../hooks/useCart";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import Link from "next/link";
import CheckOutPage from "./CheckOutPage";
import FormWrapp from "@/components/FormWrapp";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY);

const CheckOutClient = () => {
  const { handlePaymentIntent, cartProduct, paymentIntent } = useCart();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [hadler, setHandler] = useState(false);

  const appearance = {
    theme: "stripe",
    labels: "floating",
  };
  const options = {
    clientSecret,
    appearance,
  };
  const handlePaymentSuccess = useCallback((value) => {
    setPaymentSuccess(value);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-2xl text-red-400">Loading.......</p>
      </div>
    );
  }

  const onPayHandler = () => {
    if (cartProduct) {
      setLoading(true);

      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cartProduct,
          payment_intent_id: paymentIntent,
        }),
      })
        .then((res) => {
          if (res.status === 401) {
            console.log("err");
          }
          return res.json();
        })
        .then((data) => {
          setClientSecret(data.paymentIntent.client_secret);
          handlePaymentIntent(data.paymentIntent.id);
          setLoading(false);
        })
        .catch((err) => {
          //toast.error(err);
          console.log(err);
        });
    }
  };

  return (
    <div className="w-full">
      {!clientSecret && (
        <div>
          <>
            <CheckOutPage onClikHandler={onPayHandler} />
          </>
        </div>
      )}

      {clientSecret && cartProduct && !paymentSuccess && (
        <div className="max-w-[650px] mx-auto my-10">
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm
              clientSecret={clientSecret}
              handlePaymentSuccess={handlePaymentSuccess}
            />
          </Elements>
        </div>
      )}

      {error && <div className="text-center text-rose-700">{error}</div>}
      {paymentSuccess && (
        <div className="flex flex-col gap-4 items-center">
          <div className="text-teal-400 text-center">Payment Success</div>
          <div>
            <Link href="/order">
              <button className="bg-teal-400 px-4 py-2 rounded-md text-white font-semibold">
                View your orders
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOutClient;
