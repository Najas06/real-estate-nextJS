import Image from "next/image";
import Bounded from "./Bounded";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SiMinutemailer } from "react-icons/si";
import { FaBuilding, FaFacebookSquare, FaInstagram, FaPhone, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <Bounded>
      <div>
        <div className="py-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src={"/relogo.svg"}
                alt="logo"
                width={1920}
                height={1080}
                className="w-[20%] cursor-pointer max-sm:w-[15%] "
              />
              <div>
                <h1 className="text-2xl font-semibold max-md:text-xl max-sm:text-sm">
                  <span className="text-gold">Real Estate</span> Agency
                </h1>
                <p className="max-md:text-xs max-sm:text-[8px]">
                  Your Best Trade Property Platform
                </p>
              </div>
            </div>
            <p className="max-sm:text-xs">
              {Date().split(" ").slice(0, 4).join(" ")}
            </p>
          </div>
          <div className="border-b mt-1 border-gold w-4/5 mx-auto"></div>
          <div className="grid grid-cols-5 gap-10 my-10 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            <div className="flex flex-col col-span-2 max-sm:col-auto gap-8">
              <h2 className="text-3xl font-normal">Our Newsletter</h2>
              <div className="flex ">
                <Input type="email" className=" rounded-none h-full p-5" placeholder="Your Email Address" />
                <Button className="w-[20%] h-full font-normal rounded-none bg-gold text-white hover:bg-[#9D8A39]  max-xl:text-xl max-lg:text-[16px] max-md:text-[8px] max-md:p-2  max-sm:p-2 ">
                  <SiMinutemailer className="text-xl" />
                </Button>
              </div>
                <ul className="flex gap-3 items-center text-3xl">
                  <li><FaFacebookSquare/></li>
                  <li><FaXTwitter/></li>
                  <li><FaInstagram/></li>
                  <li><FaYoutube/></li>
                </ul>
            </div>
            <div>
              <h2 className="text-3xl font-normal">Quick Links</h2>
              <ul className="flex flex-col gap-4 mt-8">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Properties</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-normal">Our Support</h2>
              <ul className="flex flex-col gap-4 mt-8">
                <li>Privacy Policy</li>
                <li>Support</li>
                <li>Credits</li>
                <li>Disclaimer</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-normal">Our Contact</h2>
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <FaBuilding className="text-gold"/>
                  <p>123, Street Name, City</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-gold"/>
                  <p>+123 456 789</p>
                </div>
                <div className="flex items-center gap-3 overflow-x-auto">
                  <MdEmail className="text-gold"/>
                  <p className="">realestatesupport@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b mt-1 "></div>
          <p className="text-center text-neutral-600 mt-10">© 2024 Real Estate. All rights reserved</p>
        </div>
      </div>
    </Bounded>
  );
};

export default Footer;
