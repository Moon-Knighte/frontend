import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-black pt-2">
      <div className="textstructure mt-24 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex items-end overflow-hidden">
              {index === 1 && (
                <div className="mr-[1vw] w-[8vw] rounded-md h-[5vw] -top-[0.2vw] relative bg-green-500 "></div>
              )}
              <h1 className="  uppercase text-8xl leading-[6vw] font-medium tracking-tighter font-['Founders Grotesk']">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-400 mt-32 flex justify-between items-center">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="p-4 text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start mt-2 flex items-center gap-3">
          <div className="px-4 py-2 uppercase text-sm font-semibold cursor-pointer border-[1px] border-zinc-400 rounded-full">
            Start Project
          </div>
          <div className="w-10 h-7 flex items-center justify-center rounded-full border-[1px] border-zinc-400">
            <span className="rotate-[30deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
