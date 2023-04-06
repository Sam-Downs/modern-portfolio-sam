import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex flex-items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div 
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1.5}}
        className='flex flex-row items-center text-cyan-300'>
        <SocialIcon
          url='https://www.linkedin.com/in/sam-downs14/'
          fgColor='#22D3EE'
          bgColor='transparent'
          className='cursor-pointer'
        />
        <SocialIcon
          url='https://github.com/Sam-Downs'
          fgColor='#22D3EE'
          bgColor='transparent'
          className='cursor-pointer'
        />
      </motion.div>
      <motion.div 
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1.5}}
        className=' pl-16 flex flex-row items-center text-cyan-400 uppercase tracking-widest'>
        Sam Downs
      </motion.div>
      <motion.div 
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1.5}}
        className='flex flex-row items-center'>
          <SocialIcon className='cursor-pointer' network='email' fgColor='#22D3EE' bgColor='transparent' />
          <p className='uppercase md-inline-flex text-sm text-cyan-400'>Get In Touch</p>
      </motion.div>
    </header>
  );
}
