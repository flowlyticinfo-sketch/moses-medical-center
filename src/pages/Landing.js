import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Nav } from '@/components/landing/Nav';
import { Hero } from '@/components/landing/Hero';
import { Services } from '@/components/landing/Services';
import { Features } from '@/components/landing/Features';
import { Products } from '@/components/landing/Products';
import { Contact } from '@/components/landing/Contact';
import { Footer } from '@/components/landing/Footer';
export default function Landing() {
    return (_jsxs("div", { className: "bg-bg-dark text-primary", style: { backgroundColor: 'var(--background)', color: 'var(--text-primary)', transition: 'background 0.15s var(--ease), color 0.15s var(--ease)' }, children: [_jsx(Nav, {}), _jsxs("main", { children: [_jsx(Hero, {}), _jsx(Services, {}), _jsx(Features, {}), _jsx(Products, {}), _jsx(Contact, {})] }), _jsx(Footer, {})] }));
}
//# sourceMappingURL=Landing.js.map