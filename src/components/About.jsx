import React from 'react'
import moi from '../assets/apple-avatar.png'
import { Link } from 'react-scroll';
import AboutIcons from './AboutIcons.jsx';

const About = () => {
    return (
        <div id='about' className="bg-white relative h-screen">
            <h2 className="pt-6 md:pt-12 text-2xl w-1/5 text-center md:text-left font-smeibold text-gray-900
            border-b-4 border-blue-400 mb-4 mx-auto md:mx-5 md:text-4xl">
                about
            </h2>

            <div className="px-2 py-3">
                <div className='md:flex'>
                    <img className="block mx-auto rounded-full w-32 h-32 md:w-48 md:h-48"
                    src={moi} alt='avatar'/>
                    <div className="text-center">
                        <p className="p-5 text-gray-800 text-lg font-light">
                        Hello! I'm a First-Class graduate student in MSci Computer Science
                            (with Software Engineering). I am deeply immersed in the world of software
                            engineering and web development with a variety of internships and projects.
                            My interests are coding, drawing and design. The technologies I work with can be
                            found below:
                        </p>      
                    </div>
                </div>
                <AboutIcons/>
            </div>
            <div className='flex justify-center md:justify-start p-2'>
                <Link
                    className="mx-4 bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-12 rounded-full
                    focus:outline-none focus:shadow-outline hover:cursor-pointer transition 100"
                    to='projects'
                    spy={true}
                    smooth={true}
                    duration={500}>
                    my projects
                </Link>
                <Link
                    className="mx-4 bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-12 rounded-full
                    focus:outline-none focus:shadow-outline hover:cursor-pointer transition 100"
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