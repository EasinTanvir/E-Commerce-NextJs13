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
        loop
      >
        <SwiperSlide>
          <div className="image-banner rounded-md relative">
            <Image
              sizes="(max-width: 1024px) 100vw, 1420px"
              alt="banner"
              fill
              src="https://firebasestorage.googleapis.com/v0/b/e-commerce-b0122.appspot.com/o/images%2F1703944799575-headphones-4595492_1280.jpg?alt=media&token=ea45080f-8369-4c89-a556-43a2e04baeee"
              className="object-cover w-full h-full rounded-xl shadow-xl"
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="image-banner rounded-md relative">
            <Image
              sizes="(max-width: 1024px) 100vw, 1420px"
              alt="banner"
              fill
              src="/assets/6.jpg"
              className="object-cover w-full h-full rounded-xl shadow-xl"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-banner rounded-md relative min-w-full min-h-full">
            <Image
              fill
              alt="banner"
              src="/assets/2.jpg"
              className="object-cover w-full h-full rounded-xl shadow-xl"
              sizes="(max-width: 1024px) 100vw, 1420px"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-banner rounded-md">
            <Image
              sizes="(max-width: 1024px) 100vw, 1420px"
              fill
              alt="banner"
              src="https://firebasestorage.googleapis.com/v0/b/e-commerce-b0122.appspot.com/o/images%2F1703942310615-iphone1.jpg?alt=media&token=a00b0873-f137-42c4-8c5d-a256b3acef1a"
              className="object-cover w-full h-full rounded-xl shadow-xl"
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="image-banner rounded-md relative">
            <Image
              sizes="(max-width: 1024px) 100vw, 1420px"
              alt="banner"
              fill
              src="/assets/3.jpg"
              className="object-cover w-full h-full rounded-xl shadow-xl"
            />
          </div>
        </SwiperSlide>{" "}
      </Swiper>
    </div>
  );
};

export default HomeBanner;
