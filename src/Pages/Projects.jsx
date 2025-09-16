import React, { useState } from 'react';
import ProjectCard from '../Components/ProjectCard/ProjectCard';
import projectsData from '../Components/ProjectCard/projectsData';


const Projects = () => {

  return (
    <div className='px-5 sm:px-10 lg:px-20 my-32' id='projects'>
      <div className='flex justify-between my-10 sm:items-center flex-col sm:flex-row relative'>
        <p className='text-lg sm:text-xl md:text-2xl border-l-4 pl-2 sm:pl-5 border-Primary'>My Projects</p>
        {/* <div className='flex gap-2 sm:gap-5 md:gap-10 text-xs sm:text-sm xl:text-[16px] top-8 right-0 sm:top-0 absolute sm:relative'>
          <button className='px-2 py-1  md:p-2 shadow-custom-shadow rounded-lg min-w-10 sm:min-w-16 xl:min-w-20 hover:bg-Primary hover:text-white focus:bg-Primary focus:text-white bg-PrimaryBG' onClick={() => handleCategoryClick('all')}>All</button>
          <button className='px-2 py-1  md:p-2 shadow-custom-shadow rounded-lg min-w-16 xl:min-w-20 hover:bg-Primary hover:text-white focus:bg-Primary focus:text-white bg-PrimaryBG' onClick={() => handleCategoryClick('frontend')}>Frontend</button>
          <button className='px-2 py-1  md:p-2 shadow-custom-shadow rounded-lg min-w-16 xl:min-w-20 hover:bg-Primary hover:text-white focus:bg-Primary focus:text-white bg-PrimaryBG' onClick={() => handleCategoryClick('fullstack')}>Full Stack</button>
        </div> */}
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-5'>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            category={project.category}
            image={project.image}
            link={project.link}
            video={project.video}
            name={project.name}
            description={project.description}
            isLive={project.isLive}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;