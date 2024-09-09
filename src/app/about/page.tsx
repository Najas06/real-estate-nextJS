import AboutTestimonial from "@/components/about/AboutTestimonial"
import Hero from "@/components/about/Hero"
import WhyChooseUs from "@/components/about/WhyChooseUs"

import SubHeadline from "@/components/SubHeadline"

const page = () => {
  return (
    <div>
      <SubHeadline page="About US"/>
      <Hero/>
      <WhyChooseUs/>
      <AboutTestimonial/>
    </div>
  )
}

export default page