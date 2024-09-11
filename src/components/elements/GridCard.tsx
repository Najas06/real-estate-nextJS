import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "../ui/button";
import { properties } from "@/constants";

const GridCard = () => {
  return (
    <div className="grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-sm:grid-cols-1 pb-10">
      { properties && properties.map((prop)=>(
        <div className="border-2 border-gold p-5 min-h-[350px]" key={prop.title}>
        <Image src={prop.img} width={1920} height={1080} alt="property" className="w-[100%] h-[250px] object-cover" />
        <p className="flex items-center text-xl font-semibold my-2">
          <FaLocationDot /> {prop.title}
        </p>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, id neque voluptatibus, nihil odit cumque beatae atque
          aspernatur vitae perspiciatis ipsum et earum corporis laboriosam quam,
          quisquam blanditiis? Sapiente, officiis.
        </p>
        <div className="my-3 flex items-center">
          <div className="flex items-center border-r pr-3 ">
            <Image
              src={"/home.svg"}
              alt="home"
              width={1920}
              height={1080}
              className="w-[20px]"
            />
            <p className="font-semibold ml-2 -mb-1">{prop.rooms} BHK</p>
          </div>
          <div className="flex items-center border-r px-3 ">
            <Image
              src={"/Bathtub.svg"}
              alt="home"
              width={1920}
              height={1080}
              className="w-[20px]"
            />
            <p className="font-semibold ml-2 -mb-1">{prop.bathroom} BR</p>
          </div>
          <div className="flex items-center pl-3">
            <Image
              src={"/Balcony.svg"}
              alt="home"
              width={1920}
              height={1080}
              className="w-[20px]"
            />
            <p className="font-semibold ml-2 -mb-1">{prop.balcony} BAL</p>
          </div>
        </div>
          <Button variant={'black2'}>View Details</Button>
      </div>
      ))
    }
    </div>
  );
};

export default GridCard;
