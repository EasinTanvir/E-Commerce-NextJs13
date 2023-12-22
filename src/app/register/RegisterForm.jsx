"use client";
import Heading from "@/components/Heading";
import Inputs from "@/components/inputs/Inputs";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
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
      console.log(data);
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
      toast.error(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
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
      <Heading title="Register here" />
      <hr className="bg-slate-300 w-full h-px" />
      <div className="w-full">
        <button
          onClick={() => signIn("google")}
          className="bg-teal-950 flex items-center gap-2 justify-center text-white py-3 rounded-md  w-full"
        >
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
          {isLoading ? "Loading" : "Register"}
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
