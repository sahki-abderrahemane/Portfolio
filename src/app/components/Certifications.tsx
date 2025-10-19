'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  certificateUrl?: string;
  linkedinUrl?: string;
  image: string;
  category: 'Machine Learning' | 'Development' | 'Cloud' | 'Other';
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (cert: Certification) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCert(null);
    setIsModalOpen(false);
  };

  // Handle Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]); const certifications: Certification[] = [
    {
      id: 1,
      title: "Machine Learning Specialization",
      issuer: "Coursera - Stanford University",
      date: "2024",
      description: "Comprehensive program covering supervised learning, unsupervised learning, and best practices in machine learning.",
      skills: ["Python", "TensorFlow", "Scikit-learn", "Neural Networks", "Deep Learning"],
      image: "/Coursera Machine Learning Specialization.pdf",
      linkedinUrl: "https://www.linkedin.com/in/abderrahemane-sahki-a71a6224b/details/certifications/",
      category: "Machine Learning"
    },
    {
      id: 2,
      title: "Advanced Learning Algorithms",
      issuer: "Coursera - DeepLearning.AI",
      date: "2024",
      description: "Advanced concepts in machine learning including neural networks, decision trees, and ensemble methods.",
      skills: ["Neural Networks", "Decision Trees", "Random Forest", "XGBoost", "Model Optimization"],
      image: "/Coursera Advanced Learning algorithms.pdf",
      linkedinUrl: "https://www.linkedin.com/in/abderrahemane-sahki-a71a6224b/details/certifications/",
      category: "Machine Learning"
    },
    {
      id: 3,
      title: "Supervised Machine Learning",
      issuer: "Coursera - Stanford University",
      date: "2024",
      description: "Foundations of supervised learning including regression, classification, and regularization techniques.",
      skills: ["Linear Regression", "Logistic Regression", "Regularization", "Classification", "Feature Engineering"],
      image: "/Coursera supervised ml.pdf",
      linkedinUrl: "https://www.linkedin.com/in/abderrahemane-sahki-a71a6224b/details/certifications/",
      category: "Machine Learning"
    },
    {
      id: 4,
      title: "Machine Learning Foundations",
      issuer: "Coursera",
      date: "2023",
      description: "Introduction to machine learning concepts, algorithms, and practical applications.",
      skills: ["Python", "Data Analysis", "Statistical Learning", "Model Evaluation", "Cross-validation"],
      image: "/Coursera Machine Learning.pdf",
      linkedinUrl: "https://www.linkedin.com/in/abderrahemane-sahki-a71a6224b/details/certifications/",
      category: "Machine Learning"
    },
    {
      id: 5,
      title: "Data Science Associate",
      issuer: "DataCamp",
      date: "2024",
      description: "Professional certification validating expertise in data manipulation, exploratory analysis, statistical experimentation, and model development using Python and SQL.",
      skills: ["Python", "SQL", "Data Manipulation", "Statistical Analysis", "Data Visualization", "Pandas", "NumPy"],
      image: "/DataCamp Data Science Associate.pdf",
      linkedinUrl: "https://www.linkedin.com/in/abderrahemane-sahki-a71a6224b/details/certifications/",
      category: "Machine Learning"
    },
    {
      id: 6,
      title: "AI Engineer for Data Scientists Associate",
      issuer: "DataCamp",
      date: "2024",
      description: "Comprehensive certification covering AI engineering fundamentals, machine learning deployment, MLOps practices, and building production-ready AI systems.",
      skills: ["MLOps", "Model Deployment", "AI Engineering", "TensorFlow", "scikit-learn", "Model Monitoring", "Production AI"],
      image: "/DataCamp AI Engineer Associate.pdf",
      linkedinUrl: "https://www.linkedin.com/in/abderrahemane-sahki-a71a6224b/details/certifications/",
      category: "Machine Learning"
    }
  ];


  return (
    <div id='certifications' className='mx-auto w-2/3 mb-36 max-md:w-[90%]'>      {/* Header Section */}
      <div data-aos="fade-up" className='text-center mb-12'>
        <h1 className='text-white text-3xl font-bold mb-4'>Machine Learning Certifications</h1>
        <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
          Professional certifications showcasing expertise in machine learning, artificial intelligence, and data science.
        </p>
      </div>{/* Certifications Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className='group bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-xl p-6 border border-purple-800/20 hover:border-purple-600/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10'
          >
            {/* Certificate Header */}
            <div className='flex items-start gap-4 mb-4'>
              <div className='w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0'>
                <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' />
                </svg>
              </div>
              <div className='flex-1'>
                <h3 className='text-white font-semibold text-lg group-hover:text-purple-300 transition-colors duration-300'>
                  {cert.title}
                </h3>
                <p className='text-purple-400 font-medium'>{cert.issuer}</p>
                <p className='text-gray-400 text-sm'>{cert.date}</p>
              </div>
            </div>

            {/* Description */}
            <p className='text-gray-300 mb-4 leading-relaxed'>
              {cert.description}
            </p>

            {/* Skills */}
            <div className='mb-4'>
              <h4 className='text-white text-sm font-medium mb-2'>Skills Acquired:</h4>
              <div className='flex flex-wrap gap-2'>
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className='px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-600/30'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>            {/* Certificate Link */}
            <div className='flex items-center justify-between mt-6'>
              <span className={`px-3 py-1 text-xs rounded-full font-medium ${cert.category === 'Machine Learning' ? 'bg-blue-600/20 text-blue-300' :
                cert.category === 'Development' ? 'bg-green-600/20 text-green-300' :
                  cert.category === 'Cloud' ? 'bg-orange-600/20 text-orange-300' :
                    'bg-gray-600/20 text-gray-300'
                }`}>
                {cert.category}
              </span>

              <button
                onClick={() => openModal(cert)}
                className='inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 bg-purple-600/10 hover:bg-purple-600/20 px-3 py-2 rounded-lg border border-purple-600/30 hover:border-purple-600/50'
              >
                <span className='text-sm font-medium'>View Certificate</span>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>      {/* Stats Section */}
      {/* <div data-aos="fade-up" className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl p-6 border border-purple-800/20'>
          <div className='text-3xl font-bold text-white mb-2'>{certifications.length}+</div>
          <div className='text-gray-300'>Certifications Earned</div>
        </div>
        <div className='text-center bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-xl p-6 border border-blue-800/20'>
          <div className='text-3xl font-bold text-white mb-2'>500+</div>
          <div className='text-gray-300'>Hours of Learning</div>
        </div>
        <div className='text-center bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-xl p-6 border border-indigo-800/20'>
          <div className='text-3xl font-bold text-white mb-2'>4</div>
          <div className='text-gray-300'>Specializations</div>
        </div>
      </div> */}      {/* Certificate Modal */}
      {isModalOpen && selectedCert && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm modal-backdrop' onClick={closeModal}>
          <div className='relative w-11/12 max-w-4xl max-h-[90vh] bg-gray-900 rounded-2xl border border-purple-600/30 overflow-hidden modal-content' onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className='flex items-center justify-between p-6 border-b border-gray-700'>
              <div>
                <h3 className='text-xl font-bold text-white'>{selectedCert.title}</h3>
                <p className='text-purple-400'>{selectedCert.issuer}</p>
              </div>
              <button
                onClick={closeModal}
                className='p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-gray-800 rounded-lg'
              >
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>            {/* Modal Content */}
            <div className='p-4 flex flex-col lg:flex-row gap-4'>              {/* Certificate Image/PDF Viewer */}
              <div className='flex-1'>
                <div className='bg-gray-800 rounded-lg p-2 border border-gray-700'>                  {selectedCert.image.endsWith('.pdf') ? (
                  <div className='w-full h-80 bg-white rounded-lg overflow-hidden'>
                    <iframe
                      src={`${selectedCert.image}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&zoom=page-fit`}
                      className='w-full h-full border-0'
                      title={`${selectedCert.title} Certificate`}
                      style={{ pointerEvents: 'none' }}
                    />
                  </div>
                ) : (
                  <div className='relative w-full h-80 flex items-center justify-center'>
                    <Image
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      fill
                      className='object-contain rounded-lg'
                    />
                  </div>
                )}
                </div>
              </div>              {/* Certificate Details */}
              <div className='flex-1 space-y-4'>
                {/* Description */}
                <div>
                  <h4 className='text-white font-semibold mb-2'>Description</h4>
                  <p className='text-gray-300 leading-relaxed'>{selectedCert.description}</p>
                </div>

                {/* Skills */}
                <div>
                  <h4 className='text-white font-semibold mb-2'>Skills Acquired</h4>
                  <div className='flex flex-wrap gap-2'>
                    {selectedCert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className='px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full border border-purple-600/30'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certificate Details */}
                <div className='bg-gray-800 rounded-lg p-4 border border-gray-700'>
                  <div className='space-y-2'>
                    <div className='flex justify-between'>
                      <span className='text-gray-400'>Date Earned:</span>
                      <span className='text-white'>{selectedCert.date}</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-gray-400'>Category:</span>
                      <span className='text-purple-400'>{selectedCert.category}</span>
                    </div>
                  </div>
                </div>                {/* Action Buttons */}
                <div className='flex justify-center'>
                  {selectedCert.linkedinUrl && (
                    <a
                      href={selectedCert.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium'
                    >
                      <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                      </svg>
                      View on LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}