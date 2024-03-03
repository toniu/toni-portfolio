import Slider from "react-slick";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import React from 'react';

/* Project Images */
import img1 from '../assets/project-arithmetix.png';
import img2 from '../assets/project-fsimulation.png';
import img3 from '../assets/project-mybiblejourney.png';
import img4 from '../assets/project-toniarts.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* Custom arrows for slider */
/* Custom arrows for slider */
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button
        className='text-4xl z-50 hover:text-blue-400 transition 100 absolute top-1/2 right-0 transform -translate-y-1/2'
        onClick={onClick}
      >
        <FaCircleArrowRight/>
      </button>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        className='text-4xl z-50 hover:text-blue-400 transition 100 absolute top-1/2 left-0 transform -translate-y-1/2'
        onClick={onClick}
      >
        <FaCircleArrowLeft/>
      </button>
    );
  }


const Projects = () => {

    const projects = [
        {
            title: 'arithmetix',
            description: 'An e-learning website to help A-level Maths students in preparation for their exams. This includes provided resources of quizzes, notes and exam papers based on the syllabus of the exam boards: AQA, OCR and Edexcel.',
            imageUrl: img1,
            demoLink: 'https://github.com/toniu/CS3821Repo',
            codeLink: 'https://github.com/toniu/CS3821Repo',
        },
        {
            title: 'fsimulation',
            description: 'A Java football simulation project which includes the simulation of leagues and matches between teams based on their FIFA ratings (attack, defence, midfield, and OVR rating).',
            imageUrl: img2,
            demoLink: 'https://github.com/toniu/FSimulation',
            codeLink: 'https://github.com/toniu/FSimulation',
        },
        {
            title: 'mybiblejourney',
            description: 'A website which directs to the e-book release of visual Bible study notes of each book of the Bible',
            imageUrl: img3,
            demoLink: 'https://example.com/demo3',
            codeLink: 'https://example.com/demo3',
        },
        {
            title: 'toniarts.',
            description: 'A visually appealing website which shows a gallery of my drawings exploring the beauty and depth of black people',
            imageUrl: img4,
            demoLink: 'https://example.com/demo4',
            codeLink: 'https://example.com/demo4',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,

        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }]
    };

    return (
        <div id='projects' className="bg-white relative h-screen">
            <h2 className="pt-6 md:pt-10 text-2xl w-1/5 text-center md:text-left font-semibold text-gray-900 border-b-4 border-blue-400 mb-4 mx-auto md:mx-5 md:text-4xl">
                projects
            </h2>

            <div className='w-9/12 mx-auto'>
                <div className='mt-10'>
                    <Slider {...settings}>
                        {projects.map((p, index) => (
                            <div key={index} className='bg-white px-10 h-[450px] text-black rounded-xl flex justify-center text-center'>

                                <div
                                    className='rounded-t-xl bg-blue-500 flex justify-center text-center items-center'
                                    style={{
                                        backgroundImage: `url(${p.imageUrl})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '50%', // Set a fixed height for the image container
                                        width: '100%', // Let the width adjust automatically
                                    }}
                                >
                                    {/* No img tag */}
                                </div>

                                <div className='flex flex-col justify-center items-center gap-4 p-4 '>
                                    <p className='text-xl  font-bold'> {p.title} </p>
                                    <p className='text-md font-normal h-[100px] overflow-scroll text-gray-800'> {p.description} </p>
                                    <div className='flex text-3xl'>
                                        <a href={p.demoLink} target="_blank" rel="noopener noreferrer"
                                           className="mx-8 hover:text-blue-400 transition 100">
                                            <FaExternalLinkAlt/>
                                        </a>
                                        <a href={p.codeLink} target="_blank" rel="noopener noreferrer"
                                           className="mx-8 hover:text-blue-400 transition 100">
                                            <FaGithub/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>  
        </div>
    );
}

export default Projects;
