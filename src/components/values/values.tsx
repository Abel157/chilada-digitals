import { ThemeContext } from '@/lib/ThemeContext'
import React, { useContext } from 'react'
import { HoverEffect } from '../ui/card-hover-effect'

const Values = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className='flex flex-col'>
      <div className='max-w-screen-lg mx-auto'>
        <HoverEffect className='' items={projects} />
      </div>
    </div>
  )
}

const projects = [
  {
    title: "Mission",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "#",
  },
  {
    title: "Vision",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "#",
  },
  {
    title: "Values",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "#",
  },
];

export default Values