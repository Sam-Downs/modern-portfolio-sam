import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function Background({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0], scale: [1, 2,  2 , 3, 1] }}
      transition={{ duration: 1.5 }}
      className='relative flex justify-center items-center'
    >
      <div className='absolute border border-[rgba(34,211,238,1)] rounded-full h-[375px] w-[650px] mt-80 animate-pulse' />
      <div className='absolute border border-[rgba(34,211,238,1)] rounded-full h-[75px] w-[400px] mt-96 animate-pulse' />
    </motion.div>
  );
}
