import Image from "next/image";
import Bounded from "../Bounded";
import { about } from "@/constants";

const Hero = () => {
  return (
    <section className="bg-white text-black">
      <Bounded>
        <div className="h-full">
          <div className="h-32 border-l-gold border-l-2 flex justify-start items-end max-md:h-24 max-sm:h-16">
            <h2 className="text-4xl ml-2 font-medium max-sm:text-xl max-md:text-2xl">
              About us
            </h2>
          </div>
          <div className="flex flex-col items-center gap-2 my-10">
            <p className="text-center font-semibold text-3xl max-sm:text-2xl">
              Your premier partner in real estate.{" "}
              <span className="text-gold">
                Transforming properties into dreams.
              </span>
            </p>
            <div className="border border-b border-gold w-4/5"></div>
          </div>
          <p className="font-light mb-4 text-xl max-md:text-lg underline underline-offset-4 max-md:text-center max-sm:text-base">Meet Our Team</p>
          <div className="flex gap-8 pb-10 max-md:flex-col-reverse">
            <div className="w-1/2 max-md:w-full">
              <div className="grid grid-cols-2 gap-3">
                {about &&
                  about.team.map((item, i) => (
                    <TeamCard
                      key={i}
                      desc={item.role}
                      img={item.img}
                      name={item.name}
                    />
                  ))}
              </div>
            </div>
            <div className="w-1/2 max-md:w-full">
              <div className="flex flex-col items-start justify-evenly h-full gap-8 max-lg:gap-4 max-md:items-center">
                <div className="max-md:flex gap-2">
                  <h2 className="font-semibold text-7xl max-xl:text-6xl max-lg:text-5xl max-md:text-center max-sm:text-4xl ">
                    <span className="text-gold">12+ </span>Over <br className="max-md:hidden" />Experience.
                  </h2>
                  {/* <h2 className="font-semibold text-7xl max-xl:text-6xl max-lg:text-5xl">Experience</h2> */}
                </div>
                <p className="font-light text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-center max-sm:text-base">Don't take our word for it. Over <br className="max-md:hidden"/><span className="text-gold">100+ people</span> trust us.</p>
                <p className="text-xl max-xl:text-lg max-lg:text-base max-md:text-center max-sm:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae, minima iste atque earum quaerat sed error. Ipsam, animi officia! Modi corporis odio debitis aut soluta vitae a praesentium. Beatae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur fugit, repudiandae omnis doloremque quis nisi, natus animi libero porro itaque maiores quo sapiente ducimus dolorem exercitationem atque ipsam ratione ex.</p>
                <div className="flex justify-between items-center w-full max-md:justify-evenly">
                  <h2 className="text-4xl font-semibold max-xl:text-3xl"><span className="text-gold">4.9</span>/5 <span className="text-2xl max-xl:text-xl">Rating</span></h2>
                  <Image src={'/reviews.svg'} alt="reviews img" width={1920} height={1080} className="w-[18%]"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default Hero;

function TeamCard({
  img,
  name,
  desc,
}: {
  img: string;
  name: string;
  desc: string;
}) {
  return (
    <div className="relative max-h-[460px] bg-card outline outline-gold bg-gradient-to-tr from-transparent to-neutral-400">
      <Image
        src={img}
        alt={name}
        width={1920}
        height={1080}
        className="object-cover max-h-[360px] mix-blend-overlay"
      />
      <div className="absolute bottom-2 left-2 text-white">
        <h2 className="text-xl font-semibold max-md:text-base">{name}</h2>
        <p className="max-md:text-xs">{desc}</p>
      </div>
    </div>
  );
}
