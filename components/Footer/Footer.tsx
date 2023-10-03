import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaTruckArrowRight,
  FaLinkedin,
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquareInstagram,
} from "react-icons/fa6";
import { FcCustomerSupport } from "react-icons/fc";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Blog", link: "/blog" },
  { name: "Privacy", link: "/privacy" },
  { name: "Register", link: "/signup" },
];
const quickLinks = [
  {
    name: "FoHow Registration",
    link: "https://kara.com.ng/fohow-registration",
  },
  { name: "Property For Sale", link: "https://www.propertypro.ng/" },
];

const Footer = () => {
  return (
    <footer className="footer bg-[#120c21] text-custom-white py-[7rem] px-[8rem] font-montserrat">
      <div className="flex justify-between">
        <div className="">
          <Link href="/" className="">
            <figure className="relative h-[6rem] w-[12rem]">
              <Image
                className="absolute "
                src="/icons/kara.webp"
                alt="logo"
                fill
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </figure>
          </Link>
          <h3 className="text-[1.8rem] my-6">Subscribe</h3>
          <form className="flex items-center pr-4 border-2 rounded-lg bg-custom-black-1 border-custom-white-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="outline-none text-[1.6rem] py-3 px-4 rounded-lg bg-custom-black-1 border-custom-white-1"
            />
            <FaTruckArrowRight className=" text-[2.5rem]" />
          </form>

          <div className="mt-[3rem] flex items-end">
            <h3 className="text-custom-pink font-normal text-[1.3rem] mr-[1rem]">
              Follow us
            </h3>

            <ul className="list-none flex items-center">
              <li className="mr-[0.95rem]">
                <Link target="_blank" href="https://www.instagram.com/">
                  <FaSquareInstagram
                    className="text-[3rem] hover:text-custom-red-light-3 
                  transform scale-105 duration-300"
                  />
                </Link>
              </li>
              <li className="mr-[0.95rem]">
                <Link target="_blank" href="https://twitter.com/">
                  <FaSquareXTwitter
                    className="text-[3rem] hover:text-custom-red-light-3 
                  transform scale-105 duration-300"
                  />
                </Link>
              </li>
              <li className="mr-[0.95rem]">
                <Link target="_blank" href="https://web.facebook.com/">
                  <FaSquareFacebook
                    className="text-[3rem] hover:text-custom-red-light-3 
                  transform scale-105 duration-300"
                  />
                </Link>
              </li>
              <li className="mr-[0.95rem]">
                <Link target="_blank" href="https://www.linkedin.com/">
                  <FaLinkedin
                    className="text-[3rem] hover:text-custom-red-light-3 
                  transform scale-105 duration-300"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          <h3 className="font-semibold text-[1.8rem]">SUPPORT</h3>

          <div className="mt-6">
            <div className=" text-[1.4rem]">
              7 Balogun Street, Anifowose,
              <br /> Ikeja, Lagos State.
            </div>

            <div className="my-8 flex items-center justify-start space-x-4 text-[1.4rem]">
              <FcCustomerSupport className="text-[3rem]" />
              <div>
                <p className="">+234 909 358 3735</p>
                <p className="">+234 704 491 3736</p>
              </div>
            </div>

            <div className="text-[1.5rem]">sales_kara@royalcoast-group.com</div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-[1.8rem] mb-6 tracking-wider">
            COMPANY
          </h3>

          <ul className="flex flex-col space-y-3 text-[1.6rem]  font-serif font-medium">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="hover:text-custom-red-light-3"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>

        <div className="">
          <h3 className="font-semibold text-[1.8rem] mb-6 tracking-wider">
            QUICK LINKS
          </h3>

          <ul className="flex flex-col space-y-3 text-[1.6rem]  font-serif font-medium">
            {quickLinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="hover:text-custom-red-light-3"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <h4 className="mt-[6rem] text-center text-[1.4rem] font-normal">
        All rights reserved. © Kara.com.ng Ltd.
      </h4>
    </footer>
  );
};
export default Footer;
