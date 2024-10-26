'use client'

import React, { useContext, useEffect } from 'react'
import partner1 from '@/../public/assets/google 6.png'
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { ThemeContext } from '@/lib/ThemeContext';
import logo1 from '@/../public/assets/partners/Addis way.png'
import logo2 from '@/../public/assets/partners/Ahununu.png'
import logo3 from '@/../public/assets/partners/Amba.png'
import logo4 from '@/../public/assets/partners/Amen furniture.png'
import logo5 from '@/../public/assets/partners/Amole.png'
import logo6 from '@/../public/assets/partners/Arif.png'
import logo7 from '@/../public/assets/partners/Atobaba.png'
import logo8 from '@/../public/assets/partners/BW.png'
import logo9 from '@/../public/assets/partners/Chanoly.png'
import logo10 from '@/../public/assets/partners/DMC realstate.png'
import logo11 from '@/../public/assets/partners/Dashen.png'
import logo12 from '@/../public/assets/partners/Dube ale.png'
import logo13 from '@/../public/assets/partners/E-birr.png'
import logo14 from '@/../public/assets/partners/EGC.png'
import logo15 from '@/../public/assets/partners/Elilta decor.png'
import logo16 from '@/../public/assets/partners/Endod.png'
import logo17 from '@/../public/assets/partners/Finmar.png'
import logo18 from '@/../public/assets/partners/Get rooms.png'
import logo19 from '@/../public/assets/partners/Green ethipia run.png'
import logo20 from '@/../public/assets/partners/Karavan.png'
import logo21 from '@/../public/assets/partners/MERHABA.png'
import logo22 from '@/../public/assets/partners/Maleda.png'
import logo23 from '@/../public/assets/partners/Nu gebeya.png'
import logo24 from '@/../public/assets/partners/Royal group.png'
import logo25 from '@/../public/assets/partners/Ruby.png'
import logo26 from '@/../public/assets/partners/VIV.png'
import logo27 from '@/../public/assets/partners/Wild coffee.png'
import logo28 from '@/../public/assets/partners/Yod.png'
import logo29 from '@/../public/assets/partners/feres.png'
import logo30 from '@/../public/assets/partners/kaafi.png'

const PartnersCarousel = () => {
  const { theme, themeIndex, setThemeIndex } = useContext(ThemeContext);

  // change themeIndex every 4 seconds by adding one and loop from 0-6
  useEffect(() => {
    const interval = setInterval(() => {
      setThemeIndex((themeIndex + 1) % 7);
    }, 4000);
    return () => clearInterval(interval);
  }, [themeIndex]);

  const logos = [
    {
      logo: logo1
    },
    {
      logo: logo2
    },
    {
      logo: logo3
    },
    {
      logo: logo4
    },
    {
      logo: logo5
    },
    {
      logo: logo6
    },
    {
      logo: logo7
    },
    {
      logo: logo8
    },
    {
      logo: logo9
    },
    {
      logo: logo10
    },
    {
      logo: logo11
    },
    {
      logo: logo12
    },
    {
      logo: logo13
    },
    {
      logo: logo14
    },
    {
      logo: logo15
    },
    {
      logo: logo16
    },
    {
      logo: logo17
    },
    {
      logo: logo18
    },
    {
      logo: logo19
    },
    {
      logo: logo20
    },
    {
      logo: logo21
    },
    {
      logo: logo22
    },
    {
      logo: logo23
    },
    {
      logo: logo24
    },
    {
      logo: logo25
    },
    {
      logo: logo26
    },
    {
      logo: logo27
    },
    {
      logo: logo28
    },
    {
      logo: logo29
    },
    {
      logo: logo30
    }
  ]

  return (
    <div className='py-20'>
      <Marquee
        style={{
          display: 'flex',
          overflow: 'hidden',
          transition: 'background-color 1.5s ease'
        }}
        gradient={true}
        gradientColor={theme.primaryColor}
        autoFill={true}
        loop={0}
        speed={20}
        pauseOnHover={true}
      >
        {logos.map((l, index) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
              border: `1px solid ${theme.secondaryColor}`,
              borderRadius: '1rem',
              margin: '1rem',
              height: '8rem',
              width: '8rem',
            }}
            key={index}
          >
            <Image
              src={l.logo}
              alt="Logo"
              width={110}
              height={110}
            />
          </div>
        ))}
      </Marquee>
      <Marquee
        style={{
          display: 'flex',
          overflow: 'hidden'
        }}
        gradient={true}
        gradientColor={theme.primaryColor}
        autoFill={true}
        loop={0}
        speed={30}
        pauseOnHover={true}
        direction='right'
      >
        {logos.map((l, index) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
              border: `1px solid ${theme.secondaryColor}`,
              borderRadius: '1rem',
              margin: '1rem',
              height: '8rem',
              width: '8rem',
            }}
            key={index}
          >
            <Image
              src={l.logo}
              alt="Logo"
              width={110}
              height={110}
            />
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default PartnersCarousel