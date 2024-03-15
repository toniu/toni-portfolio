import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

const Footer = () => {
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
        <motion.nav
            className='footer bg-black backdrop-blur-md bg-opacity-80 text-[#eee] py-2 px-4 fixed bottom-0 left-0 z-50 w-full'
            initial={{ y: -100 }}
            animate={{ y: isScrolled ? 100 : 0 }}
            transition={{ duration: 0.3 }}>
            <div className='container mx-auto flex justify-center'>
                <ul className='flex justify-center'>
                    <li className='nav-item px-5'>
                        <a href="https://www.linkedin.com/in/neka-toni-uebari/" target="_blank" rel="noopener noreferrer"
                            className="mx-4 text-3xl hover:text-blue-400 hover:cursor-pointer transition 100">
                            <FaLinkedin />
                        </a>
                    </li>
                    <li className='nav-item px-5 '>
                        <a href="https://github.com/toniu" target="_blank" rel="noopener noreferrer"
                            className="mx-4 text-3xl hover:text-blue-400 hover:cursor-pointer transition 100 ">
                            <FaGithub />
                        </a>
                    </li>
                    <li className='nav-item px-5 '>
                        <Link
                            to={'contact'}
                            spy={true}
                            offset={-100}
                            smooth={true}
                            duration={500}
                            className='mx-4 text-3xl hover:text-blue-400 hover:cursor-pointer transition 100'
                        >
                            <MdEmail />
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </motion.nav>
    );
};

export default Footer;
