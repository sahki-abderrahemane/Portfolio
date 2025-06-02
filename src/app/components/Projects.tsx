import Image from 'next/image'
import React from 'react'
import ProjectExample from './ProjectExample'

export default function Projects() {
  const projects = [
    {
      "theme": "Healthcare Platform",
      "title": "HealSeek",
      "description": "A revolutionary healthcare platform that bridges the gap between patients and healthcare providers. HealSeek offers seamless doctor discovery with advanced filtering, intelligent appointment booking system, comprehensive patient management, and secure real-time communication. Built with modern technologies to ensure scalability, security, and exceptional user experience.",
      "technologies": ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Cloudinary"],
      "image": "/healseek.png",
      "isOdd": true,
      "links": {

        "link": "https://healseek.vercel.app/en",
        "github": null
      },
      "status": "Live",
      "highlights": ["Smart Doctor Discovery", "Real-time Booking", "Doctor Dashboard", "Medical Records"]
    },
    {
      "theme": "Educational Platform",
      "title": "Edu+",
      "description": "An innovative learning platform that empowers students to enhance their skills across various domains. Features interactive courses, practice exercises, progress tracking, and collaborative learning tools.",
      "technologies": ["Next.js", "Express.js", "MongoDB", "Socket.io"],
      "image": "/edu+.png",
      "isOdd": false,
      "links": {
        "link": "https://edu-plus-nine.vercel.app",
        "github": "https://github.com/Abdousa23/Edu-plus"
      },
      "status": "Live",
      "highlights": ["Interactive Courses", "Real-time Chat", "Progress Tracking", "Skill Assessment"]
    },
    {
      "theme": "Hotel Management",
      "title": "OrgTel",
      "description": "A sophisticated hotel reservation system designed to streamline hospitality operations. Includes booking management, customer profiles, room availability tracking, and comprehensive reporting.",
      "technologies": ["React", "Node.js", "MongoDB", "Express.js"],
      "image": "/orgtel.png",
      "isOdd": true,
      "links": {
        "link": null,
        "github": "https://github.com/Abdousa23/OrgTel"
      },
      "status": "Completed",
      "highlights": ["Reservation System", "Customer Management", "Room Tracking", "Analytics Dashboard"]
    },
    {
      "theme": "Workshop Management",
      "title": "Mon Atelier",
      "description": "A freelance project developing a comprehensive workshop management system. Handles employee scheduling, supplier relationships, equipment maintenance, and repair order workflows.",
      "technologies": ["React", "Node.js", "Express.js", "MongoDB"],
      "image": "/monatelier.png",
      "isOdd": false,
      "links": {
        "link": null,
        "github": null,
      }, "status": "Private",
      "highlights": ["Employee Management", "Supplier Integration", "Equipment Tracking", "Order Management"]
    }
  ];

  return (
    <div id='projects' className='mx-auto w-2/3 mb-36 max-md:w-[90%]'>
      <div className='text-center mb-12'>
        <h1 className='text-white text-3xl font-bold mb-4'>Featured Projects</h1>
        <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
          A showcase of innovative solutions I've built, ranging from healthcare platforms to educational tools.
        </p>
      </div>
      <div className='flex flex-col justify-around items-center gap-12'>
        {
          projects.map((project, index) =>
            <ProjectExample key={index} {...project} />)
        }
      </div>

      {/* Call to Action */}
      <div data-aos="fade-up" className='mt-16 text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl p-8 border border-purple-800/20'>
        <h3 className='text-white text-xl font-semibold mb-4'>Interested in working together?</h3>
        <p className='text-gray-300 mb-6'>I'm always open to discussing new opportunities and innovative projects.</p>
        <a
          href="#contact"
          className='inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-105'
        >
          Let's Connect
          <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
          </svg>
        </a>
      </div>
    </div>
  )
}
