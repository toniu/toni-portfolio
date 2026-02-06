import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import testimonialsData from './constants/TestimonialsData';

const Testimonials = () => {
   

    return (
       <div id='testimonials' className='relative h-auto flex justify-center items-center'>
        <motion.section id="testimonials" className="py-12">
            <div className="max-w-4xl mx-auto px-4">
                <header className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">testimonials</h2>
                    <p className="text-sm text-gray-600 mt-2">What clients and colleagues say about working together.</p>
                </header>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                >
                    {testimonialsData.map((t, idx) => (
                        <SwiperSlide key={idx}>
                            <motion.div
                                className="bg-gray-900 rounded-lg shadow-md p-6 mx-4"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-start gap-4">

                                    <div className="flex-1">
                                        <div className="flex items-baseline gap-3">
                                            <h3 className="text-lg font-semibold text-gray-100">{t.name}</h3>
                                            <span className="text-sm text-gray-500">{t.company ? `(${t.company})` : ''}</span>
                                        </div>

                                        <p className="text-gray-300 mt-3">{t.quote}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </motion.section>
        </div>
    );
};

export default Testimonials;
