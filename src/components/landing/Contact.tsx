import { useState, useEffect, useRef } from 'react';
import { useLocale } from '@/i18n/useLocale';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Send, MessageSquare, Loader2 } from 'lucide-react';
import { isValidEmail, sanitize } from '@/lib/validation';

export function Contact() {
  const { t, locale } = useLocale();
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target as HTMLElement);
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
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    timeline: '',
    description: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState('');

  const whatsappLink = `https://wa.me/972542270398?text=${encodeURIComponent(
    locale === 'en'
      ? 'Hi Arie, I\'d like to discuss automation for my business.'
      : 'שלום אריה, אני מעוניין לדון באוטומציה עבור העסק שלי.'
  )}`;

  const validateEmail = () => {
    if (formData.email && !isValidEmail(formData.email)) {
      setEmailError(locale === 'en' ? 'Please enter a valid email address' : 'נא להזין כתובת דוא"ל תקינה');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail()) return;

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

      if (!response.ok) throw new Error();

      setSubmitStatus('success');
      setFormData({ name: '', email: '', projectType: '', timeline: '', description: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="project-brief"
      className="px-6"
      style={{
        padding: '96px 24px',
      }}
    >
      <div className="max-w-content mx-auto">
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: '14px',
              fontFamily: 'Geist, sans-serif',
              fontWeight: 400,
              color: 'var(--text-muted)',
              marginBottom: '16px',
            }}
          >
            Flowlytic
          </h2>
          <h3
            style={{
              fontSize: '72px',
              fontFamily: 'Georgia, serif',
              fontWeight: 700,
              lineHeight: 1.2,
              color: 'var(--text-primary)',
              marginBottom: '12px',
            }}
          >
            {locale === 'en' ? 'Three ways to begin.' : 'שלוש דרכים להתחיל.'}
          </h3>
          <p
            style={{
              fontSize: '14px',
              fontFamily: 'Geist, sans-serif',
              color: 'var(--text-muted)',
              maxWidth: '480px',
            }}
          >
            {locale === 'en' ? 'Reply within one business day. NDA on request.' : 'מענה תוך יום עסקים. הסכם סודיות זמין לפי הצורך.'}
          </p>
        </div>

        {/* Contact Options Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: WhatsApp */}
          <a
            ref={(el) => {
              if (el) cardsRef.current[0] = el;
            }}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-all duration-300 flex flex-col contact-card"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '7px',
              padding: '24px',
              opacity: visibleCards[0] ? 1 : 0.6,
              transform: visibleCards[0] ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
              transition: visibleCards[0]
                ? 'opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0s, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0s, box-shadow 0.15s var(--ease)'
                : 'none',
            }}
            onMouseEnter={(e) => {
              if (visibleCards[0]) {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
            }}
          >
            <MessageCircle className="w-8 h-8 mb-6" style={{ color: '#0070f3' }} />
            <h3
              style={{
                fontSize: '16px',
                fontFamily: 'Geist, sans-serif',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '8px',
              }}
            >
              {locale === 'en' ? 'WhatsApp directly' : 'WhatsApp'}
            </h3>
            <p
              className="flex-grow"
              style={{
                fontSize: '14px',
                fontFamily: 'Geist, sans-serif',
                color: 'var(--text-muted)',
                lineHeight: 1.5,
              }}
            >
              {locale === 'en'
                ? 'Fastest response. Send a quick message and I\'ll get back to you the same day.'
                : 'זמין למענה מהיר. שלחו הודעה קצרה ואחזור אליכם עוד היום.'}
            </p>
            <div
              className="group-hover:translate-x-1 transition-transform mt-6"
              style={{
                fontSize: '14px',
                fontFamily: 'Geist, sans-serif',
                fontWeight: 600,
                color: '#0070f3',
              }}
            >
              {locale === 'en' ? 'Message on WhatsApp' : 'שלחו הודעה ב-WhatsApp'} →
            </div>
          </a>

          {/* Card 2: Telegram */}
          <a
            ref={(el) => {
              if (el) cardsRef.current[1] = el;
            }}
            href="https://t.me/Flowlytic_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-all duration-300 flex flex-col contact-card"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '7px',
              padding: '24px',
              opacity: visibleCards[1] ? 1 : 0.6,
              transform: visibleCards[1] ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
              transition: visibleCards[1]
                ? 'opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s, box-shadow 0.15s var(--ease)'
                : 'none',
            }}
            onMouseEnter={(e) => {
              if (visibleCards[1]) {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
            }}
          >
            <MessageSquare className="w-8 h-8 mb-6" style={{ color: '#0070f3' }} />
            <h3
              style={{
                fontSize: '16px',
                fontFamily: 'Geist, sans-serif',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '8px',
              }}
            >
              {locale === 'en' ? 'Telegram' : 'טלגרם'}
            </h3>
            <p
              className="flex-grow"
              style={{
                fontSize: '14px',
                fontFamily: 'Geist, sans-serif',
                color: 'var(--text-muted)',
                lineHeight: 1.5,
              }}
            >
              {locale === 'en'
                ? 'Quick updates. Connect on Telegram for direct communication.'
                : 'תקשורת ישירה ועדכונים מהירים.'}
            </p>
            <div
              className="group-hover:translate-x-1 transition-transform mt-6"
              style={{
                fontSize: '14px',
                fontFamily: 'Geist, sans-serif',
                fontWeight: 600,
                color: '#0070f3',
              }}
            >
              {locale === 'en' ? 'Message on Telegram' : 'שלחו הודעה בטלגרם'} →
            </div>
          </a>

          {/* Card 3: Project Brief Form */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[2] = el;
            }}
            className="contact-card"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '7px',
              padding: '24px',
              opacity: visibleCards[2] ? 1 : 0.6,
              transform: visibleCards[2] ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
              transition: visibleCards[2]
                ? 'opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s, box-shadow 0.15s var(--ease)'
                : 'none',
            }}
            onMouseEnter={(e) => {
              if (visibleCards[2]) {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
            }}
          >
            <Send className="w-8 h-8 mb-6" style={{ color: '#0070f3' }} />
            <h3
              style={{
                fontSize: '16px',
                fontFamily: 'Geist, sans-serif',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '8px',
              }}
            >
              {locale === 'en' ? 'Send a project brief' : 'ספרו לי על הפרויקט'}
            </h3>
            <p
              style={{
                fontSize: '14px',
                fontFamily: 'Geist, sans-serif',
                color: 'var(--text-muted)',
                marginBottom: '16px',
                lineHeight: 1.5,
              }}
            >
              {locale === 'en'
                ? 'Have a clearer picture? Share the scope and I\'ll respond with a proposal.'
                : 'שתפו את ההיקף ואחזור עם הצעת מחיר מותאמת.'}
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} aria-label={locale === 'en' ? 'Project brief form' : 'טופס תיאור פרויקט'}>
              <Input
                name="name"
                aria-label={t.contact.form.name}
                placeholder={t.contact.form.name}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <div>
                <Input
                  type="email"
                  aria-label={t.contact.form.email}
                  placeholder={t.contact.form.email}
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (emailError) setEmailError('');
                  }}
                  onBlur={validateEmail}
                  required
                  style={{
                    borderColor: emailError ? '#d17724' : '#383838',
                  }}
                />
                {emailError && (
                  <p className="text-xs mt-1" style={{ color: '#eb5757' }}>{emailError}</p>
                )}
              </div>
              <select
                aria-label={t.contact.form.projectType}
                value={formData.projectType}
                onChange={(e) =>
                  setFormData({ ...formData, projectType: e.target.value })
                }
                required
                style={{
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
                }}
              >
                <option value="">{t.contact.form.projectType}</option>
                <option value={locale === 'en' ? 'Lead Automation' : 'אוטומציה ללידים'}>
                  {locale === 'en' ? 'Lead Automation' : 'אוטומציה ללידים'}
                </option>
                <option value={locale === 'en' ? 'AI Meetings' : 'פגישות מבוססות AI'}>
                  {locale === 'en' ? 'AI Meetings' : 'פגישות מבוססות AI'}
                </option>
                <option value={locale === 'en' ? 'Custom Integration' : 'אינטגרציה מותאמת אישית'}>
                  {locale === 'en' ? 'Custom Integration' : 'אינטגרציה מותאמת אישית'}
                </option>
                <option value={locale === 'en' ? 'Other' : 'אחר'}>
                  {locale === 'en' ? 'Other' : 'אחר'}
                </option>
              </select>

              <select
                aria-label={t.contact.form.timeline}
                value={formData.timeline}
                onChange={(e) =>
                  setFormData({ ...formData, timeline: e.target.value })
                }
                required
                style={{
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
                }}
              >
                <option value="">{t.contact.form.timeline}</option>
                <option value={locale === 'en' ? 'ASAP' : 'מיידי'}>
                  {locale === 'en' ? 'ASAP' : 'מיידי'}
                </option>
                <option value={locale === 'en' ? '1-4 weeks' : '1-4 שבועות'}>
                  {locale === 'en' ? '1-4 weeks' : '1-4 שבועות'}
                </option>
                <option value={locale === 'en' ? '1-3 months' : '1-3 חודשים'}>
                  {locale === 'en' ? '1-3 months' : '1-3 חודשים'}
                </option>
                <option value={locale === 'en' ? 'Flexible' : 'גמיש'}>
                  {locale === 'en' ? 'Flexible' : 'גמיש'}
                </option>
              </select>

              <Textarea
                aria-label={locale === 'en' ? 'What are you trying to build?' : 'מה אתם רוצים לבנות?'}
                placeholder={locale === 'en' ? 'What are you trying to build?' : 'מה אתם רוצים לבנות?'}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
              />

              <Button
                type="submit"
                disabled={submitting}
                variant="default"
                size="default"
                style={{
                  backgroundColor: '#0070f3',
                  color: '#ffffff',
                  marginTop: '4px',
                }}
              >
                {submitting ? (
                  <Loader2 className="w-4 h-4 animate-spin mx-auto" />
                ) : (
                  locale === 'en' ? 'Send brief' : 'שליחת תיאור פרויקט'
                )}
              </Button>

              {submitStatus === 'success' && (
                <p className="text-sm text-center" style={{ color: '#02b8cc' }}>
                  {locale === 'en' ? 'Brief sent! I\'ll get back to you soon.' : 'התיאור נשלח! אחזור אליכם בהקדם.'}
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm text-center" style={{ color: '#eb5757' }}>
                  {locale === 'en' ? 'Something went wrong. Please try again.' : 'משהו השתבש. נסו שוב.'}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
