import PropHero from "@/components/properties/PropHero"
import SubHeadline from "@/components/SubHeadline"


const page = () => {
  return (
    <div>
        <SubHeadline page="Properties" subTitle="Properties for sale"/>
        <PropHero/>
    </div>
  )
}

export default page