import React from 'react';
import { motion } from 'framer-motion';
import mypic from '../public/images/unnamed.jpg'
type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='sm:top-24 top-24 xl:top-40 xl:pl-16 absolute uppercase tracking-[20px] text-cyan-500 text-2xl'>About</h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/images/unnamed.jpg"
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />
      <div className='space-y-10 px-0 md:px10 lg:pl-12'>
        <h4 className='text-4xl font-semibold'>Here is a {" " } <span className='underline decoration-[rgba(34,211,238,1)]'>short</span>{" " } Background</h4>
        <p className='text-base'>
          My name is Sam Downs and I am a fourth semester student at Ranken Technical College studying Application and Web Development on track to graduate in May of 2023.
          I am passionate about creating web applications using modern technologies. Over the course of my studies, 
          I have gained expertise in the MERN stack and ASP.NET Core, and I am excited to apply these skills to real-world projects. As I approach graduation, I am eager 
          to take on new challenges and continue learning and growing as a developer.
        </p>
      </div>
    </motion.div>
  );
}
