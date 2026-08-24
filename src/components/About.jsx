import React from 'react'
import { motion } from "framer-motion";
import moi from '../assets/apple-avatar.png'

const About = () => {
    const skills = {
        frontend: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript (ES6+)', 'TypeScript', 'Responsive Design', 'React', 'Vue.js'],
        cms: ['WordPress','PHP (WordPress Themes)', 'Elementor', 'Custom WP Plugins', 'WP Optimisation','Caching and Backup systems (WP)','Squarespace'],
        webstandards: ['WCAG Accessibility', 'SEO Optimisation', 'Anti-spam and bot mitigation (WP)', 'Google Analytics', 'User-Centered Design', 'Figma', 'Canva']
    };

    const achievements = [
        { icon: '', label: '5+ Contracted Projects', description: 'Delivered product-minded web experiences for real organisations and client teams' },
        { icon: '', label: 'Accessibility-first', description: 'Built with clarity, usability, and inclusive UX in mind' },
        { icon: '', label: 'Performance-aware', description: 'Focused on fast, readable, conversion-friendly front-end experiences' }
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
            id='about' className="relative h-auto pt-6 pb-12 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent scroll-mt-28"
            style={{ scrollMarginTop: '7rem' }}>
            <div className="max-w-6xl mx-auto px-4">
                {/* Section header */}
                <header className="text-center mb-6 mt-12">
                    <motion.h2
                        className="block text-lg md:text-xl uppercase tracking-[0.22em] text-blue-600 font-extrabold"
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        About
                    </motion.h2>

                    <p className="mt-3 text-sm md:text-base text-slate-600">
                        My background, experience, and approach to building better web experiences.
                    </p>
                </header>

                {/* Main Content */}
                <div className='pt-12 pr-3 pl-3 block md:flex gap-12 md:items-start'>
                    {/* Left Section - Bio & Highlights */}
                    <div className='md:w-[45%]'>
                        <div className='text-center md:text-left mb-8'>
                            <img src={moi} alt='me' className='w-[120px] h-[120px] md:w-[150px] md:h-[150px] mx-auto md:mx-0 rounded-full border border-blue-200 bg-white p-1 shadow-sm shadow-blue-100' />
                        </div>

                        <p className='text-slate-700 text-sm md:text-base leading-relaxed mb-6'>
                            Hi, I'm <span className='text-blue-600 font-extrabold'>Neka Toni-Uebari</span>, a front-end developer focused on building clear, useful digital experiences for real people. I work across product-minded UI, responsive builds, and accessible web experiences with a strong emphasis on clarity, usability, and practical business outcomes.
                        </p>

                        <div className='mb-6 flex flex-wrap gap-2'>
                            {['Front-end', 'React', 'Responsive UI', 'Accessibility', 'SEO', 'User experience'].map((tag) => (
                                <span key={tag} className='rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.12em] text-blue-700'>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className='mb-6 rounded-xl border border-blue-100 bg-blue-50/70 p-4'>
                            <p className='text-[10px] font-extrabold uppercase tracking-[0.16em] text-blue-700'>Accessibility in practice</p>
                            <ul className='mt-2 space-y-1 text-sm leading-6 text-slate-700'>
                                <li>Keyboard-first navigation checks across interactive components.</li>
                                <li>Semantic structure, accessible labels, and descriptive alt text across key sections.</li>
                                <li>Manual contrast and readability checks for high-traffic content areas.</li>
                            </ul>
                        </div>

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
                                    className='bg-gradient-to-r from-blue-500/10 to-transparent p-4 rounded-xl border border-blue-100 border-l-4 border-l-blue-500 flex items-start gap-3 shadow-sm'>
                                    <span className='text-2xl leading-none'>{achievement.icon}</span>
                                    <div>
                                        <p className='text-blue-700 font-extrabold text-sm'>{achievement.label}</p>
                                        <p className='text-slate-700 text-sm mt-1'>{achievement.description}</p>
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
                            <h3 className='text-base tracking-wide uppercase font-extrabold text-slate-800 mb-4 flex items-center gap-2'>
                                <span className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold'>F</span>
                                Frontend Development
                            </h3>
                            <div className='flex flex-wrap gap-2'>
                                {skills.frontend.map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        whileHover={{ scale: 1.05 }}
                                        className='bg-slate-900 hover:bg-blue-800  hover:border-blue-600 transition-all text-slate-100 text-sm cursor-pointer rounded-full border border-blue-200 px-4 md:px-6 py-1 text-[0.675em] md:text-[0.8em] font-light uppercase tracking-[0.12em]'
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
                            <h3 className='text-base tracking-wide uppercase font-extrabold text-slate-800 mb-4 flex items-center gap-2'>
                                <span className='w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center text-slate-900 text-sm font-bold'>C</span>
                                Content Management System (CMS)
                            </h3>
                            <div className='flex flex-wrap gap-2'>
                                {skills.cms.map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        whileHover={{ scale: 1.05 }}
                                        className='bg-slate-900 hover:bg-emerald-800  hover:border-emerald-600 transition-all text-slate-100 text-sm cursor-pointer rounded-full border border-blue-200 px-4 md:px-6 py-1 text-[0.675em] md:text-[0.8em] font-light uppercase tracking-[0.12em]'
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
                            <h3 className='text-base tracking-wide uppercase font-extrabold text-slate-800 mb-4 flex items-center gap-2'>
                                <span className='w-8 h-8 bg-violet-400 rounded-full flex items-center justify-center text-slate-900 text-sm font-bold'>W</span>
                                Web Standards & UX
                            </h3>
                            <div className='flex flex-wrap gap-2'>
                                {skills.webstandards.map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        whileHover={{ scale: 1.05 }}
                                        className='bg-slate-900 hover:bg-violet-800  hover:border-violet-600 transition-all text-slate-100 text-sm cursor-pointer rounded-full border border-blue-200 px-4 md:px-6 py-1 text-[0.675em] md:text-[0.8em] font-light uppercase tracking-[0.12em]'
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