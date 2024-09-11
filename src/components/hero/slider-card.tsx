import { ThemeContext } from '@/lib/ThemeContext';
import Image from 'next/image';
import React, { FC, useContext, useEffect, useState } from 'react'
import { ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import './styles.css';
interface SliderCardProps {
  slide: any;
}

const SliderCard: FC<SliderCardProps> = ({ slide }) => {
  const { theme, themeIndex, setThemeIndex } = useContext(ThemeContext);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const words = slide.header.split(' ');

  const wordsToUse = words.map((word: string) => {
    return {
      text: word,
    }
  });

  // when the screen size changes i want to set issmallscreen to true if its in mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Call the function initially to set the initial value

    window.addEventListener('resize', handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        background: theme.primaryColor,
        transition: "background-color 0.5s ease",
        padding: '0 1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Image
          src={slide.image}
          alt={slide.title}
          className='swiper-slide-image max-w-screen-lg'
          layout="responsive"
          width={1200}
          height={800}
        />
        {/* Text on top of the image */}
        <motion.div
          key={themeIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, x: -50 }}
          className='slide-content absolute top-1/3 right-16 transform -translate-y-1/2 flex flex-col md:items-start justify-center gap-y-4'
        >
          <h1
            style={{
              color: theme.secondaryColor,
              lineHeight: '1',
            }}
            className='text-[80px] font-extrabold text-center md:text-start'
          >
            {slide.header}
          </h1>
          <p
            style={{
              color: 'white',
            }}
            className='text-2xl font-bold max-w-[26rem]'
          >
            {slide.text}
          </p>
          <button
            style={{
              backgroundColor: theme.secondaryColor,
              color: theme.primaryColor
            }}
            className="px-4 py-2 rounded-lg border hover:-translate-y-1 transform transition duration-200 hover:shadow-md text-base font-semibold"
          >
            Connect With Us <ArrowRightIcon size={24} style={{ display: 'inline-block' }} />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default SliderCard

// {!isSmallScreen ? (
//   <div
//     style={{
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       position: 'relative',
//     }}
//   >
//     <Image
//       src={slide.image}
//       alt={slide.title}
//       className='max-w-screen-lg'
//     />
//     {/* Text on top of the image */}
//     <motion.div
//       key={themeIndex}
//       initial={{ opacity: 0, x: 50 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.5 }}
//       exit={{ opacity: 0, x: -50 }}
//       className='text-start absolute top-1/3 right-16 transform -translate-y-1/2 flex flex-col items-start justify-center gap-y-4'
//     >
//       <h1
//         style={{
//           color: theme.secondaryColor,
//           lineHeight: '1',
//         }}
//         className='text-[80px] font-extrabold'
//       >
//         {slide.header}
//       </h1>
//       <p
//         style={{
//           color: 'white',
//         }}
//         className='text-2xl font-bold  max-w-[26rem]'
//       >
//         {slide.text}
//       </p>

//       <button
//         style={{
//           backgroundColor: theme.secondaryColor,
//           color: theme.primaryColor
//         }}
//         className="px-4 py-2 rounded-lg border hover:-translate-y-1 transform transition duration-200 hover:shadow-md text-base font-semibold">
//         Connect With Us <ArrowRightIcon size={24} style={{ display: 'inline-block' }} />
//       </button>

//     </motion.div>
//   </div>
// ) : (
//   <div
//     style={{
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       // position: 'relative',
//     }}
//   >
//     <div
//       style={{
//         height: '70vh',
//         width: '90%',
//         overflow: 'hidden',
//         objectFit: 'contain',
//         position: 'relative',
//       }}
//     >
//       <Image
//         src={slide.responsive}
//         alt={slide.title}
//         className='max-w-screen-lg'
//         style={{
//           objectFit: 'contain',
//         }}
//       />
//     </div>
//   </div>
// )}
// <button
// style={{
//   backgroundColor: `${theme.primaryColor}40`, // Semi-transparent white
//   color: theme.secondaryColor,
//   backdropFilter: 'blur(10px)', // Creates the glassy effect
//   WebkitBackdropFilter: 'blur(10px)', // For Safari support
//   border: '1px solid rgba(255, 255, 255, 0.4)', // Light border
// }}
// className="px-4 py-2 rounded-lg hover:-translate-y-1 transform transition duration-200 hover:shadow-md text-base font-semibold"
// >
// Connect With Us <ArrowRightIcon size={24} style={{ display: 'inline-block' }} />
// </button>