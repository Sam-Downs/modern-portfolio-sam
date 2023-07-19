import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter, Typewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, The Name's Sam", "Guy-who-loves-to-travel.tsx", "<ButLovesToCodeMore />"],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src='/images/heroimg.png' alt='A picture of me at a Worlds.' />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Developer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#22D3EE' />
        </h1>
      </div>
    </div>
  )
}