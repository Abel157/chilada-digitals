import { ThemeContext } from '@/lib/ThemeContext'
import React, { useContext } from 'react'
import TeamMember from './team-member'

const Team = () => {
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
        <TeamMember />
        <TeamMember />
        <TeamMember />
      </div>
    </div>
  )
}

export default Team