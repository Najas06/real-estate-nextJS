import { propertiesPage } from "@/constants";
import Bounded from "../Bounded";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaAngleDoubleUp } from "react-icons/fa";

const PropHero = () => {
  const { category, property } = propertiesPage;
  return (
    <section className="bg-white text-black">
      <Bounded>
        <div className="h-full">
          <div className="h-32 border-l-gold border-l-2 flex justify-start items-end max-md:h-24 max-sm:h-16">
            <h2 className="text-4xl ml-2 font-medium max-sm:text-xl max-md:text-2xl">
              Properties in <span className="text-gold">Kochi</span>
            </h2>
          </div>
          <div className="my-10 max-sm:my-5">
            <ul className="flex items-center justify-evenly px-6 overflow-auto gap-6 sm:gap-4 no-scrollbar">
              {category.map((item, i) => (
                <li
                  key={i}
                  className={`px-6 py-0.5 border border-gold font-semibold text-gold text-xl max-sm:text-sm cursor-pointer hover:bg-black transition-all duration-150 ${
                    i === 0 && "bg-black"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center  justify-center ">
            <div className="flex items-center gap-2  w-3/5 max-md:w-full">
              <Input
                type="text"
                placeholder="Search by Caterories or Locations"
                className="outline-none border-gold h-[50px] max-sm:h-[40px] rounded-none   "
              />
              <Button className="py-5 rounded-none bg-gold text-white font-light h-[50px] max-sm:h-[30px] hover:bg-[#9D8A39] duration-150 transition-all">
                Search
              </Button>
            </div>
          </div>
          <div className="max-sm:my-5 my-10">
            <h2 className="text-7xl font-medium sm:text-5xl max-sm:text-5xl">
              <span className="text-2xl text-gold max-sm:text-xl">
                FEATURED
              </span>
              <br />
              PROPERTY
            </h2>
            <div className="my-5 relative border border-gold max-h-[500px]">
              <Image
                src={"/featured.jpeg"}
                alt="featured"
                width={1920}
                height={1080}
                className=" h-[500px] object-cover border border-gold "
              />
              <div className="h-[60px] w-full bg-white opacity-60 absolute bottom-0 max-sm:h-auto">
                <div className="flex items-center justify-between h-full px-6 max-sm:px-3 max-sm:flex-col max-sm:items-start">
                  <div className="flex items-center h-full">
                    <div className="flex items-center gap-2 border-r-2 p-2 border-gold max-sm:gap-1">
                      <Image
                        src={"/home.svg"}
                        alt="home"
                        width={1920}
                        height={1080}
                        className="w-[25px] max-sm:w-[20px]"
                      />
                      <p className="text-sm font-semibold mt-1 max-sm:text-xs">
                        3 BHK
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-r-2 p-2 border-gold max-sm:gap-1">
                      <Image
                        src={"/Bathtub.svg"}
                        alt="Bathtub"
                        width={1920}
                        height={1080}
                        className="w-[25px] max-sm:w-[20px]"
                      />
                      <p className="text-sm font-semibold mt-1 max-sm:text-xs">
                        2 BR
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-r-2 p-2 border-gold max-sm:gap-1">
                      <Image
                        src={"/Balcony.svg"}
                        alt="Balcony"
                        width={1920}
                        height={1080}
                        className="w-[25px] max-sm:w-[20px]"
                      />
                      <p className="text-sm font-semibold mt-1 max-sm:text-xs">
                        2 BAL
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold max-sm:text-5xl">
                      ₹ 2.5 CORES
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-12 right-0 bg-white opacity-60 px-5 py-2">
                <p className="text-xl font-semibold ">Premium Apartment</p>
              </div>
            </div>
            <div className="max-sm:my-5 my-10 mx-auto border w-3/5 border-gold"></div>
            <div className="flex max-sm:my-5 my-10 justify-between items-center ">
              <p className="max-sm:text-xl font-semibold max-md:text-2xl text-3xl">
                ALL <span className="text-gold">Category</span>
              </p>
              <select
                id="SORT"
                className="px-3 py-1  outline-none border border-gold bg-white text-black"
              >
                <option selected disabled defaultValue={""}>
                  SORT
                </option>
                <option value="low">Low to High </option>
                <option value="high">High to Low</option>
              </select>
            </div>
            {/* propery card  */}
            <div>
              {property.map((item, i) => (
                <PropertyCard
                  key={i}
                  area={item.area}
                  des={item.des}
                  title={item.title}
                  img={item.img}
                  rooms={item.rooms}
                  bathroom={item.bathroom}
                  kitchen={item.kitchen}
                  parking={item.parking}
                />
              ))}
            </div>
            <div>pagination</div>
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default PropHero;

function PropertyCard({
  title,
  des,
  area,
  rooms,
  kitchen,
  bathroom,
  parking,
  img,
}: {
  title: string;
  des: string;
  area: number;
  rooms: number;
  kitchen?: number;
  bathroom?: number;
  parking?: number;
  img: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-center h-full  relative gap-4 mt-10 max-md:flex-col-reverse">
        <div className="w-1/3 h-[450px] max-lg:w-1/2 max-md:w-full ">
          <div className="flex  flex-col h-full justify-between max-sm:justify-evenly ">
            <h2 className="text-gold text-4xl font-semibold ma">{title}</h2>
            <p className="text-sm ">{des.slice(0, 300)}</p>
            <ul>
              <li className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                  <Image
                    src={"/Measure.svg"}
                    alt="area"
                    width={1920}
                    height={1080}
                    className="w-6"
                  />
                  <p className="font-normal">Total Area Sqr</p>
                </div>
                <p className="font-semibold text-xl">{area}</p>
              </li>
              <li className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                  <Image
                    src={"/home.svg"}
                    alt="area"
                    width={1920}
                    height={1080}
                    className="w-6 "
                  />
                  <p className="font-normal">Rooms</p>
                </div>
                <p className="font-semibold text-xl">{rooms}</p>
              </li>
              <li className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                  <Image
                    src={"/Tableware.svg"}
                    alt="area"
                    width={1920}
                    height={1080}
                    className="w-6 "
                  />
                  <p className="font-normal">Kitchens</p>
                </div>
                <p className="font-semibold text-xl">{kitchen}</p>
              </li>
              <li className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                  <Image
                    src={"/Bathtub.svg"}
                    alt="area"
                    width={1920}
                    height={1080}
                    className="w-6 "
                  />
                  <p className="font-normal">Bathrooms</p>
                </div>
                <p className="font-semibold text-xl">{bathroom}</p>
              </li>
              <li className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                  <Image
                    src={"/Car.svg"}
                    alt="area"
                    width={1920}
                    height={1080}
                    className="w-6 "
                  />
                  <p className="font-normal">Parkings</p>
                </div>
                <p className="font-semibold text-xl">{parking}</p>
              </li>
            </ul>
            <Button className="bg-black rounded-none h-[30px] py-7 border border-gold text-white text-2xl font-normal transition-all duration-150 hover:bg-[#9D8A39]">View More Details</Button>
          </div>
        </div>
        <div className="w-2/3 h-[450px] max-md:w-full max-sm:h-[300px]">
          <Image
            src={img}
            alt={title}
            width={1920}
            height={1080}
            className=" object-cover h-full border border-gold"
          />
        </div>
      </div>
      <div className="w-4/5 mx-auto border-b border-gold pb-10"></div>
    </div>
  );
}
