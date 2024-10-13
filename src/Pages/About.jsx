import React from 'react';
import reactLogo from '../assets/logos/react-logo.svg';
import nodeLogo from '../assets/logos/node-logo.svg';
import mongoLogo from '../assets/logos/mongodb-logo.svg';
import expressLogo from '../assets/logos/express-logo.svg';

const About = () => {
  return (
    <div className='px-20'>
      <p className='text-2xl my-10 border-l-4 pl-5 border-Primary'>About Me</p>
      <div className='flex w-full'>
        <div className='w-1/2'>
          <p className='text-35'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ad provident officiis numquam optio! Aspernatur possimus voluptatem ducimus dolorum natus assumenda omnis hic, nemo, aperiam et vel vero odit magni explicabo nulla quidem minima soluta ex rerum sapiente doloribus alias dolore fuga ullam. Assumenda deserunt fugit eos, magni laborum totam!</p>
          <p className='text-xl text-Primary font-semibold my-5'>My Skills</p>
          <div class="flex flex-col gap-1 w-4/6">
            HTML
            <div class="relative w-full bg-gray-300 rounded-full h-2 overflow-hidden">
              <div class="bg-Primary h-2 rounded-full animate-fill-80"></div>
            </div>
            CSS
            <div class="relative w-full bg-gray-300 rounded-full h-2 overflow-hidden">
              <div class="bg-Primary h-2 rounded-full animate-fill-70"></div>
            </div>
            JavsScript
            <div class="relative w-full bg-gray-300 rounded-full h-2 overflow-hidden">
              <div class="bg-Primary h-2 rounded-full animate-fill-80"></div>
            </div>
            React
            <div class="relative w-full bg-gray-300 rounded-full h-2 overflow-hidden">
              <div class="bg-Primary h-2 rounded-full animate-fill-80"></div>
            </div>
            Node
            <div class="relative w-full bg-gray-300 rounded-full h-2 overflow-hidden">
              <div class="bg-Primary h-2 rounded-full animate-fill-70"></div>
            </div>
            MongoDB
            <div class="relative w-full bg-gray-300 rounded-full h-2 overflow-hidden">
              <div class="bg-Primary h-2 rounded-full animate-fill-70"></div>
            </div>
          </div>
        </div>
        <div className='w-1/2 flex flex-wrap justify-center items-center'>
          <div className='w-[30%] shadow-custom-shadow h-[35%] m-3 -mt-25 rounded-tl-[40px] flex justify-center items-center flex-col text-gray-300 text-2xl'>
            <img src={reactLogo} alt="" />
          </div>
          <div className='w-[30%] shadow-custom-shadow h-[35%] m-3 mt-12 rounded-tr-[40px] flex justify-center items-center'>
            <img src={nodeLogo} alt="" />
          </div>
          <div className='w-[30%] shadow-custom-shadow h-[35%] m-3 -mt-20 rounded-bl-[40px] flex justify-center items-center'>
            <img src={mongoLogo} alt="" />
          </div>
          <div className='w-[30%] shadow-custom-shadow h-[35%] m-3 -mt-10 rounded-br-[40px] flex justify-center items-center'>
            <img src={expressLogo} alt="" className='w-40' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;