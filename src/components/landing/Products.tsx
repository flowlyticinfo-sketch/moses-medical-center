import { useLocale } from '@/i18n/useLocale';
import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    gtag?: (event: string, eventName: string, eventParams?: Record<string, any>) => void;
  }
}

export function Products() {
  const { t, locale } = useLocale();
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 100);
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const handleCTAClick = () => {
    // Track GTM event
    if (window.gtag) {
      window.gtag('event', 'products_cta_click', {
        event_category: 'engagement',
        event_label: t.products.cta,
      });
    }

    // Scroll to project brief form
    const element = document.getElementById('project-brief');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Focus on name input after scroll
      setTimeout(() => {
        const nameInput = element.querySelector('input[name="name"]') as HTMLInputElement;
        if (nameInput) {
          nameInput.focus();
        }
      }, 500);
    }
  };

  return (
    <section
      style={{
        padding: '96px 24px',
        borderTop: '1px solid var(--border)',
      }}
    >
      <style>{`
        @keyframes cardEnter {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .product-card {
          animation: cardEnter 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .product-card.invisible {
          opacity: 0;
          transform: translateY(24px) scale(0.95);
        }
      `}</style>
      <div className="max-w-content mx-auto">
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: '72px',
              fontFamily: 'Georgia, serif',
              fontWeight: 700,
              lineHeight: 1.2,
              color: 'var(--text-primary)',
              marginBottom: '24px',
              textAlign: locale === 'en' ? 'left' : 'right',
            }}
          >
            {t.products.title}
          </h2>
          <p
            style={{
              fontSize: '18px',
              fontFamily: 'Geist, sans-serif',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              maxWidth: '600px',
              textAlign: locale === 'en' ? 'left' : 'right',
            }}
          >
            {t.products.subtitle}
          </p>
        </div>

        {/* Product Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '64px',
          }}
        >
          {t.products.items.map((product: any, index: number) => (
            <div
              key={product.name}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`product-card ${!visibleCards[index] ? 'invisible' : ''}`}
              style={{
                padding: '32px 24px',
                border: '1px solid var(--border)',
                borderRadius: '7px',
                backgroundColor: 'var(--background)',
                transition: 'all 0.15s cubic-bezier(0.5, 0.25, 0.35, 1)',
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                textAlign: locale === 'en' ? 'left' : 'right',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                role="img"
                aria-label={product.name}
              >
                {/* Meal Plans - Plate icon */}
                {(product.name.includes('Meal') || product.name.includes('ארוחות')) && (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <g>
                      <circle cx="24" cy="24" r="14" stroke="var(--text-primary)" strokeWidth="2"/>
                      <path d="M24 10v28M10 24h28" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="24" cy="17" r="2" fill="var(--text-primary)"/>
                      <circle cx="31" cy="24" r="2" fill="var(--text-primary)"/>
                      <circle cx="24" cy="31" r="2" fill="var(--text-primary)"/>
                    </g>
                  </svg>
                )}
                {/* Lead Manager - Funnel icon */}
                {(product.name.includes('Lead') || product.name.includes('לידים')) && (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <g>
                      <path d="M8 10h32v8L24 32l-16-14v-8Z" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20 32v10M28 32v10" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                  </svg>
                )}
                {/* Salon - Calendar/Schedule icon */}
                {(product.name.includes('Salon') || product.name.includes('סלונים')) && (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <g>
                      <rect x="10" y="12" width="28" height="28" rx="2" stroke="var(--text-primary)" strokeWidth="2"/>
                      <path d="M14 12v-4M34 12v-4M10 20h28" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="16" cy="28" r="1.5" fill="var(--text-primary)"/>
                      <circle cx="24" cy="28" r="1.5" fill="var(--text-primary)"/>
                      <circle cx="32" cy="28" r="1.5" fill="var(--text-primary)"/>
                      <circle cx="16" cy="36" r="1.5" fill="var(--text-primary)"/>
                      <circle cx="24" cy="36" r="1.5" fill="var(--text-primary)"/>
                      <circle cx="32" cy="36" r="1.5" fill="var(--text-primary)"/>
                    </g>
                  </svg>
                )}
                {/* Clinic - Stethoscope icon */}
                {(product.name.includes('Clinic') || product.name.includes('קליניקה')) && (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <g>
                      <path d="M14 16c-4.4 0-8 3.6-8 8s3.6 8 8 8M34 16c4.4 0 8 3.6 8 8s-3.6 8-8 8M14 24h20M14 24c0 5.5 4.5 10 10 10s10-4.5 10-10" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M24 8v8" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round"/>
                    </g>
                  </svg>
                )}
              </div>

              {/* Product Name */}
              <h3
                style={{
                  fontSize: '18px',
                  fontFamily: 'Georgia, serif',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: 1.2,
                }}
              >
                {product.name}
              </h3>

              {/* Industry Label */}
              <p
                style={{
                  fontSize: '12px',
                  fontFamily: 'Geist, sans-serif',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontWeight: 500,
                }}
              >
                {product.industry}
              </p>

              {/* Description */}
              <p
                style={{
                  fontSize: '14px',
                  fontFamily: 'Geist, sans-serif',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                }}
              >
                {product.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          style={{
            textAlign: 'center',
            direction: locale === 'en' ? 'ltr' : 'rtl',
          }}
        >
          <p
            style={{
              fontSize: '18px',
              fontFamily: 'Geist, sans-serif',
              color: 'var(--text-primary)',
              marginBottom: '24px',
              fontWeight: 500,
            }}
          >
            {t.products.pattern}
          </p>
          <button
            onClick={handleCTAClick}
            aria-label={`${t.products.cta} - scroll to project brief form`}
            style={{
              padding: '12px 32px',
              fontSize: '16px',
              fontFamily: 'Geist, sans-serif',
              fontWeight: 600,
              color: 'var(--button-text, white)',
              backgroundColor: 'var(--button-bg, #000)',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.15s cubic-bezier(0.5, 0.25, 0.35, 1)',
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
            {t.products.cta}
          </button>
          <p
            style={{
              fontSize: '12px',
              fontFamily: 'Geist, sans-serif',
              color: 'var(--text-muted)',
              marginTop: '16px',
            }}
          >
            {t.products.secondary}
          </p>
        </div>
      </div>
    </section>
  );
}
