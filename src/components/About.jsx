import React from 'react'
import { Images } from '../assets/assets'
import { motion } from "motion/react";

const About = () => {
    return (
        <motion.div
            id='about' className='w-full px-5 md:px-[12%] py-14 bg-gradient-to-b from-white to-[#fab1b120] scroll-mt-20'>
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='text-center text-lg text-gray-500 mb-2'>Introduction</motion.h3>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className='text-center text-4xl md:text-3xl font-semibold mb-10 text-gray-800 ovo'>All About Me</motion.h1>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className='flex flex-col md:flex-row items-center gap-10'>
                {/* Profile Image */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                    className='w-full md:w-[30%] flex justify-center'>
                    <img
                        className='w-48 h-48 md:w-60 md:h-60 object-cover rounded-full border-4 border-gray-300 shadow-lg hover:scale-105 transition duration-300'
                        src={Images.profilePic}
                        alt="Uzair"
                    />
                </motion.div>

                {/* About Text & Cards */}
                <div className='w-full md:w-[70%]'>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className='text-sm md:text-base text-gray-700 leading-relaxed text-center md:text-start'>
                        As a full stack web developer and freelancer, I specialize in creating dynamic websites using React, Node.js, Express, and MongoDB.
                        I handle both frontend and backend development, ensuring responsive design, smooth user experience, secure authentication,
                        and efficient database integration. I deliver complete, scalable solutions to client's unique business needs.
                    </motion.p>

                    {/* Cards */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                        {[{
                            img: Images.CL,
                            title: "Technologies",
                            desc: "HTML5, CSS3, JavaScript, React JS, Next JS, Tailwind CSS, Express, Node JS MongoDB"
                        }, {
                            img: Images.education,
                            title: "Education",
                            desc: "FSC (Pre-Engineering), Diploma in Web Development"
                        }, {
                            img: Images.projects,
                            title: "Projects",
                            desc: "Built 2 frontend-only projects and 2 full stack applications"
                        }].map((card, i) => (
                            <motion.div
                                key={i}
                                className='bg-white shadow-md hover:shadow-xl transition rounded-xl p-6 text-center'
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: i * 0.3, duration: 1 }}
                            >
                                <img className='w-12 h-12 mx-auto mb-4' src={card.img} alt={card.title} />
                                <h4 className='text-lg font-semibold text-gray-800 mb-2'>{card.title}</h4>
                                <p className='text-sm text-gray-600'>{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className='mt-10'>
                        <h1 className='text-lg font-semibold text-gray-800 mb-6 text-center'>Tools I Use</h1>
                        <div className='grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-10 gap-5 justify-items-center'>

                            {/* Tool Item */}
                            {[Images.vsCode, Images.figma, Images.webpack, Images.git, Images.github, Images.boostrap, Images.tailwind, Images.mongo, Images.node, Images.postman].map((tool, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: i * 0.2 }}
                                    className='flex items-center justify-center h-16 w-16 rounded-xl border border-gray-200 bg-white shadow hover:shadow-lg hover:scale-105 transition-all duration-300 p-2'
                                >
                                    <img src={tool} alt={`tool-${i}`} className='w-full h-full object-contain' />
                                </motion.div>
                            ))}

                        </div>
                    </div>


                </div>
            </motion.div>
        </motion.div>
    )
}

export default About
