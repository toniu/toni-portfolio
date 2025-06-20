import React from 'react'
import { motion } from "framer-motion";
import moi from '../assets/apple-avatar.png'
import techIcons from './constants/TechData'

const About = () => {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0, }}
            transition={{ duration: 0.75, }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            id='about' className="relative h-auto pt-12 pb-16">
            <div className='pt-12 block md:flex'>
                <div className='text-center md:w-[40%]'>
                    <img src={moi} alt='me' className='w-[110px] h-[110px] md:w-[150px] md:h-[150px] mx-auto'/>
                    <p className='p-3 m-2 font-light text-sm md:text-base'>
                    Hi, I'm Neka Toni-Uebari. With a First-Class Honours degree in MSci Computer Science (with Software Engineering),
                    I am a freelance web designer that also dives into the world of software engineering, web development and design.
                    I look for career development and ways to positively contribute to users using
                    my technical and personal skills. I bring a blend of academic excellence, hands-on
                    coding skills in various front-end and back-end technologies and a­­n artistic eye for design.­­­ 
                    </p>
                </div>
                <div className="px-5 grid grid-cols-5 gap-4 text-center md:w-[60%]">
                    {techIcons.map((tech, index) => (
                        <div
                        key={index} className="flex flex-col items-center select-none">
                            <div className="flex justify-center text-3xl md:text-xl">
                                {tech.icon}
                            </div>
                            <p className="mt-1 text-sm md:text-base hidden md:block">{tech.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default About