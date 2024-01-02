export const dynamic = "force-dynamic";

import React, { Suspense } from "react";

import getOrders from "../../../actions/getOrder";
import MyOrder from "./MyOrder";
import { getCurrentuser } from "../../../getUser/currentUser";
import Link from "next/link";
import LoaderIcon from "@/components/LoaderIcon";

const OrderHelper = async () => {
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

  return <MyOrder order={order} />;
};

const page = async () => {
  return (
    <div className="p-8 ">
      <div className="mb-6 text-center">
        <h3 className="text-slate-800 text-2xl font-semibold">Manage Orders</h3>
      </div>
      <Suspense
        fallback={
          <div className="h-[300px] flex justify-center items-center">
            <div className="max-w-[200px] flex flex-col gap-1">
              <LoaderIcon />
              <div className="text-xl text-slate-700 font-semibold">
                Please Wait..........
              </div>
            </div>
          </div>
        }
      >
        <OrderHelper />
      </Suspense>
    </div>
  );
};

export default page;
