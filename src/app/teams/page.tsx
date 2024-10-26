'use client'
import { ThemeContext } from '@/lib/ThemeContext';
import React, { useContext, useEffect } from 'react'
import teamMember from '@/../public/assets/cute-smiling-young-man-with-bristle-looking-satisfied 2.png';
import TeamMainCard from '@/components/team/team-main-card';
const Page = () => {
  const { theme, themeIndex, setThemeIndex } = useContext(ThemeContext);

  // change themeIndex every 4 seconds by adding one and loop from 0-6
  useEffect(() => {
    const interval = setInterval(() => {
      setThemeIndex((themeIndex + 1) % 7);
    }, 4000);
    return () => clearInterval(interval);
  }, [themeIndex]);

  const teamMembers = [
    {
      name: 'John Doe',
      position: 'CEO',
      description: 'Leader of our team with 10+ years of experience.',
      imgUrl: teamMember,
    },
    {
      name: 'Jane Smith',
      position: 'Marketing Head',
      description: 'Expert in digital marketing strategies.',
      imgUrl: teamMember,
    },
    {
      name: 'Jane Smith',
      position: 'Marketing Head',
      description: 'Expert in digital marketing strategies.',
      imgUrl: teamMember,
    },
    {
      name: 'Jane Smith',
      position: 'Marketing Head',
      description: 'Expert in digital marketing strategies.',
      imgUrl: teamMember,
    },
    {
      name: 'Jane Smith',
      position: 'Marketing Head',
      description: 'Expert in digital marketing strategies.',
      imgUrl: teamMember,
    },
    {
      name: 'Jane Smith',
      position: 'Marketing Head',
      description: 'Expert in digital marketing strategies.',
      imgUrl: teamMember,
    },
    {
      name: 'Jane Smith',
      position: 'Marketing Head',
      description: 'Expert in digital marketing strategies.',
      imgUrl: teamMember,
    },
    {
      name: 'Jane Smith',
      position: 'Marketing Head',
      description: 'Expert in digital marketing strategies.',
      imgUrl: teamMember,
    },
  ];

  return (
    <div
      style={{ backgroundColor: theme.primaryColor, color: theme.secondaryColor, transition: 'background-color 1.5s ease' }}
      className="min-h-screen max-w-screen-xl mx-auto py-32 flex flex-col items-center justify-start"
    >
      <h1 className="text-5xl font-bold mb-12">Meet Our Team</h1>

      <p
        className='text-center text-lg max-w-2xl mb-12'
      >
        Our team is made up of passionate individuals who are dedicated to helping you achieve your goals. We are committed to providing you with the best possible service and ensuring your satisfaction.
      </p>

      {/* Team Members grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-10/12">
        {teamMembers.map((member, index) => (
          <TeamMainCard
            key={index}
            name={member.name}
            position={member.position}
            description={member.description}
            imgUrl={member.imgUrl}
          />
        ))}
      </div>

    </div>
  )
}

export default Page