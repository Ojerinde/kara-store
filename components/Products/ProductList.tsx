"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "./style.css";

import ProductItem from "./ProductItem";
import ProductListHeader from "./ProductListHeader";

export type ProductItemProps = {
  productName: string;
  imageUrl: string;
  price: number;
};

interface ProductListProps {
  productArray: ProductItemProps[];
  apartmentType: string;
  title: string;
}

const ProductList: React.FC<ProductListProps> = ({
  productArray,
  apartmentType,
  title,
}) => {
  return (
    <div className="w-[100%] my-8 ">
      <ProductListHeader apartmentType={apartmentType} title={title} />
      <Swiper watchSlidesProgress={true} slidesPerView={5} className="mySwiper">
        {productArray.map((match, index) => (
          <SwiperSlide key={index}>
            <ProductItem
              productName={match.productName}
              price={match.price}
              imageUrl={match.imageUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductList;
