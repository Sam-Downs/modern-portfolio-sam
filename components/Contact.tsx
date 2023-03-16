import React, { useState } from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

type Inputs = {
  name: String;
  email: String;
  message: String;
};

type Props = {};

export default function Contact({}: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Replace these values with your own
    const serviceId = 'service_bpo398d';
    const templateId = 'template_j9yhmw2';
    const publicId = 'bNAzVpPcHChnM1AS2';

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
      to_name: 'Sam Downs',
      to_email: 'thesamdowns@gmail.com'
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
    <div className='h-screen flex top-12 relative flex-col text-center md:text-left m:flex-row max-w-7xl px-10 justify-evenly mx-auto overflow-hidden'>
      <div className='flex flex-col items-center space-x-5 justify-center md:flex-row'>
        <div className='col-4 flex items-center justify-center'>
          <PhoneIcon className='text-cyan-500 h-7 w-7 animate-pulse  mt-1' />
          <p className='text-2xl'>+(314)681-6337</p>
        </div>
        <div className='col-4 flex items-center justify-center px-4'>
          <EnvelopeIcon className='text-cyan-500 h-7 w-7 animate-pulse mt-1' />
          <p className='text-2xl '>thesamdowns@gmail.com</p>
        </div>
        <div className='col-4 flex items-center justify-center'>
          <MapPinIcon className='text-cyan-500 h-7 w-7 animate-pulse  mt-1' />
          <p className='text-2xl'>Saint Louis, MO</p>
        </div>
      </div>
      <div className='flex-row items-stretch'>
      <h3 className='top-24 text-cyan-400 text-2xl text-center items-center'>Feel free to contact me!</h3>
        <form onSubmit={handleSubmit} className='items-stretch w-full max-w-lg mx-auto mt-10'>
          <div className='mb-4'>
            <label htmlFor='name' className='block font-medium mb-2'>
              Name
            </label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full px-3 py-2 border border-cyan-400 rounded bg-gray-500'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block font-medium mb-2'>
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-3 py-2 border border--400 border-cyan-400 rounded bg-gray-500'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='message' className='block font-medium mb-2'>
              Message
            </label>
            <textarea
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='w-full px-3 py-2 border border-cyan-400 rounded bg-gray-500'
              rows={5}
              required
            ></textarea>
          </div>
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-cyan-500 text-white px-4 py-2 rounded hover:bg-gray-500 focus:bg-gray-500'
            >
              Send
            </button>
            {statusMessage && <p className='text-sm text-gray-500 ml-4'>{statusMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
