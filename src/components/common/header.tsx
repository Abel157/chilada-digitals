import React, { useState, useEffect, useContext } from 'react';
import logo from '@/../public/assets/Layer 2.svg';
import Image from 'next/image';
import { ThemeContext } from '@/lib/ThemeContext';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import { PhoneCall } from 'lucide-react';
import { CiBurger, CiMenuBurger } from 'react-icons/ci';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    // Set the initial window width when the component mounts
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const maxHeaderWidth = 1150; // lg screen size in pixels

  // Calculate header width based on scroll position
  const getHeaderWidth = () => {
    const initialWidth = windowWidth;
    const finalWidth = Math.min(windowWidth * 0.95, maxHeaderWidth);
    if (scrollY >= 150) {
      return finalWidth;
    } else {
      const widthDifference = initialWidth - finalWidth;
      const widthReduction = (scrollY / 150) * widthDifference;
      return initialWidth - widthReduction;
    }
  };

  const headerWidth = getHeaderWidth();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[90] transition-all ease-in-out"
      style={{
        width: headerWidth,
        maxWidth: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)',
        transition: 'width 0.5s ease, border-radius 0.5s ease, margin-top 0.5s ease',
        borderRadius: scrollY > 150 ? '2.5rem' : '0',
        marginTop: scrollY > 150 ? '1rem' : '0',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <div className="h-16 flex justify-between items-center max-w-screen-lg mx-auto px-4">
        {/* Left - Logo */}
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            className='w-12 h-auto'
          />
        </Link>

        {/* Middle - Links (hidden on mobile) */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            style={{
              color: theme.secondaryColor,
              transition: 'color 0.5s ease',
            }}
            className="text-base font-base hover:underline transition-all duration-300 ease-in-out hover:saturate-200"
          >
            Home
          </Link>
          <Link
            href="/services"
            style={{
              color: theme.secondaryColor,
              transition: 'color 0.5s ease',
            }}
            className="text-base font-base hover:underline transition-all duration-300 ease-in-out hover:saturate-200"
          >
            Services
          </Link>
          <Link
            href="/teams"
            style={{
              color: theme.secondaryColor,
              transition: 'color 0.5s ease',
            }}
            className="text-base font-base hover:underline transition-all duration-300 ease-in-out hover:saturate-200"
          >
            Team
          </Link>
          <Link
            href="/aboutus"
            style={{
              color: theme.secondaryColor,
              transition: 'color 0.5s ease',
            }}
            className="text-base font-base hover:underline transition-all duration-300 ease-in-out hover:saturate-200"
          >
            About Us
          </Link>
          <Link
            href="/projects"
            style={{
              color: theme.secondaryColor,
              transition: 'color 0.5s ease',
            }}
            className="text-base font-base hover:underline transition-all duration-300 ease-in-out hover:saturate-200"
          >
            Projects
          </Link>
        </nav>

        {/* Right - Icons or Buttons
        <div
          style={{
            color: theme.secondaryColor,
            transition: 'color 0.5s ease',
          }}
          className="hidden md:flex space-x-4">
          <button className="p-2 hover:text-yellow-500 transition-all duration-150">
            <MdEmail size={24} />
          </button>
          <button className="p-2 hover:text-yellow-500 transition-all duration-150">
            <PhoneCall size={24} />
          </button>
        </div> */}

        {/* Burger Menu for mobile */}
        <div className="md:hidden"
          style={{
            color: theme.secondaryColor,
            transition: 'color 0.5s ease',
          }}
        >
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            <CiMenuBurger size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute top-16 left-0 right-0 rounded-3xl bg-none transition-all duration-300 ease-in-out"
        >
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            }}
            className="fixed w-full backdrop-blur-3xl flex flex-col gap-y-4 items-center rounded-3xl p-4"
          >
            <Link
              href="/"
              style={{
                color: theme.secondaryColor,
                transition: 'color 0.5s ease',
              }}
              className="text-base font-base hover:underline transition-all duration-300 ease-in-out hover:saturate-200"
            >
              Home
            </Link>
            <Link
              href="/aboutus"
              style={{
                color: theme.secondaryColor,
                transition: 'color 0.5s ease',
              }}
              className="text-base font-base hover:underline transition-all duration-300 ease-in-out hover:saturate-200"
            >
              About Us
            </Link>
            <Link
              href="/projects"
              style={{
                color: theme.secondaryColor,
                transition: 'color 0.5s ease',
              }}
              className="text-base font-base hover:underline transition-all duration-300 ease-in-out hover:saturate-200"
            >
              Projects
            </Link>
            <Link
              href="/services"
              style={{
                color: theme.secondaryColor,
                transition: 'color 0.5s ease',
              }}
              className="text-base font-base hover:underline transition-all duration-300 ease-in-out hover:saturate-200"
            >
              Services
            </Link>
            <Link
              href="/teams"
              style={{
                color: theme.secondaryColor,
                transition: 'color 0.5s ease',
              }}
              className="text-base font-base hover:underline transition-all duration-300 ease-in-out hover:saturate-200"
            >
              Team
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
