export default function FeatureSection() {
  return (
    <section className="bg-[#e3f0fa] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-700">Why Halvestor is better</h2>
          <p className="mt-4 text-lg text-primary-600">Focus on growing your wealth, not juggling extra apps</p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          {/* Halvestor */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-primary-700 mb-10">Halvestor</h3>

            <Flow>
              <StepBox text="Download App" />
              <ArrowDown />
              <StepBox text="Deposit Money / Invest" />
              <ArrowDown />
              <StepBox text="Take Profits and Good to Go" />
            </Flow>
          </div>

          {/* Others */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-primary-700 mb-10">Others</h3>

            <Flow>
              <StepBox text="Download App" />
              <ArrowDown />
              <StepBox text="Subscribe to App" />
              <ArrowDown />
              <StepBox text="Link Brokers to App" />
              <ArrowDown />
              <StepBox text="Deposit Money / Invest" />
              <ArrowDown />
              <StepBox text="Remove Investment" />
              <ArrowDown />
              <StepBox text="Purify Investment" />
              <ArrowDown />
              <StepBox text="Take Profits and Good to Go" />
            </Flow>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Layout wrapper ---------- */
function Flow({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col items-center gap-4">{children}</div>;
}

/* ---------- 3D Step Box ---------- */
function StepBox({ text }: { text: string }) {
  return (
    <div
      className="
        bg-white
        px-8 py-4
        rounded-xl
        border border-primary-200
        text-primary-700
        font-medium
        shadow-[6px_6px_0_#000]
      "
    >
      {text}
    </div>
  );
}

/* ---------- Down Arrow ---------- */
function ArrowDown() {
  return (
    <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="0" x2="10" y2="20" stroke="#2563eb" strokeWidth="2" />
      <polyline
        points="4,14 10,20 16,14"
        fill="none"
        stroke="#2563eb"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
