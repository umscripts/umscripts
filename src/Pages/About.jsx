import React from 'react';
import reactLogo from '../assets/logos/react-logo.svg';
import nodeLogo from '../assets/logos/node-logo.svg';
import mongoLogo from '../assets/logos/mongodb-logo.svg';
import expressLogo from '../assets/logos/express-logo.svg';

const About = () => {
  return (
    <div className='px-5 sm:px-10 lg:px-20 my-20 md:my-32 overflow-hidden' id='about'>
      <p className='text-2xl my-5 md:my-10 border-l-4 pl-5 border-Primary'>About Me</p>
      <div className='flex flex-col md:flex-row w-full items-center justify-between gap-16'>
        <div className='md:w-1/2'>
          <p className='text-xs lg:text-sm xl:text-lg'>Proficient in website development, specializing in React.js. Strong background in HTML, CSS and JavaScript. Adept with version control using GitHub. Experienced in building a variety of front-end projects using React.js. Eager to leverage my skills in a new role.
          </p>
          <p className='text-xl text-Primary font-semibold my-5'>My Skills</p>
          {/* <div className="grid gap-2 lg:gap-3 gap-x-10 lg:w-4/6 xl:grid-cols-1 grid-cols-2">
            <div>
              HTML
              <div className="relative w-full bg-gray-300 rounded-full h-2 overflow-hidden">
                <div className="bg-Primary h-2 rounded-full animate-fill-80"></div>
              </div>
            </div>
            <div>
              CSS
              <div className="relative w-full bg-gray-300 rounded-full h-2 overflow-hidden">
                <div className="bg-Primary h-2 rounded-full animate-fill-70"></div>
              </div>
            </div>
            <div>
              JavsScript
              <div className="relative w-full bg-gray-300 rounded-full h-2 overflow-hidden">
                <div className="bg-Primary h-2 rounded-full animate-fill-80"></div>
              </div>
            </div>
            <div>
              React
              <div className="relative w-full bg-gray-300 rounded-full h-2 overflow-hidden">
                <div className="bg-Primary h-2 rounded-full animate-fill-80"></div>
              </div>
            </div>
            <div>
              Node
              <div className="relative w-full bg-gray-300 rounded-full h-2 overflow-hidden">
                <div className="bg-Primary h-2 rounded-full animate-fill-70"></div>
              </div>
            </div>
            <div>
              MongoDB
              <div className="relative w-full bg-gray-300 rounded-full h-2 overflow-hidden">
                <div className="bg-Primary h-2 rounded-full animate-fill-70"></div>
              </div>
            </div>
          </div> */}
          <div className='flex flex-wrap gap-2 my-10 text-xs lg:text-sm'>
            <button className='border rounded-lg px-2 py-1 bg-Primary text-white cursor-default'>HTML</button>
            <button className='border rounded-lg px-2 py-1 bg-Primary text-white cursor-default'>CSS</button>
            <button className='border rounded-lg px-2 py-1 bg-Primary text-white cursor-default'>JavaScript</button>
            <button className='border rounded-lg px-2 py-1 bg-Primary text-white cursor-default'>React.js</button>
            <button className='border rounded-lg px-2 py-1 bg-Primary text-white cursor-default'>Axios</button>
            <button className='border rounded-lg px-2 py-1 bg-Primary text-white cursor-default'>Redux Toolkit</button>
            <button className='border rounded-lg px-2 py-1 bg-Primary text-white cursor-default'>TanStack</button>
            <button className='border rounded-lg px-2 py-1 bg-Primary text-white cursor-default'>React Router</button>
            <button className='border rounded-lg px-2 py-1 bg-Primary text-white cursor-default'>Tailwind CSS</button>
            <button className='border rounded-lg px-2 py-1 bg-Primary text-white cursor-default'>Bootstrap</button>
            <button className='border rounded-lg px-2 py-1 bg-Primary text-white cursor-default'>Shadcn UI</button>
            <button className='border rounded-lg px-2 py-1 bg-Primary text-white cursor-default'>Material UI</button>
            <button className='border rounded-lg px-2 py-1 bg-Primary text-white cursor-default'>Chakra UI</button>
            <button className='border rounded-lg px-2 py-1 bg-Primary text-white cursor-default'>Figma</button>
            <button className='border rounded-lg px-2 py-1 bg-Primary text-white cursor-default'>REST API</button>
            <button className='border rounded-lg px-2 py-1 bg-Primary text-white cursor-default'>Next.js</button>
            <button className='border rounded-lg px-2 py-1 bg-Primary text-white cursor-default'>Strong Communication</button>
            <button className='border rounded-lg px-2 py-1 bg-Primary text-white cursor-default'>Time Management</button>
            <button className='border rounded-lg px-2 py-1 bg-Primary text-white cursor-default'>Problem Solving</button>
          </div>
        </div>
        <div className='w-4/6 sm:w-3/6 my-5 sm:my-10 md:my-0 md:w-5/12 lg:w-2/5 xl:w-2/6 h-full grid grid-cols-2 justify-center items-center' data-aos="fade-left">
          <div className='w-full shadow-custom-shadow flex justify-center items-center rounded-tl-3xl -mt-10 -ml-5 xl:-mt-20 xl:-ml-10 bg-PrimaryBG'>
            <img src={reactLogo} alt="" />
          </div>
          <div className='w-full shadow-custom-shadow flex justify-center items-center rounded-tr-3xl bg-PrimaryBG'>
            <img src={nodeLogo} alt="" />
          </div>
          <div className='w-full shadow-custom-shadow flex justify-center items-center rounded-bl-3xl -ml-5 xl:-ml-10 bg-PrimaryBG'>
            <img src={mongoLogo} alt="" />
          </div>
          <div className='w-full shadow-custom-shadow flex justify-center items-center rounded-br-3xl mt-10 h-full xl:mt-20 bg-PrimaryBG'>
            <img src={expressLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;