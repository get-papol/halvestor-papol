// src/components/navigation/index.tsx
import Link from 'next/link';
import React from 'react';

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'Benefits', href: '/#benefits' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
];

export default function Navigation() {
  return (
    <header className="w-full py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="matt-header matt-header--blue flex items-center justify-between">
          {/* Left: logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 no-underline">
              <img src="/logo.png" alt="Halvestor" className="h-12 w-auto" />
              <span className="brand-text">Halvestor</span>
            </Link>
          </div>

          {/* Middle: nav links */}
          <nav className="hidden md:flex items-center gap-4">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="nav-item px-4 py-2 rounded-full text-sm font-medium no-underline"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right: actions */}
          <div className="flex items-center gap-3">
            <Link href="/signin" className="text-sm text-white/90 hover:text-white no-underline">
              Sign In
            </Link>

            <Link
              href="/signup"
              className="cta-button inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold no-underline"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu icon */}
          <button aria-label="Open menu" className="md:hidden ml-3 p-2 rounded-md focus:outline-none" type="button">
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
