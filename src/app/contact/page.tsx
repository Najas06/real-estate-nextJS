import Bounded from "@/components/Bounded";
import SubHeadline from "@/components/SubHeadline";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const page = () => {
  return (
    <>
      <SubHeadline page="Contact" subTitle="Contact Us" />
      <section className="bg-white text-black">
        <Bounded>
          <div className="h-full">
            <div className="h-32 border-l-gold border-l-2 flex justify-start items-end max-md:h-24 max-sm:h-16">
              <h2 className="text-4xl ml-2 font-medium max-sm:text-xl max-md:text-2xl">
                Contact <span className="text-gold">Us</span>
              </h2>
            </div>
            <div className="flex items-center gap-6 px-1  h-[500px] my-10 max-md:flex-col-reverse max-md:h-auto">
              <div className="w-1/2 max-md:w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.6345482542633!2d76.33262487474559!3d10.046984972225028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d6f3a60778b%3A0x810be95c9816e984!2sTinkerSpace!5e0!3m2!1sen!2sin!4v1725798615683!5m2!1sen!2sin"
                  width="100%"
                  height="500px"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full "
                ></iframe>
              </div>
              <div className="w-1/2 h-full max-md:w-full">
                <div className="flex flex-col  justify-between  w-full h-full">
                  <h2 className="text-3xl font-semibold text-center max-lg:text-2xl">
                    We are Ready to <span className="text-gold">Serve You</span>
                  </h2>
                  <div className=" w-full">
                    <p className="text-gold text-lg -mb-1 font-medium">
                      Full Name
                    </p>
                    <Input
                      type="text"
                      className="rounded-none border border-gold w-full  bg-[#F6F6F6]"
                    />
                  </div>
                  <div className=" w-full">
                    <p className="text-gold text-lg -mb-1 font-medium">Email</p>
                    <Input
                      type="email"
                      className="rounded-none border border-gold w-full  bg-[#F6F6F6]"
                    />
                  </div>
                  <div className=" w-full">
                    <p className="text-gold text-lg -mb-1 font-medium">
                      Phone Number
                    </p>
                    <Input
                      type="number"
                      className="rounded-none border border-gold w-full  bg-[#F6F6F6]"
                    />
                  </div>
                  <div className=" w-full">
                    <p className="text-gold text-lg -mb-1 font-medium">
                      Phone Number
                    </p>
                    <Input
                      type="number"
                      className="rounded-none border border-gold w-full  bg-[#F6F6F6]"
                    />
                  </div>
                  <div className=" w-full">
                    <p className="text-gold text-lg -mb-1 font-medium">
                      Message
                    </p>
                    <Textarea className="rounded-none border border-gold w-full h-[100px]  bg-[#F6F6F6]" />
                  </div>
                  <Button className="bg-gold rounded-none p-6 text-xl text-white font-light hover:bg-[#9D8A39] w-full max-md:mt-5">
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b mt-1 border-gold w-4/5 mx-auto"></div>
          <div className="my-10">
            <p className="text-center">Official Social Media</p>
            <p className="text-3xl my-5 font-semibold text-center max-md:text-2xl max-md:my-0">
              Get in Connect <span className="text-gold">With Us</span>
            </p>
            <ul className="flex gap-6 items-center text-3xl justify-center">
              <li>
                <FaFacebookSquare size={60} className="max-sm:w-8 transtion-all duration-150 hover:text-gold" />
              </li>
              <li>
                <FaXTwitter size={60} className="max-sm:w-8 transtion-all duration-150 hover:text-gold" />
              </li>
              <li>
                <FaInstagram size={60} className="max-sm:w-8 transtion-all duration-150 hover:text-gold" />
              </li>
              <li>
                <FaYoutube size={60} className="max-sm:w-8 transtion-all duration-150 hover:text-gold" />
              </li>
            </ul>
          </div>
        </Bounded>
      </section>
    </>
  );
};

export default page;
