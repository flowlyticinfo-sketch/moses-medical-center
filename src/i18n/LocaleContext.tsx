import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { content } from './content';

export type Locale = 'en' | 'he';

export interface LocaleContextType {
  locale: Locale;
  toggle: () => void;
  t: typeof content['en'];
}

export const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('flowlytic-locale');
    if (saved === 'en' || saved === 'he') return saved;

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

  return (
    <LocaleContext.Provider value={{ locale, toggle, t: content[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}
