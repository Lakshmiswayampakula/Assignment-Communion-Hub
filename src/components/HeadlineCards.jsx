import React from 'react';
import event1 from '../image/events-3.jpg';
import event2 from '../image/events-2.jpg';
import event3 from '../image/events-1.jpg';
import event4 from '../image/events-4.jpg';
import { FaUsers, FaHandsHelping, FaGraduationCap, FaHandshake } from 'react-icons/fa';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-4 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <div className='flex items-center px-2 pt-4'>
            <FaUsers className='text-2xl mr-2' />
            <p className='font-bold text-2xl'>Community</p>
          </div>
          <p className='px-2'>Since 1950</p>
          <button className='border-blue-500 bg-blue-500 text-white mx-2 absolute bottom-4'>Join Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={event1}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <div className='flex items-center px-2 pt-4'>
            <FaHandsHelping className='text-2xl mr-2' />
            <p className='font-bold text-2xl'>Support</p>
          </div>
          <p className='px-2'>Email US / Contact</p>
          <button className='border-blue-500 bg-blue-500 text-white mx-2 absolute bottom-4'>Join Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={event2}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <div className='flex items-center px-2 pt-4'>
            <FaGraduationCap className='text-2xl mr-2' />
            <p className='font-bold text-2xl'>Alumni</p>
          </div>
          <p className='px-2'>10,000+ Employees</p>

          <button className='border-blue-500 bg-blue-500 text-white mx-2 absolute bottom-4'>Join Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={event3}
          alt='/'
        />
      </div>
      {/* New Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <div className='flex items-center px-2 pt-4'>
            <FaHandshake className='text-2xl mr-2' />
            <p className='font-bold text-2xl'>Collaboration</p>
          </div>
          <p className='px-2'>3,94,567 Associated Menbers</p>
          <button className='border-blue-500 bg-blue-500 text-white mx-2 absolute bottom-4'>Join Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={event4}
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;