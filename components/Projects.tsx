import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaYoutube } from 'react-icons/fa';

const Card = ({ imgSrc, title, description, githubLink, youtubeLink }) => {
  return (
    <div className='mx-3 mt-6 flex flex-col rounded-lg bg-cyan-600 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'>
      <a href='#!'>
        <img className='rounded-t-lg w-full h-8 object-cover md:h-32 sm:h-16' src={imgSrc} alt={title} />
      </a>
      <div className='p-4'>
        <h5 className='mb-2 text-base font-medium leading-tight text-white md:text-xl sm:text-sm'>{title}</h5>
        <p className=' text-sm text-white md:text-base sm:text-sm md:mb-4'>{description}</p>
      </div>
      <div className='mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center flex justify-between'>
        <div className='flex space-x-2'>
          {Array.isArray(githubLink) ? (
            githubLink.map((link, index) => (
              <div className='border rounded-full p-1 bg-gray-700' key={index}>
                <a href={link} target='_blank' rel='noopener noreferrer'>
                  <FaGithub className='text-cyan-600 hover:text-gray-600' />
                </a>
              </div>
            ))
          ) : (
            <div className='border rounded-full p-1 bg-gray-700'>
              <a href={githubLink} target='_blank' rel='noopener noreferrer'>
                <FaGithub className='text-cyan-600 hover:text-gray-600' />
              </a>
            </div>
          )}
        </div>
        <div className='border rounded-full p-1 bg-gray-700'>
          <a href={youtubeLink} target='_blank' rel='noopener noreferrer'>
            <FaYoutube className='text-cyan-600 hover:text-gray-600' />
          </a>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const cards = [
    {
      imgSrc: '/images/firstfinal.png',
      title: 'Anime Tracker',
      description:
        'A C# Windows Forms app with SQL Server backend, designed for tracking anime series. Features a progress bar, date markers, and customizable image uploads.',
      githubLink:
        'https://github.com/RankenTechnicalCollege/awd1100allcoursework-Sam-Downs/tree/7ca2dfdaf01f581a8559a214ccf8df4aeb6ec4e6/FInalProject',
      youtubeLink: 'https://youtu.be/XDzwMU3n_90',
    },
    {
      imgSrc: '/images/secondfinal.png',
      title: 'Issue Tracker',
      description: 'A web-based issue tracker built with the MERN stack. Complete user system, complete ticket system.',
      githubLink: [
        'https://github.com/Sam-Downs/awd1111-issue-tracker',
        'https://github.com/Sam-Downs/issue-tracker-react',
      ],
      youtubeLink: 'https://youtu.be/R4elWmc_0nw',
    },
    {
      imgSrc: '/images/thirdfinal.png',
      title: 'Sports Pro Application',
      description:
        'Full stack .Net application made with Asp.net core MVC and Azure. Full User system, and complete management over SportsPro.',
      githubLink: 'https://github.com/Sam-Downs/AWDCaseStudy',
      youtubeLink: 'https://youtu.be/Nb0Z_6mo-tI',
    },
  ];

  return (
    <motion.div className='relative h-screen flex flex-col items-center justify-center'>
      <h3 className='flex absolute text-center top-20 md:top-24 uppercase tracking-[14px] text-cyan-500 text-2xl invisible md:visible'>
        Projects
      </h3>
      <div className={`w-full md:w-3/4 md:grid md:grid-cols-3 overflow-x-scroll md:overflow-x-auto scrollbar md:scrollbar-none`}>
        {cards.map((card, index) => (
          <Card
            key={index}
            imgSrc={card.imgSrc}
            title={card.title}
            description={card.description}
            githubLink={card.githubLink}
            youtubeLink={card.youtubeLink}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
