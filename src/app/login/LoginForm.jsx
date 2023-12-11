"use client";
"use client";
import Heading from "@/components/Heading";
import Inputs from "@/components/inputs/Inputs";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ email: "", password: "" });

  const onSubmithandler = (data) => {
    console.log(data);
  };
  return (
    <>
      <Heading title="Login Here" />
      <hr className="bg-slate-300 w-full h-px" />
      <div className="w-full">
        <button className="bg-teal-950 w-full flex items-center gap-2 justify-center text-white py-3 rounded-md ">
          <span>Continue with google</span>
          <AiOutlineGoogle />
        </button>
      </div>
      <Inputs
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="email"
      />
      <Inputs
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <div className=" w-full">
        <button
          onClick={handleSubmit(onSubmithandler)}
          className="bg-red-700 py-2 px-4 rounded-md border-none text-white font-semibold hover:text-gray-400 hover:scale-105 transition duration-200 "
        >
          Login
        </button>
      </div>{" "}
      <div className=" w-full">
        <p className="text-sm text-slate-600">
          Don't have an account?{" "}
          <Link className="underline font-semibold" href="/register">
            Register
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
