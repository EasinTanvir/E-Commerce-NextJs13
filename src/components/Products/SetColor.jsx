"use client";

const SetColor = ({ images, handleColorSet, cardProduct }) => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <span className="font-semibold">Color : </span>
        <div className="flex gap-1">
          {images.map((img) => (
            <div
              key={img.color}
              onClick={() => handleColorSet(img)}
              className={`h-7 w-7 cursor-pointer  rounded-full border-teal-300 flex items-center justify-center ${
                cardProduct.selectedImage.color === img.color
                  ? "border-[1.5px]"
                  : "border-none"
              }`}
            >
              <div
                style={{ backgroundColor: img.colorCode }}
                className="h-5 w-5 rounded-full border-[1.2px] border-slate-300"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SetColor;
