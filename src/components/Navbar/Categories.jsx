"use client";
import { categories } from "@/utils/categories";
import React from "react";
import NavCategoriesItesm from "./NavCategoriesItesm";
import { usePathname, useSearchParams } from "next/navigation";
import Main from "../Main";

const Categories = ({ open, setOpen, searchbarOpen }) => {
  const searchParams = useSearchParams();
  const category = searchParams?.get("category");
  const pathname = usePathname();
  const homePage = pathname === "/";
  if (!homePage) {
    return null;
  }

  return (
    <div className="bg-white ">
      <Main className="mx-auto">
        <div
          className={`h-screen z-50 lg:h-fit lg:mx-2 lg:static absolute left-0 ${
            !searchbarOpen ? "top-16" : "top-[112px]"
          } lg:w-full ${
            open ? "w-[220px]" : "w-0"
          } flex transition-all duration-200 lg:flex-row flex-col lg:gap-0 gap-4 lg:justify-between  bg-white  lg:items-center items-start `}
        >
          {categories.map((item, i) => (
            <NavCategoriesItesm
              key={i}
              open={open}
              setOpen={setOpen}
              label={item.label}
              icon={item.icon}
              selected={
                category === item.label || (item.label === "All" && !category)
              }
            />
          ))}
        </div>{" "}
      </Main>
    </div>
  );
};

export default Categories;
