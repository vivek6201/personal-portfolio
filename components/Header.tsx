import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { Socials } from "@/typings";

type Props = {
  socials: Socials[];
};

const Header = ({ socials }: Props) => {
  return (
    <header className="flex flex-row justify-between sticky top-0 items-start max-w-7xl mx-auto z-20 xl:items-center p-5 ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => {
          return (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor="gray"
              bgColor="transparent"
            />
          );
        })}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row items-center justify-center cursor-pointer"
      >
          <SocialIcon
            network="email"
            fgColor="gray"
            bgColor="transparent"
            className="cursor-pointer"
            url="#contact"
          />
          <Link href={"#contact"}>
            <p className="uppercase hidden md:inline-flex text-gray-400">
              Get in Touch
            </p>
          </Link>
      </motion.div>
    </header>
  );
};

export default Header;
