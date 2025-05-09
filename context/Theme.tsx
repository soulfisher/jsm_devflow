"use client";

import React from 'react';
import { ThemeProvider as NextThemesProvider } from "next_themes";
import { ThemeProviderProps } from "next-themes/dist/types";

const ThemeProvider = ( children, ...props ): ThemeProviderProps => {
  return (
    <NextThemesProvider {...props}>{children}</NextThemesProvider>
  )
}

export default ThemeProvider