import { NextSeo } from 'next-seo';
import Page from '@/components/page';

export default function About() {
  return (
    <Page>
      <NextSeo
        title="About Halvestor"
        description="Learn more about Halvestor and our approach to ethical, Sharia-compliant investing."
      />

      <main
        className="min-h-screen py-24"
        style={{
          backgroundImage: "url('/images/about-bg.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          {/* MAIN CONTENT BOX */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl px-10 py-14 shadow-xl">
            <h1 className="text-5xl font-semibold text-secondary-900 mb-6">About Halvestor</h1>

            <p className="text-lg text-secondary-700 leading-relaxed mb-8">
              Halvestor is a modern investment platform built to make Sharia-compliant and ethical investing accessible,
              transparent, and practical in today’s global markets. We are focused on empowering individuals who want
              their investments to align with their values—without sacrificing clarity, control, or confidence.
            </p>

            <p className="text-lg text-secondary-700 leading-relaxed mb-10">
              Our platform is designed around rigorous Sharia screening, clear reporting, and responsible wealth growth.
              Every investment opportunity is evaluated against established compliance criteria, supported by detailed
              insights into company activities, financial ratios, and purification considerations—so users can invest
              with peace of mind.
            </p>

            {/* INFO BOXES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-secondary-50 p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Ethical by Design</h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  Investments screened to align with ethical and Sharia-based financial principles.
                </p>
              </div>

              <div className="rounded-2xl bg-secondary-50 p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Transparent Process</h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  Clear insights into compliance checks, financial ratios, and investment decisions.
                </p>
              </div>

              <div className="rounded-2xl bg-secondary-50 p-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Built for the Future</h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  A scalable platform designed to support responsible investing globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Page>
  );
}
