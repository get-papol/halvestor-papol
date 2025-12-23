import { NextSeo } from 'next-seo';
import Page from '@/components/page';

export default function About() {
  return (
    <Page>
      <NextSeo
        title="About Halvestor"
        description="Learn more about Halvestor and our mission to make Sharia-compliant investing accessible."
      />

      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Heading */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">About Halvestor</h1>

          <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Halvestor is a purpose-built investment platform created to help Muslim investors grow wealth confidently
            while remaining fully aligned with Islamic financial principles.
          </p>
        </section>

        {/* Blue info box */}
        <section className="bg-[#0b4f78] rounded-3xl px-8 py-10 md:px-14 md:py-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-6">
              Investing as a Muslim often means navigating uncertainty, fragmented information, and constant doubt about
              whether investments truly align with Sharia principles. Halvestor was created to remove this complexity
              and replace it with clarity and trust.
            </p>

            <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-6">
              Every investment available on Halvestor is carefully screened using established Islamic finance standards.
              We focus on transparency, ethical practices, and long-term value creation so investors can make decisions
              with confidence and peace of mind.
            </p>

            <p className="text-base md:text-lg text-blue-100 leading-relaxed">
              Our mission is simple. Empower Muslim investors worldwide with tools, knowledge, and opportunities that
              respect faith while supporting sustainable financial growth.
            </p>
          </div>
        </section>
      </main>
    </Page>
  );
}
