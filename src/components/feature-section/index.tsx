const CheckIcon = () => (
  <svg className="h-6 w-6 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const FeatureSection = () => (
  <section className="bg-white py-20">
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h4 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Our Solution</h4>
          <p className="mt-2 text-4xl lg:text-6xl font-bold tracking-tight text-secondary-900">
            How Halvestor Changes the Game
          </p>
          <p className="mt-4 text-lg text-secondary-600 max-w-3xl mx-auto">
            We&apos;ve built the first platform specifically designed for Muslim investors, addressing every challenge
            you face.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border border-secondary-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <CheckIcon />
              <div className="ml-4 text-xl font-semibold text-secondary-900">100% Halal Verified</div>
            </div>
            <p className="leading-relaxed text-secondary-600">
              Every investment option is pre-screened and certified as Sharia-compliant by Islamic finance scholars.
            </p>
          </div>
          <div className="p-6 border border-secondary-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <CheckIcon />
              <div className="ml-4 text-xl font-semibold text-secondary-900">Complete Transparency</div>
            </div>
            <p className="leading-relaxed text-secondary-600">
              See detailed information about company activities, board members, and business practices before investing.
            </p>
          </div>
          <div className="p-6 border border-secondary-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <CheckIcon />
              <div className="ml-4 text-xl font-semibold text-secondary-900">No Hidden Fees</div>
            </div>
            <p className="leading-relaxed text-secondary-600">
              Simple, transparent pricing with no subscription fees. Pay only when you invest, with competitive rates.
            </p>
          </div>
          <div className="p-6 border border-secondary-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <CheckIcon />
              <div className="ml-4 text-xl font-semibold text-secondary-900">Expert Guidance</div>
            </div>
            <p className="leading-relaxed text-secondary-600">
              Access to Islamic finance experts who can help you make informed investment decisions aligned with your
              faith.
            </p>
          </div>
          <div className="p-6 border border-secondary-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <CheckIcon />
              <div className="ml-4 text-xl font-semibold text-secondary-900">Wide Selection</div>
            </div>
            <p className="leading-relaxed text-secondary-600">
              Diverse portfolio of Sharia-compliant stocks, ETFs, and investment opportunities across various sectors.
            </p>
          </div>
          <div className="p-6 border border-secondary-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <CheckIcon />
              <div className="ml-4 text-xl font-semibold text-secondary-900">Easy to Use</div>
            </div>
            <p className="leading-relaxed text-secondary-600">
              Intuitive platform designed for both beginners and experienced investors with clear halal indicators.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
