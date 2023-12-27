import React from "react";

const CategorieInput = ({ selected, label, icon: Icon, onClick }) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`rounded-xl text-slate-700 border-2 p-4 flex flex-col items-center gap-2 hover:border-slate-500 transition cursor-pointer ${
        selected ? "border-slate-500" : "border-slate-200"
      }`}
    >
      <Icon size={30} />
      <div>{label}</div>
    </div>
  );
};

export default CategorieInput;
