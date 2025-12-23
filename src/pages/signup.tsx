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

      <main className="max-w-4xl mx-auto px-6 py-24">
        <section className="rounded-[32px] bg-gradient-to-b from-[#0b4f78] to-[#083a5c] px-10 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get Started with Halvestor</h1>

          {!submitted ? (
            <>
              <p className="text-lg text-gray-400 mb-10">Join early access to be notified when Halvestor launches.</p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-xl text-gray-900 mb-4"
                />

                <button type="submit" className="w-full py-4 rounded-xl bg-[#1172AF] text-white font-semibold">
                  Join Early Access
                </button>
              </form>
            </>
          ) : (
            <p className="text-gray-300 text-lg">
              Confirmation email sent to <strong>{email}</strong>
            </p>
          )}
        </section>
      </main>
    </Page>
  );
}
