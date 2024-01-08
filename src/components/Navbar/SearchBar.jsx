"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const [data, setData] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  const router = useRouter();

  const onSearchHandler = () => {
    if (data === "") return;

    params.set("searchTerm", data);
    router.push(`${pathname}?${params}`);
  };
  return (
    <div className="flex justify-center items-center md:static absolute top-16 left-0 w-full">
      <input
        onChange={(e) => setData(e.target.value)}
        required
        placeholder="Search here"
        className="lg:w-96 md:w-72 w-full  px-4 md:py-2 py-3 md:rounded-l-md rounded-none outline-none focus:md:border-[0.5px] border-gray-400"
        type="text"
      />
      <button
        onClick={onSearchHandler}
        className="bg-teal-500 text-white md:rounded-r-md rounded-none  px-4 md:py-2 py-3"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
