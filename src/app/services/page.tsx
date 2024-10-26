'use client'

import React, { use, useContext, useEffect } from 'react';
import { ThemeContext } from '@/lib/ThemeContext';
import { Code, Search, Brush, Edit3, Video } from 'lucide-react'; // Example icons from 'lucide-react', you can customize icons as needed
import { BsInstagram } from 'react-icons/bs';
import { usePathname } from 'next/navigation';

const ServicesPage = () => {
  const { theme, themeIndex, setThemeIndex } = useContext(ThemeContext);
  const pathname = usePathname();

  // change themeIndex every 4 seconds by adding one and loop from 0-6
  // useEffect(() => {
  //   if (pathname === '/services') {
  //     const interval = setInterval(() => {
  //       setThemeIndex((themeIndex + 1) % 7);
  //     }, 4000);
  //     return () => clearInterval(interval);
  //   }
  // }, [themeIndex]);

  const services = [
    {
      icon: <Brush size={40} />,
      title: 'Branding & Design',
      description: 'Crafting visual identities that align with your brand values and resonate with your audience.',
    },
    {
      icon: <Edit3 size={40} />,
      title: 'Content Creation',
      description: 'Creating engaging, high-quality content to communicate your message and captivate audiences.',
    },
    {
      icon: <Code size={40} />,
      title: 'Web Development',
      description: 'Building fast, responsive, and user-friendly websites tailored to your business needs.',
    },
    {
      icon: <Search size={40} />,
      title: 'SEO Optimization',
      description: 'Improve your website’s ranking on search engines to increase visibility and drive traffic.',
    },
    {
      icon: <BsInstagram size={40} />,
      title: 'Social Media Marketing',
      description: 'Developing strategies to grow your social media presence and engage with your target audience.',
    },
    {
      icon: <Video size={40} />,
      title: 'Video Production',
      description: 'Producing professional videos that tell your story and connect with your customers.',
    }
  ];

  return (
    <div 
      style={{ backgroundColor: theme.primaryColor, color: theme.secondaryColor, transition: 'background-color 1.5s ease' }}
      className="min-h-screen py-32 flex flex-col items-center justify-center"
    >
      <h1 className="text-5xl font-bold mb-12">Our Services</h1>

      <p
        className='text-center text-lg max-w-2xl mb-12 mx-2'
      >
        We provide a range of services to help you grow your business and reach your goals.
      </p>

      {/* Services Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-10/12">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`bg-white text-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 cursor-pointer hover:text-[#fbbf24]`}
          >
            <div 
              className="flex items-center justify-center mb-4 text-[#fbbf24]" 
            >
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">{service.title}</h3>
            <p className="text-sm text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
