import Page from '@/components/page';
import { NextSeo } from 'next-seo';

export default function WhyHalvestor() {
  return (
    <Page>
      <NextSeo
        title="Why Halvestor Is Better · Halvestor"
        description="From 7 steps to just 3. See why Halvestor simplifies halal investing."
      />

      <main className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-900">Why Halvestor Is Better</h1>
          <p className="mt-6 text-xl text-primary-600">From 7 steps to just 3</p>
          <p className="mt-2 text-lg text-secondary-600">Focus on growing your wealth, not juggling extra apps</p>
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Halvestor */}
          <div>
            <h2 className="text-2xl font-semibold text-primary-700 text-center mb-10">Halvestor</h2>

            <FlowBox text="Download App" />
            <Arrow />
            <FlowBox text="Deposit Money / Invest" />
            <Arrow />
            <FlowBox text="Take Profits and Good to Go" />
          </div>

          {/* Others */}
          <div>
            <h2 className="text-2xl font-semibold text-secondary-500 text-center mb-10">Others</h2>

            <FlowBox text="Download App" />
            <Arrow />
            <FlowBox text="Subscribe to App" />
            <Arrow />
            <FlowBox text="Link Brokers to App" />
            <Arrow />
            <FlowBox text="Deposit Money / Invest" />
            <Arrow />
            <FlowBox text="Remove Investment" />
            <Arrow />
            <FlowBox text="Purify Investment" />
            <Arrow />
            <FlowBox text="Take Profits and Good to Go" />
          </div>
        </div>
      </main>
    </Page>
  );
}

/* ---------- Helpers ---------- */

function FlowBox({ text }: { text: string }) {
  return (
    <div className="mx-auto w-fit bg-white px-8 py-4 rounded-xl border border-secondary-200 shadow-md text-secondary-900 font-medium text-center">
      {text}
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center my-4">
      <svg width="24" height="40" viewBox="0 0 24 40">
        <line x1="12" y1="0" x2="12" y2="28" stroke="#2563eb" strokeWidth="2" />
        <polyline points="6,22 12,28 18,22" fill="none" stroke="#2563eb" strokeWidth="2" />
      </svg>
    </div>
  );
}
