import React from "react";

interface AttributeProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const Attribute: React.FC<AttributeProps> = ({ icon, title, text }) => {
  return (
    <li className="flex flex-col items-center">
      <div className="flex justify-center items-center rounded-[50%] bg-custom-red-light-3 w-[9rem] h-[9rem]">
        <div className="flex justify-center items-center rounded-[50%] bg-custom-black-1 w-[7rem] h-[7rem]">
          {icon}
        </div>
      </div>
      <div className="mt-6 text-center">
        <h2 className="text-[1.6rem] font-semibold text-custom-black-1">
          {title}
        </h2>
        <p className="text-[1.3rem] text-custom-black-2">{text}</p>
      </div>
    </li>
  );
};
export default Attribute;
