import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Sign Up',
    description:
      "Create your Halvestor account in minutes. Complete verification and you're ready to start your halal investing journey.",
    icon: '👤',
  },
  {
    number: '02',
    title: 'Browse & Screen',
    description:
      'Explore our curated selection of Sharia-compliant investments. All stocks are pre-screened by Islamic finance scholars.',
    icon: '🔍',
  },
  {
    number: '03',
    title: 'Invest with Confidence',
    description:
      'Choose your investments and place orders. Our platform ensures every option meets Islamic principles.',
    icon: '📈',
  },
  {
    number: '04',
    title: 'Track & Manage',
    description: 'Monitor your portfolio performance and receive alerts if any holding becomes non-compliant.',
    icon: '📊',
  },
  {
    number: '05',
    title: 'Grow Your Wealth',
    description: 'Watch your halal investments grow while staying true to your religious values and financial goals.',
    icon: '🌱',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary-900 mb-4">How Halvestor Works</h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Start investing according to your Islamic values in just a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden xl:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-primary-100 transform -translate-y-1/2" />
              )}

              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{step.title}</h3>
                <p className="text-secondary-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="text-center mt-12 flex flex-col items-center gap-4">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Start Your Journey Today
          </Link>

          <Link
            href="/terms-of-service"
            className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </section>
  );
}
