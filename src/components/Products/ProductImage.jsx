"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ProductImage = ({ cardProduct, product, handleColorSet }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState("");
  return (
    <>
      <div>
        <div>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {product.images.map((item) => (
              <SwiperSlide>
                <img className="w-full rounded-lg shadow-md" src={item.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-1">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            <div className="flex justify-between bg-red-500 w-full">
              {product.images.map((item) => (
                <SwiperSlide>
                  <img
                    className="w-full h-16 cursor-pointer hover:scale-105 transition saturate-200"
                    src={item.image}
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductImage;
