"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCube, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube";

const HomeBanner = () => {
  return (
    <div className=" py-2 rounded-md">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        navigation
        modules={[Pagination, EffectCube, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="image-banner rounded-md relative">
            <div className="md:block hidden absolute  top-10 left-20">
              <h1 style={{ color: "red" }} className="font-extrabold text-5xl ">
                25% off
              </h1>
              <button className="bg-teal-600 text-white rounded-md px-8 py-2 mt-4 font-semibold hover:scale-105 transition duration-200 hover:text-gray-300">
                Buy Now
              </button>
            </div>
            <img
              alt="banner"
              src="https://firebasestorage.googleapis.com/v0/b/e-commerce-b0122.appspot.com/o/images%2F1703943641944-l1%20(1).jpg?alt=media&token=325a0a28-ff3a-40e0-9200-2cf52f29606d"
              className="object-fill w-full h-full rounded-xl shadow-xl"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-banner rounded-md">
            <img
              alt="banner"
              src="/assets/2.jpg"
              className="object-cover w-full h-full rounded-xl shadow-xl"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-banner rounded-md">
            <img
              alt="banner"
              src="https://firebasestorage.googleapis.com/v0/b/e-commerce-b0122.appspot.com/o/images%2F1703942310615-iphone1.jpg?alt=media&token=a00b0873-f137-42c4-8c5d-a256b3acef1a"
              className="object-cover w-full h-full rounded-xl shadow-xl"
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="image-banner rounded-md">
            <img
              alt="banner"
              src="/assets/3.jpg"
              className="object-cover w-full h-full rounded-xl shadow-xl"
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="image-banner rounded-md">
            <img
              alt="banner"
              src="https://firebasestorage.googleapis.com/v0/b/e-commerce-b0122.appspot.com/o/images%2F1703944799575-headphones-4595492_1280.jpg?alt=media&token=ea45080f-8369-4c89-a556-43a2e04baeee"
              className="object-cover w-full h-full rounded-xl shadow-xl"
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="image-banner rounded-md">
            <img
              alt="banner"
              src="/assets/6.jpg"
              className="object-cover w-full h-full rounded-xl shadow-xl"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBanner;
