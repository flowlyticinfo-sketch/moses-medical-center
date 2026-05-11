import { useEffect, useState } from 'react';
export function useTheme() {
    const [theme, setTheme] = useState('dark');
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem('theme');
        const initial = stored || 'dark';
        setTheme(initial);
        document.documentElement.setAttribute('data-theme', initial);
    }, []);
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };
    return { theme, toggleTheme, mounted };
}
//# sourceMappingURL=useTheme.js.map