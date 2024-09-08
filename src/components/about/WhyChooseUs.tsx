import React from "react";
import Bounded from "../Bounded";
import Image from "next/image";
import { features } from "@/constants";

const WhyChooseUs = () => {
  const { help } = features;
  return (
    <section>
      <Bounded>
        <div>
          <div className="h-32 border-l-gold border-l-2 flex justify-start items-end max-md:h-24 max-sm:h-16">
            <h2 className="text-4xl ml-2 font-medium max-sm:text-xl max-md:text-2xl">
              Why <span className="text-gold">Choose us ?</span>
            </h2>
          </div>
          <h2 className="text-center font-semibold text-4xl">
            Reasons To <span className="text-gold">Choose Us</span>
          </h2>
          <div className="flex py-10">
            <div className="w-1/2  h-[500px] pr-5 border-r border-gold">
              <div className="flex flex-col gap-6 justify-evenly items-start h-full">
                {help.map((item, i) => (
                  <HelpLabel
                    key={i}
                    des={item.des}
                    icon={item.icon}
                    title={item.title}
                  />
                ))}
              </div>
            </div>
            <div className="w-1/2 p-5">
              <p className="text-xl ">
                Our <span className="text-gold">Office</span>
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.6345482542633!2d76.33262487474559!3d10.046984972225028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d6f3a60778b%3A0x810be95c9816e984!2sTinkerSpace!5e0!3m2!1sen!2sin!4v1725798615683!5m2!1sen!2sin"
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default WhyChooseUs;

function HelpLabel({
  icon,
  title,
  des,
}: {
  icon: string;
  title: string;
  des: string;
}) {
  return (
    <div className="flex justify-start gap-3">
      <Image
        src={icon}
        alt="title"
        width={1920}
        height={1080}
        className="w-16"
      />
      <div>
        <h4 className="font-semibold text-xl">{title}</h4>
        <p className="text-sm">{des}</p>
      </div>
    </div>
  );
}
