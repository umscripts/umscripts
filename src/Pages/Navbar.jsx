import React, { useState } from 'react';
import menuIcon from '../assets/icons/menu-icon.svg';

const Navbar = () => {
    const [navBox, setNavBox] = useState(false);
    return (
        <>
            {/* <nav className='px-10 lg:px-20 flex justify-between py-3 items-center text-[#4B4949] shadow-md sm:bg-red-500 md:bg-green-500 lg:bg-blue-500 xl:bg-yellow-500 2xl:bg-cyan-500'> */}
            {navBox && <div className='bg-white w-4/6 absolute top-16 right-10 shadow-custom-shadow rounded-lg h-1/2 z-50'>
                <span className='absolute right-3 top-1 text-4xl text-Primary' onClick={() => setNavBox(false)}>&times;</span>
                <ul className='text-Primary p-5 flex flex-col gap-5 text-lg font-semibold'>
                    <li>Home</li>
                    <a href="#about"><li>About</li></a>
                    <a href="#experience"><li>Experience</li></a>
                    <a href="#projects"><li>Projects</li></a>
                    <a href="#contact"><li>Contact</li></a>
                </ul>
            </div>}
            <nav className='px-5 sm:px-10 lg:px-20 flex justify-between py-3 items-center shadow-md'>
                <div className='flex items-center text-lg md:text-xl cursor-default gap-[2px]'><p className='flex items-center justify-center rounded-lg px-[4px] py-[2px] md:p-1 bg-Primary text-white text-lg md:text-xl font-semibold'>um</p><span className='text-Primary font-semibold'>scripts</span></div>
                <ul className='flex space-x-4 md:space-x-5 lg:space-x-10 text-sm md:text-[16px]'>
                    <li className='p-1 md:p-2 hover:text-Primary cursor-pointer hidden sm:block'>Home</li>
                    <a href="#about"><li className='p-1 md:p-2 hover:text-Primary cursor-pointer hidden sm:block'>About</li></a>
                    <a href="#experience"><li className='p-1 md:p-2 hover:text-Primary cursor-pointer hidden sm:block'>Experience</li></a>
                    <a href="#projects"><li className='p-1 md:p-2 hover:text-Primary cursor-pointer hidden sm:block'>Projects</li></a>
                    <a href="#contact"><li className='p-1 md:p-2 font-semibold text-white rounded-lg bg-Primary hover:shadow-lg cursor-pointer'>Contact</li></a>
                    <img src={menuIcon} alt="menu" className='w-7 rounded-md sm:hidden' onClick={() => setNavBox(!navBox)} />
                </ul>
            </nav>
        </>
    );
};

export default Navbar;