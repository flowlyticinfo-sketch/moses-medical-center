import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useLocale } from '@/i18n/useLocale';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Send, MessageSquare, Loader2 } from 'lucide-react';
import { isValidEmail, sanitize } from '@/lib/validation';
export function Contact() {
    const { t, locale } = useLocale();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '',
        timeline: '',
        description: '',
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle');
    const [emailError, setEmailError] = useState('');
    const whatsappLink = `https://wa.me/972542270398?text=${encodeURIComponent(locale === 'en'
        ? 'Hi Arie, I\'d like to discuss automation for my business.'
        : 'שלום אריה, אני מעוניין לדון באוטומציה עבור העסק שלי.')}`;
    const validateEmail = () => {
        if (formData.email && !isValidEmail(formData.email)) {
            setEmailError(locale === 'en' ? 'Please enter a valid email address' : 'נא להזין כתובת דוא"ל תקינה');
            return false;
        }
        setEmailError('');
        return true;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail())
            return;
        const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;
        if (!webhookUrl) {
            setSubmitStatus('error');
            return;
        }
        setSubmitting(true);
        setSubmitStatus('idle');
        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: sanitize(formData.name),
                    email: formData.email.trim(),
                    projectType: formData.projectType,
                    timeline: formData.timeline,
                    description: sanitize(formData.description),
                    locale,
                    submittedAt: new Date().toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false }).replace(',', ''),
                }),
            });
            if (!response.ok)
                throw new Error();
            setSubmitStatus('success');
            setFormData({ name: '', email: '', projectType: '', timeline: '', description: '' });
        }
        catch {
            setSubmitStatus('error');
        }
        finally {
            setSubmitting(false);
        }
    };
    return (_jsx("section", { className: "px-6", style: {
            padding: '96px 24px',
        }, children: _jsxs("div", { className: "max-w-content mx-auto", children: [_jsxs("div", { style: { marginBottom: '64px' }, children: [_jsx("h2", { style: {
                                fontSize: '14px',
                                fontFamily: 'Geist, sans-serif',
                                fontWeight: 400,
                                color: 'var(--text-muted)',
                                marginBottom: '16px',
                            }, children: "Flowlytic" }), _jsx("h3", { style: {
                                fontSize: '72px',
                                fontFamily: 'Georgia, serif',
                                fontWeight: 700,
                                lineHeight: 1.2,
                                color: 'var(--text-primary)',
                                marginBottom: '12px',
                            }, children: locale === 'en' ? 'Three ways to begin.' : 'שלוש דרכים להתחיל.' }), _jsx("p", { style: {
                                fontSize: '14px',
                                fontFamily: 'Geist, sans-serif',
                                color: 'var(--text-muted)',
                                maxWidth: '480px',
                            }, children: locale === 'en' ? 'Reply within one business day. NDA on request.' : 'מענה תוך יום עסקים. הסכם סודיות זמין לפי הצורך.' })] }), _jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [_jsxs("a", { href: whatsappLink, target: "_blank", rel: "noopener noreferrer", className: "group transition-all duration-300 flex flex-col", style: {
                                background: 'var(--surface)',
                                border: '1px solid var(--border)',
                                borderRadius: '7px',
                                padding: '24px',
                                animation: 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0s forwards',
                                opacity: 0,
                                transform: 'translateY(20px)',
                                transition: 'box-shadow 0.15s var(--ease), border 0.15s var(--ease)',
                            }, onMouseEnter: (e) => {
                                e.currentTarget.style.boxShadow = 'inset 0 0 0 1px var(--border)';
                            }, onMouseLeave: (e) => {
                                e.currentTarget.style.boxShadow = 'none';
                            }, children: [_jsx(MessageCircle, { className: "w-8 h-8 mb-6", style: { color: '#0070f3' } }), _jsx("h3", { style: {
                                        fontSize: '16px',
                                        fontFamily: 'Geist, sans-serif',
                                        fontWeight: 600,
                                        color: 'var(--text-primary)',
                                        marginBottom: '8px',
                                    }, children: locale === 'en' ? 'WhatsApp directly' : 'WhatsApp' }), _jsx("p", { className: "flex-grow", style: {
                                        fontSize: '14px',
                                        fontFamily: 'Geist, sans-serif',
                                        color: 'var(--text-muted)',
                                        lineHeight: 1.5,
                                    }, children: locale === 'en'
                                        ? 'Fastest response. Send a quick message and I\'ll get back to you the same day.'
                                        : 'זמין למענה מהיר. שלחו הודעה קצרה ואחזור אליכם עוד היום.' }), _jsxs("div", { className: "group-hover:translate-x-1 transition-transform mt-6", style: {
                                        fontSize: '14px',
                                        fontFamily: 'Geist, sans-serif',
                                        fontWeight: 600,
                                        color: '#0070f3',
                                    }, children: [locale === 'en' ? 'Message on WhatsApp' : 'שלחו הודעה ב-WhatsApp', " \u2192"] })] }), _jsxs("a", { href: "https://t.me/Flowlytic_bot", target: "_blank", rel: "noopener noreferrer", className: "group transition-all duration-300 flex flex-col", style: {
                                background: 'var(--surface)',
                                border: '1px solid var(--border)',
                                borderRadius: '7px',
                                padding: '24px',
                                animation: 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards',
                                opacity: 0,
                                transform: 'translateY(20px)',
                            }, children: [_jsx(MessageSquare, { className: "w-8 h-8 mb-6", style: { color: '#0070f3' } }), _jsx("h3", { style: {
                                        fontSize: '16px',
                                        fontFamily: 'Geist, sans-serif',
                                        fontWeight: 600,
                                        color: 'var(--text-primary)',
                                        marginBottom: '8px',
                                    }, children: locale === 'en' ? 'Telegram' : 'טלגרם' }), _jsx("p", { className: "flex-grow", style: {
                                        fontSize: '14px',
                                        fontFamily: 'Geist, sans-serif',
                                        color: 'var(--text-muted)',
                                        lineHeight: 1.5,
                                    }, children: locale === 'en'
                                        ? 'Quick updates. Connect on Telegram for direct communication.'
                                        : 'תקשורת ישירה ועדכונים מהירים.' }), _jsxs("div", { className: "group-hover:translate-x-1 transition-transform mt-6", style: {
                                        fontSize: '14px',
                                        fontFamily: 'Geist, sans-serif',
                                        fontWeight: 600,
                                        color: '#0070f3',
                                    }, children: [locale === 'en' ? 'Message on Telegram' : 'שלחו הודעה בטלגרם', " \u2192"] })] }), _jsxs("div", { style: {
                                background: 'var(--surface)',
                                border: '1px solid var(--border)',
                                borderRadius: '7px',
                                padding: '24px',
                                animation: 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
                                opacity: 0,
                                transform: 'translateY(20px)',
                            }, children: [_jsx(Send, { className: "w-8 h-8 mb-6", style: { color: '#0070f3' } }), _jsx("h3", { style: {
                                        fontSize: '16px',
                                        fontFamily: 'Geist, sans-serif',
                                        fontWeight: 600,
                                        color: 'var(--text-primary)',
                                        marginBottom: '8px',
                                    }, children: locale === 'en' ? 'Send a project brief' : 'ספרו לי על הפרויקט' }), _jsx("p", { style: {
                                        fontSize: '14px',
                                        fontFamily: 'Geist, sans-serif',
                                        color: 'var(--text-muted)',
                                        marginBottom: '16px',
                                        lineHeight: 1.5,
                                    }, children: locale === 'en'
                                        ? 'Have a clearer picture? Share the scope and I\'ll respond with a proposal.'
                                        : 'שתפו את ההיקף ואחזור עם הצעת מחיר מותאמת.' }), _jsxs("form", { onSubmit: handleSubmit, style: { display: 'flex', flexDirection: 'column', gap: '12px' }, "aria-label": locale === 'en' ? 'Project brief form' : 'טופס תיאור פרויקט', children: [_jsx(Input, { "aria-label": t.contact.form.name, placeholder: t.contact.form.name, value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), required: true }), _jsxs("div", { children: [_jsx(Input, { type: "email", "aria-label": t.contact.form.email, placeholder: t.contact.form.email, value: formData.email, onChange: (e) => {
                                                        setFormData({ ...formData, email: e.target.value });
                                                        if (emailError)
                                                            setEmailError('');
                                                    }, onBlur: validateEmail, required: true, style: {
                                                        borderColor: emailError ? '#d17724' : '#383838',
                                                    } }), emailError && (_jsx("p", { className: "text-xs mt-1", style: { color: '#eb5757' }, children: emailError }))] }), _jsxs("select", { "aria-label": t.contact.form.projectType, value: formData.projectType, onChange: (e) => setFormData({ ...formData, projectType: e.target.value }), required: true, style: {
                                                height: '36px',
                                                borderRadius: '7px',
                                                backgroundColor: 'var(--background)',
                                                color: 'var(--text-primary)',
                                                border: '1px solid var(--border)',
                                                padding: '8px 12px',
                                                fontSize: '14px',
                                                fontFamily: 'Geist, sans-serif',
                                                cursor: 'pointer',
                                                boxSizing: 'border-box',
                                                transition: 'border-color 0.15s cubic-bezier(0.4, 0, 1, 1)',
                                            }, children: [_jsx("option", { value: "", children: t.contact.form.projectType }), _jsx("option", { value: locale === 'en' ? 'Lead Automation' : 'אוטומציה ללידים', children: locale === 'en' ? 'Lead Automation' : 'אוטומציה ללידים' }), _jsx("option", { value: locale === 'en' ? 'AI Meetings' : 'פגישות מבוססות AI', children: locale === 'en' ? 'AI Meetings' : 'פגישות מבוססות AI' }), _jsx("option", { value: locale === 'en' ? 'Custom Integration' : 'אינטגרציה מותאמת אישית', children: locale === 'en' ? 'Custom Integration' : 'אינטגרציה מותאמת אישית' }), _jsx("option", { value: locale === 'en' ? 'Other' : 'אחר', children: locale === 'en' ? 'Other' : 'אחר' })] }), _jsxs("select", { "aria-label": t.contact.form.timeline, value: formData.timeline, onChange: (e) => setFormData({ ...formData, timeline: e.target.value }), required: true, style: {
                                                height: '36px',
                                                borderRadius: '7px',
                                                backgroundColor: 'var(--background)',
                                                color: 'var(--text-primary)',
                                                border: '1px solid var(--border)',
                                                padding: '8px 12px',
                                                fontSize: '14px',
                                                fontFamily: 'Geist, sans-serif',
                                                cursor: 'pointer',
                                                boxSizing: 'border-box',
                                                transition: 'border-color 0.15s cubic-bezier(0.4, 0, 1, 1)',
                                            }, children: [_jsx("option", { value: "", children: t.contact.form.timeline }), _jsx("option", { value: locale === 'en' ? 'ASAP' : 'מיידי', children: locale === 'en' ? 'ASAP' : 'מיידי' }), _jsx("option", { value: locale === 'en' ? '1-4 weeks' : '1-4 שבועות', children: locale === 'en' ? '1-4 weeks' : '1-4 שבועות' }), _jsx("option", { value: locale === 'en' ? '1-3 months' : '1-3 חודשים', children: locale === 'en' ? '1-3 months' : '1-3 חודשים' }), _jsx("option", { value: locale === 'en' ? 'Flexible' : 'גמיש', children: locale === 'en' ? 'Flexible' : 'גמיש' })] }), _jsx(Textarea, { "aria-label": locale === 'en' ? 'What are you trying to build?' : 'מה אתם רוצים לבנות?', placeholder: locale === 'en' ? 'What are you trying to build?' : 'מה אתם רוצים לבנות?', value: formData.description, onChange: (e) => setFormData({ ...formData, description: e.target.value }), required: true }), _jsx(Button, { type: "submit", disabled: submitting, variant: "default", size: "default", style: {
                                                backgroundColor: '#0070f3',
                                                color: '#ffffff',
                                                marginTop: '4px',
                                            }, children: submitting ? (_jsx(Loader2, { className: "w-4 h-4 animate-spin mx-auto" })) : (locale === 'en' ? 'Send brief' : 'שליחת תיאור פרויקט') }), submitStatus === 'success' && (_jsx("p", { className: "text-sm text-center", style: { color: '#02b8cc' }, children: locale === 'en' ? 'Brief sent! I\'ll get back to you soon.' : 'התיאור נשלח! אחזור אליכם בהקדם.' })), submitStatus === 'error' && (_jsx("p", { className: "text-sm text-center", style: { color: '#eb5757' }, children: locale === 'en' ? 'Something went wrong. Please try again.' : 'משהו השתבש. נסו שוב.' }))] })] })] })] }) }));
}
//# sourceMappingURL=Contact.js.map