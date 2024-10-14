import React, { useEffect, useState } from 'react';

const ScrollBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button onClick={scrollToTop} className={`fixed bottom-5 w-10 h-10 text-2xl right-5 bg-Primary text-white rounded-full shadow-lg transition-opacity duration-300 ${isVisible ? 'opacity-100 block' : 'opacity-0 pointer-events-none none'}`}>
            ^
        </button>
    );
};

export default ScrollBtn;
