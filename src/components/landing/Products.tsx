import { useLocale } from '@/i18n/useLocale';
import { useState } from 'react';

export function Products() {
  const { locale } = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const services = locale === 'he' ? [
    'בחר שירות',
    'השתלות שיניים',
    'אסתטיקה דנטלית',
    'טיפולי שורש',
    'הלבנת שיניים',
    'טיפול דחוף',
    'טיפול לילדים',
    'עיצוב חיוך',
    'ניקוי ומניעה',
  ] : [
    'Select a service',
    'Dental Implants',
    'Cosmetic Dentistry',
    'Root Canals',
    'Teeth Whitening',
    'Emergency Care',
    'Pediatric Care',
    'Smile Design',
    'Prevention & Cleaning',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `שלום, אני רוצה לקבוע ביקור:
שם: ${formData.name}
טלפון: ${formData.phone}
אימייל: ${formData.email}
שירות: ${formData.service}
תאריך: ${formData.date}
שעה: ${formData.time}
הערה: ${formData.message}`;

    const whatsappUrl = `https://wa.me/972464050020?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="booking"
      style={{
        padding: '96px 24px',
        backgroundColor: 'var(--surface)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="max-w-content mx-auto" style={{ maxWidth: '600px' }}>
        <h2
          style={{
            fontSize: '48px',
            fontFamily: 'Georgia, serif',
            fontWeight: '700',
            marginBottom: '12px',
            textAlign: locale === 'he' ? 'right' : 'left',
          }}
        >
          {locale === 'he' ? 'קביעת תור' : 'Book an Appointment'}
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
            ? 'מלא את הטופס למטה ואנחנו ניצור איתך קשר בקרוב'
            : 'Fill out the form below and we\'ll contact you soon'}
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>
              {locale === 'he' ? 'שם מלא' : 'Full Name'}
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid var(--border)',
                borderRadius: '7px',
                fontSize: '14px',
                backgroundColor: 'var(--background)',
                color: 'var(--text-primary)',
                boxSizing: 'border-box',
                transition: 'border-color 0.15s',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#0070f3')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
              placeholder={locale === 'he' ? 'יוחנן כהן' : 'John Smith'}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>
              {locale === 'he' ? 'טלפון' : 'Phone'}
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid var(--border)',
                borderRadius: '7px',
                fontSize: '14px',
                backgroundColor: 'var(--background)',
                color: 'var(--text-primary)',
                boxSizing: 'border-box',
                transition: 'border-color 0.15s',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#0070f3')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
              placeholder="050-1234567"
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>
              {locale === 'he' ? 'אימייל' : 'Email'}
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid var(--border)',
                borderRadius: '7px',
                fontSize: '14px',
                backgroundColor: 'var(--background)',
                color: 'var(--text-primary)',
                boxSizing: 'border-box',
                transition: 'border-color 0.15s',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#0070f3')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>
              {locale === 'he' ? 'שירות' : 'Service'}
            </label>
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid var(--border)',
                borderRadius: '7px',
                fontSize: '14px',
                backgroundColor: 'var(--background)',
                color: 'var(--text-primary)',
                boxSizing: 'border-box',
              }}
            >
              {services.map((service, idx) => (
                <option key={idx} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>
              {locale === 'he' ? 'תאריך' : 'Preferred Date'}
            </label>
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid var(--border)',
                borderRadius: '7px',
                fontSize: '14px',
                backgroundColor: 'var(--background)',
                color: 'var(--text-primary)',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>
              {locale === 'he' ? 'שעה' : 'Preferred Time'}
            </label>
            <input
              type="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid var(--border)',
                borderRadius: '7px',
                fontSize: '14px',
                backgroundColor: 'var(--background)',
                color: 'var(--text-primary)',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>
              {locale === 'he' ? 'הערות' : 'Additional Notes'}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid var(--border)',
                borderRadius: '7px',
                fontSize: '14px',
                backgroundColor: 'var(--background)',
                color: 'var(--text-primary)',
                boxSizing: 'border-box',
                minHeight: '100px',
                fontFamily: 'Geist, sans-serif',
              }}
              placeholder={locale === 'he' ? 'כתוב כל דבר נוסף...' : 'Write anything additional...'}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '14px 28px',
              backgroundColor: '#25d366',
              color: 'white',
              border: 'none',
              borderRadius: '7px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.15s cubic-bezier(0.5, 0.25, 0.35, 1)',
              marginTop: '12px',
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
            {locale === 'he' ? 'שלח בWhatsApp' : 'Send via WhatsApp'}
          </button>
        </form>

        <p style={{ fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center', marginTop: '24px' }}>
          {locale === 'he'
            ? 'נוכל לאשר את התור שלך דרך WhatsApp'
            : 'We will confirm your appointment via WhatsApp'}
        </p>
      </div>
    </section>
  );
}
