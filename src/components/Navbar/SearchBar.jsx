"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState, useEffect, useTransition } from "react";
import LoaderIcon from "../LoaderIcon";

const SearchBar = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const updateSearchParam = (value) => {
    const params = new URLSearchParams(searchParams);

    if (value.trim() === "") {
      params.delete("searchTerm");
    } else {
      params.set("searchTerm", value.trim());
    }

    const newUrl = `${pathname}?${params.toString()}`;

    setIsLoading(true);
    startTransition(() => {
      router.push(newUrl);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      updateSearchParam(data);
    }, 400);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const onSearchHandler = () => {
    if (data === "") return;
    updateSearchParam(data);
  };

  return (
    <div className="flex justify-center items-center md:static absolute top-16 left-0 w-full">
      <input
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Search here"
        className="lg:w-96 md:w-72 w-full px-4 md:py-2 py-3 md:rounded-l-md rounded-none outline-none focus:md:border-[0.5px] border-gray-400"
        type="text"
      />
      <button
        onClick={onSearchHandler}
        disabled={isLoading || isPending}
        className={`bg-teal-500 text-white md:rounded-r-md rounded-none px-6 md:py-2 py-3 `}
      >
        {isLoading || isPending ? "Loading..." : "Search"}
      </button>
    </div>
  );
};

export default SearchBar;
