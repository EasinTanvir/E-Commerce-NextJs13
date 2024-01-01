import React from "react";
import OrderDetails from "./OrderDetails";
import { getOrderById } from "../../../../actions/getOrder";

const page = async ({ params: { id } }) => {
  const order = await getOrderById(id);
  return (
    <div>
      <OrderDetails order={order} />
    </div>
  );
};

export default page;
