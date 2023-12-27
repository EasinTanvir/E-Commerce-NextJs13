import React from "react";
import LoginForm from "./LoginForm";
import { getCurrentuser } from "../../../getUser/currentUser";
import FormWrapp from "../../components/FormWrapp";

const login = async () => {
  const currentUser = await getCurrentuser();
  return (
    <div className="container mx-auto">
      <FormWrapp>
        <LoginForm currentUser={currentUser} />
      </FormWrapp>
    </div>
  );
};

export default login;
