// src/components/feature-section/index.tsx
import React from 'react';

const CheckIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" aria-hidden>
    <path d="M5 13l4 4L19 7" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FeatureSection: React.FC = () => {
  // design tokens used inline to avoid depending on tailwind config updates
  const textColor = '#e1dfdb';
  const headerBlue = '#1172af';
  const headerBlueDark = '#0e5f96';

  const surfaceInnerStyle: React.CSSProperties = {
    // elegant blue-tinted dark surface derived from the header color
    background: `linear-gradient(180deg, rgba(17,114,175,0.08), rgba(17,114,175,0.04)), linear-gradient(180deg, ${headerBlueDark}, #0b1c28)`,
    color: textColor,
    borderRadius: '0 0 24px 24px',
    minHeight: 220,
  };

  const cardStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.02)', // subtle translucent card
    border: `1px solid rgba(17,114,175,0.22)`, // blue-tinted border
    borderRadius: 12,
  };

  const headingClass = 'text-4xl lg:text-5xl font-bold tracking-tight';
  const subtitleClass = 'mt-4 text-lg max-w-3xl mx-auto';

  return (
    <section className="bg-transparent py-20">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* surface card wrapper */}
        <div className="surface-card">
          {/* thin accent bar using primary->secondary gradient */}
          <div
            className="surface-accent"
            aria-hidden
            style={{ background: `linear-gradient(90deg, #3b84f6, ${headerBlue})` }}
          />
          <div className="surface-inner" style={surfaceInnerStyle}>
            <div className="container mx-auto px-6">
              <div className="mb-12 text-center">
                <h4
                  className="text-base font-semibold tracking-wide uppercase"
                  style={{ color: textColor, opacity: 0.95 }}
                >
                  Our Solution
                </h4>

                <p className={`${headingClass} mt-2`} style={{ color: textColor }}>
                  How Halvestor Changes the Game
                </p>

                <p className={`${subtitleClass} text-center`} style={{ color: '#8493aaff' }}>
                  We&apos;ve built the first platform specifically designed for Muslim investors, addressing every
                  challenge you face.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 transition-shadow" style={cardStyle}>
                  <div className="flex items-center mb-4">
                    <CheckIcon />
                    <div className="ml-4 text-xl font-semibold" style={{ color: textColor }}>
                      100% Halal Verified
                    </div>
                  </div>
                  <p className="leading-relaxed" style={{ color: textColor, opacity: 0.95 }}>
                    Every investment option is pre-screened and certified as Sharia-compliant by Islamic finance
                    scholars.
                  </p>
                </div>

                <div className="p-6 transition-shadow" style={cardStyle}>
                  <div className="flex items-center mb-4">
                    <CheckIcon />
                    <div className="ml-4 text-xl font-semibold" style={{ color: textColor }}>
                      Complete Transparency
                    </div>
                  </div>
                  <p className="leading-relaxed" style={{ color: textColor, opacity: 0.95 }}>
                    See detailed information about company activities, board members, and business practices before
                    investing.
                  </p>
                </div>

                <div className="p-6 transition-shadow" style={cardStyle}>
                  <div className="flex items-center mb-4">
                    <CheckIcon />
                    <div className="ml-4 text-xl font-semibold" style={{ color: textColor }}>
                      No Hidden Fees
                    </div>
                  </div>
                  <p className="leading-relaxed" style={{ color: textColor, opacity: 0.95 }}>
                    Simple, transparent pricing with no subscription fees. Pay only when you invest, with competitive
                    rates.
                  </p>
                </div>

                <div className="p-6 transition-shadow" style={cardStyle}>
                  <div className="flex items-center mb-4">
                    <CheckIcon />
                    <div className="ml-4 text-xl font-semibold" style={{ color: textColor }}>
                      Expert Guidance
                    </div>
                  </div>
                  <p className="leading-relaxed" style={{ color: textColor, opacity: 0.95 }}>
                    Access to Islamic finance experts who can help you make informed investment decisions aligned with
                    your faith.
                  </p>
                </div>

                <div className="p-6 transition-shadow" style={cardStyle}>
                  <div className="flex items-center mb-4">
                    <CheckIcon />
                    <div className="ml-4 text-xl font-semibold" style={{ color: textColor }}>
                      Wide Selection
                    </div>
                  </div>
                  <p className="leading-relaxed" style={{ color: textColor, opacity: 0.95 }}>
                    Diverse portfolio of Sharia-compliant stocks, ETFs, and investment opportunities across various
                    sectors.
                  </p>
                </div>

                <div className="p-6 transition-shadow" style={cardStyle}>
                  <div className="flex items-center mb-4">
                    <CheckIcon />
                    <div className="ml-4 text-xl font-semibold" style={{ color: textColor }}>
                      Easy to Use
                    </div>
                  </div>
                  <p className="leading-relaxed" style={{ color: textColor, opacity: 0.95 }}>
                    Intuitive platform designed for both beginners and experienced investors with clear halal
                    indicators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end surface card */}
      </div>
    </section>
  );
};

export default FeatureSection;
