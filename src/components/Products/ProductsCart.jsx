"use client";
import Image from "next/image";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";
import { truncateText } from "../../utils/truncateText";
import { formatPrice } from "../../utils/formatPrice";

const ProductCart = ({ data }) => {
  const router = useRouter();

  const productRating =
    data.reviews.reduce((acc, item) => item.rating + acc, 0) /
    data.reviews.length;

  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="cursor-pointer rounded-xl border border-gray-200 bg-white shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-md"
    >
      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden rounded-t-xl">
        <Image
          alt={data.name}
          src={data.images[0].image}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <h3 className="text-base font-medium text-gray-800 mb-1">
          {truncateText(data.name)}
        </h3>

        {/* Rating */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <Rating
            value={productRating || 0}
            precision={0.5}
            readOnly
            size="small"
          />
          <span className="text-xs text-gray-500">({data.reviews.length})</span>
        </div>

        {/* Price */}
        <div className="text-lg font-semibold text-orange-400">
          {formatPrice(data.price)}
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
