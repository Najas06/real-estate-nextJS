import AboutTestimonial from "@/components/about/AboutTestimonial"
import Hero from "@/components/about/Hero"
import WhyChooseUs from "@/components/about/WhyChooseUs"

import SubHeadline from "@/components/SubHeadline"

const page = () => {
  return (
    <main className="max-w-[1920px] mx-auto">
      <SubHeadline page="About US"/>
      <Hero/>
      <WhyChooseUs/>
      <AboutTestimonial/>
    </main>
  )
}

export default page