import { useLocale } from '@/i18n/useLocale';

export function Testimonials() {
  const { locale } = useLocale();

  const testimonials = [
    {
      name: 'Yulia A',
      date: '11/09/2023',
      quote: locale === 'he'
        ? 'שירות מעולה וטיפול מקצועי. הרופא מאוד ידידותי וממצא את הזמן להסביר כל דבר בפירוט. בהחלט ממליצה!'
        : 'Excellent service and professional care. The doctor is very friendly and takes time to explain everything in detail. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Inbal P',
      date: '27/06/2022',
      quote: locale === 'he'
        ? 'השתלות שיניים שלי הסתיימו בהצלחה. צוות המרפאה מדברים עברית ואנגלית וסביבת העבודה נקייה ופרופסיונלית.'
        : 'My dental implants turned out successfully. The clinic team speaks Hebrew and English, and the work environment is clean and professional.',
      rating: 5,
    },
    {
      name: 'Ohad b',
      date: '25/04/2021',
      quote: locale === 'he'
        ? 'תמיד עם חיוך - זה המקום שלי! טיפול מחמאה וחרדתי מהרופאים נעלמה בשניה.'
        : 'Always with a smile - this is my place! Welcoming treatment and my fear of dentists vanished in a second.',
      rating: 5,
    },
    {
      name: 'Eman N',
      date: '08/09/2020',
      quote: locale === 'he'
        ? 'טיפולי השורש בוצעו בצורה מושלמת, כאב כמעט ולא הרגשתי. ממש מומחה בעבודתו.'
        : 'Root canal treatment was performed perfectly, I barely felt any pain. A real expert at his work.',
      rating: 5,
    },
    {
      name: 'Liya b',
      date: '16/12/2018',
      quote: locale === 'he'
        ? 'הזמן ההמתנה קצר, הרופא חרוץ ותמיד עוזר. מחירים הוגנים וזמין גם בשעות חירום.'
        : 'Short waiting time, the doctor is diligent and always helpful. Fair prices and available even during emergency hours.',
      rating: 5,
    },
  ];

  return (
    <section
      style={{
        padding: '96px 24px',
        backgroundColor: 'var(--surface)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="max-w-content mx-auto">
        <h2
          style={{
            fontSize: '48px',
            fontFamily: 'Georgia, serif',
            fontWeight: '700',
            marginBottom: '12px',
            textAlign: locale === 'he' ? 'right' : 'left',
          }}
        >
          {locale === 'he' ? 'מה המטופלים שלנו אומרים' : 'What Our Patients Say'}
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: 'var(--text-muted)',
            marginBottom: '48px',
            textAlign: locale === 'he' ? 'right' : 'left',
          }}
        >
          {locale === 'he'
            ? 'אלפי חולים מרוצים שהאמינו בנו עם החיוך שלהם'
            : 'Thousands of satisfied patients who trusted us with their smiles'}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              style={{
                padding: '28px',
                border: '1px solid var(--border)',
                borderRadius: '7px',
                backgroundColor: 'var(--background)',
                transition: 'all 0.15s cubic-bezier(0.5, 0.25, 0.35, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ marginBottom: '16px', display: 'flex', gap: '4px' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} style={{ color: '#FFB81C', fontSize: '16px' }}>
                    ★
                  </span>
                ))}
              </div>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                  fontStyle: 'italic',
                }}
              >
                "{testimonial.quote}"
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      margin: 0,
                    }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    style={{
                      fontSize: '12px',
                      color: 'var(--text-muted)',
                      margin: '4px 0 0 0',
                    }}
                  >
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
