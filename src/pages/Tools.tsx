import { Nav } from '@/components/landing/Nav';
import { Footer } from '@/components/landing/Footer';
import { useLocale } from '@/i18n/useLocale';
import { ArrowRight } from 'lucide-react';

const tools = [
  {
    id: 'random-name-generator',
    titleEn: 'Random Name Generator',
    titleHe: 'מחולל שמות אקראיים',
    descEn: 'Generate random names for babies, pets, and characters instantly.',
    descHe: 'צור שמות אקראיים לתינוקות, חיות מחמד דמויות במהירות.',
    icon: '👶',
    url: 'https://random.flowlytic.app',
  },
  {
    id: 'calorie-calculator',
    titleEn: 'Calorie Calculator',
    titleHe: 'מחשבון קלוריות',
    descEn: 'Calculate your daily caloric needs based on activity level and goals.',
    descHe: 'חשב את צרכי הקלוריות היומיות שלך בהתאם לרמת הפעילות והמטרות.',
    icon: '🔥',
    url: 'https://calorie.flowlytic.app',
  },
  {
    id: 'compound-interest-calculator',
    titleEn: 'Compound Interest Calculator',
    titleHe: 'מחשבון ריבית דריבית',
    descEn: 'Calculate compound interest with various frequencies and timeframes.',
    descHe: 'חשב ריבית דריבית בתדירויות ופרקי זמן שונים.',
    icon: '💰',
    url: 'https://compound.flowlytic.app',
  },
  {
    id: 'qr-code-generator',
    titleEn: 'QR Code Generator',
    titleHe: 'מחולל קוד QR',
    descEn: 'Create and download QR codes instantly from any URL or text.',
    descHe: 'צור והורד קודי QR מיד מכל כתובת URL או טקסט.',
    icon: '📱',
    url: 'https://qr.flowlytic.app',
  },
];

export default function Tools() {
  const { t, locale } = useLocale();

  return (
    <div style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)', transition: 'background 0.15s var(--ease), color 0.15s var(--ease)' }}>
      <Nav />
      <main
        className="px-6"
        style={{
          paddingTop: '128px',
          paddingBottom: '96px',
        }}
      >
        <div className="max-w-content mx-auto">
          {/* Header */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: '64px',
            }}
          >
            <h1
              style={{
                fontSize: 'clamp(56px, 8vw, 90px)',
                fontFamily: 'Georgia, serif',
                fontWeight: 700,
                lineHeight: 1.2,
                color: 'var(--text-primary)',
                marginBottom: '16px',
              }}
            >
              {locale === 'en' ? 'Free Tools' : 'כלים בחינם'}
            </h1>
            <p
              style={{
                fontSize: '14px',
                fontFamily: 'Geist, sans-serif',
                color: 'var(--text-muted)',
                maxWidth: '480px',
                margin: '0 auto',
                lineHeight: 1.5,
              }}
            >
              {locale === 'en'
                ? 'A collection of powerful, free tools to help with everyday tasks.'
                : 'אוסף של כלים חזקים וחינמיים שיעזרו בעבודות יומיומיות.'}
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool) => (
              <a
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-full"
              >
                <div
                  className="transition-all duration-300 h-full flex flex-col justify-between"
                  style={{
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '7px',
                    padding: '24px',
                  }}
                >
                  {/* Icon & Title */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '16px' }}>
                    <div style={{ fontSize: '48px' }}>{tool.icon}</div>
                    <h3
                      className="group-hover:text-[#0070f3] transition-colors"
                      style={{
                        fontSize: '20px',
                        fontFamily: 'Georgia, serif',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {locale === 'en' ? tool.titleEn : tool.titleHe}
                    </h3>
                    <p
                      style={{
                        fontSize: '14px',
                        fontFamily: 'Geist, sans-serif',
                        color: 'var(--text-muted)',
                        lineHeight: 1.5,
                      }}
                    >
                      {locale === 'en' ? tool.descEn : tool.descHe}
                    </p>
                  </div>

                  {/* CTA */}
                  <div
                    className="flex items-center group-hover:translate-x-1 transition-transform"
                    style={{
                      fontSize: '14px',
                      fontFamily: 'Geist, sans-serif',
                      fontWeight: 600,
                      color: '#0070f3',
                    }}
                  >
                    {locale === 'en' ? 'Open tool' : 'פתח כלי'}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
