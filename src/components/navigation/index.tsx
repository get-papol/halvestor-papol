// src/components/navigation/index.tsx
import Link from 'next/link';
import React from 'react';

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
];

export default function Navigation() {
  return (
    <header className="w-full py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER CONTAINER */}
        <div
          className="
            flex items-center justify-between
            rounded-2xl
            px-2 py-1
            bg-[#1172af]
            shadow-lg
          "
        >
          {/* LOGO ONLY */}
          <Link href="/" className="flex items-center">
            <img src="/logo.png.svg" alt="Halvestor" className="h-24 md:h-26 w-auto" />
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-4">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="
                  px-2 py-2 rounded-full
                  text-sm font-medium
                  text-white/90
                  hover:text-white
                  hover:bg-white/10
                  transition
                "
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            <Link
              href="/signin"
              className="text-sm font-medium text-white/90 hover:text-white transition
              rounded-lg
              inline-flex items-center justify-center
                rounded-lg
                bg-[#1172af]
                px-5 py-2.5
                text-sm font-semibold
                text-white
                hover:bg-[#0e5f96]
                transition"
            >
              Sign In
            </Link>

            <Link
              href="/signup"
              className="
                inline-flex items-center justify-center
                rounded-lg
                bg-[#1172af]
                px-5 py-2.5
                text-sm font-semibold
                text-white
                hover:bg-[#0e5f96]
                transition
              "
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
