"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

interface ProductDetailImagesProp {
  images: string[];
}
const ProductDetailImages: React.FC<ProductDetailImagesProp> = ({ images }) => {
  return (
    <div className="relative h-[45rem] w-[100%]">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        loop={true}
        // navigation={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((prodImg, index) => (
          <SwiperSlide key={index}>
            <figure className="relative w-[100%] h-[100%] overflow-hidden">
              <Image
                src={prodImg}
                fill
                style={{ objectFit: "cover", position: "absolute" }}
                alt="Profile Picture"
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ProductDetailImages;
