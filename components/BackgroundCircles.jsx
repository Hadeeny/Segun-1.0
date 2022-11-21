import { motion } from "framer-motion";
const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="border absolute border-[#333333] rounded-full h-[12rem] w-[12rem] mt-52 animate-ping " />
      <div className="border absolute border-[#333333] rounded-full h-[18rem] w-[18rem] mt-52 animate-ping " />
      <div className="border absolute border-[#333333] rounded-full h-[30rem] w-[30rem] mt-52 animate-ping " />
      {/* <div className="border rounded-full border-yellow-400 h-[30rem] w-[30rem] opacity-20 absolute mt-52 animate-pulse" /> */}
      <div className="border rounded-full border-[#333333] h-[40rem] w-[40rem] absolute mt-52" />
    </motion.div>
  );
};

export default BackgroundCircles;
