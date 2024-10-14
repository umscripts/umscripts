import React from 'react';
import highbitLogo from '../assets/logos/highbit-logo.jpg';
import agentechLogo from '../assets/logos/agentech-logo.jpg';
import kfueitLogo from '../assets/logos/kfueit-logo.jpg';

const Experience = () => {
  return (
    <div className='px-10 lg:px-20 my-32' id='experience'>
      <p className='text-2xl my-10 border-l-4 pl-5 border-Primary'>My Journey</p>
      <div className="relative flex justify-center items-center">
        {/* Vertical dividing line */}
        <div className="absolute h-full w-1 border-l-4 border-Primary"></div>

        {/* Left card (centered vertically between the two right cards) */}
        <div className="relative lg:w-1/2 pr-10">
          <div className="relative p-3 border shadow-custom-shadow rounded-lg space-y-1 hover:bg-Primary hover:text-white">
            <div className="flex gap-2">
              <a href="https://www.linkedin.com/company/agen-tech/posts/?feedView=all" target='_blank'><img src={agentechLogo} alt="Agentech" className="w-12 h-12" /></a>
              <div>
                <a href="https://www.linkedin.com/company/agen-tech/posts/?feedView=all" target='_blank'><h3 className="font-bold">Agentech</h3></a>
                <h3 className="">React.JS Developer Intern</h3>
              </div>
            </div>
            <div className="flex justify-between text-sm italic">
              <p>Dec 2023 - Feb 2024</p>
              <p>Rahim Yar Khan</p>
            </div>
            <p className="text-sm">As a React.js Intern at <b>Agentech</b> for 3 months, I gained hands-on experience in front-end development, contributing to real-world projects and honing my skills in building interactive and responsive web applications. I worked alongside experienced developers, where I assisted in developing web applications.</p>
          </div>
        </div>

        {/* Right side cards */}
        <div className="lg:w-1/2 space-y-60">
          <div className="lg:ml-10 relative p-3 border shadow-custom-shadow rounded-lg space-y-1 hover:bg-Primary hover:text-white">
            <div className="flex gap-2">
              <a href="https://www.linkedin.com/company/highbitsolutions/mycompany/" target='_blank'><img src={highbitLogo} alt="Highbit" className="w-12 h-12" /></a>
              <div>
                <a href="https://www.linkedin.com/company/highbitsolutions/mycompany/" target='_blank'><h3 className="font-bold">Highbit Technologies</h3></a>
                <h3 className="">React.JS Developer</h3>
              </div>
            </div>
            <div className="flex justify-between text-sm italic">
              <p>March 2024 - Present</p>
              <p>Lahore</p>
            </div>
            <p className="text-sm">At <b>Highbit Technologies</b> as a React Developer, I had the opportunity to work on diverse projects that sharpened my skills in building dynamic and responsive web applications. I developed user-centric interfaces, implement scalable solutions and optimize performance.</p>
          </div>

          <div className="lg:ml-10 relative p-3 border shadow-custom-shadow rounded-lg space-y-1 hover:bg-Primary hover:text-white">
            <div className="flex gap-2">

              <a href="https://kfueit.edu.pk/" target='_blank'><img src={kfueitLogo} alt="KFUEIT" className="w-12 h-12" /></a>
              <div>
                <a href="https://kfueit.edu.pk/" target='_blank'><h3 className="font-bold">Khwaja Fareed University of Engineering and Information Technology</h3></a>
                <h3 className="">BS Computer Science</h3>
              </div>
            </div>
            <div className="flex justify-between text-sm italic">
              <p>June 2020 - June 2024</p>
              <p>Rahim Yar Khan</p>
            </div>
            <p className="text-sm">I hold a Bachelor's degree in Computer Science from <b>KFUEIT</b>. My academic journey provided me with a strong foundation in core computer science concepts. Throughout my studies, I developed a keen interest in web technologies and software development.</p>
          </div>
        </div>

        {/* Circles between the cards */}
        <div className="absolute h-full flex flex-col justify-around">
          <div className="w-6 h-6 rounded-full bg-Primary"></div>
          <div className="w-6 h-6 rounded-full bg-Primary"></div>
          <div className="w-6 h-6 rounded-full bg-Primary"></div>
        </div>
      </div>

    </div>
  );
};

export default Experience;