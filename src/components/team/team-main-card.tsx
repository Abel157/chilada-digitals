'use client'
import { ThemeContext } from '@/lib/ThemeContext';
import Image from 'next/image';
import { FC, useContext } from 'react';

interface TeamMainCardProps {
  name: string;
  position: string;
  imgUrl: any;
  description: string;
}

const TeamMainCard: FC<TeamMainCardProps> = ({ name, position, description, imgUrl }) => {
  const { theme, themeIndex } = useContext(ThemeContext);

  return (
    <div className={`group overflow-hidden h-[27rem] rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl max-w-72 self-center justify-self-center bg-white `}>
      {/* Team Member Image */}
      <div className="relative w-full h-72 overflow-hidden">
        <Image 
          src={imgUrl} 
          alt={name} 
          fill
          
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div className="p-3 bg-white w-[250px]">
        <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-500 text-sm">{position}</p>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TeamMainCard;
