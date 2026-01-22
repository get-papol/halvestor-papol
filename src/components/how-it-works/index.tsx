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
          <h2 className="text-3xl lg:text-5xl font-bold text-[#0b4f78] mb-4">How Halvestor Works</h2>
          <p className="text-lg text-[#1e6fa8] max-w-2xl mx-auto">
            Start investing according to your Islamic values in just a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden xl:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#1172af]/40 to-[#1172af]/10 transform -translate-y-1/2" />
              )}

              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#e6f2fb] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1172af] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#0b4f78] mb-3">{step.title}</h3>
                <p className="text-[#1e6fa8] text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTONS — MATCH HERO / FEATURES STYLE */}
        <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* PRIMARY CTA */}
          <Link
            href="/signup"
            className="
              inline-flex items-center justify-center
              rounded-lg
              bg-[#1172af]
              px-8 py-4
              text-base font-semibold
              text-white
              hover:bg-[#0e5f96]
              transition
              shadow-lg
            "
          >
            Start Your Journey Today
          </Link>

          {/* SECONDARY CTA */}
          <Link
            href="/terms-of-service"
            className="
              inline-flex items-center justify-center
              rounded-lg
              border-2 border-[#1172af]
              px-8 py-4
              text-base font-medium
              text-[#1172af]
              hover:bg-[#1172af]
              hover:text-white
              transition
            "
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </section>
  );
}
