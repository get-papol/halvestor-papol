import Button from '@/components/button';

const CheckIcon = () => (
  <svg className="h-6 w-6 mr-3 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const features = [
  `100% Sharia-compliant investments`,
  `Real-time halal stock screening`,
  `Transparent company information`,
  `No subscription fees`,
  `Expert Islamic finance guidance`,
  `Diverse investment options`,
  `Educational resources`,
  `24/7 customer support`,
];

const PricingTable = () => (
  <section className="bg-gradient-to-b from-secondary-50 to-white pt-20 pb-20">
    <div className="relative max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-secondary-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
          No hidden fees, no monthly subscriptions. Pay only when you invest.
        </p>
      </div>

      <div className="overflow-hidden lg:max-w-none lg:flex bg-white rounded-2xl shadow-xl">
        <div className="py-12 px-8 lg:flex-shrink-1">
          <h3 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">Ready to Start Investing?</h3>
          <p className="mt-6 text-base leading-6 text-secondary-600">
            Join thousands of Muslim investors who are already building wealth according to their faith. Start with any
            amount and pay only a small transaction fee when you invest.
          </p>
          <div className="mt-8">
            <div className="flex items-center">
              <h4 className="flex-shrink-0 pr-4 text-sm leading-5 tracking-wider font-semibold uppercase text-primary-600">
                What&apos;s Included
              </h4>
              <div className="flex-1 border-t-2 border-secondary-200" />
            </div>
            <ul className="mt-8 space-y-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
              {features.map((feature) => (
                <li className="flex items-center" key={feature}>
                  <CheckIcon />
                  <p className="text-secondary-700 font-medium">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-12 px-8 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12 bg-primary-50">
          <p className="text-lg font-medium text-secondary-800 mb-4">Start investing for</p>
          <div className="my-4 flex items-center justify-center text-5xl leading-none font-bold text-primary-600">
            $0
          </div>
          <p className="text-sm text-secondary-600 mb-6">
            No setup fees • No monthly costs
            <br />
            Only 0.5% per transaction
          </p>
          <Button primary modifier="mt-6 bg-primary-600 hover:bg-primary-700 text-white py-4 px-8 text-lg">
            Start Investing Now
          </Button>
          <p className="text-xs text-secondary-500 mt-4">Open your account in minutes</p>
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
