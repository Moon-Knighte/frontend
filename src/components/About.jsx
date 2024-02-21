function About() {
  return (
    <div className="w-full mt-11 p-20 bg-green-600 rounded-md">
      <h1 className=" text-[#fff] font-semibold font-['Founders Grotesk'] text-[4vw] leading-[3.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] mt-20 border-black">
        <div className="w-1/2">
          <h1 className="text-[3vw] mb-5">Our Approach: </h1>
          <button className="px-6 font-semibold gap-4 py-5 flex  uppercase items-center bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className=' bg-cover  mt-4 w-1/2 h-[70vh] rounded-3xl bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg")]'></div>
      </div>
    </div>
  );
}

export default About;
