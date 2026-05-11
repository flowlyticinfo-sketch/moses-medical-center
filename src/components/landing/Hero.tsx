import { useLocale } from '@/i18n/useLocale';
import { useTheme } from '@/i18n/useThemeHook';

export function Hero() {
  const { t, locale } = useLocale();
  const { theme } = useTheme();

  const getHeadlineColor = () => {
    if (theme === 'light') return '#000000';
    if (theme === 'auto') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return isDark ? '#eaeaea' : '#000000';
    }
    return '#eaeaea';
  };

  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center py-20 px-6">
      <div className={`max-w-5xl mx-auto space-y-6 ${locale === 'en' ? 'text-left' : 'text-right'}`}>
        {/* Top Tags */}
        <p className="text-xs tracking-widest uppercase" style={{ color: '#686868' }}>
          {locale === 'he' ? 'רפואת שיניים מקצועית' : 'Professional Dental Care'}
        </p>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-full sm:max-w-5xl" style={{ color: getHeadlineColor(), fontFamily: 'Georgia, serif', fontWeight: 700 }}>
          {locale === 'he' ? 'כל טיפולי השיניים שלך בקלות' : 'All Your Dental Treatments with Ease'}
        </h1>

        {/* Subheading */}
        <p className="text-base max-w-full sm:max-w-5xl leading-relaxed pt-2" style={{ color: '#686868' }}>
          {locale === 'he'
            ? 'רשת מרכזים לרפואת שיניים והשתלות. ציצוים שיניים, כירורגיה, אסתטיקה וטיפול לילדים עם ניסיון של 22 שנים.'
            : 'Network of dental clinics with 22+ years of experience. Root canals, surgery, cosmetics, and pediatric care.'}
        </p>

        {/* CTAs */}
        <div className="flex flex-row gap-3 pt-6" style={{ justifyContent: locale === 'he' ? 'flex-end' : 'flex-start' }}>
          <button
            onClick={() => window.location.href = '#booking'}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              height: 'auto',
              backgroundColor: '#25d366',
              color: '#ffffff',
              border: '1px solid #25d366',
              borderRadius: '7px',
              fontFamily: 'Geist, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s cubic-bezier(0.5, 0.25, 0.35, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.9';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {locale === 'he' ? 'קביעת חור' : 'Book Appointment'}
          </button>
          <a href="tel:04-640-5020" style={{ textDecoration: 'none' }}>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                height: 'auto',
                backgroundColor: 'transparent',
                color: '#0070f3',
                border: '2px solid #0070f3',
                borderRadius: '7px',
                fontFamily: 'Geist, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s cubic-bezier(0.5, 0.25, 0.35, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0070f3';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#0070f3';
              }}
            >
              {locale === 'he' ? 'התקשרו עכשיו' : 'Call Now'} 📞
            </button>
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '40px', marginTop: '48px', justifyContent: locale === 'he' ? 'flex-end' : 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ textAlign: locale === 'he' ? 'right' : 'left' }}>
            <div style={{ fontSize: '28px', fontWeight: '700', color: '#0070f3' }}>+22</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>{locale === 'he' ? 'שנות ניסיון' : 'Years Experience'}</div>
          </div>
          <div style={{ textAlign: locale === 'he' ? 'right' : 'left' }}>
            <div style={{ fontSize: '28px', fontWeight: '700', color: '#0070f3' }}>+12,400</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>{locale === 'he' ? 'שתלות מוצלחות' : 'Successful Implants'}</div>
          </div>
          <div style={{ textAlign: locale === 'he' ? 'right' : 'left' }}>
            <div style={{ fontSize: '28px', fontWeight: '700', color: '#0070f3' }}>4</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>{locale === 'he' ? 'קופות חירום' : 'Emergency Locations'}</div>
          </div>
        </div>

      </div>
    </section>
  );
}
