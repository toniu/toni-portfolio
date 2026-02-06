import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import heroImg from '../assets/self-img.png';
import { BiSolidMouse } from "react-icons/bi";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  /* Listen for scroll event */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollY(scrollTop);
      /* Set isScrolled to true if user scrolls past 50px */
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getBackgroundSize = () => {
    const baseSize = screenWidth <= 1024 ? 200 : 100; // 200% for mobile and tablet, 100% for larger screens
    return `${baseSize + scrollY * 0.075}%`;
  };

  // Start with a mostly opaque black overlay at the top, and slightly increase
  // opacity as the user scrolls to fully obscure the image when needed.
  // Tweak the base (0.85) and divisor to change starting darkness and rate.
  const overlayOpacity = Math.max(0.75, 0.9 - scrollY / 1000);

  return (
    <div className='relative h-screen bg-black'>
      <motion.section
        id='hero'
        className="relative h-screen pb-12 flex items-center justify-center text-white " // Adjusted margin-top
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: getBackgroundSize(), // Dynamically adjust background size based on screen width and scroll position
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'black', opacity: overlayOpacity }}
        ></div>{/* Overlay */}
        <div className="text-center relative z-10">
          <div className="text-3xl md:text-4xl font-bold mb-4">
            <motion.h2 initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.25, duration: 1 }}
              className='text-white select-none'>
              hello. it's me
            </motion.h2>
            <motion.span initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.25, duration: 1 }}
              className='text-white select-none'> neka </motion.span>
            <span className='text-blue-400 select-none'> toni</span>
            <motion.span initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.25, duration: 1 }}
              className='text-white select-none'>-uebari</motion.span>
          </div>
          <motion.div className='pt-2 pb-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.25, duration: 1 }}>
            <TypeAnimation
              wrapper="span"
              speed={75}
              className='select-none text-lg md:text-2xl text-blue-400 font-medium py-12'
              repeat={Infinity}
              sequence={[
                2500,
                'web developer',
                2500,
                'wordpress developer',
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}>
            <motion.div
              initial={{ y: -200 }}
              animate={{ opacity: isScrolled ? 0 : 100, y: isScrolled ? 100 : 0 }}
              transition={{ duration: 0.3 }}
              className='select-none mt-10 text-xl md:text-2xl rounded-full mx-auto flex justify-center'>
              <BiSolidMouse className='m-1' />
              use scroll
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
