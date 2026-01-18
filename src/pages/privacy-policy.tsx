// src/pages/privacy-policy.tsx

import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import React from 'react';
import { motion, Variants } from 'framer-motion';

/* ------------------ ANIMATIONS ------------------ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

/* ------------------ PAGE ------------------ */

export default function PrivacyPolicy() {
  return (
    <Page>
      <NextSeo
        title="Privacy Policy & GDPR Notice · Halvestor"
        description="Halvestor Privacy Policy and GDPR Fair-Processing Notice"
      />

      <main className="py-24 bg-gradient-to-b from-[#eaf4fb] to-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* HEADER */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <div className="inline-block mb-4 rounded-full bg-primary-100 px-4 py-1 text-sm font-medium text-primary-700">
              Legal & Compliance
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">Privacy Policy & GDPR Notice</h1>

            <p className="text-sm text-secondary-600">Effective date: 27 April 2025 · Last updated: 27 April 2025</p>
          </motion.div>

          {/* CONTENT CARD */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12 bg-white/90 backdrop-blur-md rounded-3xl shadow-md border border-secondary-200 p-10 relative overflow-hidden"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-300 to-primary-500" />

            <AnimatedSection title="1. Introduction">
              Halvestor Limited (“Halvestor”, “we”, “our”, “us”) operates the Halvestor paper-trading mobile application
              and website. This policy explains what personal data we collect, how we use it, and your rights under UK
              GDPR.
            </AnimatedSection>

            <AnimatedSection title="2. Organisation Details">
              <ul className="list-disc pl-6 space-y-1">
                <li>Controller: Halvestor Limited (Company No. 15381418)</li>
                <li>Address: Flat 36, Clay Alto, Exhibition Way, Wembley, London HA9 0GS</li>
                <li>Contact: prosper@halvestor.com</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection title="3. What Data We Collect">
              <ul className="list-disc pl-6 space-y-1">
                <li>Name, e-mail address, encrypted password</li>
                <li>Device and usage data (IP, OS, app actions, crash logs)</li>
                <li>Marketing consent preferences</li>
              </ul>
              <p className="mt-3 text-sm text-secondary-600">
                We do not collect payment data, identity documents, phone numbers, or real-time location.
              </p>
            </AnimatedSection>

            <AnimatedSection title="4. How We Use Your Data">
              To operate and secure the service, improve performance, send optional updates (if opted in), and report
              anonymised usage statistics. We never sell personal data.
            </AnimatedSection>

            <AnimatedSection title="5. Storage & Security">
              Data is stored on secure UK/EEA servers, encrypted in transit, with role-based access controls. Data is
              retained while your account is active and up to 24 months after last activity.
            </AnimatedSection>

            <AnimatedSection title="6. Your Rights">
              You may request access, correction, deletion, restriction, portability, or object to processing. Requests
              are handled within 30 days.
            </AnimatedSection>

            <AnimatedSection title="7. Cookies">
              We use essential and basic analytics cookies only. You can manage consent via the website banner.
            </AnimatedSection>

            <AnimatedSection title="8. Complaints">
              Supervisory authority: Information Commissioner’s Office (ICO), Wilmslow, UK.
            </AnimatedSection>

            {/* GDPR HIGHLIGHT */}
            <motion.div
              variants={fadeUp}
              className="mt-12 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-200 p-8"
            >
              <h3 className="text-lg font-semibold text-primary-700 mb-3">GDPR Fair-Processing Notice (Short Form)</h3>
              <p className="text-sm text-secondary-700 leading-relaxed">
                Controller: Halvestor Limited · Purpose: Operate a free stock-market simulation app · Data: Name,
                e-mail, password hash, device logs · Lawful basis: Consent & legitimate interest · Retention: 24 months
                after last activity · Contact: privacy@halvestor.com
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </Page>
  );
}

/* ------------------ SECTION COMPONENT ------------------ */

function AnimatedSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section variants={fadeUp}>
      <h2 className="text-2xl font-semibold text-secondary-900 mb-3">{title}</h2>
      <div className="text-secondary-700 leading-relaxed">{children}</div>
    </motion.section>
  );
}
