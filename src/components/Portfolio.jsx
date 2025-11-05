import React, { useState } from 'react';
import { Images } from '../assets/assets';
import { motion } from "motion/react";

const projects = [
  {
    title: "The Wellness Method (First Upwork Project)",
    image: Images.thumbnail,
    github: "https://github.com/UzairAlii/wellme",
    live: "https://thewellnessmethod.com"
  },
  {
    title: "RHR Creative (Client Project)",
    image: Images.rhr,
    github: "https://github.com/UzairAlii/RHR-Creative",
    live: "https://rhrcreative.com"
  },
  {
    title: "Ecomus (Full Stack)",
    image: Images.ecomus,
    github: "https://github.com/UzairAlii/Ecomus",
    live: "https://ecomus-frontend-delta.vercel.app/"
  },
  {
    title: "Dr. Smith (Frontend)",
    image: Images.drSmith,
    github: "https://github.com/UzairAlii/Dr.Smith",
    live: "https://dr-smith.netlify.app/"
  },
  {
    title: "Metro Bank (Frontend)",
    image: Images.metro,
    github: "https://github.com/UzairAlii/MetroBank",
    live: "https://metrobanksolutions.netlify.app/"
  },
];

const Portfolio = () => {
  const [visibleProducts, setVisibleProducts] = useState(3);

  const handleLoadMore = () => {
    setVisibleProducts((prev) => prev + 3);
  };

  return (
    <motion.div id='portfolio'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-16 px-4 md:px-16">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center text-lg text-gray-500 mb-2'>What I Make</motion.h3>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center text-4xl md:text-3xl font-semibold mb-5 text-gray-800 ovo">
        My Projects
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className='text-sm md:text-base text-center text-gray-700 leading-relaxed'> Explore a showcase of my recent frontend and full stack work</motion.p>

      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-3 mt-10">
        {projects.slice(0, visibleProducts).map((project, index) => (
          <motion.div key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="w-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition duration-300"
              />
            </div>
            <div className="mt-4 px-4 pb-4 flex flex-col gap-2">
              <h3 className="text-md md:text-lg font-semibold text-gray-800">{project.title}</h3>


              <div className="flex items-center justify-start gap-4 mt-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
                  <img
                    src={Images.github}
                    alt="GitHub"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-black rounded-lg text-sm font-medium transition flex items-center gap-2"
                >
                  <p>Live Preview</p>
                  <img className='w-3' src={Images.rightArrow} alt="" />
                </a>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleProducts < projects.length && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex items-center justify-center flex-col">
          <button
            onClick={handleLoadMore}

            className="border border-black px-6 py-2 w-full md:w-[20%] font-semibold text-sm text-black bg-transparent rounded cursor-pointer"
          >
            See more
          </button>
        </motion.div>
      )}

    </motion.div>
  );
};

export default Portfolio;
