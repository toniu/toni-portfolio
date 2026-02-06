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
    const [honeypot, setHoneypot] = useState('');
    const [spamError, setSpamError] = useState('');
    const formStartRef = React.useRef(Date.now());

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (spamError) setSpamError('');
    };

    const emailKey = process.env.REACT_APP_EFL;

    const [state, handleSubmit] = useForm(emailKey);
    if (state.succeeded) {
        return (
            <div id='contact' className='block pt-24 md:pt-5 pb-20 px-4'>
                <div className='mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden'>
                    <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-blue-700" />
                    <div className='p-8 md:p-12 text-center'>
                        <div className='mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 hover:scale-105 transition 100'>
                            <FaPaperPlane className='text-2xl md:text-3xl' />
                        </div>
                        <p className='text-gray-900 font-semibold text-lg md:text-2xl'>
                            Email sent
                        </p>
                        <p className='mt-2 text-gray-600 text-sm md:text-base'>
                            Thanks for reaching out - I will get back to you soon.
                        </p>
                    </div>
                </div>

                <div className='select-none bottom font-light text-sm md:text-base text-center pt-12 pb-16 space-y-2 w-full max-w-3xl mx-auto'>
                    <p>2024 toni., inc. all rights reserved</p>
                    <p>Developed by Neka Toni-Uebari, using ReactJS and TailwindCSS</p>
                </div>
            </div>
        )

    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (honeypot.trim().length > 0) {
            setSpamError('Submission blocked. Please try again.');
            return;
        }
        const elapsed = Date.now() - formStartRef.current;
        if (elapsed < 1500) {
            setSpamError('Please wait a moment before submitting.');
            return;
        }
        handleSubmit(e);
    };

    return (
        <div id='contact' className='relative h-auto flex justify-center items-center'>

            <div className="w-4/5 max-w-4xl px-5 pt-6 pb-10">
                {/* Section header */}
                <header className="text-center mb-6 mt-12">
                    <motion.h2
                        className="block text-xl uppercase tracking-widest text-blue-500 font-bold"
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
                <div className="rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden">
                    <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-blue-700" />
                    <div className="p-6 md:p-8">
                        <ul className='flex justify-center md:justify-start text-3xl text-gray-900 mb-6'>
                            <li className='nav-item p-2'>
                                <a href="https://www.linkedin.com/in/neka-toni-uebari/" target="_blank" rel="noopener noreferrer"
                                    className="mx-6 hover:text-blue-400 transition 100">
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li className='nav-item p-2'>
                                <a href="https://github.com/toniu" target="_blank" rel="noopener noreferrer"
                                    className="mx-6 hover:text-blue-400 transition 100">
                                    <FaGithub />
                                </a>
                            </li>
                        </ul>

                        <form onSubmit={handleFormSubmit} className="flex flex-wrap gap-x-5">
                            <div className="mb-4 flex-grow">
                                <label htmlFor="firstName" className="block text-gray-700 text-sm md:text-base text-left">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    autoComplete="given-name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="form-input mt-1 px-3 py-2 rounded-lg block w-full transition-all border border-gray-300 text-gray-900 hover:bg-blue-50 focus:bg-blue-50 focus:border-blue-400 focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="mb-4 flex-grow">
                                <label htmlFor="lastName" className="block text-gray-700 text-sm md:text-base text-left">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    autoComplete="family-name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="form-input mt-1 px-3 py-2 rounded-lg block w-full transition-all border border-gray-300 text-gray-900 hover:bg-blue-50 focus:bg-blue-50 focus:border-blue-400 focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="w-full mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm md:text-base text-left">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-input mt-1 px-3 py-2 rounded-lg block w-full transition-all border border-gray-300 text-gray-900 hover:bg-blue-50 focus:bg-blue-50 focus:border-blue-400 focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="w-full mb-4">
                                <label htmlFor="message" className="block text-gray-700 text-sm md:text-base text-left">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-textarea mt-1 px-3 py-2 rounded-lg block w-full transition-all border border-gray-300 text-gray-900 hover:bg-blue-50 focus:bg-blue-50 focus:border-blue-400 focus:outline-none"
                                    rows="5"
                                    required
                                />
                            </div>

                            <div className="absolute left-[-10000px] top-auto w-[1px] h-[1px] overflow-hidden" aria-hidden="true">
                                <label htmlFor="company">Company</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="_gotcha"
                                    value={honeypot}
                                    onChange={(e) => setHoneypot(e.target.value)}
                                    tabIndex="-1"
                                    autoComplete="off"
                                />
                            </div>

                            {spamError && (
                                <p className="w-full text-sm text-red-500 mb-2">{spamError}</p>
                            )}

                            <div className="w-full my-2 text-center md:text-left">
                                <button
                                    type="submit"
                                    className="bg-gray-900 text-white text-lg py-2 px-12 rounded-full hover:bg-blue-500 transition duration-200"
                                >
                                    submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='select-none bottom font-light text-sm md:text-base text-center pt-14 pb-16 space-y-2 w-[85%] mx-auto'>
                    <p>2024 toni., inc. all rights reserved</p>
                    <p>Developed by Neka Toni-Uebari, using ReactJS and TailwindCSS</p>
                </div>
            </div>

        </div>
    );
};

export default Contact;
