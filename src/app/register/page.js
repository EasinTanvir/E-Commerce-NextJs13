import React from "react";
import RegisterForm from "./RegisterForm";
import { getCurrentuser } from "../../../getUser/currentUser";

const page = async () => {
  const currentUser = await getCurrentuser();
  return <RegisterForm currentUser={currentUser} />;
};

export default page;
