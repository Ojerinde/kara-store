"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

import ProductItem from "./ProductItem";
import ProductListHeader from "./ProductListHeader";

export type ProductItemProps = {
  productName: string;
  imageUrl: string;
  price: number;
};

interface ProductListProps {
  productArray: ProductItemProps[];
  productType: string;
  title: string;
}

const ProductList: React.FC<ProductListProps> = ({
  productArray,
  productType,
  title,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className={`absolute rounded-[50%] cursor-pointer bg-custom-white-1
        hover:bg-custom-red-light-1 duration-300  w-16 h-16 flex justify-center 
        items-center -top-24 right-36 text-[2rem]
        ${currentSlide === 10 && "cursor-not-allowed"}`}
        onClick={onClick}
      >
        <GrFormPreviousLink />
      </div>
    );
  }

  function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className={`absolute rounded-[50%] cursor-pointer bg-custom-white-1
         hover:bg-custom-red-light-1 duration-300 w-16 h-16 flex justify-center items-center -top-24 right-16 text-[2rem]  ${
           currentSlide === 0 && "cursor-not-allowed"
         }`}
        onClick={onClick}
      >
        <GrFormNextLink />
      </div>
    );
  }

  const settings = {
    afterChange: (current: number) => {
      setCurrentSlide(current + 1);
    },
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-[100%] px-[8rem] my-[6rem]">
      <ProductListHeader productType={productType} title={title} />
      <Slider {...settings}>
        {productArray.map((match, index) => (
          <ProductItem
            key={index}
            productName={match.productName}
            price={match.price}
            imageUrl={match.imageUrl}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ProductList;
