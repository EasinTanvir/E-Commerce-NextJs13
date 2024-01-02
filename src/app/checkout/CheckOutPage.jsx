import React from "react";
import { useCart } from "../../../hooks/useCart";
import Image from "next/image";
import { ImCross } from "react-icons/im";
import { formatPrice } from "@/utils/formatPrice";
const CheckOutPage = ({ onClikHandler }) => {
  const { cartProduct } = useCart();

  return (
    <div className="">
      <div className="flex flex-col gap-10  md:w-1/2 w-full">
        <div>
          <h1 className="text-slate-800 font-semibold md:text-3xl text-lg uppercase">
            PAYMENT METHOD
          </h1>
          <div className="mt-1">
            <h2 className="md:text-xl text-sm text-slate-800">Stripe</h2>
            <h4 className="md:text-md text-xs text-slate-700">
              Status : <span className="font-bold text-rose-700">NotPaid</span>
            </h4>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-slate-800 font-semibold md:text-3xl text-lg  uppercase">
              Delivery Status
            </h1>
            <div className="mt-1">
              <h4 className="md:text-md text-xs text-slate-700">
                Status :{" "}
                <span className="font-bold text-rose-700">Not Delivered</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="my-t ">
          <h1 className="text-slate-800 mt-3 mb-5  font-semibold md:text-3xl text-lg  uppercase">
            ORDER ITEMS
          </h1>
          <div className="flex flex-col gap-3">
            {cartProduct?.map((item) => (
              <div className="border flex justify-between px-3" key={item.id}>
                <div className=" flex items-center gap-4 ">
                  <div className="w-[40px] h-[40px] relative  ">
                    {" "}
                    <Image
                      className="object-cover"
                      src={item.selectedImage.image}
                      fill
                    />
                  </div>
                  <span className="text-slate-700 md:font-semibold text-xs md:text-lg">
                    {item.name}
                  </span>
                </div>
                <div className="flex md:text-md text-xs gap-2 items-center">
                  <span className="font-semibold">{item.quantity}</span>
                  <ImCross size={10} />
                  <span className="font-semibold">
                    {formatPrice(item.price)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" relative flex justify-start border mt-4 ">
          <button
            onClick={onClikHandler}
            className="bg-teal-800 md:text-2xl text-lg font-semibold hover:text-slate-300 text-white md:px-8 px-4 md:py-2 py-1 rounded-md "
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
