import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import projectsData from './constants/ProjectData';
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
      className="relative h-auto py-12 bg-white">

      <div className="max-w-6xl mx-auto px-4">

        {/* Section header */}
        <header className="text-center mb-6 mt-12">
          <motion.h2
            className="block text-xl uppercase tracking-widest text-blue-500 font-bold"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            Projects
          </motion.h2>

          <p className="mt-2 text-sm md:text-base text-gray-600">
            A selection of past client and personal projects demonstrating responsive layouts, CMS integration, and accessibility-focused development.
          </p>
        </header>



        <div className="mb-16 pb-24">
          <Swiper
            className="projects-swiper"
            navigation={true}
            pagination={pagination}
            modules={[Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={20}
          >
            {projectsData.map((item) => (
              <SwiperSlide key={item.title} className="h-auto">
                <motion.div
                  className="mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-white"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  whileHover={{ scale: 1.01 }}
                  viewport={{ once: false }}
                  transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                >
                  <div className="h-1 w-full" style={{ backgroundImage: `linear-gradient(90deg, ${item.bgColors[0]}, ${item.bgColors[1]})` }} />
                  <div className="md:flex">
                    <div className="md:w-1/3 w-full h-64 md:h-52 overflow-hidden relative bg-gray-50">
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

                    <div className="md:w-2/3 w-full p-6 text-left">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-gray-900 font-bold text-xl">{item.title}</h3>
                          <p className="text-gray-600 text-sm mt-1">{item.secondTitle}</p>
                        </div>
                        <div className="flex space-x-2">
                          {item.demoLink?.trim().length > 0 && (
                            <a href={item.demoLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-900 rounded-full hover:bg-blue-500 transition 100 text-white">
                              <FaExternalLinkAlt />
                            </a>
                          )}
                          {item.codeLink?.trim().length > 0 && (
                            <a href={item.codeLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition 100 text-gray-900">
                              <FaGithub />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mt-3 line-clamp-4">{item.description}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.techStack.map((tech) => (
                          <span key={tech} className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full">{tech}</span>
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
