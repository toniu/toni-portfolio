import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CVIcon, GithubIcon, LinkedinIcon, EmailIcon } from './PortfolioIcons';

const Footer = () => {
    const [isAtHeroTop, setIsAtHeroTop] = useState(true);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const handleScroll = () => {
            setIsAtHeroTop(window.scrollY <= 50);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.nav
            className='footer fixed bottom-5 z-50 w-full px-3 md:bottom-10 md:px-6'
            initial={false}
            animate={{ opacity: isAtHeroTop ? 1 : 0, y: isAtHeroTop ? 0 : 80 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}>
            <div className='container mx-auto flex justify-center'>
                <motion.div
                    className='flex items-center justify-center gap-3 rounded-full border border-white/20 bg-black/85 px-6 py-3 text-[#eee] shadow-lg backdrop-blur-md md:rounded-full md:px-6 md:gap-5'
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={shouldReduceMotion ? { duration: 0 } : { delay: 1.8, duration: 0.8, ease: 'easeOut' }}
                >
                    <div className='hidden lg:block pr-2'>
                        <p className='text-[9px] font-bold uppercase tracking-[0.16em] text-slate-200'>Open to permanent frontend roles</p>
                        <a href='mailto:nekatoniuebari@gmail.com' className='text-[10px] font-semibold tracking-[0.08em] text-blue-200 transition hover:text-white'>nekatoniuebari@gmail.com</a>
                    </div>

                    <a
                        href='/feedback-cv/cv-neka-toni-uebari.pdf'
                        target='_blank'
                        rel='noreferrer'
                        aria-label='Open resume'
                        className='inline-flex items-center gap-2 rounded-full border border-blue-300/70 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-blue-500 hover:text-white'
                    >
                        <CVIcon />
                        <span>Resume</span>
                    </a>

                    <a
                        href='https://www.linkedin.com/in/neka-toni-uebari/'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Open LinkedIn'
                        className='flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-blue-400 hover:bg-blue-500/20 hover:text-blue-200'
                    >
                        <LinkedinIcon />
                    </a>

                    <a
                        href='https://github.com/toniu'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Open GitHub'
                        className='flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-blue-400 hover:bg-blue-500/20 hover:text-blue-200'
                    >
                        <GithubIcon />
                    </a>

                    <a
                        href='mailto:nekatoniuebari@gmail.com'
                        aria-label='Email Neka'
                        className='flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-blue-400 hover:bg-blue-500/20 hover:text-blue-200'
                    >
                        <EmailIcon />
                    </a>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Footer;
