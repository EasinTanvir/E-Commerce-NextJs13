"use client";
import Image from "next/image";

const ProductImage = ({ cardProduct, product, handleColorSet }) => {
  return (
    <div className="grid grid-cols-6 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
      <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        {product.images.map((item) => (
          <div
            onClick={() => handleColorSet(item)}
            key={item.color}
            className={`relative w-[80%] aspect-square rounded border-teal-300 ${
              cardProduct.selectedImage.color === item.color
                ? "border-[1.5px]"
                : "border-none"
            }`}
          >
            <Image src={item.image} fill className="object-contain" />
          </div>
        ))}
      </div>
      <div className="col-span-5 relative aspect-square">
        <Image
          fill
          src={cardProduct.selectedImage.image}
          className="w-full h-full max-h-[500px] min-h-[300px] sm:min-h-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default ProductImage;
