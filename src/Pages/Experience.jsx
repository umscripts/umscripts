import React from 'react';
import highbitLogo from '../assets/logos/highbit-logo.jpg';
import agentechLogo from '../assets/logos/agentech-logo.jpg';
import kfueitLogo from '../assets/logos/kfueit-logo.png';

const Experience = () => {
  return (
    <div className='px-5 sm:px-10 lg:px-20 my-20 md:my-32' id='experience'>
      <p className='text-2xl my-10 border-l-4 left-0 pl-5 border-Primary'>My Journey</p>
      <div className="relative flex justify-center items-center">
        <div className="absolute h-full w-1 xsm:left-0 sm:left-auto border-l-4 border-Primary"></div>
        <div className="relative lg:w-1/2 pr-10 ">

          <div className="hidden sm:block mr-12 md:mr-20 lg:mr-0 relative p-3 border shadow-custom-shadow rounded-lg space-y-1 hover:bg-Primary hover:text-white">
            <div className="flex gap-2">
              <a href="https://www.linkedin.com/company/agen-tech/posts/?feedView=all" target='_blank'><img src={agentechLogo} alt="Agentech" className="w-10 md:w-12 h-10 md:h-12" /></a>
              <div>
                <a href="https://www.linkedin.com/company/agen-tech/posts/?feedView=all" target='_blank'><h3 className="font-bold">Agentech</h3></a>
                <h3 className="xsm:text-xs md:text-sm lg:text-[16px]">React.JS Dev<span className='hidden md:inline'>eloper</span> Intern</h3>
              </div>
            </div>
            <div className="flex justify-between text-xs lg:text-sm italic flex-col md:flex-row">
              <p>Nov 2023 - Jan 2024</p>
              <p>Rahim Yar Khan</p>
            </div>
            <p className="text-xs lg:text-sm">As a React.js Intern at <b>Agentech</b> for 3 months, I gained hands-on experience in front-end development, contributing to real-world projects and honing my skills in building interactive and responsive web applications. I worked alongside experienced developers, where I assisted in developing web applications.</p>
          </div>
        </div>

        {/* Right side cards */}
        <div className="lg:w-1/2 sm:space-y-60 flex flex-col gap-10">
          <div className="lg:ml-10 relative p-3 border shadow-custom-shadow rounded-lg space-y-1 hover:bg-Primary hover:text-white">
            <div className="flex gap-2">
              <a href="https://www.linkedin.com/company/highbitsolutions/mycompany/" target='_blank'><img src={highbitLogo} alt="Highbit" className="w-10 md:w-12 h-10 md:h-12" /></a>
              <div>
                <a href="https://www.linkedin.com/company/highbitsolutions/mycompany/" target='_blank'><h3 className="xsm:text-xs md:text-sm lg:text-[16px] font-bold">Highbit Technologies</h3></a>
                <h3 className="xsm:text-xs md:text-sm lg:text-[16px]">React.JS Developer</h3>
              </div>
            </div>
            <div className="flex justify-between text-xs lg:text-sm italic">
              <p>Feb 2024 - Present</p>
              <p>Lahore</p>
            </div>
            <p className="text-xs lg:text-sm">At <b>Highbit Technologies</b> as a React Developer, I had the opportunity to work on diverse projects that sharpened my skills in building dynamic and responsive web applications. I developed user-centric interfaces, implement scalable solutions and optimize performance.</p>
          </div>

          <div className="sm:hidden mr-12 xsm:w-full sm:w-auto md:mr-20 lg:mr-0 relative p-3 border shadow-custom-shadow rounded-lg space-y-1 hover:bg-Primary hover:text-white">
            <div className="flex gap-2">
              <a href="https://www.linkedin.com/company/agen-tech/posts/?feedView=all" target='_blank'><img src={agentechLogo} alt="Agentech" className="w-10 md:w-12 h-10 md:h-12" /></a>
              <div>
                <a href="https://www.linkedin.com/company/agen-tech/posts/?feedView=all" target='_blank'><h3 className="font-bold">Agentech</h3></a>
                <h3 className="xsm:text-xs md:text-sm lg:text-[16px]">React.JS Developer Intern</h3>
              </div>
            </div>
            <div className="flex justify-between text-xs lg:text-sm italic flex-col md:flex-row">
              <p>Nov 2023 - Jan 2024</p>
              <p>Rahim Yar Khan</p>
            </div>
            <p className="text-xs lg:text-sm">As a React.js Intern at <b>Agentech</b> for 3 months, I gained hands-on experience in front-end development, contributing to real-world projects and honing my skills in building interactive and responsive web applications. I worked alongside experienced developers, where I assisted in developing web applications.</p>
          </div>

          <div className="lg:ml-10 relative p-3 border shadow-custom-shadow rounded-lg space-y-1 hover:bg-Primary hover:text-white">
            <div className="flex gap-2">

              <a href="https://kfueit.edu.pk/" target='_blank'><img src={kfueitLogo} alt="KFUEIT" className="min-w-10 md:w-12 h-10 md:h-12" /></a>
              <div>
                <a href="https://kfueit.edu.pk/" target='_blank'><h3 className="font-bold text-xs md:text-sm lg:text-[16px]">Khwaja Fareed University of Engineering and Information Technology</h3></a>
                <h3 className="xsm:text-xs md:text-sm lg:text-[16px]">BS Computer Science</h3>
              </div>
            </div>
            <div className="flex justify-between text-xs lg:text-sm italic flex-col md:flex-row">
              <p>June 2020 - June 2024</p>
              <p>Rahim Yar Khan</p>
            </div>
            <p className="text-xs lg:text-sm">I hold a Bachelor's degree in Computer Science from <b>KFUEIT</b>. My academic journey provided me with a strong foundation in core computer science concepts. Throughout my studies, I developed a keen interest in web technologies and software development.</p>
          </div>
        </div>

        {/* Circles between the cards */}
        <div className="absolute h-full flex flex-col justify-around xsm:-left-[10px] sm:left-auto">
          <div className="w-6 h-6 rounded-full bg-Primary"></div>
          <div className="w-6 h-6 rounded-full bg-Primary"></div>
          <div className="w-6 h-6 rounded-full bg-Primary"></div>
        </div>
      </div>

    </div>
  );
};

export default Experience;