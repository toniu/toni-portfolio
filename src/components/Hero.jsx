import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import heroImg from '../assets/self-img.png';
import { SuitcaseIcon } from './PortfolioIcons';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const overlayOpacity = 0.82;

  return (
    <div className='relative h-screen overflow-x-hidden bg-black'>
      <motion.section
        id='hero'
        className="relative flex h-screen items-center justify-center overflow-x-hidden pb-12 text-white " // Adjusted margin-top
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.5, duration: 0.5 }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
          initial={shouldReduceMotion ? false : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 1.8, ease: 'easeOut' }}
        />

        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'black', opacity: overlayOpacity }}
        ></div>{/* Overlay */}

        {!shouldReduceMotion && (
          <>
            <motion.div
              className="pointer-events-none absolute -left-16 top-20 h-48 w-48 rounded-full bg-blue-500/25 blur-3xl"
              animate={{ x: [0, 16, 0], y: [0, -14, 0], scale: [1, 1.06, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="pointer-events-none absolute -right-10 bottom-24 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl"
              animate={{ x: [0, -12, 0], y: [0, 10, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            />
          </>
        )}

        <div className="text-center relative z-10 px-5">
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { delay: 1.88, duration: 0.6 }}
            className='mx-auto mb-4 inline-flex rounded-full border border-blue-300/40 bg-blue-500/20 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100 backdrop-blur-sm'
          >
            Frontend Developer
          </motion.p>

          <div className="mb-5 select-none">
            <p className='mt-1 text-2xl font-bold lowercase tracking-[0.1em] text-white/90 md:text-3xl'>
              <motion.span
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={shouldReduceMotion ? { duration: 0 } : { delay: 1.76, duration: 0.68, ease: 'easeOut' }}
                className='text-white'
              >
                neka{' '}
              </motion.span>

              <motion.span
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14, letterSpacing: '0.24em' }}
                animate={{ opacity: 1, y: 0, letterSpacing: '0.14em' }}
                transition={shouldReduceMotion ? { duration: 0 } : { delay: 1.15, duration: 0.75, ease: 'easeOut' }}
                className='text-blue-400'
              >
                toni
              </motion.span>

              <motion.span
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={shouldReduceMotion ? { duration: 0 } : { delay: 1.88, duration: 0.68, ease: 'easeOut' }}
                className='text-white'
              >
                -uebari
              </motion.span>
            </p>
          </div>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { delay: 2.08, duration: 0.72, ease: 'easeOut' }}
            className='mx-auto max-w-xl text-sm md:text-base text-slate-200/90'
          >
            Building accessible, high-conversion frontends.
          </motion.p>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={shouldReduceMotion ? { duration: 0 } : { delay: 2.22, duration: 0.7 }}
            className='mx-auto mt-4 max-w-3xl text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-200/80'
          >
            Open to permanent roles · Hybrid / Remote
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { delay: 2.35, duration: 0.65 }}
            className='mt-6 flex flex-wrap justify-center gap-3'
          >
            <a
              href='#projects'
              className='inline-flex items-center gap-2 rounded-full border border-blue-300/60 bg-blue-500/90 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-blue-500'
            >
              <SuitcaseIcon />
              View Work
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
