import { motion } from "framer-motion";
function Marquee() {
  return (
    <div className="w-full py-10 bg-yellow-700 rounded-md">
      <div className=" text overflow-hidden flex gap-10 border-t-2 border-b-2 border-zinc-300 whitespace-nowrap font-semibold">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className=" leading-none text-[17vw] uppercase font-['Founders Grotesk']"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="  leading-none text-[17vw] uppercase font-['Founders Grotesk']"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="leading-none text-[17vw] uppercase font-['Founders Grotesk']"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
