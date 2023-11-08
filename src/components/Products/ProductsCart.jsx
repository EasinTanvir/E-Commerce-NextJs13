"use client";
import Image from "next/image";
import { truncateText } from "@/utils/truncateText";
import { formatPrice } from "@/utils/formatPrice";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";

const ProductCart = ({ data }) => {
  const navigate = useRouter();

  const productRating =
    data.reviews.reduce((acc, item) => item.rating + acc, 0) /
    data.reviews.length;

  console.log(productRating);
  return (
    <div
      onClick={() => navigate.push(`/product/${data.id}`)}
      className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 duration-300 text-center text-sm"
    >
      <div className="flex flex-col items-center w-full gap-1">
        <div className="aspect-square relative overflow-hidden w-full">
          <Image
            src={data.images[0].image}
            fill
            className="object-contain w-full h-full"
          />
        </div>
        <div className="mt-4">{truncateText(data.name)}</div>
        <div>
          <Rating value={productRating} readOnly />
        </div>
        <div>{data.reviews.length}</div>
        <div className="font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCart;
