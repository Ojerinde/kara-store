"use client";

import { useState } from "react";
import ImagesSwiper from "./ImagesSwiper";
import {
  gadgetStoreItems,
  imagesDummyData,
  productsDumyData,
} from "../dummyData";
import { RiArrowRightSFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "@/components/UI/Button/Button";
import SelectInput from "@/components/UI/SelectInput/SelectInput";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";

const HomeHeader = () => {
  const [hovered, setHovered] = useState(false);
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<{
    label: string;
    value: string;
  }>({ label: "All Categories", value: "All Categories" });

  const handleHoverEnter = (categoryId: string) => {
    setCategoryId(categoryId);
    setHovered(true);
  };
  const handleHoverLeave = () => {
    setHovered(false);
  };
  return (
    <section className="flex justify-between px-[8rem] py-4">
      <div className="basis-[30%] mr-8 border border-custom-grey-light-1">
        <h1
          className="text-[2rem] font-semibold text-custom-white px-6 py-4 bg-custom-red
         tracking-wider flex justify-start items-center space-x-6"
        >
          <GiHamburgerMenu className="text-[2rem]" />
          <span>All Departments</span>
        </h1>
        <ul className="px-6">
          {productsDumyData.categories.map((category) => (
            <li
              key={category.id}
              onMouseEnter={() => handleHoverEnter(category.id)}
              onMouseLeave={handleHoverLeave}
              className="my-3 flex justify-between items-center cursor-pointer text-custom-black-1 hover:text-custom-red"
            >
              <span className="text-[1.5rem] font-mono leading-[2.4rem]">
                {category.name}
              </span>
              <RiArrowRightSFill className="text-[3rem]" />
            </li>
          ))}
        </ul>
      </div>
      <div className="relative w-full">
        <div className="flex justify-between items-center">
          <form
            className="w-fit rounded-[0.4rem] pl-2 flex items-center border 
          border-custom-grey-light-2 text-custom-black-1"
          >
            <div>
              <SelectInput
                options={gadgetStoreItems}
                onChange={(data) => setSelectedOption(data)}
                value={selectedOption.value}
              />
            </div>
            <input
              type="text"
              className="w-[30rem] py-[0.2rem] pl-[1rem] ml-[1rem] text-[1.6rem] font-normal border-l border-custom-grey-light-1 text-custom-black-1 placeholder:font-normal
               placeholder:text-custom-black-2 placeholder:text-[1.5rem] focus:outline-none"
              placeholder="What are you looking for?"
            />
            <Button type="submit" size="medium" icon="off" mode="primary">
              Search
            </Button>
          </form>
          <div className="flex flex-end  items-center space-x-4">
            <div className="text-[1.2rem] font-bold">
              24 <br />
              <span className="text-[2rem] text-custom-red">7</span>
            </div>
            <div className="p-4 w-[5rem] h-[5rem] flex justify-center items-center rounded-[50%] bg-custom-red-light-1">
              <HiOutlinePhoneMissedCall className="text-[2rem] text-custom-red" />
            </div>
            <div className="text-[1.3rem] font-medium">
              <p>+234 909 358 3735</p>
              <p> +234 704 491 3736</p>
            </div>
          </div>
        </div>
        <div className="mt-[4rem] shadow-lg mx-auto w-[60vw]">
          <ImagesSwiper images={imagesDummyData}></ImagesSwiper>
        </div>
        {hovered && (
          <div className="w-[95%] mx-auto h-[76vh] absolute left-0 top-0 bg-red-300 z-50">
            {categoryId}
          </div>
        )}
      </div>
    </section>
  );
};
export default HomeHeader;
