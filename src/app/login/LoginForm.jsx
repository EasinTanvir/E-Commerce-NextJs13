"use client";

import Heading from "../../components/Heading";
import Inputs from "../../components/inputs/Inputs";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
  }, [currentUser, router]);

  if (currentUser) {
    return <p className="text-center py-10">Logged In Redirecting....</p>;
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center px-4">
      <form
        onSubmit={handleSubmit(onSubmithandler)}
        className="sm:w-[470px] w-full max-w-md shadow-lg py-8 px-6 bg-white rounded-md"
      >
        <Heading title="Login Here" center />

        <p className="text-slate-600 text-center mb-6">
          Enter your credentials to login to your account
        </p>

        <button
          type="button"
          onClick={() => signIn("google")}
          className="flex items-center justify-center gap-3 w-full bg-teal-950 text-white py-3 rounded-md mb-6 hover:bg-teal-800 transition duration-300"
        >
          <AiOutlineGoogle size={24} />
          <span className="font-semibold text-base">Continue with Google</span>
        </button>

        <div className="space-y-3">
          <Inputs
            id="email"
            label="Email"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            type="email"
            placeholder="Type your email"
            className="mb-4"
          />

          <Inputs
            id="password"
            label="Password"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            type="password"
            placeholder="Type your password"
            className="mb-6"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-rose-600 mt-3 hover:bg-rose-700 text-white py-3 rounded-md font-semibold transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Loading..." : "Login"}
        </button>

        <p className="text-center text-sm text-slate-700 mt-5">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold underline hover:text-rose-600"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
