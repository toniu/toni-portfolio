import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const changeNavBackground = () => {
            if (window.scrollY >= 80) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        window.addEventListener('scroll', changeNavBackground);
        return () => {
            window.removeEventListener('scroll', changeNavBackground);
        };
    }, []);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const links = [
        { id: "hero", title: "home", offset: -100},
        { id: "about", title: "about", offset: -100},
        { id: "projects", title: "projects", offset: -100},
        { id: "contact", title: "contact", offset: -100},
    ];

    return (
        <nav className={`bg-black w-full fixed top-0 z-50 transition duration-500 ease-in-out ${scroll ? 'bg-black shadow-md' : 'bg-transparent'}`}>
            {/* Desktop Version */}
            <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between relative">
                <div className="flex items-center">
                    <Link
                        to='hero'
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="text-white text-4xl font-bold mr-4
                        hover:text-blue-400 hover:cursor-pointer transition 100"
                        onClick={closeMenu}
                    >
                        toni.
                    </Link>
                </div>
                <div className="hidden md:flex items-center justify-end space-x-4">
                    {links.map(({ id, title, offset}) => (
                        <Link
                            key={id}
                            to={id}
                            spy={true}
                            offset={offset}
                            smooth={true}
                            duration={500}
                            className="text-white text-lg font-medium py-2 px-4
                            hover:text-blue-400 hover:border-b-2 hover:border-white hover:cursor-pointer"
                            activeClass="text-blue-400 border-b-2 border-blue-400"
                        >
                            {title}
                        </Link>
                    ))}
                </div>
                {/* Mobile Version */}
                <div className="flex items-center md:hidden">
                    <button onClick={handleClick} className="focus:outline-none text-4xl">
                        {click ? <FaTimes className="text-white hover:text-blue-400 transition 100" /> : <FaBars className="text-white hover:text-blue-400 transition 100" />}
                    </button>
                </div>
            </div>
        
            {/* Mobile Version */}
            <div className={`md:hidden ${click ? 'block' : 'hidden'} bg-black`}>
                <div className="max-w-7xl mx-auto px-4 py-6">
                    {/* Overlay for Mobile Navbar */}
                    {click && <div className="overlay block  bg-black text-white" onClick={closeMenu}>
                        <div className="flex flex-col items-center justify-center  text-white">
                            {links.map(({ id, title, offset}) => (
                                <Link
                                    key={id}
                                    to={id}
                                    spy={true}
                                    offset={offset}
                                    smooth={true}
                                    duration={500}
                                    className="text-xl font-medium py-3 border-b-2 border-transparent text-center w-2/3 px-4
                                    hover:text-blue-400 hover:border-b-2 hover:border-blue-400 hover:cursor-pointer transition 100"
                                    onClick={closeMenu}
                                >
                                    {title}
                                </Link>
                            ))}
                        </div>
                    </div>}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
