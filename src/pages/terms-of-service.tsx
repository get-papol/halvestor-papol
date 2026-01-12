import { NextSeo } from 'next-seo';
import Page from '@/components/page';

export default function TermsOfService() {
  return (
    <Page>
      <NextSeo title="Terms of Service · Halvestor" description="Halvestor Terms of Use – paper-trading platform" />

      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900">Terms of Service</h1>
          <p className="mt-4 text-secondary-600">Version 1.0 · Effective 27 April 2025</p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-20 space-y-12 text-secondary-700">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-xl border border-secondary-200 shadow-sm p-8">
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">{section.title}</h3>
            <div className="space-y-3">{section.content}</div>
          </div>
        ))}
      </main>
    </Page>
  );
}

const sections = [
  {
    title: '1. What the App Is',
    content: (
      <p>
        Halvestor is a free stock-market simulation (“paper-trading”) application provided solely for educational
        purposes. No real money is deposited, traded, or withdrawn.
      </p>
    ),
  },
  {
    title: '2. Eligibility',
    content: (
      <p>
        You must be 18 years or older. The App is accessible worldwide, but you are responsible for compliance with any
        local laws that apply to you.
      </p>
    ),
  },
  {
    title: '3. Your Account',
    content: (
      <p>
        Create an account using your name and e-mail address. Keep your password confidential. You are responsible for
        all activity under your login.
      </p>
    ),
  },
  {
    title: '4. Intellectual Property',
    content: (
      <p>
        All software, text, graphics, and trademarks are owned by Halvestor Limited or its licensors. You may not copy,
        modify, distribute, or reverse-engineer any part of the App.
      </p>
    ),
  },
  {
    title: '5. Acceptable Use',
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Introduce malware or scrape the App</li>
        <li>Interfere with security or performance</li>
        <li>Post illegal, harassing, or defamatory content</li>
      </ul>
    ),
  },
  {
    title: '6. Shariah Compliance & Purification',
    content: (
      <p>
        Equities are screened under the AAOIFI standard under supervision of Mufti Humaid Zackey (CSAA). Screening is
        educational; religious decisions remain your responsibility. Purification calculations (≤ 5%) are simulated.
      </p>
    ),
  },
  {
    title: '7. No Advice',
    content: (
      <p>
        The App and all content are provided for informational and educational purposes only and do not constitute
        financial or legal advice.
      </p>
    ),
  },
  {
    title: '8. Disclaimer of Warranties',
    content: (
      <p>
        The App is provided “as is” without warranty of any kind. We do not guarantee uninterrupted service or
        error-free data.
      </p>
    ),
  },
  {
    title: '9. Limitation of Liability',
    content: (
      <p>
        Halvestor Limited’s total liability shall not exceed £10. We are not liable for indirect or consequential
        losses.
      </p>
    ),
  },
  {
    title: '10. Suspension & Termination',
    content: <p>We may suspend or terminate access if you breach these Terms or abuse the service.</p>,
  },
  {
    title: '11. Changes',
    content: <p>Material changes will be announced in-app or by e-mail at least 7 days before taking effect.</p>,
  },
  {
    title: '12. Governing Law',
    content: (
      <p>
        These Terms are governed by the laws of England and Wales. Disputes fall under exclusive English jurisdiction.
      </p>
    ),
  },
];
