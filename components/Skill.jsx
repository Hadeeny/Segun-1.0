import { motion } from "framer-motion";

const icons = [
  { image: "html-svgrepo-com.svg", level: "90%" },
  { image: "css-svgrepo-com.svg", level: "80%" },
  { image: "js-svgrepo-com.svg", level: "70%" },
  { image: "github-svgrepo-com.svg", level: "60%" },
  { image: "tailwindcss-icon-svgrepo-com.svg", level: "80%" },
  { image: "bootstrap-4-logo-svgrepo-com.svg", level: "50%" },
  { image: "sass-svgrepo-com.svg", level: "50%" },
  { image: "reactjs-svgrepo-com.svg", level: "85%" },
  { image: "nextjs-svgrepo-com.svg", level: "55%" },
  { image: "framer-svgrepo-com.svg", level: "60%" },
  { image: "redux-logo-svgrepo-com.svg", level: "80%" },
  { image: "vitejs-svgrepo-com.svg", level: "75%" },
];

const Skill = () => {
  return (
    <>
      {icons.map((icon, i) => {
        return (
          <div key={i} className="group relative flex cursor-pointer">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              src={icon.image}
              className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-20 md:h-20 filter group-hover:grayscale"
            />
            <div className="absolute">
              <div
                className="flex items-center justify-center opacity-0 group-hover:opacity-80 
               duration-500 transition ease-in-out group-hover:bg-white w-16 h-16 md:w-20 md:h-20 rounded-full"
              >
                <p className="text-3xl font-bold opacity-100 text-black ">
                  {icon.level}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Skill;
