// src/pages/why-halvestor/index.tsx

import React from 'react';

export default function WhyHalvestorPage() {
  return (
    <main className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/about-bg.jpg')" }}>
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-center text-5xl md:text-6xl font-semibold text-[#0b4f78] mb-6">Why Halvestor is better</h1>

        <p className="text-center text-xl text-[#1e6fa8] mb-20">From 7 steps to just 3</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* HALVESTOR */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#0b4f78] mb-12">Halvestor</h2>

            <div className="flex flex-col items-center gap-8">
              {['Download App', 'Deposit Money / Invest', 'Take Profits and Good to Go'].map((text) => (
                <div
                  key={text}
                  className="w-64 rounded-xl bg-[#1e6fa8] text-white px-6 py-5 shadow-[6px_6px_0_#0b4f78]"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* OTHERS */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#0b4f78] mb-12">Others</h2>

            <div className="flex flex-col items-center gap-8">
              {[
                'Download App',
                'Subscribe to App',
                'Link Brokers to App',
                'Deposit Money / Invest',
                'Remove Investment',
                'Purify Investment',
                'Take Profits and Good to Go',
              ].map((text) => (
                <div
                  key={text}
                  className="w-72 rounded-xl bg-[#e6f0f8] text-[#0b4f78] px-6 py-5 shadow-[6px_6px_0_#1e6fa8]"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
