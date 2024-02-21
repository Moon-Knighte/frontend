function Cards() {
  return (
    <div className="w-full  h-screen bg-black flex items-center gap-10">
      <div className="cardcontainer relative h-[50vh] w-1/2">
        <div className="card flex items-center justify-center rounded-xl w-full h-full bg-[#004D43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="logo_official"
          />
          <button className="absolute font-thin px-5 py-1 rounded-full border-[1px] left-10 bottom-10">
            &copy;2020-2024
          </button>
        </div>
      </div>
      <div className="cardcontainer  flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="secondlogoofficial"
          />
          <button className="absolute font-thin px-5 py-1 rounded-full border-[1px] left-10 bottom-10">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center">
          <img
            className="bg-cover w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="thirdlogoofficial"
          />
          <button className="absolute font-thin px-5 py-1 rounded-full border-[1px] left-10 bottom-10">
            BUSINESS BOOTCAMP
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
