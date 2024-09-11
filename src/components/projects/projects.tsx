import { ThemeContext } from '@/lib/ThemeContext'
import React, { useContext, useEffect, useState } from 'react'
import MainProjectCard from './main-project-card'
import MiniProjectCard from './mini-project-card'

const Projects = () => {
  const { theme } = useContext(ThemeContext)
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // when the screen size changes i want to set issmallscreen to true if its in mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    handleResize(); // Call the function initially to set the initial value

    window.addEventListener('resize', handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
    };
  }, []);

  return (
    <div
      className='flex flex-col items-center justify-center'
    >
      <h2
        style={{
          color: theme.secondaryColor,
          textAlign: 'center',
          margin: '2rem 0'
        }}
        className='text-3xl md:text-6xl font-bold'
      >
        Projects
      </h2>

      {isSmallScreen ? (
        <div className='flex flex-wrap justify-center items-center gap-4'>
          <MiniProjectCard isMicro={true} />
          <MiniProjectCard isMicro={true} />
          <MiniProjectCard isMicro={true} />
          <MiniProjectCard isMicro={true} />
          <MiniProjectCard isMicro={true} />
          <MiniProjectCard isMicro={true} />
        </div>
      ) : (
        <div
          className='flex items-center justify-center gap-4 w-full max-w-screen-lg mt-4'
        >
          <div className='w-[170px] h-[230px]'>
            <MiniProjectCard isMicro={false} />
          </div>
          <div className=' flex flex-col gap-y-4' >
            <div className='flex gap-2 items-end'>
              <div className='h-[373px] w-[505px]' >
                <MainProjectCard />
              </div>
              <div className='h-[173px] w-[173px] '>
                <MiniProjectCard isMicro={true} />
              </div>
            </div>

            <div className='flex gap-2 items-start'>
              <div className='h-[173px] w-[173px] '>
                <MiniProjectCard isMicro={true} />
              </div>
              <div className='h-[373px] w-[505px]' >
                <MainProjectCard />
              </div>
            </div>

          </div>
          <div className='w-[170px] h-[230px]'>
            <MiniProjectCard isMicro={false} />
          </div>

        </div>
      )}

    </div>
  )
}

export default Projects