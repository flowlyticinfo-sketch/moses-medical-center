import { useLocale } from '@/i18n/useLocale';
import { useTheme } from '@/i18n/useThemeHook';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  ImplantIcon,
  RootCanalIcon,
  WhiteningIcon,
  ToothIcon,
  ClockIcon,
  SmileIcon,
  ChildrenIcon,
  CleaningIcon,
  EmergencyIcon,
} from './icons/DentalIcons';

export function Services() {
  const { t, locale } = useLocale();
  const { theme } = useTheme();
  const containerRef = useScrollReveal();

  const services = locale === 'he' ? [
    { number: '01', title: 'השתלות שיניים', description: 'טכנולוגיה מתקדמת להשתלות קבועות וטבעיות', icon: ImplantIcon },
    { number: '02', title: 'אסתטיקה דנטלית', description: 'שיפור מראה החיוך עם טיפולים אסתטיים מתקדמים', icon: WhiteningIcon },
    { number: '03', title: 'טיפולי שורש', description: 'שמירה על השן בטיפול דחוף ויעיל', icon: RootCanalIcon },
    { number: '04', title: 'הלבנת שיניים', description: 'שיניים לבנות וברוקות בטוח וקבוע', icon: WhiteningIcon },
    { number: '05', title: 'טיפול דחוף', description: 'זמינות 24/7 בשעות חירום וכאבים חריפים', icon: EmergencyIcon },
    { number: '06', title: 'טיפול לילדים', description: 'סביבה נוחה וצוות מיוחד לילדים', icon: ChildrenIcon },
    { number: '07', title: 'עיצוב חיוך', description: 'ייעוץ מקצועי וממוקד לחיוך מושלם', icon: SmileIcon },
    { number: '08', title: 'ניקוי ומניעה', description: 'בדיקה שנתית מלאה וניקוי מקצועי', icon: CleaningIcon },
  ] : [
    { number: '01', title: 'Dental Implants', description: 'Advanced technology for permanent and natural teeth', icon: ImplantIcon },
    { number: '02', title: 'Cosmetic Dentistry', description: 'Enhance your smile with advanced cosmetic treatments', icon: WhiteningIcon },
    { number: '03', title: 'Root Canals', description: 'Preserve your tooth with effective treatment', icon: RootCanalIcon },
    { number: '04', title: 'Teeth Whitening', description: 'Safe and effective tooth whitening solutions', icon: WhiteningIcon },
    { number: '05', title: 'Emergency Care', description: '24/7 availability for urgent dental issues', icon: EmergencyIcon },
    { number: '06', title: 'Pediatric Care', description: 'Comfortable environment for children', icon: ChildrenIcon },
    { number: '07', title: 'Smile Design', description: 'Professional consultation for your perfect smile', icon: SmileIcon },
    { number: '08', title: 'Prevention & Cleaning', description: 'Annual checkups and professional cleaning', icon: CleaningIcon },
  ];

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
            {locale === 'he' ? 'שירותים' : 'Services'}
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
          {locale === 'he' ? 'שמונה תחומים, מכבית אחת, שמכיר אתכם' : 'Eight Specialties, One Clinic, That Knows You'}
        </h2>

        {/* Cards Grid */}
        <div
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {services.map((item: any, idx: number) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="group transition-all duration-300"
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '7px',
                  padding: '24px',
                  cursor: 'pointer',
                  transitionProperty: 'box-shadow, border-color, transform',
                  transitionDuration: '0.15s',
                  transitionTimingFunction: 'cubic-bezier(0.5, 0.25, 0.35, 1)',
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
                {/* Icon */}
                <div style={{ marginBottom: '16px' }}>
                  <IconComponent />
                </div>

                {/* Number */}
                <div
                  style={{
                    fontSize: '12px',
                    fontFamily: 'Geist, sans-serif',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '12px',
                  }}
                >
                  {item.number}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '16px',
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
                    fontSize: '13px',
                    fontFamily: 'Geist, sans-serif',
                    fontWeight: 400,
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                    marginBottom: '16px',
                  }}
                >
                  {item.description}
                </p>

                {/* Booking Link */}
                <a href="#booking" style={{ color: '#0070f3', textDecoration: 'none', fontSize: '12px', fontWeight: '600' }}>
                  {locale === 'he' ? 'קביעת חור →' : 'Book →'}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
