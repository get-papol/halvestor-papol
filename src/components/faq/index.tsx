import { useState } from 'react';

const faqs = [
  {
    question: 'How does Halvestor ensure Sharia compliance?',
    answer:
      'We work with certified Islamic finance scholars and follow AAOIFI standards. Every investment option is pre-screened using comprehensive Sharia compliance criteria including debt ratios, business activities, and revenue sources.',
  },
  {
    question: "What are Halvestor's fees?",
    answer:
      'We believe in transparent pricing. There are no monthly subscription fees or hidden charges. You only pay a small 0.5% transaction fee when you make an investment. No setup fees, no maintenance charges.',
  },
  {
    question: 'How do you differ from other investment platforms?',
    answer:
      'Halvestor is built specifically for Muslim investors. Unlike general platforms, every stock is pre-screened for Sharia compliance, we provide complete transparency about company activities, and we offer guidance from Islamic finance experts.',
  },
  {
    question: 'What happens if my investment becomes non-halal?',
    answer:
      "We continuously monitor all holdings for compliance. If a company's status changes and it no longer meets Sharia standards, we'll immediately notify you and provide guidance on next steps, including options to exit the position.",
  },
  {
    question: 'How can I calculate Zakat on my investments?',
    answer:
      'Our platform includes built-in Zakat calculation tools that help you determine your Zakat obligations on your investment portfolio. We provide detailed reports that you can use for your annual Zakat payments.',
  },
  {
    question: 'Is my money safe with Halvestor?',
    answer:
      "Yes. We use bank-level security encryption, and your funds are held with regulated custodians. We're committed to transparency and follow strict financial regulations to ensure your investments are secure.",
  },
  {
    question: 'What types of investments can I make?',
    answer:
      'You can invest in Sharia-compliant stocks, ETFs, and sukuk bonds. Our platform covers global markets including US, European, and emerging markets, all screened for Islamic compliance.',
  },
  {
    question: 'Do you provide investment advice?',
    answer:
      "While we don't provide personalized investment advice, we offer educational resources about halal investing, market insights, and tools to help you make informed decisions according to Islamic principles.",
  },
];

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className={`w-5 h-5 text-secondary-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-secondary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary-900 mb-4">
            Got Questions? We&apos;ve Got Answers!
          </h2>
          <p className="text-lg text-secondary-600">Everything you need to know about halal investing with Halvestor</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-secondary-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-secondary-900 pr-4">{faq.question}</h3>
                <ChevronIcon isOpen={openIndex === index} />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-secondary-100 pt-4">
                    <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-secondary-600 mb-6">Still have questions? We&apos;re here to help!</p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-primary-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-primary-700 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
