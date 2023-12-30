"use client";
import { categories } from "@/utils/categories";
import React from "react";
import NavCategoriesItesm from "./NavCategoriesItesm";
import { usePathname, useSearchParams } from "next/navigation";

const Categories = () => {
  const searchParams = useSearchParams();
  const category = searchParams?.get("category");
  const pathname = usePathname();
  const homePage = pathname === "/";
  if (!homePage) {
    return null;
  }
  console.log("category ", category);
  return (
    <div className="bg-white">
      <div className="lg:container lg:mx-auto mx-2 flex justify-between items-center overflow-x-auto">
        {categories.map((item) => (
          <NavCategoriesItesm
            label={item.label}
            icon={item.icon}
            selected={
              category === item.label || (item.label === "All" && !category)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
