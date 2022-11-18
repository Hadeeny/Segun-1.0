import React from "react";
import { Project } from "./Project";

interface Props {}

const Projects = (props: Props) => {
  return (
    <div
      className="h-screen relative flex overflow-hidden flex-col text-left 
        md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl">
        Projects
      </h3>
      <div className="relative z-[300] w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
      <div className="w-full absolute top-[30%] bg-yellow-500 h-[300px] -skew-y-12" />
    </div>
  );
};

export default Projects;
