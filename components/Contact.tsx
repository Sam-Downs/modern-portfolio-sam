import React, { useState } from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact({}: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = 'service_bpo398d';
    const templateId = 'template_j9yhmw2';
    const publicId = 'bNAzVpPcHChnM1AS2';

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
      to_name: 'Sam Downs',
      to_email: 'thesamdowns@gmail.com',
    };

    emailjs.send(serviceId, templateId, templateParams, publicId).then(
      () => {
        setStatusMessage('Your message was sent successfully!');
      },
      (error) => {
        console.log(error);
        setStatusMessage('There was an error sending your message. Please try again later.');
      }
    );
  };
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-center sm:justify-evenly mx-auto items-center md:space-x-8 space-y-8 md:space-y-0'>
      <h3 className='md:absolute lg:top-24 sm:top-14 uppercase tracking-[20px] text-cyan-500 text-xl'>Contact</h3>
      <div className='flex flex-col space-y-5'>
        <h4 className='text-2xl md:text-4xl font-semibold text-center'>
          I have got just what you need. <span className='decoration-[#22D3EE]/50 underline'>Lets Talk.</span>
        </h4>
        <div className='space-y-3'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#22D3EE] h-7 w-7 animate-pulse' />
            <p className='text-lg md:text-2xl'>+(314)681-6337</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#22D3EE] h-7 w-7 animate-pulse' />
            <p className='text-lg md:text-2xl'>thesamdowns@gmail.com</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#22D3EE] h-7 w-7 animate-pulse' />
            <p className='text-lg md:text-2xl'>Saint Louis, MO</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
            <input
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Name'
              className='contactInput'
              type='text'
              required
            />
            <input
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              className='contactInput'
              type='email'
              required
            />
          </div>
          <textarea
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Message'
            className='contactInput'
            required
          ></textarea>
          <button type='submit' className='bg-[#22D3EE] py-5 px-10 rounded-md text-black font-bold text-lg'>
            Submit
          </button>
        </form>
        {statusMessage && <p className='text-center text-lg md:text-xl text-cyan-500 mt-5'>{statusMessage}</p>}
      </div>
    </div>
  );
}
