"use client";

const CheckBox = ({ id, label, disabled, register }) => {
  return (
    <div className="w-full flex flex-row gap-2 items-center">
      <input
        className="cursor-pointer"
        type="checkbox"
        disabled={disabled}
        {...register(id)}
        id={id}
      />
      <label
        className="text-slate-600 font-semibold text-sm cursor-pointer"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
