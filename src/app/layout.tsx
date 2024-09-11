'use client'
import { useState } from "react";
import "./globals.css";
import { ThemeContext } from "@/lib/ThemeContext";
import { Theme } from "@/lib/types";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [themeIndex, setThemeIndex] = useState(0);
  const themes: Theme[] = [
    {
      name: "black",
      primaryColor: "#464646",
      secondaryColor: "#FFFFE0",
    },
    {
      name: "Purple",
      primaryColor: "#7e77b2",
      secondaryColor: "#FFFFE0",
    },
    {
      name: "Beige",
      primaryColor: "#b0aa74",
      secondaryColor: "#FFFFE0",
    },
    {
      name: "Teal",
      primaryColor: "#7c958d",
      secondaryColor: "#FFFFE0",
    },
    {
      name: "Rose",
      primaryColor: "#a17e8b",
      secondaryColor: "#FFFFE0",
    },
    {
      name: "green",
      primaryColor: "#8ba46f",
      secondaryColor: "#FFFFE0",
    },
    {
      name: "blue",
      primaryColor: "#83a6bf",
      secondaryColor: "#FFFFE0",
    }
  ]

  return (
    <ThemeContext.Provider
      value={
        {
          theme: themes[themeIndex],
          setThemeIndex,
          themeIndex
        }
      }
    >
      <html lang="en">
        <body
          style={{
            backgroundColor: themes[themeIndex].primaryColor,
            transition: "background-color 0.5s ease",
          }}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
