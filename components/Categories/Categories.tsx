"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import ProductListHeader from "../Products/ProductListHeader";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import {
  MdPhoneIphone,
  MdComputer,
  MdOutlineVideogameAsset,
} from "react-icons/md";
import { BsWatch } from "react-icons/bs";
import { GiPowerGenerator } from "react-icons/gi";
import { LuCamera, LuHeadphones } from "react-icons/lu";
import { BiGame, BiPrinter, BiTv } from "react-icons/bi";

interface CategoriesProps {
  categoriesType: string;
  title: string;
}

const items = [
  {
    icon: <MdPhoneIphone />,
    name: "Phones",
  },
  {
    icon: <MdComputer />,
    name: "Computers",
  },
  {
    icon: <BsWatch />,
    name: "SmartWatch",
  },
  {
    icon: <GiPowerGenerator />,
    name: "Generators",
  },
  {
    icon: <MdOutlineVideogameAsset />,
    name: "Gaming",
  },
  {
    icon: <LuCamera />,
    name: "Camera",
  },
  {
    icon: <LuHeadphones />,
    name: "HeadPhones",
  },
  {
    icon: <BiGame />,
    name: "Games",
  },
  {
    icon: <BiPrinter />,
    name: "Printers",
  },

  {
    icon: <BiTv />,
    name: "TV",
  },
];

const Categories: React.FC<CategoriesProps> = ({ categoriesType, title }) => {
  const [currentSlide, setCurrentSlide] = useState(3);

  // Nav buttons
  function PrevArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className={`absolute rounded-[50%] cursor-pointer bg-custom-white-1
        hover:bg-custom-red-light-1 duration-300  w-16 h-16 flex justify-center 
        items-center -top-24 right-24 text-[2rem]
      `}
        onClick={onClick}
      >
        <GrFormPreviousLink />
      </div>
    );
  }
  function NextArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className={`absolute rounded-[50%] cursor-pointer bg-custom-white-1
         hover:bg-custom-red-light-1 duration-300 w-16 h-16 flex justify-center items-center -top-24 right-4 text-[2rem]  `}
        onClick={onClick}
      >
        <GrFormNextLink />
      </div>
    );
  }
  const settings = {
    // afterChange: (current: number) => {
    //   setCurrentSlide(current + 1);
    // },
    beforeChange(current: number, next: number) {
      setCurrentSlide(next);
    },
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 7,
    speed: 500,
    swipeToSlide: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="relative w-[100%] my-[8rem]">
      <ProductListHeader productType={categoriesType} title={title} />
      <Slider {...settings}>
        {items.map((item, index) => {
          //   console.log("index", currentSlide, index, currentSlide === index);
          return (
            <div
              key={index}
              className={`!h-[13rem] !w-[13rem] cursor-pointer ${
                currentSlide === index
                  ? "!bg-custom-red-light-3"
                  : "!bg-custom-white"
              } rounded border !border-custom-grey !flex !flex-col gap-y-2 !justify-center !items-center`}
            >
              <div
                className={`text-[4rem] ${
                  currentSlide === index
                    ? "!text-custom-white"
                    : "!text-custom-grey"
                } `}
              >
                {item.icon}
              </div>
              <p
                className={`text-[1.6rem] ${
                  currentSlide === index
                    ? "!text-custom-white"
                    : "!text-custom-grey"
                }`}
              >
                {item.name}
              </p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Categories;
