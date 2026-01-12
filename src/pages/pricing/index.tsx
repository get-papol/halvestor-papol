import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Link from 'next/link';

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const price = (monthly: number, annual: number) => (billing === 'monthly' ? `LKR ${monthly}` : `LKR ${annual} /yr`);

  return (
    <Page>
      <NextSeo title="Pricing · Halvestor" description="Simple, transparent pricing for halal investing services." />

      {/* BACKGROUND IMAGE WRAPPER */}
      <main
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/about-bg.jpg')" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Header intro */}
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-900">Simple pricing. Clear value.</h1>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Pick a plan that fits your investing goals. All plans include Shariah compliance checks and secure account
              controls. No hidden fees.
            </p>

            <div className="mt-8 inline-flex items-center gap-4 bg-white rounded-full p-1 shadow-sm">
              <span
                className={`px-4 py-2 rounded-full font-medium ${
                  billing === 'monthly' ? 'bg-[#0E7ACB] text-white' : 'text-gray-600'
                }`}
                onClick={() => setBilling('monthly')}
              >
                Monthly
              </span>
              <span
                className={`px-4 py-2 rounded-full font-medium ${
                  billing === 'annual' ? 'bg-[#0E7ACB] text-white' : 'text-gray-600'
                }`}
                onClick={() => setBilling('annual')}
              >
                Annual
              </span>
              <div className="ml-4 text-sm text-gray-500">Save 25% on annual</div>
            </div>
          </section>

          {/* Pricing grid */}
          <section className="grid gap-8 grid-cols-1 md:grid-cols-3 mb-12">
            <article className="rounded-2xl border bg-white p-6 flex flex-col shadow-sm">
              <header className="flex justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Basic</h3>
                  <p className="text-sm text-gray-500">Starter plan</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#0E7ACB]">{price(0, 0)}</div>
                </div>
              </header>

              <ul className="mb-6 space-y-3 text-sm text-gray-600 flex-1">
                <li>Portfolio tracking</li>
                <li>Basic Shariah screening</li>
                <li>Email support</li>
              </ul>

              <Link
                href="/signup?plan=basic"
                className="w-full text-center py-3 rounded-lg border border-[#0E7ACB] text-[#0E7ACB] font-semibold hover:bg-[#0E7ACB] hover:text-white transition"
              >
                Get Basic
              </Link>
            </article>

            <article className="relative rounded-3xl p-8 flex flex-col bg-white shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-[#0E7ACB] text-white px-3 py-1 rounded-full text-sm font-medium">Most popular</span>
              </div>

              <header className="flex justify-between mt-6 mb-6">
                <div>
                  <h3 className="text-2xl font-semibold">Pro</h3>
                  <p className="text-sm text-gray-500">For active investors</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-[#0E7ACB]">{price(1999, 14990)}</div>
                </div>
              </header>

              <ul className="mb-6 space-y-3 text-sm text-gray-700 flex-1">
                <li>Advanced Shariah screening</li>
                <li>Performance analytics & alerts</li>
                <li>Priority email support</li>
                <li>Portfolio recommendations</li>
              </ul>

              <Link
                href="/signup?plan=pro"
                className="w-full text-center py-3 rounded-lg bg-[#0E7ACB] text-white font-semibold"
              >
                Start Pro
              </Link>
            </article>

            <article className="rounded-2xl border bg-white p-6 flex flex-col shadow-sm">
              <header className="flex justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Enterprise</h3>
                  <p className="text-sm text-gray-500">For institutions</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#0E7ACB]">Custom</div>
                </div>
              </header>

              <ul className="mb-6 space-y-3 text-sm text-gray-600 flex-1">
                <li>Dedicated account manager</li>
                <li>Custom integrations</li>
                <li>SLAs & priority support</li>
              </ul>

              <Link
                href="/contact"
                className="w-full text-center py-3 rounded-lg border border-[#0E7ACB] text-[#0E7ACB] font-semibold hover:bg-[#0E7ACB] hover:text-white transition"
              >
                Contact Sales
              </Link>
            </article>
          </section>

          <section className="bg-white rounded-xl p-6 border border-[#0E7ACB]/40 shadow-sm">
            <h4 className="font-semibold text-lg mb-4">Why choose Halvestor?</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-secondary-600">
              <div>
                <strong className="block text-[#0E7ACB] mb-2">Shariah screening</strong>
                Rigorous, transparent filters based on certified methodology.
              </div>
              <div>
                <strong className="block text-[#0E7ACB] mb-2">Secure</strong>
                Industry-standard security and privacy protections.
              </div>
              <div>
                <strong className="block text-[#0E7ACB] mb-2">Support</strong>
                Helpful support and expert guidance for every plan.
              </div>
            </div>
          </section>
        </div>
      </main>
    </Page>
  );
}
