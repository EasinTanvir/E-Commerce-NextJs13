import React from "react";
import Summary from "./Summary/Summary";
import getProducts from "../../../actions/getProduct";
import getUser from "../../../actions/getUser";
import getOrders from "../../../actions/getOrder";

const page = async () => {
  const products = await getProducts({ category: "" });
  const users = await getUser();
  const orders = await getOrders();
  return (
    <div className="p-8">
      <Summary products={products} users={users} orders={orders} />
    </div>
  );
};

export default page;
