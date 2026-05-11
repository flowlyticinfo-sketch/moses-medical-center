import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useEffect, useState } from 'react';
export const ThemeContext = createContext(undefined);
function getSystemTheme() {
    if (typeof window === 'undefined')
        return 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function getEffectiveTheme(theme) {
    if (theme === 'auto') {
        return getSystemTheme();
    }
    return theme;
}
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'auto';
        }
        return 'auto';
    });
    useEffect(() => {
        const effectiveTheme = getEffectiveTheme(theme);
        document.documentElement.setAttribute('data-theme', effectiveTheme);
    }, [theme]);
    useEffect(() => {
        const stored = localStorage.getItem('theme') || 'auto';
        if (stored !== theme) {
            setTheme(stored);
        }
        else {
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
        const themes = ['dark', 'light', 'auto'];
        const currentIndex = themes.indexOf(theme);
        const newTheme = themes[(currentIndex + 1) % themes.length];
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        const effectiveTheme = getEffectiveTheme(newTheme);
        document.documentElement.setAttribute('data-theme', effectiveTheme);
    };
    const handleSetTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        const effectiveTheme = getEffectiveTheme(newTheme);
        document.documentElement.setAttribute('data-theme', effectiveTheme);
    };
    return (_jsx(ThemeContext.Provider, { value: { theme, toggleTheme, setTheme: handleSetTheme }, children: children }));
}
//# sourceMappingURL=ThemeContext.js.map