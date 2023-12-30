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
    router.push(url);
    reset();
  };
  return (
    <div className="flex justify-center items-center">
      <input
        {...register("searchTerm")}
        placeholder="Search here"
        className="w-96 px-4 py-2 rounded-l-md outline-none focus:border-[0.5px] border-gray-400"
        type="text"
      />
      <button
        onClick={handleSubmit(onSearchHandler)}
        className="bg-teal-500 text-white rounded-r-md  px-4 py-2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
