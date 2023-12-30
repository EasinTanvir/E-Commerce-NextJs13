import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

const NavCategoriesItesm = ({ label, icon: Icon, selected }) => {
  const router = useRouter();
  const params = useSearchParams();
  console.log("params ", params);
  const handlerClick = () => {
    if (label === "All") {
      router.push("/");
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
    }
  };
  return (
    <div
      onClick={handlerClick}
      className={`flex items-center justify-center gap-1 p-2 border-b-2 hover:text-slate-800 transition cursor-pointer ${
        selected ? "border-b-slate-800" : " border-transparent"
      }`}
    >
      <Icon size={20} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default NavCategoriesItesm;
