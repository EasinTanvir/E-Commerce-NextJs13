import React from "react";
import LoginForm from "./LoginForm";

import FormWrapp from "../../components/FormWrapp";

const login = async () => {
  return (
    <div className="container mx-auto">
      <FormWrapp>
        <LoginForm />
      </FormWrapp>
    </div>
  );
};

export default login;
