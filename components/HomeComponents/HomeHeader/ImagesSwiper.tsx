"use client";

import React from "react";
import Slider from "react-slick";

import Image from "next/image";

type ImagesSwiperProps = {
  images: string[];
};

const ImagesSwiper = ({ images }: ImagesSwiperProps) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <Slider {...settings}>
        {images.map((image, index) => (
          <figure key={index} className="w-[100%] h-[37rem] relative">
            <Image
              src={image}
              alt="Product Images"
              fill
              style={{
                objectFit: "contain",
                position: "absolute",
              }}
              className=""
            />
          </figure>
        ))}
      </Slider>
    </>
  );
};

export default ImagesSwiper;
