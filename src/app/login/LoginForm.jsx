"use client";
"use client";
import Heading from "@/components/Heading";
import Inputs from "@/components/inputs/Inputs";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginForm = ({ currentUser }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ email: "", password: "" });

  const onSubmithandler = async (datas) => {
    setIsLoading(true);

    signIn("credentials", {
      email: datas.email,
      password: datas.password,
      redirect: false,
    }).then((cb) => {
      if (cb?.ok) {
        router.push("/");
        setIsLoading(false);
        router.refresh();
        toast.success("Login Success");
      }
      if (cb?.error) {
        toast.error(cb.error);
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    if (currentUser) {
      router.push("/");
      router.refresh();
    }
  }, [currentUser]);

  if (currentUser) {
    return <p>Logged In Redirecting....</p>;
  }
  return (
    <>
      <Heading title="Login Here" />
      <hr className="bg-slate-300 w-full h-px" />
      <div className="w-full">
        <button
          onClick={() => signIn("google")}
          className="bg-teal-950 w-full flex items-center gap-2 justify-center text-white py-3 rounded-md "
        >
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
          {isLoading ? "Loading" : "Login"}
        </button>
      </div>
      <div className="w-full">
        <p className="text-sm text-slate-600">
          Don't have an account?
          <Link className="underline font-semibold" href="/register">
            Register
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
