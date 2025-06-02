'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos';
type ProjectExampleProps = {
    theme: string;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    isOdd: boolean;
    links: {
        link?: string | null;
        github?: string | null;
    }
    status?: string;
    highlights?: string[];
}
export default function ProjectExample(project: ProjectExampleProps) {
    useEffect(() => {
        AOS.refresh()
    }, []);

    return (
        <div className={`relative flex ${project?.isOdd ? "flex-row" : "flex-row-reverse"}  max-lg:flex-col justify-center items-center gap-8 flex-grow mb-40 group`}>
            <div data-aos={!project?.isOdd ? "fade-left" : "fade-right"} className='flex-1 my-4 mx-8 z-10'>
                {/* Status Badge */}
                {project?.status && (
                    <div className='inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-purple-700/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium mb-3 border border-purple-600/30'>
                        <div className='w-2 h-2 bg-purple-400 rounded-full animate-pulse'></div>
                        {project.status}
                    </div>
                )}

                <h1 className='text-[#9857d3] text-base font-semibold mb-2'>{project?.theme}</h1>
                <h1 className='text-4xl text-[#ccd6f6] font-bold mb-4 group-hover:text-white transition-colors duration-300'>{project?.title}</h1>

                <div className='relative max-w-600px p-6 z-10 rounded-xl backdrop-blur-sm border border-purple-800/20 bg-gradient-to-r from-gray-900/80 to-purple-900/20 shadow-2xl'>
                    <p className='relative text-[#CCD6F6] leading-relaxed mb-4 text-lg'>{project?.description}</p>

                    {/* Technologies */}
                    <div className='mb-4'>
                        <p className='text-[#9857d3] font-medium mb-2'>Technologies:</p>
                        <div className='flex flex-wrap gap-2'>
                            {project?.technologies?.map((tech, index) => (
                                <span key={index} className='px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full border border-purple-600/30 hover:bg-purple-600/30 transition-colors duration-300'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Highlights */}
                    {project?.highlights && (
                        <div className='mb-4'>
                            <p className='text-[#9857d3] font-medium mb-2'>Key Features:</p>
                            <div className='grid grid-cols-2 gap-2'>
                                {project.highlights.map((highlight, index) => (
                                    <div key={index} className='flex items-center gap-2 text-[#CCD6F6] text-sm'>
                                        <svg className='w-4 h-4 text-purple-400' fill='currentColor' viewBox='0 0 20 20'>
                                            <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                        </svg>
                                        {highlight}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>                {/* Links */}
                <div className='flex gap-4 my-6'>
                    {/* Check if project is private (no links available) */}
                    {(!project?.links?.github && !project?.links?.link) ? (
                        <div className='flex items-center gap-2 bg-gray-800/50 px-4 py-3 rounded-lg border border-gray-700/50'>
                            <svg className='w-5 h-5 text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clipRule='evenodd' />
                            </svg>
                            <span className='text-gray-400 font-medium'>Private Repository</span>
                        </div>
                    ) : (
                        <>
                            {project?.links?.github && (
                                <a href={project?.links?.github} target="_blank" rel="noopener noreferrer"
                                    className='group flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 px-4 py-3 rounded-lg transition-all duration-300 hover:transform hover:scale-105 border border-gray-700/50 hover:border-gray-600/50'>
                                    <Image src={'github.svg'} alt='github' height={24} width={24} className='group-hover:scale-110 transition-transform duration-300' />
                                    <span className='text-white font-medium'>Code</span>
                                </a>
                            )}

                            {project?.links?.link && (
                                <a href={project?.links?.link} target="_blank" rel="noopener noreferrer"
                                    className='group flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-purple-700/20 hover:from-purple-600/30 hover:to-purple-700/30 px-4 py-3 rounded-lg transition-all duration-300 hover:transform hover:scale-105 border border-purple-600/30 hover:border-purple-500/50'>
                                    <Image src={'internet.svg'} alt={project?.title} height={24} width={24} className='group-hover:scale-110 transition-transform duration-300' />
                                    <span className='text-white font-medium'>Live Demo</span>
                                </a>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* Background Gradient */}
            <div className='max-lg:hidden absolute rounded-full pointer-events-none transition-opacity duration-500 group-hover:opacity-75'
                style={{
                    position: 'absolute',
                    width: '600px',
                    height: '700px',
                    left: project?.isOdd ? '50%' : '0%',
                    top: '50%',
                    transform: 'translate(-5%, -50%)',
                    background: 'radial-gradient(56.07% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%)',
                    opacity: '0.3'
                }}></div>

            {/* Project Image */}
            <div data-aos={project?.isOdd ? "fade-left" : "fade-right"} className='relative w-full h-80 bg-gradient-to-br from-[#2B0B3A] to-[#1a0624] flex-1 rounded-xl overflow-hidden border border-purple-800/20 group-hover:border-purple-600/40 transition-all duration-500 shadow-2xl'>
                <div className='bg-white w-[90%] h-[85%] max-lg:w-fit max-lg:h-fit max-lg:top-1/2 max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 absolute left-8 top-6 rounded-lg shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500'>
                    <Image
                        src={project?.image}
                        className='w-full h-full object-cover max-lg:w-40 max-lg:h-40'
                        width={600}
                        height={400}
                        alt={project?.title}
                    />
                </div>

                {/* Overlay Effect */}
                <div className='absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            </div>
        </div>
    )
}
