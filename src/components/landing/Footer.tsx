import { useLocale } from '@/i18n/useLocale';
import { useTheme } from '@/i18n/useThemeHook';
import { Sun, Moon, Monitor } from 'lucide-react';

export function Footer() {
  const { t, locale } = useLocale();
  const { theme, toggleTheme, setThemeMode } = useTheme();

  return (
    <footer
      className="px-6"
      style={{
        padding: '36px 24px',
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--background)',
        transition: 'background 0.15s var(--ease), border-color 0.15s var(--ease)',
      }}
    >
      <div className="max-w-content mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-8">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p
              style={{
                fontSize: '12px',
                fontFamily: 'Geist, sans-serif',
                color: 'var(--text-muted)',
              }}
            >
              {t.footer.copyright}
            </p>
            <p
              style={{
                fontSize: '14px',
                fontFamily: 'Geist, sans-serif',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              {t.footer.name}
            </p>
          </div>

          <a
            href={`mailto:${t.footer.email}`}
            style={{
              fontSize: '14px',
              fontFamily: 'Geist, sans-serif',
              color: 'var(--text-primary)',
              transition: 'color 0.15s cubic-bezier(0.4, 0, 1, 1)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0070f3')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
          >
            {t.footer.email}
          </a>
        </div>

        {/* Legal Links & Theme Toggle */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', transition: 'border-color 0.15s var(--ease)' }}>
          <div className="flex flex-row gap-6 items-center justify-between" style={{ color: 'var(--text-muted)' }}>
            <div className="flex flex-row gap-6">
              <a
                href={locale === 'en' ? '/privacy-policy.html' : '/privacy-policy-he.html'}
                style={{
                  fontSize: '12px',
                  fontFamily: 'Geist, sans-serif',
                  color: 'var(--text-primary)',
                  transition: 'color 0.15s cubic-bezier(0.4, 0, 1, 1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#0070f3')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              >
                {locale === 'en' ? 'Privacy Policy' : 'מדיניות פרטיות'}
              </a>
              <a
                href={locale === 'en' ? '/terms-of-use.html' : '/terms-of-use-he.html'}
                style={{
                  fontSize: '12px',
                  fontFamily: 'Geist, sans-serif',
                  color: 'var(--text-primary)',
                  transition: 'color 0.15s cubic-bezier(0.4, 0, 1, 1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#0070f3')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              >
                {locale === 'en' ? 'Terms of Use' : 'תנאי השימוש'}
              </a>
            </div>
            <div className="flex items-center gap-2" style={{ display: 'inline-flex', gap: '8px' }}>
              <button
                onClick={() => setThemeMode('light')}
                aria-label="Light mode"
                style={{
                  background: theme === 'light' ? 'var(--surface)' : 'transparent',
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
                  background: theme === 'dark' ? 'var(--surface)' : 'transparent',
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
                  background: theme === 'auto' ? 'var(--surface)' : 'transparent',
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
