"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ProductItemProps } from "./ProductList";

const ProductItem = ({ productName, price, imageUrl }: ProductItemProps) => {
  const router = useRouter();
  const path = usePathname();
  const [saved, setSaved] = useState<boolean>(false);

  const navigateToMatch = () => {
    const url =
      `${path}/` +
      productName
        .split(" ")
        .map((ele) => ele.toLowerCase())
        .join("_");
    router.push(url);
  };

  return (
    <li
      className="relative h-full w-full shadow-md rounded-[2rem] overflow-hidden cursor-pointer
       transform transition-all duration-300 hover:scale-105 active:scale-98 active:translate-y-1"
    >
      <p className="z-0 h-[8rem] rounded-[2rem] px-8 pt-[2.8rem] bg-custom-yellow flex justify-between">
        <p className="flex gap-x-2 h-fit items-center text-custom-black font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="6"
            viewBox="0 0 7 6"
            fill="none"
          >
            <ellipse cx="3.23077" cy="3" rx="3.23077" ry="3" fill="#00C614" />
          </svg>
        </p>
      </p>
      <div onClick={navigateToMatch}>
        <div className="-mt-[4rem] mx-auto z-10 bg-custom-white rounded-[50%] p-2 w-[10rem] h-[10rem]">
          <figure className="relative rounded-[50%] p-2 w-[100%] h-[100%] overflow-hidden">
            <Image
              src={imageUrl}
              fill
              style={{ objectFit: "contain", position: "absolute" }}
              alt="Profile Picture"
            />
          </figure>
        </div>
        <div className="px-4 mt-[3.5rem] text-center">{price}</div>
      </div>
    </li>
  );
};
export default ProductItem;
