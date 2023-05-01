import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
import { Skills } from "@/typings";

type Props = {
  skills: Skills[];
};

function Skills({ skills }: Props) {
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
      className="relative h-full w-11/12 flex flex-col text-center xl:px-10 justify-center gap-y-5 md:gap-y-10 mx-auto items-center"
    >
      <h2 className="tracking-[15px] top-24 uppercase text-gray-500 text-2xl">
        Skills
      </h2>

      <h3 className="tracking-[8px] top-36 uppercase text-gray-400 text-center text-sm">
        Hover over cards to see proficiency
      </h3>

      <motion.div
        initial={{
          y: 400,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.5,
        }}
        className="grid grid-cols-3 sm:grid-cols-4 gap-5"
      >
        {skills.slice(0, skills.length / 2).map((skill) => {
          return <Skill key={skill._id} skill={skill} />;
        })}
        {skills.slice(skills.length / 2, skills.length).map((skill) => {
          return <Skill key={skill._id} skill={skill} />;
        })}
      </motion.div>
    </motion.div>
  );
}

export default Skills;
