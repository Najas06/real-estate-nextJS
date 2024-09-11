import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const BlogCards = ({
  title,
  des,
  img,
}: {
  title: string;
  des: string;
  img: string;
}) => {
  return (
    <div className="mb-10 relative h-[500px] border-2 border-gold bg-gradient-to-t from-transparent to-neutral-400 bg-card">
      <Image
        src={img}
        alt={title}
        width={1920}
        height={1080}
        className="h-full object-cover mix-blend-overlay"
      />
      <div className="absolute  w-full bottom-1 h-[70px] text-white max-md:bottom-[15%] max-sm:bottom-[20%]">
        <div className="px-6 flex items-center h-full justify-between max-md:flex-col max-md:items-start max-md:gap-4 ">
          <div className="w-3/4 border-r border-gold max-md:border-r-0 max-md:w-full">
            <h2 className="text-xl font-medium max-xl:text-base ">
              {title.slice(0, 50)}
            </h2>
            <p className="text-sm max-xl:text-xs">
              {des.slice(0, 80).concat("...")}
            </p>
          </div>
          <div className="w-1/3 flex justify-center max-md:justify-start">
            <Button className={cn(buttonVariants({variant:'black2',className:'text-xl px-6 h-full'}))}>
              Visit More
            </Button>
            {/* <Button className="rounded-none text-xl px-6 py-5 bg-black text-white border border-gold hover:bg-gold">
              Visit More
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
