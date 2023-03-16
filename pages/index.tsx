import type { NextPage } from "next"
import React, { useRef, useState } from "react";
import Head from 'next/head'
import Header from "../components/Header"
import Hero from "../components/Hero"
import { Inter } from 'next/font/google'
import About from "@/components/About"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import { Canvas } from 'react-three-fiber';
import StarsCanvas from '../components/StarryBackground';

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  
  return (
    <div className='bg-[rgba(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/60 scrollbar-thumb-[rgba(34,211,238,1)]'>
      <Head>
        <title>Sam's Portfolio</title>
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <Experience />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <Contact />
      </section>

    </div>
  )
} 

export default Home