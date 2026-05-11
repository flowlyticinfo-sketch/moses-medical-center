import { useLocale } from '@/i18n/useLocale';
import { useEffect, useRef, useState } from 'react';

export function Features() {
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

  return (
    <section
      style={{
        padding: '96px 24px',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="max-w-content mx-auto">
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
            textAlign: locale === 'en' ? 'left' : 'right',
          }}
        >
          {t.features.title}
        </h2>

        {/* Features Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '48px',
          }}
        >
          {t.features.items.map((feature: any, idx: number) => (
            <div
              key={idx}
              ref={(el) => {
                if (el) cardsRef.current[idx] = el;
              }}
              className={`feature-card ${!visibleCards[idx] ? 'invisible' : ''}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                opacity: visibleCards[idx] ? 1 : 0,
                transform: visibleCards[idx] ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.95)',
                transition: 'opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              {/* Image */}
              <div
                style={{
                  borderRadius: '7px',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  transition: 'all 0.15s cubic-bezier(0.5, 0.25, 0.35, 1)',
                  cursor: 'pointer',
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
                <img
                  src={feature.image}
                  alt={feature.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'opacity 0.15s cubic-bezier(0.5, 0.25, 0.35, 1)',
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ textAlign: locale === 'en' ? 'left' : 'right' }}>
                <h3
                  style={{
                    fontSize: '24px',
                    fontFamily: 'Georgia, serif',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '12px',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    fontFamily: 'Geist, sans-serif',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
