// src/components/faq/index.tsx

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const faqs = [
  {
    question: 'How does Halvestor ensure Sharia compliance?',
    answer:
      'Halvestor follows AAOIFI standards and works with certified Islamic finance scholars. Every investment is screened based on business activities, debt ratios, and revenue sources to ensure full Sharia compliance.',
  },
  {
    question: "What are Halvestor's fees?",
    answer:
      'There are no subscriptions or hidden charges. You only pay a simple 0.5% transaction fee when you invest. No setup fees and no ongoing platform costs.',
  },
  {
    question: 'How do you differ from other investment platforms?',
    answer:
      'Halvestor is built for Sharia-compliant and ethical investing, with transparent screening, monitoring, and purification built directly into the platform.',
  },
  {
    question: 'What happens if my investment becomes non-halal?',
    answer:
      'Halvestor continuously monitors compliance. If an investment becomes non-compliant, you are notified and provided with clear guidance on next steps.',
  },
  {
    question: 'How can I calculate Zakat on my investments?',
    answer:
      'Halvestor provides automated calculations and reports to help you determine Zakat accurately based on your portfolio.',
  },
  {
    question: 'Is my money safe with Halvestor?',
    answer:
      'Halvestor uses strong security practices and works with regulated partners to safeguard user data and simulated assets.',
  },
  {
    question: 'What types of investments can I make?',
    answer:
      'You can explore Sharia-compliant stocks, ETFs, and other halal investment opportunities across global markets.',
  },
  {
    question: 'Do you provide investment advice?',
    answer:
      'Halvestor does not provide personalised financial advice. The platform is designed for education and informed decision-making.',
  },
];

/* ------------------ ANIMATIONS ------------------ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-24"
      style={{ backgroundColor: '#eaf4fb' }} // ✅ stays light blue
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.08 },
          },
        }}
        className="max-w-4xl mx-auto px-6"
      >
        {/* HEADER */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary-900 mb-4">Got Questions? We’ve Got Answers</h2>
          <p className="text-lg text-secondary-700">
            Everything you need to know about halal and ethical investing with Halvestor.
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="rounded-2xl border border-secondary-200 bg-white shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-secondary-50 transition"
                >
                  <span className="text-lg font-semibold text-secondary-900">{faq.question}</span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-secondary-600"
                  >
                    ▼
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="px-6 pb-6"
                    >
                      <p className="text-secondary-700 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
