"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCart from "./ProductsCart";

const ProductHelper = ({ products }) => {
  return (
    <>
      <Swiper
        breakpoints={{
          300: {
            width: 250,
            slidesPerView: 1,
            allowTouchMove: true,
          },
          640: {
            width: 250,
            slidesPerView: 1,
            allowTouchMove: true,
          },
          768: {
            width: 600,
            slidesPerView: 2,
            allowTouchMove: true,
          },
          992: {
            width: 900,
            slidesPerView: 3,
            allowTouchMove: true,
          },
          1190: {
            width: 1130,
            slidesPerView: 3,
            allowTouchMove: true,
          },
        }}
        slidesPerView={4}
        spaceBetween={10}
        navigation
        modules={[Navigation]}
      >
        {products?.map((item, i) => (
          <SwiperSlide key={i}>
            <ProductCart data={item} key={item.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductHelper;
