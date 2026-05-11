import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocale } from '@/i18n/useLocale';
import { useEffect, useRef, useState } from 'react';
export function Products() {
    const { t, locale } = useLocale();
    const cardsRef = useRef([]);
    const [visibleCards, setVisibleCards] = useState([]);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = cardsRef.current.indexOf(entry.target);
                    if (index !== -1) {
                        setTimeout(() => {
                            setVisibleCards((prev) => {
                                const newVisible = [...prev];
                                newVisible[index] = true;
                                return newVisible;
                            });
                        }, index * 100);
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, { threshold: 0.1 });
        cardsRef.current.forEach((card) => {
            if (card)
                observer.observe(card);
        });
        return () => {
            cardsRef.current.forEach((card) => {
                if (card)
                    observer.unobserve(card);
            });
        };
    }, []);
    const handleCTAClick = () => {
        // Track GTM event
        if (window.gtag) {
            window.gtag('event', 'products_cta_click', {
                event_category: 'engagement',
                event_label: t.products.cta,
            });
        }
        // Scroll to project brief form
        const element = document.getElementById('project-brief');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Focus on name input after scroll
            setTimeout(() => {
                const nameInput = element.querySelector('input[name="name"]');
                if (nameInput) {
                    nameInput.focus();
                }
            }, 500);
        }
    };
    return (_jsxs("section", { style: {
            padding: '96px 24px',
            borderTop: '1px solid var(--border)',
        }, children: [_jsx("style", { children: `
        @keyframes cardEnter {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .product-card {
          animation: cardEnter 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .product-card.invisible {
          opacity: 0;
          transform: translateY(24px) scale(0.95);
        }
      ` }), _jsxs("div", { className: "max-w-content mx-auto", children: [_jsxs("div", { style: { marginBottom: '64px' }, children: [_jsx("h2", { style: {
                                    fontSize: '72px',
                                    fontFamily: 'Georgia, serif',
                                    fontWeight: 700,
                                    lineHeight: 1.2,
                                    color: 'var(--text-primary)',
                                    marginBottom: '24px',
                                    textAlign: locale === 'en' ? 'left' : 'right',
                                }, children: t.products.title }), _jsx("p", { style: {
                                    fontSize: '18px',
                                    fontFamily: 'Geist, sans-serif',
                                    color: 'var(--text-muted)',
                                    lineHeight: 1.6,
                                    maxWidth: '600px',
                                    textAlign: locale === 'en' ? 'left' : 'right',
                                }, children: t.products.subtitle })] }), _jsx("div", { style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '24px',
                            marginBottom: '64px',
                        }, children: t.products.items.map((product, index) => (_jsxs("div", { ref: (el) => {
                                if (el)
                                    cardsRef.current[index] = el;
                            }, className: `product-card ${!visibleCards[index] ? 'invisible' : ''}`, style: {
                                padding: '32px 24px',
                                border: '1px solid var(--border)',
                                borderRadius: '7px',
                                backgroundColor: 'var(--background)',
                                transition: 'all 0.15s cubic-bezier(0.5, 0.25, 0.35, 1)',
                                cursor: 'default',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                                textAlign: locale === 'en' ? 'left' : 'right',
                            }, onMouseEnter: (e) => {
                                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.15)';
                                e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                            }, onMouseLeave: (e) => {
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            }, children: [_jsxs("div", { style: {
                                        width: '48px',
                                        height: '48px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }, role: "img", "aria-label": product.name, children: [(product.name.includes('Meal') || product.name.includes('ארוחות')) && (_jsx("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: _jsxs("g", { children: [_jsx("circle", { cx: "24", cy: "24", r: "14", stroke: "var(--text-primary)", strokeWidth: "2" }), _jsx("path", { d: "M24 10v28M10 24h28", stroke: "var(--text-primary)", strokeWidth: "2", strokeLinecap: "round" }), _jsx("circle", { cx: "24", cy: "17", r: "2", fill: "var(--text-primary)" }), _jsx("circle", { cx: "31", cy: "24", r: "2", fill: "var(--text-primary)" }), _jsx("circle", { cx: "24", cy: "31", r: "2", fill: "var(--text-primary)" })] }) })), (product.name.includes('Lead') || product.name.includes('לידים')) && (_jsx("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: _jsxs("g", { children: [_jsx("path", { d: "M8 10h32v8L24 32l-16-14v-8Z", stroke: "var(--text-primary)", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M20 32v10M28 32v10", stroke: "var(--text-primary)", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }) })), (product.name.includes('Salon') || product.name.includes('סלונים')) && (_jsx("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: _jsxs("g", { children: [_jsx("rect", { x: "10", y: "12", width: "28", height: "28", rx: "2", stroke: "var(--text-primary)", strokeWidth: "2" }), _jsx("path", { d: "M14 12v-4M34 12v-4M10 20h28", stroke: "var(--text-primary)", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("circle", { cx: "16", cy: "28", r: "1.5", fill: "var(--text-primary)" }), _jsx("circle", { cx: "24", cy: "28", r: "1.5", fill: "var(--text-primary)" }), _jsx("circle", { cx: "32", cy: "28", r: "1.5", fill: "var(--text-primary)" }), _jsx("circle", { cx: "16", cy: "36", r: "1.5", fill: "var(--text-primary)" }), _jsx("circle", { cx: "24", cy: "36", r: "1.5", fill: "var(--text-primary)" }), _jsx("circle", { cx: "32", cy: "36", r: "1.5", fill: "var(--text-primary)" })] }) })), (product.name.includes('Clinic') || product.name.includes('קליניקה')) && (_jsx("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: _jsxs("g", { children: [_jsx("path", { d: "M14 16c-4.4 0-8 3.6-8 8s3.6 8 8 8M34 16c4.4 0 8 3.6 8 8s-3.6 8-8 8M14 24h20M14 24c0 5.5 4.5 10 10 10s10-4.5 10-10", stroke: "var(--text-primary)", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M24 8v8", stroke: "var(--text-primary)", strokeWidth: "2", strokeLinecap: "round" })] }) }))] }), _jsx("h3", { style: {
                                        fontSize: '18px',
                                        fontFamily: 'Georgia, serif',
                                        fontWeight: 700,
                                        color: 'var(--text-primary)',
                                        lineHeight: 1.2,
                                    }, children: product.name }), _jsx("p", { style: {
                                        fontSize: '12px',
                                        fontFamily: 'Geist, sans-serif',
                                        color: 'var(--text-muted)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        fontWeight: 500,
                                    }, children: product.industry }), _jsx("p", { style: {
                                        fontSize: '14px',
                                        fontFamily: 'Geist, sans-serif',
                                        color: 'var(--text-muted)',
                                        lineHeight: 1.6,
                                    }, children: product.description })] }, product.name))) }), _jsxs("div", { style: {
                            textAlign: 'center',
                            direction: locale === 'en' ? 'ltr' : 'rtl',
                        }, children: [_jsx("p", { style: {
                                    fontSize: '18px',
                                    fontFamily: 'Geist, sans-serif',
                                    color: 'var(--text-primary)',
                                    marginBottom: '24px',
                                    fontWeight: 500,
                                }, children: t.products.pattern }), _jsx("button", { onClick: handleCTAClick, "aria-label": `${t.products.cta} - scroll to project brief form`, style: {
                                    padding: '12px 32px',
                                    fontSize: '16px',
                                    fontFamily: 'Geist, sans-serif',
                                    fontWeight: 600,
                                    color: 'var(--button-text, white)',
                                    backgroundColor: 'var(--button-bg, #000)',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    transition: 'all 0.15s cubic-bezier(0.5, 0.25, 0.35, 1)',
                                }, onMouseEnter: (e) => {
                                    e.currentTarget.style.opacity = '0.9';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }, onMouseLeave: (e) => {
                                    e.currentTarget.style.opacity = '1';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }, children: t.products.cta }), _jsx("p", { style: {
                                    fontSize: '12px',
                                    fontFamily: 'Geist, sans-serif',
                                    color: 'var(--text-muted)',
                                    marginTop: '16px',
                                }, children: t.products.secondary })] })] })] }));
}
//# sourceMappingURL=Products.js.map