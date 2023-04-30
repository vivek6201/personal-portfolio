import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import jslogo from "../assets/jsLogo.png";
import { Skills } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  skill: Skills;
};

export default function Skill({ skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer w-[80%] md:w-full flex-shrink-0">
      <div className="rounded-full border overflow-hidden flex border-gray-500 w-20 aspect-square filter group-hover:grayscale md:w-24">
        <Image
          src={urlFor(skill.image).url()}
          alt=""
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center group-hover:bg-white rounded-full group-hover:bg-opacity-90 transition-all duration-300 text-black">
        <p className="font-bold text-xl">{skill.progress}%</p>
      </div>
    </div>
  );
}
