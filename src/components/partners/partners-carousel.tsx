import React, { useContext } from 'react'
import partner1 from '@/../public/assets/google 6.png'
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { ThemeContext } from '@/lib/ThemeContext';

const PartnersCarousel = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <h2
        style={{
          color: theme.secondaryColor,
          textAlign: 'center',
          margin: '2rem 0'
        }}
        className='text-3xl md:text-6xl font-bold'
      >
        Partners
      </h2>
      <Marquee
        style={{
          display: 'flex',
          overflow: 'hidden'
        }}
        gradient={true}
        gradientColor={theme.primaryColor}
        autoFill={true}
        loop={0}
        speed={50}
        pauseOnHover={true}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            border: `1px solid ${theme.secondaryColor}`,
            borderRadius: '1rem',
            margin: '1rem'
          }}
        >
        <Image
          src={partner1}
          alt="Google"
          width={150}
          height={150}
        />
        </div>
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
        speed={70}
        pauseOnHover={true}
        direction='right'
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            border: `1px solid ${theme.secondaryColor}`,
            borderRadius: '1rem',
            margin: '1rem'
          }}
        >
        <Image
          src={partner1}
          alt="Google"
          width={150}
          height={150}
        />
        </div>
      </Marquee>
    </>
  )
}

export default PartnersCarousel