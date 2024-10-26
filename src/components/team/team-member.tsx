import { ThemeContext } from '@/lib/ThemeContext'
import React, { useContext, useRef } from 'react'
import teamMember from '@/../public/assets/cute-smiling-young-man-with-bristle-looking-satisfied 2.png';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const TeamMember = () => {
  const { theme } = useContext(ThemeContext)
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animation triggers only once when it comes into view

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className='relative rounded-2xl shadow-md cursor-pointer'>
      <div
        className='overflow-hidden h-[400px] w-[300px] rounded-2xl hover:shadow-lg transition duration-300 ease-in-out'
      >
        <Image
          src={teamMember}
          alt='Team Member'
          className='w-full h-auto object-cover'
        />
      </div>
      <div
        className='absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 rounded-2xl transition duration-300 ease-in-out'
      >
        <div
          style={{
        width: '95%',
        // background: `${theme.primaryColor}80`, // Add alpha value for transparency
        // backdropFilter: 'blur(10px)',
          }}
          className='absolute bg-opacity-0 top-48 left-2 rounded-2xl p-4 z-10 transition duration-300 ease-in-out'
        >
          <h3
        style={{
          color: 'white',
          textAlign: 'start',
        }}
        className='text-lg md:text-3xl font-semibold'
          >
        John Doe
          </h3>
          <p
        style={{
          color: theme.secondaryColor,
          textAlign: 'start',
        }}
        className='text-lg md:text-2xl font-semibold'
          >
        CEO
          </p>
          <p
        className='text-white'
          >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, deserunt.
          </p>
          <div className='flex gap-4 text-blue-300 my-2'>
        <Linkedin size={20} />
        <Linkedin size={20} />
        <Linkedin size={20} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TeamMember