import React, { ReactNode } from 'react';
import { content } from './content';
export type Locale = 'en' | 'he';
export interface LocaleContextType {
    locale: Locale;
    toggle: () => void;
    t: typeof content['en'];
}
export declare const LocaleContext: React.Context<LocaleContextType | undefined>;
export declare function LocaleProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=LocaleContext.d.ts.map