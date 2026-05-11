import { useLocale } from '@/i18n/useLocale';
import { useTheme } from '@/i18n/useThemeHook';

export function Hero() {
  const { t, locale } = useLocale();
  const { theme } = useTheme();

  // Determine text color: black in light mode, light gray in dark mode
  const getHeadlineColor = () => {
    if (theme === 'light') return '#000000';
    if (theme === 'auto') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return isDark ? '#eaeaea' : '#000000';
    }
    return '#eaeaea'; // dark mode
  };

  const whatsappLink = `https://wa.me/972542270398?text=${encodeURIComponent(
    locale === 'en'
      ? 'Hi Arie, I\'d like to discuss automation for my business.'
      : 'שלום אריה, אני מעוניין לדון באוטומציה עבור העסק שלי.'
  )}`;

  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center py-20 px-6">
      <div className={`max-w-5xl mx-auto space-y-6 ${locale === 'en' ? 'text-left' : 'text-right'}`}>
        {/* Top Tags */}
        <p className="text-xs tracking-widest uppercase" style={{ color: '#686868' }}>
          {t.hero.tags}
        </p>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-full sm:max-w-5xl" style={{ color: getHeadlineColor(), fontFamily: 'Georgia, serif', fontWeight: 700 }}>
          {locale === 'en' ? (
            <>
              {t.hero.headline1} <span style={{ color: '#0070f3' }}>{t.hero.headline2}</span>
              <br />
              built to scale with your business.
            </>
          ) : (
            <>
              <span style={{ color: '#0070f3' }}>{t.hero.headline1}</span> {t.hero.headline2}
              <br />
              {t.hero.headline3}
            </>
          )}
        </h1>

        {/* Subheading */}
        <p className="text-base max-w-full sm:max-w-5xl leading-relaxed pt-2 whitespace-pre-line" style={{ color: '#686868' }}>
          {t.hero.subheading}
        </p>

        {/* CTAs */}
        <div className="flex flex-row gap-3 pt-6">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                height: '36px',
                backgroundColor: '#25d366',
                color: '#ffffff',
                border: '1px solid #25d366',
                borderRadius: '7px',
                fontFamily: 'Geist, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.15s cubic-bezier(0.5, 0.25, 0.35, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              {t.hero.cta2}
            </button>
          </a>
          <a href="https://t.me/Flowlytic_bot" target="_blank" rel="noopener noreferrer">
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                height: '36px',
                backgroundColor: '#0088cc',
                color: '#ffffff',
                border: '1px solid #0088cc',
                borderRadius: '7px',
                fontFamily: 'Geist, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.15s cubic-bezier(0.5, 0.25, 0.35, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.869 4.326-2.96-.924c-.644-.203-.659-.644.135-.954l11.566-4.458c.54-.196 1.011.127.844 1.14z" />
              </svg>
              {t.hero.cta3}
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}
