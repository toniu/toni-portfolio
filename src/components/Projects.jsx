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
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      id="projects"
      className="relative py-12 bg-white">

      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">project selection</h2>
          <p className="text-sm md:text-base text-gray-900 mt-2">A selection of past client and personal projects demonstrating responsive layouts, CMS integration, and accessibility-focused development.</p>
        </header>

        <div className="mb-16 pb-24">
          <Swiper
            navigation={true}
            freeMode={true}
            pagination={pagination}
            modules={[FreeMode, Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={15}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
            }}
          >
            {projectsData.map((item) => (
              <SwiperSlide key={item.title} className="h-auto">
                <motion.div
                  className="mx-auto rounded-lg overflow-hidden shadow-lg bg-gradient-to-r"
                  style={{ backgroundImage: `linear-gradient(90deg, ${item.bgColors[0]}, ${item.bgColors[1]})` }}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: false }}
                  transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 w-full h-64 md:h-48 overflow-hidden relative">
                      <motion.img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        initial={{ y: -10 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.8 }}
                        loading="lazy"
                      />
                    </div>

                    <div className="md:w-2/3 w-full p-4 text-left">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-white font-bold text-xl">{item.title}</h3>
                          <p className="text-gray-200 text-sm mt-1">{item.secondTitle}</p>
                        </div>
                        <div className="flex space-x-2">
                          {item.demoLink?.trim().length > 0 && (
                            <a href={item.demoLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-blue-600 transition text-black">
                              <FaExternalLinkAlt />
                            </a>
                          )}
                          {item.codeLink?.trim().length > 0 && (
                            <a href={item.codeLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-gray-300 transition text-black">
                              <FaGithub />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-gray-200 text-sm mt-3 line-clamp-4">{item.description}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.techStack.map((tech) => (
                          <span key={tech} className="text-xs bg-white bg-opacity-90 text-black px-3 py-1 rounded-full">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
