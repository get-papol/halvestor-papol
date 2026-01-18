import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import { motion, Variants } from 'framer-motion';

/* ------------------ ANIMATIONS ------------------ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

/* ------------------ PAGE ------------------ */

export default function TermsOfService() {
  return (
    <Page>
      <NextSeo title="Terms of Service · Halvestor" description="Halvestor Terms of Use – paper-trading platform" />

      {/* HERO */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#eaf4fb' }}>
        {/* Soft decorative shapes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#9ac9e6]/40 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#cfe6f5]/50 blur-3xl"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto px-6 text-center"
        >
          <span className="inline-block mb-5 rounded-full bg-[#9ac9e6]/60 px-4 py-1 text-sm font-medium text-[#0b4f78]">
            Legal & Usage
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-[#0b4f78]">Terms of Service</h1>

          <p className="mt-4 text-[#1e6fa8]">Version 1.0 · Effective 27 April 2025</p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="relative pb-32" style={{ backgroundColor: '#eaf4fb' }}>
        <motion.main
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto px-6 -mt-16 space-y-14"
        >
          {sections.map((section, index) => (
            <motion.article
              key={index}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="relative rounded-3xl bg-white shadow-md p-10 overflow-hidden"
            >
              {/* Accent strip */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#1172af] to-[#9ac9e6]" />

              <h3 className="text-xl font-semibold text-secondary-900 mb-4">{section.title}</h3>

              <div className="space-y-3 text-secondary-700 leading-relaxed">{section.content}</div>
            </motion.article>
          ))}
        </motion.main>
      </section>
    </Page>
  );
}

/* ------------------ CONTENT ------------------ */

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
