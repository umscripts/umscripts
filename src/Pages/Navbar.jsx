import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-around py-5 items-center font-semibold text-[#4B4949] shadow-md'>
                <div className='flex items-center text-2xl cursor-default gap-1'><p className='flex items-center justify-center rounded-lg p-2 bg-Primary text-white text-xl'>um</p>scripts</div>
                <ul className='flex gap-10 text-lg'>
                    <li className='p-2 hover:text-Primary'><Link to="/">Home</Link></li>
                    <li className='p-2 hover:text-Primary'><Link to="/about">About</Link></li>
                    <li className='p-2 hover:text-Primary'><Link to="/experience">Experience</Link></li>
                    <li className='p-2 hover:text-Primary'><Link to="/projects">Projects</Link></li>
                    <li className='p-2 text-white rounded-lg bg-Primary hover:text-Primary hover:bg-[#E5E5E5]'><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar