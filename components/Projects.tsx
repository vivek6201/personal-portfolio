import { motion } from "framer-motion";
import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/typings";
import Link from "next/link";

type Props = {
  projects:Project[]
};

function Projects({projects}: Props) {
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
      className="flex flex-col justify-around md:justify-center items-center gap-5 md:gap-10 w-full h-full py-20"
    >
      <h2 className="tracking-[15px] uppercase text-gray-500 text-2xl">
        Projects
      </h2>

      <div className="flex h-[500px] snap-x snap-mandatory gap-4 w-11/12 overflow-x-scroll items-center scrollbar-none">
        {projects.map((project) =>{
          return <ProjectCard key={project?._id} project={project}/>  
        })}
      </div>
    </motion.div>
  );
}

export default Projects;
