import React from "react";

const TextAreas = ({ id, label, disabled, register, errors, required }) => {
  return (
    <div className="w-full relative">
      <textarea
        disabled={disabled}
        {...register(id, { required })}
        className={`peer max-h-[150px] min-h-[150px] w-full px-4 py-3 pt-5 outline-none bg-white font-light rounded-md border-2  transition disabled:opacity-70 disabled:cursor-not-allowed ${
          errors[id] ? "border-rose-400" : "border-slate-300"
        } ${errors[id] ? "focus:border-rose-400" : "focus:border-slate-300"}`}
        id={id}
      />
      <label
        className={`absolute cursor-text text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
          errors[id] ? "text-rose-400" : "text-slate-500"
        }`}
        htmlFor={id}
      >
        {label}
      </label>
      {errors[id] && (
        <p className="text-xs text-rose-400">This field is required*</p>
      )}
    </div>
  );
};

export default TextAreas;
