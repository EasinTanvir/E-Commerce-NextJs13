"use client";
import { useFormStatus } from "react-dom";

const SuvmitButton = () => {
  const { pending } = useFormStatus();
  console.log(pending);
  return (
    <div>
      <button
        disabled={pending}
        className="bg-teal-600 text-white ps-6 py-2 rounded-md w-52 "
      >
        {pending ? "Loading.." : "Submt"}
      </button>
    </div>
  );
};

export default SuvmitButton;
