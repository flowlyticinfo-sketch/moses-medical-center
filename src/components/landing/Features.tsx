import { useLocale } from '@/i18n/useLocale';

export function Features() {
  const { locale } = useLocale();

  const features = locale === 'he' ? [
    { icon: '✓', title: '22+ שנות ניסיון', description: 'ניסיון של 22 שנים בטיפולים דנטליים מקצועיים' },
    { icon: '✓', title: '+12,400 שתלות מוצלחות', description: 'אלפי חולים מרוצים עם תוצאות מושלמות' },
    { icon: '✓', title: 'זמינות מלאה לחירום', description: '24/7 זמינות לטיפול בשעות חירום' },
    { icon: '✓', title: 'צוות מיומן', description: 'רופאי שיניים בעלי הסמכות וניסיון רב' },
    { icon: '✓', title: 'טכנולוגיה מתקדמת', description: 'ציוד מודרני וטכנולוגיות היום' },
    { icon: '✓', title: 'שיעור הצלחה 97%', description: 'שיעור הצלחה גבוה בכל הטיפולים' },
  ] : [
    { icon: '✓', title: '22+ Years Experience', description: '22 years of professional dental care' },
    { icon: '✓', title: '+12,400 Successful Implants', description: 'Thousands of satisfied patients' },
    { icon: '✓', title: '24/7 Emergency Care', description: 'Always available in urgent situations' },
    { icon: '✓', title: 'Expert Team', description: 'Certified and experienced dentists' },
    { icon: '✓', title: 'Modern Technology', description: 'Latest equipment and techniques' },
    { icon: '✓', title: '97% Success Rate', description: 'High success rate across all treatments' },
  ];

  return (
    <section
      style={{
        padding: '96px 24px',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="max-w-content mx-auto">
        {/* Title */}
        <h2
          style={{
            fontSize: '72px',
            fontFamily: 'Georgia, serif',
            fontWeight: 700,
            lineHeight: 1.2,
            color: 'var(--text-primary)',
            maxWidth: '100%',
            marginBottom: '64px',
            textAlign: locale === 'en' ? 'left' : 'right',
          }}
        >
          {locale === 'he' ? 'למה לבחור במוזס?' : 'Why Choose Moses?'}
        </h2>

        {/* Features Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              style={{
                padding: '24px',
                border: '1px solid var(--border)',
                borderRadius: '7px',
                backgroundColor: 'var(--surface)',
                textAlign: locale === 'en' ? 'left' : 'right',
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
              <div style={{ fontSize: '24px', marginBottom: '12px', color: '#25d366' }}>
                {feature.icon}
              </div>
              <h3
                style={{
                  fontSize: '18px',
                  fontFamily: 'Georgia, serif',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: '13px',
                  fontFamily: 'Geist, sans-serif',
                  color: 'var(--text-muted)',
                  lineHeight: 1.5,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
