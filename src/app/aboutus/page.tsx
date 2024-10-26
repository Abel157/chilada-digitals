'use client'
import { useContext, useEffect } from 'react';
import { ThemeContext } from '@/lib/ThemeContext';
import Image from 'next/image';
import teamMember from '@/../public/assets/cute-smiling-young-man-with-bristle-looking-satisfied 2.png';
import Team from '@/components/team/team';
import PartnersCarousel from '@/components/partners/partners-carousel';

const AboutUsPage = () => {
  const { theme, themeIndex, setThemeIndex } = useContext(ThemeContext);

  // change themeIndex every 4 seconds by adding one and loop from 0-6
  useEffect(() => {
    const interval = setInterval(() => {
      setThemeIndex((themeIndex + 1) % 7);
    }, 4000);
    return () => clearInterval(interval);
  }, [themeIndex]);

  return (
    <div style={{ backgroundColor: theme.primaryColor }} className="flex flex-col items-center pb-32">
      {/* Hero Section */}
      <div className="container gap-x-10 mx-auto max-w-screen-xl px-6 py-14 md:py-32 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: YouTube Video */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          {/* <div className="aspect-w-16 aspect-h-9"> */}
            <iframe
              className="w-full h-96 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your own video URL
              title="About Us Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          {/* </div> */}
        </div>

        {/* Right Side: Text Content */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h1 style={{ color: theme.secondaryColor }} className="text-4xl font-bold mb-4">
            About Chilada Digitals
          </h1>
          <p style={{ color: theme.secondaryColor }} className="text-lg leading-relaxed mb-6">
            At Chilada Digitals, we specialize in bringing creative digital marketing solutions to our clients. Our team is dedicated to delivering high-quality results that help brands thrive in the ever-changing digital landscape.
          </p>

          {/* CTA Button */}
          <button
          style={{
            backgroundColor: theme.secondaryColor,
            color: theme.primaryColor
          }}
          className="px-4 py-2 rounded-lg border hover:-translate-y-1 transform transition duration-200 hover:shadow-md text-base font-semibold w-full md:w-auto"
        >
          Connect With Us
        </button>
        </div>
      </div>

      {/* <PartnersCarousel /> */}

      <Team />
      
    </div>
  );
};

export default AboutUsPage;
