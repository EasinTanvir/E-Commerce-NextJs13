"use client";

import { Rating } from "@mui/material";

const ProductDetails = ({ product }) => {
  const productRating =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length;

  const Horizontal = () => {
    return <hr className="w-[30%] my-2" />;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="col-span-1">Image</div>
      <div className="col-span-1 flex flex-col gap-2 text-slate-500 text-sm">
        <h1 className="text-slate-700 text-3xl font-medium">{product.name}</h1>
        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">Category :</span> {product.category}
        </div>
        <div>
          <span className="font-semibold">Brand :</span> {product.brand}
        </div>{" "}
        <div
          className={`${product.instock ? "text-teal-400" : "text-rose-400"}`}
        >
          {" "}
          {product.instock ? "In Stock" : "Out of Stock"}
        </div>
        <Horizontal />
      </div>
    </div>
  );
};

export default ProductDetails;
