import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Nav } from '@/components/landing/Nav';
import { Footer } from '@/components/landing/Footer';
import { useLocale } from '@/i18n/useLocale';
import { ArrowRight } from 'lucide-react';
const tools = [
    {
        id: 'random-name-generator',
        titleEn: 'Random Name Generator',
        titleHe: 'מחולל שמות אקראיים',
        descEn: 'Generate random names for babies, pets, and characters instantly.',
        descHe: 'צור שמות אקראיים לתינוקות, חיות מחמד דמויות במהירות.',
        icon: '👶',
        url: 'https://random.flowlytic.app',
    },
    {
        id: 'calorie-calculator',
        titleEn: 'Calorie Calculator',
        titleHe: 'מחשבון קלוריות',
        descEn: 'Calculate your daily caloric needs based on activity level and goals.',
        descHe: 'חשב את צרכי הקלוריות היומיות שלך בהתאם לרמת הפעילות והמטרות.',
        icon: '🔥',
        url: 'https://calorie.flowlytic.app',
    },
    {
        id: 'compound-interest-calculator',
        titleEn: 'Compound Interest Calculator',
        titleHe: 'מחשבון ריבית דריבית',
        descEn: 'Calculate compound interest with various frequencies and timeframes.',
        descHe: 'חשב ריבית דריבית בתדירויות ופרקי זמן שונים.',
        icon: '💰',
        url: 'https://compound.flowlytic.app',
    },
    {
        id: 'qr-code-generator',
        titleEn: 'QR Code Generator',
        titleHe: 'מחולל קוד QR',
        descEn: 'Create and download QR codes instantly from any URL or text.',
        descHe: 'צור והורד קודי QR מיד מכל כתובת URL או טקסט.',
        icon: '📱',
        url: 'https://qr.flowlytic.app',
    },
];
export default function Tools() {
    const { t, locale } = useLocale();
    return (_jsxs("div", { style: { backgroundColor: 'var(--background)', color: 'var(--text-primary)', transition: 'background 0.15s var(--ease), color 0.15s var(--ease)' }, children: [_jsx(Nav, {}), _jsx("main", { className: "px-6", style: {
                    paddingTop: '128px',
                    paddingBottom: '96px',
                }, children: _jsxs("div", { className: "max-w-content mx-auto", children: [_jsxs("div", { style: {
                                textAlign: 'center',
                                marginBottom: '64px',
                            }, children: [_jsx("h1", { style: {
                                        fontSize: 'clamp(56px, 8vw, 90px)',
                                        fontFamily: 'Georgia, serif',
                                        fontWeight: 700,
                                        lineHeight: 1.2,
                                        color: 'var(--text-primary)',
                                        marginBottom: '16px',
                                    }, children: locale === 'en' ? 'Free Tools' : 'כלים בחינם' }), _jsx("p", { style: {
                                        fontSize: '14px',
                                        fontFamily: 'Geist, sans-serif',
                                        color: 'var(--text-muted)',
                                        maxWidth: '480px',
                                        margin: '0 auto',
                                        lineHeight: 1.5,
                                    }, children: locale === 'en'
                                        ? 'A collection of powerful, free tools to help with everyday tasks.'
                                        : 'אוסף של כלים חזקים וחינמיים שיעזרו בעבודות יומיומיות.' })] }), _jsx("div", { className: "grid md:grid-cols-2 gap-8", children: tools.map((tool) => (_jsx("a", { href: tool.url, target: "_blank", rel: "noopener noreferrer", className: "group h-full", children: _jsxs("div", { className: "transition-all duration-300 h-full flex flex-col justify-between", style: {
                                        backgroundColor: 'var(--surface)',
                                        border: '1px solid var(--border)',
                                        borderRadius: '7px',
                                        padding: '24px',
                                    }, children: [_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '16px' }, children: [_jsx("div", { style: { fontSize: '48px' }, children: tool.icon }), _jsx("h3", { className: "group-hover:text-[#0070f3] transition-colors", style: {
                                                        fontSize: '20px',
                                                        fontFamily: 'Georgia, serif',
                                                        fontWeight: 600,
                                                        color: 'var(--text-primary)',
                                                    }, children: locale === 'en' ? tool.titleEn : tool.titleHe }), _jsx("p", { style: {
                                                        fontSize: '14px',
                                                        fontFamily: 'Geist, sans-serif',
                                                        color: 'var(--text-muted)',
                                                        lineHeight: 1.5,
                                                    }, children: locale === 'en' ? tool.descEn : tool.descHe })] }), _jsxs("div", { className: "flex items-center group-hover:translate-x-1 transition-transform", style: {
                                                fontSize: '14px',
                                                fontFamily: 'Geist, sans-serif',
                                                fontWeight: 600,
                                                color: '#0070f3',
                                            }, children: [locale === 'en' ? 'Open tool' : 'פתח כלי', _jsx(ArrowRight, { className: "ml-2 w-4 h-4" })] })] }) }, tool.id))) })] }) }), _jsx(Footer, {})] }));
}
//# sourceMappingURL=Tools.js.map