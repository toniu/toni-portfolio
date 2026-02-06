import React from 'react'
import { motion } from "framer-motion";
import moi from '../assets/apple-avatar.png'
import techIcons from './constants/TechData'

const About = () => {
    const skills = {
        frontend: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript (ES6+)', 'Responsive Design', 'React', 'Vue.js'],
        wordpress: ['WordPress Themes', 'PHP Theme Development', 'Elementor', 'Custom Plugins', 'WP Optimization'],
        webstandards: ['WCAG 2.1 Accessibility', 'SEO Optimisation', 'Performance Tuning', 'Google Analytics', 'User-Centered Design']
    };

    const achievements = [
        { icon: '', label: '5+ Contracted Projects', description: 'Delivered WordPress & Squarespace sites for upcoming businesses and organisations' },
        { icon: '', label: 'WCAG AA Compliant', description: 'Accessibility-first development' },
        { icon: '', label: 'Performance Focused', description: 'Optimised load speeds & SEO' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div
            initial={{ y: -100, opacity: 0, }}
            transition={{ duration: 0.75, }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            id='about' className="relative h-auto pt-12 pb-16 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section header */}
                <header className="text-center mb-6 mt-12">
                    <motion.h2
                        class="block text-base uppercase tracking-widest text-blue-500 font-bold"
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        About
                    </motion.h2>

                    <p className="mt-2 text-sm md:text-base text-gray-600">
                        My background, accomplishments and skillset as a web developer
                    </p>
                </header>

                {/* Main Content */}
                <div className='pt-12 pr-3 pl-3 block md:flex gap-12'>
                    {/* Left Section - Bio & Highlights */}
                    <div className='md:w-[45%]'>
                        <div className='text-center md:text-left mb-8'>
                            <img src={moi} alt='me' className='w-[120px] h-[120px] md:w-[150px] md:h-[150px] mx-auto md:mx-0 rounded-full0' />
                        </div>

                        <p className='text-gray-900 text-sm md:text-base leading-relaxed mb-6'>
                            Hi, I'm <span className='text-blue-500 font-semibold'>Neka Toni-Uebari</span>. I'm a <span className='text-blue-500 font-semibold'>Junior Web Developer specialising in WordPress</span> with hands-on experience delivering custom CMS-driven websites. I focus on building responsive, accessible, and SEO-optimized web solutions that prioritise user experience and modern web standards (WCAG 2.1).
                        </p>

                        {/* Highlights */}
                        <motion.div
                            className='grid grid-cols-1 gap-4 mb-8'
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}>
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className='bg-gradient-to-r from-blue-500/10 to-transparent p-4 rounded-lg border-l-2 border-blue-400 flex items-start gap-3'>
                                    <span className='text-2xl'>{achievement.icon}</span>
                                    <div>
                                        <p className='text-blue-500 font-semibold text-sm'>{achievement.label}</p>
                                        <p className='text-gray-900 text-sm'>{achievement.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Section - Skills */}
                    <div className='md:w-[55%]'>
                        {/* Frontend Skills */}
                        <motion.div
                            className='mb-10'
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: false }}>
                            <h3 className='text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                                <span className='w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-black text-sm font-bold'>F</span>
                                Frontend Development
                            </h3>
                            <div className='flex flex-wrap gap-2'>
                                {skills.frontend.map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        whileHover={{ scale: 1.05 }}
                                        className='bg-gray-800 hover:bg-blue-800/90 px-3 py-2 rounded-full border border-gray-700 hover:border-blue-600 transition-all text-gray-300 text-sm font-medium cursor-pointer'
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* WordPress & CMS Skills */}
                        <motion.div
                            className='mb-10'
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: false }}>
                            <h3 className='text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                                <span className='w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-black text-sm font-bold'>W</span>
                                WordPress & CMS
                            </h3>
                            <div className='flex flex-wrap gap-2'>
                                {skills.wordpress.map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        whileHover={{ scale: 1.05 }}
                                        className='bg-gray-800 hover:bg-green-700/90 px-3 py-2 rounded-full border border-gray-700 hover:border-green-600 transition-all text-gray-300 text-sm font-medium cursor-pointer'
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Web Standards Skills */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: false }}>
                            <h3 className='text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                                <span className='w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center text-black text-sm font-bold'>S</span>
                                Web Standards & UX
                            </h3>
                            <div className='flex flex-wrap gap-2'>
                                {skills.webstandards.map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        whileHover={{ scale: 1.05 }}
                                        className='bg-gray-800 hover:bg-purple-800/90 px-3 py-2 rounded-full border border-gray-700 hover:border-purple-600 transition-all text-gray-300 text-sm font-medium cursor-pointer'
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default About