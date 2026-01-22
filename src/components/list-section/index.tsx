import Link from 'next/link';

const listItems = [
  {
    title: 'Sharia compliance can change after quarterly updates',
    description:
      'A stock may meet Sharia criteria today but fall out of compliance after financial ratios update, often without investor awareness.',
    source: 'Islamic finance screening practice',
  },
  {
    title: 'Different platforms apply different screening rules',
    description:
      'There is no single global standard for Sharia screening, leading to confusion when the same stock is labelled halal on one platform but not another.',
    source: 'Islamic finance industry observation',
  },
  {
    title: 'Limited transparency into fund and ETF holdings',
    description:
      'Many halal-labelled funds do not disclose real-time holdings, making ongoing compliance verification difficult.',
    source: 'Ethical investing platform limitation',
  },
  {
    title: 'Manual compliance checks require financial expertise',
    description:
      'Investors often need to analyse balance sheets, debt ratios, and income sources themselves just to confirm Sharia alignment.',
    source: 'Common investor experience',
  },
  {
    title: 'Revenue purification guidance is often unclear',
    description:
      'When minor non-compliant income exists, platforms rarely provide clear guidance on how much needs to be purified or how to calculate it.',
    source: 'Islamic finance compliance gap',
  },
  {
    title: 'Ongoing monitoring is rarely provided',
    description:
      'Most platforms screen investments only at purchase and do not actively alert investors when holdings drift out of compliance.',
    source: 'Widely reported fintech limitation',
  },
];

const ListSection = () => (
  <section id="features" className="lg:py-28 pt-28 bg-secondary-50">
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-16 text-center">
        <h2 className="text-base text-primary-600 font-semibold uppercase">The Challenge</h2>
        <p className="mt-2 pb-4 text-4xl lg:text-6xl font-bold text-secondary-900">What’s the problem?</p>
        <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
          Muslim investors face structural and ongoing challenges when trying to invest in a way that remains aligned
          with their faith.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {listItems.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-secondary-200 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 font-bold">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">{item.title}</h3>
                <p className="text-secondary-600 mb-3">{item.description}</p>
                <p className="text-sm text-primary-600 font-medium">— {item.source}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="/why-halvestor"
          className="
            inline-flex items-center justify-center
            rounded-lg
            bg-[#1172af]
            px-8 py-4
            text-base font-semibold
            text-white
            hover:bg-[#0e5f96]
            transition
          "
        >
          Why Halvestor Is Better
        </Link>

        <Link
          href="/sharia-compliance"
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
          Learn more about Sharia compliance
        </Link>
      </div>
    </div>
  </section>
);

export default ListSection;
