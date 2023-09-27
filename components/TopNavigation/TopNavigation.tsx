"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { MdOutlineShoppingCart, MdOutlineFavoriteBorder } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import CustomNavLink from "../CustomNavLink/CustomNavLink";

const TopNavigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [screenSize, setScreenSize] = useState<string>("lg");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize("lg");
      } else {
        setScreenSize("md");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Contact", link: "/contact" },
    { name: "About", link: "/about" },
    { name: "Sign Up", link: "/signup" },
  ];

  const router = useRouter();
  const pathName = usePathname();

  return (
    <nav className="flex justify-between items-center py-6 px-12 border-b border-custom-grey-light-2">
      <Link href="/" className=" w-fit bg-custom-red px-6">
        <figure className="relative h-[6rem] w-[10rem]">
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

      <ul className="hidden basis-[30%] lg:flex justify-end items-center ">
        {navItems.map((link, index) => (
          <li
            key={index}
            className="text-[1.65rem] font-normal"
            style={{
              color: pathName === link.link ? "#DB7600" : "#",
              transition: "0.5s ease",
            }}
          >
            <CustomNavLink href={`${link.link}`} pathName={pathName} exact>
              {link.name}
            </CustomNavLink>
          </li>
        ))}
      </ul>

      <div className="hidden basis-[27%] lg:flex justify-between items-center text-[1.65rem] ">
        <form className="flex items-center border bg-custom-white-1 pr-4 text-custom-black-1 rounded-[0.7rem]">
          <input
            type="text"
            className="rounded-[.4rem] py-[0.7rem] pl-[1rem] font-normal text-custom-black-1 bg-custom-white-1 pr-[1.2rem] [1.5rem] placeholder:font-normal placeholder:text-custom-black-2 placeholder:text-[1.3rem] focus:outline-none"
            placeholder="What are you looking for?"
          />
          <RiSearchLine className="text-[2.2rem] cursor-pointer" />
        </form>
        <div className="flex ">
          <MdOutlineFavoriteBorder className="text-[2.7rem] mr-2 cursor-pointer" />
          <MdOutlineShoppingCart className="text-[2.7rem] cursor-pointer" />
        </div>
      </div>

      {/* Mobile Nav */}
      {screenSize != "lg" && (
        <button
          type="button"
          className=""
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 18H3V16H21V18ZM21 13H3V11H21V13ZM21 8H3V6H21V8Z"
              fill="#323232"
            />
          </svg>
        </button>
      )}
      {showMenu && (
        <div
          className="fixed z-50 top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.01)]"
          onClick={() => setShowMenu(!showMenu)}
          role="button"
          tabIndex={0}
          onKeyDown={() => {}}
        >
          <ul className="flex flex-col absolute top-0 pt-[2.7rem] bg-custom-white mb-4 px-5 py-4 gap-8 w-[18rem] right-0 z-20 rounded-lg shadow-[0_0_24px_0_rgba(0,0,0,0.05)]">
            <button
              type="button"
              className="lg:hidden self-end px-5 py-3"
              onClick={() => setShowMenu(!showMenu)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
                  fill="#323232"
                />
              </svg>
            </button>
            {navItems.map((each, index) => (
              <li
                key={index}
                className="text-[1.65rem] font-normal px-5 py-3 hover:bg-[#FAFAFA] active:font-bold"
              >
                <Link
                  href={each.link}
                  style={{
                    color: pathName === each.link ? "#DB7600" : "#1A1A1A",
                    transition: "0.5s ease",
                  }}
                >
                  {each.name}
                </Link>
              </li>
            ))}
            <li className="text-[1.65rem] font-normal px-5 py-3 hover:bg-[#FAFAFA] active:font-bold">
              <Link
                href="/auth/login"
                style={{
                  color: pathName === "/auth/login" ? "#DB7600" : "#1A1A1A",
                  transition: "0.5s ease",
                }}
              >
                Login
              </Link>
            </li>
            <li className="text-[1.65rem] font-normal px-5 pt-3 pb-8 hover:bg-[#FAFAFA] active:font-bold">
              <Link
                href="/auth/signup"
                style={{
                  color: pathName === "/auth/signup" ? "#DB7600" : "#1A1A1A",
                  transition: "0.5s ease",
                }}
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default TopNavigation;
