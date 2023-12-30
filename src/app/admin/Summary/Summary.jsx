"use client";

import { formatNumber, formatPrice } from "@/utils/formatPrice";
import { useEffect, useState } from "react";

const Summary = ({ products, users, orders }) => {
  console.log(orders);
  const [summaryData, setSummaryData] = useState({
    sale: {
      label: "Total Sale",
      digit: 0,
    },
    products: {
      label: "Total Products",
      digit: 0,
    },
    orders: {
      label: "Total Orders",
      digit: 0,
    },
    paidOrders: {
      label: "Paid Orders",
      digit: 0,
    },
    unpaidOrders: {
      label: "UnPaid Orders",
      digit: 0,
    },
    users: {
      label: "Total Users",
      digit: 0,
    },
  });

  useEffect(() => {
    setSummaryData((prev) => {
      let tempData = { ...prev };

      const totalSale = orders.reduce((acc, item) => {
        if (item.status === "complete") {
          return acc + item.amount;
        } else {
          return acc;
        }
      }, 0);
      const paidOrder = orders.filter((prder) => {
        return orders.status === "complete";
      });
      const unpaidOrder = orders.filter((prder) => {
        return orders.status === "pending";
      });

      tempData.sale.digit = totalSale;
      tempData.orders.digit = orders.length;
      tempData.paidOrders.digit = paidOrder.length;
      tempData.unpaidOrders.digit = unpaidOrder.length;
      tempData.products.digit = products.length;
      tempData.users.digit = users.length;

      return tempData;
    });
  }, [orders, products, users]);
  const sumaryKeys = Object.keys(summaryData);
  return (
    <div className="max-w-[1150px] m-auto">
      <div className="text-center my-4">
        <h1 className="text-slate-600 text-2xl">Status</h1>
      </div>
      <div className="grid grid-cols-2 gap-3 ">
        {sumaryKeys &&
          sumaryKeys.map((items, i) => (
            <div
              className="rounded-lg p-4 border-2 flex flex-col items-center gap-2 transition"
              key={i}
            >
              <div className="text-2xl text-slate-700 font-bold">
                {summaryData[items].label === "Total Sale" ? (
                  <>{formatPrice(summaryData[items].digit)}</>
                ) : (
                  <>{formatNumber(summaryData[items].digit)}</>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Summary;
