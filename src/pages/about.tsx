// /pages/about.tsx

import { NextSeo } from 'next-seo';
import Page from '@/components/page';

export default function About() {
  return (
    <Page>
      <NextSeo
        title="About Halvestor"
        description="Learn more about Halvestor, our mission, and our commitment to Sharia-compliant investing."
      />

      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* MAIN BLUE CONTAINER */}
        <section className="rounded-[36px] bg-gradient-to-b from-[#0b5e8c] to-[#083a5c] px-10 md:px-20 py-20 text-center">
          {/* MAIN HEADING */}
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-100 mb-6">About Halvestor</h1>

          {/* DESCRIPTION PARAGRAPH */}
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-14">
            Halvestor was created to remove uncertainty from halal investing. We exist to help Muslim investors
            confidently grow their wealth through a platform that combines strict Sharia compliance, modern investment
            tools, and complete transparency. By screening every investment against established Islamic finance
            standards and clearly explaining how decisions are made, Halvestor empowers investors to build long-term
            financial security without compromising faith, values, or ethics.
          </p>

          {/* INFO CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="rounded-2xl bg-white/10 border border-white/15 px-8 py-10 text-left">
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To make halal investing simple, transparent, and accessible by giving Muslim investors trusted tools and
                clear insights aligned with Islamic financial principles.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 border border-white/15 px-8 py-10 text-left">
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Why Halvestor</h3>
              <p className="text-gray-300 leading-relaxed">
                Most investment platforms are not designed for Sharia compliance. Halvestor removes doubt by applying
                certified screening methodologies to every opportunity.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 border border-white/15 px-8 py-10 text-left">
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Our Principles</h3>
              <p className="text-gray-300 leading-relaxed">
                Transparency, ethics, and trust guide everything we build. Every decision prioritizes faith alignment,
                long-term value, and investor confidence.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Page>
  );
}
