import Hero from "@/components/home/Hero";
import HeroMain from "@/components/home/HeroMain";
import HomeConnect from "@/components/home/HomeConnect";
import HomeTestimonal from "@/components/home/HomeTestimonal";
import ProfessionalService from "@/components/home/ProfessionalService";
import PropertySection from "@/components/home/PropertySection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero/>
      <HeroMain/>
      <PropertySection/>
      <ProfessionalService/>
      <HomeTestimonal/>
      <HomeConnect/>
    </main>
  );
}
