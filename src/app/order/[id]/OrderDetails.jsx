import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";

const OrderDetails = ({ order }) => {
  console.log(order);
  const cartProduct = [];

  return (
    <div className="flex lg:justify-between p-8 lg:flex-row flex-col gap-3">
      <div className="flex flex-col gap-10  w-full">
        <div>
          <h1 className="text-slate-800 font-semibold text-3xl uppercase">
            PAYMENT METHOD
          </h1>
          <div className="mt-1">
            <h2 className="text-xl text-slate-800">Stripe</h2>
            <h4 className="text-md text-slate-700">
              Status :{" "}
              <span
                className={`${
                  order.status === "pending"
                    ? "text-rose-800 "
                    : "text-teal-800"
                } font-semibold text-xl`}
              >
                {order.status === "pending" ? "NotPaid" : "Paid"}
              </span>
            </h4>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-slate-800 font-semibold text-3xl uppercase">
              Delivery Status
            </h1>
            <div className="mt-1">
              <h4 className="text-md text-slate-700">
                Status :{" "}
                <span
                  className={`${
                    order.delivaryStatus === "pending"
                      ? "text-rose-800 "
                      : "text-teal-800"
                  } font-semibold text-xl`}
                >
                  {order.delivaryStatus === "pending"
                    ? "Not Deliverd"
                    : "Delivered"}
                </span>
              </h4>
            </div>
          </div>
        </div>
        {/* <div className="my-t ">
          <h1 className="text-slate-800 mt-3 mb-5  font-semibold text-3xl uppercase">
            ORDER ITEMS
          </h1>
          <div className="flex flex-col gap-3">
            {cartProduct.map((item) => (
              <div className="border flex justify-between px-3" key={item.id}>
                <div className=" flex items-center gap-4 ">
                  <div className="w-[40px] h-[40px] relative  ">
                    {" "}
                    <Image
                      className="object-cover"
                      src={item.selectedImage.image}
                      fill
                    />
                  </div>
                  <span className="text-slate-700 font-semibold">
                    {item.name}
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="font-semibold">{item.quantity}</span>
                  <ImCross size={10} />
                  <span className="font-semibold">
                    {formatPrice(item.price)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
      <div className=" w-full relative ">
        {order.address && (
          <div className="border p-4">
            <h1 className="text-slate-800 my-2 font-semibold text-3xl uppercase">
              SHIPPING
            </h1>
            <div>
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
  );
};

export default OrderDetails;
