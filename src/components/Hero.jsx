import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import heroImg from '../assets/self-img.png';
import { BiSolidMouse } from "react-icons/bi";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  /* Listen for scroll event */
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Set isScrolled to true if user scrolls past 50px
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.section
      id='hero'
      className="relative h-screen pb-12 flex items-center justify-center text-white " // Adjusted margin-top
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div> {/* Overlay */}
      <div className="text-center relative z-10">
        <motion.h1
          className="text-2xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h2 className='select-none'> hello. it's me </h2>
          <h2 className='select-none'> neka <span className='text-blue-400'>toni</span>-uebari </h2>
        </motion.h1>
        <motion.div className='pt-2 pb-10'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}>
          <TypeAnimation
            wrapper="span"
            speed={50}
            className='select-none text-lg md:text-2xl text-blue-400 font-medium py-12'
            repeat={Infinity}
            sequence={[
              1500,
              'software engineer',
              1500, // wait 1s before replacing "Mice" with "Hamsters"
              'web developer',
              1500,
              'graphic designer',
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ y: -200 }}
          animate={{ opacity: isScrolled ? 0 : 100, y: isScrolled ? 100 : 0 }}
          transition={{ duration: 0.3 }}
          className='select-none mt-10 text-xl md:text-2xl rounded-full mx-auto flex justify-center'>
          <BiSolidMouse className='m-1' />
          use scroll
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
