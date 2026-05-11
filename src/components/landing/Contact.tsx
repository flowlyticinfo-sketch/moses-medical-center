import { useLocale } from '@/i18n/useLocale';

export function Contact() {
  const { locale } = useLocale();

  const googleMapsUrl = 'https://maps.google.com/?q=Mega%20Affula%20Building%20Afula%20Israel';

  return (
    <section
      id="contact"
      style={{
        padding: '96px 24px',
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
          {locale === 'he' ? 'צור קשר' : 'Contact Us'}
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
            ? 'אנחנו כאן כדי לענות לכל השאלות שלך'
            : 'We\'re here to answer all your questions'}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          <div style={{ textAlign: locale === 'he' ? 'right' : 'left' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)' }}>
              {locale === 'he' ? '📍 כתובת' : '📍 Address'}
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: '8px 0' }}>
              היזמויות עפולה
            </p>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'none', fontSize: '13px' }}>
              {locale === 'he' ? 'הצג במפה' : 'View on Map'} →
            </a>
          </div>

          <div style={{ textAlign: locale === 'he' ? 'right' : 'left' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)' }}>
              {locale === 'he' ? '📞 טלפון' : '📞 Phone'}
            </h3>
            <a href="tel:04-640-5020" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px', display: 'block', marginBottom: '8px' }}>
              04-640-5020
            </a>
            <a href="https://wa.me/972464050020" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'none', fontSize: '13px' }}>
              {locale === 'he' ? 'צ\'ט בWhatsApp' : 'Chat on WhatsApp'} →
            </a>
          </div>

          <div style={{ textAlign: locale === 'he' ? 'right' : 'left' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)' }}>
              {locale === 'he' ? '⏰ שעות פתיחה' : '⏰ Hours'}
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: '4px 0' }}>
              {locale === 'he' ? 'ראשון - חמישי: 09:00-17:00' : 'Sun-Thu: 09:00-17:00'}
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: '4px 0' }}>
              {locale === 'he' ? 'שישי - שבת: סגור' : 'Fri-Sat: Closed'}
            </p>
          </div>
        </div>

        <div
          style={{
            width: '100%',
            height: '400px',
            borderRadius: '7px',
            border: '1px solid var(--border)',
            overflow: 'hidden',
            marginTop: '48px',
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.0!2d35.268!3d32.61!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c5e5e5e5e5e5d%3A0x5e5e5e5e5e5e5e5e!2s%D7%94%D7%99%D7%96%D7%9E%D7%95%D7%99%D7%95%D7%AA%20%D7%A2%D7%A4%D7%95%D7%9C%D7%94!5e0!3m2!1she!2sil!4v1234567890"
            style={{ width: '100%', height: '100%', border: 'none' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location"
          />
        </div>
      </div>
    </section>
  );
}
