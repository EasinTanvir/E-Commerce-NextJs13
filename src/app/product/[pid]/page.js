import ProductDetails from "../../../components/Products/ProductDetails";
import React from "react";
import Link from "next/link";
import ListRating from "../../../components/Products/ListRating";

import getProductsById from "../../../../actions/getProductById";
import AddRating from "../AddRating/AddRating";
import { getCurrentuser } from "../../../../getUser/currentUser";
import getProducts from "../../../../actions/getProduct";
import Main from "@/components/Main";

export async function generateMetadata({ params: { pid } }) {
  const post = await getProductsById(pid);

  return {
    title: post.name,
    description: post.desc,
  };
}

const productDetailsPage = async ({ params }) => {
  const products = await getProductsById(params.pid);
  const currentUser = await getCurrentuser();
  console.log(currentUser);

  if (!products) {
    return (
      <div className="flex h-[600px] flex-col gap-2 items-center justify-center mt-10">
        <h1 className="text-red-700 text-4xl font-semibold">No Products</h1>
        <Link href="/">
          <button className="bg-teal-700 text-white px-4 py-1 rounded-md">
            Go Back
          </button>
        </Link>
      </div>
    );
  }
  return (
    <Main className="py-4 mx-auto min-h-screen">
      <div className="mb-4">
        <Link href="/">
          <button className="bg-teal-700 text-white px-4 py-1 rounded-md">
            Go Back
          </button>
        </Link>
      </div>

      <ProductDetails product={products} />
      <div className="flex flex-col mt-20 gap-4">
        {currentUser && (
          <div>
            <AddRating product={products} user={currentUser} />
          </div>
        )}
        <div>
          <ListRating products={products} />
        </div>
      </div>
    </Main>
  );
};

export default productDetailsPage;
