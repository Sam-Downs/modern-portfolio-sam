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
  const [showCard, setShowCard] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showCardTwo, setShowCardTwo] = useState(true);

  return (
    <div className='flex relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-cyan-400 text-2xl'>Experience</h3>
      <div></div>
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
          Lou Fusz Toyota - Porter
        </motion.h4>
        {showCard && (
          <div className='text-center'>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src='/images/toyota.png'
              className='h-[300px] flex justify-center'
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
            >
              May 2021-Present
            </motion.p>
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
          Lindbergh High School - Help Desk Specialist
        </motion.h4>
        {showCardTwo && (
          <div className='text-center'>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src='/images/lindbergh.png'
              className='h-[300px] flex justify-center'
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
            >
              August 2020-May 2021
            </motion.p>

          </div>
        )}
      </motion.div>
    </div>
  );
}
