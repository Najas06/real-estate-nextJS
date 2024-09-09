import React from "react";
import Bounded from "../Bounded";
import { blog } from "@/constants";
import BlogCards from "../elements/BlogCards";
import Image from "next/image";

const BlogMain = () => {
  const { posts, categoryLabel } = blog;
  return (
    <section className="bg-white text-black">
      <Bounded>
        <div className="h-full">
          <div className="h-32 border-l-gold border-l-2 flex justify-start items-end max-md:h-24 max-sm:h-16">
            <h2 className="text-4xl ml-2 font-medium max-sm:text-xl max-md:text-2xl">
              Blog
            </h2>
          </div>
          <div className="my-10 flex gap-4 max-lg:flex-col">
            <div className="w-3/4 max-lg:w-full">
              <div>
                {posts.map((item, i) => (
                  <BlogCards
                    key={i}
                    title={item.title}
                    des={item.des}
                    img={item.img}
                  />
                ))}
              </div>
            </div>
            <div className="w-1/4 max-lg:w-full">
              <div className="border p-5 border-gold">
                <h2 className="text-xl font-medium text-gold mb-5">
                  Categories
                </h2>
                <ul>
                  {categoryLabel.map((item, i) => (
                    <CategoryCard
                      key={i}
                      count={item.count}
                      icon={item.img}
                      title={item.name}
                    />
                  ))}
                </ul>
              </div>
              <div className="border p-5 border-gold my-5">
                <h2 className="text-xl font-medium text-gold">Lastest News</h2>
                {posts.map((item, i) => (
                  <NewsCard key={i} title={item.title} img={item.img} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default BlogMain;

function CategoryCard({
  title,
  icon,
  count,
}: {
  title: string;
  icon: string;
  count: number;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between mt-3">
        <div className="flex  items-center gap-1">
          <Image
            src={icon}
            alt={title}
            width={1920}
            height={1080}
            className="w-7"
          />
          <p className="text-sm font-medium">{title}</p>
        </div>
        <p className="font-medium">{count}</p>
      </div>
      <div className="border-b border-gold w-5/6 mx-auto"></div>
    </div>
  );
}

function NewsCard({ title, img }: { title: string; img: string }) {
  return (
    <div>
      <div className="flex gap-3 mt-5 max-lg:flex-col">
        <div className="w-1/2 h-[100px] max-lg:h-[300px] relative max-lg:w-full">
          <Image width={1920} height={1080} src={img} alt={title} className="object-cover h-full"/>
        </div>
        <div className="w-1/2 max-lg:w-full">
          <p className="text-xs max-lg:text-2xl font-medium max-md:text-xl max-sm:text-lg">{title}</p>
        </div>
      </div>
      <div className="border-b border-gold w-5/6 mx-auto max-lg:my-5"></div>
    </div>
  );
}
