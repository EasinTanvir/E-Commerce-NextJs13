import React from "react";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8 rounded-sm">
      <div className="mx-auto px-8 py-12 flex flex-col md:flex-row items-center gap-2 justify-evenly">
        <div className="text-center mb-8 md:mb-0 ">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Summer Sale
          </h1>
          <p className="text-lg md:text-xl text-white mb-5">
            Enjoy Discount on selecting items
          </p>
          <p className="text-2xl md:text-5xl text-yellow-400 font-extrabold">
            GET 50% OFF
          </p>
        </div>
        <div className="w-1/3 relative aspect-video ">
          <Image
            fill
            alt="banner"
            src="/assets/banner-image.png"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
