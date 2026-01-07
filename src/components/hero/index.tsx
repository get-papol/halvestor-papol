import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-secondary-900 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Invest According to Your Faith
        </h1>

        <p className="mt-6 text-secondary-600 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
          The first platform designed specifically for Muslim investors. Discover halal investment opportunities with
          complete transparency and religious compliance.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-primary-700 transition-all"
          >
            Start Investing
          </Link>

          <Link
            href="#features"
            className="inline-flex items-center justify-center rounded-lg border-2 border-primary-600 px-8 py-4 text-base font-medium text-primary-600 hover:bg-primary-600 hover:text-white transition-all"
          >
            Learn More
          </Link>
        </div>

        <div className="mt-12 text-sm text-secondary-500">Trusted by Muslim investors worldwide</div>
      </div>
    </section>
  );
}
