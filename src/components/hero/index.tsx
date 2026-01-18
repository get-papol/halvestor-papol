import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ backgroundColor: '#eaf4fb' }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0b4f78] leading-tight">
          Invest According to Your Faith
        </h1>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-[#1e6fa8]">
          The first platform designed for Sharia-compliant investing. Discover ethical investment opportunities with
          clarity, transparency, and full compliance.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-lg bg-[#1172af] px-8 py-4 text-base font-semibold text-white hover:bg-[#0e5f96] transition"
          >
            Join the Waitlist
          </Link>

          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg border-2 border-[#1172af] px-8 py-4 text-base font-medium text-[#1172af] hover:bg-[#1172af] hover:text-white transition"
          >
            Learn More
          </a>
        </div>

        <p className="mt-10 text-sm text-[#4a7fa6]">Built for those seeking ethical and Sharia-aligned investing</p>
      </div>
    </section>
  );
}
