import { NextSeo } from 'next-seo';
import Page from '@/components/page';

export default function About() {
  return (
    <Page>
      <NextSeo
        title="About Halvestor"
        description="Learn how Halvestor helps Muslim investors grow wealth with confidence, transparency, and full Sharia compliance."
      />

      <main className="py-24 px-6">
        {/* BLUE CONTAINER BOX */}
        <section className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-b from-[#0b4f78] to-[#083a5c] px-8 py-20 text-center shadow-xl">
          {/* Header */}
          <p className="text-sm uppercase tracking-widest text-blue-200 mb-4">Our Platform</p>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Halvestor</h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-16">
            Halvestor is a Sharia-compliant investment platform built to serve the unique needs of Muslim investors.
            Traditional investment platforms often leave Muslims choosing between financial growth and faith alignment.
            Halvestor removes that conflict by offering a dedicated, transparent, and values-driven approach to
            investing. Every feature we build is designed to provide clarity, trust, and long-term confidence while
            ensuring full compliance with Islamic financial principles.
          </p>

          {/* INFO CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Mission */}
            <div className="rounded-2xl bg-white/10 border border-white/20 p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed">
                To make halal investing simple, transparent, and accessible. We empower Muslim investors worldwide with
                tools and knowledge that align financial growth with Islamic values.
              </p>
            </div>

            {/* Why Halvestor */}
            <div className="rounded-2xl bg-white/10 border border-white/20 p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Why Halvestor</h3>
              <p className="text-blue-100 leading-relaxed">
                Halvestor was built specifically for Sharia compliance. Every investment is screened using recognized
                Islamic finance standards so investors always understand what is halal and why.
              </p>
            </div>

            {/* Principles */}
            <div className="rounded-2xl bg-white/10 border border-white/20 p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Principles</h3>
              <p className="text-blue-100 leading-relaxed">
                Transparency, ethics, and trust guide everything we do. We prioritize faith alignment, long-term value,
                and investor confidence in every decision.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Page>
  );
}
