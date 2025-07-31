import React, { useState } from 'react';
import { motion } from "motion/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const dataToSend = new FormData();
    dataToSend.append('access_key', '0cae66bc-91e9-4699-8c54-4b3f190001b9');
    dataToSend.append('name', formData.name);
    dataToSend.append('email', formData.email);
    dataToSend.append('subject', formData.subject);
    dataToSend.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: dataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setToastMessage('Form submitted successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setToastMessage('Submission failed: ' + data.message);
      }
    } catch (error) {
      setToastMessage('An error occurred while submitting the form.');
    } finally {
      setIsSubmitting(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    }
  };

  return (
    <motion.div id='contact'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-16 px-4 mx-auto bg-gradient-to-b from-[#8bffb411] to-[#8bffb411] flex flex-col items-center justify-center relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg animate-slide-in z-50">
          {toastMessage}
        </div>
      )}

      <div className='flex flex-col items-center justify-center w-full'>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-lg text-gray-500 mb-2">Connect With Me</motion.h3>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-4xl md:text-3xl font-semibold mb-5 text-gray-800 ovo">
          Contact
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-sm md:text-base text-center text-gray-700 leading-relaxed">
          I’m always excited to hear from you! Whether you have a question, a project in mind, or just want to say hello
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="text-sm md:text-base text-center text-gray-700 leading-relaxed mb-10 w-1/2">
          feel free to reach out.
        </motion.p>
      </div>

      <form onSubmit={onSubmit} className="grid gap-6 w-full md:w-1/2">
        <div className='flex md:flex-row flex-col items-center justify-center gap-5'>
          <div className='flex flex-col w-full gap-5'>
            <motion.input
              type="text"
              name="name"
              placeholder="Name"
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 ${errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{duration: 1 }}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm -mt-4">{errors.name}</p>}
          </div>
          <div className='flex flex-col w-full gap-5'>
            <motion.input
              type="email"
              name="email"
              placeholder="Email"
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 ${errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && <p className="text-red-500 text-sm -mt-4">{errors.email}</p>}
          </div>
        </div>

        <div>
          <motion.input
            type="text"
            name="subject"
            placeholder="Subject"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 ${errors.subject ? 'border-red-500' : 'border-gray-300'
              }`}
            initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
        </div>

        <div>
          <motion.textarea
            name="message"
            placeholder="Message"
            rows="5"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 ${errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
            initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
          className="bg-black hover:bg-[#000000e7] transition text-white py-3 rounded-md w-full font-medium flex justify-center items-center"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            'Send Message'
          )}
        </motion.button>
      </form>

      {/* Toast Slide-in Animation */}
      <style>
        {`
          @keyframes slide-in {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .animate-slide-in {
            animation: slide-in 0.5s ease-out forwards;
          }
        `}
      </style>
    </motion.div>
  );
};

export default Contact;
