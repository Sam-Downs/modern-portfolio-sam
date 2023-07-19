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
import Sidebar from "@/components/DotNav";
import DotNav from "@/components/DotNav";
import ResumePage from "@/components/ResumePage";

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  
  return (
    <div className='bg-[rgba(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/60 scrollbar-thumb-[rgba(34,211,238,1)]'>
      <DotNav />
      <Head>
        <title>Sams Portfolio</title>
      </Head>
      
      <Header />

      <section id='hero' className='snap-start sec'>
        <Hero/>
      </section>

      <section id='about' className='snap-center sec'>
        <About />
      </section>

      <section id='experience' className='snap-center sec'>
        <Experience />
      </section>

      <section id='skills' className='snap-start sec'>
        <Skills />
      </section>

      <section id='projects' className='snap-start sec'>
        <Projects />
      </section>

      <section id='contact' className='snap-start sec'>
        <Contact />
      </section>

      <section id='resume' className='snap-start sec'>
        <ResumePage />
      </section>

    </div>
  )
} 

export default Home