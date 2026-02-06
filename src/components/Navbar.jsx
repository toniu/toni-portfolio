import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaInfoCircle, FaSuitcase, FaCommentAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const scrollTimeoutRef = React.useRef(null);

  /* Toggle menu visibility */
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  /* Listen for scroll event */
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      /* Set isScrolled to true if user scrolls past 50px */
      setIsScrolled(scrollTop > 50);
      /* Set isScrolling to true and reset timeout for bounce effect */
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  /* Listen for resize event */
  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const links = [
    { id: 'hero', title: 'home', offset: -70, icon: <FaHome />, ref: null },
    { id: 'about', title: 'about', offset: -70, icon: <FaInfoCircle />, ref: null },
    { id: 'projects', title: 'projects', offset: -70, icon: <FaSuitcase />, ref: null },
    { id: 'testimonials', title: 'testimonials', offset: -70, icon: <FaCommentAlt />, ref: null },
    { id: 'contact', title: 'contact', offset: -70, icon: <MdEmail />, ref: null },
  ];

  return (
    <motion.nav
      className={`bg-black bg-opacity-85 fixed top-0 z-20 md:border-gray-900 m-0 w-full md:m-6 md:inset-x-0 md:mx-auto md:w-[65%] md:rounded-full md:border ${isScrolling ? 'md:shadow-2xl md:shadow-blue-500/20' : 'md:shadow-lg'}`}
      style={{
        backdropFilter: screenWidth >= 768 ? (isScrolling ? 'blur(12px)' : 'blur(2px)') : 'blur(10px)',
        WebkitBackdropFilter: screenWidth >= 768 ? (isScrolling ? 'blur(12px)' : 'blur(2px)') : 'blur(10px)',
      }}
      initial={{ y: -100 }}
      animate={{ y: isScrolled || isOpen ? 0 : -100, scale: screenWidth >= 768 && isScrolling ? 1.02 : 1 }}
      transition={{ duration: 0.3, scale: { type: 'spring', stiffness: 400, damping: 10 } }}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to={'hero'}
              spy={true}
              offset={-70}
              smooth={true}
              duration={500}
              className="select-none flex-shrink-0 text-white font-bold text-2xl
                  hover:text-blue-400 hover:cursor-pointer transition 100">
              toni.
            </Link>
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
                  className="text-white flex hover:bg-black/75 hover:text-blue-400 hover:cursor-pointer py-2 rounded-sm text-base font-medium transition 100"
                >
                  <div className="flex space-x-3 px-2">
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
