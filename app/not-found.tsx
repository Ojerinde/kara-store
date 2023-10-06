import Button from "@/components/UI/Button/Button";
import React from "react";

const NotFound = () => {
  return (
    <section className="grid place-items-center py-[9rem]">
      <h2 className="text-[6rem] text-custom-black font-extrabold font-serif">
        4<span className="text-custom-red">0</span>4
      </h2>
      <h3 className="mb-[4rem] text-[1.8rem] text-custom-black-1 tracking-wider">
        Your requested page cannot be found.
      </h3>

      <Button type="submit" size="medium" icon="off" mode="primary">
        Back to Home Page
      </Button>
    </section>
  );
};
export default NotFound;
