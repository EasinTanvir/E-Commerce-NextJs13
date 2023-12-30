import HomeBanner from "../components/Banner/HomeBanner";

import getProducts, {
  getFeatureProducts,
  getNewArrivalProducts,
} from "../../actions/getProduct";
import NotFound from "@/components/NotFound";
import ProductHelper from "@/components/Products/ProductHelper";

const page = async ({ params, searchParams }) => {
  const { category, searchTerm } = searchParams;
  const products = await getProducts({
    category,
    searchTerm,
  });
  const featureProducts = await getFeatureProducts();
  const newArrivalProducts = await getNewArrivalProducts();

  if (
    products.length === 0 &&
    featureProducts.length === 0 &&
    newArrivalProducts.length === 0
  ) {
    return (
      <>
        <NotFound />
      </>
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

  if (category || searchTerm) {
    return (
      <div className="text-center sm:px-2 relative">
        <ProductHelper products={products} />
      </div>
    );
  }
  return (
    <div className="   ">
      {!category && !searchTerm && (
        <div className="my-5 md:mx-10 mx-0 md:px-6 px-2 py-4">
          <HomeBanner />
        </div>
      )}

      <div className="text-center sm:px-2 relative">
        <h1 className="mt-16 mb-6 md:text-4xl text-3xl font-semibold text-slate-900">
          Featured Products
        </h1>

        <ProductHelper products={featureProducts} />
      </div>

      <div className="text-center px-2 relative">
        <h1 className="mt-16 mb-6 md:text-4xl text-3xl  font-semibold text-slate-900">
          New Arrivals
        </h1>

        <ProductHelper products={newArrivalProducts} />
      </div>
      <div className="text-center px-2 relative">
        <h1 className="mt-16 mb-6 md:text-4xl text-3xl  font-semibold text-slate-900">
          Premium Collections
        </h1>

        <ProductHelper products={products} />
      </div>
    </div>
  );
};

export default page;
