import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import heroImg from '../assets/self-img.png';
import { CVIcon, LinkedinIcon, GithubIcon, EmailIcon } from './PortfolioIcons';

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  /* Listen for scroll event */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      /* Set isScrolled to true if user scrolls past 50px */
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const overlayOpacity = 0.82;

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
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
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
              hello, i’m neka
            </motion.h2>
            <span className='text-blue-400 select-none'> toni</span>
            <motion.span initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.25, duration: 1 }}
              className='text-white select-none'> uebari</motion.span>
          </div>
          <motion.div className='pt-2 pb-6'
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
                'front-end developer',
                2500,
                'web developer',
              ]}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className='mx-auto mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-200/80'
          >
            Open to full-time front-end roles
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className='mx-auto max-w-xl p-10 text-sm md:text-base text-slate-200/90'
          >
            Building clear, useful digital experiences for product, service, and brand-led teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: isScrolled ? 0 : 1,
              y: isScrolled ? -10 : 0,
              scale: isScrolled ? 0.98 : 1,
            }}
            transition={{ delay: 2.2, duration: 0.45, ease: 'easeOut' }}
            className='mt-8 flex flex-col items-center gap-4'
            style={{ pointerEvents: isScrolled ? 'none' : 'auto' }}
          >
            <a
              href='/feedback-cv/cv-neka-toni-uebari.pdf'
              target='_blank'
              rel='noreferrer'
              aria-label='Open resume'
              className='inline-flex items-center gap-2 rounded-full border border-blue-300/70 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition hover:bg-blue-500 hover:text-white'
            >
              <CVIcon />
              <span>Resume</span>
            </a>

            
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
