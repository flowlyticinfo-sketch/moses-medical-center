import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocale } from '@/i18n/useLocale';
import { useTheme } from '@/i18n/useThemeHook';
import { Link } from 'react-router-dom';
import { Sun, Moon, Monitor } from 'lucide-react';
export function Nav() {
    const { t, locale, toggle } = useLocale();
    const { theme, toggleTheme, setThemeMode } = useTheme();
    return (_jsx("nav", { className: "fixed top-0 left-0 right-0 z-50 animate-fade-in", style: {
            background: 'var(--background)',
            borderBottom: '1px solid var(--border)',
            color: 'var(--text-primary)',
            transition: 'background 0.15s var(--ease), border-color 0.15s var(--ease), color 0.15s var(--ease)',
        }, children: _jsxs("div", { className: "max-w-content mx-auto px-6 py-4 flex items-center justify-between", children: [_jsx("div", { className: "flex items-center gap-4", children: _jsx("button", { onClick: toggle, "aria-label": locale === 'en' ? 'Switch to Hebrew' : 'Switch to English', style: {
                            fontSize: '12px',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            padding: '6px 10px',
                            borderRadius: '6px',
                            border: '1px solid var(--border)',
                            backgroundColor: 'transparent',
                            color: '#0070f3',
                            cursor: 'pointer',
                            transition: 'all 0.15s cubic-bezier(0.5, 0.25, 0.35, 1)',
                        }, onMouseEnter: (e) => {
                            e.currentTarget.style.backgroundColor = 'var(--surface)';
                        }, onMouseLeave: (e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }, children: locale === 'en' ? 'עברית' : 'English' }) }), _jsxs(Link, { to: "/", className: "flex items-center gap-2", style: {
                        cursor: 'pointer',
                        transition: 'opacity 0.15s cubic-bezier(0.5, 0.25, 0.35, 1)',
                    }, onMouseEnter: (e) => {
                        e.currentTarget.style.opacity = '0.8';
                    }, onMouseLeave: (e) => {
                        e.currentTarget.style.opacity = '1';
                    }, children: [_jsxs("svg", { width: "28", height: "28", viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { d: "M50 15c-8 0-14 6-14 14 0 3 1 6 2 8-2 1-4 2-6 2-8 0-14 6-14 14 0 8 6 14 14 14 2 0 4-1 6-2 0 8 6 14 14 14 8 0 14-6 14-14 0-8-6-14-14-14-2 0-4 1-6 2 1-2 2-5 2-8 0-8-6-14-14-14z", stroke: "#8B5CF6", strokeWidth: "2", fill: "none" }), _jsx("path", { d: "M35 35c-4 0-8 3-8 8s3 8 8 8 8-3 8-8-3-8-8-8z", fill: "#8B5CF6", opacity: "0.3" }), _jsx("path", { d: "M65 35c-4 0-8 3-8 8s3 8 8 8 8-3 8-8-3-8-8-8z", fill: "#8B5CF6", opacity: "0.3" }), _jsx("path", { d: "M50 55c-3 0-6 2-6 6s2 6 6 6 6-2 6-6-2-6-6-6z", fill: "#8B5CF6", opacity: "0.5" })] }), _jsx("span", { className: "text-sm font-bold", style: { color: '#8B5CF6', letterSpacing: '-0.02em' }, children: "Flowlytic" })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Link, { to: "/tools", className: "text-sm hover:opacity-80", style: {
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                transition: 'color 0.15s cubic-bezier(0.4, 0, 1, 1)',
                            }, children: t.nav.tools }), _jsxs("div", { className: "flex items-center gap-2", style: { display: 'inline-flex', gap: '8px' }, children: [_jsx("button", { onClick: () => setThemeMode('light'), "aria-label": "Light mode", style: {
                                        background: theme === 'light' ? 'var(--surface)' : 'transparent',
                                        border: theme === 'light' ? '1px solid var(--border)' : 'none',
                                        borderRadius: '50%',
                                        width: '36px',
                                        height: '36px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        transition: 'background 0.15s var(--ease), border 0.15s var(--ease)',
                                    }, children: _jsx(Sun, { size: 18, style: { color: theme === 'light' ? 'var(--text-primary)' : 'var(--text-muted)', strokeWidth: 1.5 } }) }), _jsx("button", { onClick: () => setThemeMode('dark'), "aria-label": "Dark mode", style: {
                                        background: theme === 'dark' ? 'var(--surface)' : 'transparent',
                                        border: theme === 'dark' ? '1px solid var(--border)' : 'none',
                                        borderRadius: '50%',
                                        width: '36px',
                                        height: '36px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        transition: 'background 0.15s var(--ease), border 0.15s var(--ease)',
                                    }, children: _jsx(Moon, { size: 18, style: { color: theme === 'dark' ? 'var(--text-primary)' : 'var(--text-muted)', strokeWidth: 1.5 } }) }), _jsx("button", { onClick: () => setThemeMode('auto'), "aria-label": "Auto mode", style: {
                                        background: theme === 'auto' ? 'var(--surface)' : 'transparent',
                                        border: theme === 'auto' ? '1px solid var(--border)' : 'none',
                                        borderRadius: '50%',
                                        width: '36px',
                                        height: '36px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        transition: 'background 0.15s var(--ease), border 0.15s var(--ease)',
                                    }, children: _jsx(Monitor, { size: 18, style: { color: theme === 'auto' ? 'var(--text-primary)' : 'var(--text-muted)', strokeWidth: 1.5 } }) })] })] })] }) }));
}
//# sourceMappingURL=Nav.js.map