import React from "react";
import CartClient from "./CartClient";
import { getCurrentuser } from "../../../getUser/currentUser";
import Main from "@/components/Main";

const page = async () => {
  const currentUser = await getCurrentuser();
  return (
    <Main className="mt-8 mx-auto">
      <div className="px-3">
        <CartClient currentUser={currentUser} />
      </div>
    </Main>
  );
};

export default page;
