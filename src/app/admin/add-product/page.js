import React from "react";
import FormWrapp from "../../../components/FormWrapp";
import AddProductForm from "./AddProductForm";
import { getCurrentuser } from "../../../../getUser/currentUser";

const page = async () => {
  const currentUser = await getCurrentuser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return (
      <div className="flex h-[300px] justify-center items-center">
        <h1 className="text-2xl text-red-600">Opps! Uanauthorized</h1>
      </div>
    );
  }
  return (
    <div className="p-8">
      <div className="container mx-auto">
        <FormWrapp>
          <AddProductForm />
        </FormWrapp>
      </div>
    </div>
  );
};

export default page;
