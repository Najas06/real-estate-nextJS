"use client";
import Image from "next/image";
import Link from "next/link";
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
      <div className="p-5 flex items-center justify-between fixed w-full bg-black bg-opacity-90 max-sm:px-5 max-sm:py-2 z-[1000] h-[100px] max-xl:h-[80px] max-sm:h-[60px]">
        <Image
          src={"/relogo.svg"}
          alt="logo"
          width={1920}
          height={1080}
          className="w-[5%] cursor-pointer max-sm:w-[10%] max-md:w-[7%]"
        />
        <div className="max-sm:hidden flex">
          <ul className="flex items-center gap-5 max-md:gap-1 font-medium cursor-pointer">
            <li className="px-2 py-1 hover:transition-all hover:transition-duration-300 transition hover:text-gold"><Link href={'/'}>Home</Link></li>
            <li className="px-2 py-1 hover:transition-all hover:transition-duration-300 transition hover:text-gold"><Link href={'/about'}>About</Link></li>
            <li className="px-2 py-1 hover:transition-all hover:transition-duration-300 transition hover:text-gold">Properties</li>
            <li className="px-2 py-1 hover:transition-all hover:transition-duration-300 transition hover:text-gold">Blog</li>
            <li className="px-2 py-1 hover:transition-all hover:transition-duration-300 transition hover:text-gold">Contact</li>
          </ul>
          <p className="flex items-center gap-1 cursor-pointer ms-3  max-sm:text-[12px]">
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
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/about'}>About</Link></li>
                <li><Link href={'/about'}>Property</Link></li>
                <li><Link href={'/about'}>Blog</Link></li>
                <li><Link href={'/about'}>Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
