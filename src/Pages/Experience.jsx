import React from 'react';
import highbitLogo from '../assets/logos/highbit-logo.jpg';
import agentechLogo from '../assets/logos/agentech-logo.jpg';
import kfueitLogo from '../assets/logos/kfueit-logo.jpg';

const Experience = () => {
  return (
    <div className='px-20 h-screen'>
      <p className='text-2xl my-10 border-l-4 pl-5 border-Primary'>My Journey</p>
      <div className='border-l-4 border-Primary pl-20 space-y-10 w-1/2 float-end'>
        <div class="relative p-3 border shadow-custom-shadow rounded-lg space-y-1 hover:bg-Primary hover:text-white">
          <div class="absolute w-6 h-6 rounded-full -left-[95px] top-16 bg-Primary"></div>
          <div className='flex gap-2'>
            <img src={highbitLogo} alt="Agentech" className='w-12 h-12' />
            <div>
              <h3 class="font-bold">Highbit Technologies</h3>
              <h3 class="">React.JS Developer</h3>
            </div>
          </div>
          <div className='flex justify-between text-sm italic'>
            <p>March 2024 - Present</p>
            <p>Lahore</p>
          </div>
          <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div class="relative p-3 border shadow-custom-shadow rounded-lg -left-[135%] space-y-1 hover:bg-Primary hover:text-white">
          <div class="absolute w-6 h-6 rounded-full -right-[110px] top-16 bg-Primary"></div>
          <div className='flex gap-2'>
            <img src={agentechLogo} alt="Agentech" className='w-12 h-12' />
            <div>
              <h3 class="font-bold">Agentech</h3>
              <h3 class="">React.JS Developer</h3>
            </div>
          </div>
          <div className='flex justify-between text-sm italic'>
            <p>Dec 2023 - Feb 2024</p>
            <p>Rahim Yar Khan</p>
          </div>
          <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div class="relative p-3 border shadow-custom-shadow rounded-lg space-y-1 hover:bg-Primary hover:text-white">
          <div class="absolute w-6 h-6 rounded-full -left-[95px] top-16 bg-Primary"></div>
          <div className='flex gap-2'>
            <img src={kfueitLogo} alt="Agentech" className='w-12 h-12' />
            <div>
              <h3 class="font-bold">Khwaja Fareed University of Engineering and Information Technology</h3>
              {/* <h3 class="">BS Computer Science</h3> */}
            </div>
          </div>
          <div className='flex justify-between text-sm italic'>
            <p>June 2023 - June 2024</p>
            <p>Rahim Yar Khan</p>
          </div>
          <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;