import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const Projects = () => {
  const myProjects = [
    {
      title: "Music web app",
      link: "https://musica-sandy.vercel.app/",
      info: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Nobis illo ratione ullam sequi culpa id ipsa ut labore esse,
      quod dolores provident accusamus modi molestias soluta!
      Ullam, rerum quisquam? Ad.`,
      image: "/musica",
    },
    {
      title: "Proshop e-commerce",
      link: "https://shopfestapp.herokuapp.com/",
      info: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Nobis illo ratione ullam sequi culpa id ipsa ut labore esse,
      quod dolores provident accusamus modi molestias soluta!
      Ullam, rerum quisquam? Ad.`,
      image: "/proshop1.JPG",
    },
    {
      title: "Crappo cryto",
      link: "https://crappo-woad.vercel.app/",
      info: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Nobis illo ratione ullam sequi culpa id ipsa ut labore esse,
      quod dolores provident accusamus modi molestias soluta!
      Ullam, rerum quisquam? Ad.`,
      image: "/crappo.JPG",
    },
    {
      title: "Artsy store",
      link: "https://artsy-ashy.vercel.app/",
      info: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Nobis illo ratione ullam sequi culpa id ipsa ut labore esse,
      quod dolores provident accusamus modi molestias soluta!
      Ullam, rerum quisquam? Ad.`,
      image: "/artsy1.JPG",
    },
    {
      title: "Webisoft clone",
      link: "https://crappo-woad.vercel.app/",
      info: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Nobis illo ratione ullam sequi culpa id ipsa ut labore esse,
      quod dolores provident accusamus modi molestias soluta!
      Ullam, rerum quisquam? Ad.`,
      image: "/crappo.JPG",
    },
  ];
  return (
    <>
      <div
        className="h-screen relative flex overflow-hidden flex-col text-left 
        md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      >
        <h3 className="absolute top-24 z-[400] uppercase tracking-[20px] text-[#e7ffe8] text-2xl">
          Projects
        </h3>
        <div className="relative top-[3rem] z-[300] w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory">
          {myProjects.map((project, i) => {
            return (
              <div key={i}
                className="w-screen flex-shrink-0 snap-center flex flex-col 
              space-y-4 items-center justify-center p-5 md:p-44 h-screen"
              >
                <Link href={project.link}>
                  <div>
                    <motion.img
                      initial={{ opacity: 0, y: -100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="w-[20rem] "
                      src={project.image}
                      alt="fav"
                    />
                  </div>
                </Link>
                <div className="space-y-5 text-center px-0 md:px-10 md:w-2/3 w-11/12">
                  <motion.h4
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.3 }}
                    className="text-2xl font-semibold text-center"
                  >
                    <span className="underline decoration-yellow-400">
                      Case Study {i + 1} of {myProjects.length} {project.title}
                    </span>
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0.2, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    {project.info}
                  </motion.p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full absolute hidden md:block top-[10%] bg-yellow-500 h-[200px] skew-y-12" />
        <div className="w-full absolute md:top-[70%] top-[45%] bg-yellow-500 h-[200px] -skew-y-12" />
      </div>
    </>
  );
};

export default Projects;
