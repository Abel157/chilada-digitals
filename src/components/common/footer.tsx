import { ThemeContext } from '@/lib/ThemeContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const Footer = () => {
  const { theme, themeIndex, setThemeIndex } = useContext(ThemeContext);
  return (
    <footer className="bg-white bg-opacity-10 backdrop-blur-md py-6">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <p className="text-sm  text-gray-300">
              &copy; {new Date().getFullYear()} Chilada Digitals. All rights reserved.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex space-x-4">
            <Link href="/aboutus" className="text-gray-300 hover:text-gray-500 transition">
              About Us
            </Link>
            <Link href="/" className="text-gray-300 hover:text-gray-500  transition">
              Home
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-gray-500  transition">
              Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
