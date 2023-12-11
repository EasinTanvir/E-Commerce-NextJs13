import FormWrapp from "@/components/FormWrapp";
import React from "react";
import LoginForm from "./LoginForm";

const login = () => {
  return (
    <div className="container mx-auto">
      <FormWrapp>
        <LoginForm />
      </FormWrapp>
    </div>
  );
};

export default login;
