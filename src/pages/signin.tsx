import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Page from '@/components/page';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    await fetch('/api/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    setSent(true);
    setEmail('');
  };

  return (
    <Page>
      <NextSeo title="Sign In · Halvestor" />

      <main className="max-w-5xl mx-auto px-6 py-20">
        <section className="bg-[#0b4f78] rounded-3xl px-8 py-12 md:px-14 md:py-14 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Sign in to Halvestor</h1>

          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Enter your email address and we’ll send you a secure sign-in message to access your Halvestor account.
          </p>

          {!sent ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg text-secondary-900 text-sm focus:outline-none"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-white text-[#0b4f78] font-semibold text-sm hover:bg-blue-50 transition"
              >
                Send Sign-in Email
              </button>
            </form>
          ) : (
            <p className="text-blue-200 text-sm mt-6">✓ Check your inbox. We’ve sent you a sign-in email.</p>
          )}
        </section>
      </main>
    </Page>
  );
}
