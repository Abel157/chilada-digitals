'use client'
import React, { FC, useContext, useEffect, useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { ThemeContext } from '@/lib/ThemeContext';
import image1 from '@/../public/assets/hero/78.png'
import image2 from '@/../public/assets/hero/78 (1).png'
import image3 from '@/../public/assets/hero/78 (2).png'
import image4 from '@/../public/assets/hero/78 (3).png'
import image5 from '@/../public/assets/hero/78 (4).png'
import image6 from '@/../public/assets/hero/78 (5).png'
import image7 from '@/../public/assets/hero/78 (6).png'
import responsive1 from '@/../public/assets/heroMobile/MM-01.jpg'
import responsive2 from '@/../public/assets/heroMobile/M22.jpg'
import responsive3 from '@/../public/assets/heroMobile/MM-03.jpg'
import responsive4 from '@/../public/assets/heroMobile/MM-04.jpg'
import responsive5 from '@/../public/assets/heroMobile/MM-05.jpg'
import responsive6 from '@/../public/assets/heroMobile/MM-06.jpg'
import responsive7 from '@/../public/assets/heroMobile/MM-07.jpg'
import Image from 'next/image';
import SliderCard from './slider-card';

const ChiladaSlider: FC = () => {
  const { theme, themeIndex, setThemeIndex } = useContext(ThemeContext);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const slides = [
    {
      image: image1,
      responsive: responsive1,
      header: 'Aim High!',
      text: 'Growth is unending. Higher aims always shows',
    },
    {
      image: image2,
      responsive: responsive2,
      header: 'Aim High!',
      text: 'Growth is unending. Higher aims always shows',
    },
    {
      image: image3,
      responsive: responsive3,
      header: 'Aim High!',
      text: 'Growth is unending. Higher aims always shows',
    },
    {
      image: image4,
      responsive: responsive4,
      header: 'Aim High!',
      text: 'Growth is unending. Higher aims always shows',
    },
    {
      image: image5,
      responsive: responsive5,
      header: 'Aim High!',
      text: 'Growth is unending. Higher aims always shows',
    },
    {
      image: image6,
      responsive: responsive6,
      header: 'Aim High!',
      text: 'Growth is unending. Higher aims always shows',
    },
    {
      image: image7,
      responsive: responsive7,
      header: 'Aim High!',
      text: 'Growth is unending. Higher aims always shows',
    },
  ]

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
    <>
      <Swiper
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        normalizeSlideIndex={true}
        onSlideChange={(swiper) => setThemeIndex(swiper.realIndex ? swiper.realIndex : 0)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <SliderCard slide={slide} />
          </SwiperSlide>
        ))}

        {!isSmallScreen ? (
          <>
            <button className="swiper-button-prev"></button>
            <button className="swiper-button-next"></button>
          </>
        ) : null}
      </Swiper>
    </>
  )
}

export default ChiladaSlider