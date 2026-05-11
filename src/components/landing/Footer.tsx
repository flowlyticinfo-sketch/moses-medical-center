import { useLocale } from '@/i18n/useLocale';
import { useTheme } from '@/i18n/useThemeHook';
import { Sun, Moon, Monitor } from 'lucide-react';

export function Footer() {
  const { locale } = useLocale();
  const { theme, setThemeMode } = useTheme();

  return (
    <footer
      style={{
        padding: '64px 24px 36px 24px',
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--surface)',
        transition: 'background 0.15s var(--ease), border-color 0.15s var(--ease)',
      }}
    >
      <div className="max-w-content mx-auto">
        {/* Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Branding */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#0070f3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '16px',
                }}
              >
                M
              </div>
              <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>
                {locale === 'he' ? 'מוזס מדיקל' : 'Moses Medical'}
              </span>
            </div>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
              }}
            >
              {locale === 'he'
                ? 'מרכז דנטלי מקצועי עם ניסיון של 22 שנים ושיעור הצלחה של 97%'
                : 'Professional dental center with 22+ years of experience'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: 'var(--text-primary)' }}>
              {locale === 'he' ? 'קישורים מהירים' : 'Quick Links'}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <a
                  href="#services"
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0070f3')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {locale === 'he' ? 'שירותים' : 'Services'}
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a
                  href="#faq"
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0070f3')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {locale === 'he' ? 'שאלות נפוצות' : 'FAQ'}
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a
                  href="#booking"
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0070f3')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {locale === 'he' ? 'קביעת תור' : 'Book Appointment'}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0070f3')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {locale === 'he' ? 'צור קשר' : 'Contact'}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: 'var(--text-primary)' }}>
              {locale === 'he' ? 'שעות ופרטים' : 'Hours & Contact'}
            </h4>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              <p style={{ margin: '0 0 8px 0' }}>
                <strong>{locale === 'he' ? 'ראשון-חמישי' : 'Sun-Thu'}:</strong> 09:00-17:00
              </p>
              <p style={{ margin: '0 0 12px 0' }}>
                <strong>{locale === 'he' ? 'שישי-שבת' : 'Fri-Sat'}:</strong> {locale === 'he' ? 'סגור' : 'Closed'}
              </p>
              <a href="tel:04-640-5020" style={{ color: '#0070f3', textDecoration: 'none' }}>
                📞 04-640-5020
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', transition: 'border-color 0.15s var(--ease)' }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <p
              style={{
                fontSize: '12px',
                color: 'var(--text-muted)',
                margin: 0,
              }}
            >
              {locale === 'he'
                ? `© ${new Date().getFullYear()} מוזס מדיקל סנטר. כל הזכויות שמורות.`
                : `© ${new Date().getFullYear()} Moses Medical Center. All rights reserved.`}
            </p>

            <div
              className="flex items-center gap-2"
              style={{ display: 'inline-flex', gap: '8px' }}
            >
              <button
                onClick={() => setThemeMode('light')}
                aria-label="Light mode"
                style={{
                  background: theme === 'light' ? 'var(--background)' : 'transparent',
                  border: theme === 'light' ? '1px solid var(--border)' : 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.15s var(--ease), border 0.15s var(--ease)',
                }}
              >
                <Sun size={18} style={{ color: theme === 'light' ? 'var(--text-primary)' : 'var(--text-muted)', strokeWidth: 1.5 }} />
              </button>
              <button
                onClick={() => setThemeMode('dark')}
                aria-label="Dark mode"
                style={{
                  background: theme === 'dark' ? 'var(--background)' : 'transparent',
                  border: theme === 'dark' ? '1px solid var(--border)' : 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.15s var(--ease), border 0.15s var(--ease)',
                }}
              >
                <Moon size={18} style={{ color: theme === 'dark' ? 'var(--text-primary)' : 'var(--text-muted)', strokeWidth: 1.5 }} />
              </button>
              <button
                onClick={() => setThemeMode('auto')}
                aria-label="Auto mode"
                style={{
                  background: theme === 'auto' ? 'var(--background)' : 'transparent',
                  border: theme === 'auto' ? '1px solid var(--border)' : 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.15s var(--ease), border 0.15s var(--ease)',
                }}
              >
                <Monitor size={18} style={{ color: theme === 'auto' ? 'var(--text-primary)' : 'var(--text-muted)', strokeWidth: 1.5 }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
