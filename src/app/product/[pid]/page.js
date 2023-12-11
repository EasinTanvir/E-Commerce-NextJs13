import ListRating from "@/components/Products/ListRating";
import ProductDetails from "@/components/Products/ProductDetails";
import React from "react";
import { products } from "@/utils/products";

const productDetailsPage = ({ params }) => {
  const productId = params.pid;
  console.log(productId);
  const singleProduct = products.find((item) => item.id === productId);
  return (
    <div className="p-8">
      <ProductDetails product={singleProduct} />
      <div className="flex flex-col mt-20 gap-4">
        <div>Add Rating</div>
        <div>
          <ListRating products={singleProduct} />
        </div>
      </div>
    </div>
  );
};

export default productDetailsPage;
