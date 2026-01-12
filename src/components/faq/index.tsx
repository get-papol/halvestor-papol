// src/components/faq/index.tsx

import { useState } from 'react';

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
      'Halvestor is built specifically for Muslim investors. All investments are pre-screened for Sharia compliance, with full transparency into company activities and ethical alignment.',
  },
  {
    question: 'What happens if my investment becomes non-halal?',
    answer:
      'Halvestor continuously monitors compliance. If an investment becomes non-compliant, you are notified immediately and guided on the next steps.',
  },
  {
    question: 'How can I calculate Zakat on my investments?',
    answer:
      'Halvestor provides tools and reports to help you calculate Zakat accurately based on your portfolio and Islamic guidelines.',
  },
  {
    question: 'Is my money safe with Halvestor?',
    answer:
      'Yes. Halvestor uses bank-level security and works with regulated custodians to keep your funds secure at all times.',
  },
  {
    question: 'What types of investments can I make?',
    answer:
      'You can invest in Sharia-compliant stocks, ETFs, and other halal investment opportunities across global markets.',
  },
  {
    question: 'Do you provide investment advice?',
    answer:
      'Halvestor does not provide personalized financial advice, but offers educational resources and insights to help you invest confidently according to Islamic principles.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-24"
      style={{
        backgroundImage: "url('/about-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary-900 mb-4">Got Questions? We’ve Got Answers</h2>
          <p className="text-lg text-secondary-700">
            Everything you need to know about halal investing with Halvestor.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-xl border border-secondary-200 bg-white/80 backdrop-blur">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-secondary-50"
              >
                <span className="text-lg font-semibold text-secondary-900">{faq.question}</span>
                <span className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-secondary-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
