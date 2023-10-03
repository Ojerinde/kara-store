import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { SiAdguard } from "react-icons/si";
import Attribute from "./Attribute";

const attributes = [
  {
    icon: <TbTruckDelivery className="text-[4rem] text-custom-white" />,
    title: "FAST DELIVERY",
    text: "Fast delivery for all orders",
  },
  {
    icon: <RiCustomerService2Line className="text-[4rem] text-custom-white" />,
    title: "24/7 CUSTOMER SERVICE",
    text: "Friendly 24/7 customer support",
  },
  {
    icon: <SiAdguard className="text-[4rem] text-custom-white" />,
    title: "MONEY BACK GUARANTEE",
    text: "We return money within 30 days",
  },
];

const Attributes = () => {
  return (
    <ul className="py-[10rem] flex justify-evenly space-x-8">
      {attributes.map((attr, index) => (
        <Attribute
          key={index}
          icon={attr.icon}
          title={attr.title}
          text={attr.text}
        />
      ))}
    </ul>
  );
};
export default Attributes;
