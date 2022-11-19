import { motion } from "framer-motion";
import Skill from "./Skill";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center md:text-left xl:flex-row w-max-[2000px] xl:px-10 h-min-screen 
    justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase trackking-[3px] text-gray-400 text-sm">
        Hover over a skill for current proficiency
      </h3>
      <div className="absolute top-48 grid grid-cols-4 gap-5">
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;
