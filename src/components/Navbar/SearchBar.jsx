"use client";
import qs from "query-string";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const SearchBar = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { searchTerm: "" } });
  console.log(errors);

  const onSearchHandler = (data) => {
    console.log(data);
    if (!data.searchTerm) {
      router.push("/");
    }
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          searchTerm: data.searchTerm,
        },
      },
      { skipNull: true }
    );
    if (url) {
      router.push(url);
      reset();
    }
  };
  return (
    <div className="flex justify-center items-center md:static absolute top-16 left-0 w-full">
      <input
        {...register("searchTerm")}
        placeholder="Search here"
        className="lg:w-96 md:w-72 w-full  px-4 md:py-2 py-3 md:rounded-l-md rounded-none outline-none focus:md:border-[0.5px] border-gray-400"
        type="text"
      />
      <button
        onClick={handleSubmit(onSearchHandler)}
        className="bg-teal-500 text-white md:rounded-r-md rounded-none  px-4 md:py-2 py-3"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
