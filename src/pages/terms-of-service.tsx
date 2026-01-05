import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <Page>
      <NextSeo
        title="Privacy Policy & GDPR Notice · Halvestor"
        description="Halvestor Privacy Policy and GDPR Fair-Processing Notice"
      />

      <main className="bg-secondary-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy & GDPR Notice</h1>
          <p className="text-sm mb-10">Effective date: 27 April 2025 · Last updated: 27 April 2025</p>

          <Section title="1. Introduction">Halvestor Limited (“Halvestor”) operates a paper-trading platform.</Section>

          <Section title="2. Organisation Details">
            <ul className="list-disc pl-6">
              <li>Controller: Halvestor Limited</li>
              <li>Address: Wembley, London, UK</li>
              <li>Contact: prosper@halvestor.com</li>
            </ul>
          </Section>

          <Section title="3. Data We Collect">Name, email, password hash, and usage data.</Section>

          <Section title="4. Your Rights">You may request access, correction, or deletion of your data.</Section>
        </div>
      </main>
    </Page>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
