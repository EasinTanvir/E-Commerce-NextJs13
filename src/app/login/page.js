import React from "react";
import LoginForm from "./LoginForm";
import { getCurrentuser } from "../../../getUser/currentUser";
import FormWrapp from "../../components/FormWrapp";

const login = async () => {
  const currentUser = await getCurrentuser();
  return <LoginForm currentUser={currentUser} />;
};

export default login;
