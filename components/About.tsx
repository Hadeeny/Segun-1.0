import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center 
    md:text-left md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl">
        About
      </h3>
      <div className="flex w-full justify-between items-center flex-col lg:flex-row">
        <motion.img
          initial={{ x: -200, opacity: 0, scale: 0.5 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          src="/img3.jpg"
          alt="me"
          className="w-56 h-56 mt-[9rem] lg:w-[20rem] lg:h-[20rem] md:mb-0 
          flex-shrink-0 rounded-full object-cover
        md:rounded-lg "
        />
        <div className=" w-full text-center lg:w-8/12">
          <div className="pt-4">
            <h4 className="text-xl text-gray-300">
              Here is a little background
            </h4>
          </div>
          <p className=" text-sm py-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates, asperiores modi. Officia inventore ipsum ducimus at modi
            molestiae eos unde quam obcaecati quisquam nesciunt, tempora, ut
            voluptas doloremque ex? Saepe? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Voluptates, asperiores modi. Officia
            inventore ipsum ducimus at modi molestiae eos unde quam obcaecati
            quisquam nesciunt, tempora, ut voluptas doloremque ex? Saepe?
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
