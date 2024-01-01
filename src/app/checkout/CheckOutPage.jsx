import React from "react";
import { useCart } from "../../../hooks/useCart";
import Image from "next/image";
import { ImCross } from "react-icons/im";
import { formatPrice } from "@/utils/formatPrice";
const CheckOutPage = ({ onClikHandler }) => {
  const { cartProduct } = useCart();

  return (
    <div className="flex lg:justify-between lg:flex-row flex-col gap-3">
      <div className="flex flex-col gap-10  w-full">
        <div>
          <h1 className="text-slate-800 font-semibold text-3xl uppercase">
            PAYMENT METHOD
          </h1>
          <div className="mt-1">
            <h2 className="text-xl text-slate-800">Paypal</h2>
            <h4 className="text-md text-slate-700">
              Status : <span className="font-bold text-rose-700">NotPaid</span>
            </h4>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-slate-800 font-semibold text-3xl uppercase">
              Delivery Status
            </h1>
            <div className="mt-1">
              <h4 className="text-md text-slate-700">
                Status :{" "}
                <span className="font-bold text-rose-700">Not Delivered</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="my-t ">
          <h1 className="text-slate-800 mt-3 mb-5  font-semibold text-3xl uppercase">
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
                  <span className="text-slate-700 font-semibold">
                    {item.name}
                  </span>
                </div>
                <div className="flex gap-2 items-center">
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
      </div>
      <div className=" w-full relative ">
        <button
          onClick={onClikHandler}
          className="bg-teal-800 text-2xl font-semibold hover:text-slate-300 text-white px-8 py-2 rounded-md absolute right-0 bottom-0"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default CheckOutPage;
