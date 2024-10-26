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
            background: `${themes[themeIndex].primaryColor}`,
            backgroundBlendMode: "overlay",
            transition: "background-color 1.5s ease",
          }}
        >
          {/* <div
            style={{
              backgroundColor: themes[themeIndex].primaryColor,
              opacity: 1,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          /> */}
          <div
            style={{
              backgroundImage: "url('/assets/chiladapic.jpg')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              opacity: 0.1,
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100vh",
              zIndex: 0,
            }}
          />
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
