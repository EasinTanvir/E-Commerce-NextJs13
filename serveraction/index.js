"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { addComment } from "../actions/addComment";

export const addCommentWithServerAction = async (prevData, formData) => {
  if (formData.rating == 0 || formData.rating === null) {
    return {
      message: "Rating Can't be zero",
    };
  }
  const res = await addComment(formData);
  console.log(res);
  revalidatePath(`/product/${formData.productId}`);
  //await addComment(formData);
};
