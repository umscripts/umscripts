import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            {/* <nav className='px-10 lg:px-20 flex justify-between py-3 items-center text-[#4B4949] shadow-md sm:bg-red-500 md:bg-green-500 lg:bg-blue-500 xl:bg-yellow-500 2xl:bg-cyan-500'> */}
            <nav className='px-10 lg:px-20 flex justify-between py-3 items-center shadow-md'>
                <div className='flex items-center text-lg md:text-xl cursor-default gap-1'><p className='flex items-center justify-center rounded-lg p-1 md:p-2 bg-Primary text-white text-lg md:text-xl'>um</p>scripts</div>
                <ul className='flex space-x-4 md:space-x-5 lg:space-x-10'>
                    <li className='p-1 md:p-2 hover:text-Primary cursor-pointer'>Home</li>
                    <li className='p-1 md:p-2 hover:text-Primary cursor-pointer'>About</li>
                    <li className='p-1 md:p-2 hover:text-Primary cursor-pointer'>Experience</li>
                    <li className='p-1 md:p-2 hover:text-Primary cursor-pointer'>Projects</li>
                    <li className='p-1 md:p-2 text-white rounded-lg bg-Primary hover:shadow-lg cursor-pointer'>Contact</li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;