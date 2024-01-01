"use client";
import Link from "next/link";
import { Rating } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import SetColor from "./SetColor";
import SetQuantity from "./SetQuantity";
import ProductImage from "./ProductImage";
import { useCart } from "../../../hooks/useCart";
import { IoMdCheckmarkCircle } from "react-icons/io";
const ProductDetails = ({ product }) => {
  const { cartProduct, hadleAddProductCart } = useCart();
  const [isProductExist, setIsProductExist] = useState(false);

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

  useEffect(() => {
    setIsProductExist(false);
    const findIndex = cartProduct?.findIndex((item) => item.id === product.id);
    if (findIndex > -1) {
      setIsProductExist(true);
    }
  }, [cartProduct]);

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <div className="text-justify">{product.desc}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">Category :</span> {product.category}
        </div>
        <div>
          <span className="font-semibold">Brand :</span> {product.brand}
        </div>{" "}
        <div
          className={`${product.inStock ? "text-teal-400" : "text-rose-400"}`}
        >
          {" "}
          {product.inStock ? "In Stock" : "Out of Stock"}
        </div>
        <Horizontal />
        {product.inStock && (
          <>
            {isProductExist ? (
              <>
                <p className="mb-2 text-stone-500 flex items-center gap-1">
                  <IoMdCheckmarkCircle className="text-teal-400" size={20} />
                  <span>Product added to cart</span>
                </p>
                <Link href="/cart">
                  <button className="bg-teal-500 text-white border-none rounded-md py-2 px-5 hover:text-gray-300">
                    View Cart
                  </button>
                </Link>
              </>
            ) : (
              <>
                {" "}
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
                <button
                  onClick={() => hadleAddProductCart(cardProduct)}
                  className="w-80 px-4 py-4 bg-gray-600 text-white rounded-md hover:text-gray-300"
                >
                  Add To Cart
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
