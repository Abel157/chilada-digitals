import { ThemeContext } from '@/lib/ThemeContext'
import React, { useContext, useEffect, useState } from 'react'
import MainProjectCard from './main-project-card'
import MiniProjectCard from './mini-project-card'
import mainProjectimage1 from '@/../public/assets/creatives/CHANOLY POST 09 copy.jpg'
import mainProjectimage2 from '@/../public/assets/partners/Yod.png'
import atobaba from '@/../public/assets/creatives/atobaba 5.jpg'
import endod from '@/../public/assets/creatives/endod aug file 2.jpg'
import wildCoffee from '@/../public/assets/partners/Wild coffee.png'
import dashen from '@/../public/assets/partners/Dashen.png'


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
          <MiniProjectCard
            projectTitle='Atobaba'
            image1={atobaba}
            image2={atobaba}
            isMicro={true} />
          <MiniProjectCard
            projectTitle='Endod'
            image1={endod}
            image2={endod}
            isMicro={true} />
          <MiniProjectCard
            projectTitle='Wild Coffee'
            image1={wildCoffee}
            image2={wildCoffee}
            isMicro={true} />
          <MiniProjectCard
            projectTitle='Dashen Bank'
            image1={dashen}
            image2={dashen}
            isMicro={true} />
          <MiniProjectCard
            projectTitle='Yod Abyssinia Cultural Restaurant'
            image1={mainProjectimage2}
            image2={mainProjectimage2}
            isMicro={true} />
        </div>
      ) : (
        <div
          className='flex items-center justify-center gap-4 w-full max-w-screen-lg mt-4'
        >
          <div className='w-[170px] h-[230px]'>
            <MiniProjectCard
              projectTitle='Atobaba'
              image1={atobaba}
              image2={atobaba}
              isMicro={false} />
          </div>
          <div className=' flex flex-col gap-y-4' >
            <div className='flex gap-2 items-end'>
              <div className='h-[373px] w-[505px]' >
                <MainProjectCard
                  projectTitle='Yod Abyssinia Cultural Restaurant'
                  projectDescription='A cultural restaurant that offers a variety of Ethiopian dishes and cultural dances.'
                  projectImage={mainProjectimage2}
                />
              </div>
              <div className='h-[173px] w-[173px] '>
                <MiniProjectCard
                  projectTitle='Endod'
                  image1={endod}
                  image2={endod}
                  isMicro={true} />
              </div>
            </div>

            <div className='flex gap-2 items-start'>
              <div className='h-[173px] w-[173px] '>
                <MiniProjectCard
                  projectTitle='Wild Coffee'
                  image1={wildCoffee}
                  image2={wildCoffee}
                  isMicro={true} />
              </div>
              <div className='h-[373px] w-[505px]' >
                <MainProjectCard
                  projectTitle='Chanoly Noodles'
                  projectDescription='A noodle restaurant that offers a variety of noodle dishes.'
                  projectImage={mainProjectimage1}
                />
              </div>
            </div>

          </div>
          <div className='w-[170px] h-[230px]'>
            <MiniProjectCard
              projectTitle='Dashen Bank'
              image1={dashen}
              image2={dashen}
              isMicro={false} />
          </div>

        </div>
      )}

    </div>
  )
}

export default Projects