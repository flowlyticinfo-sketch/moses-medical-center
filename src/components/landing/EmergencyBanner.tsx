import { useLocale } from '@/i18n/useLocale';

export function EmergencyBanner() {
  const { locale } = useLocale();

  return (
    <div
      style={{
        backgroundColor: '#FEE2E2',
        borderTop: '2px solid #EF4444',
        borderBottom: '2px solid #EF4444',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '20px' }}>⚠️</span>
        <div>
          <p style={{ fontSize: '14px', fontWeight: '600', color: '#991B1B', margin: 0 }}>
            {locale === 'he' ? 'מצוקות דחוף' : 'Emergency'}
          </p>
          <p style={{ fontSize: '12px', color: '#7F1D1D', margin: '4px 0 0 0' }}>
            {locale === 'he' ? 'זמין 24/7 לכל בעיה דנטלית דחופה' : 'Available 24/7 for urgent dental issues'}
          </p>
        </div>
      </div>
      <a href="tel:04-640-5020" style={{ textDecoration: 'none' }}>
        <button
          style={{
            backgroundColor: '#EF4444',
            color: 'white',
            padding: '8px 16px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: '600',
            whiteSpace: 'nowrap',
            transition: 'all 0.15s cubic-bezier(0.5, 0.25, 0.35, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.9';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
        >
          {locale === 'he' ? 'התקשרו עכשיו' : 'Call Now'}
        </button>
      </a>
    </div>
  );
}
