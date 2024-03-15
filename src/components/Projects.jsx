import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import projectsData from './utils/ProjectData';
import './css/GradBg.css'

import img1 from '../assets/project-arithmetix.png';

const Projects = () => {

  const currentProject = {
    title: 'arithmetix',
    secondTitle: 'A-Level Maths e-Learning platform',
    techStack: ['VueJS', 'TailwindCSS', 'Webpack', 'Jest', 'NodeJS', 'Express', 'PostgreSQL'],
    description: 'An e-learning website to help A-level Maths students in preparation for their exams. This includes provided resources of quizzes, notes and exam papers based on the syllabus of the exam boards: AQA, OCR and Edexcel.',
    imageUrl: img1,
    demoLink: 'd',
    codeLink: 'https://github.com/toniu/arithmetix',
    bgColors: ['#1b2738', '#0b1017']
  }

  return (
    <div id="projects" className="bg-white relative h-auto p-2">
      {/* Carousel dots on top */}
      <div id='carousel-tracker' className='py-2 text-3xl text-center'>
        ...
      </div>
      {/* Slider Card */}
      <div id='card' className="mx-auto h-[80vh] w-[85%] md:w-[85%] rounded-md text-left md:text-left">
        <div className='p-2 flex justify-around md:justify-start'>
          {currentProject.demoLink.trim().length > 0 && (
            <a href={currentProject.demoLink} target="_blank" rel="noopener noreferrer"
              className="flex m-1 py-1 px-5 bg-gray-800 bg-opacity-90 rounded-full text-white text-base md:text-lg
            hover:bg-blue-400 transition 100">
              <FaExternalLinkAlt className='m-1 text-2xl md:text-2xl' />
              <span className='m-1 px-5'>Demo</span>
            </a>
          )}
          <a href={currentProject.codeLink} target="_blank" rel="noopener noreferrer"
            className="flex m-1 py-1 px-5 bg-gray-900 bg-opacity-90 rounded-full text-white text-base md:text-lg
            hover:bg-blue-400 transition 100">
            <FaGithub className='m-1 text-2xl md:text-2xl' />
            <span className='m-1 px-5'>Code</span>
          </a>
        </div>
        <div
          style={{
            backgroundSize: '200% auto',
            backgroundImage: `linear-gradient(to right, ${currentProject.bgColors[0]} 0%, ${currentProject.bgColors[1]} 100%)`,
            animation: 'gradientAnimation 5s https://www.hopeinternational.org/ease infinite',
          }}>
          <div className='block'>
            <div className="w-full h-52 md:w-[250px] md:h-[200px] bg-gray-300 overflow-hidden">
              <img src={currentProject.imageUrl} alt='' className="w-full h-full object-cover" />
            </div>

            <div className='p-3 md:p-5'>
              <h2 className='text-white font-bold text-xl md:text-2xl'> {currentProject.title} </h2>
              <h3 className='text-gray-300 font-semibold text-base md:text-xl'> {currentProject.secondTitle} </h3>
              <ul className='p-1 flex justify-start md:justify-normal flex-wrap select-none'>
                {currentProject.techStack.map((tech) => (
                  <li className='m-1 py-0.5 px-5 bg-white bg-opacity-90 rounded-full text-black text-sm md:text-base'>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='p-4'>
            <p className='text-gray-200 font-normal text-sm md:text-base'> {currentProject.description} </p>
          </div>
        </div>

      </div>


    </div>
  );
};

export default Projects;
