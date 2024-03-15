import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Hero = () => {
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    // Update locomotive scroll on component mount
    if (scroll) {
      scroll.update();
    }
  }, [scroll]);

  return (
    <motion.section
    id='hero'
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white" // Adjusted margin-top
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.h2
          className="text-lg md:text-2xl font-medium mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Explore my projects and skills
        </motion.h2>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl hover:text-gray-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl hover:text-gray-300">
            <FaLinkedin />
          </a>
          {/* Add more social media links as needed */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
