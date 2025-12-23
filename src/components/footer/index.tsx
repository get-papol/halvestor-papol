import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    await fetch('/api/early-access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    setStatus('sent');
    setEmail('');
  };

  return (
    <footer className="bg-secondary-900 text-secondary-100 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/logo.png" alt="Halvestor" width={40} height={40} priority />
            <span className="text-xl font-semibold">Halvestor</span>
          </div>
          <p className="text-secondary-400 text-sm leading-relaxed">
            Sharia-compliant investing made simple. Built for Muslim investors worldwide.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-secondary-400">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-white">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-white">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h4 className="font-semibold mb-4">Stay Updated</h4>
          <p className="text-secondary-400 text-sm mb-4">Get early access updates and halal investing insights.</p>

          {status === 'idle' ? (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-secondary-900 text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-700"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <p className="text-primary-300 text-sm">✓ You’re on the early access list</p>
          )}
        </div>
      </div>

      <div className="border-t border-secondary-800 mt-12 pt-6 text-center text-xs text-secondary-500">
        © {new Date().getFullYear()} Halvestor. All rights reserved.
      </div>
    </footer>
  );
}
