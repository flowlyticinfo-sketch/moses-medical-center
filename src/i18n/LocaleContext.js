import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect } from 'react';
import { content } from './content';
export const LocaleContext = createContext(undefined);
export function LocaleProvider({ children }) {
    const [locale, setLocale] = useState(() => {
        // Check localStorage first
        const saved = localStorage.getItem('flowlytic-locale');
        if (saved === 'en' || saved === 'he')
            return saved;
        // Detect from browser language
        const browserLang = navigator.language || navigator.languages?.[0] || 'en';
        return browserLang.startsWith('he') ? 'he' : 'en';
    });
    useEffect(() => {
        // Set HTML dir attribute for RTL
        const isRTL = locale === 'he';
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = locale;
        localStorage.setItem('flowlytic-locale', locale);
    }, [locale]);
    const toggle = () => {
        setLocale(locale === 'en' ? 'he' : 'en');
    };
    return (_jsx(LocaleContext.Provider, { value: { locale, toggle, t: content[locale] }, children: children }));
}
//# sourceMappingURL=LocaleContext.js.map