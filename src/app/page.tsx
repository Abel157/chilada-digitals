'use client'
import ContactUs from "@/components/contactus/contact-us-section";
import Expertise from "@/components/expertise/expertise";
import ChiladaSlider from "@/components/hero/chilada-slider";
import PartnersCarousel from "@/components/partners/partners-carousel";
import Projects from "@/components/projects/projects";
import Team from "@/components/team/team";
import Values from "@/components/values/values";
import { ThemeContext } from "@/lib/ThemeContext";
import Image from "next/image";
import { useContext } from "react";

export default function Home() {
  const {
    theme,
    themeIndex,
    setThemeIndex,
  } = useContext(ThemeContext)

  return (
    <main className="my-14">
      <ChiladaSlider />
      <PartnersCarousel />
      <Expertise />
      <Projects />
      <Values />
      <Team />
      <ContactUs />
    </main>
  );
}
