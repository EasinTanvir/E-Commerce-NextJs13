import React from "react";
import { MdError } from "react-icons/md";
const NotFound = () => {
  return (
    <div className="h-[72vh] flex justify-center items-center">
      <div className="flex flex-col w-fit items-center">
        <h1 className="text-slate-800 text-4xl">No Products Found...</h1>
        <MdError size={60} className="text-black" />
      </div>
    </div>
  );
};

export default NotFound;
