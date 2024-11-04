import BlogMain from "@/components/blog/BlogMain"
import SubHeadline from "@/components/SubHeadline"

const page = () => {
  return (
    <main className="max-w-[1920px] mx-auto">
        <SubHeadline page="Blog" subTitle="Top Articles on Real Estate"/>
        <BlogMain/>
    </main>
  )
}

export default page