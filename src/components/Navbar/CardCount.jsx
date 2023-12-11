"use client";
import { useRouter } from "next/navigation";
import { useCart } from "../../../hooks/useCart";
import { CiShoppingCart } from "react-icons/ci";
const CardCount = () => {
  const router = useRouter();
  const { cartProduct, clearCart, cartTotalPrice, cartTotalQty } = useCart();
  return (
    <div
      onClick={() => router.push("/cart")}
      className="relative cursor-pointer "
    >
      <div className="text-3xl">
        <CiShoppingCart />
      </div>
      <span className="absolute top-[-10px] right-[-10px] text-white bg-teal-800 text-xs rounded-full w-6 h-6 flex justify-center items-center">
        {cartTotalQty}
      </span>
    </div>
  );
};

export default CardCount;
