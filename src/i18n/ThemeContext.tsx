import React, { createContext, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light' | 'auto';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getSystemTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getEffectiveTheme(theme: Theme): 'dark' | 'light' {
  if (theme === 'auto') {
    return getSystemTheme();
  }
  return theme;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme | null) || 'auto';
    }
    return 'auto';
  });

  useEffect(() => {
    const effectiveTheme = getEffectiveTheme(theme);
    document.documentElement.setAttribute('data-theme', effectiveTheme);
  }, [theme]);

  useEffect(() => {
    const stored = (localStorage.getItem('theme') as Theme | null) || 'auto';
    if (stored !== theme) {
      setTheme(stored);
    } else {
      const effectiveTheme = getEffectiveTheme(stored);
      document.documentElement.setAttribute('data-theme', effectiveTheme);
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'auto') {
        const effectiveTheme = getEffectiveTheme('auto');
        document.documentElement.setAttribute('data-theme', effectiveTheme);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const toggleTheme = () => {
    const themes: Theme[] = ['dark', 'light', 'auto'];
    const currentIndex = themes.indexOf(theme);
    const newTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    const effectiveTheme = getEffectiveTheme(newTheme);
    document.documentElement.setAttribute('data-theme', effectiveTheme);
  };

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    const effectiveTheme = getEffectiveTheme(newTheme);
    document.documentElement.setAttribute('data-theme', effectiveTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
