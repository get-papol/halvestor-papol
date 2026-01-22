import Link from 'next/link';
import Image from 'next/image';
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
            px-4 py-3
            bg-[#1172af]
            shadow-lg
          "
        >
          {/* LOGO — MAX SIZE, MATCHES HEADER HEIGHT */}
          <Link href="/" className="flex items-center">
            <div
              className="
                w-48
                h-24
                flex
                items-center
                justify-center
              "
            >
              <Image src="/logo.svg" alt="Halvestor" width={220} height={120} priority className="object-contain" />
            </div>
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-4">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="
                  px-3 py-2
                  rounded-full
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
          <div className="flex items-center gap-3">
            {/* SIGN IN */}
            <Link
              href="/signin"
              className="
                px-3 py-2
                rounded-full
                text-sm font-medium
                text-white/90
                hover:text-white
                hover:bg-white/10
                transition
              "
            >
              Sign In
            </Link>

            {/* PRIMARY CTA */}
            <Link
              href="/signup"
              className="
                inline-flex items-center justify-center
                rounded-full
                bg-[#e6f2fb]
                px-5 py-2.5
                text-sm font-semibold
                text-[#1172af]
                ring-2 ring-white/40
                shadow-md
                hover:bg-[#d9ecfa]
                transition
              "
            >
              Get the App
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
