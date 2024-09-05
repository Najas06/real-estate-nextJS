import React from "react";
import Bounded from "../Bounded";
import GridCard from "../elements/GridCard";
import { Button } from "../ui/button";

const PropertySection = () => {
  return (
    <section className="bg-white text-black">
      <Bounded>
        <div className="py-10 flex justify-center">
          <div>
            <h2 className="text-4xl text-center font-semibold border-b-2 border-gold max-sm:text-2xl max-md:text-3xl">
              What we offer
            </h2>
            <h2 className="my-2 text-5xl font-semibold text max-sm:text-3xl max-md:text-4xl">
              Premium <span>Properties</span>
            </h2>
          </div>
        </div>
        <GridCard />
        <div className="flex justify-center pb-10">
          <Button className="bg-gold rounded-none p-6 text-xl text-white font-light hover:bg-[#9D8A39]">Discover More</Button>
        </div>
      </Bounded>
    </section>
  );
};

export default PropertySection;
