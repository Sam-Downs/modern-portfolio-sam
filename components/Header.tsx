import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '100%' },
};

import { useState } from 'react';
import { BiMenuAltRight, BiX } from 'react-icons/bi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 w-full bg-transparent flex justify-between items-center p-6'>
      <h1 className='text-2xl font-semibold text-cyan-500'>Downs</h1>
      <button className='' onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? <BiMenuAltRight className='text-cyan-500 text-3xl' /> : <BiX className='text-cyan-500 text-3xl' />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className='fixed top-0 left-0 w-full h-full tracking-[5px] bg-[rgba(0,0,0,0.6)] backdrop-blur-[10px] font-medium text-cyan-500 lg:text-3xl text-2xl flex flex-col justify-center items-center space-y-6 test2'
            initial='closed'
            animate='open'
            exit='closed'
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <button className='absolute top-5 right-5 px-5 pt-2' onClick={() => setIsOpen(false)}>
              <BiX className='text-cyan-500 text-3xl' />
            </button>
            <a href='#hero' onClick={() => setIsOpen(false)}>
              Home
            </a>
            <a href='#about' onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href='#skills' onClick={() => setIsOpen(false)}>
              Skills
            </a>
            <a href='#projects' onClick={() => setIsOpen(false)}>
              Projects
            </a>
            <a href='#contact' onClick={() => setIsOpen(false)}>
              Contact
            </a>
            <a href='#resume' onClick={() => setIsOpen(false)}>
              Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
