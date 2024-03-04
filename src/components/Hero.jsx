import React from 'react';
import backgroundImage from '../assets/zoom-in-img.png';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div className='hero relative h-screen' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='bg-overlay absolute top-0 left-0 w-full h-full bg-black opacity-85'></div>
            <div className='content flex flex-col justify-center md:text-left text-center h-full  mx-auto px-10 relative z-10 text-white'>
                <h1 className='text-4xl md:text-5xl font-normal leading-tight'>hello, it's me</h1>
                <p className='text-4xl md:text-5xl mt-4 font-bold'>neka <span className="text-blue-400">toni</span>-uebari</p>
                <TypeAnimation
                    className="px-2 py-5 text-xl md:text-5xl text-center md:text-left text-blue-400"
                    sequence={[
                        'software engineer',
                        1500,
                        'full-stack web developer',
                        1500,
                        'graphic designer',
                        1500,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
                <div className="flex justify-center md:justify-start mt-10 p-3">
                    <a href="https://www.linkedin.com/in/neka-toni-uebari/" target="_blank" rel="noopener noreferrer"
                        className="mx-8 text-6xl
                    hover:text-blue-400 transition 100">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/toniu" target="_blank" rel="noopener noreferrer"
                        className="mx-8 text-6xl
                    hover:text-blue-400 transition 100">
                        <FaGithub />
                    </a>
                    <Link
                        className="mx-8 text-6xl
                        hover:text-blue-400 hover:cursor-pointer transition 100"
                        to='contact'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        <MdEmail />
                    </Link>
                </div>
                <div className='pt-5 block text-lg md:text-xl md:flex md:justify-start'>
                    <Link
                        className="block m-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded-full
                    focus:outline-none focus:shadow-outline hover:cursor-pointer transition 100"
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        about me
                    </Link>
                    <Link
                        className="block m-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded-full
                    focus:outline-none focus:shadow-outline hover:cursor-pointer transition 100"
                        to='projects'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        my projects
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;

