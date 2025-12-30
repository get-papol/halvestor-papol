import Page from '@/components/page';
import { NextSeo } from 'next-seo';

export default function TermsOfService() {
  return (
    <Page>
      <NextSeo
        title="Terms of Service · Halvestor"
        description="Halvestor Terms of Service. Educational paper-trading platform terms."
      />

      <main className="max-w-5xl mx-auto px-6 py-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">Terms of Service</h1>
          <p className="text-secondary-600 text-lg">HALVESTOR — TERMS OF USE</p>
          <p className="text-secondary-500 text-sm mt-2">Version 1.0 · Effective 27 April 2025</p>
        </header>

        <section className="bg-white rounded-2xl border border-secondary-200 p-8 space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-secondary-900 mb-2">Company Information</h2>
            <ul className="text-secondary-600 space-y-1">
              <li>
                <strong>Operator:</strong> Halvestor Limited (Company No. 15381418)
              </li>
              <li>
                <strong>Registered Address:</strong> Flat 36, Clay Alto, Exhibition Way, Wembley, London HA9 0GS, UK
              </li>
              <li>
                <strong>Contact:</strong> prosper@halvestor.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">1. What the App Is</h3>
            <p className="text-secondary-600">
              Halvestor is a free stock-market simulation (“paper-trading”) application provided solely for educational
              purposes. No real money is deposited, traded, or withdrawn.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">2. Eligibility</h3>
            <p className="text-secondary-600">
              You must be 18 years or older. The App is accessible worldwide, but you are responsible for compliance
              with any local laws that apply to you.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">3. Your Account</h3>
            <p className="text-secondary-600">
              Create an account using your name and e-mail address. Keep your password confidential. You are responsible
              for all activity under your login. Contact us immediately if you suspect unauthorised use.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">4. Intellectual Property</h3>
            <p className="text-secondary-600">
              All software, text, graphics, and trademarks are owned by Halvestor Limited or its licensors. You may not
              copy, modify, distribute, or reverse-engineer any part of the App.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">5. Acceptable Use</h3>
            <ul className="list-disc list-inside text-secondary-600 space-y-1">
              <li>Introduce malware or scrape the App</li>
              <li>Interfere with security or performance</li>
              <li>Post illegal, harassing, or defamatory content</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">6. Shariah Compliance &amp; Purification</h3>
            <p className="text-secondary-600">
              The App screens equities against the AAOIFI standard under the supervision of Mufti Humaid Zackey (CSAA).
              Screening is educational; you remain responsible for your own religious and investment decisions. Profits
              in the simulation are subject to an automatic purification calculation (≤ 5%). No real donations are
              processed.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">7. No Advice</h3>
            <p className="text-secondary-600">
              The App and all content are provided for informational and educational purposes only and do not constitute
              financial, investment, or legal advice.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">8. Disclaimer of Warranties</h3>
            <p className="text-secondary-600">
              The App is provided “as is” without warranty of any kind. We do not guarantee uninterrupted service or
              error-free market data.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">9. Limitation of Liability</h3>
            <p className="text-secondary-600">
              To the fullest extent permitted by law, Halvestor Limited’s total aggregate liability shall not exceed
              £10. We are not liable for indirect or consequential losses.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">10. Suspension &amp; Termination</h3>
            <p className="text-secondary-600">
              We may suspend or terminate your access if you breach these Terms or abuse the service.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">11. Changes</h3>
            <p className="text-secondary-600">
              We may update these Terms. Material changes will be announced in-app or by e-mail seven days before they
              take effect.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">12. Governing Law</h3>
            <p className="text-secondary-600">
              These Terms are governed by the laws of England and Wales. Any disputes are subject to the exclusive
              jurisdiction of the English courts.
            </p>
          </div>
        </section>
      </main>
    </Page>
  );
}
