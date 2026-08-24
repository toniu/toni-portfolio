import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, EmailIcon } from './PortfolioIcons';

const Footer = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    /* Listen for scroll event */
    React.useEffect(() => {
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

    return (
        <motion.nav
            className='footer bg-[black] backdrop-blur-md bg-opacity-80 text-[#eee] py-4 px-2 fixed bottom-0 z-50 w-full md:inset-x-0 md:mx-auto md:m-6 md:p-0 shadow-lg md:shadow-blue-500/20 md:border-none border-gray-900 md:w-[45%] md:bg-opacity-0 md:backdrop-blur-0 md:shadow-none'
            initial={{ y: -100 }}
            animate={{ y: isScrolled ? 200 : 0 }}
            transition={{ duration: 0.3 }}>
            <div className='container mx-auto flex justify-center'>
                <div className='flex items-center justify-center gap-10 p-2'>
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
