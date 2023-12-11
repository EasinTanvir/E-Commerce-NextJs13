import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import Link from "next/link";
import Image from "next/image";
import SetQuantity from "@/components/Products/SetQuantity";
import { useCart } from "../../../hooks/useCart";

const ItemContent = ({ item }) => {
  const { removeItemFromCart, handleQtyIncrease, handleQtyDecrease } =
    useCart();
  return (
    <div className="grid grid-cols-5 md:text-md text-sm gap-4 border-t-[1.5px] py-4 items-center border-slate-300">
      <div className="col-span-2 justify-self-start flex sm:flex-row flex-col gap-2 md:gap-4">
        <Link href={`/product/${item.id}`}>
          <div className="w-[70px] aspect-square relative">
            <Image
              src={item.selectedImage.image}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`/product/${item.id}`}>{truncateText(item.name)}</Link>
          <div>{item.selectedImage.color}</div>
          <div className="w-[70px]">
            <button
              onClick={() => removeItemFromCart(item)}
              className="bg-red-700 text-xs text-white  py-1 px-2 rounded-sm hover:text-gray-400  mt-2"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="justify-self-center">{formatPrice(item.price)}</div>
      <div className="justify-self-center">
        <SetQuantity
          cardProduct={item}
          cardCounter={true}
          handleQtyIncrease={() => handleQtyIncrease(item)}
          handleQtyDecrease={() => handleQtyDecrease(item)}
        />
      </div>
      <div className="justify-self-end">
        {formatPrice(item.quantity * item.price)}
      </div>
    </div>
  );
};

export default ItemContent;
