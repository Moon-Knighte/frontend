function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-200 pb-20">
        <h1 className="text-7xl font-semibold tracking-tight ">
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer relative w-1/2 h-[80vh]">
            <h1 className="uppercase absolute left-full -translate-x-1/2 top-1/2  -translate-y-1/2 leading-none font-thin text-red-600  z-[9] text-7xl">
              {"FYDE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full bg-cover rounded-xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt="left_img"
              />
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[80vh]">
            <h1 className="uppercase absolute right-full translate-x-1/2 top-1/2  -translate-y-1/2 leading-none font-thin text-red-600  z-[9] text-7xl">
              {"VISE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full bg-cover rounded-xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt="left_img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
