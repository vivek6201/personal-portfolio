import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

function ProjectCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[280px] md:w-[500px] xl:w-[700px] snap-start bg-[#292929] p-10 opacity-60 hover:opacity-100 transition-opacity duration-300">
      <motion.h2
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
        }}
        className="text-center uppercase font-bold text-gray-500 text-xl"
      >
        Shopping Cart Application
      </motion.h2>
      <div className="flex flex-col gap-y-4 relative">
        <div className="flex gap-x-3">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt="text used"
            width={20}
            height={20}
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt="text used"
            width={20}
            height={20}
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt="text used"
            width={20}
            height={20}
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt="text used"
            width={20}
            height={20}
          />
        </div>
        <p className="opacity-50 uppercase text-sm">
          Completed on <span></span>
        </p>
        <ul className="list-disc space-y-4 ml-5 text-base">
          <li className="text-[14px] sm:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa at
            magni omnis quod, ratione est saepe?{" "}
          </li>
          <li className="text-[14px] sm:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa at
            magni omnis quod, ratione est saepe?{" "}
          </li>
          <li className="text-[14px] sm:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa at
            magni omnis quod, ratione est saepe?{" "}
          </li>
        </ul>

        <div className="w-full flex gap-x-4 items-center mt-10">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <button>View Source</button>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <button className="py-2 px-5 rounded-md bg-gray-400 text-white font-medium">
              Visit Project
            </button>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
