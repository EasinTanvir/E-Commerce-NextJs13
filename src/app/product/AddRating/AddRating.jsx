"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Rating from "@mui/material/Rating";
import Inputs from "@/components/inputs/Inputs";
import toast from "react-hot-toast";
import axios from "axios";

const AddRating = ({ product, user }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,

    handleSubmit,
    setValue,
    reset,

    formState: { errors },
  } = useForm({
    defaultValues: {
      comment: "",
      rating: 1,
    },
  });

  const setCustomvalue = (id, value) => {
    setValue(id, value, {
      shouldTouch: true,
      shouldDirty: true,
      shouldValidate: true,
    });
  };
  const onSubmitHandler = async (data) => {
    setLoading(true);
    if (data.rating === 0) {
      return toast.error("No Rating SElected");
    }
    const sendData = {
      ...data,
      userId: user.id,
      product,
    };

    try {
      await axios.post("/api/rating", sendData);
      toast.success("Rating added successfull");
    } catch (err) {
      console.log(err);
      return toast.error(err.response.data.mesage);
    } finally {
      reset();
      setLoading(false);
    }
  };

  const alreadyReviews = product?.reviews.find(
    (item) => item.userId === user.id
  );

  if (alreadyReviews?.id) {
    return null;
  }

  return (
    <div className={"flex flex-col gap-2 max-w-[500px] "}>
      <div className="my-2">
        <h3 className="text-slate-800 text-2xl font-semibold">
          Rate This product
        </h3>
      </div>
      <div>
        <Rating
          onChange={(event, newValue) => setCustomvalue("rating", newValue)}
        />
        <Inputs
          id="comment"
          label="Rate product"
          disabled={loading}
          register={register}
          errors={errors}
          required
        />
      </div>
      <button
        disabled={loading}
        onClick={handleSubmit(onSubmitHandler)}
        className="bg-teal-600 text-white ps-6 py-2 rounded-md "
      >
        {loading ? "Loading..." : "Submit"}
      </button>
    </div>
  );
};

export default AddRating;
