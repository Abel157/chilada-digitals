import React, { FC, useRef, useState } from 'react'
import { cn } from "@/lib/utils";
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

interface MiniProjectCardProps {
  isMicro: boolean;
  projectTitle: string;
  image1: any;
  image2: any;
}

const MiniProjectCard: FC<MiniProjectCardProps> = ({ isMicro, projectTitle, image1, image2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animation triggers only once when it comes into view
  const [isHovered, setIsHovered] = useState(false);

  return (
    isMicro ? (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}

        className="w-[350px] md:w-[173px] h-[200px] md:h-[173px]">
        <div
          className={cn(
            "w-[350px] md:w-[173px] h-[200px] md:h-[173px] group cursor-pointer overflow-hidden relative card rounded-2xl shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
            "transition-all duration-500"
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Image */}
          <div className="absolute inset-0 bg-white bg-opacity-15 flex justify-center items-center backdrop-blur-xl">
            <Image
              src={image1}
              alt="Background Image"
              // layout="fill"
              objectFit="contain"
              className="transition-all duration-500"
              style={{ opacity: isHovered ? 0 : 1 }} // Hide the image on hover
            />
          </div>

          {/* Hover Image */}
          {isHovered && (
            <div className="absolute inset-0 bg-white bg-opacity-15 flex justify-center items-center backdrop-blur-xl">
              <Image
                src={image2}
                alt="Hover Image"
                // layout="fill"
                objectFit="contain"
                className="transition-all duration-500"
              />
            </div>
          )}

          {/* Overlay for darkening effect on hover */}
          <div
            className={cn(
              "absolute inset-0 bg-black transition-opacity duration-500",
              { "opacity-50": isHovered, "opacity-0": !isHovered }
            )}
          />

          {/* Text Content */}
          {isHovered && (
            <div className="relative z-10 h-full flex justify-center items-center">
              <h1 className="font-bold text-lg md:text-2xl text-gray-50 relative text-center">
                {projectTitle}
              </h1>
            </div>
          )}
        </div>
      </motion.div >
    ) : (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="w-[170px] h-[230px]">
        <div
          className={cn(
            "w-[170px] h-[230px] group cursor-pointer overflow-hidden relative card rounded-2xl shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
            "transition-all duration-500"
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Image */}
          <div className="absolute inset-0 bg-white bg-opacity-15 flex justify-center items-center backdrop-blur-xl">
            <Image
              src={image1}
              alt="Background Image"
              // layout="fill"
              objectFit="contain"
              className="transition-all duration-500"
              style={{ opacity: isHovered ? 0 : 1 }}
            />
          </div>

          {/* Hover Image */}
          {isHovered && (
            <div className="absolute inset-0 bg-white bg-opacity-15 flex justify-center items-center backdrop-blur-xl">
              <Image
                src={image2}
                alt="Hover Image"
                // layout="fill"
                objectFit="contain"
                className="transition-all duration-500"
              />
            </div>
          )}

          {/* Overlay for darkening effect on hover */}
          <div
            className={cn(
              "absolute inset-0 bg-black transition-opacity duration-500",
              { "opacity-50": isHovered, "opacity-0": !isHovered }
            )}
          />

          {/* Text Content */}
          {isHovered && (
            <div className="relative z-10 h-full flex justify-center items-center">
              <h1 className="font-bold text-lg md:text-2xl text-gray-50 relative text-center">
                {projectTitle}
              </h1>
            </div>
          )}
        </div>
      </motion.div >
    )
  )
}

export default MiniProjectCard