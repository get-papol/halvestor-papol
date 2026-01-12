// src/pages/privacy-policy.tsx

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

      <main
        className="py-20"
        style={{
          backgroundImage: "url('/about-bg.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">Privacy Policy & GDPR Notice</h1>
            <p className="text-sm text-secondary-600">Effective date: 27 April 2025 · Last updated: 27 April 2025</p>
          </div>

          <div className="space-y-10 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-secondary-200 p-8">
            <Section title="1. Introduction">
              Halvestor Limited (“Halvestor”, “we”, “our”, “us”) operates the Halvestor paper-trading mobile application
              and website. This policy explains what personal data we collect, how we use it, and your rights under UK
              GDPR.
            </Section>

            <Section title="2. Organisation Details">
              <ul className="list-disc pl-6 space-y-1">
                <li>Controller: Halvestor Limited (Company No. 15381418)</li>
                <li>Address: Flat 36, Clay Alto, Exhibition Way, Wembley, London HA9 0GS</li>
                <li>Contact: prosper@halvestor.com</li>
              </ul>
            </Section>

            <Section title="3. What Data We Collect">
              <ul className="list-disc pl-6 space-y-1">
                <li>Name, e-mail address, encrypted password</li>
                <li>Device and usage data (IP, OS, app actions, crash logs)</li>
                <li>Marketing consent preferences</li>
              </ul>
              <p className="mt-3 text-sm text-secondary-600">
                We do not collect payment data, identity documents, phone numbers, or real-time location.
              </p>
            </Section>

            <Section title="4. How We Use Your Data">
              To operate and secure the service, improve performance, send optional updates (if opted in), and report
              anonymised usage statistics. We never sell personal data.
            </Section>

            <Section title="5. Storage & Security">
              Data is stored on secure UK/EEA servers, encrypted in transit, with role-based access controls. Data is
              retained while your account is active and up to 24 months after last activity.
            </Section>

            <Section title="6. Your Rights">
              You may request access, correction, deletion, restriction, portability, or object to processing. Requests
              are handled within 30 days.
            </Section>

            <Section title="7. Cookies">
              We use essential and basic analytics cookies only. You can manage consent via the website banner.
            </Section>

            <Section title="8. Complaints">
              Supervisory authority: Information Commissioner’s Office (ICO), Wilmslow, UK.
            </Section>

            <div className="mt-12 rounded-xl bg-primary-50/90 border border-primary-200 p-6">
              <h3 className="text-lg font-semibold text-primary-700 mb-2">GDPR Fair-Processing Notice (Short Form)</h3>
              <p className="text-sm text-secondary-700 leading-relaxed">
                Controller: Halvestor Limited · Purpose: Operate a free stock-market simulation app · Data: Name,
                e-mail, password hash, device logs · Lawful basis: Consent & legitimate interest · Retention: 24 months
                after last activity · Contact: privacy@halvestor.com
              </p>
            </div>
          </div>
        </div>
      </main>
    </Page>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-secondary-900 mb-3">{title}</h2>
      <div className="text-secondary-700 leading-relaxed">{children}</div>
    </section>
  );
}
