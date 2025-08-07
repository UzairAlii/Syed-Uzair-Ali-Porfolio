import React from 'react'
import { motion } from "motion/react";
import { Images } from '../assets/assets';

const testimonials = [
    {
        name: "Rehman Shahid",
        company: "RHR Creative",
        rating: 3,
        feedback: `Amazing Experience!
Mujhe apni e commerce website banwani thi or honestly I am so glad ke maine Uzair se contact kia unhon ne RHR Creative ko sirf ek website nahi, ek complete system bana diya!
Website ka design clean or modern hai, email alerts for every step (order placed, product added, delivery completed), FAQs section for costumer support everything was handled professionally. Highly recommended! 🥰`,
    },
    {
        name: "Rehman Shahid",
        company: "RHR Creative",
        rating: 4,
        feedback: `Amazing Experience!
Mujhe apni e commerce website banwani thi or honestly I am so glad ke maine Uzair se contact kia unhon ne RHR Creative ko sirf ek website nahi, ek complete system bana diya!
Website ka design clean or modern hai, email alerts for every step (order placed, product added, delivery completed), FAQs section for costumer support everything was handled professionally. Highly recommended! 🥰`,
    },
    {
        name: "Rehman Shahid",
        company: "RHR Creative",
        rating: 5,
        feedback: `Amazing Experience!
Mujhe apni e commerce website banwani thi or honestly I am so glad ke maine Uzair se contact kia unhon ne RHR Creative ko sirf ek website nahi, ek complete system bana diya!
Website ka design clean or modern hai, email alerts for every step (order placed, product added, delivery completed), FAQs section for costumer support everything was handled professionally. Highly recommended! 🥰`,
    },

];

const Testimonials = () => {
    return (
        <div id='testi' className='min-h-screen py-16 px-4 md:px-16 bg-gradient-to-b from-[#81f5aa1d] to-[#ffff8b1b]'>
            {/* Section Header */}
            <div className='flex flex-col items-center justify-center w-full'>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-lg text-gray-500 mb-2">
                    All Client Reviews
                </motion.h3>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-center text-4xl md:text-3xl font-semibold mb-5 text-gray-800 ovo">
                    Testimonials
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-sm md:text-base text-center text-gray-700 leading-relaxed max-w-2xl">
                    Let’s see what clients think about my work
                </motion.p>
            </div>

            {/* Testimonials Cards */}
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                        className="relative bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-gray-900 font-bold text-base">{testimonial.name}</h3>
                                <p className="text-gray-600 text-sm">{testimonial.company}</p>
                            </div>
                            <div className="text-right">
                                <div className="flex items-center gap-1 text-yellow-400 text-sm">
                                    {[...Array(5)].map((_, i) => (
                                        <img
                                            key={i}
                                            src={i < testimonial.rating ? Images.yellowStar : Images.greyStar}
                                            alt={`${i < testimonial.rating ? 'Yellow' : 'Grey'} Star`}
                                            className="w-4 h-4"
                                        />
                                    ))}
                                </div>

                                <p className="text-xs text-gray-600 mt-1">{testimonial.rating} star rating</p>
                            </div>
                        </div>

                        {/* Feedback */}
                        <p className="text-gray-800 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                            “{testimonial.feedback}”
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials;
