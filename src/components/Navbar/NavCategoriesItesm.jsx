import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const NavCategoriesItesm = ({ label, icon: Icon, selected, open, setOpen }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();

  const handlerClick = () => {
    if (label === "All") {
      router.push("/");
      setOpen(false);
    } else {
      const params = new URLSearchParams(searchParams);
      params.set("category", label);

      router.push(`${path}?${params}`);
      setOpen(false);
    }
  };
  return (
    <div
      onClick={handlerClick}
      className={`flex ${
        !open ? "opacity-0 lg:opacity-100" : "opacity-100 z-50"
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
