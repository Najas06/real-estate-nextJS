import React from "react";
import Bounded from "../Bounded";
import GridCard from "../elements/GridCard";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
          <Link href={'/properties'} className={cn(buttonVariants({variant:"gold",size:"lg", className: "rounded-none"}))}>Discover More</Link>
        </div>
      </Bounded>
    </section>
  );
};

export default PropertySection;
