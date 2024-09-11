import { ThemeContext } from '@/lib/ThemeContext'
import { ArrowRightIcon } from 'lucide-react'
import React, { useContext } from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { CardSpotlight } from '../ui/card-spotlight';

const Expertise = () => {
  const { theme } = useContext(ThemeContext)
  const { ref, inView } = useInView()

  return (
    <div
      className='bg-white bg-opacity-10 flex flex-col md:flex-row items-center justify-center my-12 py-12 gap-12 px-6'
    >
      <div
        className='flex flex-col items-start justify-center gap-y-4 md:gap-y-6'
      >
        <h2
          style={{
            color: theme.secondaryColor,
            lineHeight: '1'
          }}
          className='text-center md:text-start text-3xl md:text-6xl font-bold w-full'
        >
          Expertise
        </h2>
        <p
          className='text-white text-xl max-w-[28rem] text-center md:text-start'
        >
          We increase revenue and ensure sustainable long-term growth for your business through powerful Webflow websites.
        </p>
        <button
          style={{
            backgroundColor: theme.secondaryColor,
            color: theme.primaryColor
          }}
          className="px-4 py-2 rounded-lg border hover:-translate-y-1 transform transition duration-200 hover:shadow-md text-base font-semibold w-full md:w-auto"
        >
          Connect With Us <ArrowRightIcon size={24} style={{ display: 'inline-block' }} />
        </button>
        <div
          ref={ref}
          className='flex gap-x-4 self-center md:self-start'
        >
          <div
            style={{
              borderRight: `1px solid ${theme.secondaryColor}`
            }}
            className='flex flex-col items-start justify-center gap-y-2 md:gap-y-4 w-28 md:w-40'
          >
            {inView && (
              <h6
                style={{
                  color: theme.secondaryColor,
                }}
                className='text-2xl md:text-5xl font-semibold'
              >
                <CountUp end={37} duration={3} />+
              </h6>
            )}
            <p
              className='text-white text-lg md:text-xl max-w-20'
            >
              Jobs Completed
            </p>
          </div>
          <div
            style={{
              borderRight: `1px solid ${theme.secondaryColor}`
            }}
            className='flex flex-col items-start justify-center gap-y-2 md:gap-y-4  w-28 md:w-40'
          >
            {inView && (
              <h6
                style={{
                  color: theme.secondaryColor,
                }}
                className='text-2xl md:text-5xl font-semibold'
              >
                <CountUp end={10} duration={3} />+
              </h6>
            )}
            <p
              className='text-white text-lg md:text-xl max-w-20'
            >
              Partners Worldwide
            </p>
          </div>
          <div
            className='flex flex-col items-start justify-center gap-y-2 md:gap-y-4  w-28 md:w-40'
          >
            {inView && (
              <h6
                style={{
                  color: theme.secondaryColor,
                }}
                className='text-2xl md:text-5xl font-semibold'
              >
                <CountUp end={4} duration={3} />+
              </h6>
            )}
            <p
              className='text-white text-lg md:text-xl max-w-20'
            >
              Dedicated Employees
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridColumn: 'span 2', // Span the entire grid
          justifyContent: 'center', // Center a single item
          rowGap: '1.5rem',
        }}
      >
        <CardSpotlight
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${theme.secondaryColor}`,
            cursor: 'pointer',
            gridColumn: 'span 2',
          }}
          color={theme.primaryColor}
          className='py-4 px-10 mx-auto flex items-center justify-center'
        >
          <p
            style={{
              color: theme.secondaryColor,
            }}
            className='text-xl font-semibold'
          >
            Social Media Marketing
          </p>
        </CardSpotlight>
        <CardSpotlight
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${theme.secondaryColor}`,
            cursor: 'pointer',
          }}
          color={theme.primaryColor}
          className='py-4 px-10 mx-auto  flex items-center justify-center'
        >
          <p
            style={{
              color: theme.secondaryColor,
            }}
            className='text-xl font-semibold'
          >
            Video Production
          </p>
        </CardSpotlight>
        <CardSpotlight
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${theme.secondaryColor}`,
            cursor: 'pointer',
            gridColumn: 'span 1',
          }}
          color={theme.primaryColor}
          className='py-4 px-10 mx-auto  flex items-center justify-center'
        >
          <p
            style={{
              color: theme.secondaryColor,
            }}
            className='text-xl font-semibold'
          >
            Branding
          </p>
        </CardSpotlight>
        <CardSpotlight
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${theme.secondaryColor}`,
            cursor: 'pointer',
            gridColumn: 'span 1',
          }}
          color={theme.primaryColor}
          className='py-4 px-10 mx-auto  flex items-center justify-center'
        >
          <p
            style={{
              color: theme.secondaryColor,
            }}
            className='text-xl font-semibold'
          >
            SEO
          </p>
        </CardSpotlight>
        <CardSpotlight
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${theme.secondaryColor}`,
            cursor: 'pointer',
            gridColumn: 'span 1',
          }}
          color={theme.primaryColor}
          className='py-4 px-10 mx-auto  flex items-center justify-center'
        >
          <p
            style={{
              color: theme.secondaryColor,
            }}
            className='text-xl font-semibold'
          >
            Digital Marketing
          </p>
        </CardSpotlight>
        <CardSpotlight
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${theme.secondaryColor}`,
            cursor: 'pointer',
            gridColumn: 'span 2',
          }}
          color={theme.primaryColor}
          className='py-4 px-10 mx-auto  flex items-center justify-center'
        >
          <p
            style={{
              color: theme.secondaryColor,
            }}
            className='text-xl font-semibold'
          >
            Web Design And Development
          </p>
        </CardSpotlight>
      </div>
    </div>
  )
}

export default Expertise