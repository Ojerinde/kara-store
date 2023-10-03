import Image from "next/image";
import React from "react";

interface DoubleImageRendererProp {
  imgUrl1: string;
  imgUrl2: string;
}

const DoubleImageRenderer: React.FC<DoubleImageRendererProp> = ({
  imgUrl1,
  imgUrl2,
}) => {
  return (
    <div className="flex space-x-6">
      <figure className="relative h-[30rem] w-full">
        <Image
          src={imgUrl1}
          alt={imgUrl1}
          fill
          style={{
            position: "absolute",
            objectFit: "contain",
          }}
        />
      </figure>{" "}
      <figure className="relative h-[30rem] w-full">
        <Image
          src={imgUrl2}
          alt={imgUrl2}
          fill
          style={{
            position: "absolute",
            objectFit: "contain",
          }}
        />
      </figure>
    </div>
  );
};
export default DoubleImageRenderer;
