"use client";
import Avatar from "@mui/material/Avatar";
import { useCallback, useState } from "react";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  return (
    <div className="relative z-30 ">
      <div
        onClick={toggleOpen}
        className="border-[1px] border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700"
      >
        <Avatar />
      </div>
    </div>
  );
};

export default UserMenu;
