import React, { useState, useEffect } from 'react';
import ProfileImg from '../assets/images/profile-image2.png';
import typingData from '../data/typing.json'; // Import your JSON file

const Home = () => {
    const resumeUrl = '/Usman Mustafa Resume.pdf';
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const titles = typingData?.titles || ["React.JS Developer"];
    const currentTitle = titles[currentTitleIndex];

    useEffect(() => {
        if (isPaused) {
            const pauseTimer = setTimeout(() => {
                setIsPaused(false);
                if (isDeleting) {
                    setIsDeleting(true);
                } else {
                    setIsDeleting(true);
                }
            }, typingData?.pauseAfterComplete || 2000);
            return () => clearTimeout(pauseTimer);
        }

        if (!isPaused) {
            if (!isDeleting && currentIndex < currentTitle.length) {
                // Typing forward
                const timer = setTimeout(() => {
                    setDisplayText(currentTitle.slice(0, currentIndex + 1));
                    setCurrentIndex(currentIndex + 1);
                }, typingData?.typingSpeed || 100);
                return () => clearTimeout(timer);
            } else if (!isDeleting && currentIndex === currentTitle.length) {
                // Finished typing, start pause
                setIsPaused(true);
            } else if (isDeleting && currentIndex > 0) {
                // Deleting backward
                const timer = setTimeout(() => {
                    setDisplayText(currentTitle.slice(0, currentIndex - 1));
                    setCurrentIndex(currentIndex - 1);
                }, typingData?.deleteSpeed || 50);
                return () => clearTimeout(timer);
            } else if (isDeleting && currentIndex === 0) {
                // Finished deleting, move to next title
                setIsDeleting(false);
                setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
            }
        }
    }, [currentIndex, currentTitle, isDeleting, isPaused]);

    return (
        <div className="sm:flex justify-between items-center h-full px-5 sm:px-10 lg:px-20 mt-5 sm:mt-10 xl:mt-5 my-20 md:my-32" data-aos="zoom-out">
            <div className='text-lg lg:text-2xl flex flex-col gap-2 lg:gap-4'>
                <div>
                    Hi I'm<span className='block text-xl md:text-2xl lg:text-4xl text-Primary font-semibold'> Usman Mustafa</span>
                </div>
                <p className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#050404] min-h-[1.5em]'>
                    <span>{displayText}</span>
                    <span className="inline-block w-1 h-[1em] bg-Primary ml-1 animate-pulse"></span>
                </p>
                <p className='text-xs lg:text-lg text-[#4B4949] sm:w-11/12 md:w-9/12'>Full Stack Developer with 1.5+ years of experience in React.js, Next.js and modern JavaScript. Skilled in building responsive UIs, API integrations and expanding expertise into backend with Node.js, Express and MongoDB. Passionate about creating scalable and user-focused web applications.</p>
                <a className='p-2 hover:shadow-custom-shadow bg-Primary text-white rounded-lg text-sm md:text-lg cursor-pointer w-fit' href={resumeUrl} download>Download CV</a>
            </div>
            <img src={ProfileImg} alt="profile" className='drop-shadow-2xl w-9/12 sm:w-5/12 ml-[26%] sm:ml-0' />
        </div>
    );
};

export default Home;