import React from 'react'
import { Images } from '../assets/assets'
import { motion } from "motion/react";


const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id='top' className="w-11/12 max-w-5xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 gap-6">

      {/* Profile Picture with animated gradient border */}
      <div className="relative w-44 h-44 rounded-full before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-gradient-to-r before:from-red-500 before:via-purple-500 before:to-blue-500 before:animate-spin-slow before:z-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="w-full h-full rounded-full bg-white relative z-10 flex items-center justify-center p-[4px]">
          <img
            src={Images.profilePic}
            alt="Profile"
            className="w-[95%] h-[95%] rounded-full object-cover"
          />
        </motion.div>
      </div>

      {/* Introduction */}
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex items-center justify-center gap-2 text-base sm:text-lg md:text-xl">
        Hi, I am Syed Uzair Ali
        <img src={Images.hello} alt="Hello" className="w-5 sm:w-6" />
      </motion.h3>

      {/* Main heading */}
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="big-heading text-2xl sm:text-4xl md:text-5xl font-bold ovo leading-tight w-full md:w-[70%]">
        A Full Stack Website Developer Based in Pakistan
      </motion.h1>

      {/* Short description */}
      <motion.h3
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="text-sm sm:text-base md:text-lg font-ovo max-w-3xl mx-auto text-gray-700">
        I’m a Freelance Full Stack Web Developer based in Karachi, Pakistan,
        creating responsive, modern, and scalable websites that help businesses
        grow online effectively.
      </motion.h3>

      {/* Action buttons */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
        <a href="#contact">
          <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-900 transition duration-300">
          Contact me
          <img className='w-5 invert rotate-[135deg]' src={Images.rightArrow} alt="" />
        </motion.button>
        </a>
      </motion.div>
    </motion.div>
  )
}

export default LandingPage
