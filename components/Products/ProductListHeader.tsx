import React from "react";

const ProductListHeader = ({
  productType,
  title,
}: {
  productType: string;
  title: string;
}) => {
  return (
    <div className=" font-[Roboto] font-normal no-underline text-custom-grey-light-1">
      <h1 className="text-[1.8rem] border-l-[1.5rem] border-custom-red text-custom-red pl-4">
        {title}
      </h1>
      <h3 className="my-8 font-[Unica One] text-[2.4rem] text-custom-black font-semibold ">
        {productType}
      </h3>
    </div>
  );
};
export default ProductListHeader;
