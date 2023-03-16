import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Background from './Background';
import mypic from '../public/images/heroimg.png'

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className='h-screen flex flex-col items-center justify-center text-center overflow-hidden'>
      <Background />
      <Image
        className='relative rounded-full mx-auto object-cover mb-12'
        alt=''
        src={mypic}
        width={128}
        height={128}
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-cyan-500 pb-2 tracking-[10px] mt-2 mb-6'>Developer</h2>
        <div className='pt-10'>
          <Link href='#about'>
            <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[rgba(34,211,238,0.6)] hover:text-[rgba(34,211,238,0.6)]'>
              About
            </button>
          </Link>
          <Link href='#experience'>
            <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[rgba(34,211,238,0.6)] hover:text-[rgba(34,211,238,0.6)]'>
              Experience
            </button>
          </Link>
          <Link href='#skills'>
            <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[rgba(34,211,238,0.6)] hover:text-[rgba(34,211,238,0.6)] '>
              Skills
            </button>
          </Link>
          <Link href='#projects'>
            <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[rgba(34,211,238,0.6)] hover:text-[rgba(34,211,238,0.6)]'>
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
