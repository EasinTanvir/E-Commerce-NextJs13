import HomeBanner from "../components/Banner/HomeBanner";
import { products } from "../utils/products";

import ProductCart from "../components/Products/ProductsCart";

const page = () => {
  return (
    <div className="P-8 container mx-auto px-4 sm:px-0">
      <div className="my-5 md:mx-10 mx-0">
        <HomeBanner />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-8">
        {products.map((item) => (
          <ProductCart data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default page;
