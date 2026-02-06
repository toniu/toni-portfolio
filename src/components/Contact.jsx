import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const emailKey = `${process.env.REACT_APP_EFL}`

    const [state, handleSubmit] = useForm(emailKey);
    if (state.succeeded) {
        return (
            <div id='contact' className='block pt-24 md:pt-5 pb-20'>
                <div className='hover:scale-110 cursor-default transition 100'>
                    <FaPaperPlane className='mx-auto text-3xl md:text-5xl text-black select-none' />
                    <p className='select-none py-2  text-black font-bold text-base md:text-xl text-center cursor-default'>
                        Email sent!
                    </p>
                    <p className='select-none  text-black text-base md:text-xl text-center cursor-default'>
                        Thank you for reaching out to Neka
                    </p>
                </div>

                <div className='select-none bottom font-light text-sm md:text-base text-center pt-14 pb-16 space-y-2 w-[85%] mx-auto'>
                    <p >2024 toni., inc. all rights reserved</p>
                    <p>Developed by Neka Toni-Uebari, using ReactJS and TailwindCSS</p>
                </div>
            </div>
        )

    }

    return (
        <div id='contact' className='relative h-auto flex justify-center items-center'>

            <div className="w-4/5 px-5 pt-6 pb-10">
                {/* Section header */}
                <header className="text-center mb-6 mt-12">
                    <motion.h2
                        class="block text-xl uppercase tracking-widest text-blue-500 font-bold"
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        Contact
                    </motion.h2>

                    <p className="mt-2 text-sm md:text-base text-gray-600">
                        Let's connect. Get in touch with my socials and fill out the form below!
                    </p>
                </header>
                <ul className='flex justify-center md:justify-start text-3xl text-black'>
                    <li className='nav-item p-2'>
                        <a href="https://www.linkedin.com/in/neka-toni-uebari/" target="_blank" rel="noopener noreferrer"
                            className="mx-8
                            hover:text-blue-400 transition 100">
                            <FaLinkedin />
                        </a>
                    </li>
                    <li className='nav-item p-2'>
                        <a href="https://github.com/toniu" target="_blank" rel="noopener noreferrer"
                            className="mx-8
                            hover:text-blue-400 transition 100">
                            <FaGithub />
                        </a>
                    </li>
                </ul>

                <form onSubmit={handleSubmit}
                    className="flex flex-wrap gap-x-5">
                    <div className="mb-4 flex-grow">
                        <label htmlFor="firstName" className="block text-black text-sm md:text-base text-left">First Name </label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="form-input mt-1 px-3 py-1 rounded-lg block w-full transition-all 100 border-[1.5px] border-black text-black hover:bg-blue-100 focus:bg-blue-100" required />
                    </div>
                    <div className="mb-4 flex-grow">
                        <label htmlFor="lastName" className="block text-black text-sm md:text-base text-left">Last Name</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="form-input mt-1 px-3 py-1 rounded-lg block w-full transition-all 100 border-[1.5px] border-black text-black hover:bg-blue-100 focus:bg-blue-100" required />
                    </div>
                    <div className="w-full mb-4">
                        <label htmlFor="email" className="block text-black text-sm md:text-base text-left">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input mt-1 px-3 py-1 rounded-lg block w-full transition-all 100 border-[1.5px] border-black text-black hover:bg-blue-100 focus:bg-blue-100" required />
                    </div>
                    <div className="w-full mb-4">
                        <label htmlFor="message" className="block text-black text-sm md:text-base text-left">Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="form-textarea mt-1 px-3 py-1 rounded-lg block w-full transition-all border-[1.5px] border-black text-black hover:bg-blue-100 focus:bg-blue-100" rows="5" required></textarea>
                    </div>
                    <div className="w-full my-2 text-center md:text-left">
                        <button type="submit"
                            className="bg-black text-white text-lg py-0.5 px-24 rounded-full hover:bg-blue-400 transition duration-200">
                            submit
                        </button>
                    </div>
                </form>

                <div className='select-none bottom font-light text-sm md:text-base text-center pt-14 pb-16 space-y-2 w-[85%] mx-auto'>
                    <p>2024 toni., inc. all rights reserved</p>
                    <p>Developed by Neka Toni-Uebari, using ReactJS and TailwindCSS</p>
                </div>
            </div>

        </div>
    );
};

export default Contact;
