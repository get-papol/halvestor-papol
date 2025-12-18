export default function CasesSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-[#0b4f78] to-[#083a5c]">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">How Investors Use Halvestor</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Practical ways Muslim investors use Halvestor to invest with clarity, confidence, and full Sharia
            compliance.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* CARD 1 */}
          <div className="rounded-3xl bg-white/10 border border-white/15 p-10 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Halal investing portfolio</h3>
            <p className="text-blue-100 leading-relaxed mb-10">
              Build and manage long-term investment portfolios with confidence, knowing every stock is screened and
              maintained according to strict Sharia principles.
            </p>

            <div className="pt-6 border-t border-white/20">
              <p className="text-sm uppercase tracking-wide text-blue-300 mb-2">Use Case</p>
              <p className="text-white font-medium">Halal long-term investing portfolios</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-3xl bg-white/10 border border-white/15 p-10 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Sharia screening process</h3>
            <p className="text-blue-100 leading-relaxed mb-10">
              Understand exactly how each investment is evaluated. Halvestor applies certified Sharia screening
              methodologies so you always know what is halal and why.
            </p>

            <div className="pt-6 border-t border-white/20">
              <p className="text-sm uppercase tracking-wide text-blue-300 mb-2">Use Case</p>
              <p className="text-white font-medium">Transparent Sharia screening process</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="rounded-3xl bg-white/10 border border-white/15 p-10 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Faith aligned investing</h3>
            <p className="text-blue-100 leading-relaxed mb-10">
              Grow your wealth without compromising your values. Invest with full visibility into company activities,
              compliance status, and ethical alignment.
            </p>

            <div className="pt-6 border-t border-white/20">
              <p className="text-sm uppercase tracking-wide text-blue-300 mb-2">Use Case</p>
              <p className="text-white font-medium">Faith-aligned wealth growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
