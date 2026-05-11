import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocale } from '@/i18n/useLocale';
export function Features() {
    const { t, locale } = useLocale();
    return (_jsx("section", { style: {
            padding: '96px 24px',
            borderTop: '1px solid var(--border)',
        }, children: _jsxs("div", { className: "max-w-content mx-auto", children: [_jsx("h2", { style: {
                        fontSize: '72px',
                        fontFamily: 'Georgia, serif',
                        fontWeight: 700,
                        lineHeight: 1.2,
                        color: 'var(--text-primary)',
                        maxWidth: '100%',
                        marginBottom: '64px',
                        textAlign: locale === 'en' ? 'left' : 'right',
                    }, children: t.features.title }), _jsx("div", { style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                        gap: '48px',
                    }, children: t.features.items.map((feature, idx) => (_jsxs("div", { style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                        }, children: [_jsx("div", { style: {
                                    borderRadius: '7px',
                                    overflow: 'hidden',
                                    border: '1px solid var(--border)',
                                    transition: 'all 0.15s cubic-bezier(0.5, 0.25, 0.35, 1)',
                                    cursor: 'pointer',
                                }, onMouseEnter: (e) => {
                                    e.currentTarget.style.boxShadow = 'inset 0 0 0 1px var(--border)';
                                    e.currentTarget.style.transform = 'scale(1.01)';
                                }, onMouseLeave: (e) => {
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }, children: _jsx("img", { src: feature.image, alt: feature.title, style: {
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block',
                                        transition: 'opacity 0.15s cubic-bezier(0.5, 0.25, 0.35, 1)',
                                    } }) }), _jsxs("div", { style: { textAlign: locale === 'en' ? 'left' : 'right' }, children: [_jsx("h3", { style: {
                                            fontSize: '24px',
                                            fontFamily: 'Georgia, serif',
                                            fontWeight: 700,
                                            color: 'var(--text-primary)',
                                            marginBottom: '12px',
                                        }, children: feature.title }), _jsx("p", { style: {
                                            fontSize: '14px',
                                            fontFamily: 'Geist, sans-serif',
                                            color: 'var(--text-muted)',
                                            lineHeight: 1.6,
                                        }, children: feature.description })] })] }, idx))) })] }) }));
}
//# sourceMappingURL=Features.js.map