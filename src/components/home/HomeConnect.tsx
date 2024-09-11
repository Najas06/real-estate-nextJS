import React from "react";
import Bounded from "../Bounded";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const HomeConnect = () => {
  return (
    <section className="bg-white text-black">
      <Bounded>
        <div className="py-10 px-16 max-md:px-0 ">
          <p className="text-center font-medium">Send Us a Message</p>
          <h2 className="text-center text-5xl font-semibold mt-1 pb-5 max-md:text-3xl max-sm:text-2xl">
            Let&apos;s Establish <span className="text-gold">Relations</span>
          </h2>
          <form className="border border-gold p-5">
            <h2 className="text-4xl max-sm:text-3xl font-semibold">
              Get in <span className="text-gold">Touch</span>
            </h2>
            <p className="mt-1 mb-2 font-normal">We&apos;re here to help you with any questions or concerns</p>
            <div className="grid grid-cols-2 gap-3 ">
              <Input
                type="text"
                placeholder="Full Name"
                className="border border-gold p-6 rounded-none bg-[#F6F6F6] max-sm:col-span-2"
              />
              <Input
                type="email"
                placeholder="Email"
                className="border border-gold p-6 rounded-none bg-[#F6F6F6] max-sm:col-span-2"
              />
              <Input
                type="text"
                placeholder="Phone Number"
                className="border border-gold p-6 rounded-none bg-[#F6F6F6] col-span-2"
              />
              <Input
                type="text"
                placeholder="Phone Number"
                className="border border-gold p-6 rounded-none bg-[#F6F6F6] col-span-2"
              />
              <Textarea className="border border-gold p-6 rounded-none bg-[#F6F6F6] col-span-2" placeholder="Message"></Textarea>
              <div className="flex justify-center col-span-2">
                <Button className={cn(buttonVariants({variant:'gold',className:"rounded-none py-6"}))}>Send us a email!</Button>
              </div>
            </div>
          </form>
        </div>
      </Bounded>
    </section>
  );
};

export default HomeConnect;
