"use client";

import { useEffect, useState } from "react";
import SelectImage from "./inputs/SelectImage";

const SelectColors = ({
  item,
  addImageToState,
  removeImageFromState,
  isProductCreated,
}) => {
  const [isSelected, setIsSelcted] = useState(false);
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (isProductCreated) {
      setIsSelcted(false);
      setFile(null);
    }
  }, [isProductCreated]);

  const handleFileChange = (value) => {
    setFile(value);
    addImageToState({ ...item, image: value });
  };
  const handleCheck = (e) => {
    setIsSelcted(e.target.checked);

    if (!e.target.checked) {
      setFile(null);
      removeImageFromState(item);
    }
  };

  const onCancelHandler = () => {
    setFile(null);
    removeImageFromState(item);
  };

  return (
    <div className="grid grid-cols-1  overflow-y-auto border-b-[1px] border-slate-200 items-center p-2">
      <div className="flex flex-row items-center gap-2 h-[60px]">
        <input
          className="cursor-pointer"
          type="checkbox"
          name=""
          id={item.color}
          onChange={handleCheck}
        />
        <label htmlFor={item.color} className="cursor-pointer text-sm">
          {item.color}
        </label>
      </div>
      <>
        {isSelected && !file && (
          <div className="col-span-2">
            <SelectImage item={item} handleFileChange={handleFileChange} />
          </div>
        )}
      </>

      <>
        {file && (
          <div className="flex flex-row gap-2 text-sm col-span-2">
            <p>{file?.name}</p>
            <div className="w-[70px]">
              <button
                className="bg-teal-700 text-white px-6 py-1 rounded-md"
                onClick={onCancelHandler}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default SelectColors;
