import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "swiper/css/free-mode";

import projectsData from './constants/ProjectData';
import './css/GradBg.css'
import './css/Pagination.css'

const Projects = () => {
  /* Custom CSS pagination for Carousel swiper */
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <motion.div
    initial={{y: -100, opacity: 0, }}
    transition={{ duration: 0.75, }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
     id="projects" className="relative h-screen pt-6">
      <div className='py-3 w-4/5 mx-auto'>
        <p className="text-base md:text-lg font-light text-center md:text-left text-black mb-2">
          Check out my latest projects
        </p>
      </div>
      {/* Slider Card */}
      <Swiper
        navigation={true}
        freeMode={true}
        pagination={pagination}
        modules={[FreeMode, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={5}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
        }}
        className="max-w-[100%]">
        {projectsData.map((item) => (
          <SwiperSlide key={item.title} id='card' className="mx-auto h-[410px] w-full rounded-md text-left">
            <div className='h-[380px]'
              style={{
                backgroundSize: '200% auto',
                backgroundImage: `linear-gradient(to right, ${item.bgColors[0]} 0%, ${item.bgColors[1]} 100%)`,
                animation: 'gradientAnimation 5s infinite',
              }}>
              <div className='block'>
                <div className='flex'>
                  <div className="p-2 w-32 h-32 overflow-hidden">
                    <img src={item.imageUrl} alt='' className="w-full h-full rounded-lg object-cover" />
                  </div>

                  <div className='block p-3 h-32 content-cente'>
                    <h2 className='text-white font-bold text-2xl'> {item.title} </h2>
                    <h3 className='h-6 truncate text-gray-300 font-semibold text-sm md:text-base '> {item.secondTitle} </h3>
                    <div className='flex pt-2 text-2xl space-x-3'>
                      {item.demoLink.trim().length > 0 &&
                        <a href={item.demoLink} target="_blank" rel="noopener noreferrer"
                          className='p-2 bg-white rounded-full hover:bg-blue-400 transition 100'>
                          <FaExternalLinkAlt />
                        </a>}
                      {item.codeLink.trim().length > 0 &&
                        <a href={item.codeLink} target="_blank" rel="noopener noreferrer"
                          className='p-2 bg-white rounded-full hover:bg-blue-400 transition 100'>
                          <FaGithub />
                        </a>}
                    </div>
                  </div>
                </div>

                <div className='py-1 px-14 h-[100px] overflow-auto'>
                  <p className='text-gray-200 font-normal text-sm md:text-base'> {item.description} </p>
                </div>

                <div className='pt-2 px-2'>
                  <ul className='p-1 flex h-[80px] justify-start md:justify-normal flex-wrap select-none'>
                    {item.techStack.map((tech) => (
                      <li key={tech} className='m-1 h-6 py-0.5 px-5 bg-white bg-opacity-90 rounded-full text-black text-sm md:text-base'>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


    </motion.div>
  );
};

export default Projects;
