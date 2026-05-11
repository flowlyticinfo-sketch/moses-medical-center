import { useContext } from 'react';
import { ThemeContext, Theme } from './ThemeContext';

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  const setThemeMode = (newTheme: Theme) => {
    context.setTheme(newTheme);
  };

  return {
    theme: context.theme,
    toggleTheme: context.toggleTheme,
    setThemeMode,
  };
}
