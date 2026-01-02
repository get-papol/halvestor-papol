import { NextSeo } from 'next-seo';
import Page from '@/components/page';

export default function PrivacyPolicy() {
  return (
    <Page>
      <NextSeo
        title="Privacy Policy & GDPR Notice · Halvestor"
        description="Halvestor Privacy Policy and GDPR Fair-Processing Notice."
      />

      <main className="max-w-5xl mx-auto px-6 py-20 text-secondary-700">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
          Privacy Policy & GDPR Notice
        </h1>

        <p className="mb-6 text-sm text-secondary-500">
          Effective date: 27 April 2025 · Last updated: 27 April 2025
        </p>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-secondary-900">
            1. Introduction
          </h2>
          <p>
            Halvestor Limited (“Halvestor”, “we”, “our”, “us”) operates the Halvestor
            paper-trading application and website. This policy explains how we
            collect, use, and protect personal data.
          </p>

          <h2 className="text-2xl font-semibold text-secondary-900">
            2. Organisation Details
          </h2>
          <ul className="list-disc pl-6">
            <li>Controller: Halvestor Limited (Company No. 15381418)</li>
            <li>Address: Flat 36, Clay Alto, Exhibition Way, Wembley, London HA9 0GS</li>
            <li>Contact: prosper@halvestor.com</li>
          </ul>

          <h2 className="text-2xl font-semibold text-secondary-900">
            3. What Data We Collect
          </h2>
          <p>
            Name, e-mail address, encrypted password, device and usage data. We do
            not collect payment data, identity documents, or real-time geolocation.
          </p>

          <h2 className="text-2xl font-semibold text-secondary-900">
            4. How We Use Your Data
          </h2>
          <p>
            To operate and secure the service, improve performance, send optional
            updates, and report anonymised usage statistics.
          </p>

          <h2 className="text-2xl font-semibold text-secondary-900">
            5. Storage & Security
          </h2>
          <p>
            Data is stored on secure UK/EEA servers, encrypted in transit, with
            role-based access controls.
          </p>

          <h2 className="text-2xl font-semibold text-secondary-900">
            6. Your Rights
          </h2>
          <p>
            You have the right to access, correct, delete, restrict, or object to
            processing of your data. Requests can be sent to prosper@halvestor.com.
          </p>

          <h2 className="text-2xl font-semibold text-secondary-900">
            7. Contact & Complaints
          </h2>
          <p>
            Supervisory authority: Information Commissioner’s Office (ICO),
            Wilmslow, Cheshire, UK.
          </p>
        </section>
      </main>
    </Page>
  );
}
