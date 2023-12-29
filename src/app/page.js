import HomeBanner from "../components/Banner/HomeBanner";

import ProductCart from "../components/Products/ProductsCart";
import getProducts from "../../actions/getProduct";

const page = async () => {
  const products = await getProducts({ category: null });

  if (products.length === 0) {
    return (
      <div className="text-2xl text-red-500">No products found.......</div>
    );
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
      return array;
    }
  }

  const shuffleProduct = shuffleArray(products);
  return (
    <div className="P-8 container mx-auto px-4 sm:px-0">
      <div className="my-5 md:mx-10 mx-0">
        <HomeBanner />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-8">
        {shuffleProduct?.map((item) => (
          <ProductCart data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default page;
