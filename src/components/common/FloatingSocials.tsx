// FloatingSocials.tsx
'use client'
import React, { useContext, useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGlobe } from 'react-icons/fa';
import styles from './FloatingSocials.module.css';
import { ThemeContext } from '@/lib/ThemeContext';

const FloatingSocials = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme, themeIndex, setThemeIndex } = useContext(ThemeContext);

  // change themeIndex every 4 seconds by adding one and loop from 0-6
  useEffect(() => {
    const interval = setInterval(() => {
      setThemeIndex((themeIndex + 1) % 7);
    }, 4000);
    return () => clearInterval(interval);
  }, [themeIndex]);


  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <div 
      className={`${styles.floatingSocialsContainer} ${isExpanded ? styles.expanded : ''}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={toggleExpanded}
    >
      {/* Main Icon */}
      <div className={`${styles.icon} ${styles.mainIcon}`}>
        <FaGlobe />
      </div>

      {/* Social Media Icons */}
      {isExpanded && (
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaLinkedinIn />
          </a>
        </div>
      )}
    </div>
  );
};

export default FloatingSocials;
