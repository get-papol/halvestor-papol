import Link from 'next/link';

export default function ShariaCompliance() {
  return (
    <main className="min-h-screen bg-[#f4f9fd] px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* PAGE TITLE */}
        <header className="mb-20 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0b4f78] leading-tight">
            Understanding Sharia-Compliant Investing
          </h1>

          <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto text-[#1e6fa8]">
            An ethical approach to investing built on transparency, fairness, and shared responsibility.
          </p>
        </header>

        {/* CONTENT */}
        <div className="space-y-16">
          {/* SECTION 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0b4f78] mb-4">
              What Is Sharia-Compliant Investing?
            </h2>

            <p className="text-[#3b6f92] leading-relaxed text-lg">
              Sharia-compliant investing follows financial principles derived from Islamic law (Sharia). These
              principles aim to ensure that financial activity is conducted ethically, responsibly, and in a way that
              contributes to real economic value.
            </p>

            <p className="mt-4 text-[#3b6f92] leading-relaxed text-lg">
              At its core, Sharia-compliant investing avoids income generated purely from interest, excessive
              uncertainty, and speculative practices. Instead, it encourages investments that are asset-backed,
              transparent, and tied to genuine business activity.
            </p>
          </section>

          {/* SECTION 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0b4f78] mb-4">
              Core Principles Behind Sharia-Compliant Finance
            </h2>

            <ul className="mt-4 space-y-4 text-[#3b6f92] text-lg list-disc list-inside">
              <li>
                <strong>Ethical boundaries:</strong> Certain industries and activities are avoided due to ethical or
                social considerations.
              </li>
              <li>
                <strong>Risk sharing:</strong> Returns are linked to real business performance, encouraging shared
                responsibility between parties.
              </li>
              <li>
                <strong>Transparency:</strong> Clear disclosure and fairness are essential to avoid exploitation or
                uncertainty.
              </li>
              <li>
                <strong>Real economic value:</strong> Investments are connected to tangible assets or productive
                activity.
              </li>
            </ul>
          </section>

          {/* SECTION 3 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0b4f78] mb-4">
              Why Is Sharia-Compliant Investing Trusted by Muslims?
            </h2>

            <p className="text-[#3b6f92] leading-relaxed text-lg">
              For Muslim investors, financial decisions are closely connected to personal values and religious
              responsibility. Sharia-compliant investing provides a structured framework that aligns financial growth
              with ethical and faith-based principles.
            </p>

            <p className="mt-4 text-[#3b6f92] leading-relaxed text-lg">
              Because compliance requires continuous screening and review, many investors see it as a disciplined and
              accountable way to invest responsibly.
            </p>
          </section>

          {/* SECTION 4 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0b4f78] mb-4">
              Why Non-Muslims Also Choose Sharia-Aligned Investing
            </h2>

            <p className="text-[#3b6f92] leading-relaxed text-lg">
              While rooted in Islamic principles, Sharia-compliant investing appeals to a broader audience interested in
              ethical finance, sustainability, and long-term value creation.
            </p>

            <p className="mt-4 text-[#3b6f92] leading-relaxed text-lg">
              By discouraging excessive speculation and prioritising transparency, Sharia-aligned models often overlap
              with modern responsible and ESG-based investment approaches.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Link
            href="/signup"
            className="
              inline-flex items-center justify-center
              rounded-xl
              bg-[#1172af]
              px-10 py-4
              text-base sm:text-lg
              font-semibold
              text-white
              hover:bg-[#0e5f96]
              transition
              shadow-lg
            "
          >
            Join the Waitlist
          </Link>

          <p className="mt-4 text-sm text-[#4a7fa6]">Learn first. Decide confidently.</p>
        </div>
      </div>
    </main>
  );
}
