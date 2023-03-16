import React, { useRef } from 'react';
import { motion } from 'framer-motion';

type Props = {};

interface Technology {
  name: string;
  image: string;
}

export default function Skills({}: Props) {
  const technologies: Technology[] = [
    { name: 'Next.js', image: '/images/next.png' },
    { name: 'TypeScript', image: '/images/typescript.png' },
    { name: 'Tailwind CSS', image: '/images/tailwind.png' },
    { name: 'Framer Motion', image: '/images/framer.png' },
    { name: 'JavaScript', image: '/images/javascript.png' },
    { name: 'HTML/CSS', image: '/images/htmlcss.png' },
    { name: 'Express', image: '/images/express.png' },
    { name: 'MongoDB', image: '/images/mongodb.png' },
    { name: 'Github', image: '/images/githubb.png' },
    { name: 'Node.js', image: '/images/nodejs.png' },
    { name: 'Three.js', image: '/images/three.png' },
  ];

  const constraintsRef = useRef(null);

  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-cyan-500 text-2xl'>Skills</h3>
      <div className='flex flex-wrap justify-center items-center mt-8 container'>
        {technologies.map((technology, index) => (
          <motion.div
            key={index}
            className='bg-cyan-400 p-2 rounded-lg shadow-md mx-4 my-2 flex flex-col relative text-center md:text-left md:flex-row justify-evenly items-center xs:m-10 sm'
            whileHover={{ scale: 1.05, boxShadow: '0 0 8px rgba(0,0,0,0.3)' }}
            drag
            dragConstraints={{}}
          >
            <img src={technology.image} alt={technology.name} className='w-8 h-8 mr-2 rounded-lg' />
            <span className='text-lg font-medium text-black text-xs md:text-base'>{technology.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
