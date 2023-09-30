import React from 'react';
import { FaGithub, FaLinkedin, FaRegFilePdf } from 'react-icons/fa';

function ResumePage() {
  return (
    <div className='flex flex-col h-screen justify-between items-center'>
      {/* Main Content */}
      <div className='flex flex-col items-center justify-center flex-grow text-center px-10 space-y-5'>
        <h1 className='text-5xl font-semibold'>My Resume</h1>
        <p className='text-xl'>Learn more about my experience and skills.</p>
        <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
          <a
            href='/ResumeSamDowns.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='py-3 px-6 font-semibold text-white bg-cyan-500 rounded hover:bg-cyan-600 transition-colors duration-200 flex items-center justify-center space-x-2'
          >
            <FaRegFilePdf className='text-2xl' />
            <span>View Resume</span>
          </a>
          <a
            href='ResumeSamDowns.pdf'
            download
            className='py-3 px-6 font-semibold text-white bg-cyan-500 rounded hover:bg-cyan-600 transition-colors duration-200 flex items-center justify-center space-x-2'
          >
            <FaRegFilePdf className='text-2xl' />
            <span>Download Resume</span>
          </a>
        </div>
        <div className='flex mt-5 space-x-10'>
          <a
            href='https://github.com/Sam-Downs'
            target='_blank'
            rel='noopener noreferrer'
            className='text-2xl text-cyan-500 hover:text-cyan-600'
          >
            <FaGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/sam-downs14/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-2xl text-cyan-500 hover:text-cyan-600'
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className='py-3 text-white text-center'>
        <p>&copy; {new Date().getFullYear()} Sam Downs</p>
      </footer>
    </div>
  );
}

export default ResumePage;
