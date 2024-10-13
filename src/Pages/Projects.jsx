import React from 'react';
import umscrptsThumb from '../assets/projects/umscripts/thumbnail.png';
import copyIcon from '../assets/icons/copy-icon.svg';
import linkIcon from '../assets/icons/link-icon.svg';
import videoIcon from '../assets/icons/video-icon.svg';

const Projects = () => {
  return (
    <div className='px-20'>
      <div className='flex justify-between my-10'>
        <p className='text-2xl border-l-4 pl-5 border-Primary'>My Projects</p>
        <div className='flex gap-10'>
          <button className='p-2 shadow-custom-shadow rounded-lg min-w-20 hover:bg-Primary hover:text-white focus:bg-Primary focus:text-white'>All</button>
          <button className='p-2 shadow-custom-shadow rounded-lg min-w-20 hover:bg-Primary hover:text-white focus:bg-Primary focus:text-white'>Frontend</button>
          <button className='p-2 shadow-custom-shadow rounded-lg min-w-20 hover:bg-Primary hover:text-white focus:bg-Primary focus:text-white'>Full Stack</button>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-5'>
        <div className='text-sm p-5 border border-gray-300 rounded-lg space-y-3 hover:shadow-custom-shadow'>
          <img src={umscrptsThumb} alt="umscripts" className='border border-gray-300 rounded-lg' />
          <div className='flex gap-1'>
            <button className='border border-gray-300 p-1 rounded-lg flex items-center justify-center gap-1'>Visti Website <img src={linkIcon} alt="link" className='w-4' /></button>
            <button className='border border-gray-300 p-1 rounded-lg flex items-center justify-center gap-1'>View Demo <img src={videoIcon} alt="video" className='w-5' /></button>
            <button className='border border-gray-300 p-1 rounded-lg flex items-center justify-center gap-1'>Copy Link <img src={copyIcon} alt="copy" className='w-4' /></button>
          </div>
          <p className='text-Primary font-semibold text-lg'>umscripts</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione omnis reiciendis architecto libero in veniam eos! Perferendis, provident dolor!</p>
        </div>
        <div className='text-sm p-5 border border-gray-300 rounded-lg space-y-3 hover:shadow-custom-shadow'>
          <img src={umscrptsThumb} alt="umscripts" className='border border-gray-300 rounded-lg' />
          <div className='flex gap-1'>
            <button className='border border-gray-300 p-1 rounded-lg flex items-center justify-center gap-1'>Visti Website <img src={linkIcon} alt="link" className='w-4' /></button>
            <button className='border border-gray-300 p-1 rounded-lg flex items-center justify-center gap-1'>View Demo <img src={videoIcon} alt="video" className='w-5' /></button>
            <button className='border border-gray-300 p-1 rounded-lg flex items-center justify-center gap-1'>Copy Link <img src={copyIcon} alt="copy" className='w-4' /></button>
          </div>
          <p className='text-Primary font-semibold text-lg'>umscripts</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione omnis reiciendis architecto libero in veniam eos! Perferendis, provident dolor!</p>
        </div>
        <div className='text-sm p-5 border border-gray-300 rounded-lg space-y-3 hover:shadow-custom-shadow'>
          <img src={umscrptsThumb} alt="umscripts" className='border border-gray-300 rounded-lg' />
          <div className='flex gap-1'>
            <button className='border border-gray-300 p-1 rounded-lg flex items-center justify-center gap-1'>Visti Website <img src={linkIcon} alt="link" className='w-4' /></button>
            <button className='border border-gray-300 p-1 rounded-lg flex items-center justify-center gap-1'>View Demo <img src={videoIcon} alt="video" className='w-5' /></button>
            <button className='border border-gray-300 p-1 rounded-lg flex items-center justify-center gap-1'>Copy Link <img src={copyIcon} alt="copy" className='w-4' /></button>
          </div>
          <p className='text-Primary font-semibold text-lg'>umscripts</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione omnis reiciendis architecto libero in veniam eos! Perferendis, provident dolor!</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;