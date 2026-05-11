import { useState } from 'react';
import { useLocale } from '@/i18n/useLocale';

export function FAQ() {
  const { locale } = useLocale();
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const faqs = locale === 'he' ? [
    { q: 'כמה זמן חוקי הטיפול?', a: 'משך הטיפול משתנה בהתאם לסוג הטיפול. השתלות שיניים לוקחות 3-6 חודשים, בעוד טיפולי שורש לוקחים 1-2 שיחות.' },
    { q: 'מה הוא עלות השתלות שיניים?', a: 'עלות השתלה משתנה בהתאם למורכבות המקרה. אנחנו מציעים תוכניות תשלום גמישות וייעוץ חינם.' },
    { q: 'האם יש אפשרות לתשלום בתשלומים?', a: 'כן, אנחנו מציעים תוכניות תשלום בתשלומים ללא ריבית עם קופות החולים.' },
    { q: 'מה הוא הטיפול בחירום?', a: 'טיפול חירום זמין 24/7 לכל כאב חריף או בעיה דנטלית דחופה.' },
    { q: 'כמה ימים לאחר הטיפול לחזור לעבודה?', a: 'רוב המטופלים חוזרים לעבודה ביום הבא. טיפולים מורכבים יותר עשויים לדרוש זמן החלמה של 2-3 ימים.' },
    { q: 'האם קופת חולים מכסה טיפולים?', a: 'קופות חולים מכסות כמה טיפולים. אנחנו מטופלים ישירות עם כל קופות החולים העיקריות.' },
  ] : [
    { q: 'How long does treatment take?', a: 'Treatment duration varies by type. Implants take 3-6 months, while root canals typically take 1-2 visits.' },
    { q: 'What is the cost of implants?', a: 'Cost varies based on case complexity. We offer flexible payment plans and free consultations.' },
    { q: 'Do you offer payment plans?', a: 'Yes, we offer interest-free installment plans with major health insurance providers.' },
    { q: 'What is emergency care?', a: 'Emergency care is available 24/7 for severe pain or urgent dental issues.' },
    { q: 'How soon can I return to work?', a: 'Most patients return to work the next day. Complex treatments may require 2-3 days recovery.' },
    { q: 'Does health insurance cover treatments?', a: 'Insurance covers some procedures. We work directly with all major insurance providers.' },
  ];

  return (
    <section id="faq" style={{ padding: '96px 24px', backgroundColor: 'var(--background)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-content mx-auto">
        <h2 style={{ fontSize: '48px', fontFamily: 'Georgia, serif', fontWeight: '700', marginBottom: '12px' }}>
          {locale === 'he' ? 'שאלות נפוצות' : 'Frequently Asked Questions'}
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '48px' }}>
          {locale === 'he' ? 'תשובות לשאלות הנפוצות ביותר' : 'Answers to the most common questions'}
        </p>

        <div style={{ maxWidth: '700px' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ marginBottom: '16px', border: '1px solid var(--border)', borderRadius: '7px', overflow: 'hidden' }}>
              <button
                onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                style={{
                  width: '100%',
                  padding: '20px',
                  backgroundColor: 'var(--surface)',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '15px',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  textAlign: locale === 'he' ? 'right' : 'left',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--surface)'}
              >
                <span>{faq.q}</span>
                <span style={{ marginLeft: locale === 'he' ? 'auto' : '12px', marginRight: locale === 'he' ? '12px' : '0', transition: 'transform 0.2s', transform: expandedIdx === idx ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  ↓
                </span>
              </button>
              {expandedIdx === idx && (
                <div style={{ padding: '20px', backgroundColor: 'var(--background)', borderTop: '1px solid var(--border)', fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
