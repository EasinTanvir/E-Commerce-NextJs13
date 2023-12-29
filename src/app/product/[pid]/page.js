import ProductDetails from "../../../components/Products/ProductDetails";
import React from "react";

import ListRating from "../../../components/Products/ListRating";

import getProductsById from "../../../../actions/getProductById";

const productDetailsPage = async ({ params }) => {
  const products = await getProductsById(params.pid);

  if (!products) {
    return (
      <div className="flex justify-center mt-10">
        <h3 className="font-semibold text-red-700 text-2xl">
          No products found
        </h3>
      </div>
    );
  }
  return (
    <div className="p-8">
      <ProductDetails product={products} />
      <div className="flex flex-col mt-20 gap-4">
        <div>Add Rating</div>
        <div>
          <ListRating products={products} />
        </div>
      </div>
    </div>
  );
};

export default productDetailsPage;
