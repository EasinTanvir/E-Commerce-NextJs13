export const revalidate = 0;

import HomeBanner from "../components/Banner/HomeBanner";
import Link from "next/link";
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
  const premiumProducts = await getProducts({
    category: null,
  });

  if (products.length === 0) {
    return (
      <>
        <div className="flex flex-col gap-2 justify-center items-center h-[600px]">
          <h1 className="text-red-700 text-4xl font-semibold">
            No Product Found
          </h1>
          <Link href="/">
            <button className="bg-teal-700 text-white px-4 py-1 rounded-md">
              Go Back
            </button>
          </Link>
        </div>
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

  const shuffleProduct = shuffleArray(premiumProducts);

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

        <ProductHelper products={shuffleProduct} />
      </div>
    </div>
  );
};

export default page;
