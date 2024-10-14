import React from 'react';
import menuIcon from '../assets/icons/menu-icon.svg'

const Navbar = () => {
    return (
        <>
            {/* <nav className='px-10 lg:px-20 flex justify-between py-3 items-center text-[#4B4949] shadow-md sm:bg-red-500 md:bg-green-500 lg:bg-blue-500 xl:bg-yellow-500 2xl:bg-cyan-500'> */}
            <nav className='px-10 lg:px-20 flex justify-between py-3 items-center shadow-md'>
                <div className='flex items-center text-lg md:text-xl cursor-default gap-[2px]'><p className='flex items-center justify-center rounded-lg p-1 md:p-2 bg-Primary text-white text-lg md:text-xl font-semibold'>um</p><span className='text-Primary font-semibold'>scripts</span></div>
                <ul className='flex space-x-4 md:space-x-5 lg:space-x-10 text-sm md:text-[16px]'>
                    <li className='p-1 md:p-2 hover:text-Primary cursor-pointer hidden'>Home</li>
                    <a href="#about"><li className='p-1 md:p-2 hover:text-Primary cursor-pointer hidden'>About</li></a>
                    <a href="#experience"><li className='p-1 md:p-2 hover:text-Primary cursor-pointer hidden'>Experience</li></a>
                    <a href="#projects"><li className='p-1 md:p-2 hover:text-Primary cursor-pointer hidden'>Projects</li></a>
                    <a href="#contact"><li className='p-1 md:p-2 text-white rounded-lg bg-Primary hover:shadow-lg cursor-pointer'>Contact</li></a>
                </ul>
                <img src={menuIcon} alt="menu" className='w-7 border-Primary border-2 rounded-md' />
            </nav>
        </>
    );
};

export default Navbar;