import { useLocale } from '@/i18n/useLocale';
import { useTheme } from '@/i18n/useThemeHook';
import { Link } from 'react-router-dom';
import { Sun, Moon, Monitor } from 'lucide-react';

export function Nav() {
  const { t, locale, toggle } = useLocale();
  const { theme, toggleTheme, setThemeMode } = useTheme();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 animate-fade-in"
      style={{
        background: 'var(--background)',
        borderBottom: '1px solid var(--border)',
        color: 'var(--text-primary)',
        transition: 'background 0.15s var(--ease), border-color 0.15s var(--ease), color 0.15s var(--ease)',
      }}
    >
      <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            aria-label={locale === 'en' ? 'Switch to Hebrew' : 'Switch to English'}
            style={{
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              padding: '6px 10px',
              borderRadius: '6px',
              border: '1px solid var(--border)',
              backgroundColor: 'transparent',
              color: '#0070f3',
              cursor: 'pointer',
              transition: 'all 0.15s cubic-bezier(0.5, 0.25, 0.35, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--surface)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {locale === 'en' ? 'עברית' : 'English'}
          </button>
        </div>

        <Link
          to="/"
          className="flex items-center gap-2"
          style={{
            cursor: 'pointer',
            transition: 'opacity 0.15s cubic-bezier(0.5, 0.25, 0.35, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
        >
          <img src="/logo.png" alt="Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
          <span className="text-sm font-bold" style={{ color: 'var(--text-primary)', letterSpacing: '0', textAlign: locale === 'he' ? 'right' : 'left' }}>
            {locale === 'he' ? 'מוזס מדיקל סנטר' : 'Moses Medical Center'}
          </span>
        </Link>

        <div className="flex items-center gap-6" style={{ direction: locale === 'he' ? 'rtl' : 'ltr' }}>
          <a href="#services" className="text-sm hover:opacity-80" style={{
            color: 'var(--text-primary)',
            cursor: 'pointer',
            transition: 'color 0.15s cubic-bezier(0.4, 0, 1, 1)',
            textDecoration: 'none',
          }}>
            {locale === 'he' ? 'שיפולים' : 'Services'}
          </a>
          <a href="#faq" className="text-sm hover:opacity-80" style={{
            color: 'var(--text-primary)',
            cursor: 'pointer',
            transition: 'color 0.15s cubic-bezier(0.4, 0, 1, 1)',
            textDecoration: 'none',
          }}>
            {locale === 'he' ? 'שאלות נפוצות' : 'FAQ'}
          </a>
          <a href="#contact" className="text-sm hover:opacity-80" style={{
            color: 'var(--text-primary)',
            cursor: 'pointer',
            transition: 'color 0.15s cubic-bezier(0.4, 0, 1, 1)',
            textDecoration: 'none',
          }}>
            {locale === 'he' ? 'צור קשר' : 'Contact'}
          </a>
          <a href="tel:04-640-5020" className="text-sm hover:opacity-80" style={{
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            transition: 'color 0.15s cubic-bezier(0.4, 0, 1, 1)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            📞 04-640-5020
          </a>
          <button style={{
            backgroundColor: '#25d366',
            color: 'white',
            padding: '6px 14px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: '600',
            transition: 'all 0.15s cubic-bezier(0.5, 0.25, 0.35, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.9';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          onClick={() => window.location.href = '#booking'}
          >
            {locale === 'he' ? 'קביעת חור' : 'Book'}
          </button>
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
    </nav>
  );
}
