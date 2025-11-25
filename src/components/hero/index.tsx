import React from 'react';

// HERO component - drop-in replacement
// Background image: place your texture at `/public/images/bg-texture.jpg`
// (You uploaded a file locally at: /mnt/data/Gemini_Generated_Image_r3s8m7r3s8m7r3s8.jpeg)

export default function Hero({
  title = 'We build growth systems that scale revenue',
  subtitle = 'Unified GTM, RevOps, and automation. Focus on strategy. We handle the execution.',
  ctaPrimary = 'Get a demo',
  ctaPrimaryHref = '#',
  ctaSecondary = 'See pricing',
  ctaSecondaryHref = '#',
} = {}) {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg-texture.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 lg:py-40">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">{title}</h1>
          <p className="mt-6 text-gray-100 text-base sm:text-lg md:text-xl">{subtitle}</p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={ctaPrimaryHref}
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-md hover:shadow-lg focus:outline-none"
            >
              {ctaPrimary}
            </a>

            <a
              href={ctaSecondaryHref}
              className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              {ctaSecondary}
            </a>
          </div>

          <div className="mt-8 text-sm text-white/80">
            <span className="font-medium">Trusted by:</span>
            <div className="mt-3 flex items-center justify-center gap-6 flex-wrap opacity-90">
              <span className="px-3 py-1 bg-white/10 rounded">Company A</span>
              <span className="px-3 py-1 bg-white/10 rounded">Company B</span>
              <span className="px-3 py-1 bg-white/10 rounded">Company C</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
