import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

const NavCategoriesItesm = ({ label, icon: Icon, selected, open, setOpen }) => {
  const router = useRouter();
  const params = useSearchParams();

  const handlerClick = () => {
    if (label === "All") {
      router.push("/");
      setOpen(false);
    } else {
      let currentQuery = {};

      if (params) {
        currentQuery = qs.parse(params.toString());

        console.log("currentQuery ", currentQuery);
      }
      let updatedQuery = {
        ...currentQuery,
        category: label,
      };
      console.log("updatedQuery ", updatedQuery);
      const url = qs.stringifyUrl(
        {
          url: "/",
          query: updatedQuery,
        },
        {
          skipNull: null,
        }
      );

      console.log("url ", url);
      router.push(url);
      setOpen(false);
    }
  };
  return (
    <div
      onClick={handlerClick}
      className={`flex ${
        !open ? "opacity-0 lg:opacity-100" : "opacity-100"
      } items-center justify-center gap-1 p-2 border-b-2 hover:text-slate-800 transition cursor-pointer ${
        selected ? "border-b-slate-800" : " border-transparent"
      }`}
    >
      <Icon size={20} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default NavCategoriesItesm;
