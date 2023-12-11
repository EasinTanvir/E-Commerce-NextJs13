"use client";
import Heading from "@/components/Heading";
import { useCart } from "../../../hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import ItemContent from "./ItemContent";

const CartClient = () => {
  const { cartProduct } = useCart();
  if (!cartProduct || cartProduct.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">cart is empty</div>
        <div>
          <Link
            href="/"
            className="flex gap-2 items-center mt-2 text-slate-500"
          >
            <MdArrowBack />
            <span>Start Shoping</span>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Heading title="Shopping cart" center />
      <div className="grid grid-cols-5 gap-4 pb-2 text-sm font-semibold items-center mt-5">
        <div className="  col-span-2 justify-self-start">Product</div>
        <div className=" justify-self-center">Price</div>
        <div className=" justify-self-center">Quantity</div>
        <div className=" justify-self-end">Total</div>
      </div>
      <div>
        {cartProduct.length > 0 &&
          cartProduct.map((item) => <ItemContent key={item.id} item={item} />)}
      </div>
      <div className="border-t-[1.5px] border-slate-200 py-4 flex sm:flex-row sm:px-0 px-2 flex-col sm:justify-between gap-4">
        <div>
          <button className="border border-slate-300 py-2 px-4 rounded-sm text-slate-800 hover:text-slate-400 hover:scale-105 transition duration-500">
            Clear Cart
          </button>
        </div>
        <div className="flex text-sm gap-1 flex-col">
          <div className="flex justify-between w-full text-base font-semibold">
            <span>Subtotal</span>
            <span>$100</span>
          </div>
          <p className="text-slate-500">
            Taxes and shipping calculate at checkout
          </p>
          <button className="border font-semibold border-slate-300 py-2 px-4 rounded-sm text-slate-800 hover:text-slate-400 hover:scale-105 transition duration-500">
            Checkout
          </button>
          <Link
            href="/"
            className="flex gap-2 items-center mt-2 text-slate-500"
          >
            <MdArrowBack />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
