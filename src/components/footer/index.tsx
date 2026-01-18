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
    <footer className="bg-[#05263d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Halvestor" width={40} height={40} priority />
              <span className="text-xl font-semibold">Halvestor</span>
            </div>

            <p className="text-white/70 max-w-sm text-sm leading-relaxed">
              Sharia-compliant investing made simple. Built for Muslim investors worldwide.
            </p>
          </div>

          {/* COMPANY + LEGAL */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition">
                  FAQs
                </Link>
              </li>
            </ul>

            <h4 className="font-semibold mt-8 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* SUBSCRIBE */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-white/70 text-sm mb-4">Get early access updates and halal investing insights.</p>

            {status === 'idle' ? (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-sm text-[#05263d] focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#2f80ed] text-white text-sm font-medium hover:bg-[#2568c9] transition"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <p className="text-[#9ac9e6] text-sm">✓ You’re on the early access list</p>
            )}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Halvestor. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
