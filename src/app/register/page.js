import FormWrapp from "@/components/FormWrapp";
import React from "react";
import RegisterForm from "./RegisterForm";
import { getCurrentuser } from "../../../getUser/currentUser";

const page = async () => {
  const currentUser = await getCurrentuser();
  return (
    <div className="container mx-auto">
      <FormWrapp>
        <RegisterForm currentUser={currentUser} />
      </FormWrapp>
    </div>
  );
};

export default page;
