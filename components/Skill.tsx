import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import jslogo from "../assets/jsLogo.png"

type Props = {
  directionLeft?:boolean;
}

export default function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer flex-shrink-0'>
      <motion.div className='rounded-full border border-gray-500 w-20 aspect-square filter group-hover:grayscale md:w-24'>
        <Image src={jslogo} alt='' className='w-full object-cover'/>
      </motion.div>
      <div className='absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center group-hover:bg-white rounded-full group-hover:bg-opacity-90 transition-all duration-300 text-black'>
        <p className='font-bold text-xl'>100%</p>
      </div>
    </div>
  )
}