import HomeBanner from "@/components/Banner/HomeBanner";
import React from "react";
import { products } from "@/utils/products";

import ProductCart from "@/components/Products/ProductsCart";

const page = () => {
  console.log("hello");
  return (
    <div className="P-8 container mx-auto px-4 sm:px-0">
      <div className=" xl:w-[90%] w-full mx-auto mt-6">
        <HomeBanner />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {products.map((item) => (
          <ProductCart data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default page;
