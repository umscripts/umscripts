import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='w-full bg-PrimaryBG shadow-custom-shadow'>
      <footer className='text-center py-5 max-w-[1400px] text-xs sm:text-sm mx-auto'>
        &copy; {currentYear} <span className='text-Primary font-semibold'>umscripts</span> All Rights Reserved
      </footer>
    </div>
  );
};

export default Footer;