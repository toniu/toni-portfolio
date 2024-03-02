import React, { useState } from 'react';

const Projects = () => {
    const projects = [
        {
            name: 'Project 1',
            description: 'Description of Project 1',
            imageUrl: '../assets/zoom-in-img.png',
            demoLink: 'https://example.com/demo1',
            codeLink: 'https://github.com/user/project1',
        },
        {
            name: 'Project 2',
            description: 'Description of Project 2',
            imageUrl: '../assets/zoom-in-img.png',
            demoLink: 'https://example.com/demo2',
            codeLink: 'https://github.com/user/project2',
        },
        // Add more projects as needed
    ];

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const handleNextProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrevProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    return (
        <div id='projects' className="bg-white relative h-screen">
            <h2 className="pt-6 md:pt-12 text-2xl w-1/5 text-center md:text-left font-smeibold text-gray-900 border-b-4 border-blue-400 mb-4 mx-auto md:mx-5 md:text-4xl">
                projects
            </h2>
           
        </div>
    );
}

export default Projects;
