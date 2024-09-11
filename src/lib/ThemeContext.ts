'use client'

import { createContext } from "react";

// Create the context
export const ThemeContext = createContext({
  theme: {
    name: "black",
    primaryColor: "#464646",
    secondaryColor: "#FFFFE0",
  },
  setThemeIndex: (index: number) => { },
  themeIndex: 0,
});