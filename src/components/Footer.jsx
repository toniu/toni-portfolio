import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import './css/Footer.css'

const Footer = () => {
    return (
        <div className='footer w-full bg-black text-[#eee] px-4 py-8'>
            <div className='container max-w-[1240px] text-center m-auto'>
                <ul className='flex justify-center'>
                    <li className='nav-item p-4'>
                        <a href="https://www.linkedin.com/in/neka-toni-uebari/" target="_blank" rel="noopener noreferrer"
                            className="mx-8 text-5xl
                            hover:text-blue-400 transition 100">
                            <FaLinkedin />
                        </a>
                    </li>
                    <li className='nav-item p-4'>
                        <a href="https://github.com/toniu" target="_blank" rel="noopener noreferrer"
                            className="mx-8 text-5xl
                            hover:text-blue-400 transition 100">
                            <FaGithub />
                        </a>

                    </li>
                </ul>
                <div className='bottom text-center pt-12'>
                    <span className='line mb-4'></span>
                    <p>2024 toni., inc. all rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer