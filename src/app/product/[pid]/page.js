import ProductDetails from "../../../components/Products/ProductDetails";
import React from "react";

import ListRating from "../../../components/Products/ListRating";

import getProductsById from "../../../../actions/getProductById";
import AddRating from "../AddRating/AddRating";
import { getCurrentuser } from "../../../../getUser/currentUser";

const productDetailsPage = async ({ params }) => {
  const products = await getProductsById(params.pid);
  const currentUser = await getCurrentuser();

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
        <div>
          <AddRating product={products} user={currentUser} />
        </div>
        <div>
          <ListRating products={products} />
        </div>
      </div>
    </div>
  );
};

export default productDetailsPage;
