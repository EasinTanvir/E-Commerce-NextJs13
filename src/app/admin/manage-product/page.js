export const dynamic = "force-dynamic";
import ManageProduct from "./ManageProduct";
import getProducts from "../../../../actions/getProduct";
import { getCurrentuser } from "../../../../getUser/currentUser";

const page = async () => {
  const products = await getProducts({ category: null });
  //console.log(products);
  const currentUser = await getCurrentuser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return (
      <div className="flex h-[300px] justify-center items-center">
        <h1 className="text-2xl text-red-600">Opps! Uanauthorized</h1>
      </div>
    );
  }
  return (
    <>
      <ManageProduct products={products} />
    </>
  );
};

export default page;
