"use client";
import Heading from "@/components/Heading";
import Inputs from "@/components/inputs/Inputs";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ name: "", email: "", password: "" });

  const onSubmithandler = (data) => {
    console.log(data);
  };
  return (
    <>
      <Heading title="Register here" />
      <hr className="bg-slate-300 w-full h-px" />
      <div className="w-full">
        <button className="bg-teal-950 flex items-center gap-2 justify-center text-white py-3 rounded-md  w-full">
          <span>Sign up with google</span>
          <AiOutlineGoogle />
        </button>
      </div>
      <Inputs
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="text"
      />
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
          Register
        </button>
      </div>{" "}
      <div className=" w-full">
        <p className="text-sm text-slate-600">
          Already have an account?{" "}
          <Link className="underline font-semibold" href="/login">
            LogIn
          </Link>
        </p>
      </div>
    </>
  );
};

export default RegisterForm;
