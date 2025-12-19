const cases = [
  {
    title: 'Halal investing portfolio',
    description:
      'Build and manage long-term investment portfolios with confidence, knowing every stock is screened and maintained according to strict Sharia principles.',
    useCase: 'Halal long-term investing portfolios',
  },
  {
    title: 'Sharia screening process',
    description:
      'Understand exactly how each investment is evaluated. Halvestor applies certified Sharia screening methodologies so you always know what is halal and why.',
    useCase: 'Transparent Sharia screening process',
  },
  {
    title: 'Faith aligned investing',
    description:
      'Grow your wealth without compromising your values. Invest with full visibility into company activities, compliance status, and ethical alignment.',
    useCase: 'Faith-aligned wealth growth',
  },
];

export default function CasesSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* BLUE CONTAINER BOX */}
        <div className="rounded-[32px] bg-gradient-to-b from-[#0b4f78] to-[#083a5c] px-10 py-16">
          {/* HEADER */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How Investors Use Halvestor</h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              Practical ways Muslim investors use Halvestor to invest with clarity, confidence, and full Sharia
              compliance.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {cases.map((item, index) => (
              <div key={index} className="rounded-3xl bg-white/10 border border-white/20 px-8 py-10">
                <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>

                <p className="text-white/75 leading-relaxed mb-8">{item.description}</p>

                <div className="border-t border-white/20 pt-6">
                  <p className="text-sm uppercase tracking-wide text-blue-300 mb-2">Use Case</p>
                  <p className="text-white font-medium">{item.useCase}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* END BLUE CONTAINER */}
      </div>
    </section>
  );
}
