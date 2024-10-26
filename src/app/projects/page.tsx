'use client'

import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ThemeContext } from '@/lib/ThemeContext';
import creative1 from '@/../public/assets/creatives/09.jpg'
import creative2 from '@/../public/assets/creatives/66 (2).jpg'
import creative3 from '@/../public/assets/creatives/CHANOLY POST 09 copy.jpg'
import creative4 from '@/../public/assets/creatives/IMG_20240226_210233_615.jpg'
import creative5 from '@/../public/assets/creatives/IMG_20240227_171535_189.jpg'
import creative6 from '@/../public/assets/creatives/IMG_20240405_221906_246.jpg'
import creative7 from '@/../public/assets/creatives/IMG_20240623_192405_490.jpg'
import creative8 from '@/../public/assets/creatives/IMG_20241001_121005_813.jpg'
import creative9 from '@/../public/assets/creatives/atobaba 5.jpg'
import creative10 from '@/../public/assets/creatives/atobaba 5.jpg'
import creative11 from '@/../public/assets/creatives/atobaba buy and sell 2024.jpg'
import creative12 from '@/../public/assets/creatives/atobaba suq apr 2024.jpg'
import creative13 from '@/../public/assets/creatives/atobaba what to sell apr 2024.jpg'
import creative14 from '@/../public/assets/creatives/endod aug 29 FILE 2.jpg'
import creative15 from '@/../public/assets/creatives/endod aug file 2.jpg'
import creative16 from '@/../public/assets/creatives/endod july 18.jpg'
import creative17 from '@/../public/assets/creatives/endod july 31 file 2.jpg'
import { usePathname } from 'next/navigation';

const ProjectsPage = () => {
  const { theme, themeIndex, setThemeIndex } = useContext(ThemeContext);
  const pathname = usePathname();

  // change themeIndex every 4 seconds by adding one and loop from 0-6
  // useEffect(() => {
  //   if (pathname === '/projects') {
  //     const interval = setInterval(() => {
  //       setThemeIndex((themeIndex + 1) % 7);
  //     }, 4000);
  //     return () => clearInterval(interval);
  //   }
  // }, [themeIndex]);

  const gallery = [
    creative1,
    creative2,
    creative3,
    creative4,
    creative5,
    creative6,
    creative7,
    creative8,
    creative9,
    creative10,
    creative11,
    creative12,
    creative13,
    creative14,
    creative15,
    creative16,
    creative17,
  ];

  return (
    <div
      style={{
        backgroundColor: theme.primaryColor, color: theme.secondaryColor, transition: 'background-color 1.5s ease'
      }}
      className="min-h-screen flex flex-col items-center justify-start py-16"
    >
      {/* Landing Section with YouTube Video */}
      <section className="w-full h-96 md:h-[600px] flex justify-center items-center bg-black mb-8">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-dmwG54QsKc?si=WtNbwg_WUMCimMSy"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="w-full h-full"
        ></iframe>
      </section>

      {/* Projects Gallery Section */}
      <section className="w-full px-4 md:px-12">
        <h2 
        style={{
          color: theme.secondaryColor
        }}
        className="text-4xl font-bold text-center mb-8">Creatives Gallery</h2>

        <div
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4"
        >
          {gallery.map((image, index) => (
            <motion.div
              key={index}
              className="relative mb-4 overflow-hidden"
              whileHover={{ scale: 1.05 }} // Animation on hover
              transition={{ duration: 0.3 }}
            >
              <Image
                src={image}
                alt={`Project Image ${index + 1}`}
                // layout="responsive"
                className="rounded-lg object-cover w-full h-full"
                placeholder="blur"
              />
              {/* Overlay Effect */}
              {/* <motion.div
                className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center"
                transition={{ duration: 0.3 }}
              >
                <motion.p
                  className="text-white text-lg font-semibold opacity-0"
                  whileHover={{ opacity: 1 }} // Text fades in on hover
                  transition={{ duration: 0.3 }}
                >
                  View Project
                </motion.p>
              </motion.div> */}
            </motion.div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default ProjectsPage;
