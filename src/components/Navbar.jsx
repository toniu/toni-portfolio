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
        { id: "hero", title: "Home" },
        { id: "about", title: "About" },
        { id: "services", title: "Services" },
        { id: "projects", title: "Projects" },
        { id: "contact", title: "Contact" },
    ];

    return (
        <nav className={`bg-black w-full fixed top-0 z-50 transition duration-500 ease-in-out ${scroll ? 'bg-black shadow-md' : 'bg-transparent'}`}>
            {/* Desktop Version */}
            <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between relative">
                <div className="flex items-center">
                    <h1 className="text-white text-2xl font-bold mr-4">toni.</h1>
                </div>
                <div className="hidden md:flex items-center justify-end space-x-4">
                    {links.map(({ id, title }) => (
                        <Link
                            key={id}
                            to={id}
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="text-white text-lg font-medium py-2 px-4
                            hover:text-gray-300 hover:border-b-2 hover:border-white hover:cursor-pointer"
                            activeClass="border-b-2 border-white"
                        >
                            {title}
                        </Link>
                    ))}
                </div>
                {/* Mobile Version */}
                <div className="flex items-center md:hidden">
                    <button onClick={handleClick} className="focus:outline-none">
                        {click ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
                    </button>
                </div>
            </div>
            {/* Overlay for Mobile Navbar */}
            {click && <div className="overlay" onClick={closeMenu}></div>}
            {/* Mobile Version */}
            <div className={`md:hidden ${click ? 'block' : 'hidden'} bg-black`}>
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col items-center justify-center text-white">
                        {links.map(({ id, title }) => (
                            <Link
                                key={id}
                                to={id}
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="text-lg font-medium py-2 px-4 hover:text-gray-300 hover:cursor-pointer"
                                onClick={closeMenu}
                            >
                                {title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
