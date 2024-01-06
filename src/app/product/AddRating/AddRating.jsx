"use client";
import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Rating from "@mui/material/Rating";
import Inputs from "@/components/inputs/Inputs";
import toast from "react-hot-toast";
import axios from "axios";
import { addCommentWithServerAction } from "../../../../serveraction";
import SuvmitButton from "./SuvmitButton";

const AddRating = ({ product, user }) => {
  const [state, actions] = useFormState(addCommentWithServerAction, {
    message: null,
  });

  console.log(state?.message);

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,

    handleSubmit,
    setValue,
    reset,

    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      comment: "",
      productId: product.id,
      rating: 1,
    },
  });

  console.log(isSubmitting);
  const setCustomvalue = (id, value) => {
    setValue(id, value, {
      shouldTouch: true,
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  useEffect(() => {
    if (state?.message) {
      toast.error(state?.message);
    }
  }, [state]);
  const alreadyReviews = product?.reviews.find(
    (item) => item.userId === user.id
  );

  if (alreadyReviews?.id) {
    return null;
  }

  return (
    <form
      action={handleSubmit(actions)}
      className={"flex flex-col gap-2 max-w-[500px] "}
    >
      <div className="my-2">
        <h3 className="text-slate-800 text-2xl font-semibold">
          Rate This product
        </h3>
      </div>
      <div>
        <Rating
          onChange={(event, newValue) => setCustomvalue("rating", newValue)}
        />
        <input
          type="text"
          id="productId"
          className="hidden"
          {...register("productId")}
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
      <SuvmitButton />
    </form>
  );
};

export default AddRating;
