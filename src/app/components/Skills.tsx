
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

export default function Skills() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const skills = [
    { name: 'JavaScript', icon: '/js.svg', category: 'Frontend' },
    { name: 'TypeScript', icon: '/typescript.svg', category: 'Frontend' },
    { name: 'React', icon: '/react.svg', category: 'Frontend' },
    { name: 'Next.js', icon: '/next.svg', category: 'Frontend' },
    { name: 'Node.js', icon: '/nodejs.svg', category: 'Backend' },
    { name: 'Express', icon: '/express.svg', category: 'Backend' },
    { name: 'NestJS', icon: '/nestjs.svg', category: 'Backend' },
    { name: 'FastAPI', icon: '/python.svg', category: 'Backend' },
    { name: 'MongoDB', icon: '/mongo.svg', category: 'Database' },
    { name: 'MySQL', icon: '/mysql.svg', category: 'Database' },
    { name: 'PostgreSQL', icon: '/postgresql.svg', category: 'Database' },
    { name: 'Redis', icon: '/redis.svg', category: 'Database' },
    { name: 'Python', icon: '/python.svg', category: 'AI/ML' },
    { name: 'TensorFlow', icon: '/tensorflow.svg', category: 'AI/ML' },
    { name: 'Scikit-learn', icon: '/scikit-learn.svg', category: 'AI/ML' },
    { name: 'Pandas', icon: '/pandas.svg', category: 'ML Libraries' },
    { name: 'NumPy', icon: '/numpy.svg', category: 'ML Libraries' },
    { name: 'Matplotlib', icon: '/matplotlib.svg', category: 'ML Libraries' },
    { name: 'Seaborn', icon: '/seaborn.svg', category: 'ML Libraries' },
    { name: 'Socket.io', icon: '/socket.svg', category: 'Real-time' }
  ];

  const categories = ['Frontend', 'Backend', 'Database', 'AI/ML', 'ML Libraries', 'Real-time'];

  // Group skills by category for carousel
  const skillsByCategory = categories.map(category => ({
    category,
    skills: skills.filter(skill => skill.category === category)
  }));
  // Auto-play functionality for carousel
  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [categories.length]);

  const nextCategory = () => {
    setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const prevCategory = () => {
    setCurrentCategoryIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
  };
  const goToCategory = (index: number) => {
    setCurrentCategoryIndex(index);
  };

  return (
    <div className='my-36 text-center'>
      <div data-aos="fade-up" className='mb-16'>
        <h1 className='text-4xl font-bold text-white mb-4'>
          Technical <span className='text-gradient'>Skills & Expertise</span>
        </h1>        <p className='text-gray-300 text-lg max-w-2xl mx-auto mb-8'>
          Continuously expanding my toolkit with cutting-edge technologies and frameworks to build innovative solutions
        </p>
      </div>

      {/* Carousel View */}
      <div data-aos="fade-up" className='w-4/5 mx-auto mb-20'>
        <div className='relative overflow-hidden bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-3xl p-8 border border-purple-800/20'>
          {/* Category Title */}
          <h2 className='text-3xl font-bold text-white mb-2'>
            {skillsByCategory[currentCategoryIndex].category}
          </h2>
          <p className='text-purple-300 mb-8'>
            {skillsByCategory[currentCategoryIndex].skills.length} Technologies
          </p>

          {/* Skills in Current Category */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 min-h-[200px]'>
            {skillsByCategory[currentCategoryIndex].skills.map((skill, index) => (
              <div
                key={skill.name}
                className='group bg-gradient-to-br from-[#251C31] to-[#1a0f24] rounded-2xl p-6 hover:from-purple-800/30 hover:to-purple-900/30 transition-all duration-500 hover:transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/20 border border-purple-800/20 hover:border-purple-600/40 card-hover animate-fade-in'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className='relative mb-4'>
                  <div className='absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <Image
                    className='relative z-10 mx-auto group-hover:scale-110 transition-transform duration-300'
                    src={skill.icon}
                    height={48}
                    width={48}
                    alt={skill.name}
                  />
                </div>
                <h3 className='text-white font-medium mb-1 group-hover:text-purple-300 transition-colors duration-300'>
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className='flex justify-center items-center mt-8 gap-4'>
            <button
              onClick={prevCategory}
              className='bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110'
            >
              ←
            </button>

            {/* Category Indicators */}
            <div className='flex gap-2'>
              {categories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToCategory(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentCategoryIndex
                    ? 'bg-purple-500 scale-125'
                    : 'bg-gray-600 hover:bg-purple-400'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextCategory}
              className='bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110'
            >
              →
            </button>
          </div>

          {/* Progress Bar */}
          <div className='mt-6'>
            <div className='w-full bg-gray-700 rounded-full h-1'>
              <div
                className='bg-gradient-to-r from-purple-500 to-blue-500 h-1 rounded-full transition-all duration-300'
                style={{ width: `${((currentCategoryIndex + 1) / categories.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Overview */}
      <div data-aos="fade-up" className='mb-16'>
        <h2 className='text-2xl font-bold text-white mb-8'>Areas of Expertise</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto'>
          {categories.map((category, index) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            return (
              <div
                key={category}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`bg-gradient-to-r from-gray-900/50 to-purple-900/20 rounded-xl p-4 border transition-all duration-300 cursor-pointer ${index === currentCategoryIndex
                  ? 'border-purple-500 bg-purple-900/30'
                  : 'border-purple-800/20 hover:border-purple-600/40'
                  }`}
                onClick={() => goToCategory(index)}
              >
                <h3 className='text-purple-300 font-semibold mb-2'>{category}</h3>
                <p className='text-gray-400 text-sm'>{categorySkills.length} Technologies</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Orbit Animation */}
      <div data-aos="fade-up" className='mx-auto w-1/2 max-lg:hidden'>
        <div className='relative'>
          <div className='absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl'></div>
          <Image
            src='orbit.svg'
            height={340}
            width={900}
            alt='orbit'
            className='relative z-10 float-animation'
          />
        </div>
      </div>
    </div>
  )
}
