import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";

type Props = {
  
};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{   
        duration: 2,
      }}
      className="relative h-full w-full flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center"
    >
      <h2 className="tracking-[15px] absolute top-24 uppercase text-gray-500 text-2xl">
        Skills
      </h2>

      <h3 className="tracking-[8px] absolute top-36 uppercase text-gray-400 text-center text-sm">
        Hover over cards to see proficiency
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 absolute top-56" >
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}

export default Skills;
