import PropHero from "@/components/properties/PropHero"
import SubHeadline from "@/components/SubHeadline"


const page = () => {
  return (
    <main className="max-w-[1920px] mx-auto">
        <SubHeadline page="Properties" subTitle="Properties for sale"/>
        <PropHero/>
    </main>
  )
}

export default page