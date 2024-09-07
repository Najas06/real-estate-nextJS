"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="p-5 flex items-center justify-between fixed w-full bg-black bg-opacity-90 max-sm:px-5 max-sm:py-2 z-[1000]">
        <Image
          src={"/relogo.svg"}
          alt="logo"
          width={1920}
          height={1080}
          className="w-[5%] cursor-pointer max-sm:w-[10%]"
        />
        <div className="max-sm:hidden">
          <p className="flex items-center gap-1 cursor-pointer   max-sm:text-[12px]">
            <span className="font-bold text-gold">EN </span>/{" "}
            <span>
              <Image
                alt="flag"
                src={"/Flags.svg"}
                width={22}
                height={16}
                className="w-[100%]"
              />
            </span>
          </p>
        </div>
        <div className="hidden max-sm:block">
          <RiMenu3Line onClick={toggleMenu} />
        </div>
      </div>
      {toggle && (
        <div className="max-sm:block md:hidden fixed top-0 right-0 w-2/5 bg-black z-[1000] h-full">
          <div className="relative top-[3%] right-5">
            <div className="flex flex-col items-end">
              <RxCross1 onClick={toggleMenu} />
              <ul className="text-end flex flex-col gap-4 mt-8">
                <li>Home</li>
                <li>About</li>
                <li>Property</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
