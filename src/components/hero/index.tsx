import React from 'react';

// HERO component - drop-in replacement
// Background image: place your texture at `/public/images/bg-texture.jpg`
// (You uploaded a file locally at: /mnt/data/Gemini_Generated_Image_r3s8m7r3s8m7r3s8.jpeg)

export default function Hero({
  title = 'Invest According to Your Faith',
  subtitle = 'The first platform designed specifically for Muslim investors. Discover halal investment opportunities with complete transparency and religious compliance.',
  ctaPrimary = 'Start Investing',
  ctaPrimaryHref = '/signup',
  ctaSecondary = 'Learn More',
  ctaSecondaryHref = '#features',
} = {}) {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50"
    >
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 lg:py-40">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-secondary-900 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">{title}</h1>
          <p className="mt-6 text-secondary-600 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">{subtitle}</p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={ctaPrimaryHref}
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-primary-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200"
            >
              {ctaPrimary}
            </a>

            <a
              href={ctaSecondaryHref}
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary-600 px-8 py-4 text-base font-medium text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-200"
            >
              {ctaSecondary}
            </a>
          </div>

          <div className="mt-12 text-sm text-secondary-500">
            <span className="font-medium">Trusted by Muslim investors worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
