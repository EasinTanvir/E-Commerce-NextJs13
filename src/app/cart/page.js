import React from "react";
import CartClient from "./CartClient";
import { getCurrentuser } from "../../../getUser/currentUser";

const page = async () => {
  const currentUser = await getCurrentuser();
  return (
    <div className="mt-8">
      <div className="px-3">
        <CartClient currentUser={currentUser} />
      </div>
    </div>
  );
};

export default page;
