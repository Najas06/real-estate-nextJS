import React from "react";
import Bounded from "../Bounded";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { customers } from "@/constants";

const HomeTestimonal = () => {
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
          <div className="py-10">
            <h2 className="font-semibold text-center text-3xl  ">
              Don&apos;t take our word for it. Over{" "}
              <span className="text-gold">100+ people</span> trust us.
            </h2>
            <div className="border-b mt-1 border-gold w-2/5 mx-auto"></div>
            <div className="flex flex-col items-center mt-10">
              <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
                <p className="text-7xl font-bold text-start -mb-10 max-lg:text-6xl max-md:text-5xl max-md:mb-0">
                  Why <br />
                  <span className="text-gold">choose us?</span>
                </p>
                {testimonal.map((item) => (
                  <TestimonalCard
                    key={item.name}
                    img={item.img}
                    name={item.name}
                    desc={item.des}
                  />
                ))}
              </div>
            </div>
            <div className="border-b border-gold"></div>
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default HomeTestimonal;

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
    <div className="border relative odd:-top-32 border-gold max-lg:odd:-top-40 max-md:odd:top-0  ">
      <div className="flex flex-col items-center p-5 gap-3">
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
