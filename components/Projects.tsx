import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

type Props = {};

interface Project {
  name: string;
  image: string;
  description: string;
  github: string;
  youtube: string;
}

const logoVariants: Variants = {
  hover: { scale: 1.1 },
};

const cardVariants: Variants = {
  hover: {
    y: -10,
    boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.1)',
  },
};

export default function projects({}: Props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showCard, setShowCard] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showCardTwo, setShowCardTwo] = useState(false);

  const projects: Project[] = [
    { name: 'Next.js', image: '/images/next.png', description: 'filler', github: 'google.com', youtube: 'google.com' },
    { name: 'Next.js', image: '/images/next.png', description: 'filler', github: 'google.com', youtube: 'google.com' },
  ];

  return (
    <div className='flex relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-cyan-400 text-2xl'>Projects</h3>
      <motion.div
        //hover
        whileHover={{
          scale: 1.1,
          boxShadow: '0 0 10px rgba(0,0,0,0.4)',
          border: '1px solid rgba(34,211,238,0.6)',
        }}
        transition={{
          layout: {
            duration: 1,
            type: 'spring',
          },
        }}
        layout
        className='mx-5 p-3 items-center mt-8'
        onClick={() => setShowCard(!showCard)}
      >
        <motion.h4
          layout='position'
          className='uppercase tracking-[3px] underline decoration-[rgba(34,211,238,1)] text-center'
        >
          Anime Tracker Project - C#
        </motion.h4>
        {showCard && (
          <div className='text-center'>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src='/images/firstfinal.png'
              className=''
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
            >
              A windows form application built using C# and SQL Server that allows for users to keep track of their
              watched and unwatched anime series, and manage their anime lists.
            </motion.p>
            <motion.a>
              <SocialIcon
                url='https://github.com/RankenTechnicalCollege/awd1100allcoursework-Sam-Downs/tree/main/FInalProject'
                fgColor='#22D3EE'
                bgColor='transparent'
                className='cursor-pointer'
                target="_blank"
              />
              <SocialIcon
                url='https://youtu.be/XDzwMU3n_90'
                fgColor='#22D3EE'
                bgColor='transparent'
                className='cursor-pointer'
                target="_blank"
              />
            </motion.a>
          </div>
        )}
      </motion.div>

      <motion.div
        //hover
        whileHover={{
          scale: 1.1,
          boxShadow: '0 0 10px rgba(0,0,0,0.4)',
          border: '1px solid rgba(34,211,238,0.6)',
        }}
        transition={{
          layout: {
            duration: 1,
            type: 'spring',
          },
        }}
        layout
        className='mx-5 p-3 items-center mt-8'
        onClick={() => setShowCardTwo(!showCardTwo)}
      >
        <motion.h4
          layout='position'
          className='uppercase tracking-[3px] underline decoration-[rgba(34,211,238,1)] text-center'
        >
          Issue Tracker - MERN
        </motion.h4>
        {showCardTwo && (
          <div className='text-center'>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src='/images/secondfinal.png'
              className=''
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
            >
              A web application built using MongoDB, Express.js, React, and Node.js that helps software development
              teams manage and track issues or bugs in their codebase. It allows developers to create, assign,
              prioritize, and track the progress of tasks related to fixing bugs or improving software, facilitating
              collaboration among team members.
            </motion.p>
            <SocialIcon
                url='https://github.com/Sam-Downs/awd1111-issue-tracker'
                fgColor='#22D3EE'
                bgColor='transparent'
                className='cursor-pointer'
                target="_blank"
              />
              <SocialIcon
                url='https://github.com/Sam-Downs/issue-tracker-react'
                fgColor='#22D3EE'
                bgColor='transparent'
                className='cursor-pointer'
                target="_blank"
              />
              <SocialIcon
                url='https://youtu.be/R4elWmc_0nw'
                fgColor='#22D3EE'
                bgColor='transparent'
                className='cursor-pointer'
                target="_blank"
              />
          </div>
        )}
      </motion.div>
    </div>
  );
}
