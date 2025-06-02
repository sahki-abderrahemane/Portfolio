import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
    return (
        <nav className='w-full bg-[#1A0B2E] backdrop-blur-sm border-b border-purple-800/20 sticky top-0 z-50'>
            <div className='container mx-auto h-20 flex justify-center items-center'>
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className='m-4 p-4 max-md:m-1 max-md:p-2 cursor-pointer text-white hover:text-purple-300 transition-colors duration-300 font-medium relative group'
                >
                    Home
                    <div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300'></div>
                </Link>
                <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    className='m-4 p-4 cursor-pointer max-md:m-1 max-md:p-2 text-white hover:text-purple-300 transition-colors duration-300 font-medium relative group'
                >
                    Projects
                    <div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300'></div>
                </Link>
                <Link
                    to="certifications"
                    smooth={true}
                    duration={500}
                    className='m-4 p-4 cursor-pointer max-md:m-1 max-md:p-2 text-white hover:text-purple-300 transition-colors duration-300 font-medium relative group'
                >
                    Certifications
                    <div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300'></div>
                </Link>
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className='m-4 p-4 cursor-pointer max-md:m-1 max-md:p-2 text-white hover:text-purple-300 transition-colors duration-300 font-medium relative group'
                >
                    About me
                    <div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300'></div>
                </Link>
            </div>
        </nav>
    );
}