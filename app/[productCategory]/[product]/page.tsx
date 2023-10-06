import ProductDetailImages from "@/components/Products/ProductDetailImages";
import { productList } from "@/components/Products/productsList";
import Image from "next/image";
import React from "react";
interface ProductDetailProps {
  params: any;
}
const ProductDetail: React.FC<ProductDetailProps> = ({ params }) => {
  const images = productList.map((product) => product.imageUrl);
  return (
    <section className="flex justify-between py-[5rem] px-[8rem]">
      <div className="basis-[45%]">
        <ProductDetailImages images={images} />
      </div>
      <div className="basis-[45%]">{params.product}</div>
    </section>
  );
};
export default ProductDetail;
