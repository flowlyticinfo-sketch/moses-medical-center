import React from 'react';
export type Theme = 'dark' | 'light' | 'auto';
export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}
export declare const ThemeContext: React.Context<ThemeContextType | undefined>;
export declare function ThemeProvider({ children }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ThemeContext.d.ts.map