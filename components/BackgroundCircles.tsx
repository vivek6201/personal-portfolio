import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex items-center justify-center mt-20"
    >
      <div className="absolute border rounded-full w-[200px] aspect-square border-[#333333] animate-ping mt-52" />
      <div className="absolute border rounded-full w-[300px] aspect-square border-[#333333] mt-52" />
      <div className="absolute border rounded-full w-[500px] aspect-square border-[#333333] mt-52" />
      <div className="absolute border rounded-full border-[#F7AB0A] opacity-20 w-[650px] aspect-square mt-52 animate-pulse" />
      <div className="absolute border rounded-full border-[#333333] w-[800 px] aspect-square mt-52" />
    </motion.div>
  );
}
