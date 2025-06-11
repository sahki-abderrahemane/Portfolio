import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
    return (<nav className='w-full bg-[#1A0B2E] backdrop-blur-sm border-b border-purple-800/20 sticky top-0 z-50'>
        <div className='container mx-auto h-20 flex justify-between items-center px-6'>
            <div className='flex justify-center items-center flex-1'>
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

            {/* CV Download Button */}
            <a
                href="/Abderrahmane_Sahki_Resume_ATS.pdf"
                download="Abderrahmane_Sahki_Resume.pdf"
                className='bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-105 inline-flex items-center gap-2 max-md:hidden'
            >
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                </svg>
                CV
            </a>
        </div>
    </nav>
    );
}