import { NextSeo } from 'next-seo';
import Page from '@/components/page';

export default function GetStarted() {
  return (
    <Page>
      <NextSeo
        title="Get Started · Halvestor"
        description="Get started with Halvestor. Join early access for Sharia-compliant investing."
      />

      <main className="max-w-4xl mx-auto px-6 py-24">
        <section className="rounded-[32px] bg-gradient-to-b from-[#0b4f78] to-[#083a5c] px-10 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get Started with Halvestor</h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
            Halvestor is currently in active development. We’re building a transparent, Sharia-compliant investing
            platform designed specifically for Muslim investors. Join early access to be notified when account creation
            and onboarding become available.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full px-5 py-4 rounded-xl text-gray-900 mb-4 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#1172AF] text-white font-semibold hover:opacity-90 transition"
            >
              Join Early Access
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-6">You’ll receive updates as soon as onboarding opens.</p>
        </section>
      </main>
    </Page>
  );
}
