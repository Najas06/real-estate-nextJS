import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { carousel } from "@/constants";

const Hero = () => {
  const { data } = carousel;
  return (
    <section>
      <div className="max-sm:flex max-sm:flex-col">
        <Carousel className=" relative top-0 max-sm:top-[16%]  max-sm:relative ">
          <CarouselContent>
            {/* mapping items  */}
            {data &&
              data.map((item, i) => (
                <CarouselItem key={i}>
                  <div className="relative border ">
                    <Image
                      alt="logo"
                      src={item.img}
                      width={1280}
                      height={1080}
                      className="w-full max-h-screen object-cover max-sm:h-[800px] max-sm:w-full "
                    />
                    <div className="absolute z-20 px-10 py-5  bg-black right-16 bg-opacity-90 top-1/3 max-sm:w-full max-sm:right-0 max-sm:h-[1000px] max-sm:top-0    max-sm:flex  max-sm:justify-center max-md:items-center max-sm:flex-col max-sm:bg-opacity-75 ">
                      <div className="flex flex-col items-end text-7xl font-bold tracking-tight gap-2 max-xl:text-5xl max-lg:text-3xl max-md:text-xl max-md:gap-1 max-sm:gap-0 max-sm:text-base max-sm:items-center max-sm:-mt-44">
                        <h2 className="max-sm:text-3xl ">Awesome Design</h2>
                        <h2 className="max-sm:text-2xl">and The way to</h2>
                        <h2 className="max-sm:text-2xl">
                          Get <span className="text-gold">Home</span>
                        </h2>
                      </div>
                      <div className="flex justify-evenly gap-3 my-5 max-lg:my-3 max-md:my-2">
                        <Button className="w-full p-8  text-3xl font-normal rounded-none bg-gold text-white hover:bg-[#9D8A39]  max-xl:text-xl max-lg:text-[16px] max-lg:p-4 max-md:text-[8px] max-md:p-2  max-sm:p-2 ">
                          Connect Now
                        </Button>
                        <Button className="w-full p-8  text-3xl font-normal rounded-none bg-black text-white outline hover:bg-white hover:text-black max-xl:text-xl max-lg:text-[16px] max-lg:p-4 max-md:text-[8px] max-md:p-2  max-sm:p-2 max-sm:outline-none">
                          Discover More
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-5  max-sm:hidden mt-10 " />
          <CarouselNext className="absolute right-5 max-sm:hidden mt-10" />
        </Carousel>

        {/* <div className="p-5 flex items-center justify-between absolute w-full bg-black bg-opacity-90 max-sm:px-5 max-sm:py-2">
          <Image
            src={"/relogo.svg"}
            alt="logo"
            width={200}
            height={200}
            className="w-[5%] cursor-pointer max-sm:w-[10%]"
          />
          <div>
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
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
