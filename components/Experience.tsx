import React, { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

type Props = {};

export default function Experience({}: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const setId = (value: React.SetStateAction<string | null>) => {
    setSelectedId(value);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const items = [
    {
      id: 'card1',
      jobTitle: 'Help Desk Specialist',
      companyLogo: 'images/lindbergh.png',
      jobDuties: [
        'Provide technical support',
        'Log and track tickets in the database',
        'Communicate efficiently with users',
        'Collaborate with other students',
      ],
      datePosted: 'August 2020 - May 2021',
    },
    {
      id: 'card2',
      jobTitle: 'Service Porter',
      companyLogo: 'images/toyota.png',
      jobDuties: [
        'Clean and prepare vehicles',
        'Assist with vehicle transportation',
        'Perform basic maintenance tasks',
        'Ensure cleanliness and organization',
      ],
      datePosted: 'May 2021 - Current',
    },
  ];

  return (
    <motion.div
      initial={{ y: 500, opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex text-center max-w-7xl px-5 md:px-10 mx-auto items-center justify-center overflow-hidden flex-wrap'
    >
      <h3 className='flex absolute text-center top-16 md:top-24 uppercase tracking-[20px] text-cyan-500 text-2xl'>
        Experience
      </h3>
      <div className='flex justify-center flex-col md:flex-row items-center mt-10 '>
        {items.map((item) => (
          <motion.div
            layoutId={item.id}
            onClick={() => {
              setSelectedId(item.id);
              setIsModalOpen(true);
            }}
            key={item.id}
            className='max-w-xs bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg overflow-hidden shadow-lg scr m-5 cursor-pointer  hover:scale-105'
          >
            <div className='p-4'>
              <h5 className='text-lg font-bold mb-2 text-white underline underline-offset-8'>{item.jobTitle}</h5>
              <div className='h-28 w-28 mx-auto mb-4 p-3 overflow-hidden'>
                <img
                  className='h-full w-full object-contain border-2 border-white-500 bg-gray-400'
                  src={item.companyLogo}
                  alt='company logo'
                />
              </div>
              <p className='text-white text-base'>{item.datePosted}</p>
              <p className='text-white text-base'>Click for more information!</p>
            </div>
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              className='fixed top-40 bg-gradient-to-r from-blue-500 to-cyan-600 border-2 border-white flex items-center justify-center test z-50'
            >
              {items.map((item) => {
                if (item.id === selectedId) {
                  return (
                    <div key={item.id} className='max-w-xs rounded-lg scr m-5'>
                      <div className=' text-white p-4'>
                        <div className='grid grid-cols-2 mb-4'>
                          <img
                            className='h-28 w-28 border-white border-2 object-contain bg-gray-400'
                            src={item.companyLogo}
                            alt='company logo'
                          />

                          <div className=' space-y-5'>
                            <h5 className='text-lg font-bold underline underline-offset-8'>{item.jobTitle}</h5>
                            <p className='text-base'>{item.datePosted}</p>
                          </div>
                        </div>

                        <div className='space-y-1 mb-4'>
                          {item.jobDuties.map((duty, index) => (
                            <div key={index} className='flex items-center space-x-2 list-disc list-inside'>
                              <svg
                                className='h-4 w-4 text-white'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                              >
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                              </svg>
                              <span>{duty}</span>
                            </div>
                          ))}
                        </div>

                        <motion.button
                          onClick={() => setSelectedId(null)}
                          className='bg-[rgba(36,36,36)] hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
                        >
                          Close
                        </motion.button>
                      </div>
                    </div>
                  );
                }
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
