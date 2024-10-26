import { ThemeContext } from '@/lib/ThemeContext'
import { ArrowRightIcon, LocateIcon, MailIcon, PhoneCallIcon } from 'lucide-react';
import React, { useContext, useRef } from 'react'
import { motion, useInView } from 'framer-motion';

const ContactUs = () => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto w-11/12 bg-white bg-opacity-5 my-20 rounded-lg p-6 md:p-16 flex flex-col md:flex-row gap-12 backdrop-blur-xl"
    >
      {/* Left Section */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex flex-col justify-between gap-y-6"
      >
        {/* Heading and Info */}
        <div className="flex flex-col gap-y-6">
          <h3 className="font-bold text-5xl text-white leading-tight">
            Let’s discuss something
            <span style={{ color: theme.secondaryColor }}> cool </span> together!
          </h3>

          {/* Contact Info */}
          <div className="flex flex-col gap-y-4 text-lg text-white">
            {/* Email with underline effect */}
            <div
              className="flex items-center gap-x-3 cursor-pointer relative group"
            >
              <MailIcon size={24} />
              <span className="group-hover:underline transition-all duration-300">
                chilada@gmail.com
              </span>
            </div>

            {/* Phone with background and text color transition */}
            <div
              className="flex items-center gap-x-3 bg-opacity-50 rounded-lg py-3 px-4 transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: `${theme.secondaryColor}50`,
                color: 'white',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.secondaryColor;
                e.currentTarget.style.color = theme.primaryColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = `${theme.secondaryColor}50`;
                e.currentTarget.style.color = 'white';
              }}
            >
              <PhoneCallIcon size={24} />
              <span>+123 456 789</span>
            </div>

            {/* Location with translate effect on hover */}
            <div
              className="flex items-center gap-x-3 cursor-pointer transition-transform duration-300 transform hover:translate-x-2"
            >
              <LocateIcon size={24} />
              <span>123 Street</span>
            </div>
          </div>
        </div>

      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full md:w-1/2 bg-white bg-opacity-10 backdrop-blur-xl rounded-lg p-8 shadow-lg transform transition-all hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-white">I&apos;m interested in...</h2>

        <form className="space-y-6">
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full bg-transparent border-b-2 border-gray-300 outline-none py-2 text-lg text-white placeholder-gray-400"
              style={{
                transition: 'border-color 0.3s ease',
                padding: '0.5rem',
              }}
              onFocus={(e) => (e.target.style.borderBottomColor = theme.primaryColor)}
              onBlur={(e) => (e.target.style.borderBottomColor = '#ccc')}
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full bg-transparent border-b-2 border-gray-300 outline-none py-2 text-lg text-white placeholder-gray-400"
              style={{
                transition: 'border-color 0.3s ease',
                padding: '0.5rem',
              }}
              onFocus={(e) => (e.target.style.borderBottomColor = theme.primaryColor)}
              onBlur={(e) => (e.target.style.borderBottomColor = '#ccc')}
            />
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              className="w-full bg-transparent border-b-2 border-gray-300 outline-none py-2 text-lg text-white placeholder-gray-400"
              style={{
                transition: 'border-color 0.3s ease',
                padding: '0.5rem',
              }}
              onFocus={(e) => (e.target.style.borderBottomColor = theme.primaryColor)}
              onBlur={(e) => (e.target.style.borderBottomColor = '#ccc')}
            />
          </div>

          {/* Submit Button */}
          <button
            style={{
              backgroundColor: theme.secondaryColor,
              color: theme.primaryColor
            }}
            className="px-6 py-3 rounded-lg border border-transparent hover:border-white hover:-translate-y-1 transform transition duration-200 hover:shadow-md text-base font-semibold flex items-center gap-2 justify-center"
          >
            Send Message <ArrowRightIcon size={24} />
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
