import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaInfoCircle, FaSuitcase } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Listen for scroll event
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

  const links = [
    { id: 'hero', title: 'home', offset: -100, icon: <FaHome />, ref: null },
    { id: 'about', title: 'about', offset: -100, icon: <FaInfoCircle />, ref: null },
    { id: 'projects', title: 'projects', offset: -100, icon: <FaSuitcase />, ref: null },
    { id: 'contact', title: 'contact', offset: -100, icon: <MdEmail />, ref: null },
  ];

  return (
    <motion.nav
      className={`bg-black backdrop-blur-md bg-opacity-85 fixed top-0 left-0 w-full z-10`}
      initial={{ y: -100 }}
      animate={{ y: isScrolled || isOpen ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white font-bold text-2xl">toni.</div>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex flex-grow justify-end">
            <div className="flex items-baseline space-x-4">
              {links.map(({ id, title, offset, icon, ref }) => (
                <Link
                  key={id}
                  to={id}
                  spy={true}
                  offset={offset}
                  smooth={true}
                  duration={500}
                  className={`text-gray-300 hover:text-blue-400 px-3 py-2 transition 100
                  hover:cursor-pointer text-md font-medium ${activeLink === id ? 'text-blue-400' : ''}`}
                  activeClass="text-blue-400 border-blue-400 border-b-4"
                  onSetActive={() => setActiveLink(id)}
                  ref={ref}
                >
                  <div className="block text-base">
                    <span className={`flex justify-center ${activeLink === id ? 'text-blue-400' : ''}`}> {icon} </span>
                    <span className={`${activeLink === id ? 'text-blue-400' : ''}`}> {title} </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* Hamburger Menu Icon */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300  hover:text-blue-400 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map(({ id, title, offset, icon }) => (
                <Link
                  key={id}
                  to={id}
                  spy={true}
                  offset={offset}
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                  className="text-gray-300 flex hover:bg-gray-700 hover:text-white hover:cursor-pointer px-3 py-2 rounded-md text-base font-medium"
                >
                  <div className="flex space-x-3">
                    <span className="text-xl p-1"> {icon} </span>
                    <span className="text-lg"> {title} </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
