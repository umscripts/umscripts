import React from 'react';
import ProfileImg from '../assets/images/profile-image.png';

const Home = () => {
    const resumeUrl = '/Resume.pdf';

    return (
        <div className="sm:flex justify-between items-center h-full px-5 sm:px-10 lg:px-20 mt-5 sm:mt-10 xl:mt-5 my-20 md:my-32">
            <div className='text-lg lg:text-2xl flex flex-col gap-2 lg:gap-4'>
                <div>
                    Hi I'm<span className='block text-xl md:text-2xl lg:text-4xl text-Primary font-semibold'> Usman Mustafa</span>
                </div>
                <p className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#050404]'>React.JS Developer</p>
                <p className='text-xs  lg:text-lg text-[#4B4949] sm:w-11/12 md:w-9/12'>I'm Front-End Developer creating seamless, responsive and user-friendly web applications. Specializing in React.js and modern web technologies, I bring ideas to life. My aim is to deliver eye-catching and funcitonal applicatoins</p>
                <a className='p-2 hover:shadow-custom-shadow bg-Primary text-white rounded-lg text-sm md:text-lg cursor-pointer w-fit' href={resumeUrl} download>Download CV</a>
            </div>
            <img src={ProfileImg} alt="profile" className='drop-shadow-2xl w-9/12 sm:w-5/12 ml-[30%] sm:ml-0' />
        </div>
    );
};

export default Home;