import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer id='contact' className='w-full mt-20 bg-gradient-to-t from-[#0F0516] to-[#11071F]'>
      <div className='w-4/5 mx-auto py-16'>
        {/* Contact Header */}
        <div data-aos="fade-up" className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-white mb-4'>Let's Work <span className='text-gradient'>Together</span></h1>
          <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
            Ready to bring your ideas to life? I'm always excited to collaborate on innovative projects and solve complex challenges.
          </p>
        </div>

        {/* Contact Content */}
        <div data-aos="fade-up" data-aos-delay="200" className='max-w-4xl mx-auto'>
          <div className='bg-gradient-to-r from-gray-900/50 to-purple-900/20 rounded-2xl p-8 border border-purple-800/20 backdrop-blur-sm'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {/* Contact Info */}
              <div>
                <h2 className='text-2xl font-bold text-white mb-6'>Get In Touch</h2>
                <p className='text-gray-300 mb-6 leading-relaxed'>
                  I am currently open and available for new projects. Whether you have a small task or a large project,
                  feel free to reach out. I am eager to collaborate and bring your ideas to life.
                </p>

                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center'>
                    <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                    </svg>
                  </div>
                  <div>
                    <p className='text-gray-400 text-sm'>Email</p>
                    <Link href='mailto:a_sahki@estin.dz' className='text-purple-300 hover:text-purple-200 transition-colors duration-300'>
                      a_sahki@estin.dz
                    </Link>
                  </div>
                </div>

                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center'>
                    <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                    </svg>
                  </div>
                  <div>
                    <p className='text-gray-400 text-sm'>Location</p>
                    <p className='text-purple-300'>Algeria</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h2 className='text-2xl font-bold text-white mb-6'>Quick Actions</h2>
                <div className='space-y-4'>
                  <a
                    href='mailto:a_sahki@estin.dz'
                    className='group flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-purple-700/20 hover:from-purple-600/30 hover:to-purple-700/30 p-4 rounded-lg transition-all duration-300 hover:transform hover:scale-105 border border-purple-600/30'
                  >
                    <div className='w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                      <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                      </svg>
                    </div>
                    <span className='text-white font-medium'>Send Email</span>
                  </a>

                  <a
                    href='#projects'
                    className='group flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-blue-700/20 hover:from-blue-600/30 hover:to-blue-700/30 p-4 rounded-lg transition-all duration-300 hover:transform hover:scale-105 border border-blue-600/30'
                  >
                    <div className='w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                      <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
                      </svg>
                    </div>
                    <span className='text-white font-medium'>View Projects</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div data-aos="fade-up" data-aos-delay="400" className='flex justify-center items-center mt-12 gap-6'>
          <Link
            href='https://www.linkedin.com/in/abderrahemane-sahki-a71a6224b'
            className='group bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-blue-600/20 hover:to-blue-700/20 p-3 rounded-full transition-all duration-300 hover:transform hover:scale-110 border border-gray-700/50 hover:border-blue-600/50'
          >
            <Image
              className='group-hover:scale-110 transition-transform duration-300'
              src='linkedin.svg'
              height={32}
              width={32}
              alt='LinkedIn'
            />
          </Link>
          <Link
            href='https://github.com/Abdousa23'
            className='group bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-purple-600/20 hover:to-purple-700/20 p-3 rounded-full transition-all duration-300 hover:transform hover:scale-110 border border-gray-700/50 hover:border-purple-600/50'
          >
            <Image
              className='group-hover:scale-110 transition-transform duration-300'
              src='github.svg'
              height={32}
              width={32}
              alt='GitHub'
            />
          </Link>
          <Link
            href='mailto:a_sahki@estin.dz'
            className='group bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-red-600/20 hover:to-red-700/20 p-3 rounded-full transition-all duration-300 hover:transform hover:scale-110 border border-gray-700/50 hover:border-red-600/50'
          >
            <Image
              className='group-hover:scale-110 transition-transform duration-300'
              src='google.svg'
              height={32}
              width={32}
              alt='Gmail'
            />
          </Link>
        </div>

        {/* Footer Bottom */}
        <div data-aos="fade-up" data-aos-delay="600" className='mt-12 pt-8 border-t border-purple-800/20 text-center'>
          <p className='text-gray-400'>
            © {new Date().getFullYear()} Abderrahemane Sahki. Crafted with passion and dedication.
          </p>
          <p className='text-gray-500 text-sm mt-2'>
            Full-Stack Developer • AI Enthusiast • Problem Solver
          </p>
        </div>
      </div>
    </footer>
  )
}
