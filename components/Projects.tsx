import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';

import mypic from '../public/images/firstfinal.png';
import mypic2 from '../public/images/firstfinal2.png';
import mypic3 from '../public/images/secondfinal.png';

export default function App() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <motion.div
      initial={{ y: 500, opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex text-center max-w-7xl px-5 md:px-10 mx-auto items-center justify-center overflow-hidden flex-wrap'
    >
      <h3 className='flex absolute text-center top-24 uppercase tracking-[20px] text-cyan-500 text-2xl'>Projects</h3>
      <div className='navigation-wrapper w-full '>
        <div ref={sliderRef} className='keen-slider rounded-md'>
          <div className='keen-slider__slide number-slide1'>
            <div className='flex flex-row justify-around'>
              <SocialIcon
                url='https://youtu.be/XDzwMU3n_90'
                fgColor='#22D3EE'
                bgColor='transparent'
                className='cursor-pointer'
              />
              <SocialIcon
                url='https://github.com/RankenTechnicalCollege/awd1100allcoursework-Sam-Downs/tree/main/FInalProject/Final%20Draft'
                fgColor='#22D3EE'
                bgColor='transparent'
                className='cursor-pointer'
              />
            </div>
            <div className='flex flex-row h-4/6 w-full justify-evenly'>
              <Image src={mypic} alt={''} className='border border-black h-auto w-fit' />
              <Image src={mypic2} alt={''} className='border border-black h-auto w-fit' />
            </div>

            <p className='text-base'>An anime tracker made with C# to manage shows watched.</p>
          </div>
          <div className='keen-slider__slide number-slide2'>
            <div className='flex flex-row justify-around'>
              <SocialIcon
                url='https://youtu.be/R4elWmc_0nw'
                fgColor='#22D3EE'
                bgColor='transparent'
                className='cursor-pointer'
              />
              <SocialIcon
                url='https://github.com/Sam-Downs/issue-tracker-react'
                fgColor='#22D3EE'
                bgColor='transparent'
                className='cursor-pointer'
              />
            </div>
            <div className='flex flex-row h-4/6 w-full justify-evenly'>
              <Image src={mypic3} alt={''} className='border border-black h-auto w-2/3' />
            </div>
            <p className='text-base'>A full stack MERN application focused on Issue tracking.</p>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
              disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
            />
          </>
        )}
        {loaded && instanceRef.current && (
          <div className='dots'>
            {Array.from({ length: instanceRef.current.track.details.slides.length }, (_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              ></button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function Arrow(props: { disabled: boolean; left?: boolean; onClick: (e: any) => void }) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? 'arrow--left' : 'arrow--right'} ${disabeld}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      {props.left && <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />}
      {!props.left && <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />}
    </svg>
  );
}
