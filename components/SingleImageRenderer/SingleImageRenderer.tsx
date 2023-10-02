import Image from "next/image";
import React from "react";

interface SingleImageRendererProp {
  imgUrl: string;
}

const SingleImageRenderer: React.FC<SingleImageRendererProp> = ({ imgUrl }) => {
  return (
    <figure className="relative h-[35rem] w-full">
      <Image
        src={imgUrl}
        alt={imgUrl}
        fill
        style={{
          position: "absolute",
          objectFit: "cover",
        }}
      />
    </figure>
  );
};
export default SingleImageRenderer;
