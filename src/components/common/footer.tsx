import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-30 backdrop-blur-md py-6">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-700">
              &copy; {new Date().getFullYear()} Chilada Digitals. All rights reserved.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition">
              About Us
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
