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
    <li className="relative mb-8 mt-4 list-none h-full w-[85%] overflow-hidden cursor-pointer">
      <div className="bg-custom-white-1 p-8 w-[100%] h-[18rem]">
        <figure className="relative  w-[100%] h-[100%] overflow-hidden">
          <Image
            src={imageUrl}
            fill
            style={{ objectFit: "contain", position: "absolute" }}
            alt="Profile Picture"
          />
        </figure>
      </div>
      <div className=" text-left  mt-[1rem]">
        <h2 className="text-[1.6rem] font-normal">This is {productName}</h2>
        <h3 className="text-[1.5rem] text-custom-red font-semibold">
          #{price}
        </h3>
      </div>
    </li>
  );
};
export default ProductItem;
