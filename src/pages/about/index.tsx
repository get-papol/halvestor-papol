import { NextSeo } from 'next-seo';
import Page from '@/components/page';

export default function About() {
  return (
    <Page>
      <NextSeo
        title="About Halvestor"
        description="Learn more about Halvestor, our mission, and our commitment to Sharia-compliant investing."
      />

      <main className="max-w-5xl mx-auto px-6 py-16">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-900">About Halvestor</h1>

          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Halvestor is the first Sharia-compliant investment platform designed specifically for Muslim investors. Our
            goal is to make halal investing simple, transparent, and accessible to everyone.
          </p>

          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed mb-6">
            We are committed to ensuring that every investment offered through Halvestor is reviewed and screened
            according to Islamic financial principles. Compliance, ethics, and transparency are at the heart of what we
            do.
          </p>

          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Our mission is to empower Muslim investors globally with trustworthy halal investment tools and knowledge
            for building a secure financial future.
          </p>
        </section>

        {/* Optional additional sections can be added here without changing header */}
      </main>
    </Page>
  );
}
