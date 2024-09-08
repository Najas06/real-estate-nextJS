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
            <p className="text-center font-semibold text-3xl">
              Your premier partner in real estate.{" "}
              <span className="text-gold">
                Transforming properties into dreams.
              </span>
            </p>
            <div className="border border-b border-gold w-4/5"></div>
          </div>
          <p className="font-light mb-4 text-xl">Meet Our Team</p>
          <div className="flex gap-8 pb-10">
            <div className="w-1/2">
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
            <div className="w-1/2">
              <div className="flex flex-col items-start justify-evenly h-full gap-8">
                <div>
                  <h2 className="font-semibold text-7xl">
                    <span className="text-gold">12+ </span>Over
                  </h2>
                  <h2 className="font-semibold text-7xl">Experience</h2>
                </div>
                <p className="font-light text-3xl">Don't take our word for it. Over <br /><span className="text-gold">100+ people</span> trust us.</p>
                <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae, minima iste atque earum quaerat sed error. Ipsam, animi officia! Modi corporis odio debitis aut soluta vitae a praesentium. Beatae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur fugit, repudiandae omnis doloremque quis nisi, natus animi libero porro itaque maiores quo sapiente ducimus dolorem exercitationem atque ipsam ratione ex.</p>
                <div className="flex justify-between items-center">
                  <h2 className="text-4xl font-semibold"><span className="text-gold">4.9</span>/5 <span className="text-2xl">Rating</span></h2>
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
        <h2 className="text-xl font-semibold">{name}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}
