import React, { useState, useEffect } from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3, FaVuejs, FaReact, FaNodeJs, FaFigma, FaGithub } from 'react-icons/fa';
import { SiScala, SiJavascript, SiTypescript, SiWebpack, SiExpress, SiTailwindcss, SiMysql, SiCanva, SiSubversion, SiJest } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { TypeAnimation } from 'react-type-animation';


const AboutIcons = () => {
    const techIcons = [
        { icon: <FaJava />, title: 'Java' },
        { icon: <FaPython />, title: 'Python' },
        { icon: <SiScala />, title: 'Scala' },
        { icon: <SiJavascript />, title: 'JavaScript' },
        { icon: <SiTypescript />, title: 'TypeScript' },
        { icon: <FaHtml5 />, title: 'HTML5' },
        { icon: <FaCss3 />, title: 'CSS3' },
        { icon: <SiTailwindcss />, title: 'Tailwind' },
        { icon: <SiWebpack />, title: 'Webpack' },
        { icon: <FaVuejs />, title: 'VueJS' },
        { icon: <FaReact />, title: 'React' },
        { icon: <FaNodeJs />, title: 'NodeJS' },
        { icon: <SiExpress />, title: 'Express' },
        { icon: <BiLogoPostgresql />, title: 'PostgreSQL' },
        { icon: <SiMysql />, title: 'MySQL' },
        { icon: <SiJest />, title: 'Jest' },
        { icon: <FaGithub />, title: 'GitHub' },
        { icon: <SiSubversion />, title: 'SVN' },
        { icon: <FaFigma />, title: 'Figma' },
        { icon: <SiCanva />, title: 'Canva' },
    ];
    
    const IconGrid = ({ currentIndex }) => {
        return (
            <div className='mx-4 grid grid-cols-5 gap-2 text-center justify-center text-3xl
            md:grid-cols-7 md:text-5xl md:gap-4'>
                {techIcons.map((tech, index) => (
                    <div key={index} className={`text-center ${currentIndex === index ? 'flex justify-center text-blue-400 transition 100' : 'flex justify-center text-white transition 100'}`}>
                        {tech.icon}
                    </div>
                ))}
            </div>
        );
    };
    
    const AnimatedTitle = ({ title }) => {
        return (
            <TypeAnimation
                className="text-lg md:text-xl font-bold text-blue-400"
                sequence={[title, 1750]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
            />
        );
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % techIcons.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [techIcons.length]);

    return (
        <div className='px-5'>
            <div className='p-3 bg-black text-center rounded-md border-t-4 border-blue-400 text-white w-full'>
                <div className='m-1 p-3'>
                    <AnimatedTitle title={techIcons[currentIndex].title} />
                </div>
                <IconGrid currentIndex={currentIndex} />
            </div>
        </div>
    );
};

export default AboutIcons;
