import React from 'react';
import backgroundImage from '../assets/zoom-in-img.png';

const Hero = () => {
    return (
        <div className='hero relative h-screen' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='bg-overlay absolute top-0 left-0 w-full h-full bg-black opacity-90'></div>
            <div className='content flex flex-col justify-center h-full max-w-1100 mx-auto px-4 relative z-10 text-white'>
                <p className='italic text-lg'>Call me</p>
                <p className='text-2xl'>Hello Hello</p>
                <p className='text-5xl font-bold'>Because Lorem</p>
                <p className='text-2xl italic'>Random word instructions</p>
            </div>
        </div>
    );
};

export default Hero;


