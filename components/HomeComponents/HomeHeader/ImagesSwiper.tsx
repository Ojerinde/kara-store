"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./imagesSwiper.css";

import Image from "next/image";

type ImagesSwiperProps = {
  images: string[];
};

const ImagesSwiper = ({ images }: ImagesSwiperProps) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <figure className="w-[100%] h-[40rem] relative">
              <Image
                src={image}
                alt="Product Images"
                fill
                style={{
                  objectFit: "cover",
                  position: "absolute",
                }}
                className=""
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImagesSwiper;
