import React from "react";
import getOrders from "../../../actions/getOrder";
import MyOrder from "./MyOrder";
import { getCurrentuser } from "../../../getUser/currentUser";
import Link from "next/link";
const page = async () => {
  const user = await getCurrentuser();

  const order = await getOrders(user.id);

  if (order.length === 0) {
    return (
      <>
        <div className="flex flex-col gap-2 justify-center items-center h-[600px]">
          <h1 className="text-red-700 md:text-4xl text-md font-semibold">
            You Don't have any order yet
          </h1>
          <Link href="/">
            <button className="bg-teal-700 text-white px-4 py-1 rounded-md">
              Continue Shopping
            </button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <div>
      <MyOrder order={order} />
    </div>
  );
};

export default page;
