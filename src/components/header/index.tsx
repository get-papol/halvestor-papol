'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Halvestor logo" width={120} height={32} priority />
        </Link>

        {/* NAV + CTA */}
        <nav className="flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium text-gray-700 hover:text-[#3B82F6] transition">
            Features
          </Link>

          <Link href="#pricing" className="text-sm font-medium text-gray-700 hover:text-[#3B82F6] transition">
            Pricing
          </Link>

          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-xl bg-[#3B82F6] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#2563EB] transition-colors shadow-sm"
          >
            Get the App
          </Link>
        </nav>
      </div>
    </header>
  );
}
