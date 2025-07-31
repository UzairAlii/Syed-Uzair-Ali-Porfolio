import React from 'react'
import { Images } from '../assets/assets'
import { motion } from "motion/react";


const services = [
  {
    image: Images.frontend,
    title: 'Frontend Development',
    description: 'Modern and responsive UI using React, Tailwind CSS, and more.',
    link: 'https://www.google.com/search?q=frontend+development+definition'
  },
  {
    image: Images.backend,
    title: 'Backend Development',
    description: 'Robust server-side applications using Node.js, Express, and MongoDB.',
    link: 'https://www.google.com/search?q=backend+development+definition'
  },
  {
    image: Images.fullStack,
    title: 'Full Stack Web Development',
    description: 'Complete solutions with both frontend and backend integration.',
    link: 'https://www.google.com/search?q=full+stack+web+development+definition'
  },
  {
    image: Images.api,
    title: 'API Integration',
    description: 'Third-party APIs and custom RESTful APIs integration.',
    link: 'https://www.google.com/search?q=api+integration+in+web+development'
  },
  {
    image: Images.seo,
    title: 'SEO Optimization',
    description: 'Boost your website visibility on search engines with best SEO practices.',
    link: 'https://www.google.com/search?q=seo+optimization+definition'
  },
  {
    image: Images.deployment,
    title: 'Deployment & Hosting',
    description: 'Deploy and host your projects using Vercel, Netlify, or custom VPS.',
    link: 'https://www.google.com/search?q=website+deployment+and+hosting'
  },
]

const Services = () => {
  return (
    <motion.div
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-4 py-14 md:px-16 bg-gradient-to-b from-[#ffdfdf67] to-[#00b7ff0e]"
    >
      <div className='flex flex-col items-center justify-center w-full text-center'>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center text-lg text-gray-500 mb-2'>What I Offer</motion.h3>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-4xl md:text-3xl font-semibold mb-5 text-gray-800 ovo">
          My Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className='text-sm md:text-base text-gray-700 w-full md:w-1/2 leading-relaxed'>As a dedicated freelancer, I provide end-to-end web development services from eye-catching frontend designs to powerful backend logic. My goal is to build fast, secure, and scalable websites that deliver real value and user satisfaction.</motion.p>
      </div>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            
            className="bg-white/90 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl flex flex-col"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-16 mt-[-30px] ml-[-10px]"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold text-gray-700 mb-3">{service.title}</h2>
              <p className="text-gray-600 mb-4 text-sm md:text-base flex-grow">{service.description}</p>
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-800 transition-colors font-medium text-sm md:text-base"
              >
                Read More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Services
