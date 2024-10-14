import React, { useState } from 'react';
import ProjectCard from '../Components/ProjectCard/ProjectCard';
import projectsData from '../Components/ProjectCard/projectsData';


const Projects = () => {

  return (
    <div className='px-10 lg:px-20 my-32' id='projects'>
      <div className='flex justify-between my-10'>
        <p className='text-2xl border-l-4 pl-5 border-Primary'>My Projects</p>
        <div className='flex gap-10'>
          <button className='p-2 shadow-custom-shadow rounded-lg min-w-20 hover:bg-Primary hover:text-white focus:bg-Primary focus:text-white' onClick={() => handleCategoryClick('all')}>All</button>
          <button className='p-2 shadow-custom-shadow rounded-lg min-w-20 hover:bg-Primary hover:text-white focus:bg-Primary focus:text-white' onClick={() => handleCategoryClick('frontend')}>Frontend</button>
          <button className='p-2 shadow-custom-shadow rounded-lg min-w-20 hover:bg-Primary hover:text-white focus:bg-Primary focus:text-white' onClick={() => handleCategoryClick('fullstack')}>Full Stack</button>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-5'>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            category={project.category}
            image={project.image}
            link={project.link}
            video={project.video}
            name={project.name}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;