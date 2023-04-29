import { motion } from "framer-motion";
import React from "react";
type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{once:true}}
      transition={{
        duration: 2,
      }}
      className="h-full relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h2 className="tracking-[15px] absolute top-24 uppercase text-gray-500 text-2xl">
        About
      </h2>
      <motion.img
        initial={{
          scale: 0,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        viewport={{once:true}}
        transition={{
          duration: 1.1,
        }}
        src="https://avatars.githubusercontent.com/u/121503899?v=4"
        className="w-52 -mb-28 md:mb-0 aspect-square rounded-full object-cover flex-shrink-0 md:w-64 xl:w-[500px]"
      />

      <motion.div 
      initial={{
        x:500,
        opacity:0
      }}
      whileInView={{
        x:0,
        opacity:1
      }}
      transition={{
        duration: 1.2,
      }}
      viewport={{once:true}}
      className="space-y-2 md:space-y-4 px-0 md:px-10 md:ml-20">
        <h2 className="uppercase font-semibold text-gray-600 text-3xl mb-12">
          My Background
        </h2>
        <p className="opacity-60">
          Hey there! I am Vivek and I am a self taught Full Stack developer.
        </p>
        <p className="opacity-60">I am from Jamshedpur, Jharkhand</p>
        <p className="opacity-60">
          I completed my Bachelors in Computer Applicaion in July 2022 from
          Netaji Shubhash Engineering College.
        </p>
        <p className="opacity-60">
          I am Passionate about building application which solve real life
          problems.
        </p>
      </motion.div>
    </motion.div>
  );
}
