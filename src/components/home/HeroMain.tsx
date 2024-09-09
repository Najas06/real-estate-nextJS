import React from "react";
import Bounded from "../Bounded";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroMain = () => {
  return (
    <section className="bg-white text-black">
      <Bounded>
        <div className="h-full">
          <div className="h-32 border-l-gold border-l-2 flex justify-start items-end max-md:h-24 max-sm:h-16">
            <h2 className="text-4xl ml-2 font-medium max-sm:text-xl max-md:text-2xl">
              About us
            </h2>
          </div>
          <div className="flex items-center gap-6 py-10  max-md:flex-col-reverse">
            <div className="flex flex-col items-start gap-2 ">
              <h2 className="text-6xl font-semibold max-xl:text-4xl max-lg:text-3xl max-md:hidden ">Professional</h2>
              <h2 className="text-6xl font-semibold max-xl:text-4xl max-lg:text-3xl max-md:hidden">Architect and</h2>
              <h2 className="text-6xl font-semibold max-xl:text-4xl max-lg:text-3xl max-md:hidden text-gold">Property Agent.</h2>
              <h1 className="text-3xl hidden max-md:block font-semibold">Professional Architect and <span className="text-gold">Property Agent.</span></h1>
              <p className="my-8 max-lg:my-5 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
                fugit quaerat esse hic? Laudantium inventore numquam obcaecati
                reiciendis a aliquid deleniti praesentium molestias molestiae,
                vel aliquam vitae! Veritatis, accusamus officia?
              </p>
              <Link href={'/about'}><Button className=" rounded-none p-6 bg-gold text-white hover:bg-[#9D8A39]">Discover More</Button></Link>
            </div>
            <div>
              <Image
                src={"/herophoto.svg"}
                alt="aboutPhoto"
                width={1980}
                height={1080}
              />
            </div>
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default HeroMain;
