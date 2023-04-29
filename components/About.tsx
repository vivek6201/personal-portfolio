import { urlFor } from "@/sanity";
import { PageInfo } from "@/typings";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  pageInfo:PageInfo
};

export default function About({pageInfo}: Props) {

  

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
        src={urlFor(pageInfo?.profilePic).url()}
        className="w-52 -mb-28 md:mb-0 aspect-square rounded-full object-cover flex-shrink-0 md:w-64 xl:w-[500px]"
      />

      <motion.div 
      initial={{
        y:200,
        opacity:0
      }}
      whileInView={{
        y:0,
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
        {
          pageInfo?.backgroundInfo.split(".").map((data,index) =>{
            return <p key={index} className="opacity-60">{data}</p>
          })
        }
      </motion.div>
    </motion.div>
  );
}
