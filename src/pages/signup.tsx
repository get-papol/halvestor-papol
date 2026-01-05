import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Page from '@/components/page';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch('/api/early-access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    setSubmitted(true);
  }

  return (
    <Page>
      <NextSeo title="Get Started · Halvestor" />

      {/* Page background — SAME as Sign In */}
      <main className="min-h-screen flex items-center justify-center bg-[#eaf4fb] px-6">
        {/* White card — SAME width & shorter height */}
        <section className="w-full max-w-md bg-white rounded-2xl shadow-lg px-8 py-10 text-center">
          <h1 className="text-3xl font-bold text-secondary-900 mb-4">Get Started with Halvestor</h1>

          {!submitted ? (
            <>
              <p className="text-secondary-600 mb-8">Join early access to be notified when Halvestor launches.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-secondary-200 text-secondary-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />

                {/* Button — EXACT Sign In color + text color */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#9ac9e6] text-[#0b5f91] font-semibold hover:bg-[#86bddf] transition-colors"
                >
                  Join Early Access
                </button>
              </form>
            </>
          ) : (
            <p className="text-secondary-700">
              Confirmation email sent to <strong>{email}</strong>
            </p>
          )}
        </section>
      </main>
    </Page>
  );
}
