import FormWrapp from "../../components/FormWrapp";
import React from "react";
import RegisterForm from "./RegisterForm";

const page = async () => {
  return (
    <div className="container mx-auto">
      <FormWrapp>
        <RegisterForm />
      </FormWrapp>
    </div>
  );
};

export default page;
