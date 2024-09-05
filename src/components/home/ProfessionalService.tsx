import React from "react";
import Bounded from "../Bounded";
import Image from "next/image";
import { features } from "@/constants";

const ProfessionalService = () => {
  const { data, help } = features;
  return (
    <section>
      <Bounded>
        <div>
          <div className="h-32 border-l-gold border-l-2 flex justify-start items-end max-md:h-24 max-sm:h-16">
            <h2 className="text-4xl ml-2 font-medium max-sm:text-xl max-md:text-2xl">
              Professional <span className="text-gold">Service</span>
            </h2>
          </div>
          <div className="my-10 flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-4 ">
              {data.map((item, i) => (
                <ServiceLabel
                  key={i}
                  desc={item.desc}
                  icon={item.icon}
                  title={item.title}
                />
              ))}
            </div>
            <div className="border-b border-gold flex justify-center w-2/3 mt-10 "></div>
          </div>
          <h2 className="text-center text-2xl font-semibold">
            We Help you to Get an{" "}
            <span className="text-gold">Excellent Home.</span>
          </h2>
          <p className="text-center mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="my-10 max-md:my-0">
            <div className="flex items-center gap-6 py-10  max-md:flex-col-reverse ">
              <div className="w-[50%] flex flex-col gap-5 justify-center max-md:w-full xl:gap-10">
                {help.map((item, i) => (
                  <HelpLabel
                    key={i}
                    icon={item.icon}
                    title={item.title}
                    des={item.des}
                  />
                ))}
              </div>
              <div className="w-[50%] h-[50% max-md:w-full">
                <Image
                  src={"/hand-over.jpeg"}
                  width={1920}
                  height={1080}
                  alt="hand over"
                  className="w-full h-[400px] rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default ProfessionalService;

function ServiceLabel({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center w-[320px] flex-shrink-0  p-5 border-2 border-gold">
      <div className="flex flex-col items-center py-5 gap-3">
        <div className="">
          <Image
            src={icon}
            alt={title}
            width={400}
            height={400}
            className="w-32"
          />
        </div>
        <h2 className="font-bold text-xl text-center">{title}</h2>
        <p className="text-sm text-center">{desc}</p>
      </div>
    </div>
  );
}

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
