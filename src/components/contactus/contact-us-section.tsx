import { ThemeContext } from '@/lib/ThemeContext'
import { ArrowRightIcon, LocateIcon, MailIcon, PhoneCallIcon } from 'lucide-react';
import React, { useContext, useRef } from 'react'
import { motion, useInView } from 'framer-motion';

const ContactUs = () => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animation triggers only once when it comes into view

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className='max-w-6xl mx-auto w-10/12 bg-white bg-opacity-30 my-20 rounded-xl p-4 md:p-10 flex flex-col md:flex-row gap-y-4'
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className='w-full flex flex-col justify-between gap-y-4'>
        <div className='flex flex-col gap-y-8'>
          <h3 className='font-semibold text-white text-4xl font-heading leading-tight max-w-80'>
            Let’s discuss on something
            <span style={{
              color: theme.secondaryColor,
            }}> cool </span>
            together
          </h3>
          <div
            style={{
              color: theme.secondaryColor,
            }}
            className='flex flex-col gap-y-4 max-w-sm'>
            <div className='flex justify-start items-center gap-x-2 cursor-pointer'>
              <MailIcon /> <span>chilada@gmail.com</span>
            </div>
            <div
              style={{
                // translucent bg with theme.secondaryColor
                backgroundColor: `${theme.secondaryColor}50`, // 80 represents 50% opacity
                color: 'white',
              }}
              className={`flex justify-start items-center gap-x-4 rounded-lg py-3 pr-20 pl-2 cursor-pointer`}>
              <PhoneCallIcon /> <span>+123 456 789</span>
            </div>
            <div className='flex justify-start items-center gap-x-4'>
              <LocateIcon /> <span>123 Street</span>
            </div>
          </div>
        </div>
        <div className='self-center'>
          1
        </div>
      </motion.div>
      <div
        className="w-full bg-white bg-opacity-50 rounded-xl p-8 hover:scale-110 transition-all duration-300 hover:z-30"
      >
        <h2 className="text-xl font-semibold mb-6 text-gray-700">I&apos;m interested in...</h2>
        <form className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full bg-transparent border-b-2 border-gray-300 outline-none py-2"
              style={{
                transition: 'border-color 0.3s ease',
                borderBottom: '2px solid #ccc', // Default border color
                width: '100%',
                padding: '0.5rem',
              }}
              onFocus={(e) => (e.target.style.borderBottomColor = theme.primaryColor)} // Change border color on focus
              onBlur={(e) => (e.target.style.borderBottomColor = '#ccc')} // Reset border color on blur
            />
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full bg-transparent border-b-2 border-gray-300 outline-none py-2"
              style={{
                transition: 'border-color 0.3s ease',
                borderBottom: '2px solid #ccc', // Default border color
                width: '100%',
                padding: '0.5rem',
              }}
              onFocus={(e) => (e.target.style.borderBottomColor = theme.primaryColor)} // Change border color on focus
              onBlur={(e) => (e.target.style.borderBottomColor = '#ccc')} // Reset border color on blur
            />
          </div>
          <div className="relative">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={12}
              className="w-full bg-transparent border-b-2 border-gray-300 outline-none py-2"
              style={{
                transition: 'border-color 0.3s ease',
                borderBottom: '2px solid #ccc', // Default border color
                width: '100%',
                padding: '0.5rem',
              }}
              onFocus={(e) => (e.target.style.borderBottomColor = theme.primaryColor)} // Change border color on focus
              onBlur={(e) => (e.target.style.borderBottomColor = '#ccc')} // Reset border color on blur
            />
          </div>
          <button
            style={{
              backgroundColor: theme.secondaryColor,
              color: theme.primaryColor
            }}
            className="px-4 py-2 rounded-lg border hover:-translate-y-1 transform transition duration-200 hover:shadow-md text-base font-semibold"
          >
            Send Message <ArrowRightIcon size={24} style={{ display: 'inline-block' }} />
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default ContactUs