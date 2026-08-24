import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CVIcon, GithubIcon, LinkedinIcon, EmailIcon } from './PortfolioIcons';

const Footer = () => {
    const [isAtHeroTop, setIsAtHeroTop] = useState(true);

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
            className='footer fixed bottom-0 z-50 w-full px-3 pb-3 md:bottom-6 md:px-6'
            initial={false}
            animate={{ opacity: isAtHeroTop ? 1 : 0, y: isAtHeroTop ? 0 : 80 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}>
            <div className='container mx-auto flex justify-center'>
                <div className='flex items-center justify-center gap-3 md:rounded-full border border-none md:border-white/10 bg-black/0 md:bg-black/80 px-4 md:px-6 py-10 md:py-3 text-[#eee] shadow-none md:shadow-lg backdrop-blur-0 md:backdrop-blur-md md:gap-5'>
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
                </div>
            </div>
        </motion.nav>
    );
};

export default Footer;
