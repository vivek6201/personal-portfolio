import { urlFor } from "@/sanity";
import { PageInfo } from "@/typings";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
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
      className="max-w-7xl mx-auto h-full w-full flex flex-col relative justify-center gap-5 text-center"
    >
      <h2 className="tracking-[15px] uppercase text-gray-500 text-2xl flex-shrink my-5">
        About
      </h2>
      <div className="flex h-fit md:h-[600px] flex-col gap-y-5 lg:flex-row justify-center items-center">
        <div className="w-full h-[50%] px-5 md:h-full lg:w-5/12 flex justify-center items-center">
          <motion.img
            initial={{
              scale: 0,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.1,
            }}
            src={urlFor(pageInfo?.profilePic).url()}
            className="w-40 md:w-48 lg:w-full aspect-auto rounded-full"
          />
        </div>

        <motion.div
          initial={{
            y: 200,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          viewport={{ once: true }}
          className="w-full md:h-full flex flex-col justify-center md:gap-y-10 lg:w-7/12 space-y-5 md:space-y-4 px-2 md:px-10"
        >
          <h2 className="uppercase font-semibold text-gray-600 text-3xl my-5">
            My Background
          </h2>
          <div className="space-y-2 md:px-10">
            {pageInfo?.backgroundInfo.split(".").map((data, index) => {
              return (
                <p key={index} className="opacity-60 md:text-lg">
                  {data}
                </p>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
