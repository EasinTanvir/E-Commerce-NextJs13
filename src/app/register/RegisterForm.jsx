"use client";

import Heading from "../../components/Heading";
import Inputs from "../../components/inputs/Inputs";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const RegisterForm = ({ currentUser }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ name: "", email: "", password: "" });

  const onSubmithandler = async (datas) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/register", datas);
      if (data.message) {
        toast.success(data.message);
      }
      signIn("credentials", {
        email: datas.email,
        password: datas.password,
        redirect: false,
      }).then((cb) => {
        if (cb?.ok) {
          router.push("/");
          router.refresh();
          toast.success("Login Success");
        }
        if (cb?.error) {
          toast.error(cb.error);
        }
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
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
        className="sm:w-[450px] w-full max-w-md shadow-lg py-8 px-6 bg-white rounded-md"
      >
        <Heading title="Register Here" center />

        <p className="text-slate-600 text-center mb-6">
          Create a new account by filling the form below
        </p>

        <button
          type="button"
          onClick={() => signIn("google")}
          className="flex items-center justify-center gap-3 w-full bg-teal-950 text-white py-3 rounded-md mb-6 hover:bg-teal-800 transition duration-300"
        >
          <AiOutlineGoogle size={24} />
          <span className="font-semibold text-base">Sign up with Google</span>
        </button>

        <div className="space-y-3">
          <Inputs
            id="name"
            label="Name"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            type="text"
            placeholder="Your full name"
            className="mb-4"
          />

          <Inputs
            id="email"
            label="Email"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            type="email"
            placeholder="Your email address"
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
            placeholder="Create a password"
            className="mb-6"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-3 bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-md font-semibold transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Loading..." : "Register"}
        </button>

        <p className="text-center text-sm text-slate-700 mt-5">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold underline hover:text-rose-600"
          >
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
