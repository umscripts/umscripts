import React from 'react';
import ProfileImg from '../assets/images/profile-image.png';

const Home = () => {
    const resumeUrl = '/Resume.pdf';

    return (
        <div className="flex justify-between items-center h-full px-10 lg:px-20 mt-10 xl:mt-5 my-32">
            <div className='text-lg lg:text-2xl flex flex-col gap-4'>
                <div>
                    Hi I'm<span className='block text-2xl lg:text-4xl text-Primary font-semibold'>Usman Mustafa</span>
                </div>
                <p className='text-3xl lg:text-5xl font-semibold text-[#4B4949]'>React.JS Developer</p>
                <p className='text-xs sm:text-sm lg:text-lg text-[#4B4949] w-4/6'>I'm Front-End Developer creating seamless, responsive and user-friendly web applications. Specializing in React.js and modern web technologies, I bring ideas to life. My aim is to deliver eye-catching and funcitonal applicatoins</p>
                <a className='p-2 hover:shadow-custom-shadow bg-Primary text-white rounded-lg text-sm md:text-lg cursor-pointer w-fit' href={resumeUrl} download>Download CV</a>
            </div>
            <img src={ProfileImg} alt="profile" className='drop-shadow-2xl w-6/12 lg:w-5/12 xl:w-5/12' />
        </div>
    );
};

export default Home;