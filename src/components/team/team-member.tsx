import { ThemeContext } from "@/lib/ThemeContext";
import React, { useContext, useRef } from "react";
import teamMember from "@/../public/assets/cute-smiling-young-man-with-bristle-looking-satisfied 2.png";

import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { MdEmail } from "react-icons/md";
type Props = {
  imageUrl: any;
  name: string;
  position: string;
  description: string;
  linkedIn: string;
};

const TeamMember = ({
  imageUrl,
  name,
  position,
  description,
  linkedIn,
}: Props) => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animation triggers only once when it comes into view

  return (
    <motion.div
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.5 }}
  className="relative rounded-2xl shadow-md cursor-pointer group"
>
  <div className="overflow-hidden h-[400px] w-[300px] rounded-2xl hover:shadow-lg transition duration-300 ease-in-out">
    <Image
      src={imageUrl}
      alt="Team Member"
      className="w-full h-auto object-cover"
    />
  </div>

  {/* Overlay + text (hidden until hover) */}
  <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-end justify-center">
    <div
      style={{
        width: "90%",
      }}
      className="text-white "
    >
      <h3 className="text-lg md:text-2xl font-semibold">{name}</h3>
      <p className="text-md md:text-sm " style={{ color: theme.secondaryColor }}>
        {position}
      </p>
      <p className="mt-2 text-sm md:text-base">{description}</p>
      <div className="flex gap-4 justify-start text-blue-300 my-2">
        <Linkedin href={linkedIn} size={20} />
        <Instagram size={20} />
        <MdEmail size={20} />
      </div>
    </div>
  </div>
</motion.div>

  );
};

export default TeamMember;
