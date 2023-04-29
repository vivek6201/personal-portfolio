import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import heroImg from "../assets/heroImg.jpg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Vivek", "Full Stack Web Developer", "Web Designer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-full flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={heroImg}
        alt="heroImg"
        className="w-32 aspect-square rounded-full object-cover "
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[8px]">
          Software Engineer
        </h2>
        <p className="text-4xl lg:text-5xl font-semibold px-10">
          Hi, I am <span className="text-gray-400">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </p>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroBtn">About</button>
          </Link>
          <Link href="#projects">
            <button className="heroBtn">Projects</button>
          </Link>
          <Link href="#skills">
            <button className="heroBtn">Skills</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
