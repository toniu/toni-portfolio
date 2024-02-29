import React from 'react'
import moi from '../assets/apple-avatar.png'
import { Link } from 'react-scroll';
import AboutIcons from './AboutIcons.jsx';

const About = () => {
    return (
        <div id='about' className="bg-white relative h-screen">
            <h2 className="pt-20 text-2xl text-center font-bold text-gray-900 mb-4">
                about neka toni-uebari
            </h2>
            
            <div className=" px-6 py-8">
                <div className='md:flex'>
                    <img className="block mx-auto rounded-full w-32 h-32 md:w-48 md:h-48"
                    src={moi} alt='avatar'/>
                    <div className="text-center">
                        <p className="p-5 text-gray-600 text-lg font-light">
                        Hello! I'm a First-Class graduate student in MSci Computer Science
                            (with Software Engineering). I am deeply immersed in the world of software
                            engineering and web development with a variety of technologies and projects.
                            My interests are coding, drawing and design.
                        </p>      
                    </div>
                </div>
                <AboutIcons/>
            </div>
            <div className='mb-20 p-3 text-center'>
                <Link
                    className="py-4 px-10 text-white bg-black text-xl font-semibold rounded-full
                    hover:text-blue-400 hover:cursor-pointer transition 100"
                    to='contact'
                    spy={true}
                    smooth={true}
                    duration={500}>
                    let's connect
                </Link>
            </div>
            
        </div>
    )
}

export default About