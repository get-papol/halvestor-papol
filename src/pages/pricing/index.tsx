import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

/* ------------------ ANIMATIONS ------------------ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  const price = (monthly: number, annual: number) => (billing === 'monthly' ? `$${monthly}` : `$${annual} /yr`);

  return (
    <Page>
      <NextSeo
        title="Pricing · Halvestor"
        description="Simple, transparent pricing for Sharia-compliant investing tools."
      />

      <main className="min-h-screen bg-[#eaf4fb]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          {/* HEADER */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0b4f78]">Simple pricing. Clear value.</h1>

            <p className="text-lg text-[#1e6fa8] max-w-3xl mx-auto">
              Pick a plan that fits your investing goals. All plans include Sharia-compliant screening and secure
              account controls.
            </p>

            {/* BILLING TOGGLE */}
            <div className="mt-8 inline-flex items-center gap-4 bg-white rounded-full p-1 shadow-sm">
              <span
                className={`px-4 py-2 rounded-full font-medium cursor-pointer transition ${
                  billing === 'monthly' ? 'bg-[#1172af] text-white' : 'text-[#4a7fa6]'
                }`}
                onClick={() => setBilling('monthly')}
              >
                Monthly
              </span>
              <span
                className={`px-4 py-2 rounded-full font-medium cursor-pointer transition ${
                  billing === 'annual' ? 'bg-[#1172af] text-white' : 'text-[#4a7fa6]'
                }`}
                onClick={() => setBilling('annual')}
              >
                Annual
              </span>
              <div className="ml-4 text-sm text-[#4a7fa6]">Save over 35% annually</div>
            </div>
          </motion.section>

          {/* PRICING GRID */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid gap-8 grid-cols-1 md:grid-cols-3 mb-14"
          >
            {/* BASIC */}
            <motion.article variants={fadeUp} className="rounded-2xl bg-white p-6 shadow-sm flex flex-col">
              <header className="flex justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#0b4f78]">Basic</h3>
                  <p className="text-sm text-[#4a7fa6]">Starter plan</p>
                </div>
                <div className="text-2xl font-bold text-[#1172af]">{price(0, 0)}</div>
              </header>

              <ul className="mb-6 space-y-3 text-sm text-[#1e6fa8] flex-1">
                <li>Portfolio tracking</li>
                <li>Basic Sharia screening</li>
                <li>Email support</li>
              </ul>

              <Link
                href="/signup?plan=basic"
                className="w-full text-center py-3 rounded-lg border border-[#1172af] text-[#1172af] font-semibold hover:bg-[#1172af] hover:text-white transition"
              >
                Get Basic
              </Link>
            </motion.article>

            {/* PRO */}
            <motion.article variants={fadeUp} className="relative rounded-3xl p-8 flex flex-col bg-white shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-[#1172af] text-white px-3 py-1 rounded-full text-sm font-medium">Most popular</span>
              </div>

              <header className="flex justify-between mt-6 mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-[#0b4f78]">Pro</h3>
                  <p className="text-sm text-[#4a7fa6]">For active investors</p>
                </div>
                <div className="text-3xl font-bold text-[#1172af]">{price(19, 149)}</div>
              </header>

              <ul className="mb-6 space-y-3 text-sm text-[#1e6fa8] flex-1">
                <li>Advanced Sharia screening</li>
                <li>Performance analytics & alerts</li>
                <li>Priority email support</li>
                <li>Portfolio recommendations</li>
              </ul>

              <Link
                href="/signup?plan=pro"
                className="w-full text-center py-3 rounded-lg bg-[#1172af] text-white font-semibold hover:bg-[#0e5f96] transition"
              >
                Start Pro
              </Link>
            </motion.article>

            {/* ENTERPRISE */}
            <motion.article variants={fadeUp} className="rounded-2xl bg-white p-6 shadow-sm flex flex-col">
              <header className="flex justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#0b4f78]">Enterprise</h3>
                  <p className="text-sm text-[#4a7fa6]">For institutions</p>
                </div>
                <div className="text-2xl font-bold text-[#1172af]">Custom</div>
              </header>

              <ul className="mb-6 space-y-3 text-sm text-[#1e6fa8] flex-1">
                <li>Dedicated account manager</li>
                <li>Custom integrations</li>
                <li>SLAs & priority support</li>
              </ul>

              <Link
                href="/contact"
                className="w-full text-center py-3 rounded-lg border border-[#1172af] text-[#1172af] font-semibold hover:bg-[#1172af] hover:text-white transition"
              >
                Contact Sales
              </Link>
            </motion.article>
          </motion.section>

          {/* WHY CHOOSE */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white rounded-xl p-8 shadow-sm"
          >
            <h4 className="font-semibold text-lg mb-4 text-[#0b4f78]">Why choose Halvestor?</h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#1e6fa8]">
              <div>
                <strong className="block text-[#1172af] mb-2">Sharia screening</strong>
                Rigorous, transparent screening aligned with ethical finance principles.
              </div>
              <div>
                <strong className="block text-[#1172af] mb-2">Secure</strong>
                Industry-standard security and data protection practices.
              </div>
              <div>
                <strong className="block text-[#1172af] mb-2">Support</strong>
                Helpful guidance and responsive support for every plan.
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </Page>
  );
}
