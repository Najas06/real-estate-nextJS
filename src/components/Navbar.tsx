import Image from "next/image";
import React from "react";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
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
            <RiMenu3Line />
        </div>
      </div>
    </>
  );
};

export default Navbar;
