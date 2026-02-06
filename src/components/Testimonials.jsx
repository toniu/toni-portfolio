import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import testimonialsData from './constants/TestimonialsData';

const getStarStates = (rating) => {
    const value = rating * 5;
    return Array.from({ length: 5 }, (_, i) => {
        if (value >= i + 1) return 'full';
        if (value >= i + 0.5) return 'half';
        return 'empty';
    });
};

const Testimonials = () => {
    const { scrollY } = useScroll();

    // Quote icon micro-parallax (safe & subtle)
    const quoteY = useTransform(scrollY, [0, 600], [0, -20]);

    return (
        <section
            id="testimonials"
            className="relative h-screen py-20 px-10 overflow-hidden"
        >
            <div className="max-w-4xl mx-auto">

                {/* Section header */}
                <header className="text-center mb-6 mt-12">
                    <motion.h2
                        class="block text-xl uppercase tracking-widest text-blue-500 font-bold"
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        Testimonials
                    </motion.h2>

                    <p className="mt-2 text-sm md:text-base text-gray-600">
                        Feedback from people I’ve worked with on contract and project-based work.
                    </p>
                </header>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={32}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                    loop
                >
                    {testimonialsData.map((t, idx) => (
                        <SwiperSlide key={idx}>
                            <motion.article
                                className="relative bg-white rounded-lg border border-gray-100 p-10 shadow-sm min-h-[280px] overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    scale: 1.025,
                                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.12)',
                                }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                            >
                                {/* Decorative quote */}
                                <motion.span
                                    aria-hidden
                                    style={{ y: quoteY }}
                                    className="absolute top-6 left-6 text-[6rem] leading-none font-serif text-gray-200 pointer-events-none select-none"
                                >
                                    “
                                </motion.span>

                                {/* Quote text */}
                                <p className="relative z-10 pt-14 text-gray-700 text-base leading-relaxed">
                                    {t.quote}
                                </p>

                                {/* Footer */}
                                <footer className="relative z-10 mt-8 flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-gray-900">
                                            {t.name}
                                        </p>
                                        {t.company && (
                                            <p className="text-sm text-gray-500">
                                                {t.company}
                                            </p>
                                        )}
                                    </div>

                                    {/* Rating */}
                                    {typeof t.rating === 'number' && (
                                        <div
                                            className="flex gap-1"
                                            aria-label={`Rating: ${Math.round(t.rating * 5 * 2) / 2} out of 5`}
                                        >
                                            {getStarStates(t.rating).map((state, i) => (
                                                <svg
                                                    key={i}
                                                    className="w-4 h-4 text-blue-500"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    {state === 'full' && (
                                                        <path
                                                            fill="currentColor"
                                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                                        />
                                                    )}

                                                    {state === 'half' && (
                                                        <>
                                                            <defs>
                                                                <linearGradient id={`half-${idx}-${i}`}>
                                                                    <stop offset="50%" stopColor="currentColor" />
                                                                    <stop offset="50%" stopColor="transparent" />
                                                                </linearGradient>
                                                            </defs>
                                                            <path
                                                                fill={`url(#half-${idx}-${i})`}
                                                                stroke="currentColor"
                                                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                                            />
                                                        </>
                                                    )}

                                                    {state === 'empty' && (
                                                        <path
                                                            stroke="currentColor"
                                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                                        />
                                                    )}
                                                </svg>
                                            ))}
                                        </div>
                                    )}
                                </footer>
                            </motion.article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
