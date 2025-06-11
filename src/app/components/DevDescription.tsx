import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function DevDescription() {
  const fullText = "Hello, I'm <span class='text-[#7127BA]'>Abderrahemane 👋</span><br /><br />Exploring code, AI, and data to innovate and inspire.";
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  const spanTagRegex = /<span class='text\[#7127BA\]'>/;

  useEffect(() => {
    if (index < fullText.length) {
      const nextChar = fullText[index];
      const nextSubstring = fullText.slice(index, index + 25); // Check the next few characters for the specific span tag
      const timeoutDuration = spanTagRegex.test(nextSubstring) ? 1 : 50;

      const timeoutId = setTimeout(() => {
        setDisplayedText(displayedText + nextChar);
        setIndex(index + 1);
      }, timeoutDuration);

      return () => clearTimeout(timeoutId);
    }
  }, [index, displayedText, fullText]);
  return (
    <div id="home" className='mt-8 mb-16'>
      <div className='flex justify-start items-center max-md:flex-col md:ml-[11rem] max-md:text-center gap-20'>
        <div className='relative group'>
          <div className='absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-xl'></div>
          <Image
            src='/Me.svg'
            width={200}
            height={200}
            alt='me'
            className='relative z-10 float-animation hover:scale-105 transition-transform duration-500'
          />
        </div>
        <div className='flex flex-col'>
          <h1
            className='text-white text-4xl font-bold max-w-[800px] leading-relaxed'
            dangerouslySetInnerHTML={{ __html: displayedText }}
          />          <div className='flex flex-wrap gap-4 mt-6 max-md:justify-center'>
            <a
              href="#projects"
              className='btn-primary inline-flex items-center gap-2'
            >
              View My Work
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
              </svg>
            </a>
            <a
              href="/Abderrahmane_Sahki_Resume_ATS.pdf"
              download="Abderrahmane_Sahki_Resume.pdf"
              className='px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-105 inline-flex items-center gap-2'
            >
              Download CV
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
              </svg>
            </a>
            <a
              href="#contact"
              className='px-6 py-3 border border-purple-600 text-purple-300 hover:bg-purple-600/10 rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-105'
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-[900px] mt-20'>
        <div className='bg-gradient-to-r from-gray-900/50 to-purple-900/20 rounded-2xl p-8 border border-purple-800/20 backdrop-blur-sm'>
          <h1 className='text-white text-3xl font-bold mb-6 max-lg:text-center text-gradient'>I'm a Full-Stack Developer & AI Enthusiast</h1>
          <p className='max-lg:text-center max-lg:mx-4 text-gray-300 leading-relaxed text-lg mb-6'>
            I'm a third-year CS student and a passionate full-stack developer with a keen interest in AI and data science.
            Driven by curiosity and a love for technology, I explore innovative solutions to complex problems,
            aiming to make a significant impact in the digital world.
          </p>

          {/* Stats */}
          {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
            <div className='text-center'>
              <div className='text-2xl font-bold text-purple-400 mb-2'>5+</div>
              <div className='text-gray-400'>Projects Completed</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-purple-400 mb-2'>3+</div>
              <div className='text-gray-400'>Years Experience</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-purple-400 mb-2'>10+</div>
              <div className='text-gray-400'>Technologies Mastered</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}