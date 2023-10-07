"use client";

import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import AuthButton from "@/components/AuthComponents/AuthButton/AuthButton";
import ProductDetailImages from "@/components/Products/ProductDetailImages";
import { productList } from "@/components/Products/productsList";
interface ProductDetailProps {
  params: any;
}
const ProductDetail: React.FC<ProductDetailProps> = ({ params }) => {
  const images = productList.map((product) => product.imageUrl);
  return (
    <section className="flex justify-between py-[5rem] px-[8rem]">
      <div className="basis-[50%]">
        <ProductDetailImages images={images} />
      </div>
      <div className="basis-[45%]">
        <h1 className="text-[2.6rem] font-medium leading-[2.4rem] tracking-[0.072rem] text-custom-black">
          Havic HV G-92 Gamepad
        </h1>
        <h2 className=" my-8 text-[2rem] leading-[2.4rem] tracking-[0.072rem] text-custom-black">
          &#8358;1,000,000
        </h2>
        <p className="text-[1.4rem] text-custom-grey leading-[2.1rem]">
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </p>

        <div className="border-t border-custom-grey-light-2 pt-12 mt-12 flex justify-between">
          <div className="flex rounded border border-custom-red-light-4 ">
            <button
              className="w-[4rem] h-[4rem] flex justify-center items-center font-bold  text-[3rem]
             hover:text-custom-white hover:bg-custom-red active:bg-custom-red-light-3"
            >
              <AiOutlineMinus />
            </button>
            <input
              type="number"
              className="number-input outline-none px-4 text-[1.8rem] font-extrabold text-center w-[8rem] h-[4rem] border-r border-l border-custom-red-light-4"
              defaultValue={1}
              min={1}
            />
            <button
              className="w-[4rem] h-[4rem] flex justify-center items-center font-bold  
            text-[3rem] hover:text-custom-white hover:bg-custom-red active:bg-custom-red-light-3"
            >
              <AiOutlinePlus />
            </button>
          </div>
          <div className=" ml-10 w-full">
            <AuthButton
              type="button"
              background="red"
              onClick={() => console.log("Added to cart")}
            >
              Add To Cart
            </AuthButton>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductDetail;
