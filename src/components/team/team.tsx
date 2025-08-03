import { ThemeContext } from '@/lib/ThemeContext'
import React, { useContext } from 'react'
import TeamMember from './team-member'
import natanim from '@/../public/assets/natanim.jpg';
import kalkidan from '@/../public/assets/kalkidan.jpg';
import mule from '@/../public/assets/blank.png';
import daniel from '@/../public/assets/Daniel.jpg';
import { Linkedin } from 'lucide-react';

interface Team {
    id: number;
    name: string;
    position: string;
    description:string;
    linkedIn:string;
    imageUrl:string;
}

const Team = () => {
    const teamMembers = [
    {
      name: 'Mulubrehan Mebratu',
      position: 'Co-Founder and Director',
      description: 'Founder and Executive director',
      imgUrl:mule,
      linkedIn:'abcd'
    },
    {
      name: 'Daniel',
      position: 'Co-Founder and Deputy Director',
      description: 'Leader of our team with 10+ years of experience.',
      imgUrl: daniel,
      linkedIn:'abcd'
    },
    {
      name: 'Kalkidan',
      position: 'Creative Manager',
      description: 'Expert in digital marketing strategies.',
      imgUrl: kalkidan,
      linkedIn:'abcd'
    },
 
  ];
  const { theme } = useContext(ThemeContext)
  return (
    <div className='flex flex-col gap-8'>
      <h2
        style={{
          color: theme.secondaryColor,
          textAlign: 'center',
          margin: '2rem 0'
        }}
        className='text-3xl md:text-6xl font-bold'
      >
        The Team
      </h2>
      <div className='max-w-screen-xl gap-16 mx-auto flex flex-wrap justify-center items-start'>
        {teamMembers.map((member, index) => {
          return(<TeamMember key={index} imageUrl={member.imgUrl} name={member.name} position={member.position} description={member.description} linkedIn={member.linkedIn}/>)
        })}
      </div>
    </div>
  )
}

export default Team