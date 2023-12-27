import React from "react";
import CheckOutClient from "./CheckOutClient";
import FormWrapp from "../../components/FormWrapp";

const page = () => {
  return (
    <div className="p-8">
      <FormWrapp>
        <CheckOutClient />
      </FormWrapp>
    </div>
  );
};

export default page;
