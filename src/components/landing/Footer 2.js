import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocale } from '@/i18n/useLocale';
import { useTheme } from '@/i18n/useThemeHook';
import { Sun, Moon, Monitor } from 'lucide-react';
export function Footer() {
    const { t, locale } = useLocale();
    const { theme, toggleTheme, setThemeMode } = useTheme();
    return (_jsx("footer", { className: "px-6", style: {
            padding: '36px 24px',
            borderTop: '1px solid var(--border)',
            backgroundColor: 'var(--background)',
            transition: 'background 0.15s var(--ease), border-color 0.15s var(--ease)',
        }, children: _jsxs("div", { className: "max-w-content mx-auto", children: [_jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-8", children: [_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px' }, children: [_jsx("p", { style: {
                                        fontSize: '12px',
                                        fontFamily: 'Geist, sans-serif',
                                        color: 'var(--text-muted)',
                                    }, children: t.footer.copyright }), _jsx("p", { style: {
                                        fontSize: '14px',
                                        fontFamily: 'Geist, sans-serif',
                                        fontWeight: 600,
                                        color: 'var(--text-primary)',
                                    }, children: t.footer.name })] }), _jsx("a", { href: `mailto:${t.footer.email}`, style: {
                                fontSize: '14px',
                                fontFamily: 'Geist, sans-serif',
                                color: 'var(--text-primary)',
                                transition: 'color 0.15s cubic-bezier(0.4, 0, 1, 1)',
                            }, onMouseEnter: (e) => (e.currentTarget.style.color = '#0070f3'), onMouseLeave: (e) => (e.currentTarget.style.color = 'var(--text-primary)'), children: t.footer.email })] }), _jsx("div", { style: { borderTop: '1px solid var(--border)', paddingTop: '32px', transition: 'border-color 0.15s var(--ease)' }, children: _jsxs("div", { className: "flex flex-row gap-6 items-center justify-between", style: { color: 'var(--text-muted)' }, children: [_jsxs("div", { className: "flex flex-row gap-6", children: [_jsx("a", { href: locale === 'en' ? '/privacy-policy.html' : '/privacy-policy-he.html', style: {
                                            fontSize: '12px',
                                            fontFamily: 'Geist, sans-serif',
                                            color: 'var(--text-primary)',
                                            transition: 'color 0.15s cubic-bezier(0.4, 0, 1, 1)',
                                        }, onMouseEnter: (e) => (e.currentTarget.style.color = '#0070f3'), onMouseLeave: (e) => (e.currentTarget.style.color = 'var(--text-primary)'), children: locale === 'en' ? 'Privacy Policy' : 'מדיניות פרטיות' }), _jsx("a", { href: locale === 'en' ? '/terms-of-use.html' : '/terms-of-use-he.html', style: {
                                            fontSize: '12px',
                                            fontFamily: 'Geist, sans-serif',
                                            color: 'var(--text-primary)',
                                            transition: 'color 0.15s cubic-bezier(0.4, 0, 1, 1)',
                                        }, onMouseEnter: (e) => (e.currentTarget.style.color = '#0070f3'), onMouseLeave: (e) => (e.currentTarget.style.color = 'var(--text-primary)'), children: locale === 'en' ? 'Terms of Use' : 'תנאי השימוש' })] }), _jsxs("div", { className: "flex items-center gap-2", style: { display: 'inline-flex', gap: '8px' }, children: [_jsx("button", { onClick: () => setThemeMode('light'), "aria-label": "Light mode", style: {
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
                                        }, children: _jsx(Monitor, { size: 18, style: { color: theme === 'auto' ? 'var(--text-primary)' : 'var(--text-muted)', strokeWidth: 1.5 } }) })] })] }) })] }) }));
}
//# sourceMappingURL=Footer.js.map