"use client";

import { Rating } from "@mui/material";
import { useCallback, useState } from "react";
import SetColor from "./SetColor";
import SetQuantity from "./SetQuantity";
import ProductImage from "./ProductImage";

const ProductDetails = ({ product }) => {
  const { id, name, desccription, category, brand, images, price } = product;
  const [cardProduct, setCardProduct] = useState({
    id,
    name,
    desccription,
    category,
    brand,
    selectedImage: { ...images[0] },
    quantity: 1,
    price,
  });

  const productRating =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length;

  const Horizontal = () => {
    return <hr className="w-[30%] my-2" />;
  };

  const handleColorSet = useCallback(
    (value) => {
      console.log(value);
      setCardProduct((prevProduct) => {
        return { ...prevProduct, selectedImage: value };
      });
    },
    [cardProduct]
  );

  const handleQtyIncrease = useCallback(() => {
    if (cardProduct.quantity === 15) return;

    setCardProduct((prevState) => ({
      ...prevState,
      quantity: prevState.quantity + 1,
    }));
  }, [cardProduct]);

  const handleQtyDecrease = useCallback(() => {
    if (cardProduct.quantity === 1) return;

    setCardProduct((prevState) => ({
      ...prevState,
      quantity: prevState.quantity - 1,
    }));
  }, [cardProduct]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="col-span-1">
        <ProductImage
          cardProduct={cardProduct}
          product={product}
          handleColorSet={handleColorSet}
        />
      </div>
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
        <div>
          <SetColor
            images={images}
            handleColorSet={handleColorSet}
            cardProduct={cardProduct}
          />
        </div>
        <Horizontal />
        <div>
          <SetQuantity
            cardProduct={cardProduct}
            cardCounter={false}
            handleQtyIncrease={handleQtyIncrease}
            handleQtyDecrease={handleQtyDecrease}
          />
        </div>
        <Horizontal />
        <button className="w-80 px-4 py-4 bg-gray-600 text-white rounded-md hover:text-gray-300">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
