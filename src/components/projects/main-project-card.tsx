import React, { useContext } from 'react'
import { CardBody, CardContainer, CardItem } from '../ui/3d-card'
import Image from 'next/image'
import projectImage from '@/../public/assets/heroMobile/M22.jpg'
import { ArrowRightIcon } from 'lucide-react'
import { ThemeContext } from '@/lib/ThemeContext'

const MainProjectCard = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <CardContainer
      className='inter-var -mt-20 backdrop-blur-md'
    >
      <CardBody
        className='flex gap-4 p-2 items-center relative group/card shadow-md hover:shadow-[#FFFFE0] h-auto w-[505px] bg-black bg-opacity-30 rounded-3xl'
      >
        <CardItem
          translateZ={60}
        >
          <div
            className='w-[200px] h-[300px] bg-white rounded-3xl overflow-hidden'
          >
            <Image
              src={projectImage}
              alt='Project Image'
              className='w-full h-auto object-cover'
            />
          </div>
        </CardItem>
        <CardItem
          translateZ={50}
          className='flex flex-col justify-between items-end pr-2 pt-2 h-[300px]'
        >
          <div>
            <h2
              style={{
                color: theme.secondaryColor
              }}
              className='text-2xl font-bold'>Project Title</h2>
            <p className='text-base text-white max-w-[243px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              bibendum, est nec lacinia ultrices, libero nunc varius odio, nec
              tincidunt augue turpis eu nunc.
            </p>
          </div>
          <button
            style={{
              color: theme.secondaryColor
            }}
            className='hover:bg-[#FFFFE0] hover:bg-opacity-25 px-4 py-2 rounded-3xl transition duration-300 ease-in-out transform'
          >
            View Project <ArrowRightIcon style={{ display: 'inline' }} size={24} />
          </button>
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}

export default MainProjectCard