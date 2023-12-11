import React from "react";

const FormWrapp = ({ children }) => {
  return (
    <div className="min-h-fit h-screen flex justify-center items-center pb-12 ">
      <div className="max-w-[650px] w-full flex flex-col gap-6 items-center shadow-xl shadow-slate-200 rounded-md p-4 md:p-8">
        {children}
      </div>
    </div>
  );
};

export default FormWrapp;
