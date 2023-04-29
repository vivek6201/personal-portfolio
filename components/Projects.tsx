import { motion } from "framer-motion";
import React from "react";
import ProjectCard from "./ProjectCard";

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}  
      className="h-screen flex relative overflow-auto flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h2 className="tracking-[15px] absolute top-24 uppercase text-gray-500 text-2xl">
        Projects
      </h2>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-mandatory snap-x mt-20 scrollbar-none">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </motion.div>
  );
}

export default Projects;
