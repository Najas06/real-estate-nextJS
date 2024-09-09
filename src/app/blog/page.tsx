import BlogMain from "@/components/blog/BlogMain"
import SubHeadline from "@/components/SubHeadline"

const page = () => {
  return (
    <div>
        <SubHeadline page="Blog" subTitle="Top Articles on Real Estate"/>
        <BlogMain/>
    </div>
  )
}

export default page