"use client";
import Avatar from "@mui/material/Avatar";
import Heading from "../Heading";
import moment from "moment";
import { Rating } from "@mui/material";
const ListRating = ({ products }) => {
  return (
    <div>
      <Heading title="Peodut Reviews" center={false} />
      <div className="mt-2 text-sm flex flex-col gap-2">
        {products?.reviews &&
          products.reviews.map((item) => (
            <div className="max-w-[400px] space-y-2" key={item.id}>
              <div className="flex gap-2 items-center">
                <div>
                  <Avatar
                    alt={item.user.name}
                    // src={item.user.image}
                    style={{ width: "25px", height: "25px" }}
                  />
                </div>
                <div className="font-semibold">{item.user.name}</div>
                <div>{moment(item.createdDate).fromNow()}</div>
              </div>{" "}
              <div className="flex gap-2 items-center">
                <Rating value={item.rating} readOnly />
              </div>
              <div className="ms-2">{item.comment}</div>
              <hr className="my-4" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListRating;
