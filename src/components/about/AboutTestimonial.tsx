import React from "react";
import Bounded from "../Bounded";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { customers } from "@/constants";
const AboutTestimonial = () => {
  const { testimonal } = customers;
  return (
    <section className="bg-white text-black">
      <Bounded>
        <div className="h-full">
          <div className="h-32 border-l-gold border-l-2 flex justify-start items-end max-md:h-24 max-sm:h-16">
            <h2 className="text-4xl ml-2 font-medium max-sm:text-xl max-md:text-2xl">
              Testimonials
            </h2>
          </div>

          <div className="flex flex-col items-center my-10">
            <h2 className="text-2xl font-semibold text-center md:text-3xl lg:text-4xl">
              There are Already Join{" "}
              <span className="text-gold">our Family.</span>
            </h2>
            <div className="border-b border-gold w-3/5 flex mb-10 mt-2 "></div>
          </div>
          <div className="py-5">
            <Carousel
              className="max-w-[800px]  mx-auto  h-[500px] overflow-hidden"
              orientation="horizontal"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {testimonal.map((item, i) => (
                  <CarouselItem key={i}>
                    <TestimonalCard
                      desc={item.des}
                      img={item.img}
                      name={item.name}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute top-1/2 left-5 -translate-y-1/2 bg-transparent border-gold" />
              <CarouselNext className="absolute top-1/2 right-5 -translate-y-1/2 bg-transparent border-gold" />
            </Carousel>
          </div>
          <div className="py-10"></div>
        </div>
      </Bounded>
    </section>
  );
};

export default AboutTestimonial;

function TestimonalCard({
  img,
  name,
  desc,
}: {
  img: string;
  name: string;
  desc: string;
}) {
  return (
    <div className="border  h-[500px]  border-gold   ">
      <div className="flex flex-col justify-center h-full items-center p-5 gap-3">
        <Image
          src={img}
          alt={name}
          width={1920}
          height={1080}
          className="rounded-full object-cover w-28"
        />
        <p>{name}</p>
        <ul className="flex items-center">
          <li>
            <FaStar className="text-gold" size={24} />
          </li>
          <li>
            <FaStar className="text-gold" size={24} />
          </li>
          <li>
            <FaStar className="text-gold" size={24} />
          </li>
          <li>
            <FaStar className="text-gold" size={24} />
          </li>
          <li>
            <FaStar className="text-gold" size={24} />
          </li>
        </ul>
        <p className="text-center">{desc}</p>
      </div>
    </div>
  );
}
