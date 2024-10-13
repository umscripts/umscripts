import React from 'react';
import ProfileImg from '../assets/images/profile-image.png';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <div className="flex justify-between items-center h-full px-10 lg:px-20 mt-10 xl:mt-5">
                <div className='text-lg lg:text-2xl space-y-1 lg:space-y-3 xl:space-y-5'>
                    <div>
                        Hi I'm<span className='block text-2xl lg:text-4xl text-Primary font-semibold'>Usman Mustafa</span>
                    </div>
                    <p className='text-3xl lg:text-5xl font-semibold text-[#4B4949]'>React.JS Developer</p>
                    <p className='text-xs sm:text-sm lg:text-lg text-[#4B4949]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempora atque accusamus vitae! Laborum excepturi similique obcaecati quisquam iure odit esse, natus officia autem, distinctio, at ullam quis dolor eaque temporibus ducimus suscipit nobis!</p>
                    <button className='p-2 hover:shadow-custom-shadow bg-Primary text-white rounded-lg text-sm md:text-lg'>Download CV</button>
                </div>
                <img src={ProfileImg} alt="profile" className='drop-shadow-2xl w-6/12 lg:w-5/12 xl:w-5/12' />
            </div>
        </>
    );
};

export default Home;