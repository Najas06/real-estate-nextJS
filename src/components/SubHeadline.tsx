const SubHeadline = ({ page , subTitle}: { page: string , subTitle?: string}) => {
  return (
    <div className=" relative bg-black mb-20 top-[100px] max-xl:top-[79px] max-sm:top-[60px] max-w-[1920px] mx-auto">
      <div className="p-5 flex flex-col gap-2">
        <p className="text-4xl font-bold max-sm:text-2xl">{subTitle?subTitle:page}</p>
        <p className="text-sm font-light tracking-wider">Home &gt; <span className="text-gold">{page}</span> </p>
      </div>
    </div>
  );
};

export default SubHeadline;
