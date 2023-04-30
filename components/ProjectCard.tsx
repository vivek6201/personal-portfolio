import { urlFor } from "@/sanity";
import { Project } from "@/typings";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center justify-evenly gap-y-3 flex-shrink-0 w-[280px] md:w-[500px] xl:w-[600px] snap-start bg-[#292929] md:p-10 p-5 opacity-60 hover:opacity-100 transition-opacity duration-300 h-[500px]">
      <h2 className="text-center uppercase font-bold text-gray-500 text-xl">
        {project?.title}
      </h2>
      <div className="flex flex-col gap-y-4 relative">
        <div className="flex gap-x-3 md:gap-x-5">
          {project.technologies.map((tech) => {
            return (
              <Image
                key={tech._id}
                src={urlFor(tech?.image).url()}
                alt="text used"
                width={40}
                height={40}
              />
            );
          })}
        </div>
        <p className="opacity-50 uppercase text-sm">
          Completed on <span></span>
        </p>
        <ul className="list-disc space-y-1 ml-5 text-base">
          {project.points.map((point, index) => {
            return <li key={index}>{point}</li>;
          })}
        </ul>

        <div className="w-full flex gap-x-4 items-center md:mt-10">
          <SocialIcon
            url={project.githubLink}
            bgColor="transparent"
            fgColor="gray"
          />
          <Link
            href={project.deployedLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="py-2 px-5 rounded-md bg-gray-400 text-white font-medium">
              Visit Project
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
