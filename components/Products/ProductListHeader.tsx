import React from "react";

const ProductListHeader = ({
  apartmentType,
  title,
}: {
  apartmentType: string;
  title: string;
}) => {
  return (
    <div className="text-right text-[1.6rem] font-[Roboto] font-normal no-underline text-custom-grey-light-1">
      <h1 className="border-l-8 border-custom-red text-custom-red pl-4">
        {title}
      </h1>
      <h3 className="ml-4 text-custom-orange font-semibold e ">
        {apartmentType}
      </h3>
    </div>
  );
};
export default ProductListHeader;
