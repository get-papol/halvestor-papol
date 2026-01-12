import React from 'react';

const CheckIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" aria-hidden>
    <path d="M5 13l4 4L19 7" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FeatureSection: React.FC = () => {
  const textColor = '#e1dfdb';
  const headerBlue = '#1172af';
  const headerBlueDark = '#0e5f96';

  const surfaceInnerStyle: React.CSSProperties = {
    background: `linear-gradient(180deg, rgba(17,114,175,0.08), rgba(17,114,175,0.04)), linear-gradient(180deg, ${headerBlueDark}, #0b1c28)`,
    color: textColor,
    borderRadius: '0 0 24px 24px',
  };

  const cardStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.02)',
    border: `1px solid rgba(17,114,175,0.22)`,
    borderRadius: 12,
  };

  return (
    <section className="py-20 bg-cover bg-center" style={{ backgroundImage: "url('/about-bg.jpg')" }}>
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="surface-card">
          <div
            className="surface-accent"
            aria-hidden
            style={{ background: `linear-gradient(90deg, #3b84f6, ${headerBlue})` }}
          />
          <div className="surface-inner" style={surfaceInnerStyle}>
            <div className="container mx-auto px-6">
              <div className="mb-12 text-center">
                <h4 className="text-base font-semibold tracking-wide uppercase" style={{ color: textColor }}>
                  Our Solution
                </h4>
                <p className="text-4xl lg:text-5xl font-bold mt-2" style={{ color: textColor }}>
                  How Halvestor Changes the Game
                </p>
                <p className="mt-4 text-lg max-w-3xl mx-auto text-center" style={{ color: '#8493aa' }}>
                  We&apos;ve built the first platform specifically designed for Muslim investors, addressing every
                  challenge you face.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  '100% Halal Verified',
                  'Complete Transparency',
                  'No Hidden Fees',
                  'Expert Guidance',
                  'Wide Selection',
                  'Easy to Use',
                ].map((title, i) => (
                  <div key={i} className="p-6 transition-shadow" style={cardStyle}>
                    <div className="flex items-center mb-4">
                      <CheckIcon />
                      <div className="ml-4 text-xl font-semibold" style={{ color: textColor }}>
                        {title}
                      </div>
                    </div>
                    <p className="leading-relaxed" style={{ color: textColor, opacity: 0.95 }}>
                      {title === '100% Halal Verified' &&
                        'Every investment option is pre-screened and certified as Sharia-compliant by Islamic finance scholars.'}
                      {title === 'Complete Transparency' &&
                        'See detailed information about company activities, board members, and business practices before investing.'}
                      {title === 'No Hidden Fees' &&
                        'Simple, transparent pricing with no subscription fees. Pay only when you invest.'}
                      {title === 'Expert Guidance' &&
                        'Access to Islamic finance experts who can help you make informed decisions.'}
                      {title === 'Wide Selection' &&
                        'Diverse portfolio of Sharia-compliant stocks, ETFs, and opportunities.'}
                      {title === 'Easy to Use' &&
                        'Intuitive platform designed for both beginners and experienced investors.'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
