import { useLocale } from '@/i18n/useLocale';
import { useTheme } from '@/i18n/useThemeHook';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Services() {
  const { t } = useLocale();
  const { theme } = useTheme();
  const containerRef = useScrollReveal();

  return (
    <section
      className="px-6"
      style={{
        padding: '96px 24px',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="max-w-content mx-auto">
        {/* Badge */}
        <div className="inline-block mb-8">
          <div
            style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '7px',
              padding: '2px 8px',
              fontSize: '12px',
              fontFamily: 'Geist, sans-serif',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--text-muted)',
            }}
          >
            {t.services.label}
          </div>
        </div>

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
          }}
        >
          {t.services.title}
        </h2>

        {/* Cards Grid */}
        <div
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {t.services.items.map((item: any, idx: number) => {
            const cardRef = useScrollReveal();
            return (
              <div
                key={idx}
                ref={cardRef}
                className="reveal group transition-all duration-300"
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '7px',
                  padding: '24px',
                  cursor: 'pointer',
                  transitionProperty: 'box-shadow, border-color',
                  transitionDuration: '0.15s',
                  transitionTimingFunction: 'cubic-bezier(0.5, 0.25, 0.35, 1)',
                  animation: `scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.1}s forwards`,
                  opacity: 0,
                  transform: 'scale(0.95)',
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
                {/* Number */}
                <div
                  style={{
                    fontSize: '12px',
                    fontFamily: 'Geist, sans-serif',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '16px',
                  }}
                >
                  {item.number}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '18px',
                    fontFamily: 'Georgia, serif',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '12px',
                    transition: 'color 0.15s cubic-bezier(0.4, 0, 1, 1)',
                  }}
                  className="group-hover:text-[#0070f3]"
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '14px',
                    fontFamily: 'Geist, sans-serif',
                    fontWeight: 400,
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                  }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Technology Badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '32px' }}>
          {t.hero.capabilities.map((capability) => {
            const isDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const effectiveTheme = theme === 'dark' || (theme === 'auto' && isDarkScheme) ? 'dark' : 'light';
            const isDarkMode = effectiveTheme === 'dark';

            const lightModeColors: { [key: string]: { bg: string; text: string } } = {
              'AI': { bg: '#E6F2FF', text: '#0070f3' },
              'Custom JS': { bg: '#FFFAED', text: '#d97706' },
              'APIs': { bg: '#EFF6FF', text: '#2563eb' },
              'Databases': { bg: '#F0FDF4', text: '#16a34a' },
              'n8n': { bg: '#FAF5FF', text: '#7c3aed' },
              'Make': { bg: '#FFF7ED', text: '#ea580c' },
              'JavaScript': { bg: '#FFFAED', text: '#d97706' },
              'SaaS': { bg: '#F3F4F6', text: '#6B7280' },
              'מסדי נתונים': { bg: '#F0FDF4', text: '#16a34a' },
            };

            const darkModeColors: { [key: string]: { bg: string; text: string } } = {
              'AI': { bg: '#222222', text: '#0070f3' },
              'Custom JS': { bg: '#222222', text: '#d97706' },
              'APIs': { bg: '#222222', text: '#2563eb' },
              'Databases': { bg: '#222222', text: '#16a34a' },
              'n8n': { bg: '#222222', text: '#7c3aed' },
              'Make': { bg: '#222222', text: '#ea580c' },
              'JavaScript': { bg: '#222222', text: '#d97706' },
              'SaaS': { bg: '#222222', text: '#6B7280' },
              'מסדי נתונים': { bg: '#222222', text: '#16a34a' },
            };

            const colors = isDarkMode ? darkModeColors : lightModeColors;
            const capText = String(capability).trim();
            const colorObj = colors[capText];
            const bgColor = colorObj?.bg || '#0070f3';
            const textColor = colorObj?.text || '#ffffff';

            return (
              <span
                key={capText}
                style={{
                  backgroundColor: bgColor,
                  border: 'none',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontSize: '12px',
                  fontFamily: 'Geist, sans-serif',
                  color: textColor,
                  whiteSpace: 'nowrap',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s cubic-bezier(0.5, 0.25, 0.35, 1)',
                }}
              >
                {capability}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
