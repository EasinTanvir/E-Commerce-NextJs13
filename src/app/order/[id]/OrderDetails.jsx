import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";

const OrderDetails = ({ order }) => {
  console.log(order);
  const cartProduct = [];

  return (
    <div className="md:p-8  px-2  py-4 gap-3">
      <div className="flex flex-col gap-10 ">
        <div>
          <h1 className="text-slate-800 font-semibold md:text-3xl text-lg uppercase">
            PAYMENT METHOD
          </h1>
          <div className="mt-1">
            <h2 className="md:text-xl text-sm text-slate-800">Stripe</h2>
            <h4 className="md:text-md text-sm text-slate-700">
              Status :{" "}
              <span
                className={`${
                  order.status === "pending"
                    ? "text-rose-800 "
                    : "text-teal-800"
                } font-semibold `}
              >
                {order.status === "pending" ? "NotPaid" : "Paid"}
              </span>
            </h4>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-slate-800 font-semibold md:text-3xl text-lg uppercase">
              Delivery Status
            </h1>
            <div className="mt-1">
              <h4 className="md:text-xl text-sm text-slate-700">
                Status :{" "}
                <span
                  className={`${
                    order.delivaryStatus === "pending"
                      ? "text-rose-800 "
                      : "text-teal-800"
                  } font-semibold`}
                >
                  {order.delivaryStatus === "pending"
                    ? "Not Deliverd"
                    : "Delivered"}
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div className=" relative ">
          {order.address && (
            <div className="border ">
              <h1 className="text-slate-800 my-2 font-semibold md:text-3xl text-xl uppercase">
                SHIPPING
              </h1>
              <div className="md:text-md text-xs">
                <h2>
                  Name :{" "}
                  <span className="text-slate-700 font-semibold">
                    {order.user.name}
                  </span>
                </h2>
                <h2>
                  {" "}
                  Email :{" "}
                  <span className="text-slate-700 font-semibold">
                    {order.user.email}
                  </span>
                </h2>{" "}
                <h2>
                  {" "}
                  City :{" "}
                  <span className="text-slate-700 font-semibold">
                    {order.address.city}
                  </span>
                </h2>
                <h2>
                  {" "}
                  Country :{" "}
                  <span className="text-slate-700 font-semibold">
                    {order.address.country}
                  </span>
                </h2>{" "}
                <h2>
                  {" "}
                  Address :{" "}
                  <span className="text-slate-700 font-semibold">
                    {order.address.line1}, {order.address.line2}
                  </span>
                </h2>
                <h2>
                  {" "}
                  Postal Code :{" "}
                  <span className="text-slate-700 font-semibold">
                    {order.address.postal_code}
                  </span>
                </h2>
              </div>
            </div>
          )}
          {order.status === "pending" && (
            <button className="bg-teal-800 text-2xl font-semibold hover:text-slate-300 text-white px-8 py-2 rounded-md absolute right-0 bottom-0">
              Pay Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
