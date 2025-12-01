// src/components/cases-section/index.tsx
import React from 'react';

const ArrowIcon = () => (
  <svg className="h-6 w-6 fill-current ml-2" viewBox="0 0 24 24">
    <path
      d="M5 12h14M12 5l7 7-7 7"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const articles = [
  {
    title: `Velit reprehenderit culpa Lorem reprehenderit excepteur ipsum esse.`,
    image: `/images/case-1.webp`,
    alt: `Proident pariatur est.`,
  },
  {
    title: `Velit reprehenderit culpa Lorem reprehenderit ipsum esse.`,
    image: `/images/case-2.webp`,
    alt: `Proident pariatur est.`,
  },
  {
    title: `Velit reprehenderit culpa Lorem reprehenderit excepteur esse.`,
    image: `/images/case-3.webp`,
    alt: `Proident pariatur est.`,
  },
];

export default function CasesSection() {
  // SAME TOKENS AS FEATURE-SECTION
  const textBody = '#E1DFDB';
  const headingColor = '#FFFFFF';
  const topBlue = '#3B84F6';
  const secBlue = '#1172AF';
  const deepNavy = '#0A2A3D';

  const surfaceStyle: React.CSSProperties = {
    background: `linear-gradient(180deg, rgba(59,132,246,0.12), rgba(17,114,175,0.06)),
                 linear-gradient(180deg, ${secBlue}, ${deepNavy})`,
    borderRadius: '0 0 24px 24px',
    paddingTop: '4rem',
    paddingBottom: '6rem',
  };

  const cardStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 12,
  };

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        {/* Entire matte surface wrapper */}
        <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ boxShadow: '0 24px 80px rgba(4,12,20,0.6)' }}>
          {/* Accent bar identical to Feature Section */}
          <div
            aria-hidden
            style={{
              height: 8,
              background: `linear-gradient(90deg, ${topBlue}, ${secBlue})`,
            }}
          />

          {/* Surface */}
          <div style={surfaceStyle}>
            <h1 className="text-center text-4xl lg:text-6xl font-bold" style={{ color: headingColor }}>
              What Will You Build?
            </h1>

            <p className="text-center text-lg max-w-2xl mx-auto mt-6" style={{ color: textBody }}>
              Don’t just take our word for it — see what leaders in digital are saying.
            </p>

            {/* Cards grid */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {articles.map((article) => (
                <div key={article.title} className="mx-auto w-full max-w-sm">
                  <div className="h-64 w-full rounded-lg overflow-hidden">
                    <img src={article.image} alt={article.alt} className="w-full h-full object-cover" />
                  </div>

                  <div className="p-5 mt-4" style={cardStyle}>
                    <p className="uppercase text-sm text-center mb-1" style={{ color: headingColor }}>
                      Case Study
                    </p>
                    <p className="text-sm text-center" style={{ color: textBody }}>
                      {article.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-center mt-10">
              <span className="flex items-center text-lg cursor-pointer font-medium" style={{ color: topBlue }}>
                See all case studies
                <ArrowIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
